import { ROUTES } from 'configs/Routes';
import React, { useState } from 'react';
import { FiUsers, FiTag, FiGlobe, FiChevronDown, FiChevronLeft } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

import './styles.scss';

interface Props {}

const SideBar = (props: Props) => {
  const [isToggleProduct, setIsToggleProduct] = useState(false);
  const [isToggleUser, setIsToggleUser] = useState(false);

  const handleToggleProduct = () => {
    setIsToggleProduct(!isToggleProduct);
  };
  const handleToggleUser = () => {
    setIsToggleUser(!isToggleUser);
  };
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="#" onClick={handleToggleProduct}>
              <FiTag />
              <span>Catalog</span>
              {isToggleProduct ? <FiChevronDown /> : <FiChevronLeft />}
            </a>
            {isToggleProduct ? (
              <ul className="sidebar-sub">
                <li>
                  <a href="login">
                    <span>Product</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Review</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Brand</span>
                  </a>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>
          <li className="sidebar-item">
            <a href="#" onClick={handleToggleUser}>
              <FiUsers />
              <span>User</span>
              {isToggleUser ? <FiChevronDown /> : <FiChevronLeft />}
            </a>
            {isToggleUser ? (
              <ul className="sidebar-sub">
                <li>
                  <NavLink to={ROUTES.user}>
                    <span>User List</span>
                  </NavLink>
                </li>
              </ul>
            ) : (
              ''
            )}
          </li>
          <li className="sidebar-item">
            <a href="#">
              <FiGlobe />
              <span>Sales Channels</span>
              <FiChevronLeft />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
