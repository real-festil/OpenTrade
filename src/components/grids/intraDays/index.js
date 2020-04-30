import React from "react";
import Chart from "./Chart";
import { getData } from "./utils";
import "./chart.css";
import { connect } from "react-redux";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }

  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div
        className={
          this.props.isDark
            ? null
            : this.props.isBlue
            ? "BlueTheme"
            : "WhiteTheme"
        }
      >
        <Chart type="svg" data={this.state.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDark: state.theme === "dark" ? true : false,
    isBlue: state.theme === "blue" ? true : false,
  };
};

export default connect(mapStateToProps)(ChartComponent);
