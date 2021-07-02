const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');
const aNavs = document.querySelectorAll('#a-nav')

const sectionOneOptions = {
    rootMargin: "-700px 0px 0px 0px"
}


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('header-scrolled');
            aNavs.forEach(aNav => {
                aNav.classList.add('a-scrolled');
            });

        } else {
            header.classList.remove('header-scrolled');
            aNavs.forEach(aNav => {
                aNav.classList.remove('a-scrolled');
            });
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);