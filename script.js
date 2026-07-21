// ===== Smooth Fade Animation =====

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ===== Navbar Shadow =====

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});
