<template>
  <section id="projects" class="section-white">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Portfolio</h2>
        <p class="section-subtitle">
          Explore our diverse portfolio of completed projects that showcase our expertise and commitment to excellence in construction.
        </p>
      </div>
      
      <div class="projects-grid">
        <div 
          class="project-card" 
          v-for="(project, index) in projects" 
          :key="project.id"
          :data-index="index"
          :class="{ 'project-visible': project.visible }"
          @click="openLightbox(project)"
        >
          <div class="project-image">
            <img 
              :src="project.image" 
              :alt="project.title"
              loading="lazy"
            />
            <div class="project-overlay">
              <div class="project-info">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-category">{{ project.category }}</p>
                <div class="project-link">
                  <i class="fas fa-search-plus"></i>
                  View Full Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Lightbox Modal -->
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
          <div class="lightbox-content" @click.stop>
            <button class="lightbox-close" @click="closeLightbox" aria-label="Close lightbox">
              <i class="fas fa-times"></i>
            </button>
            <img :src="currentImage" :alt="currentTitle" class="lightbox-image" />
            <div class="lightbox-info">
              <h3 class="lightbox-title">{{ currentTitle }}</h3>
              <p class="lightbox-category">{{ currentCategory }}</p>
            </div>
          </div>
        </div>
      </Transition>
      
      <!-- Horizontal Image Slideshow using CSS Animation -->
      <div class="slideshow-section">
        <div class="slideshow-container">
          <div class="slideshow-track">
            <div 
              class="slideshow-item" 
              v-for="(image, index) in slideshowImages" 
              :key="index"
            >
              <img :src="image" :alt="`Project ${index + 1}`" loading="lazy" />
            </div>
            <!-- Duplicate images for seamless loop -->
            <div 
              class="slideshow-item" 
              v-for="(image, index) in slideshowImages" 
              :key="`duplicate-${index}`"
            >
              <img :src="image" :alt="`Project ${index + 1}`" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Luxury Apartments',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  },
  {
    id: 2,
    title: 'Tech Hub Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  },
  {
    id: 3,
    title: 'City Center Mall',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  },
  {
    id: 4,
    title: 'Beachfront Resort',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  },
  {
    id: 5,
    title: 'Hillside Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  },
  {
    id: 6,
    title: 'Riverfront Bridge',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    visible: false
  }
]);

// Slideshow images - using all 16 of your images
const slideshowImages = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  '/images/image14.jpg',
  '/images/image15.jpg',
  '/images/image16.jpg'
];

// Lightbox state
const lightboxOpen = ref(false);
const currentImage = ref('');
const currentTitle = ref('');
const currentCategory = ref('');

const openLightbox = (project) => {
  currentImage.value = project.image;
  currentTitle.value = project.title;
  currentCategory.value = project.category;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

// Handle keyboard events
const handleKeydown = (e) => {
  if (e.key === 'Escape' && lightboxOpen.value) {
    closeLightbox();
  }
};

// Add event listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const projectIndex = parseInt(entry.target.dataset.index);
            projects.value[projectIndex].visible = true;
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
}

.project-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0;
  transform: translateY(50px) scale(0.9);
}

.project-card.project-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.project-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  border-color: rgba(215, 199, 163, 0.6);
}

.project-card:active {
  transform: translateY(-12px) scale(1.01);
}

.project-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: brightness(0.95);
}

.project-card:hover .project-image img {
  transform: scale(1.15);
  filter: brightness(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(17, 17, 17, 0.6) 50%,
    rgba(17, 17, 17, 0.95) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 32px;
  opacity: 0;
  transition: all 0.4s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
  color: white;
  width: 100%;
}

.project-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.17;
  margin-bottom: 8px;
  font-family: var(--font-display);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-category {
  font-size: 17px;
  opacity: 0.9;
  margin-bottom: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: slideInUp 0.5s ease-out 0.1s both;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.2s ease;
}

.project-link:hover {
  color: var(--text-primary);
  text-decoration: none;
}

.project-link i {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.project-link:hover i {
  transform: translateX(4px);
}

/* Responsive Design */
/* iPad Pro and tablets */
@media (max-width: 1068px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .project-title {
    font-size: 24px;
  }
  
  .project-overlay {
    padding: 24px;
  }
}

/* iPad and smaller tablets */
@media (max-width: 834px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .project-title {
    font-size: 22px;
  }
  
  .project-category {
    font-size: 15px;
  }
  
  .project-overlay {
    padding: 20px;
  }
}

/* Mobile landscape and large phones */
@media (max-width: 734px) {
  .projects-grid {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  
  .project-card {
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    border: none;
    background: rgba(255, 255, 255, 0.6);
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }
  
  .project-card:nth-child(1) { animation-delay: 0.1s; }
  .project-card:nth-child(2) { animation-delay: 0.2s; }
  .project-card:nth-child(3) { animation-delay: 0.3s; }
  .project-card:nth-child(4) { animation-delay: 0.4s; }
  .project-card:nth-child(5) { animation-delay: 0.5s; }
  .project-card:nth-child(6) { animation-delay: 0.6s; }
  
  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  .project-card:active {
    transform: scale(0.98);
  }
  
  .project-image {
    aspect-ratio: 4/3;
    border-radius: 0;
    overflow: hidden;
    position: relative;
  }
  
  .project-image img {
    border-radius: 0;
    filter: brightness(0.92);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
    filter: brightness(1);
  }
  
  .project-overlay {
    padding: 24px;
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    position: absolute;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    display: flex;
    align-items: flex-end;
  }
  
  .project-info {
    color: white;
    width: 100%;
  }
  
  .project-category {
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 8px;
    color: #D7C7A3;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .project-title {
    font-size: 22px;
    line-height: 1.25;
    color: white;
    font-weight: 700;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 12px;
    padding: 8px 16px;
    background: rgba(215, 199, 163, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    font-size: 13px;
    color: white;
    border: 1px solid rgba(215, 199, 163, 0.3);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .project-card:active .project-link {
    transform: scale(0.95);
    background: rgba(215, 199, 163, 0.35);
  }
  
  .project-link i {
    font-size: 12px;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover .project-link i {
    transform: translateX(2px);
  }
}

/* iPhone 14 Pro Max, 14 Plus (430px) */
@media (max-width: 430px) {
  .projects-grid {
    gap: 32px;
  }
  
  .project-card {
    border-radius: 20px;
  }
  
  .project-overlay {
    padding: 20px;
  }
  
  .project-title {
    font-size: 20px;
  }
  
  .project-category {
    font-size: 10px;
    letter-spacing: 1.8px;
  }
  
  .project-link {
    padding: 7px 14px;
    font-size: 12px;
    margin-top: 10px;
  }
}

/* iPhone 14 Pro, 13 Pro (393px) */
@media (max-width: 393px) {
  .projects-grid {
    gap: 28px;
  }
  
  .project-card {
    border-radius: 18px;
  }
  
  .project-overlay {
    padding: 18px;
  }
  
  .project-title {
    font-size: 19px;
  }
  
  .project-category {
    font-size: 10px;
    letter-spacing: 1.6px;
  }
  
  .project-link {
    padding: 6px 12px;
    font-size: 11px;
  }
}

/* iPhone SE and smaller (375px and below) */
@media (max-width: 375px) {
  .projects-grid {
    gap: 24px;
  }
  
  .project-card {
    border-radius: 16px;
  }
  
  .project-overlay {
    padding: 16px;
  }
  
  .project-title {
    font-size: 18px;
  }
  
  .project-category {
    font-size: 9px;
    letter-spacing: 1.5px;
  }
  
  .project-link {
    padding: 6px 12px;
    font-size: 11px;
    margin-top: 8px;
  }
}

/* CSS Slideshow Styles */
.slideshow-section {
  margin-top: 80px;
  overflow: hidden;
}

.slideshow-container {
  width: 100%;
  overflow: hidden;
}

.slideshow-track {
  display: flex;
  width: fit-content;
  animation: slide 60s linear infinite;
}

.slideshow-item {
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  margin-right: 16px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: transform 0.3s ease;
}

.slideshow-item:hover {
  transform: scale(1.05);
  animation-play-state: paused;
}

.slideshow-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Responsive slideshow */
@media (max-width: 768px) {
  .slideshow-item {
    width: 280px;
    height: 180px;
    margin-right: 16px;
    border-radius: 16px;
  }
  
  .slideshow-section {
    margin-top: 64px;
    padding: 0 20px;
  }
}

@media (max-width: 430px) {
  .slideshow-item {
    width: 240px;
    height: 160px;
    margin-right: 12px;
    border-radius: 12px;
  }
  
  .slideshow-section {
    margin-top: 48px;
    padding: 0 16px;
  }
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
}

.lightbox-content {
  position: relative;
  max-width: 1200px;
  max-height: 90vh;
  cursor: default;
  animation: lightboxZoom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes lightboxZoom {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lightbox-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  width: 48px;
  height: 48px;
  background: rgba(215, 199, 163, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(215, 199, 163, 0.3);
  border-radius: 50%;
  color: #F2F2F0;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: #D7C7A3;
  color: #111111;
  transform: rotate(90deg) scale(1.1);
}

.lightbox-info {
  margin-top: 24px;
  text-align: center;
}

.lightbox-title {
  font-size: 32px;
  font-weight: 700;
  color: #F2F2F0;
  margin-bottom: 8px;
}

.lightbox-category {
  font-size: 18px;
  color: #D7C7A3;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .lightbox-close {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  
  .lightbox-title {
    font-size: 24px;
  }
  
  .lightbox-category {
    font-size: 14px;
  }
}
</style>