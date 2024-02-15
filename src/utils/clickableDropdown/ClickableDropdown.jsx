import React, { useState } from 'react';
import "./clickableDropdown.scss";

const ClickableDropdown = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="clickableDropdown">
            <div onClick={handleToggle}>{children}</div>
            {
                isOpen && (
                    <ul className="dropdown-content">
                        <li>Download</li>
                        <li>Import</li>
                        <li>Export</li>
                    </ul>
                )
            }
        </div >
    );
};

export default ClickableDropdown;
