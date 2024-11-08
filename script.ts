document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form')!;
    var resumeOutput = document.getElementById('resumeOutput')!;

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        
        // Capture form values
        var name = (document.getElementById('name') as HTMLInputElement).value;
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var phone = (document.getElementById('phone') as HTMLInputElement).value;
        var address = (document.getElementById('address') as HTMLInputElement).value;
        var education = (document.getElementById('Education') as HTMLInputElement).value;
        var experience = (document.getElementById('Experience') as HTMLInputElement).value;
        var skills = (document.getElementById('Skill') as HTMLInputElement).value;
        
        // Build the resume HTML
        var resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        // Display the resume in the 'resumeOutput' div
        resumeOutput.innerHTML = resumeHTML;
    });
});
