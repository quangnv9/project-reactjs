import React from 'react';
import { FiAlignJustify, FiArrowDownCircle, FiBell, FiUser, FiAlertTriangle } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import './styles.scss';

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <div className="header">
        <div className="content">
          <div className="left-header">
            <FiAlignJustify className="nav-bar" />
            <a>Gear Focus Admin</a>
            <div className="notification">
              <FiBell />
              <div className="notification__list">
                <ul>
                  <li className="notification__item">
                    <a href="#" className="notification__link">
                      <div className="notification__icon">
                        <FiArrowDownCircle />
                        <span>Unapproved vendors</span>
                        <div className="counter">2</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <div>
                        <FiAlertTriangle />
                        <span>Requests for payment</span>
                        <div className="counter">0</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="">
                      <div>
                        <GoMail />
                        <span>Messages</span>
                        <div className="counter">5214</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-header">
            <div className="user">
              <FiUser />
              <div className="user-list">
                <ul>
                  <li className="user-profile">
                    <a href="#">Profile</a>
                    <p>admin.training@powergatesoftware.com</p>
                  </li>
                  <li className="user-logout">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
