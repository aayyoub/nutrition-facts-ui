import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodSearch from "../../component/foodsearch/FoodSearch";
import Analytics from "../../component/analytics/Analytics";
import Seo from "../../component/seo/Seo";
import Logo from "../../component/logo/Logo";
import ExploreFood from "../../component/explorefood/ExploreFood";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    render() {
        return (
            <>
                <Analytics/>
                <Container>
                    <Seo title="" description=""/>
                    <Row>
                        <Col sm={2}>
                            <Logo/>
                        </Col>
                    </Row>
                    <FoodSearch/>
                    <hr/>
                    <ExploreFood/>
                </Container>
            </>
        );
    }
}