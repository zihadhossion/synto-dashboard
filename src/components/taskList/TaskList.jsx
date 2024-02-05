import Topbar from "../ui/topbar/Topbar";
import "./tasklist.scss";
import ListTable from "../listtable/ListTable";


function TaskList() {
    return (
        <section className="tasklist">
            <Topbar title={"Task List"} />
            <ListTable />
        </section>
    )
};

export default TaskList;
