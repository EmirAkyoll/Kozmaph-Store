import React from "react";
import ReactDom from "react-dom";
import App from './App.tsx';

const fetch_el = document.getElementById("cart");

const mount = (el) => {   
    ReactDom.render(<App />, el);
}

if(fetch_el){
    mount(fetch_el);
}

export { mount }