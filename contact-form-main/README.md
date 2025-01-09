# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of the solution](./design/desktop-design.jpg)

### Links

- [Solution URL](https://github.com/salehjoseph/Frontend-Mentor-Challenges/tree/main/contact-form-main)
- [Live Site URL](https://salehjoseph.github.io/Frontend-Mentor-Challenges/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript for form validation and interactivity

### What I learned

Working on this project helped me refine my form validation techniques and improve accessibility. I also enhanced my skills in creating responsive layouts. Below are a few examples of what I learned:

```html
<!-- Custom input field structure -->
<div class="form-group">
  <label for="email">Email Address</label>
  <input id="email" type="email" placeholder="Enter your email" required />
</div>

/* Adding focus states */
input:focus {
  border: 2px solid #4caf50;
  outline: none;
}
// Simple validation for required fields
const validateForm = () => {
  const email = document.getElementById("email");
  if (!email.value) {
    alert("Email is required");
    return false;
  }
  return true;
};
```
### Continued development

I aim to further refine my skills in creating responsive designs and explore more advanced CSS techniques, including animations and transitions.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive documentation for HTML, CSS, and JavaScript.
- [Frontend Mentor](https://www.frontendmentor.io/) - An excellent platform for practicing frontend development challenges.

### Author

-[Frontend Mentor Profile:](https://www.frontendmentor.io/profile/salehjoseph)  
-[GitHub: ](https://github.com/salehjoseph)  
-[LinkedIn:](https://www.linkedin.com/in/sebaana-yusuf-215839247/)

---
### Acknowledgments

Big thanks to Frontend Mentor for providing such engaging challenges that help improve frontend development skills.
---
