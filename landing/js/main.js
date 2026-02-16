// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mostrar WhatsApp después de scroll
const whatsappBtn = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    whatsappBtn.style.opacity = "1";
    whatsappBtn.style.pointerEvents = "auto";
  } else {
    whatsappBtn.style.opacity = "0";
    whatsappBtn.style.pointerEvents = "none";
  }
});

// Form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensaje enviado correctamente. Nos contactaremos pronto.");
});
// Testimonial Slider
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

const showTestimonial = index => {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
};

document.getElementById("next").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("prev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Auto slide (opcional pero PRO)
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 6000);
// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
