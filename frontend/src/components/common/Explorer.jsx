import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useDeviceStore from "../../store/deviceStore";
import useUserStore from "../../store/userStore";
import {
  CalendarIcon,
  GlobeAltIcon,
  ArrowRightStartOnRectangleIcon,
  HomeIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Explorer = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 1024);
  const [activeLink, setActiveLink] = useState("");
  const isMobile = useDeviceStore((state) => state.isMobile);
  const logoutFunc = useUserStore((state) => state.logoutFunc);
  const userInfo = useUserStore((state) => state.userInfo);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleResize = () => {
    setCollapsed(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  if (isMobile) {
    return null;
  }

  return (
    <nav
      style={{ fontFamily: "'IBM Plex Sans KR', sans-serif" }}
      className={`sidebar ${
        collapsed ? "w-14" : "w-38"
      } select-none h-full bg-gradient-to-b from-gray-700 to-gray-900 text-white flex flex-col justify-between transition-all duration-300 ease shadow-lg`}
    >
      <div>
        <div
          className={`sidebar-top-wrapper flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          } p-4 border-b border-gray-700 mb-4 shadow-md`}
        >
          <NavLink to="/">
            <h2
              className={`text-lg font-semibold tracking-wide text-gray-200 ${
                collapsed ? "hidden" : "block"
              }`}
            >
              WAVA
            </h2>
          </NavLink>
          <button
            className="expand-btn bg-gray-700 p-2 rounded-full focus:outline-none hover:bg-gray-600 transition-colors flex items-center justify-center shadow-md"
            onClick={handleToggleCollapse}
          >
            {collapsed ? (
              <ArrowsPointingOutIcon className="h-5 w-5" />
            ) : (
              <ArrowsPointingInIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <ul
          className={`sidebar-links-wrapper space-y-1 ${
            collapsed ? "items-center" : "items-start"
          } flex flex-col`}
        >
          <SidebarLink
            to="/"
            icon={<HomeIcon className="h-6 w-6" />}
            title="Home"
            collapsed={collapsed}
            active={activeLink === "/"}
            onClick={() => handleLinkClick("/")}
          />
          <SidebarLink
            to="/dashboard"
            icon={<CalendarIcon className="h-6 w-6" />}
            title="Dashboard"
            collapsed={collapsed}
            active={activeLink === "/dashboard"}
            onClick={() => handleLinkClick("/dashboard")}
          />
          <SidebarLink
            to="/channel"
            icon={<GlobeAltIcon className="h-6 w-6" />}
            title="Channels"
            collapsed={collapsed}
            active={activeLink?.includes("/channel")}
            onClick={() => handleLinkClick("/channel")}
          />
        </ul>
      </div>

      <div className="mt-4">
        <div
          className={`sidebar-profile py-4 px-2 border-t border-gray-700 mb-4 flex items-center ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          {userInfo?.profile ? (
            <img
              src={userInfo.profile}
              alt="User Profile"
              className="w-6 h-6 rounded-full object-cover shadow-md"
            />
          ) : (
            <UserCircleIcon className="w-8 h-8 text-gray-400 shadow-md" />
          )}
          {!collapsed && (
            <div className="avatar-name ml-3 pe-1">
              <div className="user-name font-medium text-gray-200 text-sm">
                {userInfo?.nickName || "User Name"}
              </div>
              <div className="text-xs text-gray-400">
                {`@${userInfo?.worcation?.sido || "미등록"}` || "@username"}
              </div>
            </div>
          )}
        </div>

        <Link
          to="/"
          onClick={logoutFunc}
          className={`logout-btn flex items-center p-4 hover:bg-gray-700 transition-colors w-full ${
            collapsed ? "justify-center" : "justify-start"
          } shadow-md`}
        >
          <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-400" />
          {!collapsed && (
            <span className="ml-2 text-gray-300 font-medium text-sm">
              Logout
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

const SidebarLink = ({ to, icon, title, collapsed, active, onClick }) => (
  <li className="w-full">
    <NavLink
      to={to}
      className={`flex items-center p-3 w-full rounded-md transition-colors shadow-md ${
        active
          ? "bg-gray-700 text-white"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
      onClick={onClick}
    >
      <div
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-start"
        } w-full`}
      >
        {icon}
        {!collapsed && <span className="ml-2 text-sm">{title}</span>}
      </div>
    </NavLink>
  </li>
);

export default Explorer;
