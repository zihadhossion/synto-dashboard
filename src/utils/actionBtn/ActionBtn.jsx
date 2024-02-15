import "./actionBtn.scss";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function ActionBtn() {
    return (
        <div className="action_btn">
            <div className="icon">
                <VisibilityOutlinedIcon />
                <span className="tooltiptext">View</span>
            </div>
            <div className="icon">
                <EditOutlinedIcon />
                <span className="tooltiptext">Edit</span>
            </div>
            <div className="icon">
                <DeleteOutlineOutlinedIcon />
                <span className="tooltiptext">Delete</span>
            </div>
        </div>
    )
};

export default ActionBtn;
