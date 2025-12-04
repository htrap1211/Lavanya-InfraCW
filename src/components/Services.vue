<template>
  <section id="services" class="section-gray">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          Comprehensive construction and infrastructure solutions designed to meet your project needs with uncompromising quality and innovation.
        </p>
      </div>
      
      <div class="services-grid">
        <div 
          class="service-card" 
          v-for="(service, index) in services" 
          :key="service.id"
          :data-index="index"
          :class="{ 'service-visible': service.visible }"
        >
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const services = ref([
  {
    id: 1,
    icon: 'fas fa-home',
    title: 'Residential Construction',
    description: 'Custom home building, renovations, and residential developments designed to meet your unique lifestyle needs.',
    visible: false
  },
  {
    id: 2,
    icon: 'fas fa-building',
    title: 'Commercial Projects',
    description: 'Office buildings, retail spaces, and commercial complexes built with efficiency and functionality in mind.',
    visible: false
  },
  {
    id: 3,
    icon: 'fas fa-road',
    title: 'Infrastructure',
    description: 'Roads, bridges, and public works projects that connect communities and drive economic growth.',
    visible: false
  },
  {
    id: 4,
    icon: 'fas fa-tools',
    title: 'Renovation',
    description: 'Transform your existing space with our expert renovation and remodeling services.',
    visible: false
  },
  {
    id: 5,
    icon: 'fas fa-leaf',
    title: 'Sustainable Building',
    description: 'Eco-friendly construction solutions that reduce environmental impact and lower operating costs.',
    visible: false
  },
  {
    id: 6,
    icon: 'fas fa-hard-hat',
    title: 'Project Management',
    description: 'End-to-end project management ensuring your construction project is completed on time and within budget.',
    visible: false
  }
]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const serviceIndex = parseInt(entry.target.dataset.index);
            services.value[serviceIndex].visible = true;
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.service-card').forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
}

.service-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  opacity: 0;
  transform: translateY(50px);
}

.service-card.service-visible {
  opacity: 1;
  transform: translateY(0);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(215, 199, 163, 0.08) 0%, rgba(17, 17, 17, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.service-card:hover {
  transform: translateY(-15px) rotateX(5deg) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.5);
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(215, 199, 163, 0.3);
  position: relative;
  z-index: 1;
}

.service-icon i {
  font-size: 32px;
  color: #111111;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotateY(10deg);
  box-shadow: 0 20px 40px rgba(215, 199, 163, 0.5);
}

.service-card:hover .service-icon i {
  transform: scale(1.1);
}

.service-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.17;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-family: var(--font-display);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.service-card:hover .service-title {
  color: #111111;
}

.service-description {
  font-size: 17px;
  line-height: 1.47;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-weight: 400;
  position: relative;
  z-index: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.2s ease;
}

.service-link:hover {
  color: var(--text-primary);
  text-decoration: none;
}

.service-link i {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.service-link:hover i {
  transform: translateX(4px);
}

/* Responsive Design */
/* iPad Pro and tablets */
@media (max-width: 1068px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .service-card {
    padding: 32px;
  }
  
  .service-title {
    font-size: 20px;
  }
}

/* iPad and smaller tablets */
@media (max-width: 834px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .service-card {
    padding: 28px;
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
  }
  
  .service-icon i {
    font-size: 28px;
  }
  
  .service-title {
    font-size: 19px;
  }
  
  .service-description {
    font-size: 15px;
  }
}

/* Mobile landscape and large phones */
@media (max-width: 734px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card {
    padding: 28px;
    border-radius: 28px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  
  .service-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
    border-radius: 18px;
  }
  
  .service-icon i {
    font-size: 26px;
  }
  
  .service-title {
    font-size: 18px;
    margin-bottom: 12px;
  }
  
  .service-description {
    font-size: 15px;
    line-height: 1.6;
  }
}

/* iPhone 14 Pro Max, 14 Plus (430px) */
@media (max-width: 430px) {
  .service-card {
    padding: 20px;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }
  
  .service-icon i {
    font-size: 24px;
  }
  
  .service-title {
    font-size: 17px;
  }
  
  .service-description {
    font-size: 14px;
  }
}

/* iPhone 14 Pro, 13 Pro (393px) */
@media (max-width: 393px) {
  .service-card {
    padding: 18px;
  }
  
  .service-icon {
    width: 56px;
    height: 56px;
  }
  
  .service-icon i {
    font-size: 22px;
  }
  
  .service-title {
    font-size: 16px;
  }
  
  .service-description {
    font-size: 14px;
  }
}

/* iPhone SE and smaller (375px and below) */
@media (max-width: 375px) {
  .services-grid {
    gap: 12px;
  }
  
  .service-card {
    padding: 16px;
  }
  
  .service-icon {
    width: 52px;
    height: 52px;
    margin-bottom: 14px;
  }
  
  .service-icon i {
    font-size: 20px;
  }
  
  .service-title {
    font-size: 15px;
  }
  
  .service-description {
    font-size: 13px;
    line-height: 1.4;
  }
}
</style>
