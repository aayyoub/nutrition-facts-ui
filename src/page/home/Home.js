import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Search from "../../component/search/Search";
import Analytics from "../../component/analytics/Analytics";
import Seo from "../../component/seo/Seo";
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
                    <Search/>
                </Container>
            </>
        );
    }
}