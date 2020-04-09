import React, {Component} from "react";
import logo from "../../image/logo.png";
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <h1 className="logo">NutritionFacts<span className="domain">.io</span></h1>
        );
    }
}