import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import './NutrientsTable.css'

export default class NutrientsTable extends Component {
    render() {
        return (
            <div>
                {
                    this.props.nutrients.length > 0 &&
                    <Table className="nutrients-table" responsive size="sm">
                        <h3 className="section-title">{this.props.header}</h3>
                        <tbody>
                        {this.props.nutrients.map((nutrient) =>
                            <tr>
                                <td className="table-data-nutrient">{nutrient.description}</td>
                                <td className="table-data-value">{nutrient.valueRounded} {nutrient.unit}</td>
                                <td className="table-data-value">{nutrient.percentDailyValueFormatted}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                }
            </div>
        );
    }
}