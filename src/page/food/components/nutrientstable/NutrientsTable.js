import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './NutrientsTable.css'

export default class NutrientsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            showDetailsText: "Show Details"
        };
    }

    toggleShowDetails() {
        if (this.state.showDetails) {
            this.setState({showDetails: false, showDetailsText: "Show Details"});
        } else {
            this.setState({showDetails: true, showDetailsText: "Hide Details"});
        }
    }

    render() {
        return (
            <>
                {
                    this.props.nutrients.length > 0 &&
                    <div className="nutrients-section">
                        <h3 className="section-title">{this.props.header}</h3>
                        <Table variant="nutrient">
                            <tbody>
                            {
                                this.props.nutrients.map((nutrient) =>
                                    <>
                                        {
                                            nutrient.subcomponent &&
                                            <tr className={!this.state.showDetails ? "nutrient-collapsed" : "nutrient-visible"}>
                                                <td className="table-data-nutrient-label nutrient-subcomponent">{nutrient.commonName}</td>
                                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            </tr>
                                        }
                                        {
                                            nutrient.macronutrient &&
                                            <tr>
                                                <td className="table-data-nutrient-label nutrient-macronutrient">{nutrient.commonName}</td>
                                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            </tr>
                                        }
                                        {
                                            !nutrient.subcomponent && !nutrient.macronutrient &&
                                            <tr>
                                                <td className="table-data-nutrient-label nutrient-regular">{nutrient.commonName}</td>
                                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            </tr>
                                        }
                                    </>
                                )}
                            </tbody>
                        </Table>
                        {
                            this.props.nutrients.some((nutrient) => nutrient.subcomponent) &&
                            <Button variant="show-details" onClick={this.toggleShowDetails.bind(this)}>{this.state.showDetailsText}</Button>
                        }
                    </div>
                }
            </>
        );
    }
}