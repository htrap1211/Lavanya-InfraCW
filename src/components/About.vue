<template>
  <section id="about" class="section-gray">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <h2 class="section-title">About Us</h2>
            <p class="section-subtitle">
              Building Dreams Into Reality
            </p>
          </div>
          
          <div class="about-image-mobile">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="About Lavanya Infrastructure" 
            />
          </div>
          
          <p class="about-description">
            Lavanya Infrastructure Corporation has been at the forefront of the construction industry, delivering exceptional projects with integrity, innovation, and excellence since our establishment.
          </p>
          
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Our Mission</h3>
                <p class="feature-description">To deliver superior construction services through innovation, quality workmanship, and exceptional customer service.</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-eye"></i>
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Our Vision</h3>
                <p class="feature-description">To be the most trusted name in the construction industry, known for quality, reliability, and innovation.</p>
              </div>
            </div>
          </div>
          
          <div class="about-actions">
            <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
            <a href="#projects" class="btn btn-outline btn-lg">View Our Work</a>
          </div>
        </div>
        
        <div class="about-image">
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="About Lavanya Infrastructure" 
          />
          <div class="experience-badge">
            <div class="badge-icon">
              <i class="fas fa-award"></i>
            </div>
            <div class="badge-content">
              <div class="badge-number">15+</div>
              <div class="badge-label">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">250+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Expert Team</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 80px;
}

.about-text {
  padding-right: 40px;
}

.about-description {
  font-size: 21px;
  line-height: 1.38;
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-weight: 400;
}

.about-features {
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(215, 199, 163, 0.3);
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
  transform: scale(1.1) rotateY(10deg);
  box-shadow: 0 15px 40px rgba(215, 199, 163, 0.5);
}

.feature-icon i {
  font-size: 24px;
  color: #111111;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-family: var(--font-display);
}

.feature-description {
  font-size: 17px;
  line-height: 1.47;
  color: var(--text-secondary);
  font-weight: 400;
}

.about-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

.about-image:hover img {
  transform: scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

.about-image-mobile {
  display: none;
}

.experience-badge {
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.experience-badge:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.badge-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #D7C7A3 0%, #c4b08f 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(215, 199, 163, 0.3);
}

.badge-icon i {
  font-size: 24px;
  color: #111111;
}

.badge-content {
  flex: 1;
}

.badge-number {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.08;
  color: var(--text-primary);
  margin-bottom: 4px;
  font-family: var(--font-display);
}

.badge-label {
  font-size: 15px;
  color: var(--text-tertiary);
  font-weight: 400;
}

.stats-section {
  border-top: 1px solid var(--border-color);
  padding-top: 60px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 32px 20px;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.stat-item:hover {
  transform: translateY(-10px) rotateX(5deg);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.08;
  color: #111111;
  margin-bottom: 8px;
  font-family: var(--font-display);
}

.stat-label {
  font-size: 17px;
  color: var(--text-tertiary);
  font-weight: 500;
}

/* Responsive Design */
/* iPad Pro and tablets */
@media (max-width: 1068px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .about-text {
    padding-right: 0;
  }
  
  .about-description {
    font-size: 19px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .stat-item {
    padding: 24px 16px;
  }
  
  .stat-number {
    font-size: 40px;
  }
}

/* iPad and smaller tablets */
@media (max-width: 834px) {
  .about-content {
    gap: 50px;
  }
  
  .about-description {
    font-size: 18px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .stat-number {
    font-size: 36px;
  }
  
  .stat-label {
    font-size: 15px;
  }
}

/* Mobile landscape and large phones */
@media (max-width: 734px) {
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-bottom: 60px;
  }
  
  .about-description {
    font-size: 17px;
    margin-bottom: 40px;
    line-height: 1.6;
  }
  
  .about-features {
    margin-bottom: 40px;
  }
  
  .feature-item {
    margin-bottom: 32px;
    gap: 20px;
    padding: 0;
    background: transparent;
    border-radius: 0;
    border: none;
    box-shadow: none;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  
  .feature-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  
  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(215, 199, 163, 0.3);
  }
  
  .feature-icon i {
    font-size: 20px;
  }
  
  .feature-title {
    font-size: 20px;
    margin-bottom: 8px;
    color: var(--text-primary);
  }
  
  .feature-description {
    font-size: 15px;
    line-height: 1.65;
    color: var(--text-secondary);
  }
  
  .about-actions {
    flex-direction: column;
    gap: 14px;
  }
  
  .about-actions .btn {
    width: 100%;
    max-width: 100%;
    padding: 18px 32px;
    font-size: 17px;
    border-radius: 20px !important;
  }
  
  .about-image {
    display: none;
  }
  
  .about-image-mobile {
    display: block;
    width: 70%;
    max-width: 280px;
    margin: 32px auto;
    position: relative;
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
  }
  
  .about-image-mobile::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    background: linear-gradient(135deg, rgba(215, 199, 163, 0.3), rgba(196, 176, 143, 0.2));
    border-radius: 24px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .about-image-mobile:active::before {
    opacity: 1;
  }
  
  .about-image-mobile img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .about-image-mobile:active img {
    transform: scale(0.98);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .about-description {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  }
  
  .about-features {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
  }
  
  .about-actions {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s backwards;
  }
  
  .stats-section {
    padding-top: 48px;
    border-top: 2px solid rgba(0, 0, 0, 0.08);
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
  }
  
  .stat-item {
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    text-align: center;
    background: transparent;
    border: none;
    position: relative;
  }
  
  .stat-item:hover {
    transform: scale(1.05);
  }
  
  .stat-number {
    font-size: 40px;
    margin-bottom: 8px;
    color: #111111;
    font-weight: 700;
  }
  
  .stat-label {
    font-size: 13px;
    text-align: center;
    margin-left: 0;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

/* iPhone 14 Pro Max, 14 Plus (430px) */
@media (max-width: 430px) {
  .about-image-mobile {
    width: 75%;
    max-width: 260px;
    margin: 28px auto;
  }
  
  .about-image-mobile img {
    border-radius: 18px;
  }
  
  .about-description {
    font-size: 16px;
  }
  
  .feature-item {
    margin-bottom: 28px;
    padding-bottom: 28px;
  }
  
  .feature-icon {
    width: 44px;
    height: 44px;
  }
  
  .feature-icon i {
    font-size: 18px;
  }
  
  .feature-title {
    font-size: 18px;
  }
  
  .feature-description {
    font-size: 14px;
  }
  
  .stats-grid {
    gap: 28px 20px;
  }
  
  .stat-number {
    font-size: 36px;
  }
  
  .stat-label {
    font-size: 12px;
  }
}

/* iPhone 14 Pro, 13 Pro (393px) */
@media (max-width: 393px) {
  .about-image-mobile {
    width: 80%;
    max-width: 240px;
    margin: 24px auto;
  }
  
  .about-description {
    font-size: 14px;
  }
  
  .feature-item {
    gap: 12px;
  }
  
  .feature-icon {
    width: 48px;
    height: 48px;
  }
  
  .feature-icon i {
    font-size: 18px;
  }
  
  .feature-title {
    font-size: 15px;
  }
  
  .feature-description {
    font-size: 13px;
  }
  
  .stat-number {
    font-size: 26px;
  }
}

/* iPhone SE and smaller (375px and below) */
@media (max-width: 375px) {
  .about-content {
    gap: 32px;
    margin-bottom: 50px;
  }
  
  .about-image-mobile {
    width: 85%;
    max-width: 220px;
    margin: 20px auto;
  }
  
  .about-image-mobile img {
    border-radius: 16px;
  }
  
  .about-description {
    font-size: 14px;
    margin-bottom: 24px;
  }
  
  .feature-item {
    margin-bottom: 20px;
  }
  
  .feature-icon {
    width: 44px;
    height: 44px;
  }
  
  .feature-icon i {
    font-size: 16px;
  }
  
  .feature-title {
    font-size: 14px;
  }
  
  .feature-description {
    font-size: 13px;
  }
  
  .about-actions {
    gap: 10px;
  }
  
  .experience-badge {
    padding: 14px;
  }
  
  .badge-icon {
    width: 40px;
    height: 40px;
  }
  
  .badge-icon i {
    font-size: 16px;
  }
  
  .badge-number {
    font-size: 22px;
  }
  
  .badge-label {
    font-size: 11px;
  }
  
  .stats-grid {
    gap: 12px;
  }
  
  .stat-item {
    padding: 18px 12px;
    border-radius: 16px;
  }
  
  .stat-number {
    font-size: 24px;
  }
  
  .stat-label {
    font-size: 12px;
  }
}
</style>

