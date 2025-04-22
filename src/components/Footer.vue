<template>
  <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    
    <div class="footer-content">
      <div class="footer-section about">
        <h2 class="logo-text">MiApp</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.
        </p>
        <div class="contact">
          <span><i class="fas fa-phone"></i> +123 456 789</span>
          <span><i class="fas fa-envelope"></i> info@miapp.com</span>
        </div>
        <div class="socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
      
      <div class="footer-section links">
        <h2>Enlaces Rápidos</h2>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      
      <div class="footer-section contact-form">
        <h2>Contacto</h2>
        <form>
          <input type="email" class="text-input contact-input" placeholder="Tu email...">
          <textarea class="text-input contact-input" placeholder="Tu mensaje..."></textarea>
          <button type="submit" class="btn btn-primary">
            <i class="fas fa-envelope"></i> Enviar
          </button>
        </form>
      </div>
    </div>
    
    <div class="footer-bottom">
      &copy; {{ currentYear }} MiApp | Diseñado con ❤️ para Vue 3
    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AnimatedFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear());
    
    // Animación de las olas
    onMounted(() => {
      const waves = document.querySelectorAll('.wave');
      waves.forEach((wave, index) => {
        wave.style.animationDelay = `${index * 0.25}s`;
      });
    });
    
    return {
      currentYear
    };
  }
}
</script>

<style scoped>
/* Estilos base */
.footer {
  background: linear-gradient(135deg, #1F1F2E 0%, #2a2a3a 100%);
  color: white;
  padding: 80px 0 0;
  position: relative;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
}

/* Efecto de olas animadas */
.waves {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  margin-bottom: -7px;
}

.wave {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='rgba(255,255,255,0.2)' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  position: absolute;
  width: 200%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  animation: wave 10s linear infinite;
  opacity: 0.8;
}

#wave1 {
  z-index: 10;
  animation-delay: 0s;
  bottom: 0;
}

#wave2 {
  z-index: 9;
  animation-delay: -5s;
  bottom: 10px;
  opacity: 0.5;
}

#wave3 {
  z-index: 8;
  animation-delay: -2s;
  bottom: 15px;
  opacity: 0.2;
}

#wave4 {
  z-index: 7;
  animation-delay: -7s;
  bottom: 20px;
  opacity: 0.7;
}

@keyframes wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.5);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

/* Contenido del footer */
.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.footer-section {
  flex: 1;
  min-width: 300px;
  padding: 20px;
  margin: 10px;
}

.logo-text {
  font-size: 2rem;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.logo-text::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50px;
  height: 3px;
  background: white;
  transition: width 0.3s ease;
}

.logo-text:hover::after {
  width: 100%;
}

.footer-section p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.contact span {
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.contact i {
  margin-right: 10px;
}

.socials {
  margin-top: 20px;
}

.socials a {
  color: white;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-block;
}

.socials a:hover {
  transform: translateY(-5px);
  color: #f1c40f;
}

.footer-section.links ul {
  list-style: none;
  padding: 0;
}

.footer-section.links li {
  margin-bottom: 10px;
}

.footer-section.links a {
  color: white;
  text-decoration: none;
  transition: padding-left 0.3s ease;
  display: inline-block;
}

.footer-section.links a:hover {
  padding-left: 10px;
  color: #f1c40f;
}

.footer-section.contact-form .text-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transition: background 0.3s ease;
}

.footer-section.contact-form .text-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.footer-section.contact-form .text-input:focus {
  background: rgba(255, 255, 255, 0.3);
  outline: none;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #f1c40f;
  color: #333;
}

.btn-primary:hover {
  background: #f39c12;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Footer inferior */
.footer-bottom {
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  position: relative;
  z-index: 10;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-section {
    flex: 100%;
    text-align: center;
  }
  
  .logo-text::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-section.links a:hover {
    padding-left: 0;
  }
  
  .socials a {
    margin: 0 10px;
  }
}
</style>