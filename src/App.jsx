import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProjectsShowcase from './components/ProjectsShowcase';
import BrandStory from './components/BrandStory';
import HyderabadCorridors from './components/HyderabadCorridors';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CompareModal from './components/CompareModal';
import { ASBL_PROJECTS } from './data/projectsData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefilledProject, setPrefilledProject] = useState('');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Handle Enquiry Trigger from anywhere
  const handleOpenEnquiry = (projectName = '') => {
    if (projectName) {
      setPrefilledProject(projectName);
    }
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to projects section
  const handleExploreProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle compare selection
  const handleToggleCompare = (project) => {
    setSelectedForCompare((prev) => {
      const exists = prev.find((p) => p.id === project.id);
      if (exists) {
        return prev.filter((p) => p.id !== project.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 projects at a time.');
        return prev;
      }
      return [...prev, project];
    });
  };

  const handleRemoveCompare = (projectId) => {
    setSelectedForCompare((prev) => prev.filter((p) => p.id !== projectId));
  };

  // Select project by exact name
  const handleSelectProjectByName = (name) => {
    const found = ASBL_PROJECTS.find((p) => p.name.toLowerCase() === name.toLowerCase());
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-ivory-100 font-sans selection:bg-champagne-400 selection:text-obsidian-950">
      {/* 1. Bespoke Luxury Loader */}
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}

      {/* 2. Main Navigation Bar */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 3. Hero Section */}
      <Hero
        onExploreClick={handleExploreProjects}
        onEnquiryClick={() => handleOpenEnquiry()}
      />

      {/* 4. Introduction & Residential Philosophy */}
      <Introduction />

      {/* 5. The 7 Landmark Projects Showcase (Core Component) */}
      <ProjectsShowcase
        onSelectProject={(project) => setSelectedProject(project)}
        onEnquireProject={(projectName) => handleOpenEnquiry(projectName)}
        selectedForCompare={selectedForCompare}
        onToggleCompare={handleToggleCompare}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* 6. Brand Story & Engineering Pillars */}
      <BrandStory onEnquiryClick={() => handleOpenEnquiry()} />

      {/* 7. Strategic Hyderabad Corridors */}
      <HyderabadCorridors
        onSelectProjectByName={handleSelectProjectByName}
      />

      {/* 8. Advisory & Private Visit Enquiry Form */}
      <EnquirySection
        prefilledProject={prefilledProject}
        onResetPrefill={() => setPrefilledProject('')}
      />

      {/* 9. Editorial Footer */}
      <Footer
        onSelectProjectByName={handleSelectProjectByName}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 10. Deep-Dive Project Modal / Spec Sheet */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquireProject={(projectName) => handleOpenEnquiry(projectName)}
      />

      {/* 11. Side-by-Side Comparison Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedProjects={selectedForCompare}
        onRemoveProject={handleRemoveCompare}
        onSelectDetail={(p) => setSelectedProject(p)}
        onEnquireProject={(projectName) => handleOpenEnquiry(projectName)}
      />
    </div>
  );
}
