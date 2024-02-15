import "./datatable.scss";
import Table from "../../ui/table/Table";
import Topbar from "../../ui/topbar/Topbar";
import ListTable from "../listtable/ListTable";

function Datatable({ title, theadData, rows }) {
    return (
        <section className="datatable">
            <Topbar title={title} />
            <ListTable theadData={theadData} rows={rows} />
        </section>
    )
};

export default Datatable;
