import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import $ from "jquery";

export default class ServingSize extends Component {
    selectServingSize(event) {
        this.resizeSelect(event);

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    resizeSelect(event) {
        let textLength = event.target.options[event.target.selectedIndex].text.length;
        $("#serving-size-select").width(8 * textLength + 5);
    }

    render() {
        return (
            <Form id="serving-size-form inline" className="serving-size-form" onChange={this.selectServingSize.bind(this)}>
                <Form.Group controlId="serving-size-select">
                    <Form.Control size="sm" className="serving-size-select" as="select">
                        <option value="0" selected>Serving size: 100 grams</option>
                        {this.props.servingSizes.map((servingSize) =>
                            <option value={servingSize.order}>Serving size: {servingSize.description}</option>
                        )}
                    </Form.Control>
                </Form.Group>
            </Form>
        )
    }
}