// ===== NAV MOBILE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

document.querySelectorAll('.nav-link').forEach(link =>
    link.onclick = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    };
});

// ===== NAV ACTIVE =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

// ===== SCROLL ANIMATION + SKILL BAR =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // Fade in
            entry.target.classList.add("show");

            // Skill animation
            if (entry.target.querySelector(".skill-progress")) {
                entry.target.querySelectorAll(".skill-progress").forEach(bar => {
                    bar.style.width = bar.dataset.width + "%";
                });
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// ===== SCROLL TOP =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});