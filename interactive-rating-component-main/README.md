# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

During this project, I reinforced my understanding of creating responsive layouts using Flexbox and CSS custom properties. I also learned how to handle user interactions and state changes using JavaScript.

Here are some code snippets I'm proud of:

```html
<h1>How did we do?</h1>
```
```css
.rating button:hover {
  background-color: hsl(0, 0%, 100%);
  color: hsl(216, 12%, 8%);
}
```
```js
submitButton.addEventListener('click', () => {
  if (selectedValue > 0) {
    selectedRating.textContent = selectedValue;
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
  } else {
    errorMessage.style.display = 'block';
  }
});
```

### Continued development

In future projects, I want to continue focusing on improving my JavaScript skills, particularly in handling user interactions and state management. I also plan to explore more advanced CSS techniques and frameworks.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This is an excellent resource for web development documentation and tutorials.
- [CSS-Tricks](https://css-tricks.com/) - This site has a wealth of information on CSS techniques and best practices.

## Author

- Website - [Sebaana Yusuf Salim](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

I would like to thank the Frontend Mentor community for their support and feedback. Their insights and suggestions were invaluable in completing this project.
