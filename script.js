// Variáveis globais
let currentSlide = 0;
let currentLightboxSlide = 0;
const slides = document.querySelectorAll('.slide');
const galleryImages = [
    'img/ap6.jpg', 'img/ap7.jpg', 'img/ap8.jpg', 'img/ap9.jpg', 'img/ap10.jpg', 'img/ap11.jpg',
    'img/ap12.jpg', 'img/ap13.jpg', 'img/ap14.jpg', 'img/ap15.jpg', 'img/ap16.jpg', 'img/ap17.jpg',
    'img/ap18.jpg', 'img/ap19.jpg', 'img/ap20.jpg', 'img/ap21.jpg', 'img/planta.jpeg'
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeScrollAnimations();
    initializeContactButtons();
    initializeGallery();
    initializeLightbox();
    
    // Auto-play slider
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});

// Slider functions
function initializeSlider() {
    const dotsContainer = document.getElementById('sliderDots');
    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    updateDots(currentSlide, false);
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    updateDots(currentSlide, true);
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    updateDots(currentSlide, false);
    
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    updateDots(currentSlide, true);
}

function updateDots(activeIndex, isActive) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.toggle('active', isActive);
        } else {
            dot.classList.remove('active');
        }
    });
}

// Contact functions
function initializeContactButtons() {
    // Adicionar analytics tracking
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('button_click', this.textContent.trim());
        });
    });
}

function openWhatsApp() {
    const phone = '5541999961121';
    const message = encodeURIComponent('Olá! Tenho interesse no apartamento do Edifício Botanique no Jardim Botânico. Poderia me enviar mais informações?');
    const url = `https://wa.me/${phone}?text=${message}`;
    
    trackEvent('whatsapp_click', 'WhatsApp Contact');
    window.open(url, '_blank');
}

function callPhone() {
    const phone = 'tel:+5541999961121';
    
    trackEvent('phone_click', 'Phone Call');
    window.location.href = phone;
}

function sendEmail() {
    const email = 'vendas@axis21.com.br';
    const subject = encodeURIComponent('Interesse no Apartamento Botanique');
    const body = encodeURIComponent(`Olá!

Tenho interesse no apartamento do Edifício Botanique no Jardim Botânico.

Detalhes do imóvel:
- ~80m² de área privativa
- 2 quartos (1 suíte)
- 2 vagas de garagem
- 2 banheiros
- Vista para Serra do Mar
- Localização privilegiada

Aguardo retorno.

Atenciosamente,
[Seu nome]`);
    
    const url = `mailto:${email}?subject=${subject}&body=${body}`;
    
    trackEvent('email_click', 'Email Contact');
    window.location.href = url;
}

// Gallery functions
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    currentLightboxSlide = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightboxImg.src = galleryImages[index];
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    trackEvent('gallery_open', `Image ${index + 1}`);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeLightboxSlide(direction) {
    currentLightboxSlide += direction;
    
    if (currentLightboxSlide >= galleryImages.length) {
        currentLightboxSlide = 0;
    } else if (currentLightboxSlide < 0) {
        currentLightboxSlide = galleryImages.length - 1;
    }
    
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = galleryImages[currentLightboxSlide];
}

// Lightbox initialization
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
    
    // Navigate with arrow keys
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                changeLightboxSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeLightboxSlide(1);
            }
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.highlight-item, .info-item, .gallery-item, .amenity-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Analytics tracking
function trackEvent(action, label) {
    // Simular tracking de eventos
    console.log(`Event tracked: ${action} - ${label}`);
    
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'engagement',
            'event_label': label
        });
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: label
        });
    }
}

// Performance optimizations
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.src = 'placeholder.jpg';
        });
    });
}

// Lazy loading for gallery
function initializeLazyLoading() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    galleryImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Mobile-specific optimizations
function initializeMobileOptimizations() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Call optimization functions
document.addEventListener('DOMContentLoaded', function() {
    optimizeImages();
    initializeLazyLoading();
    initializeMobileOptimizations();
});

// Add loading states
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// Enhanced contact functions with loading states
function enhancedOpenWhatsApp() {
    const button = event.target.closest('button');
    showLoading(button);
    
    setTimeout(() => {
        openWhatsApp();
        hideLoading(button);
    }, 500);
}

function enhancedCallPhone() {
    const button = event.target.closest('button');
    showLoading(button);
    
    setTimeout(() => {
        callPhone();
        hideLoading(button);
    }, 500);
}

// Add scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll progress indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #4ade80, #22c55e);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollProgress();
});

// Add floating CTA button
function addFloatingCTA() {
    const floatingCTA = document.createElement('div');
    floatingCTA.className = 'floating-cta';
    floatingCTA.innerHTML = `
        <button onclick="openWhatsApp()" class="floating-btn">
            <i class="fab fa-whatsapp"></i>
        </button>
    `;
    floatingCTA.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    `;
    
    const floatingBtn = floatingCTA.querySelector('.floating-btn');
    floatingBtn.style.cssText = `
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(74, 222, 128, 0.4);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    floatingBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 25px rgba(74, 222, 128, 0.6)';
    });
    
    floatingBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(74, 222, 128, 0.4)';
    });
    
    document.body.appendChild(floatingCTA);
}

// Initialize floating CTA
document.addEventListener('DOMContentLoaded', function() {
    addFloatingCTA();
}); 