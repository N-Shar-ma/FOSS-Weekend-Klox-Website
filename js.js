const header = document.querySelector("header");

const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode()
{
	darkModeToggle.classList.toggle("dark");
	document.querySelector("body").classList.toggle("dark");
}

const menuToggle = document.querySelector("[data-menu-toggle]");
menuToggle.addEventListener("click", toggleMenu);

function toggleMenu() {
	header.classList.toggle("show-mobile");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
	navLink.addEventListener("click", closeMobileMenu);
})

function closeMobileMenu()
{
	header.classList.remove("show-mobile");
}