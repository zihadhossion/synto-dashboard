import "./salechart.scss";
import Topbar from "../../../components/ui/topbar/Topbar";
import ColumnChart from "../../../components/ui/columnChart/ColumnChart";


function SaleChart({ IconBox }) {

    const saleData = {
        series: [{
            name: 'Income',
            data: [54, 27, 65, 56, 81, 58, 45, 81, 70, 56, 87, 75]
        }, {
            name: 'Expanses',
            data: [45, 36, 41, 86, 45, 68, 52, 53, 91, 55, 60, 48]
        }],
        options: {
            chart: {
                type: 'bar',
                width: '100%',
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
                    horizontal: false,
                    columnWidth: '50%',
                    columnHeight: '100%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 3,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val
                    }
                }
            }
            ,
            colors: ['#5a66f1', '#cbd5e1'],
        },
        height: 260,
    }

    return (
        <section className="salechart">
            <Topbar title={"Sales Over View"} IconBox={IconBox} />
            <div className="saleContainer">
                <ul>
                    <li><span className="bullet"></span>$7.65K<span className="desc">/ Income</span></li>
                    <li><span className="bullet expanse"></span>$3.75K<span className="desc">/ Expanses</span></li>
                </ul>
                <ColumnChart data={saleData} />
            </div>
        </section>
    )
};

export default SaleChart;
