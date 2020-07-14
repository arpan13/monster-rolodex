import React, { Component } from 'react';
import "./search-box.styles.css";

export const SearchBox = ({placeholder,handleChange})=>(
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}></input>
)
//e=>this.setState({searchFeild:e.target.value})

