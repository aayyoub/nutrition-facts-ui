import React, {Component} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {MdCheck, MdClose, MdInfoOutline, MdOpenInNew} from "react-icons/md";
import './NutrientPopover.css';

export default class NutrientPopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            goodFor: [],
            badFor: []
        };
    }

    render() {
        const popover = (
            <Popover className="nutrient-popover" id={"nutrient-popover-" + this.props.nutrient.id}>
                <Popover.Content className="nutrient-popover-content">
                    <>
                        <h4 className="section-title">{this.props.nutrient.commonName}</h4>
                        {
                            this.props.nutrient.goodFor && this.props.nutrient.goodFor.map((benefit) =>
                                <p className="benefit-text"><MdCheck className="benefit-icon"/>{benefit}</p>
                            )
                        }
                        {
                            this.props.nutrient.badFor && this.props.nutrient.badFor.map((benefit) =>
                                <p className="benefit-text"><MdClose className="benefit-icon"/>{benefit}</p>
                            )
                        }
                    </>
                    <br/>
                </Popover.Content>
            </Popover>
        );

        return (
            <>
                {
                    this.props.nutrient.goodFor || this.props.nutrient.badFor
                        ?
                        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                            <span>{this.props.nutrient.commonName}
                                <MdInfoOutline className="details-icon"/>
                            </span>
                        </OverlayTrigger>
                        :
                        <span>{this.props.nutrient.commonName}</span>
                }
                {
                    this.props.nutrient.externalLink &&
                        <a href={this.props.nutrient.externalLink} target="_blank">
                            <MdOpenInNew className="external-url-icon"/>
                        </a>

                }

            </>
        );
    }
}