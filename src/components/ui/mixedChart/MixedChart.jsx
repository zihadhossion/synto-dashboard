import "./mixedChart.scss";
import ReactApexChart from 'react-apexcharts';

const data = {
    series: [{
        name: 'Orders',
        type: 'column',
        data: [60, 52, 57, 69, 54, 65, 80, 68, 50, 69, 57, 46,]
    }, {
        name: 'Sales',
        type: 'line',
        data: [60, 59, 77, 66, 64, 75, 80, 78, 69, 57, 76, 64]
    }],
    options: {
        chart: {
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        colors: ['#5A66F1', '#CBD5E1'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                borderRadius: 7,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ]
        },
        yaxis: [
            {
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false
                }
            },
        ],
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                // offsetY: 30,
                // offsetX: 60
            },
        },
        legend: {
            horizontalAlign: 'center',
            position: "top",
            offsetX: 40,
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 600,
        }
    },
};

function MixedChart() {

    return (
        <div className="mixedchart">
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    )
};

export default MixedChart;
