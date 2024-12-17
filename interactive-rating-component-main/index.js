const ratingButtons = document.querySelectorAll('.rating button');
const submitButton = document.querySelector('.submit-button');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you');
const selectedRating = document.getElementById('selected-rating');
const errorMessage = document.querySelector('.error-message');

let selectedValue = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedValue = button.textContent;
        errorMessage.style.display = 'none';
    });
});

submitButton.addEventListener('click', () => {
    if (selectedValue > 0) {
        selectedRating.textContent = selectedValue;
        ratingState.style.display = 'none';
        thankYouState.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
});