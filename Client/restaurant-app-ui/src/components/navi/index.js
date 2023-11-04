import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from './style.module.css'
import DefaultContext from "../../contexts/DefaultContext";
import { FaUtensils } from 'react-icons/fa'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap';
const Navi = () => {
  const navigate = useNavigate();
  const { token, userName, userRole, clearData } = useContext(DefaultContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* <header className="mb-3 shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className={Styles.logo}>
            <FaUtensils /> Restaurant App
          </NavLink>
          <nav className="d-flex gap-4 align-items-center">
            <span className={Styles.navigationMenu}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/admin">Admin Panel</NavLink>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Home</NavLink>

            </span>
            <NavLink to="/" className="btn btn-primary">
              Cart <span className="badge text-bg-danger">4</span>
            </NavLink>
            <NavLink to="/login" className="btn btn-primary">Login</NavLink>
          </nav>
        </div>
      </header> */}
      <Navbar color="light" light expand="md">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <NavbarBrand className="brand" href="/">
            <NavLink to="/" className={Styles.logo}>
              <FaUtensils /> Restaurant App
            </NavLink>
          </NavbarBrand>
          <div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    Anasayfa
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/admin" className="nav-link">Admin Panel</NavLink>
                </NavItem>
              </Nav>
              <NavLink to="cart" className="btn btn-primary position-relative" style={{ marginRight: "50px" }}>
                Sepet
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                  <span className="visually-hidden">unread messages</span>
                </span>
              </NavLink>
              <Button
                color="danger"
                onClick={() => {
                  clearData();
                  navigate("/login");
                }}
              >
                Çıkış Yap
              </Button>
            </Collapse>
          </div>
        </div>


      </Navbar>
    </div>
  );
}

export default Navi