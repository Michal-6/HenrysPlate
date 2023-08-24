const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains("hidden")){
                entry.target.classList.add('show');
                setTimeout(() => {
                    entry.target.style.transitionDelay = "0ms";
                }, 700)
            }
            if(entry.target.classList.contains("hidden-underline")){
                entry.target.classList.add('show-underline');
            }
            if(entry.target.classList.contains("hidden-img")){
                entry.target.classList.add('show-img');
            }
        }
        else{
            //entry.target.classList.remove('show_sc');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden,.hidden-underline,.hidden-img');
hiddenElements.forEach((el) => observer.observe(el));