const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
});
