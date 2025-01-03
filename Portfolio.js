const scrollBox= document.getElementById('scrollBox');

function checkScroll(){
    if(window.scrollY>200){
        scrollBox.classList.add('show');

    }else{
        scrollBox.classList.remove('show');
    }
}
window.addEventListener('scroll',checkScroll);

/*document.querySelectorAll('.javascript, .java, .sql, .html, .css, .nodejs, .aws, .photoshop, .polisci, .compsci, .cloud, .sendmessage, .btn-intro').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });

    // Add click effect
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

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
});*/
// Add this to your Portfolio.js
document.addEventListener('DOMContentLoaded', function() {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-family: 'Orbitron', sans-serif;
        pointer-events: none;
        z-index: 10000;
        display: none;
        white-space: nowrap;
    `;
    document.body.appendChild(tooltip);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('[data-tooltip]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', e => {
            const tooltipText = button.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            
            // Position the tooltip above the button
            const rect = button.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });

        button.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });

        // Update tooltip position on button scale
        button.addEventListener('mousemove', e => {
            if (tooltip.style.display === 'block') {
                const rect = button.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            }
        });
    });
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
 
// Include EmailJS SDK
document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("zerogray11@gmail.com"); // Replace with your EmailJS user ID

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_6m5jupq", "template_es1te7g", contactForm)
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                alert("Error sending message: " + error.text);
            });
    });
});

