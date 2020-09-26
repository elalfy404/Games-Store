let select = (s) => document.querySelector(s),
    selectAll = (s) => document.querySelectorAll(s),
    mainSVG = select("#mainSVG"),
    pacman = select("#pacman"),
    allFood = selectAll("#food *");

gsap.set("svg", {
    visibility: "visible",
});
gsap.set("circle", {
    transformOrigin: "50% 50%",
});

let tl = gsap.timeline();
tl.to(pacman, {
    duration: 0.25,
    drawSVG: "90% 10%",
    x: 50,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
})
    .to(
        "#startFood",
        {
            duration: 0.5,
            repeat: -1,
            x: "-=100",
            scale: 0,
            ease: "sine.inOut",
        },
        0
    )
    .to(
        allFood,
        {
            duration: 0.25,
            x: "-=50",
            stagger: {
                each: 0.05,
            },
            ease: "sine.inOut",
            repeat: -1,
        },
        0
    )
    .from(
        allFood[5],
        {
            duration: 0.5,
            repeat: -1,
            scale: 0,
        },
        0
    );
document.body.style.overflow = "hidden";
const loader = document.querySelector(".loader");
const onReady = (callback) => {
    let intervalId = window.setInterval(() => {
        if (document.getElementsByTagName("body")[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
            loader.parentNode.removeChild(loader);
        }
        document.body.style.overflow = "auto";
    }, 2000);
};
const setVisible = (selector, visible) => {
    document.querySelector(selector).style.display = visible ? "block" : "none";
};

onReady(() => {
    setVisible("#loading", false);
});

// ------------
