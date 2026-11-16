import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CompareModal from './components/CompareModal';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import LocationsPage from './pages/LocationsPage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';

import { ASBL_PROJECTS } from './data/projectsData';

function AppContent({
  isLoading,
  setIsLoading,
  selectedProject,
  setSelectedProject,
  prefilledProject,
  setPrefilledProject,
  selectedForCompare,
  setSelectedForCompare,
  isCompareOpen,
  setIsCompareOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleCompare = (project) => {
    setSelectedForCompare((prev) => {
      const exists = prev.find((p) => p.id === project.id);
      if (exists) {
        return prev.filter((p) => p.id !== project.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 projects side-by-side.');
        return prev;
      }
      return [...prev, project];
    });
  };

  const handleRemoveCompare = (projectId) => {
    setSelectedForCompare((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleSelectProjectByName = (name) => {
    const found = ASBL_PROJECTS.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleEnquireProject = (projectName) => {
    setPrefilledProject(projectName);
    navigate('/contact');
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-ivory-100 font-sans selection:bg-champagne-400 selection:text-obsidian-950">
      
      {/* Enhanced Cinematic Preloader */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Routed Pages with Fluid Motion */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Routes location={location}>
              <Route
                path="/"
                element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />}
              />
              <Route
                path="/projects"
                element={
                  <ProjectsPage
                    onSelectProject={(p) => setSelectedProject(p)}
                    onEnquireProject={handleEnquireProject}
                    selectedForCompare={selectedForCompare}
                    onToggleCompare={handleToggleCompare}
                    onOpenCompare={() => setIsCompareOpen(true)}
                  />
                }
              />
              <Route path="/architecture" element={<ArchitecturePage />} />
              <Route
                path="/locations"
                element={
                  <LocationsPage
                    onSelectProjectByName={(name) => handleSelectProjectByName(name)}
                  />
                }
              />
              <Route path="/philosophy" element={<PhilosophyPage />} />
              <Route
                path="/contact"
                element={
                  <ContactPage
                    prefilledProject={prefilledProject}
                    onResetPrefill={() => setPrefilledProject('')}
                  />
                }
              />
              <Route
                path="*"
                element={<HomePage onSelectProject={(p) => setSelectedProject(p)} />}
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onSelectProjectByName={handleSelectProjectByName} />

      {/* Deep-Dive Architectural Spec Sheet Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquireProject={(projectName) => {
          setSelectedProject(null);
          handleEnquireProject(projectName);
        }}
      />

      {/* Side-by-Side Comparison Matrix Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedProjects={selectedForCompare}
        onRemoveProject={handleRemoveCompare}
        onSelectDetail={(p) => setSelectedProject(p)}
        onEnquireProject={(projectName) => {
          setIsCompareOpen(false);
          handleEnquireProject(projectName);
        }}
      />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefilledProject, setPrefilledProject] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <Router>
      <AppContent
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        prefilledProject={prefilledProject}
        setPrefilledProject={setPrefilledProject}
        selectedForCompare={selectedForCompare}
        setSelectedForCompare={setSelectedForCompare}
        isCompareOpen={isCompareOpen}
        setIsCompareOpen={setIsCompareOpen}
      />
    </Router>
  );
}
