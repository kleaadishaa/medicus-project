//doctors-profile.js
import { doctorsData } from "./data/doctors-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const doc = doctorsData.find(d => d.id === id) || doctorsData[0];
  if (!doc) return;

  document.getElementById("breadcrumbDoctor").textContent = doc.name;

  document.getElementById("doctorHeader").innerHTML = `
    <div class="doctor-header-inner">
      <div class="doctor-header-photo-wrap">
        <img src="${doc.photo}" alt="${doc.name}" class="doctor-header-photo">
      </div>
      <div class="doctor-header-info">
        <span class="doctor-header-dept">${doc.department}</span>
        <h1>${doc.name}</h1>
        <p class="doctor-header-title">${doc.title}</p>
        <div class="doctor-header-rating">
          <span class="stars">${"\u2605".repeat(Math.round(doc.rating))}${"\u2606".repeat(5 - Math.round(doc.rating))}</span>
          <span class="rating-value">${doc.rating}</span>
          <span class="review-count">(${doc.reviewCount} reviews)</span>
        </div>
      </div>
      <a href="contact.html?doctor=${doc.id}#appointment-section" class="btn btn-success doctor-header-cta"> Book Appointment </a>  
    </div>
  `;

  document.getElementById("doctorMain").innerHTML = `
    <section class="doctor-section">
      <h5>Biography</h5>
      <p>${doc.biography}</p>
    </section>

    <section class="doctor-section">
      <h5>Experience</h5>
      <ul class="doctor-list">${doc.experience.map(e => `<li>${e}</li>`).join("")}</ul>
    </section>

    <section class="doctor-section">
      <h5>Specializations</h5>
      <div class="doctor-tags">
        ${doc.specializations.map(s => `<span class="doctor-tag">${s}</span>`).join("")}
      </div>
    </section>

    <section class="doctor-section">
      <h5>Education</h5>
      <ul class="doctor-list">${doc.education.map(e => `<li>${e}</li>`).join("")}</ul>
    </section>

    <section class="doctor-section">
      <h5>Certificates</h5>
      <ul class="doctor-list">${doc.certificates.map(c => `<li>${c}</li>`).join("")}</ul>
    </section>

    <section class="doctor-section">
      <h5>Reviews</h5>
      ${doc.reviews.map(r => `
        <div class="doctor-review-card">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <strong>${r.name}</strong>
            <span class="stars small">${"\u2605".repeat(r.rating)}${"\u2606".repeat(5 - r.rating)}</span>
          </div>
          <p class="small text-muted mb-0">${r.comment}</p>
        </div>
      `).join("")}
    </section>
  `;

  document.getElementById("doctorQuickFacts").innerHTML = `
    <div class="doctor-quickfacts-card">
      <h6>Quick Facts</h6>
      <ul class="quickfacts-list">
        <li>
          <span class="qf-label">Languages</span>
          <span class="qf-value">${doc.languages.join(", ")}</span>
        </li>
        <li>
          <span class="qf-label">Working Hours</span>
          <span class="qf-value">${doc.workingHours}</span>
        </li>
        <li>
          <span class="qf-label">Department</span>
          <span class="qf-value">${doc.department}</span>
        </li>
      </ul>
    </div>
  `;
});