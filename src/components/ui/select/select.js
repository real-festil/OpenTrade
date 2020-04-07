import React, { Component } from 'react';
import {default as Select} from 'react-select';
import './Select.css';
import {connect} from "react-redux";

const select = ( props ) => {
    let options = props.options;

    const customStyles = {
        container: () => ({
            width: props.containerWidth,
            marginRight: 20
        }),
        control: (provided, {isFocused, isSelected, isHovered}) => ({
            width: props.width,
            height: "20px",
            border: isFocused ? "2px solid #20a8d8" : props.invalid ? "2px solid red" : props.isDark ? "1px solid #37373c" : props.isBlue ? "1px solid #3737c" : "1px solid #dedee0",
            borderRadius: "5px",
            transition: "0.2s ease",
            backgroundColor: props.isDark ? "#202028" : props.isBlue ? "#0b124a" : "#ffffff",
            color: "#22ADF6",
            fontSize: "12px",
            cursor: "pointer",
            padding: "5px",
            display: 'flex',
            boxShadow: isFocused ? "0px 0px 15px #20a8d8" : null
        }),
        singleValue: () => ({
            color: "#22ADF6",
            marginBottom: 5
        }),
        indicatorSeparator: () => ({
            border: 'none'
        }),
        menu: () => ({
            width: props.containerWidth,
            zIndex: '200',
            marginLeft: 3,
            position: 'absolute',
            color: "white",
            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)"
        }),
        option: () => ({
            color: "white",
            height: '20px',
            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)",
            textAlign: 'left',
            fontSize: 12,
            padding: 5,
            paddingLeft: 14,
            fontWeigt: 'regular '
        }),
        placeholder: () => ({
            color: props.isBlue ? "white" : "#555555",
            marginBottom: 5
        }),
        multiValue: () => ({
         border: '1px solid #163c68',
         display: 'flex',
         alignItems: 'center',
         marginRight: 5,
         backgroundColor: "rgba(0, 126, 255, 0.08)",
         marginTop: -4.5
        }),
        multiValueLabel: () => ({
         color: '#22ADF6',
         fontSize: 10,
         padding: 2
        }),
        multiValueRemove: (provided, {isFocused, isSelected, isHovered}) => ({
         backgroundColor: isHovered ? "rgba(0, 126, 255, 0.08)" : null,
         border: '1px solid #163c68'
        }),
        multiValue: () => ({
         border: '1px solid #163c68',
         display: 'flex',
         alignItems: 'center',
         marginRight: 5,
         backgroundColor: "rgba(0, 126, 255, 0.08)",
         marginTop: -4.5
        }),
        multiValueLabel: () => ({
         color: '#22ADF6',
         fontSize: 10,
         padding: 2
        }),
        multiValueRemove: (provided, {isFocused, isSelected, isHovered}) => ({
         backgroundColor: isHovered ? "rgba(0, 126, 255, 0.08)" : null,
         border: '1px solid #163c68'
        })
    }

    return (
        <Select options={options}
                name={props.name}
                styles={customStyles}
                maxMenuHeight={250}
                style={props.style}
                isMulti={props.isMulti}
                className='react-select-container'
                classNamePrefix="react-select"
                defaultValue={props.value}
                placeholder={props.inputValue}
                onChange={props.changed}
                {...select}/>
    )
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(select);