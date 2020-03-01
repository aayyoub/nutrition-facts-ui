import React, {Component} from 'react';
import GetExploreFoodRequest from "../../library/request/GetExploreFoodRequest";
import './ExploreFood.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Spinner} from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default class ExploreFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.getFood();
    }

    async getFood() {
        this.setState({
            isLoading: true
        });

        let getExploreFood = new GetExploreFoodRequest();
        let food = await getExploreFood.getFood();

        this.setState({
            food: food,
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                {
                    !this.state.isLoading &&
                    <h4>Explore Food</h4>
                }
                {
                    this.state.food.map((food) =>
                        <a href={food.url}><p>{food.foodDescription}</p></a>
                    )
                }
                <br/>
            </div>
        );
    }
}