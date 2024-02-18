import React, { useState } from 'react';
import "./moreIcon.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MoreIcon() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="moreIcon" onClick={handleToggle} >
                <MoreVertIcon />
                {isOpen && (
                    <ul className="dropdown-content">
                        <li>Download</li>
                        <li>Import</li>
                        <li>Export</li>
                    </ul>
                )}
            </button>
        </>)
};

export default MoreIcon;
