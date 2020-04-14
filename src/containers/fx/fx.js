import React from "react";
import Header from "../../components/ui/header/header";
import Sidedrawer from "../../components/ui/sidedrawer/sidedrawer";
import FXGrid from "../../components/fxGrids/fxGrid/fxGrid.js";

class FX extends React.Component {
  state = {
    showSidedrawer: true,
    value: 0,
  };

  // valueInterval = setInterval(() => {
  //   this.setState({ value: (Math.random() * (64 - 59) + 59).toFixed(2) });
  // }, 2000);

  render() {
    return (
      <>
        <Header
          sidedrawerClicked={() =>
            this.setState({ showSidedrawer: !this.state.showSidedrawer })
          }
        />
        <div style={{ display: "flex" }}>
          <Sidedrawer showSidedrawer={this.state.showSidedrawer} />
          <FXGrid />
        </div>
      </>
    );
  }
}

export default FX;
