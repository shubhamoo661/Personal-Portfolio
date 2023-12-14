// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

//Scroll Section
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    // sections.forEacha(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 100;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id') 

    //     if(top >= offset && top < offset + height) {
    //         // action navbar links
    //         navLinks.forEach(links => {
    //             links.classList.remove('active');
    //             document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
    //         });
    //         // active sections for animation on scroll
    //         sec.classList.add('show-animate');
    //     }
    //     // if want to use animaton that repeats on scroll use this
    //     else {
    //         sec.classList.remove('show-animate');
    //     }
    // })


    //  Sticky header
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    //  Remove toggle icon and navebar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Form clear after submit










// _____________________

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = Math.random() * 5;
//         console.log(num)
//         if (num > 2.5) {
//             return resolve('succes')
//         }
//         else {
//             return reject('fail')
//         }
//     }, 2000)
// })

// console.log(pro)

// pro
//     .then((res) => {
//         console.log('Fullfilled', res)
//     })
//     .catch((err) => {
//         console.log('Rejected', err)
//     })

