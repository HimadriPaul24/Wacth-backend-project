import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import swal from "sweetalert";

import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logOut, admin } = useAuth();


  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        logOut();
        swal("Successfully logged out", {
          icon: "success",
        });
      } else {
        swal("Order More Product");
      }
    });
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-bg">
        <Container>
          <Navbar.Brand href="/home" className="d-inline w-75">
            <img
              className="img-fluid  w-25 d-flex justify-content-start"
              src="https://i.ibb.co/DYkTd9D/dialz-logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/products">
                Products
              </Nav.Link>
              {user?.email ? (
                <>
                  <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                    {!admin ? (
                      <>
                        <NavDropdown.Item as={Link} to="/payment">
                          Payment
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/myorders">
                          My Orders
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/review">
                          Review
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <>
                        <NavDropdown.Item as={Link} to="/makeadmin">
                          Make Admin
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/manageorders">
                          Manage Orders
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/managereviews">
                          Manage Reviews
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/addproduct">
                          Add Product
                        </NavDropdown.Item>
                      </>
                    )}
                  </NavDropdown>
                  <span className="fw-bold user-name text-dark mx-auto d-flex justify-content-center align-items-center">
                    {user?.displayName}
                  </span>
                  <Nav.Link
                    className="nav-link login-btn"
                  >
                    <Button onClick={handleLogOut} variant="danger">
                      Logout
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="nav-link login-btn"
                    as={Link}
                    to="/login"
                  >
                    <Button variant="success">Login</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
