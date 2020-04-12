import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import FoodSearch from "../../component/foodsearch/FoodSearch";
import Analytics from "../../component/analytics/Analytics";
import Seo from "../../component/seo/Seo";
import ExploreFood from "../../component/explorefood/ExploreFood";
import Navigation from "../../component/navigation/Navigation";

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
                <Navigation/>
                <Container>
                    <Seo title="" description=""/>
                    <FoodSearch/>
                    <ExploreFood/>
                </Container>
            </>
        );
    }
}