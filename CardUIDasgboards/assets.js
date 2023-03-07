const chart = document.querySelector("#chart").getContext("2d")
const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
];
const datasets = [
    1, 5, 2, 8, 2, 2, 4, 7, 9, 6, 9, 9, 14, 19, 24, 27, 23, 29, 24, 27, 22, 19,
    15, 10, 15, 20, 18, 15, 19, 20, 27,
];

const gradientColor = chart.createLinearGradient(0, 0, 0, 88);
gradientColor.addColorStop(0, "rgba(87, 86, 252, 0.32)");
gradientColor.addColorStop(0.76, "rgba(87, 86, 252, 0)");

const data = {
    labels: labels,
    datasets: [
        {
            data: datasets,
            backgroundColor: gradientColor,
            borderColor: "rgb(87, 86, 252)",
        },
    ],
};

const options = {
    elements: {
        line: {
            fill: true,
            borderWidth: 2,
            tension: 0.4,
        },
        point: {
            hoverRadius: 4,
            radius: 0,
        },
    },
    interaction: {
        intersect: false,
        mode: "index",
    },
    maintainAspectRatio: false,
    scales: {
        y: { display: false },
        x: { display: false },
    },
    plugins: {
        legend: { display: false },
    },
};

new Chart(chart, {
    type: "line",
    data: data,
    options: options,
});