import {Helmet} from "react-helmet";
import React, {Component} from "react";

export default class Seo extends Component {
    render() {
        return (
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description}/>
            </Helmet>
        );
    }
}