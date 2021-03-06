let nav = document.querySelector('.nav');
let sectionOne = document.querySelector('.heroinfo');
let sectionOneOptions = {
    rootMargin: "50px 0px 0px 0px"
};

let sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
        } else{
            nav.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);