import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import logo from "../../image/logo.png";
import FoodSearch from "../../component/foodsearch/FoodSearch";
import Analytics from "../../component/analytics/Analytics";
import Seo from "../../component/seo/Seo";
import CaloricPyramid from "../../component/caloricpyramid/CaloricPyramid";
import NutritionFacts from "../../component/nutritionfacts/NutritionFacts";
import NutrientsTable from "../../component/nutrientstable/NutrientsTable";
import ExploreFood from "../../component/explorefood/ExploreFood";
import SearchContextResolver from "../../library/util/SearchContextResolver";
import GetFoodRequest from "../../library/request/GetFoodRequest";

export default class Home extends Component {
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
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getFood();
    }

    async getFood() {
        let searchContextResolver = new SearchContextResolver();

        if (!searchContextResolver.containsFood()) {
            this.setState({isLoading: false});
            return;
        }

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
                <Analytics/>
                <Container>
                    {
                        !this.state.longDescription &&
                        <Seo title="Nutrition facts and information for food. Check calories, carbs, and fat values, including vitamins and minerals with percent daily values."
                             description="Nutrition facts and information for food. Check calories, carbs, and fat values, including vitamins and minerals with percent daily values."/>
                    }
                    {
                        this.state.longDescription &&
                        <Seo title={this.state.formattedDescription} description={this.state.formattedDescription}/>
                    }
                    <br/>
                    <Row>
                        <Col sm={2}>
                            <a href="https://www.nutritionfacts.io/">
                                <img style={{width: 200, align: "left", margin: "0.5em"}} src={logo} alt="NutritionFacts.io Logo"/>
                            </a>
                        </Col>
                    </Row>
                    <br/>
                    <FoodSearch/>
                    {
                        this.state.isLoading &&
                        <Row>
                            <Col>
                                <br/>
                                <Spinner animation="border"/>
                            </Col>
                        </Row>
                    }
                    {
                        this.state.longDescription &&
                        <hr/>
                    }
                    <Row>
                        <Col>
                            {
                                this.state.longDescription &&
                                <h1 className="h1">{this.state.longDescription}</h1>
                            }
                            {
                                this.state.formattedCalories &&
                                <h2 className="h2">{this.state.formattedCalories}</h2>
                            }
                            {
                                this.state.formattedDescription &&
                                <p>{this.state.formattedDescription}</p>
                            }
                        </Col>
                    </Row>
                    { this.state.caloricPyramid.length !== 0 &&
                    <Row>
                        <Col>
                            <CaloricPyramid caloricPyramid={this.state.caloricPyramid}/>
                        </Col>
                    </Row>
                    }
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
                    <hr/>
                    <ExploreFood/>
                </Container>
            </div>
        );
    }
}