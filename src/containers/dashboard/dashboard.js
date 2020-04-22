import React, { Component } from "react";
import ChangePassword from "../../components/changePassword/changePassword";
import PlaceOrder from "../../components/placeOrder/placeOrder";
import AlgoEditor from "../../components/editors/algoEditor/algoEditor";
import RiskEditor from "../../components/editors/riskEditor/riskEditor";
import Button from "../../components/ui/button/button";
import Header from "../../components/ui/header/header";
import Sidedrawer from "../../components/ui/sidedrawer/sidedrawer";
import RGL, { WidthProvider } from "react-grid-layout";
import { Grid } from "@material-ui/core";
import classes from "./dashboard.module.css";
import gridLayout from "../../components/grids/gridLayout/gridLayout";
import "./Dragging.css";
import Overview from "../../components/grids/overview/overview";
import MarketWatch from "../../components/grids/marketWatch/marketWatch";
import OrderDepth from "../../components/grids/orderDepth/orderDepth";
import Select from "../../components/ui/select/select";
import IconSelect from "../../components/ui/iconSelect/iconSelect";
import ColumnsImg from "../../images/columns.svg";
import LastGrid from "../../components/grids/lastGrid/lastGrid";
import Pl from "../../components/grids/PL/PL";
import * as zoom from "chartjs-plugin-zoom";
import FullScreen from "react-full-screen";
import { WithSize } from "react-sizeme";
import fullscreenImage from "../../images/fullscreen.svg";
import fullscreenGrayImage from "../../images/fullscreenGray.svg";
import SizeMe from "./sizeMe";
import IntraDay from "../../components/grids/intraDays/index.js";
import { connect } from "react-redux";

const GridLayout = SizeMe(RGL);

class Dashboard extends Component {
  state = {
    showPlaceOrder: false,
    showChangePassword: false,
    showAlgo: false,
    showRisk: false,
    showSidedrawer: true,
    isFullscreen: false,
    isFullscreenRealTime: false,
  };

  placeOrderHandler = () => {
    this.setState({ showPlaceOrder: true });
  };

  changePasswordHandler = () => {
    this.setState({ showChangePassword: true });
  };

  algoHandler = () => {
    this.setState({ showAlgo: true });
  };

  riskHandler = () => {
    this.setState({ showRisk: true });
  };

  showSidedrawerHandler = () => {
    if (localStorage.getItem("SideDrawerOpen") === "true") {
      return;
    } else {
      this.setState({ showSidedrawer: !this.state.showSidedrawer });
      setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
      this.onWidthChanged();
    }
  };

  modalClosedHandler = () => {
    this.setState({
      showPlaceOrder: false,
      showChangePassword: false,
      showAlgo: false,
      showRisk: false,
    });
  };

  alertClickedHandler = () => {
    alert("admin required");
  };

  onFullscreenHandler = () => {
    this.setState({ isFullscreen: true });
  };

  onFullscreenRealTiimeHandler = () => {
    this.setState({ isFullscreenRealTime: true });
  };

  onLogout = () => {
    let promise = new Promise((resolve) => {
      resolve(this.setState({ isLogged: false }));
    });
    promise.then((result) => {
      localStorage.setItem("isLogged", this.state.isLogged);
      window.location.reload();
    });
  };

  layout = [
    {
      i: "c",
      x: 0,
      y: 0,
      w: 6,
      h: 4,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
    {
      i: "b",
      x: 3,
      y: 4,
      w: 12,
      h: 7.2,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
    {
      i: "a",
      x: 6,
      y: 0,
      w: 6,
      h: 4,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
    {
      i: "d",
      x: 0,
      y: 2,
      w: 2,
      h: 4,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
    {
      i: "e",
      x: 2,
      y: 2,
      w: 5,
      h: 4,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
    {
      i: "f",
      x: 7,
      y: 2,
      w: 5,
      h: 4,
      minW: 1,
      maxW: Infinity,
      minH: 0.5,
      maxH: Infinity,
    },
  ];

  onWidthChanged = () => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 200);
  };

  options = [
    { value: "TF", label: "TF" },
    { value: "HG", label: "HG" },
    { value: "SIM", label: "SIM" },
    { value: "cpt_test", label: "cpt_test" },
    { value: "MS", label: "MS" },
    { value: "KGI", label: "KGI" },
  ];

  sourceOptions = [
    { value: "MS", label: "ms" },
    { value: "KGI", label: "kgi" },
  ];

  securityOptions = [{ value: "none", label: "server is unreachable" }];

  netOptions = [
    { value: "Net", label: "Net" },
    { value: "Realized", label: "Realized" },
    { value: "Unrealized", label: "Unrealized" },
    { value: "Commission", label: "Commission" },
    { value: "Real-Com", label: "Real-Com" },
  ];

  timeOptions = [
    { value: "All", label: "All" },
    { value: "3d", label: "3d" },
    { value: "1d", label: "1d" },
    { value: "12h", label: "12h" },
    { value: "6h", label: "6h" },
    { value: "3h", label: "3h" },
    { value: "1h", label: "1h" },
  ];

  render() {
    const dragHandleName = this.props.isDark
      ? "DragHandle"
      : this.props.isBlue
      ? "BlueDragHandle"
      : "WhiteDragHandle";
    return (
      <>
        <Header
          caption="Dashboard"
          clicked={this.placeOrderHandler}
          sidedrawerClicked={this.showSidedrawerHandler}
          changeClicked={this.changePasswordHandler}
          alertClicked={this.alertClickedHandler}
          algoClicked={this.algoHandler}
        />
        <div
          className="grid"
          style={{
            backgroundColor: this.props.isDark
              ? null
              : this.props.isBlue
              ? "rgb(44, 61, 99)"
              : "#e3e4e5",
          }}
        >
          <Sidedrawer
            showSidedrawer={this.state.showSidedrawer}
            LogOut={this.onLogout}
          />

          <div
            className="tables"
            style={{
              transform: this.state.showSidedrawer
                ? "translateX(0)"
                : "translateX(-50px)",
              transition: "0.3s ease-out",
              height: this.state.showSidedrawer ? null : "100%",
              position: this.state.showSidedrawer ? null : "absolute",
              left: this.state.showSidedrawer ? null : "50px",
              width: this.state.showSidedrawer ? "100%" : "calc(100% + 50px)",
            }}
          >
            <GridLayout
              cols={12}
              rowHeight={81}
              onResizeStop={this.onWidthChanged}
              useCSSTransforms={false}
              draggableHandle={"." + dragHandleName}
              layout={this.layout}
            >
              <div className={classes.Placeholder} key="d">
                <div className={dragHandleName}>
                  <p>Order Depth:</p>
                </div>
                <OrderDepth />
              </div>
              <div className={classes.Placeholder} key="a">
                <div className={dragHandleName}>
                  <p>Overview</p>
                  <Select
                    options={this.options}
                    isMulti
                    inputValue="choose interested accounts"
                    width="100%"
                    containerWidth="70%"
                  />
                </div>
                <Overview />
              </div>
              <div className={classes.Placeholder} key="b">
                <FullScreen
                  enabled={this.state.isFullscreenRealTime}
                  onChange={(isFullscreenRealTime) =>
                    this.setState({ isFullscreenRealTime })
                  }
                >
                  <div className={dragHandleName}>
                    <p style={{ flex: "50%", width: "50px" }}>
                      Real time price
                    </p>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <img
                        src={
                          this.props.isDark
                            ? fullscreenGrayImage
                            : this.props.isBlue
                            ? fullscreenGrayImage
                            : fullscreenImage
                        }
                        alt=""
                        style={{ marginRight: "20px", cursor: "pointer" }}
                        onClick={this.onFullscreenRealTimeHandler}
                      />
                    </div>
                  </div>
                  <IntraDay />
                </FullScreen>
              </div>
              <div className={classes.Placeholder} key="c">
                <MarketWatch />
              </div>
              <div className={classes.Placeholder} key="e">
                <FullScreen
                  enabled={this.state.isFullscreen}
                  onChange={(isFullscreen) => this.setState({ isFullscreen })}
                >
                  <div className={dragHandleName}>
                    <p style={{ flex: "50%", width: "50px" }}>P&L in USD</p>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <img
                        src={
                          this.props.isDark
                            ? fullscreenGrayImage
                            : this.props.isBlue
                            ? fullscreenGrayImage
                            : fullscreenImage
                        }
                        alt=""
                        style={{ marginRight: "20px", cursor: "pointer" }}
                        onClick={this.onFullscreenHandler}
                      />
                      <div style={{ width: "35%" }}>
                        <Select
                          options={this.netOptions}
                          inputValue="Net"
                          width="400%"
                          containerWidth="18%"
                        />
                      </div>
                      <div style={{ width: "35%" }}>
                        <Select
                          options={this.timeOptions}
                          inputValue="1d"
                          width="400%"
                          containerWidth="18%"
                        />
                      </div>
                    </div>
                  </div>
                  <Pl />
                </FullScreen>
              </div>

              <div className={classes.Placeholder} key="f">
                <LastGrid />
              </div>
            </GridLayout>
          </div>
        </div>

        {/* <Button caption='Change password' clicked={this.changePasswordHandler}/> <br/>
                <Button caption='Algo' clicked={this.algoHandler} />
                <Button caption='Risk' clicked={this.riskHandler} /> */}
        <PlaceOrder
          show={this.state.showPlaceOrder}
          modalClosed={this.modalClosedHandler}
        />
        <ChangePassword
          show={this.state.showChangePassword}
          modalClosed={this.modalClosedHandler}
        />
        <AlgoEditor
          show={this.state.showAlgo}
          modalClosed={this.modalClosedHandler}
        />
        <RiskEditor
          show={this.state.showRisk}
          modalClosed={this.modalClosedHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDark: state.theme === "dark" ? true : false,
    isBlue: state.theme === "blue" ? true : false,
  };
};

export default connect(mapStateToProps)(Dashboard);
