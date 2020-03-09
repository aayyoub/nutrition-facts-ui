import React, {Component} from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead";
import GetSearchTermsRequest from "../../library/request/GetSearchTermsRequest";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import SearchContextResolver from "../../library/util/SearchContextResolver";
import SearchRedirect from "../../library/util/SearchRedirect";

export default class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSearchTerm: "",
            searchTerms: [],
            isLoading: false
        }
    }

    componentDidMount() {
        let searchContextResolver = new SearchContextResolver();
        let defaultSearchTerm = searchContextResolver.getSearchTerm();

        this.setState({defaultSearchTerm: defaultSearchTerm});
    }

    async getSearchTerms(searchTerm) {
        if (searchTerm.length < 2) {
            return;
        }

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

    clear() {
        this.setState({
            defaultSearchTerm: "",
        });
    }

    render() {
        return (
            <AsyncTypeahead
                labelKey="searchTerm"
                placeholder={"Search..."}
                onSearch={searchTerm => this.getSearchTerms(searchTerm)}
                onChange={selectedSearchTerm => this.selectFood(selectedSearchTerm)}
                options={this.state.searchTerms}
                isLoading={this.state.isLoading}
                clearButton={true}
                defaultInputValue={this.state.defaultSearchTerm}
            />
        );
    }
}