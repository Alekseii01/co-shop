export function generateStars(rating: number): { starsHtml: string, roundedRating: number } {

    const roundedRating = Math.round(rating * 2) / 2;

    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else if (i - 0.5 === roundedRating) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }

    return { starsHtml, roundedRating };
}