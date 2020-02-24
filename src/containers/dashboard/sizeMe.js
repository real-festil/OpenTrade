import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import SizeMe from 'react-sizeme';
const WidthProvider = (ComposedComponent) => class extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            width: this.props.size.width,
            height: this.props.size.height,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            width: nextProps.size.width,
            height: nextProps.size.height
        });
    }

    render() {
        return (
            <ComposedComponent {...this.props} {...this.state} />
        );
    }

}

export default (ComposedComponent) => SizeMe({
    monitorWidth: true,
    monitorHeight: true
})(WidthProvider(ComposedComponent));