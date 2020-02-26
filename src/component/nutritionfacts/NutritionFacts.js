import React, {Component} from 'react';
import './NutritionFacts.css';

export default class NutritionFacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.nutritionFacts.caloriesValueFormatted &&
                <div className="nutrition-facts-section align-self-center">
                    <div className="nutrition-facts-header-section">
                        <h1 className="nutrition-facts-title">Nutrition Facts</h1>
                        <h2 className="nutrition-facts-servings-per-container">1 serving per container</h2>
                        <p className="nutrition-facts-serving-size">Serving size 100 grams</p>
                    </div>

                    <div className="nutrition-facts-calorie-section">
                        <p className="nutrition-facts-amount-per-serving">Amount per serving</p>
                        <h1 className="nutrition-facts-calories">Calories</h1>
                        <h1 className="nutrition-facts-calories-value">{this.props.nutritionFacts.caloriesValueFormatted}</h1>
                    </div>

                    <table className="nutrition-facts-table">
                        <thead>
                        <tr>
                            <th className="nutrition-facts-daily-value-text" colSpan="3">% Daily Value*</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th colSpan="2"><b>Total Fat</b> {this.props.nutritionFacts.fatValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.fatPercentDailyValueFormatted}</td>
                        </tr>
                        <tr>
                            <td className="nutrition-facts-empty-cell"/>
                            <th>Saturated Fat {this.props.nutritionFacts.saturatedFatValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.saturatedFatPercentDailyValueFormatted}</td>
                        </tr>
                        <tr>
                            <td className="nutrition-facts-empty-cell"/>
                            <th>Trans Fat {this.props.nutritionFacts.transFatValueFormatted}</th>
                            <td/>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Cholesterol</b> {this.props.nutritionFacts.cholesterolValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.cholesterolPercentDailyValueFormatted}</td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Sodium</b> {this.props.nutritionFacts.sodiumValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.sodiumPercentDailyValueFormatted}</td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Total Carbohydrate</b> {this.props.nutritionFacts.totalCarbohydrateValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.totalCarbohydratePercentDailyValueFormatted}</td>

                        </tr>
                        <tr>
                            <td className="nutrition-facts-empty-cell"/>
                            <th>Dietary Fiber {this.props.nutritionFacts.dietaryFiberValueFormatted}</th>
                            <td className="nutrition-facts-percentage-value">{this.props.nutritionFacts.dietaryFiberPercentDailyValueFormatted}</td>
                        </tr>
                        <tr>
                            <td className="nutrition-facts-empty-cell"/>
                            <th>Total Sugars</th>
                            <td/>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Protein</b> {this.props.nutritionFacts.proteinValueFormatted}</th>
                            <td/>
                        </tr>
                        </tbody>
                    </table>
                </div>
                }
            </div>);
    }
}