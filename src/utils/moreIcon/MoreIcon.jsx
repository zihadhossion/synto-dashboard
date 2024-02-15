import "./moreIcon.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClickableDropdown from "../clickableDropdown/clickableDropdown";

function MoreIcon() {
    return (
        <div className="moreIcon">
            <ClickableDropdown >
                <MoreVertIcon />
            </ClickableDropdown >
        </div>
    )
};

export default MoreIcon;
