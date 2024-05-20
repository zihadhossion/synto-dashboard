import ReactApexChart from 'react-apexcharts';
import "./sessionView.scss";
import Topbar from "../../../components/ui/topbar/Topbar";
import MoreIcon from "../../../utils/moreIcon/MoreIcon";
import BtnDrop from "../../../utils/btnDrop/BtnDrop";

export default function SessionView() {
    return (
        <section className="sessionView">
            <Topbar title={"Session overview"} IconBox={<MoreIcon Icon={<BtnDrop title={"This year"} />} />} />
            <ColumnChart />
        </section>
    )
};

function ColumnChart() {
    const data = {
        series: [{
            name: 'Session',
            data: [43, 31, 60, 70, 40, 63, 32, 53, 41, 80, 50, 20]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false,
                },
                events: {
                    mounted: (chart) => {
                        chart.windowResizeHandler();
                    }
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    dataLabels: {
                        show: false,
                        enabled: false,
                        position: 'bottom', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: true,
                }
            },
        },
    }

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}



