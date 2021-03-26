AOS.init();

const options = {
    cutoutPercentage: 65,
    animation: {
        easing: "easeOutQuint",
    },

    animateScale: true,
    tooltips: {
        enabled: false,
    },

    events: [],
};

const skills = [
    {
        id: "Vue",
        values: [70, 30],
    },
    {
        id: "JavaScript",
        values: [75, 25],
    },
    {
        id: "jQuery",
        values: [65, 35],
    },
    {
        id: "Bootstrap",
        values: [80, 20],
    },
    {
        id: "Git",
        values: [65, 35],
    },
    {
        id: "SCSS",
        values: [70, 20],
    },
    {
        id: "webpack",
        values: [65, 35],
    },
    {
        id: "htmlCss",
        values: [85, 15],
    },
];

let offset = 0;
let skillOpen= false;

let skillPosition = document.querySelector("#skill").offsetTop+document.querySelector("#skill-position").offsetTop-300;

document.addEventListener("scroll", function () {
    if (window.scrollY > skillPosition & !skillOpen) {
        for (const skill of skills) {
            const canvas = document.querySelector(`#${skill.id}`);
            if (!canvas) {
                continue;
            }

            const ctx = canvas.getContext("2d");

            setTimeout(() => {
                const chart = new Chart(ctx, {
                    type: "doughnut",
                    data: {
                        datasets: [
                            {
                                data: skill.values,
                                backgroundColor: ["#f79d3c", "#f1f1f3"],
                                borderColor: "#f1f1f3",
                            },
                        ],
                    },
                    options: options,
                });
            }, offset);

            offset += 250;
        }
        skillOpen = true;
    }
});
