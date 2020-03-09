import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import './NutrientsTable.css'

export default class NutrientsTable extends Component {
    render() {
        return (
            <div>
                {
                    this.props.nutrients.length > 0 &&
                    <Table responsive size="sm">
                        <h3 className="section-title">{this.props.header}</h3>
                        <tbody>
                        {this.props.nutrients.map((nutrient) =>
                            <tr>
                                <td>{nutrient.description}</td>
                                <td style={{textAlign: 'right'}}>{nutrient.valueRounded} {nutrient.unit}</td>
                                <td style={{textAlign: 'right'}}>{nutrient.percentDailyValueFormatted}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                }
            </div>
        );
    }
}