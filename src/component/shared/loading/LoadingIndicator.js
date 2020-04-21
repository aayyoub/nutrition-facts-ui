import React, {Component} from "react";
import Spinner from "react-bootstrap/Spinner";
import './LoadingIndicator.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class LoadingIndicator extends Component {
    render() {
        return (
            <>
                {
                    this.props.isLoading &&
                    <Row className="align-center">
                        <Col xs={12}>
                            <Spinner className="spinner" animation="border" role="status"/>
                        </Col>
                    </Row>
                }
            </>
        )
    }
}