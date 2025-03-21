document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Carregar tema salvo
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Alternar tema
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Animação da mão acenando
    const waveEmoji = document.querySelector(".wave");
    waveEmoji.classList.add("wave-animation");
});
