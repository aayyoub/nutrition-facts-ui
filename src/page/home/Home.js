import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodSearch from "../../component/foodsearch/FoodSearch";
import Analytics from "../../component/analytics/Analytics";
import Seo from "../../component/seo/Seo";
import Logo from "../../component/logo/Logo";
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
            vitamins: [],
            minerals: [],
            protein: [],
            carbohydrates: [],
            fat: [],
            other: [],
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
            vitamins: food.nutrientGroups[0].nutrients,
            minerals: food.nutrientGroups[1].nutrients,
            protein: food.nutrientGroups[2].nutrients,
            carbohydrates: food.nutrientGroups[3].nutrients,
            fat: food.nutrientGroups[4].nutrients,
            other: food.nutrientGroups[5].nutrients,
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <Analytics/>
                <Container>
                    <Seo title={this.state.formattedDescription} description={this.state.formattedDescription}/>
                    <Row>
                        <Col sm={2}>
                            <Logo/>
                        </Col>
                    </Row>
                    <FoodSearch/>
                    <hr/>
                    {
                        !this.state.isLoading &&
                        <div>
                            <Row>
                                <Col>
                                    {
                                        this.state.longDescription.length > 0 &&
                                        <h1 className="h1">{this.state.longDescription}</h1>
                                    }
                                    {
                                        this.state.formattedCalories.length > 0 &&
                                        <h2 className="h2">{this.state.formattedCalories}</h2>
                                    }
                                    {
                                        this.state.formattedDescription.length > 0 &&
                                        <p>{this.state.formattedDescription}</p>
                                    }
                                </Col>
                            </Row>
                        </div>
                    }
                    {this.state.caloricPyramid.length !== 0 &&
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
                    <Row>
                        <Col md={6} lg={4}>
                            <NutrientsTable header={"Protein"} amount={"Amount"} nutrients={this.state.protein}/>
                        </Col>
                        <Col md={6} lg={4}>
                            <NutrientsTable header={"Carbohydrates"} amount={"Amount"} nutrients={this.state.carbohydrates}/>
                        </Col>
                        <Col md={12} lg={4}>
                            <NutrientsTable header={"Fats and Fatty Acids"} amount={"Amount"} nutrients={this.state.fat}/>
                        </Col>
                    </Row>
                    <ExploreFood/>
                </Container>
            </div>
        );
    }
}