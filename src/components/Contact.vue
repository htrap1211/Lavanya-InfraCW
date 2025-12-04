<template>
  <section id="contact" class="section-white blueprint-background">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">
          Let's Build Something Great Together
        </p>
        <p class="section-description">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h3 class="info-title">Our Location</h3>
              <p class="info-text">123 Construction Ave, Building 45<br>Mumbai, Maharashtra 400001, India</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3 class="info-title">Email Us</h3>
              <p class="info-text">
                <a href="mailto:info@lavanyainfra.com">info@lavanyainfra.com</a><br>
                <a href="mailto:support@lavanyainfra.com">support@lavanyainfra.com</a>
              </p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info-content">
              <h3 class="info-title">Call Us</h3>
              <p class="info-text">
                <a href="tel:+911234567890">+91 12345 67890</a><br>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                v-model="formData.name"
                required
                placeholder="John Doe"
              >
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                v-model="formData.email"
                required
                placeholder="john@example.com"
              >
            </div>
            
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input 
                type="text" 
                class="form-control" 
                id="subject" 
                v-model="formData.subject"
                placeholder="How can we help you?"
              >
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Your Message</label>
              <textarea 
                class="form-control" 
                id="message" 
                rows="5" 
                v-model="formData.message"
                required
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary btn-lg btn-ripple" 
              :disabled="isSubmitting"
              @click="createRipple"
            >
              <span v-if="!isSubmitting">
                <i class="far fa-paper-plane"></i> Send Message
              </span>
              <span v-else class="loading-state">
                <span class="spinner"></span>
                Sending...
              </span>
            </button>
            
            <Transition name="success">
              <div v-if="showSuccess" class="success-message">
                <i class="fas fa-check-circle"></i>
                Message sent successfully!
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', formData.value);
    formData.value = { name: '', email: '', subject: '', message: '' };
    isSubmitting.value = false;
    showSuccess.value = true;
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  }, 1500);
};

const createRipple = (event) => {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};
</script>

<style scoped>
/* Blueprint Background */
.blueprint-background {
  background-image: url('/images/blueprint-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}

.blueprint-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 1;
}

.blueprint-background .container {
  position: relative;
  z-index: 2;
}

.section-description {
  font-size: 17px;
  line-height: 1.47;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.info-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(215, 199, 163, 0.3);
  transition: all 0.3s ease;
}

.info-item:hover .info-icon {
  transform: scale(1.1) rotateY(10deg);
  box-shadow: 0 15px 40px rgba(215, 199, 163, 0.5);
}

.info-icon i {
  font-size: 28px;
  color: #111111;
}

.info-content {
  flex: 1;
}

.info-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-family: var(--font-display);
}

.info-text {
  font-size: 17px;
  line-height: 1.47;
  color: var(--text-secondary);
  font-weight: 400;
}

.info-text a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-text a:hover {
  color: var(--text-secondary);
  text-decoration: none;
}

.contact-form {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
  font-family: var(--font-text);
}

.form-control {
  width: 100%;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(203, 213, 225, 0.5);
  border-radius: 14px;
  color: var(--text-primary);
  font-size: 17px;
  line-height: 1.47;
  font-family: var(--font-text);
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: rgba(215, 199, 163, 0.8);
  box-shadow: 0 0 0 4px rgba(215, 199, 163, 0.15);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

.form-control::placeholder {
  color: #000000;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.btn {
  width: 100%;
  justify-content: center;
}

.btn i {
  margin-right: 8px;
}

/* Responsive Design */
/* iPad Pro and tablets */
@media (max-width: 1068px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .contact-form {
    padding: 40px;
  }
  
  .info-item {
    gap: 20px;
  }
  
  .info-icon {
    width: 64px;
    height: 64px;
  }
  
  .info-icon i {
    font-size: 24px;
  }
  
  .info-title {
    font-size: 20px;
  }
  
  .info-text {
    font-size: 16px;
  }
}

/* iPad and smaller tablets */
@media (max-width: 834px) {
  .contact-content {
    gap: 50px;
  }
  
  .contact-form {
    padding: 36px;
  }
  
  .info-icon {
    width: 60px;
    height: 60px;
  }
  
  .info-icon i {
    font-size: 22px;
  }
}

/* Mobile landscape and large phones */
@media (max-width: 734px) {
  .contact-content {
    gap: 48px;
  }
  
  .contact-info {
    gap: 32px;
    order: 2;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  }
  
  .contact-form {
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    order: 1;
    background: transparent;
    border: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s backwards;
  }
  
  .contact-form:hover {
    transform: none;
    box-shadow: none;
  }
  
  .form-group {
    margin-bottom: 28px;
  }
  
  .form-control {
    padding: 18px 20px;
    font-size: 16px;
    border-radius: 16px;
    border: 2px solid rgba(203, 213, 225, 0.4);
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .form-control:focus {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(215, 199, 163, 0.2);
  }
  
  .form-label {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .info-item {
    flex-direction: row;
    text-align: left;
    gap: 20px;
    padding: 0;
    background: transparent;
    border-radius: 0;
    border: none;
    box-shadow: none;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .info-item:nth-child(1) { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards; }
  .info-item:nth-child(2) { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards; }
  .info-item:nth-child(3) { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s backwards; }
  
  .info-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  .info-item:active {
    transform: scale(0.98);
  }
  
  .info-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(215, 199, 163, 0.3);
  }
  
  .info-icon i {
    font-size: 20px;
  }
  
  .info-title {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  
  .info-text {
    font-size: 15px;
    line-height: 1.6;
  }
  
  .btn {
    padding: 18px 32px;
    font-size: 17px;
    border-radius: 20px !important;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .btn:active {
    transform: scale(0.97);
  }
}

/* iPhone 14 Pro Max, 14 Plus (430px) */
@media (max-width: 430px) {
  .contact-content {
    gap: 40px;
  }
  
  .contact-info {
    gap: 28px;
  }
  
  .form-control {
    padding: 16px 18px;
    font-size: 15px;
  }
  
  .form-label {
    font-size: 15px;
  }
  
  .info-item {
    padding-bottom: 28px;
  }
  
  .info-icon {
    width: 44px;
    height: 44px;
  }
  
  .info-icon i {
    font-size: 18px;
  }
  
  .info-title {
    font-size: 17px;
  }
  
  .info-text {
    font-size: 14px;
  }
  
  .success-message {
    padding: 12px 16px;
    font-size: 14px;
  }
}

/* iPhone 14 Pro, 13 Pro (393px) */
@media (max-width: 393px) {
  .contact-form {
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .info-icon {
    width: 48px;
    height: 48px;
  }
  
  .info-icon i {
    font-size: 16px;
  }
  
  .info-title {
    font-size: 15px;
  }
  
  .info-text {
    font-size: 13px;
    line-height: 1.5;
  }
}

/* iPhone SE and smaller (375px and below) */
@media (max-width: 375px) {
  .contact-content {
    gap: 28px;
  }
  
  .contact-info {
    gap: 20px;
  }
  
  .contact-form {
    padding: 18px;
    border-radius: 16px;
  }
  
  .form-control {
    padding: 12px 14px;
    font-size: 14px;
    border-radius: 10px;
  }
  
  .form-label {
    font-size: 13px;
  }
  
  .info-item {
    gap: 12px;
  }
  
  .info-icon {
    width: 44px;
    height: 44px;
  }
  
  .info-icon i {
    font-size: 16px;
  }
  
  .info-title {
    font-size: 14px;
  }
  
  .info-text {
    font-size: 12px;
  }
  
  .btn {
    padding: 12px 20px;
    font-size: 14px;
  }
  
  .success-message {
    padding: 10px 14px;
    font-size: 13px;
  }
}

/* Button Ripple Effect */
.btn-ripple {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Loading Spinner */
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(17, 17, 17, 0.3);
  border-top-color: #111111;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success Message */
.success-message {
  margin-top: 20px;
  padding: 16px 24px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  color: #16a34a;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
}

.success-message i {
  font-size: 20px;
}

.success-enter-active,
.success-leave-active {
  transition: all 0.3s ease;
}

.success-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.success-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
