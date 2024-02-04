import Topbar from "../ui/topbar/Topbar";
import "./tasklist.scss";

function TaskList() {
    return (
        <section className="tasklist">
            <Topbar title={"Task List"} />
        </section>
    )
};

export default TaskList;
