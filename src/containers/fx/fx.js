import React from "react";
import Header from "../../components/ui/header/header";
import Sidedrawer from "../../components/ui/sidedrawer/sidedrawer";

class FX extends React.Component {
  state = {
    showSidedrawer: true,
  };

  render() {
    return (
      <>
        <Header
          sidedrawerClicked={() =>
            this.setState({ showSidedrawer: !this.state.showSidedrawer })
          }
        />
        <Sidedrawer showSidedrawer={this.state.showSidedrawer} />
        <p>sdasd</p>
      </>
    );
  }
}

export default FX;
