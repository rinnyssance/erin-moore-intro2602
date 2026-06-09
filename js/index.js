const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `Erin Moore © ${thisYear}`;

footer.appendChild(copyright);
document.body.appendChild(footer);

const skills = [
    "Python",
    "R",
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub",
    "Genomic Data Science",
    "Machine Learning",
    "Synthetic Biology"
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span> ${usersMessage} </span>
    `;

    const removeButton = document.createElement("button");

    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.reset();
});

fetch("https://api.github.com/users/rinnyssance/repos")
    .then((response) => response.json())
    .then((data) => {
        const repositories = data;
        console.log(repositories);

        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error);

        const projectSection = document.getElementById("projects");
        const errorMessage = document.createElement("p");

        errorMessage.innerText =
            "Sorry, my projects could not be loaded right now. Please try again later.";

        projectSection.appendChild(errorMessage);
    });