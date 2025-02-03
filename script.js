// JavaScript to dynamically add "active" class based on current page
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentLocation.split("/").pop()) {
        navLinks.forEach(nav => nav.classList.remove("active")); // Remove active from all
        link.classList.add("active"); // Add active to current
    }
});
// Load required external scripts dynamically
const loadScript = (src, integrity, crossorigin) => {
    let script = document.createElement("script");
    script.src = src;
    if (integrity) script.integrity = integrity;
    if (crossorigin) script.crossOrigin = crossorigin;
    script.async = false; // Ensure scripts load in order
    document.head.appendChild(script);
};

// Load jQuery
loadScript("https://code.jquery.com/jquery-3.2.1.slim.min.js", 
           "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN", 
           "anonymous");

// Load Popper.js
loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js", 
           "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q", 
           "anonymous");

// Load Bootstrap JS
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js", 
           "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl", 
           "anonymous");
