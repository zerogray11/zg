const scrollBox= document.getElementById('scrollBox');

function checkScroll(){
    if(window.scrollY>200){
        scrollBox.classList.add('show');

    }else{
        scrollBox.classList.remove('show');
    }
}
window.addEventListener('scroll',checkScroll);



document.addEventListener('DOMContentLoaded', () => {
    // Service descriptions
  

    // Add hover effects
    function addHoverEffects() {
        const serviceBoxes = document.querySelectorAll('#serviceBoxes > div');
        
        serviceBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                box.style.transform = 'scale(1.05)';
                box.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            });

            box.addEventListener('mouseleave', () => {
                box.style.transform = 'scale(1)';
                box.style.boxShadow = 'none';
            });
        });
    } 

    // Call functions to add interactivity
    
    addHoverEffects();
});



document.addEventListener('DOMContentLoaded', () => {
    // Select all elements to animate
    const animationElements = [
        { selector: '#boxServicesTitle h2', type: 'title' },
        { selector: '#serviceBoxes > div', type: 'box' },
        { selector: '.project1', type: 'content' },
        { selector: '.project2', type: 'content' },
        { selector: '.project3', type: 'content' },
        { selector: '.project4', type: 'content' },
        { selector: '.projectstitlebox', type: 'title' },
        { selector: '#aboutTitle', type: 'title' },
        { selector: '#description', type: 'content' },
        { selector: '#skills', type: 'content' },
        { selector: '#boxContact .ctitle', type: 'title' },
        { selector: '#boxContact #connect', type: 'content' },
        { selector: '#boxContact #writingboxes', type: 'content' },
        { selector: '#boxContact .Reserved', type: 'content' }
    ];

    // Collect all elements
    const elementsToAnimate = animationElements.flatMap(item =>
        Array.from(document.querySelectorAll(item.selector))
    );

    // Intersection Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const targetElements = Array.from(
                entry.target.querySelectorAll(
                    '#boxServicesTitle h2, #serviceBoxes > div, .project1, .project2, .project3, .project4, .projectstitlebox, #aboutTitle, #description, #skills, #boxContact .ctitle, #boxContact #connect, #boxContact #writingboxes, #boxContact .Reserved'
                )
            );

            if (entry.isIntersecting) {
                targetElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            } else {
                targetElements.forEach(element => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(50px)';
                });
            }
        });
    }, observerOptions);

    // Prepare initial state for all elements
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.3s ease, transform 0.6s ease';
    });

    // Observe all sections
    const containersToObserve = [
        document.getElementById('boxServices'),
        document.getElementById('boxProjects'),
        document.getElementById('boxAbout'),
        document.getElementById('boxContact')
    ].filter(container => container !== null);

    containersToObserve.forEach(container => {
        observer.observe(container);
    });
});
 


document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px;
        border-radius: 4px;
        font-size: 10px;
        font-family: 'Orbitron', sans-serif;
        pointer-events: none;
        z-index: 99999; /* Always on top */
        display: none;
        white-space: pre-wrap;
        text-align: left;
        max-width: 250px;
        line-height: 1.4;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(tooltip);

    const buttons = document.querySelectorAll('[data-tooltip]');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const tooltipText = button.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';

            const rect = button.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        button.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        button.addEventListener('mousemove', () => {
            const rect = button.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS with your User ID
    emailjs.init("adp9dP0AyFPViAyRp"); // Replace with your EmailJS user ID

    // Get the form element
    const contactForm = document.getElementById("contactForm");
    
    // Debugging to see if form is properly selected
    console.log(contactForm); 

    // Handle form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Debugging form values to ensure data is correct
        const formData = new FormData(contactForm);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Send form data using EmailJS
        emailjs.sendForm("service_6m5jupq", "template_1mnqqfr", contactForm)
            .then(() => {
                alert("Message sent successfully!"); // Success alert
                contactForm.reset(); // Reset form fields
            })
            .catch((error) => {
                alert("Error sending message: " + error.text); // Error alert
                console.error(error); // Log error for debugging
            });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const text = "Hey there! I'm Zero!";
    const element = document.querySelector('.hey');
    element.textContent = ''; // Clear any pre-existing text

    let charIndex = 0;
    let cursorVisible = true;

    // Create cursor element
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.marginLeft = '2px';
    element.appendChild(cursor);

    // Type text
    function typeText() {
        if (charIndex < text.length) {
            element.insertBefore(
                document.createTextNode(text[charIndex]),
                cursor
            );
            charIndex++;
            setTimeout(typeText, 100); // Adjust speed here
        } else {
            setTimeout(resetAnimation, 3000); // Restart after a delay
        }
    }

    // Blink cursor
    function blinkCursor() {
        cursorVisible = !cursorVisible;
        cursor.style.opacity = cursorVisible ? '1' : '0';
    }

    // Reset animation
    function resetAnimation() {
        charIndex = 0;
        element.textContent = ''; // Clear all text
        element.appendChild(cursor); // Add cursor back
        typeText(); // Restart typing
    }

    // Start typing
    typeText();

    // Start cursor blinking
    setInterval(blinkCursor, 500); // Adjust blink speed here
});

// Updated logic for animation reset
if (entry.isIntersecting) {
    entry.target.classList.add('animate-in');
} else {
    entry.target.classList.remove('animate-in');
}
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('[data-tooltip]');

    // Function to remove all existing tooltips
    const removeTooltips = () => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach((tooltip) => tooltip.remove());
    };

    // Attach event listeners to each project
    projects.forEach((project) => {
        project.addEventListener('touchstart', (e) => {
            // Remove any lingering tooltips
            removeTooltips();

            // Show a new tooltip
            const tooltipText = project.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = tooltipText;
            document.body.appendChild(tooltip);

            // Position the tooltip
            const rect = project.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.bottom + 10 + window.scrollY}px`; // Adjust for scroll position

            // Automatically remove the tooltip after a delay
            setTimeout(() => {
                tooltip.remove();
            }, 2000);

            // Prevent default touch behavior (e.g., click triggering)
            e.preventDefault();
        });
    });

    // Remove tooltips on scroll
    document.addEventListener('scroll', removeTooltips);

    // Remove tooltips on touch elsewhere
    document.addEventListener('touchstart', (e) => {
        if (![...projects].includes(e.target)) {
            removeTooltips();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px;
        border-radius: 4px;
        font-size: 14px;
        font-family: 'Orbitron', sans-serif;
        pointer-events: none;
        z-index: 99999; /* Always on top */
        display: none;
        white-space: pre-wrap;
        text-align: left;
        max-width: 250px;
        line-height: 1.4;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(tooltip);

    const buttons = document.querySelectorAll('[data-tooltip]');

    // Function to hide tooltip
    const hideTooltip = () => {
        tooltip.style.display = 'none';
    };

    // Function to center tooltip on mobile
    const centerTooltipMobile = (button) => {
        const rect = button.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const tooltipWidth = tooltip.offsetWidth;
        
        // Center horizontally on screen
        tooltip.style.left = `${(windowWidth - tooltipWidth) / 2}px`;
        tooltip.style.top = `${rect.bottom + 10}px`;
    };

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const tooltipText = button.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';

            const rect = button.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        button.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        button.addEventListener('mousemove', () => {
            const rect = button.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        // Modified touch handler
        button.addEventListener('touchstart', (e) => {
            const tooltipText = button.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            
            // Center tooltip for mobile
            centerTooltipMobile(button);
            
            // Hide tooltip after 1.5 seconds
            setTimeout(hideTooltip, 1500);
            e.preventDefault();
        });
    });

    // Touch-specific scroll handler
    let touchScrollTimeout;
    document.addEventListener('scroll', () => {
        if ('ontouchstart' in window) {  // Only for touch devices
            hideTooltip();
            clearTimeout(touchScrollTimeout);
            touchScrollTimeout = setTimeout(hideTooltip, 100);
        }
    }, { passive: true });

    // Additional touch-specific cleanup
    document.addEventListener('touchmove', hideTooltip, { passive: true });
    document.addEventListener('touchend', hideTooltip, { passive: true });
    
});
