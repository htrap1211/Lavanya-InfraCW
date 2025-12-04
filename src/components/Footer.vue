<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/logo-lavanya.png" alt="Lavanya Infrastructure" class="logo-img">
          </div>
        </div>
        
        <div class="footer-links">
          <div class="link-group">
            <h4 class="link-title">Quick Links</h4>
            <ul class="link-list">
              <li><a href="#home" @click="scrollToSection('home')">Home</a></li>
              <li><a href="#services" @click="scrollToSection('services')">Services</a></li>
              <li><a href="#projects" @click="scrollToSection('projects')">Projects</a></li>
              <li><a href="#about" @click="scrollToSection('about')">About Us</a></li>
              <li><a href="#contact" @click="scrollToSection('contact')">Contact</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4 class="link-title">Services</h4>
            <ul class="link-list">
              <li><a href="#">Residential</a></li>
              <li><a href="#">Commercial</a></li>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Renovation</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4 class="link-title">Contact</h4>
            <ul class="link-list">
              <li><a href="tel:+911234567890">+91 12345 67890</a></li>
              <li><a href="mailto:info@lavanyainfra.com">info@lavanyainfra.com</a></li>
              <li>Mumbai, Maharashtra</li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Lavanya Infrastructure. All rights reserved.</p>
        </div>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref('');

const currentYear = computed(() => {
  return new Date().getFullYear();
});

const subscribe = () => {
  alert(`Thank you for subscribing with ${email.value}!`);
  email.value = '';
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.footer {
  background-color: var(--background-secondary);
  border-top: 1px solid var(--border-color);
  padding: 60px 0 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  margin-bottom: 16px;
}

.brand-logo .logo-img {
  height: 360px;
  width: auto;
  object-fit: contain;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-group {
  display: flex;
  flex-direction: column;
}

.link-title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.24;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-family: var(--font-display);
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-list li {
  margin: 0;
}

.link-list a {
  font-size: 17px;
  line-height: 1.47;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
}

.link-list a:hover {
  color: var(--text-primary);
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.footer-copyright p {
  font-size: 15px;
  line-height: 1.47;
  color: var(--text-tertiary);
  margin: 0;
  font-weight: 400;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  font-size: 15px;
  line-height: 1.47;
  color: var(--text-tertiary);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: var(--text-primary);
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 1068px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

@media (max-width: 734px) {
  .footer {
    padding: 60px 0 100px;
  }
  
  .footer-content {
    gap: 48px;
    margin-bottom: 40px;
  }
  
  .brand-logo {
    text-align: center;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }
  
  .brand-logo .logo-img {
    height: 120px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .brand-logo .logo-img:active {
    transform: scale(0.95);
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
  }
  
  .link-group {
    background: rgba(255, 255, 255, 0.5);
    padding: 24px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }
  
  .link-group:nth-child(1) { animation-delay: 0.1s; }
  .link-group:nth-child(2) { animation-delay: 0.2s; }
  .link-group:nth-child(3) { animation-delay: 0.3s; }
  
  .link-group:active {
    transform: scale(0.98);
    background: rgba(255, 255, 255, 0.6);
  }
  
  .link-title {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 700;
    color: var(--text-primary);
  }
  
  .link-list {
    gap: 12px;
  }
  
  .link-list a,
  .link-list li {
    font-size: 14px;
    line-height: 1.6;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    padding-bottom: 20px;
  }
  
  .footer-copyright p {
    font-size: 13px;
  }
  
  .footer-legal {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  
  .footer-legal a {
    font-size: 13px;
  }
}

/* iPhone-specific footer optimizations */
@media (max-width: 430px) {
  .footer {
    padding: 48px 0 100px;
  }
  
  .footer-content {
    gap: 40px;
    margin-bottom: 32px;
  }
  
  .brand-logo .logo-img {
    height: 100px;
  }
  
  .footer-links {
    gap: 20px 16px;
  }
  
  .link-group {
    padding: 20px;
    border-radius: 16px;
  }
  
  .link-title {
    font-size: 15px;
    margin-bottom: 14px;
  }
  
  .link-list {
    gap: 10px;
  }
  
  .link-list a,
  .link-list li {
    font-size: 13px;
  }
  
  .footer-copyright p {
    font-size: 12px;
  }
  
  .footer-legal a {
    font-size: 12px;
  }
}

@media (max-width: 393px) {
  .footer {
    padding: 40px 0 100px;
  }
  
  .footer-content {
    gap: 36px;
  }
  
  .brand-logo .logo-img {
    height: 90px;
  }
  
  .footer-links {
    gap: 16px 12px;
  }
  
  .link-group {
    padding: 18px;
  }
  
  .link-title {
    font-size: 14px;
  }
  
  .link-list a,
  .link-list li {
    font-size: 12px;
  }
  
  .footer-copyright p {
    font-size: 11px;
  }
  
  .footer-legal a {
    font-size: 11px;
  }
}

@media (max-width: 360px) {
  .footer {
    padding: 36px 0 100px;
  }
  
  .footer-content {
    gap: 32px;
  }
  
  .brand-logo .logo-img {
    height: 80px;
  }
  
  .footer-links {
    gap: 14px 10px;
  }
  
  .link-group {
    padding: 16px;
    border-radius: 14px;
  }
  
  .link-title {
    font-size: 13px;
    margin-bottom: 12px;
  }
  
  .link-list {
    gap: 8px;
  }
  
  .link-list a,
  .link-list li {
    font-size: 11px;
  }
  
  .footer-copyright p {
    font-size: 10px;
  }
  
  .footer-legal a {
    font-size: 10px;
  }
}
</style>
