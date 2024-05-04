/* Get elements from html */
const theme = document.getElementById("themeButton");
const back = document.getElementById("backButton");
const themeChange = document.querySelector("body");

/* Check if theme has already been set and if not set the default of light */
if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', 'light');
    themeChange.setAttribute('data-bs-theme', 'light');
}
if(localStorage.getItem('theme') === "light"){
        theme.textContent = "☀️";
        localStorage.setItem('theme', 'light');
    }
    else{
        theme.textContent = "🌚";
        localStorage.setItem('theme', 'dark');
        themeChange.setAttribute('data-bs-theme', 'dark')
    }   
/* Since bootstrap has an attribute property of data-bs-theme, we set it to dark/ light as appropriate whenever the toggle is pressed */
theme.onclick = function() {
    event.preventDefault();

    if(theme.textContent === "☀️"){
        theme.textContent = "🌚";
        localStorage.setItem('theme', 'dark');
    }
    else{
        theme.textContent = "☀️";
        localStorage.setItem('theme', 'light');
    }

    if(localStorage.getItem('theme') ==='dark'){
        themeChange.setAttribute('data-bs-theme', 'dark');
    
    }
    else{
        themeChange.setAttribute('data-bs-theme', 'light');
    
    }
    
}
/* Redirects to the main page */
back.onclick = function(){
    document.location.replace('./index.html');
}






