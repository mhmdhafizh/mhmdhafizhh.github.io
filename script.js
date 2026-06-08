// Inisialisasi AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Navbar Sticky & Smooth Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'rgba(10, 10, 20, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
    }
});

// Smooth scrolling untuk semua link navbar
document.querySelectorAll('.nav-links a, .hero-buttons .btn-outline').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Tutup mobile menu jika terbuka
            document.getElementById('nav-links').classList.remove('active');
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hero Scroll otomatis
document.querySelector('.hero-scroll').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Download CV Simulasi
document.getElementById('download-cv').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Fitur download CV: Anda dapat menambahkan file PDF di folder assets/ dan mengganti link href.");
    // Contoh: window.open('assets/cv.pdf', '_blank');
});

// Animasi progress bar saat tampil di viewport
const progressBars = document.querySelectorAll('.progress');
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = width;
            observer.unobserve(bar);
        }
    });
}, observerOptions);

progressBars.forEach(bar => observer.observe(bar));

// Form submission handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formStatus.innerHTML = '<span style="color: #ff6b6b;">Semua field harus diisi!</span>';
        return;
    }

    formStatus.innerHTML = '<span style="color: #00d4ff;">Mengirim pesan...</span>';
    
    // Simulasi pengiriman (bisa diintegrasikan dengan backend nanti)
    setTimeout(() => {
        formStatus.innerHTML = '<span style="color: #4ecdc4;">Pesan berhasil dikirim! Saya akan menghubungi Anda kembali.</span>';
        contactForm.reset();
        setTimeout(() => formStatus.innerHTML = '', 5000);
    }, 1000);
});

// Efek hover tombol dan animasi tambahan
const allBtns = document.querySelectorAll('.btn, .btn-small, .project-link');
allBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Preload animasi awal halaman (fade-in body)
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.8s';
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Perbaiki layout hero height di mobile
function adjustHeroHeight() {
    const hero = document.querySelector('.hero');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if(window.innerWidth <= 768) {
        hero.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    } else {
        hero.style.minHeight = '100vh';
    }
}
window.addEventListener('resize', adjustHeroHeight);
adjustHeroHeight();