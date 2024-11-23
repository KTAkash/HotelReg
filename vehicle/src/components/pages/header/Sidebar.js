import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ showSidebar }) => {
    return (
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
            <div className="sidebar-header">
                <h3>CRS</h3>
            </div>
            <ul className="sidebar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        Car Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/car" className="nav-link">
                        Post Car
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
