// ============
//  Mobile Nav
// ============
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle) {
    menuToggle.addEventListener("change", () => {
        menu.style.display = menuToggle.checked ? "flex" : "";
    });
}

// ================
//  Admission Form
// ================
const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
    admissionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Admission application submitted successfully!");
        admissionForm.reset();
    });
}

// ===============
//  Contact Form
// ===============
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent! We will contact you soon.");
        contactForm.reset();
    });
}