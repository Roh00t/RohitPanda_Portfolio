// Typing Animation


var typed = new Typed(".typing", {
    strings: [" ", "Professional Scrum Master", "Professional Web App Pen Tester", "Professional Mobile App Pen Tester", "Web Designer", "Web Developer", "UI/UX Developer", "RPA Developer", "Software Developer", "Software Engineer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// Aside


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

    })
}


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() 
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
