let links = document.querySelectorAll(".navbar .navbar-nav li a");
let navbar_btn_open = document.querySelector(".navbar .open");
let navbar_btn_close = document.querySelector(".navbar .close");

navbar_btn_open.onclick = ()=>{
    navbar_btn_close.style = "display:block";
    navbar_btn_open.style = "display:none";
}
navbar_btn_close.onclick = ()=>{
    navbar_btn_close.style = "display:none";
    navbar_btn_open.style = "display:block";
}
links.forEach(
    (ele) => {
        ele.onclick = ()=>{
            // delete active
            links.forEach(
                (ele)=>{
                     ele.classList.remove("active");
                }
            );
            // active new link
           ele.classList.add("active");
        }
    }
);1


// scrolling

let section = document.querySelector(".sec1")
let navbar = document.querySelector(".navbar")


window.onscroll = function(){
    if(window.scrollY >= section.offsetTop+70){
        navbar.style = "box-shadow: 0 0 20px #181f2b;";
    }
    if(window.scrollY < section.offsetTop+70){
        navbar.style = "box-shadow: 0";
    }
    // if(window.scrollY >= section.offsetTop+700){
    //     navbar.style = "background:#fff";
    // }
    // if(window.scrollY < section.offsetTop+700){
    //     navbar.style = "box-shadow: 0";
    // }
}


var typed = new Typed('#text', {
    strings: ['> Web Developer', '> Full Stack', '> Django Developer'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// Aos

const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach(
            (entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }/*else{
                    entry.target.classList.remove('show');
                }*/
            }
        );
    }
);

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach(
    (el)=>{
        observer.observe(el)
    }
);
