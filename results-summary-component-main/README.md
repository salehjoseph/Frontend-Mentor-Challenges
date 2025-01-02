# Frontend Mentor - Results summary component

![Design preview for the Results summary component coding challenge](./design/desktop-preview.jpg)

# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/yourusername/results-summary-component)
- Live Site URL: [Live Site URL](https://yourusername.github.io/results-summary-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

While working on this project, I learned how to effectively use CSS Grid and Flexbox to create responsive layouts. I also gained experience in dynamically populating content using JSON data.

Here’s a snippet of code I’m proud of:

```html
<div class="results-summary">
  <h1>Your Results</h1>
  <p>Great job! You scored higher than 65% of the people who have taken these tests.</p>
</div>
const data = require('./data.json');
const results = data.results.map(result => `<div>${result.category}: ${result.score}</div>`).join('');
document.getElementById('results').innerHTML = results;
```

### Continued development

In future projects, I want to focus on improving my skills in accessibility and performance optimization. I also plan to explore more advanced CSS techniques and JavaScript frameworks.

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand the fundamentals of CSS Grid.
- [Flexbox Froggy](https://flexboxfroggy.com/) - A fun and interactive way to learn Flexbox.

## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/salehjoseph)

## Acknowledgments

I’d like to thank the Frontend Mentor community for providing this challenge and the resources to improve my skills. Special thanks to [@mentorusername](https://www.frontendmentor.io/profile/mentorusername) for their helpful feedback.
