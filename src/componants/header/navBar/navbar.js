import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";
import NavBarDrops from "./navbarDrops";
import logo from "../../../media/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className=" w-100  ">
        <Container fluid="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" width="100" />
          </Navbar.Brand>
          <div className=" order-0 ms-2 me-auto order-lg-5 ">
            <Button
              variant="light"
              className="modal-btn d-flex align-items-center gap-2 px-2 py-1 rounded-4  "
              onClick={handleShow}
            >
              <span>ابحث هنا</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fs-6" />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Body className="text-center d-flex flex-column align-items-center gap-4">
                <Form.Control
                  size="lg"
                  type="search"
                  className="text-center"
                  placeholder="ابحث هنا"
                  autoFocus
                />
                <div className="suggest w-100 h-auto p-3 ">
                  <h1 className="fs-5 text-danger">لا يوجد نتائج</h1>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-2">
              <Nav.Link
                href="#home"
                active
                className="d-flex align-items-center gap-2 "
              >
                <FontAwesomeIcon icon={faHouse} />
                <span>الرئيسيه</span>
              </Nav.Link>
              <NavBarDrops />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
