import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <hr/>
                <Row className="section-separator">
                    <Col className="footer-column">
                        <p><a href="https://www.nutritionfacts.io/p/terms-and-conditions">Terms and Conditions</a></p>
                        <p><a href="https://www.nutritionfacts.io/p/privacy-policy">Privacy Policy</a></p>
                        <p><a href="https://www.nutritionfacts.io/p/contact-us">Contact Us</a></p>
                    </Col>
                </Row>
            </>
        )
    }
}