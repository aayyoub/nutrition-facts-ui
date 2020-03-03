import {Component} from 'react';
import ReactGA from 'react-ga';

export default class Analytics extends Component {
    componentDidMount() {
        this.initializeGoogleAnalytics();
    }

    initializeGoogleAnalytics() {
        ReactGA.initialize('UA-159448958-1');
        ReactGA.pageview('/');
    }

    render() {
        return null;
    }
}