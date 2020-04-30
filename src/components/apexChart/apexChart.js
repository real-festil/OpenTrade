import React from "react";
import Chart from "react-apexcharts";
import { getData } from "../grids/intraDays/utils";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#3C90EB",
              downward: "#DF7D46",
            },
          },
        },
      },
      series: [
        {
          data: [],
        },
      ],
    };
  }

  componentDidMount() {
    getData().then((data) => {
      const parsedData = data.map((el) => {
        return { x: el.date, y: [el.open, el.high, el.low, el.close] };
      });
      console.log(parsedData);
      this.setState({ series: [{ data: parsedData }] });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="apex-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          width="500"
        />
      </div>
    );
  }
}

export default ApexChart;
