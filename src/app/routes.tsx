import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Interests } from "./pages/Interests";
import { Passions } from "./pages/Passions";
import { Certifications } from "./pages/Certifications";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "resume", element: <Resume /> },
        { path: "skills", element: <Skills /> },
        { path: "projects", element: <Projects /> },
        { path: "experience", element: <Experience /> },
        { path: "certifications", element: <Certifications /> },
        { path: "interests", element: <Interests /> },
        { path: "passions", element: <Passions /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);