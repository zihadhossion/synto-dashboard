import "./topbar.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Topbar({ title }) {
    return (
        <div className="top-header">
            <div className="topbar">
                <h3>{title}</h3>
                <MoreVertIcon />
            </div>
        </div>

    )
};

export default Topbar;
