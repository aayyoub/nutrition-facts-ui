import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import './NutrientsTable.css'

export default class NutrientsTable extends Component {
    render() {
        return (
            <>
                {
                    this.props.nutrients.length > 0 &&
                    <>
                        <h3 className="section-title"><span className="highlighted">{this.props.header}</span></h3>
                        <Table className="nutrients-table" responsive size="sm">
                            <tbody>
                            {this.props.nutrients.map((nutrient) =>
                                <tr>
                                    {
                                        nutrient.subcomponent &&
                                        <td className="table-data-nutrient nutrient-subcomponent">{nutrient.description}</td>
                                    }
                                    {
                                        nutrient.macronutrient &&
                                            <td className="table-data-nutrient nutrient-macronutrient">{nutrient.description}</td>
                                    }
                                    {
                                        !nutrient.subcomponent && !nutrient.macronutrient &&
                                        <td className="table-data-nutrient nutrient-regular">{nutrient.description}</td>
                                    }
                                    <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                    {
                                        nutrient.percentDailyValueFormatted
                                            ?
                                            <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                                            :
                                            <td className="table-data-value">&nbsp;</td>
                                    }
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </>
                }
            </>
        );
    }
}