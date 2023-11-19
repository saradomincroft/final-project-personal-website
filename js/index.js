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

    // Store selected tab in local storage (for refreshing and staying on same tab)
    // Setter and Getter (Setter)
    localStorage.setItem('activeTab', tabName);
}

// Function to display the about section as default on page load but stay on selected page on refreshe
window.onload = function() {
    // Get active tab from local storage
    // Setter and Getter (Getter)
    var activeTab = localStorage.getItem('activeTab');

    // On refresh (from stored) display active tab, otherwise default to about tab
    if (activeTab) {
        // Hide sections
        var sectionsToHide = document.getElementsByClassName('section');
        for (var i = 0; i < sectionsToHide.length; i++) {
            sectionsToHide[i].style.display = 'none';
        }
        // Show stored active tab
        var activeTabElement = document.getElementById(activeTab);
        if (activeTabElement) {
            activeTabElement.style.display = 'block';

            // Find corresponding tab based on section ID and add active class styling
            var currentTab = document.querySelector('.tablinks[onclick*="' + activeTab + '"]');
            if (currentTab) {
                currentTab.classList.add('active');
            }
        }   
        
    } else {
        // Display the 'about' section by default
        document.getElementById("about").style.display = 'block';
    }
};

