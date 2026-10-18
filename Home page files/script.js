// alert("Kshitij Says ., \n  For mobile user , If you want to see the certificates then first you need to copy the certificate text then two option is open , then you choose any one from two option and see which certificate you want to see.")


let certificate = document.querySelector("#certificate");
let certificateDiv = document.querySelector(".certificates-div");
certificate.addEventListener("click", () => {
    certificateDiv.style.display = "block";
})



const slider = document.getElementById("projectSlider");
const cards = [...document.querySelectorAll("#projectSlider .project-card")];
const dotsContainer = document.getElementById("sliderDots");

const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentSlide = 0;

function visibleCards() {
    return window.matchMedia("(max-width: 600px)").matches ? 1 : 2;
}

function maxSlide() {
    return Math.max(0, cards.length - visibleCards());
}

function createDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    for (let i = 0; i <= maxSlide(); i++) {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "slider-dot";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

        dot.addEventListener("click", () => {
            currentSlide = i;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    }
}

function updateSlider() {
    if (!slider || cards.length === 0) return;

    currentSlide = Math.max(0, Math.min(currentSlide, maxSlide()));

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(slider).gap) || 0;

    slider.style.transform =
        `translateX(-${currentSlide * (cardWidth + gap)}px)`;

    if (dotsContainer) {
        [...dotsContainer.children].forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    if (prevBtn) prevBtn.disabled = maxSlide() === 0;
    if (nextBtn) nextBtn.disabled = maxSlide() === 0;
}

function moveSlide(direction) {
    const max = maxSlide();

    if (max === 0) return;

    currentSlide += direction;

    if (currentSlide > max) currentSlide = 0;
    if (currentSlide < 0) currentSlide = max;

    updateSlider();
}

function refreshSlider() {
    createDots();
    updateSlider();
}

if (slider && cards.length > 0) {
    refreshSlider();

    window.addEventListener("resize", refreshSlider);
}