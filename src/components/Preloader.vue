<template>
  <div class="preloader" :class="{ 'preloader-hidden': !isLoading }">
    <spline-viewer 
      url="https://prod.spline.design/TTf6HYOmcUwpinQt/scene.splinecode"
      loading-anim
      class="spline-viewer"
    ></spline-viewer>
    <div class="logo-text">
      <h1>Lavanya</h1>
      <h2>Infrastructure</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js';
    document.head.appendChild(script);
  }
};
</script>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  overflow: hidden;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  background: transparent;
}

.preloader.preloader-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.spline-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  outline: none;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  z-index: 1;
}

.logo-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: heartbeat 2s infinite;
  pointer-events: none;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo-text h1 {
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}

.logo-text h2 {
  font-size: 2rem;
  font-weight: 300;
  margin: 0.5rem 0 0 0;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
}

@keyframes heartbeat {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  35% {
    transform: translate(-50%, -50%) scale(1);
  }
  45% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* When preloader is about to hide */
.preloader.preloader-hidden .spline-viewer {
  opacity: 0;
}
</style>
