import React, {Component} from "react";
import logo from "../../image/logo.png";
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <a href="https://www.nutritionfacts.io/">
                <img className="logo" src={logo} alt="NutritionFacts.io Logo"/>
            </a>
        );
    }
}