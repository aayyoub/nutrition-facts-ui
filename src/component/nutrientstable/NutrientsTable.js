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
                        <h3 className="section-title">{this.props.header}</h3>
                        <Table className="nutrients-table" responsive size="sm">
                            <tbody>
                            {this.props.nutrients.map((nutrient) =>
                                <tr>
                                    <td className="table-data-nutrient">{nutrient.description}</td>
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