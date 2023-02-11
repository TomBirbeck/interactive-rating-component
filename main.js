const card = document.querySelector('.card')
const option1 = document.querySelector('.optionOne')
const option2 = document.querySelector('.optionTwo')
const option3 = document.querySelector('.optionThree')
const option4 = document.querySelector('.optionFour')
const option5 = document.querySelector('.optionFive')
const submit = document.querySelector('.submit')

const options =  [option1, option2, option3, option4, option5]

submit.addEventListener('mouseenter', ()=>{submit.classList.add('submithover')})
submit.addEventListener('mouseleave', ()=>{submit.classList.remove('submithover')})
options.map((option) => option.addEventListener('mouseenter', () => {option.classList.add('optionshover')}))
options.map((option) => option.addEventListener('mouseleave', ()=>{option.classList.remove('optionshover')}))