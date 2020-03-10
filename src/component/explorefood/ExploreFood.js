import React, {Component} from 'react';
import GetExploreFoodRequest from "../../library/request/GetExploreFoodRequest";
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
                    !this.state.isLoading ?
                    <div>
                        <h3 className="section-title">Explore Food</h3>
                        {
                            this.state.food.map((food) =>
                                <a href={food.url}><p>{food.foodDescription}</p></a>
                            )
                        }
                    </div> : null
                }
            </div>
        );
    }
}