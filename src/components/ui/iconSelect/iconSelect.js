import React, { Component } from 'react';
import Select from 'react-select';
import '../select/Select.css';

const select = ( props ) => {
    let options = props.options;

    const customStyles = {
        container: () => ({
            width: props.containerWidth,
            marginRight: 0
        }),
        control: (provided, {isFocused, isSelected, isHovered}) => ({
            width: props.width,
            background: "url(" + props.background + ")",
            height: "20px",
            opacity: '0',
            border: isFocused ? "2px solid #20a8d8" : props.invalid ? "2px solid red" : "2px solid #37373c" ,
            borderRadius: "5px",
            transition: "0.2s ease",
            backgroundColor: "#202028",
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
        menuList: () => ({
            padding: 0.5,
            borderRadius: 5,

        }),
        menu: () => ({
            width: props.menuWidth,
            zIndex: '200',

            marginLeft: -200,
            borderRadius: "5px",
            position: 'absolute',
            color: "white",
            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)"
        }),
        option: () => ({
            color: "white",

            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg, rgba(34,173,246,1) 0%, rgba(93,193,246,1) 100%)",
            textAlign: 'left',
            fontSize: 14,
            padding: "10px 20px",
            fontWeigt: 'regular '
        }),
        placeholder: () => ({
            color: "#555555",
            marginBottom: 5
        }),
        group: () => ({
            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg,  rgba(93,193,246,1) 0%,rgba(93,193,246,1) 100%)"
        }),
        groupHeading: () => ({
            height: 39,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            background: "rgb(34,173,246)",
            background: "linear-gradient(90deg,  rgba(93,193,246,1) 0%,rgba(93,193,246,1) 100%)"
        })
    }

    return (
        <Select options={options}
                name={props.name}
                styles={customStyles}
                maxMenuHeight={200}
                style={props.style}
                className='react-select-container'
                classNamePrefix="react-select"
                defaultValue={props.value}
                placeholder={props.inputValue}
                onChange={props.changed}
                {...select}/>
    )
}

export default select;