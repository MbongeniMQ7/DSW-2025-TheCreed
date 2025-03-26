//Processing Time Chart
var options = {
    chart: {
      type: "line",
      height: "400px",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 7,
      colors: ["#5a8f76"],
    },
    markers: {
      size: 7,
      colors: ["#5a8f76"],
    },
    series: [
      {
        name: "Average days",
        data: [7, 5, 7, 14, 22, 7],
      },
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();


//Processed/Unprocessed Applications Chart
var totalValue = 1000; //maximum per scale
var approved = 845;
var pending = 338;
var denied = 553;

var approvedScaled = (approved / totalValue) * 100;
var pendingScaled = (pending / totalValue) * 100;
var deniedScale = (denied / totalValue) * 100;

var options = {
    series: [approvedScaled, pendingScaled, deniedScale],
    chart: {
        height: 390,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            track: {
                show: true,
                background: '#e0e0e0',
                strokeWidth: '97%',
                margin: 5, 
            },
            dataLabels: {
                name: {
                    show: false, 
                },
                value: {
                    show: false,
                }
            },
            barLabels: {
                enabled: true,
                useSeriesColors: true,
                offsetX: -8,
                fontSize: '16px',
                formatter: function(seriesName, opts) {
                    return seriesName + ": " + Math.round((opts.w.globals.series[opts.seriesIndex] / 100) * totalValue);
                },
            },
        }
    },
    colors: ['#5a8f76', '#eee8b2', '#c18d52'],
    labels: ['Approved', 'Pending', 'Rejected'],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#app_chart"), options);
chart.render();

//Active greeting text
function getGreeting() {
    let greetingText;
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingText = "Good afternoon!";
    } else if (currentHour >= 17 && currentHour < 24) {
        greetingText = "Good evening!";
    } else {
        greetingText = "Good night!";
    }

    document.getElementById("greeting").textContent = greetingText;
}
window.onload = getGreeting;