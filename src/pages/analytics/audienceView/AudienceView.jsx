import "./audienceView.scss";
import ReactApexChart from 'react-apexcharts';
import Topbar from "../../../components/ui/topbar/Topbar"

export default function AudienceView() {
    return (
        <section className="audienceView">
            <Topbar title={"Session overview"} />
            <BarChart />
        </section>
    )
};

function BarChart() {
    const data = {
        series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                shared: true,
                intersect: false
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
        },


    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="bar" height={430} />
            </div>
            <div id="html-dist"></div>
        </div>
    )
};
