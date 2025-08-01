const questions = document.querySelector(".questions");
let activeSection = questions.firstElementChild;

console.log(activeSection);
questions.addEventListener("click", (event)=>{
    // showAnswer();
    if(event.target.classList.contains('question__text')) {
        showAnswer(event.target.closest('.question__section'))
    }
}, {capture: true})

function showAnswer(section) {
    if(activeSection == section) {
        console.log("same");
        return;
    }
    const answer = section.querySelector('.question__answer');
    const img = section.querySelector('.question__image');

    const activeAnswer = activeSection.querySelector('.question__answer');
    const activeImg = activeSection.querySelector('.question__image');

    activeAnswer.style.display = "none";
    activeImg.setAttribute('src', "assets/images/icon-plus.svg");
    activeImg.setAttribute('alt', "plus");

    answer.style.display = "block";
    img.setAttribute('src', "assets/images/icon-minus.svg");
    img.setAttribute('alt', "minus");

    activeSection = section;
}

