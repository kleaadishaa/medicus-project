import { getReviews, submitReview } from "./review-service.js";

// DOM Elements
const reviewsList = document.getElementById("reviews-list");
const loading = document.getElementById("reviews-loading");
const empty = document.getElementById("reviews-empty");
const error = document.getElementById("reviews-error");

const showMoreBtn = document.getElementById("show-more-btn");
const showLessBtn = document.getElementById("show-less-btn");

const form = document.getElementById("review-form");
const message = document.getElementById("review-message");
const submitBtn = document.getElementById("submit-review");

let reviews = [];
let visibleReviews = 3;
let selectedRating = 0;

// Rating stars
const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);

        stars.forEach((s) => {
            s.classList.toggle(
                "active",
                Number(s.dataset.value) <= selectedRating
            );
        });
    });
});


// Load Reviews
async function loadReviews() {
    // Stop if reviews list doesn't exist
    if (!reviewsList) {
        console.error(
            'Reviews container not found. Make sure your HTML contains: id="reviews-list"'
        );
        return;
    }

    try {
        // Show loading
        loading?.classList.remove("d-none");

        // Hide other states
        empty?.classList.add("d-none");
        error?.classList.add("d-none");

        // Get reviews
        reviews = await getReviews();

        // Hide loading
        loading?.classList.add("d-none");

        // No reviews
        if (reviews.length === 0) {
            empty?.classList.remove("d-none");
            return;
        }

        renderReviews();

    } catch (err) {
        console.error("Failed to load reviews:", err);

        loading?.classList.add("d-none");
        error?.classList.remove("d-none");
    }
}

// Render Reviews
function renderReviews() {
    if (!reviewsList) {
        console.error(
            'Cannot render reviews because "#reviews-list" was not found.'
        );
        return;
    }

    reviewsList.innerHTML = "";

    reviews.slice(0, visibleReviews).forEach((review) => {

        const rating = Number(review.rating) || 0;

        const starsHTML = Array.from({ length: 5 }, (_, index) => {
            return `
                <span class="${index < rating ? "active" : ""}">
                    ★
                </span>
            `;
        }).join("");

        reviewsList.innerHTML += `
            <div class="col-md-4">
                <div class="review-card h-100">

                    <div class="review-stars" aria-label="${rating} out of 5 stars">
                        ${starsHTML}
                    </div>

                    <p class="review-text">
                        ${review.text}
                    </p>

                    <p class="review-name">
                        — ${review.name}
                    </p>

                </div>
            </div>
        `;
    });


// Show More
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            visibleReviews = Math.min(
                visibleReviews + 3,
                reviews.length
            );
            renderReviews();
        });
    }


// Show Less
    if (showLessBtn) {
        showLessBtn.addEventListener("click", () => {
            visibleReviews = 3;
            renderReviews();
        });
    }

}

// Submit Review
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("review-name");
        const textInput = document.getElementById("review-text");

        const name = nameInput?.value.trim() || "";
        const text = textInput?.value.trim() || "";

        // Reset message
        if (message) {
            message.className = "mt-3 text-center";
        }

        // Validate form
        if (!name || !text || selectedRating === 0) {
            if (message) {
                message.classList.add("error");
                message.textContent =
                    "Please complete all fields before submitting.";
            }

            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Submitting...";
        }

        try {
            // Submit review
            await submitReview({
                name,
                text,
                rating: selectedRating
            });

            reviews = await getReviews();
            visibleReviews = Math.max(visibleReviews, 3);
            renderReviews();
            form.reset();
            selectedRating = 0;
            stars.forEach((star) => {
                star.classList.remove("active");
            });

            if (message) {
                message.className = "mt-3 text-center success";
                message.textContent =
                    "Thank you! Your review has been submitted.";
            }

        } catch (err) {
            console.error("Failed to submit review:", err);

            if (message) {
                message.className = "mt-3 text-center error";
                message.textContent =
                    "Something went wrong. Please try again.";
            }

        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "Submit Review";
            }
        }
    });
}

loadReviews();