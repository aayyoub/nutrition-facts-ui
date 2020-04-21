import {Helmet} from "react-helmet";
import React, {Component} from "react";

export default class Seo extends Component {
    render() {
        return (
            <div>
                {
                    this.props.seoTags && this.props.seoTags.title && this.props.seoTags.description
                        ?
                        <Helmet>
                            <title>{this.props.seoTags.title}</title>
                            <meta name="description" content={this.props.seoTags.description}/>
                        </Helmet>
                        :
                        <Helmet>
                            <title>Nutrition Facts and Calories | NutritionFacts.io</title>
                            <meta name="description"
                                  content={"Nutrition facts and calories. " +
                                  "Protein, carbs, and fat information for weight loss, " +
                                  "including nutrient values for vitamins, minerals, and recommended daily intake. " +
                                  "Trusted nutrition database for healthy eating."}/>
                        </Helmet>
                }
            </div>
        )
    }
}