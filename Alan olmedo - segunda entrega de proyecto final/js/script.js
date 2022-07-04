
//modo oscuro
let logo = document.getElementById("logos")
let icon = document.getElementById("icon")

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}




let localData = localStorage.getItem("theme");

if(localData == "light"){
    logo.src = "./img/pngegg (11).png"
    icon.src = "./img/moon.png";
    document.body.classList.remove("dark-theme");
}else if(localData == "dark"){
    logo.src = "./img/logo.png"
    icon.src = "./img/sun.png";
    document.body.classList.add("dark-theme");

}

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        logo.src = "./img/logo-blanco.png"
        icon.src = "./img/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        logo.src = "./img/pngegg (11).png"
        icon.src = "./img/moon.png"
        localStorage.setItem("theme", "light");
    }
}



// icono scroll


document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    let currentScroll = document.documentElement.scrollTop;

    //Operadores avanzados AND

    currentScroll > 0 && window.requestAnimationFrame(scrollUp);
    window.scrollTo (0, currentScroll - (currentScroll / 10));


    // if(currentScroll > 0){
    //     window.requestAnimationFrame(scrollUp);
    //     window.scrollTo (0, currentScroll - (currentScroll / 10));
    // }
}


buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;


    if(scroll > 500){
        buttonUp.style.transform = "scale(1)"
    } else if (scroll < 500){
        buttonUp.style.transform = "scale(0)"
    }
}



