function openTab(event, tabName) {
    var i, section;

    // Hide sections
    section = document.getElementsByClassName("section");
    for (i = 0; i < section.length; i++) {
        section[i].style.display = "none";
    }

    // Display selected section
    document.getElementById(tabName).style.display = "block";

    // Store selected tab in local storage (for refreshing and staying on same tab)
    localStorage.setItem('activeTab', tabName);
}

// Function to display the 'About' section on page load
window.onload = function() {
    // Get active tab from local storage
    var activeTab = localStorage.getItem('activeTab');

    // On refresh (from stored) display active tab, otherwise default to 'about' tab
    if (activeTab) {
        // Hide sections
        var sectionsToHide = document.getElementsByClassName('section');
        for (var i = 0; i < sectionsToHide.length; i++) {
            sectionsToHide[i].style.display = 'none';
        }

        // Show stored active tab
        document.getElementById(activeTab).style.display = 'block';
    } else {
        // Display the 'about' section by default
        document.getElementById('about').style.display = 'block';
    }
};