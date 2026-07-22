// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ================================
// Scroll Animation
// ================================

const cards = document.querySelectorAll(

".project-card, .experience-card, .skill-box, .education-card, .card"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.15

}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s ease";

observer.observe(card);

});


// ================================
// Navbar Shadow
// ================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});


// ================================
// Active Navigation Link
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ================================
// Typing Effect
// ================================

const text="Artificial Intelligence • Data Analytics • Digital Transformation";

let i=0;

const title=document.querySelector(".hero-text h3");

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();
