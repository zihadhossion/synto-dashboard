import "./piechart.scss";
import ReactApexChart from 'react-apexcharts';

const data = {
    series: [39, 55, 47],
    options: {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
            }
        }],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            text: "75%"
                        },
                        value: {
                            num: "75%"
                        }
                    }
                }
            }
        }
    },
};



function Piechart() {
    return (
        <>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </>
    )
};

export default Piechart;
