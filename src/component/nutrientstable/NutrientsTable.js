import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
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
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        return (
            <>
                {
                    this.props.nutrients.length > 0 &&
                    <div className="nutrients-section">
                        <h3 className="section-title"><span className="highlighted">{this.props.header}</span></h3>
                        <Table className="nutrients-table" responsive size="sm">
                            <tbody>
                            {
                                this.props.nutrients.map((nutrient) =>
                                    <>
                                        {
                                            nutrient.subcomponent && this.state.showDetails &&
                                            <tr>
                                                <td className="table-data-nutrient nutrient-subcomponent">{nutrient.description}</td>
                                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            </tr>
                                        }
                                        {
                                            nutrient.macronutrient &&
                                            <tr>
                                                <td className="table-data-nutrient nutrient-macronutrient">{nutrient.description}</td>
                                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            </tr>
                                        }
                                        {
                                            !nutrient.subcomponent && !nutrient.macronutrient &&
                                            <tr>
                                                <td className="table-data-nutrient nutrient-regular">{nutrient.description}</td>
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
                                <p className="show-more" onClick={this.toggleShowDetails.bind(this)}>{this.state.showDetailsText}</p>

                        }
                    </div>
                }
            </>
        );
    }
}