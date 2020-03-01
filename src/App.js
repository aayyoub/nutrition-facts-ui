import React, {Component} from 'react';
import GetFoodRequest from "./library/request/GetFoodRequest";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NutrientsTable from "./component/NutrientsTable";
import logo from "./image/logo.png";
import SearchContextResolver from "./library/SearchContextResolver";
import FoodSearch from "./component/FoodSearch";
import {Spinner} from 'react-bootstrap';
import NutritionFacts from "./component/nutritionfacts/NutritionFacts";
import Seo from "./component/Seo";
import ExploreFood from "./component/explorefood/ExploreFood";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longDescription: "",
            formattedDescription: "",
            formattedCalories: "",
            nutritionFacts: {},
            caloricPyramid: [],
            overview: [],
            vitamins: [],
            minerals: [],
            isLoading: false,
        };
    }

    componentWillMount() {
        this.getFood();
    }

    async getFood() {
        let searchContextResolver = new SearchContextResolver();

        if (!searchContextResolver.containsFood()) {
            return;
        }

        this.setState({isLoading: true});

        let foodId = searchContextResolver.getFoodId();

        let getFoodRequest = new GetFoodRequest();
        let food = await getFoodRequest.getFood(foodId);

        this.setState({
            longDescription: food.longDescription,
            formattedDescription: food.formattedDescription,
            formattedCalories: food.formattedCalories,
            nutritionFacts: food.nutritionFacts,
            caloricPyramid: food.caloricPyramid,
            overview: food.nutrientGroups[0].nutrients,
            vitamins: food.nutrientGroups[1].nutrients,
            minerals: food.nutrientGroups[2].nutrients,
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <Container>
                    {
                        this.state.longDescription &&
                        <Seo longDescription={this.state.longDescription} formattedDescription={this.state.formattedDescription}/>
                    }
                    <br/>
                    <Row>
                        <Col sm={2}>
                            <img style={{width: 240, align: "left", margin: "0.5em"}} src={logo} alt="NutritionFacts.io Logo"/>
                        </Col>
                    </Row>
                    <br/>
                    <FoodSearch/>
                    {
                        this.state.isLoading &&
                        <Spinner animation="border"/>
                    }
                    {
                        this.state.longDescription &&
                        <hr/>
                    }
                    <Row>
                        <Col>
                            {
                                this.state.longDescription &&
                                <h2>{this.state.longDescription}</h2>
                            }
                            {
                                this.state.formattedCalories &&
                                <h4>{this.state.formattedCalories}</h4>
                            }
                            {
                                this.state.formattedDescription &&
                                <p>{this.state.formattedDescription}</p>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} lg={4}>
                            <NutritionFacts nutritionFacts={this.state.nutritionFacts}/>
                        </Col>
                        <Col md={6} lg={4}>
                            <NutrientsTable header={"Vitamins"} amount={"Amount"} nutrients={this.state.vitamins}/>
                        </Col>
                        <Col md={12} lg={4}>
                            <NutrientsTable header={"Minerals"} amount={"Amount"} nutrients={this.state.minerals}/>
                        </Col>
                    </Row>
                    <Row>
                        {/*<CaloricPyramid caloricPyramid={this.state.caloricPyramid}/>*/}
                    </Row>
                    <hr/>
                    <ExploreFood/>
                </Container>
            </div>
        );
    }
}