import "./visitor.scss";
import ReactApexChart from 'react-apexcharts';
import Topbar from "../ui/topbar/Topbar";

const data = {
    series: [{
        data: [480, 690, 1100, 1200, 1380]
    }],
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Medium', 'Instagram', 'LinkedIn', 'Twitter (X)', 'Facebook',],
            lines: {
                show: false,
            },
            labels: {
                style: {
                    colors: ['#64748b'],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#64748b'],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        tooltip: {
            y: {
                show: false,
                formatter: undefined,
                title: {
                    formatter: (seriesName) => !seriesName,
                },
            },
        }
    },
};


function Visitor() {
    return (
        <section className="visitor">
            <Topbar title={"Social Visitors"} />
            <div className="visitorContainer">
                <div id="chart">
                    <ReactApexChart options={data.options} series={data.series} type="bar" height={'100%'} />
                </div>
                <div id="html-dist"></div>
            </div>
        </section>
    )
};

export default Visitor;
