import "./notfound.scss";
import Datatable from "../../components/datatable/Datatable";
import ListTable from "../../components/listtable/listTable";

function NotFound() {
    return (
        <div style={{ color: "red", fontWeight: "bolder", textAlign: "center", fontSize: "20px" }}>
            404 NotFound

            <ListTable />
        </div>
    )
};

export default NotFound;
