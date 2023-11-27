function openTab(event, tabName) {
    var i, section;

    // Hide main sections (About, Portfolio, Resume, Skills, Contact)
    section = document.getElementsByClassName('section');
    for (i = 0; i < section.length; i++) {
        section[i].style.display = 'none';
    }

    // Display selected section
    document.getElementById(tabName).style.display = 'block';

    // Remove active class from all tab links
    var tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Add active class to active tab
    event.currentTarget.classList.add('active');

    // Store selected tab in session storage (for refreshing and staying on the same tab)
    // Use session storage instead of local storage to refresh settings when the page is opened again (not refreshed)
    sessionStorage.setItem('activeTab', tabName);
}

function openSection(sectionName) {
    // Map section names to their corresponding IDs
    const sectionIds = {
        about: 'about',
        portfolio: 'portfolio',
        resume: 'resume',
        skills: 'skills',
        contact: 'contact'
    };

    const sectionId = sectionIds[sectionName];
    const section = document.getElementById(sectionId);
    
    if (section) {
        // Hide all sections
        var sections = document.getElementsByClassName('section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }

        // Display selected section
        section.style.display = 'block';
        
        // Remove active class from all tab links
        var tabLinks = document.querySelectorAll('.tablinks');
        tabLinks.forEach(function(tab) {
            tab.classList.remove('active');
        });

        // Find corresponding tab based on section name and add active class styling
        var currentTab = document.querySelector('.tablinks[onclick*="' + sectionName + '"]');
        if (currentTab) {
            currentTab.classList.add('active');
        }

        // Store selected tab in local storage (for refreshing and staying on the same tab)
        sessionStorage.setItem('activeTab', sectionId);
    }
}

// Side popout menu
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("openbtn").style.marginRight = "100%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openbtn").style.marginRight = "0";
}

window.onload = function() {
    var activeTab = sessionStorage.getItem('activeTab');
    if (activeTab) {
        openSection(activeTab);
    } else {
        openSection("about"); // Default about
        
    } 
};
