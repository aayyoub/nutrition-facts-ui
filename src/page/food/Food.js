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
import SearchContextResolver from "../../library/util/SearchContextResolver";
import GetFoodRequest from "../../library/request/GetFoodRequest";
import LoadingIndicator from '../../component/loading/LoadingIndicator';

export default class Food extends Component {
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
            sterols: [],
            other: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getFood();
    }

    async getFood() {
        let searchContextResolver = new SearchContextResolver();

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
            sterols: food.nutrientGroups[5].nutrients,
            other: food.nutrientGroups[6].nutrients,
            isLoading: false
        });
    }

    render() {
        return (
            <>
                <Analytics/>
                <Container>
                    <Seo description={this.state.formattedDescription}/>
                    <Row>
                        <Col sm={2}>
                            <Logo/>
                        </Col>
                    </Row>
                    <FoodSearch/>
                    <hr/>
                    {
                        this.state.isLoading &&
                        <LoadingIndicator isLoading={this.state.isLoading}></LoadingIndicator>
                    }
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
                            <NutrientsTable header={"Minerals"} amount={"Amount"} nutrients={this.state.minerals}/>

                        </Col>
                        <Col md={6} lg={4}>
                            <NutrientsTable header={"Protein"} amount={"Amount"} nutrients={this.state.protein}/>
                            <NutrientsTable header={"Carbohydrates"} amount={"Amount"} nutrients={this.state.carbohydrates}/>
                            <NutrientsTable header={"Fats and Fatty Acids"} amount={"Amount"} nutrients={this.state.fat}/>
                            <NutrientsTable header={"Sterols"} amount={"Amount"} nutrients={this.state.sterols}/>
                            <NutrientsTable header={"Other"} amount={"Amount"} nutrients={this.state.other}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}