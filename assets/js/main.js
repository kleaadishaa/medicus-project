document.addEventListener("DOMContentLoaded", () => {
// Animation
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60
  });

  // links to pages
      const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPage = link.getAttribute("href");
          if (linkPage === currentPage) {
              link.classList.add("active");
          }
    });

});

// Navbar for each page
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <nav class="navbar navbar-expand-lg navbar-dark">
                          <div class="container">

                            <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="index.html">
                              <img src="assets/img/Medicus_logo.png" alt="Medicus logo" width="32" height="32">
                              MEDICUS
                            </a>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navMenu">

                              <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="doctors.html">Doctors</a></li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>`; 
  }
}

customElements.define('site-nav', SiteNav);

const nav = document.querySelector('site-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Footer for each page
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <footer class="main-footer text-light pt-5 pb-3 mt-5">
                          <div class="container">
                            <div class="row gy-4">
                              <!-- Hospital Info -->
                              <div class="col-lg-4">
                                <div class="d-flex align-items-center mb-3">
                                  <img src="assets/img/Medicus_logo.png" alt="Medicus Logo" width="42">
                                  <h4 class="fw-bold text-success ms-2 mb-0">MEDICUS</h4>
                                </div>

                                <div class="mt-3">
                                  <p class="mb-2"> <i class="bi bi-geo-alt-fill text-success me-2"></i> 125 Wellness Avenue, Tirana 1001, Albania </p>
                                  <p class="mb-2"> <i class="bi bi-telephone-fill text-success me-2"></i> +355 69 456 7812 </p>
                                  <p class="mb-0"><i class="bi bi-envelope-fill text-success me-2"></i> contact@medicushospital.com </p>
                                </div>

                                <!-- Links to social media -->
                                <div class="footer-social-links d-flex gap-3 mt-3">
                                  <a href="#" class="social-link"> <i class="bi bi-facebook"></i></a>
                                  <a href="#" class="social-link"> <i class="bi bi-instagram"></i> </a>
                                  <a href="#" class="social-link"> <i class="bi bi-whatsapp"></i> </a>
                                </div>
                              </div>

                              <!-- Quick Links -->
                              <div class="col-lg-3 quick-links">
                                <h5 class="fw-bold mb-3">Quick Links</h5>
                                <ul class="footer-list">
                                  <li class="mb-2">
                                    <a href="index.html" class="footer-link">Home</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="about.html" class="footer-link">About Us</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="services.html" class="footer-link">Services</a>
                                  </li>
                                  <li class="mb-2">
                                    <a href="doctors.html" class="footer-link">Doctors</a>
                                  </li>
                                  <li>
                                    <a href="contact.html" class="footer-link">Contact</a>
                                  </li>
                                </ul>
                              </div>

                              <!-- Map  Google Maps Embed-->
                              <div class="col-lg-5">
                                <h5 class="fw-bold mb-3">Find Us</h5>
                                <div class="map-container rounded overflow-hidden mb-3">
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5992.646590286313!2d19.81201867553061!3d41.32358279995135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350313540c99c4b%3A0x7398d6f11582ba30!2sDominusoft%20Education!5e0!3m2!1sen!2s!4v1783938915806!5m2!1sen!2s" 
                                    width="600" 
                                    height="450" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="strict-origin-when-cross-origin">
                                  </iframe>
                                </div>
                              </div>
                            </div>

                            <hr class="border-secondary my-4">
                            <div class="text-center small"> © 2026 <strong>Medicus Hospital</strong>. All Rights Reserved. </div>
                        </div>
                        </footer>`;
  }
}
customElements.define('site-footer', SiteFooter);
