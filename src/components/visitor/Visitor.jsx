import "./visitor.scss";
import ReactApexChart from 'react-apexcharts';
import Topbar from "../ui/topbar/Topbar";


const data = {
    series: [{
        data: [580, 690, 1100, 1200, 1380]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
            labels: {
                show: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Medium', 'Instagram', 'LinkedIn', 'Twitter (X)', 'Facebook',],
        },
        tooltip: {
            y: {
                show: false
            }
        }
    },
};


function Visitor() {
    return (
        <section className="visitor">
            <Topbar title={"Social Visitors"} />
            <div className="visitorContainer">
                <div id="chart">
                    <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        </section>
    )
};

export default Visitor;
