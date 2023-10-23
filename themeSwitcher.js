class ThemeSwitcher {
  constructor() {
    this.themeButton = document.getElementById("change-theme");
    this.themeStylesheet = document.getElementById("theme");
    this.isDarkTheme = localStorage.getItem("theme") === "dark";

    this.themeButton.addEventListener("click", () => this.toggleTheme());
    this.updateThemeButton();

    this.setTheme(this.isDarkTheme);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.setTheme(this.isDarkTheme);
    this.updateThemeButton();
    this.showThemeChangeAlert(this.isDarkTheme);
  }

  updateThemeButton() {
    this.themeButton.style.fontFamily = "Arial, sans-serif";
    this.themeButton.textContent = this.isDarkTheme ? "Light Theme" : "Dark Theme";
  }

  setTheme(isDark) {
    const theme = isDark ? "dark.css" : "light.css";
    this.themeStylesheet.href = theme;
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  showThemeChangeAlert(isDark) {
    const alertMessage = isDark ? "Switched to Dark Theme" : "Switched to Light Theme";
    window.alert(alertMessage);
  }
}

  
