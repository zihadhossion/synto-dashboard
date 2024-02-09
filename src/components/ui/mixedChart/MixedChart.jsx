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
        data: [60, 59, 77, 66, 64, 75, 80, 78, 69, 97, 76, 64]
    }],
    options: {
        chart: {
            // height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                borderRadius: 7,
                // endingShape: 'rounded',
                // borderRadius: "50px"
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
                    show: true,
                },
                tooltip: {
                    enabled: false
                }
            },
            // {
            //     seriesName: 'Income',
            //     show: false,
            //     opposite: true,
            //     axisTicks: {
            //         show: false,
            //     },
            //     axisBorder: {
            //         show: false,
            //         color: '#00E396'
            //     },
            //     labels: {
            //         style: {
            //             colors: '#00E396',
            //         }
            //     },
            //     title: {
            //         show: false,
            //         text: "Operating Cashflow (thousand crores)",
            //         style: {
            //             color: '#00E396',
            //         }
            //     },
            // },
            // {
            //     seriesName: 'Revenue',
            //     opposite: true,
            //     axisTicks: {
            //         show: true,
            //     },
            //     axisBorder: {
            //         show: true,
            //         color: '#FEB019'
            //     },
            //     labels: {
            //         style: {
            //             colors: '#FEB019',
            //         },
            //     },
            //     title: {
            //         text: "Revenue (thousand crores)",
            //         style: {
            //             color: '#FEB019',
            //         }
            //     }
            // },
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
            horizontalAlign: 'left',
            // offsetX: 40
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
