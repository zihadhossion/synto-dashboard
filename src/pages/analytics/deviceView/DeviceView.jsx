import ReactApexChart from 'react-apexcharts';
import "./deviceView.scss";
import Topbar from "../../../components/ui/topbar/Topbar";


export default function deviceView() {
    return (
        <section className='deviceView'>
            <Topbar title={"device views"} />
            <PieChart />
        </section>
    )
};

function PieChart() {
    const data = {

        series: [44, 55, 41, 17, 15],
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
                <ReactApexChart options={data.options} series={data.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};