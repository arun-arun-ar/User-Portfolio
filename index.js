
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
    document.addEventListener('DOMContentLoaded', function() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx_SmWiL8xhJ6yG0h9OwnxRQCfkFV2wM2jESPDoCru_kqClFg5jbl9wrUnHTdwgzNdn/exec'
        const form = document.querySelector('form')

        if (form) {
            form.addEventListener('submit', e => {
                e.preventDefault()
                alert('Your message is being submitted. Please wait...')
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => {
                        console.log('Success!', response)
                        alert('Your message has been submitted to the form.')
                        form.reset() // Clear the form
                    })
                    .catch(error => {
                        console.error('Error!', error.message)
                        alert('An error occurred. Please try again.')
                    })
            })
        } else {
            console.error('Form not found')
        }
    })