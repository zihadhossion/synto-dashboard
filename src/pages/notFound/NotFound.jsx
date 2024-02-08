import "./notfound.scss";
import ListTable from "../../components/listtable/ListTable";

function NotFound() {
    return (
        <div style={{ color: "red", fontWeight: "bolder", fontSize: "20px" }}>
            404 NotFound
            <ListTable />
        </div>
    )
};

export default NotFound;
