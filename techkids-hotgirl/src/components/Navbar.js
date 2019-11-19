import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Input,
    Col,
    Row,
} from 'reactstrap';


export default class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div>
                <Navbar style={{ background: "#ffffff" }} light expand="md">
                    <Container>
                        <Row style={{ width: "100%" }}>
                            <Col md="3">
                                <Input />
                            </Col>
                            <Col className="text-center" md="6">
                                <NavbarBrand href="/">Mindx Hotgirl</NavbarBrand>
                            </Col>
                            <Col md="3">
                                <NavbarToggler onClick={this.toggle} /><Collapse isOpen={isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="/components/">Components</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
