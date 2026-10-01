const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Change hamburger icon to X
        const icon = menuToggle.querySelector('i');

        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}


// ===============================
// MOBILE SERVICES DROPDOWN
// ===============================

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function(event) {

        // Only use click behaviour on mobile
        if (window.innerWidth <= 900) {
            event.preventDefault();

            dropdown.classList.toggle('mobile-open');
        }
    });
}


// ===============================
// CONTACT FORM → WHATSAPP
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        // Create WhatsApp message
        let whatsappMessage =
            "Hello Bekim Lumisolar,%0A%0A" +
            "*New Website Enquiry*%0A%0A" +
            "*Name:* " + encodeURIComponent(name) + "%0A" +
            "*Email:* " + encodeURIComponent(email) + "%0A" +
            "*Phone:* " + encodeURIComponent(phone) + "%0A" +
            "*Subject:* " + encodeURIComponent(subject) + "%0A" +
            "*Message:* " + encodeURIComponent(message);

        // Open WhatsApp
        window.open(
            "https://wa.me/254720235546?text=" + whatsappMessage,
            "_blank"
        );
    });
}

const problemForm = document.getElementById("problemForm");

if (problemForm) {
    problemForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value;
        const phone = document.getElementById("customerPhone").value;
        const service = document.getElementById("serviceType").value;
        const errorCode = document.getElementById("errorCode").value;
        const problem = document.getElementById("problemDescription").value;

        const message =
`Hello Bekim Lumisolar,

I need technical assistance.

Name: ${name}
Phone/WhatsApp: ${phone}
Service: ${service}
Error Code: ${errorCode || "Not provided"}

Problem:
${problem}`;

        const whatsappURL =
            "https://wa.me/254720235546?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });
}