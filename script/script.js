function show(anything){
    document.querySelector('.header__menu').value = anything;
}

let menu = document.querySelector('.header__menu');
let items = document.querySelector('.header__list-div');

menu.onclick = function(){
menu.classList.toggle('open-menu');
items.classList.toggle('open-menu');

items.removeAttribute('style');

}

items.onclick = function(){
items.classList.remove('open-menu');
menu.classList.remove('open-menu');
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      items.style.transition = 'none';
    }
});


// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header div nav div ul li a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 350;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header div nav div ul li a[href*=' + id + ']').classList.add('active');
//       });
//     };
//   });
// };


// const checkboxes = document.querySelectorAll('input[name="accordion"]');
//     checkboxes.forEach((checkbox) => {
//         checkbox.addEventListener('change', function() {
//             checkboxes.forEach((cb) => {
//                 if (cb !== this) {
//                     cb.checked = false;
//                 }
//             });
//         });
//     });



const faqs = document.querySelectorAll('.faq__question');

faqs.forEach((faq) => {

    faq.addEventListener('click', () => {

        // Remove 'active' class from all elements
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });
        
        // Toggle 'active' class for the clicked element
        faq.classList.toggle('active');
    });
});