import { servicesData } from "./data/services-data.js";

async function loadServices() {
    try {
        const services = servicesData;
        const homeGrid = document.getElementById("homeServicesGrid");
        const servicesGrid = document.getElementById("servicesGrid");
        const showMoreBtn = document.getElementById("show-more-btn");
        const showLessBtn = document.getElementById("show-less-btn");

        const HOME_VISIBLE_COUNT = 3;
        let homeExpanded = false;

        // -------- Homepage preview card (index.html ONLY) --------
        function createHomeServiceCard(service, index) {
            const linkHref = `service-detail.html?id=${service.id}`;

            return `
                <div class="col-md-4">
                    <article class="home-service-card h-100">
                        <span class="home-service-index">${String(index + 1).padStart(2, "0")}</span>
                        <div class="home-service-header">
                            <div class="home-service-icon">
                                <i class="fa-solid ${service.icon}"></i>
                            </div>

                            <h3 class="home-service-title"> ${service.title}</h3>
                        </div>
                        <div class="home-service-link">
                            <a href="${linkHref}" class="home-link-arrow">Learn more →</a>
                        </div>
                    </article>
                </div>
            `;
        }

        // -------- Full listing card (services.html) 
        function createServiceCard(service, index) {
            const linkHref = `service-detail.html?id=${service.id}`;

            return `
                <div class="col-lg-4 col-md-6">
                    <article class="service-card h-100">
                        <div class="service-img">
                            <img src="assets/img/services/${service.image}.jpg" alt="${service.title}" loading="lazy">
                        </div>
                        <div class="service-body">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <span class="service-icon"><i class="fa-solid ${service.icon}"></i></span>
                                <h3 class="service-title mb-0">${service.title}</h3>
                            </div>
                            <div class="service-footer">
                                <span class="service-tag">${service.tag}</span>
                                    <a href="${linkHref}" class="link-arrow"> Learn more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }

        // -------- Homepage preview grid --------
        function renderHome() {
            if (!homeGrid) return;
            const visible = homeExpanded ? services : services.slice(0, HOME_VISIBLE_COUNT);
            homeGrid.innerHTML = visible.map((service, i) => createHomeServiceCard(service, i)).join("");
            const hasMore = services.length > HOME_VISIBLE_COUNT;
            if (showMoreBtn) {
                showMoreBtn.classList.toggle("d-none", !hasMore || homeExpanded);
            }
            if (showLessBtn) {
                showLessBtn.classList.toggle("d-none", !homeExpanded);
            }
        }

        if (homeGrid) {
            renderHome();
            showMoreBtn?.addEventListener("click", () => {
                homeExpanded = true;
                renderHome();
            });

            showLessBtn?.addEventListener("click", () => {
                homeExpanded = false;
                renderHome();
            });
        }

        // -------- Services listing page --------
        if (servicesGrid) {
            const searchInput = document.getElementById("serviceSearch");
            const sortSelect = document.getElementById("sortSelect");
            const categoryFilters = document.getElementById("categoryFilters");
            const resultsCount = document.getElementById("resultsCount");
            const pagination = document.getElementById("pagination");

            const PER_PAGE = 9;

            const state = {
                category: "All Services",
                search: "",
                sort: "az",
                page: 1
            };

            function getFilteredServices() {
                let list = services.slice();

                if (state.category !== "All Services") {
                    list = list.filter(s => s.category === state.category);
                }

                if (state.search.trim() !== "") {
                    const q = state.search.trim().toLowerCase();
                    list = list.filter(s =>
                        s.title.toLowerCase().includes(q) ||
                        s.tag.toLowerCase().includes(q) ||
                        s.description.toLowerCase().includes(q)
                    );
                }

                list.sort((a, b) => {
                    return state.sort === "za"
                        ? b.title.localeCompare(a.title)
                        : a.title.localeCompare(b.title);
                });

                return list;
            }

            function renderPagination(totalItems) {
                if (!pagination) return;

                const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));
                if (state.page > totalPages) state.page = totalPages;

                let html = `
                    <li class="page-item ${state.page === 1 ? "disabled" : ""}">
                        <button class="page-link" data-page="${state.page - 1}" aria-label="Previous">&lt;</button>
                    </li>
                `;

                for (let p = 1; p <= totalPages; p++) {
                    html += `
                        <li class="page-item ${p === state.page ? "active" : ""}">
                            <button class="page-link" data-page="${p}">${p}</button>
                        </li>
                    `;
                }

                html += `
                    <li class="page-item ${state.page === totalPages ? "disabled" : ""}">
                        <button class="page-link" data-page="${state.page + 1}" aria-label="Next">&gt;</button>
                    </li>
                `;

                pagination.innerHTML = html;

                pagination.querySelectorAll(".page-link").forEach(btn => {
                    btn.addEventListener("click", () => {
                        const page = Number(btn.dataset.page);
                        if (!page || page < 1) return;
                        state.page = page;
                        render();
                        servicesGrid.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                });
            }

            function render() {
                const filtered = getFilteredServices();
                const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
                if (state.page > totalPages) state.page = totalPages;

                const start = (state.page - 1) * PER_PAGE;
                const pageItems = filtered.slice(start, start + PER_PAGE);

                if (resultsCount) {
                    resultsCount.textContent = filtered.length === 0
                        ? "No services found"
                        : `Showing ${pageItems.length} of ${filtered.length} services`;
                }

                servicesGrid.innerHTML = pageItems.length
                    ? pageItems.map((service, i) => createServiceCard(service, i)).join("")
                    : `<div class="col-12"><div class="services-empty">No services match your search or filters.</div></div>`;

                renderPagination(filtered.length);
            }

            searchInput?.addEventListener("input", (e) => {
                state.search = e.target.value;
                state.page = 1;
                render();
            });

            sortSelect?.addEventListener("change", (e) => {
                state.sort = e.target.value;
                state.page = 1;
                render();
            });

            categoryFilters?.addEventListener("click", (e) => {
                const btn = e.target.closest(".category-btn");
                if (!btn) return;

                categoryFilters.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                state.category = btn.dataset.category;
                state.page = 1;
                render();
            });

            render();
        }

    } catch (error) {
        console.error(error);
    }
}


// Mbyll automatikisht collapse-in e kategorive (mobile/tablet) pasi zgjidhet nje kategori
document.addEventListener('DOMContentLoaded', () => {
  const categoryFilters = document.getElementById('categoryFilters');
  if (!categoryFilters) return;

  categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;

    // Vetem nen breakpoint-in lg (tablet/mobile), ku collapse eshte aktiv
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(categoryFilters);
      bsCollapse.hide();
    }
  });
});

document.addEventListener("DOMContentLoaded", loadServices);
