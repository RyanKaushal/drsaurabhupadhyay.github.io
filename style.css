* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2c5aa0;
    --secondary-color: #4a90e2;
    --accent-color: #1abc9c;
    --success-color: #27ae60;
    --error-color: #e74c3c;
    --light-bg: #f0f4f8;
    --white: #ffffff;
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
    --border-color: #ecf0f1;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
.header {
    background-color: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: var(--transition);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.clinic-branding {
    flex: 1;
}

.clinic-name {
    font-size: 28px;
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 5px;
}

.clinic-tagline {
    font-size: 14px;
    color: var(--text-light);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 5px 0;
    transition: var(--transition);
}

.navigation {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    color: var(--text-dark);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--white);
    padding: 100px 0;
    text-align: center;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 18px;
    margin-bottom: 40px;
    max-width: 600px;
    opacity: 0.95;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Buttons */
.btn {
    padding: 14px 32px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
    text-align: center;
    touch-action: manipulation;
    min-width: 180px;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #1e3f5a;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background-color: var(--accent-color);
    color: var(--white);
}

.btn-secondary:hover {
    background-color: #16a085;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-whatsapp {
    background-color: #25d366;
    color: var(--white);
    padding: 14px 40px;
}

.btn-whatsapp:hover {
    background-color: #1ead4f;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    font-size: 38px;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 50px;
    font-weight: 700;
}

.section-subtitle {
    text-align: center;
    color: var(--text-light);
    margin-bottom: 40px;
    font-size: 16px;
}

/* About Section */
.about {
    background-color: var(--light-bg);
}

.about-text h3 {
    font-size: 32px;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.qualification {
    font-size: 18px;
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 15px;
}

.education {
    font-size: 16px;
    margin-bottom: 20px;
}

.experience {
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 20px;
    line-height: 1.8;
}

.expertise-list {
    list-style: none;
    margin-top: 30px;
}

.expertise-list li {
    padding: 10px 0;
    padding-left: 30px;
    position: relative;
    font-size: 15px;
    color: var(--text-dark);
}

.expertise-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
    font-size: 18px;
}

/* Services Section */
.services {
    background-color: var(--white);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.service-card {
    background-color: var(--light-bg);
    padding: 30px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border-left: 4px solid var(--primary-color);
}

.service-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
}

.service-card h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 20px;
}

.service-card p {
    color: var(--text-dark);
    font-size: 15px;
    line-height: 1.7;
}

/* Videos Section */
.videos {
    background-color: var(--light-bg);
}

.videos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.video-card {
    background-color: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.video-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-5px);
}

.video-card iframe {
    width: 100%;
    display: block;
}

.video-card h3 {
    padding: 20px;
    color: var(--primary-color);
    font-size: 18px;
}

/* Form Section */
.appointment {
    background-color: var(--white);
}

.form-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

.appointment-form {
    background-color: var(--light-bg);
    padding: 40px;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-dark);
}

.form-group input,
.form-group textarea {
    padding: 12px 15px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.error-message {
    color: var(--error-color);
    font-size: 13px;
    margin-top: 5px;
    display: none;
}

.error-message.show {
    display: block;
}

.form-group input.error,
.form-group textarea.error {
    border-color: var(--error-color);
}

.success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #c3e6cb;
}

.success-message h3 {
    margin-bottom: 10px;
}

/* WhatsApp Contact Section */
.whatsapp-contact {
    background: linear-gradient(135deg, #25d366 0%, #1ead4f 100%);
    color: var(--white);
    text-align: center;
    padding: 60px 0;
}

.whatsapp-content h3 {
    font-size: 32px;
    margin-bottom: 15px;
}

.whatsapp-content p {
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

/* Contact Info Section */
.contact-info {
    background-color: var(--light-bg);
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.contact-card {
    background-color: var(--white);
    padding: 30px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    text-align: center;
}

.contact-card h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 18px;
}

.contact-card p {
    color: var(--text-dark);
    margin-bottom: 8px;
    font-size: 15px;
}

.small-text {
    font-size: 13px;
    color: var(--text-light);
}

.disclaimer {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-light);
}

/* Footer */
.footer {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 40px 0 20px;
    margin-top: 60px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-links {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
}

.footer-link {
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition);
}

.footer-link:hover {
    text-decoration: underline;
}

.footer-disclaimer {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 20px;
    text-align: center;
}

.footer-disclaimer small {
    font-size: 12px;
    opacity: 0.85;
    line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }

    .navigation {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: var(--white);
        flex-direction: column;
        gap: 0;
        padding: 20px;
        box-shadow: var(--shadow);
        display: none;
        width: 100%;
    }

    .navigation.active {
        display: flex;
    }

    .nav-link {
        padding: 12px 0;
        border-bottom: 1px solid var(--border-color);
    }

    .nav-link::after {
        display: none;
    }

    .clinic-branding {
        flex: 1;
    }

    .clinic-name {
        font-size: 22px;
    }

    .clinic-tagline {
        font-size: 12px;
    }

    .hero-title {
        font-size: 36px;
    }

    .hero-subtitle {
        font-size: 16px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        min-width: auto;
    }

    .section-title {
        font-size: 28px;
        margin-bottom: 35px;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .videos-grid {
        grid-template-columns: 1fr;
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

    .appointment-form {
        padding: 25px;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        justify-content: center;
    }

    .whatsapp-content h3 {
        font-size: 24px;
    }

    .about-text h3 {
        font-size: 24px;
    }
}

@media (max-width: 480px) {
    .clinic-name {
        font-size: 18px;
    }

    .clinic-tagline {
        font-size: 11px;
    }

    .hero {
        padding: 60px 0;
    }

    .hero-title {
        font-size: 28px;
    }

    .hero-subtitle {
        font-size: 14px;
        margin-bottom: 25px;
    }

    .section-title {
        font-size: 24px;
    }

    .service-card,
    .contact-card,
    .video-card h3 {
        padding: 20px;
    }

    .appointment-form {
        padding: 20px;
    }

    .form-group input,
    .form-group textarea {
        padding: 10px 12px;
        font-size: 16px;
    }

    .qualification {
        font-size: 16px;
    }

    .hero-buttons {
        gap: 10px;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
