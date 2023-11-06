import React, { useContext, useEffect, useState } from "react";
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
  Button,
} from 'reactstrap';
const Navi = () => {
  const navigate = useNavigate();
  const { userRole, clearData, getCartLength } = useContext(DefaultContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
  }, [getCartLength()])

  const cartLength = getCartLength()
  return (
    <div>
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
                {
                  userRole == 1 && (
                    <NavItem>
                      <NavLink to="/admin" className="nav-link">Admin Panel</NavLink>
                    </NavItem>
                  )
                }
                <NavItem>
                  <NavLink to="/orderDetails" className="nav-link">Siparişlerim</NavLink>
                </NavItem>
              </Nav>
              <NavLink to="cart" className="btn btn-primary position-relative" style={{ marginRight: "2vh" }}>

                {
                  cartLength && cartLength >= 1 ? (
                    <span>
                      {"Sepet"}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartLength}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </span>

                  ) : (
                    <span>Sepet</span>
                  )
                }
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