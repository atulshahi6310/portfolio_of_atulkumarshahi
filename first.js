
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width + "%";
    });
});