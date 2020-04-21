import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Search from "../../component/shared/search/Search";
import Analytics from "../../component/shared/analytics/Analytics";
import Seo from "../../component/shared/seo/Seo";
import GetArticleRequest from "../../library/request/GetArticleRequest";
import Navigation from "../../component/shared/navigation/Navigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import LoadingIndicator from "../../component/shared/loading/LoadingIndicator";
import Footer from "../../component/shared/footer/Footer";

export default class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleName: props.articleName,
            title: "",
            image: {},
            video: {},
            content: "",
            section: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.getArticle();
    }

    async getArticle() {
        this.setState({isLoading: true});

        let getArticleRequest = new GetArticleRequest();
        let article = await getArticleRequest.getArticle(this.state.articleName);

        if (article && article.length > 0) {
            this.setState({
                title: article[0].title,
                image: article[0].image,
                video: article[0].video,
                content: article[0].content,
                section: article[0].section,
                isLoading: false
            });
        }
    }

    async selectServingSize(event) {
        this.setState({servingSize: event.target.value}, this.getFood);
    }

    render() {
        return (
            <>
                <Analytics/>
                <Navigation/>
                <Container>
                    <Seo seoTags={this.state.seoTags}/>
                    <Search/>
                    {
                        this.state.isLoading
                            ?
                            <LoadingIndicator isLoading={this.state.isLoading}/>
                            :
                            <>
                                <Row>
                                    <Col>
                                        <h1>{this.state.title}</h1>
                                        {
                                            this.state.image && this.state.image.formats && this.state.image.formats.large &&
                                            <img src={"https://cms.nutritionfacts.io" + this.state.image.formats.large.url}/>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ReactMarkdown source={this.state.content}/>
                                    </Col>
                                </Row>
                            </>
                    }
                    <Footer/>
                </Container>
            </>)
    }
}