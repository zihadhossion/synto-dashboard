import "./topbar.scss";

function Topbar({ title, IconBox }) {
    return (
        <div className="topbar">
            <div className="topbar_left">
                <h3>{title}</h3>
            </div>
            <div className="topbar_right">
                {IconBox}
            </div>
        </div>)
};

export default Topbar;
