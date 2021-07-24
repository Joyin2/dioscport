// function myFunction() {
//     var element = document.body;
//     element.classList.toggle(".dark-mode");
// }
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle(".darkkk-mode");
// }



$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});
// end




burger = document.querySelector('.burger')
navcontainer = document.querySelector('.navcontainer')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')


burger.addEventListener('click', () => {
    navbar.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    navcontainer.classList.toggle('h-nav-resp');

})


// modal start
const btnv = document.querySelector('.btnv');
const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');


btnv.addEventListener('click', () => {
    videoContainer.classList.add('show');
})


close.addEventListener('click', () => {
        videoContainer.classList.remove('show');
    })
    // modal end


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}






var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}




const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});