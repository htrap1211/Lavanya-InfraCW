<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Preloader from './components/Preloader.vue';

const isLoading = ref(true);

// Set light mode and handle loading state
onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'light');
  
  // Simulate loading time (you can remove this in production)
  // or replace with your actual loading logic
  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = '';
  }, 4000); // 4 seconds for demonstration
});

// Prevent scrolling when preloader is active
document.body.style.overflow = 'hidden';
</script>

<template>
  <div class="app">
    <Preloader :is-loading="isLoading" />
    <div :class="['app-content', { 'content-hidden': isLoading }]">
      <Navbar />
      <main style="padding-top: 0;">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/scss/main.scss';

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 5rem 0;
}

.app-content {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.app-content.content-hidden {
  opacity: 0;
  pointer-events: none;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  line-height: 1.2;
  color: var(--text-color);
}

p {
  margin-top: 0;
  line-height: 1.6;
  color: var(--text-color);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &-primary {
    background-color: var(--primary-color);
    color: white;
    border: 1px solid transparent;
    
    &:hover {
      background-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
