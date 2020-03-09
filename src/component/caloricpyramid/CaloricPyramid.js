import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import './CaloricPyramid.css';

export default class CaloricPyramid extends Component {
    render() {
        return (
            <div className="caloric-pyramid">
                <h3 className="section-title">Calorie Ratios</h3>

                <ListGroup horizontal variant="caloric-pyramid">
                    {
                        this.props.caloricPyramid.carbohydratePercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.carbohydratePercentageFormatted}  carbohydrates</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.fatPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.fatPercentageFormatted} fat</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.proteinPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.proteinPercentageFormatted} protein</strong><br/>
                        </ListGroup.Item>
                    }
                    {
                        this.props.caloricPyramid.alcoholPercentage > 0 &&
                        <ListGroup.Item variant="caloric-pyramid">
                            <strong>{this.props.caloricPyramid.alcoholPercentageFormatted} alcohol</strong><br/>
                        </ListGroup.Item>
                    }
                </ListGroup>

            </div>
        );
    }
}