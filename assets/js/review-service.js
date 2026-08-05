// Mock data
const mockReviews = [
    {
        id: 1,
        name: "Arjan K.",
        rating: 5,
        text: "Booked online in minutes and the reception team followed up the same day."
    },
    {
        id: 2,
        name: "Fjona M.",
        rating: 5,
        text: "Dr. Hoxha explained every step clearly."
    },
    {
        id: 3,
        name: "Besnik R.",
        rating: 5,
        text: "Clean, modern facility and excellent service."
    },
    {
        id: 4,
        name: "Elira P.",
        rating: 4,
        text: "Very friendly staff and quick service."
    },
    {
        id: 5,
        name: "Alban D.",
        rating: 5,
        text: "The doctors were professional and caring."
    }
];

// Returns the list of reviews
export async function getReviews() {
    return Promise.resolve(mockReviews);
}

// Simulates submitting a review
export async function submitReview(review) {

    mockReviews.unshift({
        id: Date.now(),
        ...review
    });

    return Promise.resolve({
        id: Date.now(),
        status: "pending"
    });

}
