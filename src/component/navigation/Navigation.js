import React, {Component} from "react";
import './Navigation.css';
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo/Logo";

export default class Navigation extends Component {
    render() {
        return (
            <Navbar variant="colored-navbar">
                <Logo/>
            </Navbar>
        );
    }
}