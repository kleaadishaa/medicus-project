import { doctorsData } from "./data/doctors-data.js";

// only first 4 doctors in index.html "homeDoctorsGrid"
function loadHomeDoctors() {
    const homeGrid = document.getElementById("homeDoctorsGrid");
    if (!homeGrid) return;

    const doctors = doctorsData.slice(0, 4);

    homeGrid.innerHTML = doctors.map(doc => `
        <div class="col-6 col-md-3">
            <article class="home-doctor-card h-100">
                <img src="${doc.photo}" alt="${doc.name}" class="home-doctor-avatar-img">
                <h3>${doc.name}</h3>
                <p class="home-doctor-role">${doc.department}</p>
                <a href="doctor-profile.html?id=${doc.id}" class="link-arrow">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </article>
        </div>
    `).join("");
}

// search, filter based on department, sorting
function loadDoctorsPage() {
    const doctorsGrid = document.getElementById("doctorsGrid");
    if (!doctorsGrid) return; // nuk jemi në doctors.html, dil

    const searchInput = document.getElementById("doctorSearch");
    const filtersEl = document.getElementById("departmentFilters");
    const sortSelect = document.getElementById("sortSelect");
    const resultsCountEl = document.getElementById("resultsCount");
    const noResultsEl = document.getElementById("noResults");

    let activeDept = "all";

    const departments = ["all", ...new Set(doctorsData.map(d => d.department))];

    filtersEl.innerHTML = departments.map(dept => `
        <button
            type="button"
            class="category-btn ${dept === "all" ? "active" : ""}"
            data-dept="${dept}"
        >
            ${dept === "all" ? "All Departments" : dept}
        </button>
    `).join("");

    filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".category-btn");
        if (!btn) return;

        activeDept = btn.dataset.dept;

        filtersEl.querySelectorAll(".category-btn").forEach(b =>
            b.classList.toggle("active", b === btn)
        );

        render();
    });

    searchInput.addEventListener("input", render);
    sortSelect.addEventListener("change", render);

    function getFiltered() {
        const term = searchInput.value.trim().toLowerCase();

        let list = doctorsData.filter(doc => {
            const matchesDept = activeDept === "all" || doc.department === activeDept;
            const matchesSearch = !term || doc.name.toLowerCase().includes(term);
            return matchesDept && matchesSearch;
        });

        const sortBy = sortSelect.value;
        if (sortBy === "rating") {
            list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        } else if (sortBy === "reviews") {
            list = [...list].sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
        } else {
            list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        }

        return list;
    }

    function render() {
        const list = getFiltered();

        resultsCountEl.textContent = `${list.length} doctor${list.length !== 1 ? "s" : ""} found`;
        noResultsEl.classList.toggle("d-none", list.length > 0);
        doctorsGrid.classList.toggle("d-none", list.length === 0);

        doctorsGrid.innerHTML = list.map(doc => `
            <div class="col-lg-4 col-md-6">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body text-center">
                        <img src="${doc.photo}" alt="${doc.name}" class="doctors-page-avatar-img mx-auto mb-3">
                        <h5 class="card-title">${doc.name}</h5>
                        <p class="text-muted mb-1">${doc.title}</p>
                        <p class="small text-success fw-semibold mb-2">${doc.department}</p>
                        ${doc.rating ? `
                            <p class="small text-muted mb-3">
                                ★ ${doc.rating.toFixed(1)}
                                ${doc.reviewCount ? `(${doc.reviewCount} reviews)` : ""}
                            </p>
                        ` : ""}
                        <a href="doctor-profile.html?id=${doc.id}" class="btn btn-outline-success btn-sm mt-2">
                            View Profile →
                        </a>
                    </div>
                </div>
            </div>
        `).join("");
    }
    render();
}

document.addEventListener("DOMContentLoaded", () => {
    // After a category is chosen, this collapses 
  const departmentFilters = document.getElementById('departmentFilters');
  if (!departmentFilters) return;

  departmentFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;

    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(departmentFilters);
      bsCollapse.hide();
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {

    loadHomeDoctors();
    loadDoctorsPage();
});