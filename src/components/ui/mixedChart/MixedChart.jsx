import "./mixedChart.scss";
import ReactApexChart from 'react-apexcharts';

const data = {
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
            offsetX: 40
        }
    },


};

function MixedChart() {
    return (
        <section className="mixedchart">
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </section>
    )
};

export default MixedChart;
