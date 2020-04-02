import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import './CaloricPyramid.css';

export default class CaloricPyramid extends Component {
    render() {
        return (
            <div className="caloric-pyramid">
                <ListGroup horizontal variant="caloric-pyramid">
                    {
                        this.props.caloricPyramid.carbohydratePercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.carbohydratePercentageFormatted} from carbohydrates</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.fatPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.fatPercentageFormatted} from fat</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.proteinPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.proteinPercentageFormatted} from protein</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.alcoholPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.alcoholPercentageFormatted} from alcohol</strong><br/>
                        </ListGroup.Item>
                    }
                </ListGroup>

            </div>
        );
    }
}