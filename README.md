# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- Dekstop

![](/screenshot/dekstop.png)

- Mobile

![](/screenshot/mobile.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Adamskiee/faq-accordion)
- Live Site URL: [Live Website](https://adamskiee.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

1. Naming Conventions
```html
<section class="question__section">
  <p class="question__text">What is Frontend Mentor, and how will it help me?</p>
  <img class="question__image" src="assets/images/icon-minus.svg" alt="minus" />
  <p class="question__answer">
    Frontend Mentor offers realistic coding challenges to help
    developers improve their frontend coding skills with projects in
    HTML, CSS, and JavaScript. It's suitable for all levels and ideal
    for portfolio building.
  </p>
</section>
```

2. Event listener 
```js
questions.addEventListener("keypress", eventFunction, false );
questions.addEventListener("click", eventFunction, false );

function eventFunction(event){
    if(event.target.classList.contains('question__text')) {
        showAnswer(event.target.closest('.question__section'))
    }
}
```

3. Grid
```css
.question__section {
    display: grid;
    grid-template: auto auto / 1fr 30px;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}
```

### Continued development

I would like to learn more about how can i implement animation and transition in my website.

### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me to know more about how css properties works.
- [WebDocs](https://developer.mozilla.org/) - Has robust explanation about the html and css property

## Author

- Frontend Mentor - [@Adamskiee](https://www.frontendmentor.io/profile/Adamskiee)