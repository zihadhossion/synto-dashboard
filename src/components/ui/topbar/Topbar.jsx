import "./topbar.scss";

function Topbar({ title, iconBox }) {
    return (
        <div className="top-header">
            <div className="topbar">
                <h3>{title}</h3>
                <>
                    {iconBox}
                </>
            </div>
        </div>

    )
};

export default Topbar;
