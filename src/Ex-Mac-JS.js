/*******************************************************
 *  LOADER, TYPED TEXT & CONTENT TRANSITIONS
 *******************************************************/
document.addEventListener("DOMContentLoaded", () => {
    loadContent("main");
});

function loadContent(type) {
    const loader = document.getElementById("loader");
    const typedTextEl = document.getElementById("typed-text");
    const squares = document.querySelectorAll(".square");
    const connectedEl = document.getElementById("connected");
    const mainContent = document.getElementById("main-content");
    const aboutContent = document.getElementById("about-content");

    // Hide both contents initially
    mainContent.style.display = "none";
    aboutContent.style.display = "none";

    // Set loader text based on type
    let contentText = (type === "github") ? "INITIATING GITHUB...." : "INITIATING SYSTEM 1....";

    // Reset loader state
    typedTextEl.textContent = "";
    squares.forEach(sq => sq.classList.remove("filled"));
    connectedEl.textContent = "";
    connectedEl.style.opacity = "0.5";

    // Show loader overlay
    loader.style.display = "flex";
    loader.style.opacity = "1";

    let index = 0;
    function typeText() {
        if (index < contentText.length) {
            typedTextEl.textContent += contentText.charAt(index);
            index++;
            setTimeout(typeText, 80);
        } else {
            fillSquares();
        }
    }
    typeText();

    function fillSquares() {
        let currentSquare = 0;
        const interval = setInterval(() => {
            if (currentSquare < squares.length) {
                squares[currentSquare].classList.add("filled");
                currentSquare++;
            } else {
                clearInterval(interval);
                connectedEl.textContent = (type === "github") ? "CONNECTED to Ex Machina Parlor GitHub" : "CONNECTED to Ex Machina Parlor";
                connectedEl.style.opacity = "1";

                // Fade out loader, then display content or open GitHub
                setTimeout(() => {
                    loader.style.opacity = "0";
                    setTimeout(() => {
                        loader.style.display = "none";
                        if (type === "about") {
                            aboutContent.style.display = "block";
                            void aboutContent.offsetWidth;
                            aboutContent.style.opacity = "1";
                        } else if (type === "github") {
                            window.open("https://github.com/ExMachinaParlor", "_blank");
                        } else {
                            mainContent.style.display = "block";
                            void mainContent.offsetWidth;
                            mainContent.style.opacity = "1";
                        }
                    }, 800);
                }, 1000);
            }
        }, 400);
    }
}

/*******************************************************
 *  NAVIGATION EVENTS
 *******************************************************/
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("nav-home");
    const aboutLink = document.getElementById("nav-about");
    const githubLink = document.getElementById("nav-github");
    const aboutHomeLink = document.getElementById("nav-about-home");

    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }
    if (aboutLink) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            setActiveNav("nav-about");
            loadContent("about");
        });
    }
    if (githubLink) {
        githubLink.addEventListener("click", (e) => {
            e.preventDefault();
            setActiveNav("nav-github");
            loadContent("github");
        });
    }
    if (aboutHomeLink) {
        aboutHomeLink.addEventListener("click", (e) => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }
});

function setActiveNav(id) {
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
    });
    const activeLink = document.getElementById(id);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

/*******************************************************
 *  FADE-IN ON SCROLL
 *******************************************************/
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('visible');
        }
    });
});

/*******************************************************
 *  PARALLAX SCROLLING & ACTIVE NAV DOTS
 *******************************************************/
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.parallax-container');
    const navDots = document.querySelectorAll('.nav-dot');

    sections.forEach((section, index) => {
        const bg = section.querySelector('.parallax-bg');
        const distance = window.pageYOffset - section.offsetTop;
        bg.style.transform = `translateY(${distance * 0.5}px) translateZ(-1px) scale(2)`;

        // Update active nav dot based on section's midpoint
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }
    });
});

/*******************************************************
 *  SMOOTH SCROLLING FOR NAV DOTS & SCROLL-DOWN BUTTONS
 *******************************************************/
document.querySelectorAll('.nav-dot, .scroll-down').forEach(item => {
    item.addEventListener('click', function() {
        let sectionNum;
        if (this.classList.contains('scroll-down')) {
            const currentSection = this.closest('.parallax-container');
            const currentIndex = Array.from(document.querySelectorAll('.parallax-container')).indexOf(currentSection);
            sectionNum = currentIndex + 2; // Next section (1-indexed)
        } else {
            sectionNum = this.getAttribute('data-section');
        }
        const section = document.getElementById(`section${sectionNum}`);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
