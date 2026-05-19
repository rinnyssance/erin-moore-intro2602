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

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}