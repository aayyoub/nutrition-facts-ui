import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

export default class CaloricPyramid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.caloricPyramid.carbohydratePercentageFormatted &&
                    <ListGroup horizontal>
                        <ListGroup.Item>{this.props.caloricPyramid.carbohydratePercentageFormatted} carbohydrates</ListGroup.Item>
                        <ListGroup.Item>{this.props.caloricPyramid.fatPercentageFormatted} fat</ListGroup.Item>
                        <ListGroup.Item>{this.props.caloricPyramid.proteinPercentageFormatted} protein</ListGroup.Item>
                    </ListGroup>
                }
            </div>
        );
    }
}