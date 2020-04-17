import React, {Component} from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import GetSearchTermsRequest from "../../library/request/GetSearchTermsRequest";
import SearchRedirect from "../../library/util/SearchRedirect";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';
import './FoodSearch.css'

export default class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerms: [],
            isLoading: false
        }
    }

    async getSearchTerms(searchTerm) {
        this.setState({isLoading: true});

        let getSearchTermsRequest = new GetSearchTermsRequest();
        let searchTerms = await getSearchTermsRequest.getSearchTerms(searchTerm);

        this.setState({
            searchTerms: searchTerms,
            isLoading: false
        });
    }

    selectFood(selectedSearchTerm) {
        if (selectedSearchTerm && selectedSearchTerm[0]) {
            let url = selectedSearchTerm[0].url;

            let searchRedirect = new SearchRedirect();
            searchRedirect.redirect(url);
        }
    }

    render() {
        return (
            <div id="search-typeahead" className="typeahead">
                <AsyncTypeahead
                    labelKey="searchTerm"
                    placeholder={"Search"}
                    onSearch={searchTerm => this.getSearchTerms(searchTerm)}
                    onChange={selectedSearchTerm => this.selectFood(selectedSearchTerm)}
                    options={this.state.searchTerms}
                    isLoading={this.state.isLoading}
                    clearButton={true}
                    minLength={2}
                    caseSensitive={false}
                    filterBy={() => {return true;}}
                />
            </div>
        );
    }
}