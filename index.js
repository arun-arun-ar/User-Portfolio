
    var skills = document.getElementsByClassName('skills-link');
    var contents = document.getElementsByClassName('content');

    function opentab(tabname) {
        // Remove active-link class from all skill links
        for (skill of skills) {
            skill.classList.remove("active-link");
        }
        // Hide all content sections
        for (content of contents) {
            content.classList.remove("display-skills");
        }
        // Add active-link class to the clicked skill link
        event.currentTarget.classList.add("active-link");
        // Display the corresponding content section
        document.getElementById(tabname).classList.add("display-skills");
    }
