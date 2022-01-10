/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});
sr.reveal('.skills__data, .work__img, .contact__input', {
    interval: 200
});


/* background */

// Some random colors
/* const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.querySelector("#head-bg").append(ball);

}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [{
                transform: "translate(0, 0)"
            },
            {
                transform: `translate(${to.x}rem, ${to.y}rem)`
            }
        ], {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
 */

function copyURI(evt) {
    const emailNoti = document.querySelector("#email-noti")

    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
        /* clipboard successfully set */
        emailNoti.style.opacity = 1;

        setTimeout(() => {
            emailNoti.style.opacity = 0;
        }, 3000);

    }, () => {
        /* clipboard write failed */
    });
}


/* // Get the button that opens the modal
var btn = document.getElementById("myBtn"); */

/* // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]; */

// Get the modal
var modal;
var m_vid;

// When the user clicks the button, open the modal 
function modalOpen() {
    modal = document.getElementById("myModal");
    m_vid = document.getElementById("reel");

    modal.style.display = "flex";
    m_vid.play();
}

// When the user clicks on <span> (x), close the modal
function modalClose() {
    modal.style.display = "none";
    m_vid.pause();
    m_vid.currentTime = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    console.log(event);

    if (event.target == modal) {
        modalClose()
    }
});