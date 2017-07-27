import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { SPList } from './components/spLists/SPList';

ReactDOM.render(
    <SPList />,
    document.getElementById("example")
);