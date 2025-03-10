/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

// navList variable  -> <ul> element
// sections variable -> list of <section> elements
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * Create new <li> element and inside that list create <a> element then
 * Add 'class' and 'href' attributes to it and
 * Passing 'section' as an input to get 'id' and 'data-nav' using .getAttribute() & Template Literals then
 * Returns a new list with anchor to specific section id as HTML
 */

function createList(section) {
  const newList = document.createElement("li");
  newList.innerHTML = `<a href="#${section.getAttribute(
    "id"
  )}" class="menu__link">
	${section.getAttribute("data-nav")}</a>`;

  return newList;
}

/**
 * In makeActive function it will take 1 input(item) then
 * Remove the current item with the class active then
 * Passing the item that you want to add the class 'active'
 */

function makeActive(item) {
  const current = document.querySelector(".active");
  if (current !== null) {
    current.classList.remove("active");
  }
  item.classList.add("active");
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the nav-bar using for...of loop and createList() function then add the list to <ul> element

function createNav(navList, sections) {
  for (let section of sections) {
    const secList = createList(section);

    navList.appendChild(secList);
  }
}
createNav(navList, sections);

// navLinks variable stores the <a> elements of nav-bar
const navLinks = document.querySelectorAll(".menu__link");

/**
 * makeLinkActive funcation takes 'items' as an input where items are the <a> elements of nav-bar
 * then loops through each item and adds a click event for each, using for..of loop
 * then it will call makeActive() function to add class 'active' to each item.
 */

function makeLinkActive(items) {
  for (let item of items) {
    item.addEventListener("click", function () {
      makeActive(item);
    });
  }
}
makeLinkActive(navLinks);

/**
 * Add class 'active' to section when near top of viewport when scrolling using Intersection Observer API
 * and remove current 'active' section
 */

function activeWhenScroll(sections, navLinks) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.63,
  };

  for (let i = 0; i < sections.length; i++) {
    const observer = new IntersectionObserver(function (entries) {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          navLinks[i].classList.add("active");
          sections[i].classList.add("your-active-class");
        } else {
          navLinks[i].classList.remove("active");
          sections[i].className = " ";
        }
      }
    }, options);
    observer.observe(sections[i]);
  }
}
activeWhenScroll(sections, navLinks);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
