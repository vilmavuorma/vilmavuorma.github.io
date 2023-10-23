document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = new ThemeSwitcher();
  const animator = new Animator();
  const contactInfoFetcher = new ContactInfoFetcher();
  const skillsTable = new SkillsTable(programmingSkills);
  const contactFormHandler = new ContactFormHandler();
 
  const contactInfo = {
  github: 'https://github.com/vilmavuorma',
  };

  const githubElement = document.getElementById("github");
  githubElement.href = contactInfo.github;
});


