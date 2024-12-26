const scrollBox= document.getElementById('scrollBox');

function checkScroll(){
    if(window.scrollY>200){
        scrollBox.classList.add('show');

    }else{
        scrollBox.classList.remove('show');
    }
}
window.addEventListener('scroll',checkScroll);

document.querySelectorAll('.javascript, .java, .sql, .html, .css, .nodejs, .aws, .photoshop, .polisci, .compsci, .cloud, .sendmessage, .btn-intro').forEach(button => {
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
fetch('http://localhost:3000/api/message')
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    document.getElementById('apiMessage').innerText = data.message;
  });
