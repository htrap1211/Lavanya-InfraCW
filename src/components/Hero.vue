<template>
  <section id="home" class="hero">
    <div class="hero-parallax" :style="{ transform: `translateY(${parallaxOffset}px)` }"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Building the Future
            <span class="hero-accent">with Excellence</span>
          </h1>
          <p class="hero-subtitle">
            Lavanya Infrastructure Corporation delivers exceptional construction and infrastructure projects with innovation, sustainability, and uncompromising quality.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
            <a href="#projects" class="btn btn-outline btn-lg">View Our Work</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-number">{{ stat.number }}{{ stat.suffix }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stats = ref([
  { number: 0, target: 250, label: 'Projects Completed', suffix: '+' },
  { number: 0, target: 15, label: 'Years Experience', suffix: '+' },
  { number: 0, target: 98, label: 'Client Satisfaction', suffix: '%' }
]);

const parallaxOffset = ref(0);

const animateNumber = (stat, duration = 2000) => {
  const start = 0;
  const end = stat.target;
  const startTime = performance.now();
  
  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    stat.number = Math.floor(easeOutQuart * (end - start) + start);
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      stat.number = end;
    }
  };
  
  requestAnimationFrame(updateNumber);
};

const handleScroll = () => {
  const scrolled = window.scrollY;
  parallaxOffset.value = scrolled * 0.5;
};

onMounted(() => {
  // Trigger counter animation after component mounts
  setTimeout(() => {
    stats.value.forEach(stat => animateNumber(stat));
  }, 800);
  
  // Add parallax scroll listener
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #111111 0%, #2a2a2a 100%);
  position: relative;
  overflow: hidden;
  scroll-margin-top: 0;
}

.hero-parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(215, 199, 163, 0.1), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(242, 242, 240, 0.05), transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(215, 199, 163, 0.08), transparent 50%);
  animation: gradientShift 15s ease infinite;
  pointer-events: none;
  will-change: transform;
}

@keyframes gradientShift {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text {
  margin-bottom: 80px;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: white;
  margin-bottom: 24px;
  font-family: var(--font-display);
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-accent {
  color: #D7C7A3;
  font-weight: 700;
  display: block;
  margin-top: 16px;
}

.hero-subtitle {
  font-size: 21px;
  line-height: 1.38;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 40px;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.stat-item {
  text-align: center;
  background: rgba(242, 242, 240, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(215, 199, 163, 0.2);
  border-radius: 20px;
  padding: 30px 20px;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.stat-item:hover {
  transform: translateY(-10px) rotateX(5deg);
  background: rgba(215, 199, 163, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(215, 199, 163, 0.4);
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.08;
  color: #F2F2F0;
  margin-bottom: 8px;
  font-family: var(--font-display);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 17px;
  color: #D7C7A3;
  font-weight: 400;
}

/* Responsive Design */
/* iPad Pro and tablets */
@media (max-width: 1068px) {
  .hero-title {
    font-size: 56px;
  }
  
  .hero-subtitle {
    font-size: 19px;
  }
  
  .hero-stats {
    gap: 32px;
    max-width: 600px;
  }
  
  .stat-number {
    font-size: 40px;
  }
}

/* iPad and smaller tablets */
@media (max-width: 834px) {
  .hero {
    min-height: 90vh;
    padding: 60px 0 40px;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 18px;
    max-width: 500px;
  }
  
  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 550px;
  }
  
  .stat-item {
    padding: 24px 16px;
  }
  
  .stat-number {
    font-size: 36px;
  }
  
  .stat-label {
    font-size: 14px;
  }
}

/* Mobile landscape and large phones */
@media (max-width: 734px) {
  .hero {
    min-height: auto;
    padding: 100px 0 60px;
    display: flex;
    align-items: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-text {
    margin-bottom: 48px;
    padding: 0 8px;
  }
  
  .hero-title {
    font-size: 40px;
    margin-bottom: 24px;
    line-height: 1.15;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
  }
  
  .hero-accent {
    margin-top: 8px;
    display: inline-block;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.85; }
  }
  
  .hero-subtitle {
    font-size: 17px;
    margin-bottom: 36px;
    max-width: 100%;
    line-height: 1.5;
    padding: 0 4px;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    max-width: 100%;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 100%;
    padding: 18px 32px;
    font-size: 17px;
    border-radius: 20px !important;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .hero-actions .btn:active {
    transform: scale(0.97);
  }
  
  .hero-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    max-width: 100%;
    margin-top: 48px;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
  }
  
  .stat-item {
    flex: 1;
    padding: 0 16px;
    border-radius: 0;
    border: none;
    background: transparent;
    text-align: center;
    position: relative;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .stat-item::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(215, 199, 163, 0.4) 20%,
      rgba(215, 199, 163, 0.4) 80%,
      transparent
    );
  }
  
  .stat-item:last-child::after {
    display: none;
  }
  
  .stat-item:hover {
    transform: scale(1.05);
  }
  
  .stat-number {
    font-size: 32px;
    margin-bottom: 6px;
    color: #D7C7A3;
  }
  
  .stat-label {
    font-size: 11px;
    text-align: center;
    margin-left: 0;
    line-height: 1.3;
    color: rgba(242, 242, 240, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

/* iPhone 14 Pro Max, 14 Plus (430px) */
@media (max-width: 430px) {
  .hero {
    padding: 90px 0 50px;
  }
  
  .hero-title {
    font-size: 36px;
    line-height: 1.12;
  }
  
  .hero-subtitle {
    font-size: 16px;
    line-height: 1.55;
  }
  
  .hero-actions .btn {
    padding: 17px 28px;
    font-size: 16px;
  }
  
  .hero-stats {
    gap: 0;
    margin-top: 40px;
  }
  
  .stat-item {
    padding: 0 12px;
  }
  
  .stat-item::after {
    height: 45px;
  }
  
  .stat-number {
    font-size: 28px;
  }
  
  .stat-label {
    font-size: 10px;
  }
}

/* iPhone 14 Pro, 13 Pro (393px) */
@media (max-width: 393px) {
  .hero-title {
    font-size: 34px;
  }
  
  .hero-subtitle {
    font-size: 15px;
  }
  
  .hero-actions .btn {
    padding: 16px 24px;
    font-size: 15px;
  }
  
  .hero-stats {
    gap: 0;
  }
  
  .stat-item {
    padding: 0 10px;
  }
  
  .stat-item::after {
    height: 42px;
  }
  
  .stat-number {
    font-size: 26px;
  }
  
  .stat-label {
    font-size: 9px;
  }
}

/* iPhone SE and smaller (375px and below) */
@media (max-width: 375px) {
  .hero {
    padding: 80px 0 40px;
  }
  
  .hero-text {
    margin-bottom: 36px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 15px;
    margin-bottom: 28px;
  }
  
  .hero-actions {
    gap: 12px;
  }
  
  .hero-actions .btn {
    padding: 15px 24px;
    font-size: 15px;
  }
  
  .hero-stats {
    gap: 0;
  }
  
  .stat-item {
    padding: 0 8px;
  }
  
  .stat-item::after {
    height: 38px;
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .stat-label {
    font-size: 9px;
  }
}

/* Dark mode adjustments */
[data-theme="dark"] .hero {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

.hero-actions {
  animation: fadeInUp 1s ease-out 0.5s both;
}

.hero-actions .btn {
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-actions .btn-outline {
  background: rgba(242, 242, 240, 0.1);
  border: 2px solid #D7C7A3;
  color: #F2F2F0;
  font-weight: 600;
}

.hero-actions .btn-outline:hover {
  background: #D7C7A3;
  border-color: #D7C7A3;
  color: #111111;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(215, 199, 163, 0.4);
}

.hero-actions .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}
</style>

