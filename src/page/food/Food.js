import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from "../../component/shared/search/Search";
import Analytics from "../../component/shared/analytics/Analytics";
import Seo from "../../component/shared/seo/Seo";
import GetFoodRequest from "../../library/request/GetFoodRequest";
import ServingSize from "./components/servingsize/ServingSize";
import LoadingIndicator from "../../component/shared/loading/LoadingIndicator";
import CaloricPyramid from "./components/caloricpyramid/CaloricPyramid";
import NutritionFacts from "./components/nutritionfacts/NutritionFacts";
import NutrientsTable from "./components/nutrientstable/NutrientsTable";
import Navigation from "../../component/shared/navigation/Navigation";
import './Food.css';

export default class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: props.foodName,
            servingSize: props.servingSize,
            name: "",
            description: "",
            calories: "",
            nutritionStatements: [],
            nutritionFacts: {},
            caloricPyramid: [],
            vitamins: [],
            minerals: [],
            protein: [],
            carbohydrates: [],
            fat: [],
            sterols: [],
            other: [],
            servingSizes: [],
            seoTags: {},
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getFood();
    }

    async getFood() {
        this.setState({isLoading: true});

        let getFoodRequest = new GetFoodRequest();
        let food = await getFoodRequest.getFood(this.state.foodName, this.state.servingSize);

        this.setState({
            name: food.name,
            description: food.description,
            calories: food.calories,
            nutritionStatements: food.nutritionStatements,
            nutritionFacts: food.nutritionFacts,
            caloricPyramid: food.caloricPyramid,
            vitamins: food.nutrientGroups[0].nutrients,
            minerals: food.nutrientGroups[1].nutrients,
            protein: food.nutrientGroups[2].nutrients,
            carbohydrates: food.nutrientGroups[3].nutrients,
            fat: food.nutrientGroups[4].nutrients,
            sterols: food.nutrientGroups[5].nutrients,
            other: food.nutrientGroups[6].nutrients,
            servingSizes: food.servingSizes,
            seoTags: food.seoTags,
            isLoading: false
        });
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
                        this.state.description.length > 0 &&
                        <Row className="row-separator">
                            <Col xs={12}>
                                <h1 className="underline">{this.state.description}</h1>
                            </Col>
                        </Row>
                    }
                    {
                        this.state.calories.length > 0 &&
                        <Row className="row-separator">
                            <Col xs={12}>
                                    <p className="calories">{this.state.calories}</p>
                                    <ServingSize servingSizes={this.state.servingSizes} onChange={this.selectServingSize.bind(this)}/>
                            </Col>
                        </Row>
                    }
                    {
                        this.state.isLoading
                            ?
                            <LoadingIndicator isLoading={this.state.isLoading}/>
                            :
                            <>
                                <Row className="row-separator">
                                    <Col sm={12}>
                                        <CaloricPyramid caloricPyramid={this.state.caloricPyramid}/>
                                    </Col>
                                </Row>
                                <Row className="section-separator">
                                    <Col md={6} lg={4}>
                                        <NutritionFacts nutritionFacts={this.state.nutritionFacts}/>
                                    </Col>
                                    <Col md={12} lg={4}>
                                        <NutrientsTable header={"Protein"} amount={"Amount"} nutrients={this.state.protein}/>
                                        <NutrientsTable header={"Carbohydrates"} amount={"Amount"} nutrients={this.state.carbohydrates}/>
                                        <NutrientsTable header={"Fats and Fatty Acids"} amount={"Amount"} nutrients={this.state.fat}/>
                                        <NutrientsTable header={"Other"} amount={"Amount"} nutrients={this.state.other}/>
                                    </Col>
                                    <Col md={12} lg={4}>
                                        <NutrientsTable header={"Vitamins"} amount={"Amount"} nutrients={this.state.vitamins}/>
                                        <NutrientsTable header={"Minerals"} amount={"Amount"} nutrients={this.state.minerals}/>
                                        <NutrientsTable header={"Sterols"} amount={"Amount"} nutrients={this.state.sterols}/>
                                    </Col>
                                </Row>
                            </>
                    }
                </Container>
            </>
        );
    }
}