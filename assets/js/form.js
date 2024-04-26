const theme = document.getElementById("themeButton");
const back = document.getElementById("backButton");
const themeChange = document.querySelector("body");

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

back.onclick = function(){
    window.location.href = '/index.html';
}






