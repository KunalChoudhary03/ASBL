import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  MapPin,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  Grid,
  List,
  Check,
  ExternalLink,
  Plus,
  Scale,
  X,
  Building,
  ShieldCheck
} from 'lucide-react';
import { ASBL_PROJECTS } from '../data/projectsData';

export default function ProjectsPage({
  onSelectProject,
  onEnquireProject,
  selectedForCompare,
  onToggleCompare,
  onOpenCompare,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [configFilter, setConfigFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const availableLocations = useMemo(() => {
    const locs = new Set(ASBL_PROJECTS.map((p) => p.area));
    return ['all', ...Array.from(locs)];
  }, []);

  const filteredProjects = useMemo(() => {
    return ASBL_PROJECTS.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.area.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || project.statusCategory === statusFilter;

      const matchesConfig =
        configFilter === 'all' || project.configPills.includes(configFilter);

      const matchesLocation =
        locationFilter === 'all' || project.area === locationFilter;

      return matchesSearch && matchesStatus && matchesConfig && matchesLocation;
    });
  }, [searchQuery, statusFilter, configFilter, locationFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setConfigFilter('all');
    setLocationFilter('all');
  };

  return (
    <div className="pt-32 pb-36 min-h-screen bg-obsidian-950 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="ambient-glow top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-champagne-400/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-[11px] font-sans tracking-[0.35em] uppercase text-champagne-400 font-semibold flex items-center gap-2">
            <span className="w-6 h-[1px] bg-champagne-400" />
            Architectural Catalogue
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-ivory-50 leading-tight">
            The 7 Residential Landmarks of <br />
            <span className="italic font-normal gold-gradient-text">Ashoka Builders</span>
          </h1>
          <p className="text-base text-ivory-300/70 font-light leading-relaxed">
            Every ASBL project is individually engineered for its micro-climate, solar orientation, 
            and urban corridor. Explore specifications, verified RERA declarations, and floor plans.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel-gold p-6 rounded-sm border border-champagne-400/20 mb-12 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-champagne-400/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name or micro-location..."
                className="w-full bg-obsidian-900/90 border border-white/10 rounded-sm py-3 pl-10 pr-9 text-xs sm:text-sm text-ivory-100 placeholder:text-ivory-300/40 focus:outline-none focus:border-champagne-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory-300/50 hover:text-ivory-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Status Tabs */}
            <div className="md:col-span-4 flex items-center p-1 bg-obsidian-900/90 border border-white/10 rounded-sm">
              <button
                onClick={() => setStatusFilter('all')}
                className={`flex-1 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all rounded-sm ${
                  statusFilter === 'all'
                    ? 'bg-champagne-400 text-obsidian-950 shadow-sm'
                    : 'text-ivory-300/70 hover:text-ivory-100'
                }`}
              >
                All (7)
              </button>
              <button
                onClick={() => setStatusFilter('ongoing')}
                className={`flex-1 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all rounded-sm ${
                  statusFilter === 'ongoing'
                    ? 'bg-champagne-400 text-obsidian-950 shadow-sm'
                    : 'text-ivory-300/70 hover:text-ivory-100'
                }`}
              >
                Ongoing (4)
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`flex-1 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all rounded-sm ${
                  statusFilter === 'completed'
                    ? 'bg-champagne-400 text-obsidian-950 shadow-sm'
                    : 'text-ivory-300/70 hover:text-ivory-100'
                }`}
              >
                Delivered (3)
              </button>
            </div>

            {/* Location Selector */}
            <div className="md:col-span-3">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-obsidian-900/90 border border-white/10 rounded-sm py-3 px-3 text-xs sm:text-sm text-ivory-100 focus:outline-none focus:border-champagne-400 transition-colors uppercase tracking-wider cursor-pointer"
              >
                <option value="all" className="bg-obsidian-900 text-ivory-100">All Corridors ({ASBL_PROJECTS.length})</option>
                {availableLocations.filter(l => l !== 'all').map((loc) => (
                  <option key={loc} value={loc} className="bg-obsidian-900 text-ivory-100">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Secondary Filter Row: Configuration Pills & View Mode */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-400/80 mr-1">
                BHK Layout:
              </span>
              {['all', '2 BHK', '3 BHK', '4 BHK'].map((cfg) => (
                <button
                  key={cfg}
                  onClick={() => setConfigFilter(cfg)}
                  className={`px-3 py-1 rounded-sm text-xs transition-all uppercase tracking-wider ${
                    configFilter === cfg
                      ? 'bg-champagne-400/20 text-champagne-300 border border-champagne-400/60 font-semibold shadow-sm'
                      : 'text-ivory-300/60 hover:text-ivory-100 border border-transparent'
                  }`}
                >
                  {cfg === 'all' ? 'Any BHK' : cfg}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {(searchQuery || statusFilter !== 'all' || configFilter !== 'all' || locationFilter !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-champagne-400 hover:text-champagne-300 underline font-medium cursor-pointer"
                >
                  Clear Filters
                </button>
              )}

              {/* View Switcher */}
              <div className="flex items-center p-1 bg-obsidian-900 border border-white/10 rounded-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-sm transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-champagne-400 text-obsidian-950'
                      : 'text-ivory-300/60 hover:text-ivory-100'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('editorial')}
                  className={`p-1.5 rounded-sm transition-colors ${
                    viewMode === 'editorial'
                      ? 'bg-champagne-400 text-obsidian-950'
                      : 'text-ivory-300/60 hover:text-ivory-100'
                  }`}
                  title="Editorial List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Results */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 glass-panel rounded-sm border border-white/10 space-y-4">
            <p className="font-serif text-2xl text-ivory-200">No matching developments found</p>
            <p className="text-xs text-ivory-300/60 max-w-md mx-auto">
              Please adjust your search criteria or reset filters to view all 7 landmark developments.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2.5 rounded-sm bg-champagne-400 text-obsidian-950 font-semibold text-xs uppercase tracking-widest"
            >
              Show All 7 Projects
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => {
                const isCompared = selectedForCompare.some((p) => p.id === project.id);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className="group glass-card glass-card-hover rounded-sm overflow-hidden flex flex-col justify-between"
                  >
                    <div
                      className="relative aspect-[16/11] overflow-hidden bg-obsidian-900 cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <img
                        src={project.images.hero}
                        alt={project.name}
                        className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${
                            project.statusCategory === 'completed'
                              ? 'bg-forest-900/90 text-emerald-300 border-emerald-500/40'
                              : 'bg-obsidian-950/80 text-champagne-300 border-champagne-400/40'
                          }`}
                        >
                          {project.statusBadge}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleCompare(project);
                        }}
                        className={`absolute top-4 right-4 z-10 px-2.5 py-1 rounded-sm text-[10px] uppercase tracking-wider font-semibold border backdrop-blur-md transition-all flex items-center gap-1 ${
                          isCompared
                            ? 'bg-champagne-400 text-obsidian-950 border-champagne-400 shadow-md'
                            : 'bg-obsidian-950/70 text-ivory-200/80 border-white/10 hover:border-champagne-400/60'
                        }`}
                        title="Compare project specifications"
                      >
                        {isCompared ? <Check className="w-3 h-3 stroke-[3]" /> : <Plus className="w-3 h-3" />}
                        <span>{isCompared ? 'Compared' : 'Compare'}</span>
                      </button>

                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-ivory-200/90 drop-shadow">
                          <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                          <span className="truncate text-[11px] font-medium">{project.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-2.5">
                        <h3
                          onClick={() => onSelectProject(project)}
                          className="font-serif text-2xl text-ivory-50 group-hover:text-champagne-300 transition-colors cursor-pointer font-light"
                        >
                          {project.name}
                        </h3>
                        <p className="text-xs text-ivory-300/70 font-light line-clamp-2 leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-xs">
                        <div className="p-2.5 rounded-sm bg-obsidian-950/50 border border-white/5">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block mb-0.5">
                            Configuration
                          </span>
                          <span className="font-medium text-ivory-100 truncate block">
                            {project.configuration}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-sm bg-obsidian-950/50 border border-white/5">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-400 block mb-0.5">
                            Handover
                          </span>
                          <span className="font-medium text-ivory-100 truncate block text-[11px]">
                            {project.handoverTimeline.split('(')[0]}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="flex-1 py-2.5 px-3 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-champagne-400/40 text-[11px] font-semibold uppercase tracking-wider text-ivory-200 hover:text-champagne-300 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>Architectural Sheet</span>
                          <ArrowRight className="w-3.5 h-3.5 text-champagne-400" />
                        </button>

                        <button
                          onClick={() => onEnquireProject(project.name)}
                          className="py-2.5 px-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* EDITORIAL LIST VIEW */
          <div className="space-y-6">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group glass-card glass-card-hover rounded-sm p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
                >
                  <div
                    className="relative w-full lg:w-72 aspect-[16/10] rounded-sm overflow-hidden shrink-0 cursor-pointer bg-obsidian-900 border border-white/10"
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.images.hero}
                      alt={project.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-sm text-[9px] font-bold tracking-widest uppercase border ${
                          project.statusCategory === 'completed'
                            ? 'bg-forest-900/90 text-emerald-300 border-emerald-500/40'
                            : 'bg-obsidian-950/80 text-champagne-300 border-champagne-400/40'
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="font-serif text-2xl sm:text-3xl text-ivory-50 group-hover:text-champagne-300 transition-colors cursor-pointer font-light"
                      >
                        {project.name}
                      </h3>
                      <span className="text-xs text-champagne-400 font-medium">
                        {project.tagline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-ivory-300/70 font-light leading-relaxed max-w-2xl">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-ivory-200">
                      <div className="flex items-center gap-1.5 text-champagne-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-ivory-100">{project.location}</span>
                      </div>
                      <div>
                        <span className="text-ivory-300/50 uppercase font-mono text-[10px] mr-1">Config:</span>
                        <span className="text-ivory-100 font-medium">{project.configuration}</span>
                      </div>
                      <div>
                        <span className="text-ivory-300/50 uppercase font-mono text-[10px] mr-1">Handover:</span>
                        <span className="text-ivory-100 font-medium">{project.handoverTimeline}</span>
                      </div>
                      <div>
                        <span className="text-ivory-300/50 uppercase font-mono text-[10px] mr-1">Clubhouse:</span>
                        <span className="text-champagne-300 font-mono">{project.clubhouseSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center gap-3 w-full lg:w-44 shrink-0">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 sm:w-full py-2.5 px-4 rounded-sm bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-champagne-400/50 text-xs font-semibold uppercase tracking-wider text-ivory-100 hover:text-champagne-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-champagne-400" />
                    </button>

                    <button
                      onClick={() => onEnquireProject(project.name)}
                      className="flex-1 sm:w-full py-2.5 px-4 rounded-sm bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* Floating Compare Toolbar */}
      <AnimatePresence>
        {selectedForCompare.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-obsidian-900/95 border border-champagne-400/50 rounded-full px-6 py-3 shadow-luxury backdrop-blur-xl flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-champagne-400" />
              <span className="text-xs text-ivory-100 font-medium">
                {selectedForCompare.length} Project{selectedForCompare.length > 1 ? 's' : ''} Selected
              </span>
            </div>

            <div className="h-4 w-[1px] bg-white/20" />

            <button
              onClick={onOpenCompare}
              className="px-4 py-1.5 rounded-full bg-champagne-400 hover:bg-champagne-300 text-obsidian-950 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              Compare Specifications
            </button>

            <button
              onClick={() => selectedForCompare.forEach(p => onToggleCompare(p))}
              className="text-ivory-300/50 hover:text-ivory-100 text-xs underline"
            >
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
