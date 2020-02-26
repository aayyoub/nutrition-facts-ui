import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';

export default class NutrientsTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.nutrients.length > 0 &&
                    <Table responsive size="sm">
                        <h1 className="nutrient-table-header">{this.props.header}</h1>
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