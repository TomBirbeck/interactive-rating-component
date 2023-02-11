const ratingCard = document.querySelector('.rating-card')
const thankyouCard = document.querySelector('.thankyou-card')
const option1 = document.querySelector('.optionOne')
const option2 = document.querySelector('.optionTwo')
const option3 = document.querySelector('.optionThree')
const option4 = document.querySelector('.optionFour')
const option5 = document.querySelector('.optionFive')
const submit = document.querySelector('.submit')
const starRating = document.querySelector('.star-rating') 

const options =  [option1, option2, option3, option4, option5]

let stars;

console.log(ratingCard)

const handleSelect = (options, selected) => {
for (let i = 0; i < options.length; i++) {
    if(options[i].textContent === selected.textContent){
        options[i].classList.add('options-selected')
        stars = Number(options[i].textContent)
        starRating.textContent = stars
    } else {
        options[i].classList.remove('options-selected')
    }
}
}

const handleSubmit = () => {
    console.log("hey")
    ratingCard.classList.add('hidden')
    thankyouCard.classList.remove('hidden')
}



submit.addEventListener('mouseenter', ()=>{submit.classList.add('submit-hover')})
submit.addEventListener('mouseleave', ()=>{submit.classList.remove('submit-hover')})
submit.addEventListener('click', () => {handleSubmit()})
options.map((option) => option.addEventListener('mouseenter', () => {option.classList.add('options-hover')}))
options.map((option) => option.addEventListener('mouseleave', ()=>{option.classList.remove('options-hover')}))
options.map((option) => option.addEventListener('click', () => {handleSelect(options, option)}))