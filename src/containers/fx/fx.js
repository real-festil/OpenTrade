import React from "react";
import Header from "../../components/ui/header/header";
import Sidedrawer from "../../components/ui/sidedrawer/sidedrawer";
import FXGrid from "../../components/fxGrids/fxGrid/fxGrid.js";
import FXTrades from "../../components/fxGrids/fxTrades/fxTrades";
import SplitPane from "react-split-pane";
import "../../components/editors/algoEditor/splitPane.css";

class FX extends React.Component {
  state = {
    showSidedrawer: true,
    value: 0,
  };

  render() {
    return (
      <>
        <Header
          sidedrawerClicked={() =>
            this.setState({ showSidedrawer: !this.state.showSidedrawer })
          }
        />
        <div style={{ display: "flex" }}>
          <Sidedrawer
            showSidedrawer={this.state.showSidedrawer}
            defaultSize={100}
          />
          <div>
            <SplitPane split="horizontal" size="20%">
              <FXGrid />
              <FXTrades />
            </SplitPane>
          </div>
        </div>
      </>
    );
  }
}

export default FX;
