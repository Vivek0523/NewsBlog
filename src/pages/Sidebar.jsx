import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaFilter, FaCalculator, FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineNewspaper } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { GiNewspaper } from "react-icons/gi"; // Import the new icon
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={`sidebar ${openSidebarToggle ? "sidebar-responsive" : ""}`}
    >
      {/* Sidebar title with updated logo */}
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <GiNewspaper className="icon_header" /> {/* Updated logo */}
          NEWS PORTAL
        </div>
      </div>

      {/* Sidebar list */}
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard/news-analytics">
            <MdOutlineNewspaper className="icon" /> News Analytics
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/filter">
            <FaFilter className="icon" /> Filter
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/payout">
            <FaCalculator className="icon" /> Payout Calculator
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/export">
            <FaCloudDownloadAlt className="icon" /> Export
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
