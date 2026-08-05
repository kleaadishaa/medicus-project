import { getServiceById } from "../js/data/services-data.js";
import { getDoctorById } from "../js/data/doctors-data.js";

document.addEventListener("DOMContentLoaded", () => {

  // Get service ID from URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Get service data
  const service = getServiceById(id);

  if (!service) {
    console.error("Service not found:", id);
    return;
  }


  // Breadcrumb

  const breadcrumbEl = document.getElementById("breadcrumbService");

  if (breadcrumbEl) {
    breadcrumbEl.textContent = service.title;
  }


  // Service Header

  const headerEl = document.getElementById("serviceHeader");

  if (headerEl) {
headerEl.innerHTML = `
  <div class="service-content">

    <div class="service-title-row">
      <div class="service-icon">
        <i class="fa-solid ${service.icon}"></i>
      </div>

      <h1>${service.title}</h1>
    </div>

    <div class="service-meta">
      <p class="service-tag mb-0">
        ${service.tag ?? ""}
      </p>

      <span class="badge service-badge">
        ${service.category ?? ""}
      </span>
    </div>

  </div>
`;
  }


  // Quick Facts

  const quickFactsEl = document.getElementById("quickFacts");

  if (quickFactsEl) {

    if (service.quickFacts) {

      quickFactsEl.innerHTML = `
        <div class="quick-card">

          <h5>Quick Facts</h5>

          <div class="fact">
            <i class="fa-regular fa-clock"></i>
            <span>${service.quickFacts.hours ?? ""}</span>
          </div>

          <div class="fact">
            <i class="fa-solid fa-location-dot"></i>
            <span>${service.quickFacts.location ?? ""}</span>
          </div>

          <div class="fact">
            <i class="fa-solid fa-shield-heart"></i>
            <span>${service.quickFacts.insurance ?? ""}</span>
          </div>

        </div>
      `;

    } else {

      quickFactsEl.innerHTML = "";

    }
  }

  // Overview

  const overviewEl = document.getElementById("overviewText");

  if (overviewEl) {

    overviewEl.innerHTML = `
      <p>
        ${service.description ?? ""}
      </p>
    `;

  }


  // Treatments

  const treatmentsEl = document.getElementById("treatments");
  if (treatmentsEl) {
    const treatments = service.treatments ?? [];
    if (treatments.length > 0) {
      treatmentsEl.innerHTML = `
        <div class="row g-3">
          ${treatments.map(treatment => `
            <div class="col-md-6">
              <div class="treatment-card">
                <i class="fa-solid fa-circle-check"></i>
                <span>${treatment}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {

      treatmentsEl.innerHTML = `
        <p class="text-muted">
          No treatments available for this service.
        </p>
      `;
    }
  }

  // Doctors
  const doctorsTabEl = document.getElementById("doctorsTab");
  if (doctorsTabEl) {
    const doctors = (service.doctorIds ?? [])
      .map(doctorId => getDoctorById(doctorId))
      .filter(Boolean);

    if (doctors.length > 0) {

      doctorsTabEl.innerHTML = `
        <div class="services-doctors-row">
          ${doctors.map(doctor => `
            <div class="services-details-doctor-card">
              <img
                src="${doctor.photo || "images/doctor-placeholder.jpg"}"
                alt="${doctor.name}"
                class="service-details-doctor-photo">

              <h5>  ${doctor.name} </h5>

              <p class="fw-semibold text-success mb-1"> ${doctor.title ?? ""}</p>

              ${ doctor.specialty ? `<p class="text-muted small">${doctor.specialty}</p>`  : "" }

              <a href="doctor-profile.html?id=${doctor.id}" class="btn btn-success"> View Profile</a>
            </div>
          `).join("")}

        </div>
      `;
    } else {

      doctorsTabEl.innerHTML = `
        <p class="text-muted">
          No doctors available for this service.
        </p>
      `;
    }
  }

  // FAQs
  const faqsEl = document.getElementById("faqs");
  if (faqsEl) {
    const faqs = service.faqs ?? [];
    if (faqs.length > 0) {
      faqsEl.innerHTML = `
        <div class="accordion" id="faqAccordion">
          ${faqs.map((faq, index) => `
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button ${index !== 0 ? "collapsed" : ""}"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq${index}"
                  aria-expanded="${index === 0}"
                  aria-controls="faq${index}"
                >
                  ${faq.q}
                </button>
              </h2>
              <div
                id="faq${index}"
                class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body"> ${faq.a} </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;

    } else {

      faqsEl.innerHTML = `
        <p class="text-muted">
          No frequently asked questions available.
        </p>
      `;

    }
  }
});