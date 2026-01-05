(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll(".carousel-slide");
        const dotsContainer = document.querySelector(".carousel-dots");
        const prev = document.querySelector(".carousel-arrow.left");
        const next = document.querySelector(".carousel-arrow.right");

        if (!slides.length || !dotsContainer || !prev || !next) return;

        let index = 0;
        let autoplay = null;

        dotsContainer.innerHTML = "";

        slides.forEach((_, i) => {
            const dot = document.createElement("span");

            dot.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(i);
                resetAutoplay();
            });

            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll("span");

        function showSlide(i) {
            slides.forEach(s => s.classList.remove("active"));
            dots.forEach(d => d.classList.remove("active"));
            slides[i].classList.add("active");
            dots[i].classList.add("active");
        }

        function goToSlide(i) {
            index = (i + slides.length) % slides.length;
            showSlide(index);
        }

        prev.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(index - 1);
            resetAutoplay();
        });

        next.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(index + 1);
            resetAutoplay();
        });

        function startAutoplay() {
            autoplay = setInterval(() => {
                goToSlide(index + 1);
            }, 5000);
        }

        function resetAutoplay() {
            clearInterval(autoplay);
            startAutoplay();
        }

        showSlide(index);
        startAutoplay();
    });
})();
