class Animator {
  constructor() {
    this.elements = document.querySelectorAll(".fade-in");
    this.handleScroll = this.handleScroll.bind(this);
    this.setupListeners();
  }

  setupListeners() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const windowHeight = window.innerHeight;

    this.elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;

      if (elementTop < windowHeight - elementHeight / 2) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }
}