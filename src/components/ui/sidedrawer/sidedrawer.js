import React, { Component } from "react";
import classes from "./sidedrawer.module.css";
import crossImage from "../../../images/cross.svg";
import dashImage from "../../../images/dash.svg";
import shieldImage from "../../../images/shield.svg";
import arrowImage from "../../../images/arrow.svg";
import wandImage from "../../../images/wand.svg";
import manImage from "../../../images/man.svg";
import themeImage from "../../../images/theme.svg";
import { Link } from "react-router-dom";
import {
  changeThemeWhite,
  changeThemeDark,
  changeThemeBlue,
} from "../../../reducers";
import { connect } from "react-redux";

class Sidedrawer extends Component {
  state = {
    opened: false,
    visible: this.props.showSidedrawer,
    userClicked: false,
    themeClicked: false,
  };

  openHandler = () => {
    this.setState({
      opened: !this.state.opened,
      userClicked: false,
      themeClicked: false,
    });
    setTimeout(
      () => localStorage.setItem("SideDrawerOpen", this.state.opened),
      0
    );
    setTimeout(() => window.dispatchEvent(new Event("resize")), 400);
    setTimeout(() => window.dispatchEvent(new Event("resize")), 600);
  };

  userHandler = () => {
    this.setState({ userClicked: !this.state.userClicked });
  };

  themeHandler = () => {
    this.setState({ themeClicked: !this.state.themeClicked });
  };

  visibleHandler = () => {
    this.setState({ visible: !this.state.visible });
  };

  hideBlockHandler = () => {
    if (!this.state.opened) {
      return "flex";
    } else if (this.state.userClicked) {
      return "flex";
    } else return "none";
  };

  onThemeChange = () => {
    this.props.dispatch(changeThemeWhite());
  };

  render() {
    let block = this.hideBlockHandler();
    return (
      <>
        <div
          className={classes.Sidedrawer}
          style={{
            width: this.state.opened ? "200px" : "50px",
            transform: this.props.showSidedrawer
              ? "translateX(0)"
              : "translateX(-50px)",
          }}
        >
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div
              className={
                this.state.opened
                  ? classes.ButtonWrapperOpen
                  : classes.ButtonWrapper
              }
              style={{ width: this.state.opened ? "200px" : "50px" }}
            >
              <img src={dashImage} alt="" />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to="/risk" style={{ textDecoration: "none" }}>
            <div
              className={
                this.state.opened
                  ? classes.ButtonWrapperOpen
                  : classes.ButtonWrapper
              }
              style={{ width: this.state.opened ? "200px" : "50px" }}
            >
              <img src={shieldImage} alt="" />
              <div>Risk</div>
            </div>
          </Link>
          <Link to="/fx" style={{ textDecoration: "none" }}>
            <div
              className={
                this.state.opened
                  ? classes.ButtonWrapperOpen
                  : classes.ButtonWrapper
              }
              style={{ width: this.state.opened ? "200px" : "50px" }}
            >
              <img src={shieldImage} alt="" />
              <div>FX trading</div>
            </div>
          </Link>
          <div className={classes.ControlWrapper}>
            <div
              className={
                this.state.opened
                  ? classes.ButtonWrapperOpen
                  : classes.ButtonWrapper
              }
              style={{ width: this.state.opened ? "200px" : "50px" }}
              onClick={this.state.opened ? this.userHandler : null}
            >
              <img
                src={manImage}
                alt=""
                style={{ marginTop: this.state.userClicked ? "-50px" : null }}
              />
              <div>
                <p
                  className={classes.Caption}
                  style={{ margin: this.state.userClicked ? "10px 0" : null }}
                >
                  User
                </p>
                <div
                  className={classes.Control}
                  style={{
                    display: block,
                    position: this.state.userClicked ? "static" : null,
                    justifyContent: "flex-start",
                    margin: this.state.userClicked ? "0" : null,
                    height: this.state.userClicked ? "45px" : null,
                    paddingTop: this.state.userClicked ? "10px" : null,
                  }}
                  onClick={this.props.LogOut}
                >
                  <p>Log-out</p>
                </div>
              </div>
            </div>
            <div
              className={
                this.state.opened
                  ? classes.ButtonWrapperOpen
                  : classes.ButtonWrapper
              }
              style={{ width: this.state.opened ? "200px" : "50px" }}
              onClick={this.state.opened ? this.themeHandler : null}
            >
              <img
                src={wandImage}
                alt=""
                style={{ marginTop: this.state.themeClicked ? "-50px" : null }}
              />
              <div style={{ height: this.state.themeClicked ? "90px" : null }}>
                <p
                  className={classes.Caption}
                  style={{ margin: this.state.themeClicked ? "10px 0" : null }}
                >
                  Theme
                </p>
                <div
                  className={classes.Control}
                  style={{
                    display: this.state.themeClicked ? "flex" : "flex",
                    position: this.state.themeClicked ? "static" : null,
                    justifyContent: "space-around",
                    margin: this.state.themeClicked ? "0" : null,
                    height: this.state.themeClicked ? "45px" : null,
                    paddingTop: this.state.themeClicked ? "15px" : null,
                  }}
                >
                  <p style={{ marginTop: this.state.opened ? "-30px" : null }}>
                    <img src={themeImage} alt="" />
                    <span
                      onClick={() => this.props.dispatch(changeThemeWhite())}
                    >
                      {" "}
                      Light
                    </span>
                  </p>
                  <p style={{ marginTop: this.state.opened ? "-30px" : null }}>
                    <img src={themeImage} alt="" />
                    <span
                      onClick={() => this.props.dispatch(changeThemeDark())}
                    >
                      {" "}
                      Dark
                    </span>
                  </p>
                  <p style={{ marginTop: this.state.opened ? "-30px" : null }}>
                    <img src={themeImage} alt="" />
                    <span
                      onClick={() => this.props.dispatch(changeThemeBlue())}
                    >
                      {" "}
                      Blue
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classes.Expand}
            onClick={this.openHandler}
            style={{ width: this.state.opened ? "200px" : "50px" }}
          >
            <img
              src={arrowImage}
              alt=""
              style={{
                transition: "0.3s ease-in",
                transform: this.state.opened
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
        </div>
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

export default connect(mapStateToProps)(Sidedrawer);
