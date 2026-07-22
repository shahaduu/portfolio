// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});



// ================================
// Scroll Reveal Animation
// ================================

const cards = document.querySelectorAll(

".project-card, .experience-card, .skill-box, .education-card, .card"

);


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0) scale(1)";

observer.unobserve(entry.target);

}

});

},

{

threshold:0.15

}

);



cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform="translateY(40px) scale(.98)";

card.style.transition=
`opacity .8s ease ${index*0.08}s,
transform .8s ease ${index*0.08}s`;


observer.observe(card);


});




// ================================
// Professional Navbar Effect
// ================================

const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


if(!header) return;


if(window.scrollY > 50){

header.style.backdropFilter="blur(10px)";

header.style.boxShadow=
"0 8px 30px rgba(0,0,0,.25)";

}

else{

header.style.backdropFilter="none";

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


const top=
section.offsetTop - 150;


if(window.scrollY >= top){

current=section.id;

}


});


navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href")==="#"+current
){

link.classList.add("active");

}


});


});




// ================================
// Modern Typing Effect
// ================================


const words=[

"Artificial Intelligence",

"Data Analytics",

"Machine Learning",

"Digital Transformation"

];


const title=document.querySelector(".hero-text h3");


let wordIndex=0;

let charIndex=0;

let deleting=false;



function typingEffect(){


if(!title) return;


const word=words[wordIndex];


if(!deleting){


title.innerHTML=
word.substring(0,charIndex++);


if(charIndex > word.length){

deleting=true;

setTimeout(typingEffect,1200);

return;

}


}

else{


title.innerHTML=
word.substring(0,charIndex--);


if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}


setTimeout(typingEffect,deleting ? 40 : 80);


}


typingEffect();




// ================================
// Page Load Animation
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

document.body.style.transition="0.5s ease";

});
