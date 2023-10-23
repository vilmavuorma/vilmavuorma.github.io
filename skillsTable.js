class SkillsTable {
  constructor(skills) {
    this.skills = skills;
    this.skillsTable = document.getElementById("skills-table");
    this.renderTable();
    this.updateInterval = 5000; 
    this.updateSkillsTablePeriodically();
  }

  renderTable() {
    this.skillsTable.innerHTML = "";

    const headers = ["Programming Skills", "Skill Level"];
    const headerRow = this.skillsTable.insertRow(0);
    headers.forEach((header, index) => {
      const cell = headerRow.insertCell(index);
      cell.textContent = header;
    });

    this.skills.forEach((skill, index) => {
      const row = this.skillsTable.insertRow(index + 1);
      const cells = [skill.language, skill.skillLevel];
      cells.forEach((cellText, cellIndex) => {
        const cell = row.insertCell(cellIndex);
        cell.textContent = cellText;
      });
    });
  }

  updateSkillsTablePeriodically() {
    setTimeout(() => {
      this.renderTable();
      this.updateSkillsTablePeriodically();
    }, this.updateInterval);
  }
}

const programmingSkills = [
  { language: 'HTML', skillLevel: 'Intermediate' },
  { language: 'C', skillLevel: 'Intermediate' },
  { language: 'C++', skillLevel: 'Intermediate' },
  { language: 'Java', skillLevel: 'Intermediate' },
  { language: 'JavaScript', skillLevel: 'Intermediate' },
  { language: 'MySQL', skillLevel: 'Intermediate' },
  { language: 'CSS', skillLevel: 'Intermediate' },
  { language: 'Git', skillLevel: 'Intermediate' }
];


