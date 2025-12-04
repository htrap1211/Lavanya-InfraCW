<script setup>
import { ref, onMounted, computed } from 'vue';
import { useScroll, useWindowSize, useIntersectionObserver } from '@vueuse/core';

const { y } = useScroll(window);
const { width } = useWindowSize();

// State
const isScrolled = ref(false);
const isMenuOpen = ref(false);
const currentSection = ref('home');

// Computed
const isMobile = computed(() => width.value < 992);

// Navigation items
const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

// Get icon class for each section
const getIconClass = (sectionId) => {
  const icons = {
    home: 'fas fa-home',
    services: 'fas fa-briefcase',
    projects: 'fas fa-th-large',
    about: 'fas fa-info-circle',
    contact: 'fas fa-envelope'
  };
  return icons[sectionId] || 'fas fa-circle';
};

// Methods
const updateUrlHash = (sectionId) => {
  if (sectionId === 'home') {
    history.pushState(null, null, ' ');
  } else {
    history.pushState(null, null, `#${sectionId}`);
  }
};

// Handle navigation click
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
    currentSection.value = sectionId;
    updateUrlHash(sectionId);
    
    if (isMenuOpen.value) {
      isMenuOpen.value = false;
      document.body.style.overflow = '';
    }
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Handle keyboard navigation
const onKeyDown = (event, action) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  } else if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu();
    const menuButton = document.querySelector('.mobile-menu-toggle');
    if (menuButton) menuButton.focus();
  } else if (event.key === 'Tab' && isMenuOpen.value) {
    const focusableElements = Array.from(
      document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};

// Update scroll state
const updateScroll = () => {
  isScrolled.value = y.value > 20;
};

// Set up intersection observer for section highlighting
const setupIntersectionObserver = () => {
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const { stop } = useIntersectionObserver(
      section,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          currentSection.value = section.id;
          updateUrlHash(section.id);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
      }
    );
    
    return stop;
  });
};

// Initialize
onMounted(() => {
  // Set initial section based on URL hash
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (navItems.some(item => item.id === hash)) {
      currentSection.value = hash;
      setTimeout(() => scrollToSection(hash), 100);
    }
  }
  
  // Set up intersection observer
  setTimeout(setupIntersectionObserver, 500);
  
  // Add scroll listener
  window.addEventListener('scroll', updateScroll);
  
  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    const nav = document.querySelector('.nav-menu');
    const button = document.querySelector('.mobile-menu-toggle');
    if (isMenuOpen.value && nav && !nav.contains(event.target) && button && !button.contains(event.target)) {
      closeMenu();
    }
  };
  
  document.addEventListener('click', handleClickOutside);
  
  // Add keyboard event listeners
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      closeMenu();
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  
  // Cleanup
  return () => {
    window.removeEventListener('scroll', updateScroll);
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  };
});

// Watch for URL hash changes
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  if (hash && navItems.some(item => item.id === hash)) {
    currentSection.value = hash;
    scrollToSection(hash);
  } else if (!hash) {
    currentSection.value = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
</script>

<template>
  <!-- Hamburger Menu Button - Desktop & Tablet Only -->
  <button 
    class="mobile-menu-toggle" 
    @click.stop="toggleMenu"
    :aria-expanded="isMenuOpen"
    aria-label="Toggle navigation menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
  
  <!-- Side Menu - Separate from pill navigation -->
  <nav class="side-menu" :class="{ 'show': isMenuOpen }">
    <ul @click.stop>
      <li v-for="item in navItems" :key="item.id">
        <a 
          :href="`#${item.id}`" 
          @click.prevent="scrollToSection(item.id)"
          class="side-link"
          :class="{ 'active': currentSection === item.id }"
        >
          <i :class="getIconClass(item.id)" class="side-icon"></i>
          <span class="side-label">{{ item.label }}</span>
        </a>
      </li>
      <li>
        <a href="#contact" class="btn btn-primary btn-sm" @click.prevent="scrollToSection('contact')">
          Get Started
        </a>
      </li>
    </ul>
  </nav>
  
  <!-- Floating Pill Navigation - Always visible at bottom -->
  <header :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav-menu">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <a 
              :href="`#${item.id}`" 
              @click.prevent="scrollToSection(item.id)"
              class="nav-link"
              :class="{ 'active': currentSection === item.id }"
            >
              <i :class="getIconClass(item.id)" class="nav-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Floating Pill Navigation - Bottom Center */
header {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: fit-content;
  max-width: calc(100% - 80px);
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(215, 199, 163, 0.25);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
              0 0 0 1px rgba(215, 199, 163, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  padding: 14px 24px;
  animation: pillFloat 6s ease-in-out infinite;
}

/* Subtle floating animation */
@keyframes pillFloat {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-2px);
  }
}

header.scrolled {
  background: rgba(17, 17, 17, 0.98);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7), 
              0 0 0 1px rgba(215, 199, 163, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.logo {
  display: none;
}

/* Pill Navigation - Default visible at bottom */
.nav-menu {
  position: static;
  width: auto;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 8px;
}

.nav-link {
  color: #F2F2F0;
  text-decoration: none;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: var(--font-text);
  border-radius: 50%;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.nav-label {
  display: none;
}

.nav-icon {
  font-size: 18px;
  color: rgba(215, 199, 163, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

/* Hover effect with magnetic attraction */
.nav-link:hover {
  transform: translateY(-3px);
}

.nav-link:hover .nav-icon {
  color: rgba(215, 199, 163, 1);
  transform: scale(1.2);
}

/* Active state with glow and breathing animation */
.nav-link.active {
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  box-shadow: 0 4px 20px rgba(215, 199, 163, 0.5),
              0 0 30px rgba(215, 199, 163, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(215, 199, 163, 0.5),
                0 0 30px rgba(215, 199, 163, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 6px 24px rgba(215, 199, 163, 0.6),
                0 0 40px rgba(215, 199, 163, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
}

.nav-link.active .nav-icon {
  color: #111111;
  font-size: 19px;
  animation: iconPulse 3s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Click/Active feedback - Haptic bounce */
.nav-link:active {
  transform: translateY(-1px) scale(0.95);
  transition: all 0.1s ease;
}

/* Ripple effect on click */
.nav-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(215, 199, 163, 0.4);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  opacity: 0;
}

.nav-link:active::before {
  width: 100px;
  height: 100px;
  opacity: 0;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
}

/* Smooth transition between active states */
.nav-link {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              background 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hamburger Menu Toggle - Desktop & Tablet Only */
.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 52px;
  height: 52px;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(215, 199, 163, 0.25);
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
  position: fixed;
  top: 24px;
  right: 32px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
              0 0 0 1px rgba(215, 199, 163, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.mobile-menu-toggle:hover {
  background: rgba(17, 17, 17, 1);
  border-color: rgba(215, 199, 163, 0.4);
  transform: scale(1.05);
}



.mobile-menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: rgba(215, 199, 163, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  border-radius: 2px;
}

.mobile-menu-toggle:hover span {
  background: #D7C7A3;
}

.mobile-menu-toggle[aria-expanded="true"] {
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-color: transparent;
  box-shadow: 0 8px 32px rgba(215, 199, 163, 0.5), 
              0 0 0 1px rgba(215, 199, 163, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.mobile-menu-toggle[aria-expanded="true"] span {
  background: #111111;
}

.mobile-menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Backdrop overlay when menu is open */
.side-menu.show::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: -1;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Side Menu - Premium Design */
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(17, 17, 17, 0.98) 0%, rgba(28, 28, 30, 0.98) 100%);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  padding: 120px 48px 48px;
  z-index: 1001;
  border-left: 1px solid rgba(215, 199, 163, 0.25);
  box-shadow: -12px 0 48px rgba(0, 0, 0, 0.8),
              inset 1px 0 0 rgba(215, 199, 163, 0.1);
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}

.side-menu.show {
  right: 0;
}

/* Custom scrollbar for side menu */
.side-menu::-webkit-scrollbar {
  width: 6px;
}

.side-menu::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.side-menu::-webkit-scrollbar-thumb {
  background: rgba(215, 199, 163, 0.3);
  border-radius: 3px;
}

.side-menu::-webkit-scrollbar-thumb:hover {
  background: rgba(215, 199, 163, 0.5);
}

.side-menu ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  list-style: none;
  margin: 0;
  padding: 0;
}

.side-menu ul li {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInItem 0.4s ease forwards;
}

.side-menu ul li:nth-child(1) { animation-delay: 0.1s; }
.side-menu ul li:nth-child(2) { animation-delay: 0.15s; }
.side-menu ul li:nth-child(3) { animation-delay: 0.2s; }
.side-menu ul li:nth-child(4) { animation-delay: 0.25s; }
.side-menu ul li:nth-child(5) { animation-delay: 0.3s; }
.side-menu ul li:nth-child(6) { animation-delay: 0.35s; }

@keyframes slideInItem {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.side-menu ul li:last-child {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(215, 199, 163, 0.15);
}

.side-link {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 18px 28px;
  border-radius: 16px;
  background: rgba(215, 199, 163, 0.03);
  border: 1px solid rgba(215, 199, 163, 0.08);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.side-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #D7C7A3 0%, #c4b08f 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.side-link:hover::before {
  transform: scaleY(1);
}

.side-label {
  font-size: 17px;
  font-weight: 600;
  color: #F2F2F0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-text);
  transition: all 0.3s ease;
}

.side-icon {
  font-size: 22px;
  color: rgba(215, 199, 163, 0.6);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.side-link:hover {
  background: rgba(215, 199, 163, 0.08);
  border-color: rgba(215, 199, 163, 0.2);
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.side-link:hover .side-icon {
  color: rgba(215, 199, 163, 1);
  transform: scale(1.1) rotate(5deg);
}

.side-link:hover .side-label {
  color: #D7C7A3;
}

.side-link.active {
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(215, 199, 163, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateX(8px);
}

.side-link.active::before {
  display: none;
}

.side-link.active .side-label {
  color: #111111;
  font-weight: 700;
}

.side-link.active .side-icon {
  color: #111111;
  transform: scale(1.1);
}

.side-link:active {
  transform: translateX(6px) scale(0.98);
}

/* Get Started button in side menu */
.side-menu .btn {
  width: 100%;
  padding: 18px 32px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(215, 199, 163, 0.3);
}

.side-menu .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(215, 199, 163, 0.4);
}

/* Tablet optimizations */
@media (max-width: 1068px) {
  header {
    bottom: 20px;
    max-width: calc(100% - 60px);
    padding: 12px 20px;
  }
  
  .nav-link {
    width: 46px;
    height: 46px;
  }
  
  .nav-icon {
    font-size: 17px;
  }
  
  .nav-link.active .nav-icon {
    font-size: 18px;
  }
  
  .mobile-menu-toggle {
    top: 20px;
    right: 24px;
    width: 48px;
    height: 48px;
  }
  
  .mobile-menu-toggle span {
    width: 18px;
  }
  
  .side-menu {
    max-width: 360px;
    padding: 90px 32px 32px;
  }
}

@media (max-width: 734px) {
  header {
    position: fixed;
    bottom: 24px;
    top: auto;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    max-width: calc(100% - 48px);
    background: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border: 1px solid rgba(215, 199, 163, 0.25);
    border-radius: 50px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                0 0 0 1px rgba(215, 199, 163, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    padding: 14px 24px;
  }
  
  header.scrolled {
    bottom: 24px;
    top: auto;
    background: rgba(17, 17, 17, 0.98);
  }
  
  .container {
    padding: 0;
    height: auto;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
  
  .logo {
    display: none;
  }
  
  /* Hide hamburger and side menu on mobile */
  .mobile-menu-toggle {
    display: none !important;
  }
  
  .side-menu {
    display: none !important;
  }
  
  .nav-menu {
    position: static !important;
    width: auto !important;
    height: auto !important;
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0 !important;
    border: none !important;
    max-width: none !important;
    box-shadow: none !important;
    animation: none !important;
  }
  
  .nav-menu.show {
    position: static !important;
    width: auto !important;
    height: auto !important;
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0 !important;
    border: none !important;
    max-width: none !important;
    box-shadow: none !important;
    animation: none !important;
  }
  
  .nav-menu ul,
  .nav-menu.show ul {
    flex-direction: row !important;
    gap: 8px !important;
    align-items: center !important;
    margin: 0;
    padding: 0;
  }
  
  .nav-menu ul li,
  .nav-menu.show ul li {
    margin: 0;
    padding: 0;
  }
  

  
  .nav-link,
  .nav-menu.show .nav-link {
    padding: 0 !important;
    border-radius: 50% !important;
    background: transparent !important;
    border: none !important;
    width: 44px !important;
    height: 44px !important;
    justify-content: center !important;
    gap: 0 !important;
  }
  
  .nav-label,
  .nav-menu.show .nav-label {
    display: none !important;
  }
  
  .nav-icon,
  .nav-menu.show .nav-icon {
    font-size: 16px !important;
    color: rgba(215, 199, 163, 0.7) !important;
  }
  
  .nav-link.active,
  .nav-menu.show .nav-link.active {
    background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%) !important;
    box-shadow: 0 4px 16px rgba(215, 199, 163, 0.4) !important;
  }
  
  .nav-link.active .nav-icon,
  .nav-menu.show .nav-link.active .nav-icon {
    color: #111111 !important;
    font-size: 17px !important;
  }
  
  .nav-link:hover .nav-icon,
  .nav-menu.show .nav-link:hover .nav-icon {
    color: rgba(215, 199, 163, 1) !important;
    transform: scale(1.15) !important;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    text-transform: none;
    letter-spacing: 0;
  }
  
  .nav-label {
    display: none;
  }
  
  .nav-icon {
    font-size: 16px;
    color: rgba(215, 199, 163, 0.7);
    transition: all 0.3s ease;
  }
  
  .nav-link:hover .nav-icon {
    color: rgba(215, 199, 163, 1);
    transform: scale(1.15);
  }
  
  .nav-link.active {
    background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
    box-shadow: 0 4px 16px rgba(215, 199, 163, 0.4);
  }
  
  .nav-link.active .nav-icon {
    color: #111111;
    font-size: 17px;
  }
  
  .nav-link::before {
    display: none;
  }
  
  .nav-link::after {
    display: none;
  }
}

/* iPhone-specific navbar optimizations */
@media (max-width: 430px) {
  header {
    bottom: 20px;
    max-width: calc(100% - 40px);
    padding: 12px 20px;
    border-radius: 40px;
  }
  
  .nav-menu ul {
    gap: 6px;
  }
  
  .nav-link {
    width: 40px;
    height: 40px;
  }
  
  .nav-icon {
    font-size: 15px;
  }
  
  .nav-link.active .nav-icon {
    font-size: 16px;
  }
}

@media (max-width: 393px) {
  header {
    bottom: 18px;
    max-width: calc(100% - 36px);
    padding: 11px 18px;
  }
  
  .nav-menu ul {
    gap: 5px;
  }
  
  .nav-link {
    width: 38px;
    height: 38px;
  }
  
  .nav-icon {
    font-size: 14px;
  }
  
  .nav-link.active .nav-icon {
    font-size: 15px;
  }
}

@media (max-width: 360px) {
  header {
    bottom: 16px;
    max-width: calc(100% - 32px);
    padding: 10px 16px;
  }
  
  .nav-menu ul {
    gap: 4px;
  }
  
  .nav-link {
    width: 36px;
    height: 36px;
  }
  
  .nav-icon {
    font-size: 13px;
  }
  
  .nav-link.active .nav-icon {
    font-size: 14px;
  }
}
</style>
