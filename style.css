// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth scroll for appointment button
const appointmentBtn = document.getElementById('appointmentBtn');
if (appointmentBtn) {
    appointmentBtn.addEventListener('click', () => {
        const appointmentSection = document.getElementById('appointment');
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Form Validation and Handling
const appointmentForm = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const mobileNumber = document.getElementById('mobileNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let isValid = true;
        
        // Full Name Validation
        if (fullName.length < 3) {
            showError('fullName', 'Please enter a valid name (at least 3 characters)');
            isValid = false;
        }
        
        // Mobile Number Validation (Indian format)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(mobileNumber)) {
            showError('mobileNumber', 'Please enter a valid 10-digit mobile number');
            isValid = false;
        }
        
        // Email Validation (if provided)
        if (email && !isValidEmail(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Message Validation
        if (message.length < 10) {
            showError('message', 'Please enter at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid - show success message
            appointmentForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Log data (in real scenario, this would be sent to backend)
            console.log('Form Data:', {
                fullName,
                mobileNumber,
                email,
                message,
                timestamp: new Date().toISOString()
            });
            
            // Reset form
            appointmentForm.reset();
            
            // Show success message for 5 seconds then reset
            setTimeout(() => {
                successMessage.style.display = 'none';
                appointmentForm.style.display = 'block';
            }, 5000);
        }
    });
}

// Validation Helper Functions
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');
    
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Sticky Header on Scroll
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// Add Animation on Scroll for Service Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards for animation
const serviceCards = document.querySelectorAll('.service-card, .video-card, .contact-card');
serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Prevent excessive form submission
let formSubmitting = false;
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        if (formSubmitting) {
            e.preventDefault();
            return;
        }
        formSubmitting = true;
        
        setTimeout(() => {
            formSubmitting = false;
        }, 1000);
    });
}

// Accessibility: Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mental Wellness Clinic Website Loaded');
});
