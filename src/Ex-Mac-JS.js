/*******************************************************
 *  PROJECTS PAGE INITIALIZATION - New function
 *******************************************************/
function initProjectsPage() {
    // Fade in project cards with staggered timing
    const projectCards = document.querySelectorAll(".project-card");
    if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
            // Start with invisible cards
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            // Fade in with staggered timing
            setTimeout(() => {
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 100 + (index * 200));
        });
    }

    // Add hover effects to project cards
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.8)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.3)";
        });
    });

    // Fade in lab equipment grid items
    const equipmentItems = document.querySelectorAll(".equipment-item");
    if (equipmentItems.length > 0) {
        equipmentItems.forEach((item, index) => {
            // Start with invisible items
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";

            // Fade in with staggered timing
            setTimeout(() => {
                item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 300 + (index * 100));
        });
    }

    // Add hover effects to equipment items
    equipmentItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px) scale(1.03)";
            item.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.7)";

            // Make icon glow
            const icon = item.querySelector(".equipment-icon");
            if (icon) {
                icon.style.textShadow = "0 0 10px rgba(0, 255, 255, 0.9)";
                icon.style.transform = "scale(1.1)";
            }
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0) scale(1)";
            item.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.3)";

            // Reset icon
            const icon = item.querySelector(".equipment-icon");
            if (icon) {
                icon.style.textShadow = "0 0 5px rgba(0, 255, 255, 0.5)";
                icon.style.transform = "scale(1)";
            }
        });
    });

    // Fade in gallery cards
    const galleryCards = document.querySelectorAll(".gallery-card");
    if (galleryCards.length > 0) {
        galleryCards.forEach((card, index) => {
            // Start with invisible cards
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            // Fade in with staggered timing
            setTimeout(() => {
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 500 + (index * 150));
        });
    }

    // Add hover effects to gallery cards
    galleryCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 0 20px rgba(255, 0, 255, 0.7)";

            // Highlight category
            const category = card.querySelector(".project-category");
            if (category) {
                category.style.backgroundColor = "rgba(255, 0, 255, 0.9)";
                category.style.boxShadow = "0 0 10px rgba(255, 0, 255, 0.7)";
            }
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 0 10px rgba(255, 0, 255, 0.4)";

            // Reset category
            const category = card.querySelector(".project-category");
            if (category) {
                category.style.backgroundColor = "rgba(255, 0, 255, 0.6)";
                category.style.boxShadow = "0 0 5px rgba(255, 0, 255, 0.4)";
            }
        });
    });

    // Random glitch effect for tech tags
    const techTags = document.querySelectorAll(".tech-tag");
    if (techTags.length > 0) {
        setInterval(() => {
            const randomTag = techTags[Math.floor(Math.random() * techTags.length)];
            createGlitchEffect(randomTag);
        }, 3000);
    }

    // Add scanning effect to project sections
    const projectSections = document.querySelectorAll(".projects-section");
    projectSections.forEach(section => {
        // Create scanner line
        const scannerLine = document.createElement("div");
        scannerLine.classList.add("scanner-line");
        scannerLine.style.position = "absolute";
        scannerLine.style.left = "0";
        scannerLine.style.width = "100%";
        scannerLine.style.height = "2px";
        scannerLine.style.background = "linear-gradient(to right, transparent, #0ff, transparent)";
        scannerLine.style.opacity = "0";
        scannerLine.style.boxShadow = "0 0 8px #0ff";
        scannerLine.style.pointerEvents = "none";
        scannerLine.style.zIndex = "2";

        section.style.position = "relative";
        section.appendChild(scannerLine);

        // Random scanning animation
        setTimeout(() => {
            setInterval(() => {
                scannerLine.style.opacity = "0.7";
                scannerLine.style.top = "0";
                scannerLine.style.transition = "top 3s linear, opacity 0.5s";

                setTimeout(() => {
                    scannerLine.style.top = section.offsetHeight + "px";

                    setTimeout(() => {
                        scannerLine.style.opacity = "0";

                        // Reset after animation completes
                        setTimeout(() => {
                            scannerLine.style.transition = "none";
                            scannerLine.style.top = "0";
                        }, 500);
                    }, 2800);
                }, 100);
            }, 8000 + (Math.random() * 5000));
        }, 1000 + (Math.random() * 2000));
    });

    // Buttons effects
    const projectButtons = document.querySelectorAll(".projects-section .cyberpunk-button");
    projectButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            if (button.classList.contains("learn-more")) {
                button.style.boxShadow = "0 0 25px #00f7ff";
            } else if (button.classList.contains("visit-us")) {
                button.style.boxShadow = "0 0 25px #00ff80";
            } else {
                button.style.boxShadow = "0 0 25px #ff00ff";
            }
            createGlitchEffect(button);
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            if (button.classList.contains("learn-more")) {
                button.style.boxShadow = "0 0 15px #00f7ff";
            } else if (button.classList.contains("visit-us")) {
                button.style.boxShadow = "0 0 15px #00ff80";
            } else {
                button.style.boxShadow = "0 0 15px #ff00ff";
            }
        });
    });
}/*******************************************************
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
    const projectsContent = document.getElementById("projects-content"); // Added for projects page
    const eventsContent = document.getElementById("events-content");
    const cyberpunkContent = document.getElementById("cyberpunk-content");

    // Hide all contents initially
    mainContent.style.display = "none";
    aboutContent.style.display = "none";
    if (projectsContent) projectsContent.style.display = "none"; // Added for projects page
    if (eventsContent) eventsContent.style.display = "none";
    if (cyberpunkContent) cyberpunkContent.style.display = "none";

    // Set loader text based on type, the text you see on when loading into a section.
    let contentText;
    if (type === "github") {
        contentText = "INITIATING GITHUB....";
    } else if (type === "events") {
        contentText = "LOADING EVENTS....";
    } else if (type === "projects") { // Added for projects page
        contentText = "ACCESSING PROJECT....";
    } else if (type === "cyberpunk") {
        contentText = "LOADING CYBERPUNK....";
    } else if (type === "about") {
        contentText = "LOADING ABOUT US DATA....";
    } else {
        contentText = "INITIATING SYSTEM 1....";
    }

    // Set typedTextEl width based on content length
    typedTextEl.style.width = Math.min(contentText.length, 24) + "ch";

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

                // Set connected message based on type
                if (type === "github") {
                    connectedEl.textContent = "CONNECTED to Ex Machina Parlor GitHub";
                } else if (type === "events") {
                    connectedEl.textContent = "EVENTS DATABASE CONNECTED";
                } else if (type === "projects") { // Added for projects page
                    connectedEl.textContent = "PROJECT DATABASE CONNECTED";
                } else if (type === "cyberpunk") {
                    connectedEl.textContent = "CYBERPUNK MODE ACTIVATED";
                } else if (type === "about") {
                    connectedEl.textContent = "ABOUT US DATA LOADED";
                } else {
                    connectedEl.textContent = "CONNECTED to Ex Machina Parlor";
                }

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
                        } else if (type === "projects" && projectsContent) { // Added for projects page
                            projectsContent.style.display = "block";
                            void projectsContent.offsetWidth;
                            projectsContent.style.opacity = "1";
                            initProjectsPage(); // Initialize projects page effects
                        } else if (type === "events" && eventsContent) {
                            eventsContent.style.display = "block";
                            void eventsContent.offsetWidth;
                            eventsContent.style.opacity = "1";
                            initEventsPage();
                        } else if (type === "cyberpunk" && cyberpunkContent) {
                            cyberpunkContent.style.display = "block";
                            void cyberpunkContent.offsetWidth;
                            cyberpunkContent.style.opacity = "1";
                            initCyberpunkPage();
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
    const projectsLink = document.getElementById("nav-projects");
    const eventsLink = document.getElementById("nav-events");
    const cyberpunkLink = document.getElementById("nav-cyberpunk");
    const githubLink = document.getElementById("nav-github");
    const aboutHomeLink = document.getElementById("nav-about-home");
    const eventsHomeLink = document.getElementById("nav-events-home");
    const projectsHomeLink = document.getElementById("nav-projects-home");
    const cyberpunkHomeLink = document.getElementById("nav-cyberpunk-home");

    if (homeLink) {
        homeLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }

    if (aboutLink) {
        aboutLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-about");
            loadContent("about");
        });
    }

    if (projectsLink) {
        projectsLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-projects");
            loadContent("projects");
        });
    }

    if (eventsLink) {
        eventsLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-events");
            loadContent("events");
        });
    }

    // New cyberpunk link event listener
    if (cyberpunkLink) {
        cyberpunkLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-cyberpunk");
            loadContent("cyberpunk");
        });
    }

    if (githubLink) {
        githubLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-github");
            loadContent("github");
        });
    }

    if (aboutHomeLink) {
        aboutHomeLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }

    if (eventsHomeLink) {
        eventsHomeLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }

    // New projects home link event listener
    if (projectsHomeLink) {
        projectsHomeLink.addEventListener("click", e => {
            e.preventDefault();
            setActiveNav("nav-home");
            loadContent("main");
        });
    }

    // New cyberpunk home link event listener
    if (cyberpunkHomeLink) {
        cyberpunkHomeLink.addEventListener("click", e => {
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
    if (activeLink) activeLink.classList.add("active");
}

/*******************************************************
 *  PARALLAX SCROLLING & ACTIVE NAV DOTS
 *******************************************************/
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.parallax-container');
    const navDots = document.querySelectorAll('.nav-dot');

    sections.forEach((section, index) => {
        const bg = section.querySelector('.parallax-bg');
        const distance = window.pageYOffset - section.offsetTop;
        bg.style.transform = `translateY(${distance * 0.5}px) translateZ(-1px) scale(2)`;

        // Update active nav dot
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
            const currentIndex = Array.from(document.querySelectorAll('.parallax-container'))
                .indexOf(currentSection);
            sectionNum = currentIndex + 2; // next section
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

/*******************************************************
 *  EVENTS PAGE INITIALIZATION
 *******************************************************/
function initEventsPage() {
    // Pulse effect for the address
    const addressElement = document.querySelector(".address");
    if (addressElement) {
        setInterval(() => {
            addressElement.style.textShadow = "0 0 10px #0ff";
            setTimeout(() => {
                addressElement.style.textShadow = "0 0 5px #0ff";
            }, 500);
        }, 3000);
    }

    // Add fade-in animations for event cards
    const eventCards = document.querySelectorAll(".event-card");
    if (eventCards.length > 0) {
        eventCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 100);
            }, index * 150);
        });
    }

    // Add hover effects for register buttons
    const registerButtons = document.querySelectorAll(".event-register");
    if (registerButtons.length > 0) {
        registerButtons.forEach(button => {
            button.addEventListener("mouseenter", () => {
                button.style.transform = "translateY(-2px)";
                button.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.8)";
            });

            button.addEventListener("mouseleave", () => {
                button.style.transform = "translateY(0)";
                button.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.5)";
            });
        });
    }

    // Initialize calendars
    initCalendarEffects();
    initTechEventsSection();
}

/*******************************************************
 *  CYBERPUNK PAGE INITIALIZATION - New function
 *******************************************************/
function initCyberpunkPage() {
    // Add fade-in animations for grid items
    const gridItems = document.querySelectorAll(".cyberpunk-grid-item");
    if (gridItems.length > 0) {
        gridItems.forEach((item, index) => {
            // Start with invisible items
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";

            // Fade in with staggered timing
            setTimeout(() => {
                item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 100 + (index * 150));
        });
    }

    // Add cyberpunk glitch effect to buttons periodically
    const cyberpunkButtons = document.querySelectorAll(".cyberpunk-button");
    if (cyberpunkButtons.length > 0) {
        // Initial glitch effect on page load
        cyberpunkButtons.forEach(button => {
            setTimeout(() => {
                createGlitchEffect(button);
            }, Math.random() * 1000);
        });

        // Periodic random glitch effect
        setInterval(() => {
            const randomButton = cyberpunkButtons[Math.floor(Math.random() * cyberpunkButtons.length)];
            createGlitchEffect(randomButton);
        }, 3000);

        // Add hover noise effect
        cyberpunkButtons.forEach(button => {
            button.addEventListener("mouseenter", () => {
                createGlitchEffect(button);
            });
        });
    }

    // Add random scanning effect to container elements
    const containers = document.querySelectorAll(".cyberpunk-container");
    if (containers.length > 0) {
        containers.forEach(container => {
            // Create scanner line element
            const scannerLine = document.createElement("div");
            scannerLine.classList.add("scanner-line");
            scannerLine.style.position = "absolute";
            scannerLine.style.left = "0";
            scannerLine.style.width = "100%";
            scannerLine.style.height = "2px";
            scannerLine.style.background = "linear-gradient(to right, transparent, #0ff, transparent)";
            scannerLine.style.opacity = "0";
            scannerLine.style.boxShadow = "0 0 8px #0ff";
            scannerLine.style.pointerEvents = "none";
            scannerLine.style.zIndex = "5";

            container.style.position = "relative";
            container.appendChild(scannerLine);

            // Periodic scanning animation
            setInterval(() => {
                scannerLine.style.opacity = "0.7";
                scannerLine.style.top = "0";
                scannerLine.style.transition = "top 3s linear, opacity 0.5s";

                setTimeout(() => {
                    scannerLine.style.top = container.offsetHeight + "px";

                    setTimeout(() => {
                        scannerLine.style.opacity = "0";

                        // Reset after animation completes
                        setTimeout(() => {
                            scannerLine.style.transition = "none";
                            scannerLine.style.top = "0";
                        }, 500);
                    }, 2800);
                }, 100);
            }, 10000 + (Math.random() * 5000));
        });
    }

    // Add flicker effect to titles
    const titles = document.querySelectorAll(".cyberpunk-title");
    if (titles.length > 0) {
        titles.forEach(title => {
            setInterval(() => {
                title.style.opacity = "0.7";
                title.style.textShadow = "0 0 5px #0ff";

                setTimeout(() => {
                    title.style.opacity = "1";
                    title.style.textShadow = "0 0 10px #0ff, 0 0 20px #0ff";
                }, 100 + (Math.random() * 150));
            }, 5000 + (Math.random() * 5000));
        });
    }
}

/*******************************************************
 *  CALENDAR INITIALIZATION
 *******************************************************/
function initCalendarEffects() {
    // Get the calendar iframe
    const calendarFrame = document.querySelector(".calendar-wrapper iframe");

    if (calendarFrame) {
        // Add loading animation
        calendarFrame.style.opacity = "0";
        calendarFrame.style.transform = "translateY(10px)";
        calendarFrame.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        // Show calendar with fade-in once loaded
        calendarFrame.onload = () => {
            setTimeout(() => {
                calendarFrame.style.opacity = "1";
                calendarFrame.style.transform = "translateY(0)";

                // Add subtle pulse effect to calendar border
                const calendarWrapper = document.querySelector(".calendar-wrapper");
                if (calendarWrapper) {
                    // Start with normal shadow
                    calendarWrapper.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)";

                    // Set up interval for pulsing effect
                    setInterval(() => {
                        // Brighten
                        calendarWrapper.style.boxShadow = "0 0 25px rgba(0, 255, 255, 0.8)";

                        // Then dim after a short delay
                        setTimeout(() => {
                            calendarWrapper.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)";
                        }, 2000);
                    }, 5000);
                }
            }, 300);
        };

        // Fallback in case onload doesn't trigger (already loaded)
        setTimeout(() => {
            if (calendarFrame.style.opacity === "0") {
                calendarFrame.style.opacity = "1";
                calendarFrame.style.transform = "translateY(0)";
            }
        }, 1000);
    }
}

/*******************************************************
 *  TECH EVENTS INITIALIZATION
 *******************************************************/
function initTechEventsSection() {
    // Add fade-in animations for tech event cards
    const techEventCards = document.querySelectorAll(".tech-event-card");
    if (techEventCards.length > 0) {
        techEventCards.forEach((card, index) => {
            // Start with invisible cards
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";

            // Fade in with staggered timing
            setTimeout(() => {
                card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 100 + (index * 150));
        });
    }

    // Add hover effects for tech event register buttons
    const techRegisterButtons = document.querySelectorAll(".tech-event-card .event-register");
    techRegisterButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            const parentCard = button.closest(".tech-event-card");
            if (parentCard.classList.contains("special")) {
                button.style.boxShadow = "0 0 20px rgba(255, 0, 255, 0.8)";
            } else {
                button.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.8)";
            }
        });

        button.addEventListener("mouseleave", () => {
            const parentCard = button.closest(".tech-event-card");
            if (parentCard.classList.contains("special")) {
                button.style.boxShadow = "0 0 10px rgba(255, 0, 255, 0.5)";
            } else {
                button.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.5)";
            }
        });
    });

    // Apply random glitch effects to tech event cards
    setInterval(() => {
        // Select a random card
        if (techEventCards.length > 0) {
            const randomCard = techEventCards[Math.floor(Math.random() * techEventCards.length)];
            createGlitchEffect(randomCard);
        }
    }, 7000);

    // Initialize Lu.ma and Philly Tech calendars
    const techCalendars = document.querySelectorAll(".luma-calendar iframe, .philly-calendar iframe");
    techCalendars.forEach(calendar => {
        // Add loading animation
        calendar.style.opacity = "0";
        calendar.style.transform = "translateY(10px)";
        calendar.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        // Show calendar with fade-in once loaded
        calendar.onload = () => {
            setTimeout(() => {
                calendar.style.opacity = "1";
                calendar.style.transform = "translateY(0)";

                // Add glitch effect after load
                createGlitchEffect(calendar);

                // Add pulse effect to calendar border
                const wrapper = calendar.closest(".calendar-wrapper");
                if (wrapper) {
                    setInterval(() => {
                        if (wrapper.classList.contains("luma-calendar")) {
                            wrapper.style.boxShadow = "0 0 30px rgba(255, 0, 255, 0.8)";
                            setTimeout(() => {
                                wrapper.style.boxShadow = "0 0 20px rgba(255, 0, 255, 0.5)";
                            }, 1000);
                        } else {
                            wrapper.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.8)";
                            setTimeout(() => {
                                wrapper.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.5)";
                            }, 1000);
                        }
                    }, 6000);
                }
            }, 300);
        };

        // Fallback in case onload doesn't trigger
        setTimeout(() => {
            if (calendar.style.opacity === "0") {
                calendar.style.opacity = "1";
                calendar.style.transform = "translateY(0)";
            }
        }, 3000);
    });
}

/*******************************************************
 *  CYBERPUNK GLITCH EFFECT
 *******************************************************/
function createGlitchEffect(element) {
    // Safety check
    if (!element) return;

    // Store original filter
    const originalFilter = element.style.filter || '';
    const originalTransform = element.style.transform || '';

    // Apply glitch effect - distorted colors and contrast
    element.style.filter = `${originalFilter} sepia(0.3) hue-rotate(90deg) saturate(1.5)`;
    element.style.transform = `${originalTransform} scale(1.01) skew(0.5deg, 0.5deg)`;

    // Flash effect
    setTimeout(() => {
        element.style.filter = `${originalFilter} invert(0.1) hue-rotate(180deg)`;
        element.style.transform = `${originalTransform} scale(0.99) skew(-0.5deg, -0.5deg)`;

        setTimeout(() => {
            element.style.filter = originalFilter;
            element.style.transform = originalTransform;
        }, 100);
    }, 100);
}