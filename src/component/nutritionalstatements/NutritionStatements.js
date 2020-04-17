import React, {Component} from "react";
import {MdCheck, MdClose} from "react-icons/md";
import './NutritionStatements.css';

export default class NutritionStatements extends Component {
    render() {
        return (
            <>
                {
                    this.props.nutritionStatements.length > 0 &&
                    <div className="nutritional-statements-section">
                        {
                            this.props.nutritionStatements.map((nutritionStatement) =>
                                <>
                                    {
                                        nutritionStatement.beneficial
                                            ?
                                            <h2 className="section-title"><MdCheck className="nutritional-statement-icon"/>{nutritionStatement.statement}</h2>
                                            :
                                            <h2 className="section-title"><MdClose className="nutritional-statement-icon"/>{nutritionStatement.statement}</h2>
                                    }
                                </>
                            )}
                    </div>

                }
            </>
        )
    }
}