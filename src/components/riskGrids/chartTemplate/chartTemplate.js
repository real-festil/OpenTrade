import React from 'react';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../grids/PL/chart.css';
import Hammer from 'hammerjs';
import * as zoom from 'chartjs-plugin-zoom';
import Measure from 'react-measure';
import {connect} from "react-redux";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '10',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(61, 39, 52, 0.4)',
      borderColor: 'rgb(61, 39, 52)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [-65, -59, -80, -81, -56, -55, -40]
    },
    {
      label: '15',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 49, 115, 0.4)',
      borderColor: 'rgb(38, 49, 115)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [165, 259, 80, 25, 56, 55, 140]
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [{
        display: true,
    }],
    yAxes: [{
        display: true,
        // ticks: {
        //     beginAtZero: true
        // }

    }],
    pan: {
        // Boolean to enable panning
        enabled: true,
        mode: 'xy',
        // rangeMin: {
        //     x: null,
        //     y: null
        // },
        // rangeMax: {
        //     x: null,
        //     y: null
        // }
    },
    zoom: {
        enabled: true,
        drag: true,
        mode: 'xy',
    }
  }
}



class ChartTemplate extends React.Component {


  componentWillMount(){
      Chart.plugins.register(zoom)
  }

	render() {
		return (
      <Measure bounds>
        {({measureRef}) => (
        <div ref={measureRef} style={{marginTop: this.props.isDark ? "10px" : "0",
                                      height: this.props.isDark ? "calc(100% - 54px)" : "calc(100% - 42px)",
                                      background: this.props.isDark ? "#31313d" : this.props.isBlue ? "#010839" : "white"}}>
          <Line data={data} height={null} redraw={true} options={options}/>
        </div>)}
      </Measure>
		)
	}
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(ChartTemplate);