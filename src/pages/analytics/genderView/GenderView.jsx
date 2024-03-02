import ReactApexChart from 'react-apexcharts';
import "./genderView.scss";

export default function GenderView() {
    return (
        <section className="genderView">
            <PolarChart />
        </section>
    )
};

function PolarChart() {
    const data = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
            chart: {
                type: 'polarArea',
            },
            stroke: {
                colors: ['#fff']
            },
            fill: {
                opacity: 0.8
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="polarArea" />
            </div>
            <div id="html-dist"></div>
        </div>
    )
};