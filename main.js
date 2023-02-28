const ratingCard = document.querySelector('.rating-card')
const thankyouCard = document.querySelector('.thankyou-card')
const form = document.querySelector('.ratings-form')
const starRating = document.querySelector('.star-rating') 

const handleSubmit = (e) => {
    e.preventDefault()
    let stars = form.rating.value
    starRating.textContent = stars
    // ratingCard.classList.add('hidden')
    ratingCard.style.opacity = 0;
    // thankyouCard.classList.remove('hidden')
    thankyouCard.style.opacity = 1;
}

form.addEventListener('submit', (e) => {handleSubmit(e)})
