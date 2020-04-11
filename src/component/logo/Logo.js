import React, {Component} from "react";
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <div className="logo-section">
                <h1 className="logo">NutritionFacts<span className="logo domain">.io</span></h1>
            </div>
        );
    }
}