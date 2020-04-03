import React, {Component} from 'react';
import GetExploreFoodRequest from "../../library/request/GetExploreFoodRequest";
import LoadingIndicator from "../loading/LoadingIndicator";
import './ExploreFood.css';

export default class ExploreFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getExploreFood();
    }

    async getExploreFood() {
        let getExploreFood = new GetExploreFoodRequest();
        let food = await getExploreFood.getFood();

        this.setState({
            food: food,
            isLoading: false
        });
    }

    render() {
        return (
            <>
                <LoadingIndicator isLoading={this.state.isLoading}></LoadingIndicator>
                {
                    !this.state.isLoading &&
                    <div>
                        <h1 className="section-title">Explore Food</h1>
                        {
                            this.state.food.map((food) =>
                                <a href={food.url}><p>{food.foodDescription}</p></a>
                            )
                        }
                    </div>
                }
            </>
        );
    }
}