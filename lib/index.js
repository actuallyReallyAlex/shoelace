"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
// import Root from "./containers/Root";
// import { configureStore, history } from "./store/configureStore";
// import "./app.global.css";
// const store = configureStore();
// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
(0, _reactDom.render)(_react["default"].createElement("div", null, _react["default"].createElement("span", null, "APPLICATION")), document.getElementById("root")); // render(
//   <AppContainer>
//     <span>APPLICATION</span>
//     {/* <Root store={store} history={history} /> */}
//   </AppContainer>,
//   document.getElementById("root")
// );