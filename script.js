
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Consolidate DOMContentLoaded into a single function
document.addEventListener("DOMContentLoaded", function() {
    // Load research data
    fetch('research.json')
    .then(response => response.json())
    .then(data => {
        const researchContainer = document.getElementById('research-container');
        if (!researchContainer) {
            console.error('No element with ID "research-container" found in the document.');
            return;
        }
        // Clear existing content
        researchContainer.innerHTML = '';
        data.publications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication';
            pubElement.innerHTML = `<h3>${pub.title}</h3><p>${pub.authors}</p><p>${pub.summary}</p><a href="${pub.link}" target="_blank">Read More</a><p>${pub.details}</p>`;
            researchContainer.appendChild(pubElement);
        });
    })
    .catch(error => console.error('Error loading research data:', error));

    // Load portfolio data
    fetch('portfolio.json')
    .then(response => response.json())
    .then(data => {
        const portfolioContainer = document.getElementById('portfolio-container');
        if (!portfolioContainer) {
            console.error('No element with ID "portfolio-container" found in the document.');
            return;
        }
        // Clear existing content
        portfolioContainer.innerHTML = '';
        data.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'portfolio-item';
            projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><p>Technologies Used: ${project.technologies.join(', ')}</p>`;
            portfolioContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error loading portfolio data:', error));
});
