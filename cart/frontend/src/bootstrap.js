import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";

const AsyncApp = lazy(() => import('./App'));
const fetch_el = document.getElementById("cart");

const mount = (el) => {   
    ReactDom.render(
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncApp />
      </Suspense>
    , el);
}

if(fetch_el){
    mount(fetch_el);
}

export { mount }