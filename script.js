// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});



// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



// ================= SKILLS SLIDER =================

const skillsContainer =
    document.getElementById("skillsContainer");

const skillsPrev =
    document.getElementById("skillsPrev");

const skillsNext =
    document.getElementById("skillsNext");


if (skillsContainer && skillsPrev && skillsNext) {


    skillsNext.addEventListener("click", function () {

        skillsContainer.scrollBy({

            left: 345,

            behavior: "smooth"

        });

    });


    skillsPrev.addEventListener("click", function () {

        skillsContainer.scrollBy({

            left: -345,

            behavior: "smooth"

        });

    });

}



// ================= PROJECTS SLIDER =================

const projectsSlider =
    document.getElementById("projectsSlider");

const projectsPrev =
    document.getElementById("projectsPrev");

const projectsNext =
    document.getElementById("projectsNext");


if (projectsSlider && projectsPrev && projectsNext) {


    projectsNext.addEventListener("click", function () {

        projectsSlider.scrollBy({

            left: 550,

            behavior: "smooth"

        });

    });


    projectsPrev.addEventListener("click", function () {

        projectsSlider.scrollBy({

            left: -550,

            behavior: "smooth"

        });

    });

}



// ================= CONTACT FORM =================

const form =
    document.getElementById("contactForm");


if (form) {


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Error elements

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const subjectError =
            document.getElementById("subjectError");

        const messageError =
            document.getElementById("messageError");

        const successMessage =
            document.getElementById("successMessage");


        // Clear previous errors

        nameError.textContent = "";

        emailError.textContent = "";

        subjectError.textContent = "";

        messageError.textContent = "";

        successMessage.textContent = "";


        let valid = true;



        // Name validation

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        } else if (name.length < 3) {

            nameError.textContent =
                "Name must contain at least 3 characters.";

            valid = false;

        }



        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }



        // Subject validation

        if (subject === "") {

            subjectError.textContent =
                "Please enter a subject.";

            valid = false;

        }



        // Message validation

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            valid = false;

        }



        // Successful form

        if (valid) {

            successMessage.textContent =
                "Your message has been submitted successfully!";

            form.reset();

        }

    });

}