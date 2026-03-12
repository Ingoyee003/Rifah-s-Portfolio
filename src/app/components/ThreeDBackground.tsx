import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const geometryShapesRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Get theme
    const isDark = document.documentElement.classList.contains("dark");

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: isDark ? 0x88ccff : 0x4a90e2,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // 3D Geometric shapes
    const shapesGroup = new THREE.Group();
    geometryShapesRef.current = shapesGroup;
    scene.add(shapesGroup);

    // Create wireframe geometric shapes
    const shapes = [
      // Torus
      {
        geometry: new THREE.TorusGeometry(3, 0.5, 16, 100),
        position: [-15, 10, -20],
        rotation: [0, 0, 0],
      },
      // Octahedron
      {
        geometry: new THREE.OctahedronGeometry(2.5),
        position: [15, -8, -15],
        rotation: [0, 0, 0],
      },
      // Icosahedron
      {
        geometry: new THREE.IcosahedronGeometry(2),
        position: [-12, -10, -25],
        rotation: [0, 0, 0],
      },
      // Torus Knot
      {
        geometry: new THREE.TorusKnotGeometry(2, 0.5, 100, 16),
        position: [10, 12, -30],
        rotation: [0, 0, 0],
      },
      // Dodecahedron
      {
        geometry: new THREE.DodecahedronGeometry(2),
        position: [0, -5, -20],
        rotation: [0, 0, 0],
      },
    ];

    const shapeMeshes: THREE.Mesh[] = [];

    shapes.forEach((shape) => {
      const material = new THREE.MeshBasicMaterial({
        color: isDark ? 0x6366f1 : 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.3 : 0.25,
      });
      const mesh = new THREE.Mesh(shape.geometry, material);
      mesh.position.set(...shape.position);
      mesh.rotation.set(...shape.rotation);
      shapesGroup.add(mesh);
      shapeMeshes.push(mesh);

      // GSAP animation for each shape
      gsap.to(mesh.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: 20 + Math.random() * 10,
        repeat: -1,
        ease: "none",
      });

      gsap.to(mesh.position, {
        y: mesh.position.y + (Math.random() - 0.5) * 10,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Floating lines/connections
    const linesGroup = new THREE.Group();
    scene.add(linesGroup);

    for (let i = 0; i < 30; i++) {
      const points = [];
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      const endPoint = new THREE.Vector3(
        startPoint.x + (Math.random() - 0.5) * 20,
        startPoint.y + (Math.random() - 0.5) * 20,
        startPoint.z + (Math.random() - 0.5) * 20
      );
      points.push(startPoint, endPoint);

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: isDark ? 0x60a5fa : 0xa78bfa,
        transparent: true,
        opacity: isDark ? 0.15 : 0.1,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      linesGroup.add(line);

      // Animate line opacity
      gsap.to(lineMaterial, {
        opacity: isDark ? 0.3 : 0.2,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
      }

      // Camera follows mouse slightly
      gsap.to(camera.position, {
        x: mouseX * 2,
        y: mouseY * 2,
        duration: 2,
        ease: "power2.out",
      });

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Theme change observer
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      
      // Update particle colors
      if (particlesMaterial) {
        gsap.to(particlesMaterial, {
          opacity: isDarkNow ? 0.6 : 0.4,
          duration: 0.5,
        });
        particlesMaterial.color.setHex(isDarkNow ? 0x88ccff : 0x4a90e2);
      }

      // Update shape colors
      shapeMeshes.forEach((mesh) => {
        const material = mesh.material as THREE.MeshBasicMaterial;
        gsap.to(material, {
          opacity: isDarkNow ? 0.3 : 0.25,
          duration: 0.5,
        });
        material.color.setHex(isDarkNow ? 0x6366f1 : 0x8b5cf6);
      });

      // Update line colors
      linesGroup.children.forEach((line) => {
        const lineMesh = line as THREE.Line;
        const material = lineMesh.material as THREE.LineBasicMaterial;
        material.color.setHex(isDarkNow ? 0x60a5fa : 0xa78bfa);
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.clear();
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach((shape) => shape.geometry.dispose());
      shapeMeshes.forEach((mesh) => {
        const material = mesh.material as THREE.Material;
        material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
