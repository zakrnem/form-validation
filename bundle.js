/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: #dce4e9;\\n    font-size: .9rem;\\n    font-family: sans-serif, serif;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#content {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex: 1 0 auto;\\n}\\n\\n#registration-form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1.3rem;\\n    align-items: center;\\n    border: solid black;\\n    border-radius: 10px;\\n    padding: 2rem;\\n    background-color: white;\\n}\\n\\n.input-container {\\n    display: flex;\\n    flex-direction: column;\\n    gap: .75rem;\\n    align-items: center;\\n    border: none;\\n}\\n\\n.input-container > * {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\ninput {\\n    display: block;\\n    font-size: 90%;\\n    font-family: inherit;\\n    padding: 0.4rem 0.5rem;\\n    margin-top: 0.3rem;\\n    border-radius: 5px;\\n    background-color: rgb(242, 242, 242);\\n}\\n\\n/* This is our style for the invalid fields */\\ninput.invalid {\\n  border-color: #900;\\n  background-color: #fdd;\\n}\\n\\ninput:focus.invalid {\\n  outline: none;\\n}\\n\\n/* This is the style of our error messages */\\n.error {\\n  width: 100%;\\n  padding: 0;\\n\\n  font-size: 80%;\\n  color: white;\\n  background-color: #900;\\n  border-radius: 0 0 5px 5px;\\n\\n  box-sizing: border-box;\\n}\\n\\n.error.active {\\n  padding: 0.3em;\\n}\\n\\nbutton {\\n    padding: 0.5rem 1rem;\\n    border-radius: 10px;\\n    background-color: black;\\n    color: white;\\n    font-size: inherit;\\n    box-shadow: 5px 5px 5px rgb(178 178 178);\\n    font-family: inherit;\\n}\\n\\nfooter {\\n    background-color: black;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 0.4rem 0;\\n    gap: 0.5rem;\\n    margin-top: 1.5rem;\\n    font-weight: 300;\\n}\\n\\n.github {\\n    height: 1.5rem;\\n    width:auto;\\n    fill: white\\n}\\n\\n.github:hover {\\n    transform: rotate(720deg);\\n    transition: transform 1.5s;\\n    fill: white\\n}\\n\\np * {\\n    display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://form-validation/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://form-validation/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://form-validation/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://form-validation/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/capitalizeString.js":
/*!*********************************!*\
  !*** ./src/capitalizeString.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize)\n/* harmony export */ });\nfunction capitalize(string) {\n    return string.replace(/^\\w/, (c) => c.toUpperCase())\n}\n\n//# sourceURL=webpack://form-validation/./src/capitalizeString.js?");

/***/ }),

/***/ "./src/confirmPass.js":
/*!****************************!*\
  !*** ./src/confirmPass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordConfirm\": () => (/* binding */ passwordConfirm)\n/* harmony export */ });\nfunction passwordConfirm() {\n    const password = document.getElementById('password')\n    const passConfirm = document.getElementById('password-confirm')\n    const passConfirmError = document.querySelector('#password-confirm + span.error')\n    let passConfirmValidity = false\n\n    if (passConfirm.value.length === 0) {\n        passConfirm.className = 'invalid'\n        passConfirmError.className = 'error active'\n        passConfirmError.textContent = 'You need to confirm the password.'\n    } else if (passConfirm.value !== password.value) {\n        passConfirm.className = 'invalid'\n        passConfirmError.className = 'error active'\n        passConfirmError.textContent = 'Passwords do not match.'\n    } else {\n        passConfirm.className = 'valid'\n        passConfirmError.textContent = ''\n        passConfirmError.className = 'error'\n        passConfirmValidity = true\n    }\n    return passConfirmValidity\n}\n\n//# sourceURL=webpack://form-validation/./src/confirmPass.js?");

/***/ }),

/***/ "./src/countryValidity.js":
/*!********************************!*\
  !*** ./src/countryValidity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countryValidity\": () => (/* binding */ countryValidity)\n/* harmony export */ });\n/* harmony import */ var _capitalizeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalizeString */ \"./src/capitalizeString.js\");\n\n\nfunction countryValidity() {\n    const country = document.getElementById(\"country\");\n    const countryError = document.querySelector(\"#country + span.error\");\n    const countryList = [\n        \"Afghanistan\",\n        \"Albania\",\n        \"Algeria\",\n        \"American Samoa\",\n        \"Andorra\",\n        \"Angola\",\n        \"Anguilla\",\n        \"Antarctica\",\n        \"Antigua and Barbuda\",\n        \"Argentina\",\n        \"Armenia\",\n        \"Aruba\",\n        \"Australia\",\n        \"Austria\",\n        \"Azerbaijan\",\n        \"Bahamas (the)\",\n        \"Bahrain\",\n        \"Bangladesh\",\n        \"Barbados\",\n        \"Belarus\",\n        \"Belgium\",\n        \"Belize\",\n        \"Benin\",\n        \"Bermuda\",\n        \"Bhutan\",\n        \"Bolivia (Plurinational State of)\",\n        \"Bonaire, Sint Eustatius and Saba\",\n        \"Bosnia and Herzegovina\",\n        \"Botswana\",\n        \"Bouvet Island\",\n        \"Brazil\",\n        \"British Indian Ocean Territory (the)\",\n        \"Brunei Darussalam\",\n        \"Bulgaria\",\n        \"Burkina Faso\",\n        \"Burundi\",\n        \"Cabo Verde\",\n        \"Cambodia\",\n        \"Cameroon\",\n        \"Canada\",\n        \"Cayman Islands (the)\",\n        \"Central African Republic (the)\",\n        \"Chad\",\n        \"Chile\",\n        \"China\",\n        \"Christmas Island\",\n        \"Cocos (Keeling) Islands (the)\",\n        \"Colombia\",\n        \"Comoros (the)\",\n        \"Congo (the Democratic Republic of the)\",\n        \"Congo (the)\",\n        \"Cook Islands (the)\",\n        \"Costa Rica\",\n        \"Croatia\",\n        \"Cuba\",\n        \"Curaçao\",\n        \"Cyprus\",\n        \"Czechia\",\n        \"Côte d'Ivoire\",\n        \"Denmark\",\n        \"Djibouti\",\n        \"Dominica\",\n        \"Dominican Republic (the)\",\n        \"Ecuador\",\n        \"Egypt\",\n        \"El Salvador\",\n        \"Equatorial Guinea\",\n        \"Eritrea\",\n        \"Estonia\",\n        \"Eswatini\",\n        \"Ethiopia\",\n        \"Falkland Islands (the) [Malvinas]\",\n        \"Faroe Islands (the)\",\n        \"Fiji\",\n        \"Finland\",\n        \"France\",\n        \"French Guiana\",\n        \"French Polynesia\",\n        \"French Southern Territories (the)\",\n        \"Gabon\",\n        \"Gambia (the)\",\n        \"Georgia\",\n        \"Germany\",\n        \"Ghana\",\n        \"Gibraltar\",\n        \"Greece\",\n        \"Greenland\",\n        \"Grenada\",\n        \"Guadeloupe\",\n        \"Guam\",\n        \"Guatemala\",\n        \"Guernsey\",\n        \"Guinea\",\n        \"Guinea-Bissau\",\n        \"Guyana\",\n        \"Haiti\",\n        \"Heard Island and McDonald Islands\",\n        \"Holy See (the)\",\n        \"Honduras\",\n        \"Hong Kong\",\n        \"Hungary\",\n        \"Iceland\",\n        \"India\",\n        \"Indonesia\",\n        \"Iran (Islamic Republic of)\",\n        \"Iraq\",\n        \"Ireland\",\n        \"Isle of Man\",\n        \"Israel\",\n        \"Italy\",\n        \"Jamaica\",\n        \"Japan\",\n        \"Jersey\",\n        \"Jordan\",\n        \"Kazakhstan\",\n        \"Kenya\",\n        \"Kiribati\",\n        \"Korea (the Democratic People's Republic of)\",\n        \"Korea (the Republic of)\",\n        \"Kuwait\",\n        \"Kyrgyzstan\",\n        \"Lao People's Democratic Republic (the)\",\n        \"Latvia\",\n        \"Lebanon\",\n        \"Lesotho\",\n        \"Liberia\",\n        \"Libya\",\n        \"Liechtenstein\",\n        \"Lithuania\",\n        \"Luxembourg\",\n        \"Macao\",\n        \"Madagascar\",\n        \"Malawi\",\n        \"Malaysia\",\n        \"Maldives\",\n        \"Mali\",\n        \"Malta\",\n        \"Marshall Islands (the)\",\n        \"Martinique\",\n        \"Mauritania\",\n        \"Mauritius\",\n        \"Mayotte\",\n        \"Mexico\",\n        \"Micronesia (Federated States of)\",\n        \"Moldova (the Republic of)\",\n        \"Monaco\",\n        \"Mongolia\",\n        \"Montenegro\",\n        \"Montserrat\",\n        \"Morocco\",\n        \"Mozambique\",\n        \"Myanmar\",\n        \"Namibia\",\n        \"Nauru\",\n        \"Nepal\",\n        \"Netherlands (the)\",\n        \"New Caledonia\",\n        \"New Zealand\",\n        \"Nicaragua\",\n        \"Niger (the)\",\n        \"Nigeria\",\n        \"Niue\",\n        \"Norfolk Island\",\n        \"Northern Mariana Islands (the)\",\n        \"Norway\",\n        \"Oman\",\n        \"Pakistan\",\n        \"Palau\",\n        \"Palestine, State of\",\n        \"Panama\",\n        \"Papua New Guinea\",\n        \"Paraguay\",\n        \"Peru\",\n        \"Philippines (the)\",\n        \"Pitcairn\",\n        \"Poland\",\n        \"Portugal\",\n        \"Puerto Rico\",\n        \"Qatar\",\n        \"Republic of North Macedonia\",\n        \"Romania\",\n        \"Russian Federation (the)\",\n        \"Rwanda\",\n        \"Réunion\",\n        \"Saint Barthélemy\",\n        \"Saint Helena, Ascension and Tristan da Cunha\",\n        \"Saint Kitts and Nevis\",\n        \"Saint Lucia\",\n        \"Saint Martin (French part)\",\n        \"Saint Pierre and Miquelon\",\n        \"Saint Vincent and the Grenadines\",\n        \"Samoa\",\n        \"San Marino\",\n        \"Sao Tome and Principe\",\n        \"Saudi Arabia\",\n        \"Senegal\",\n        \"Serbia\",\n        \"Seychelles\",\n        \"Sierra Leone\",\n        \"Singapore\",\n        \"Sint Maarten (Dutch part)\",\n        \"Slovakia\",\n        \"Slovenia\",\n        \"Solomon Islands\",\n        \"Somalia\",\n        \"South Africa\",\n        \"South Georgia and the South Sandwich Islands\",\n        \"South Sudan\",\n        \"Spain\",\n        \"Sri Lanka\",\n        \"Sudan (the)\",\n        \"Suriname\",\n        \"Svalbard and Jan Mayen\",\n        \"Sweden\",\n        \"Switzerland\",\n        \"Syrian Arab Republic\",\n        \"Taiwan\",\n        \"Tajikistan\",\n        \"Tanzania, United Republic of\",\n        \"Thailand\",\n        \"Timor-Leste\",\n        \"Togo\",\n        \"Tokelau\",\n        \"Tonga\",\n        \"Trinidad and Tobago\",\n        \"Tunisia\",\n        \"Turkey\",\n        \"Turkmenistan\",\n        \"Turks and Caicos Islands (the)\",\n        \"Tuvalu\",\n        \"Uganda\",\n        \"Ukraine\",\n        \"United Arab Emirates (the)\",\n        \"United Kingdom of Great Britain and Northern Ireland (the)\",\n        \"United States Minor Outlying Islands (the)\",\n        \"United States of America (the)\",\n        \"Uruguay\",\n        \"Uzbekistan\",\n        \"Vanuatu\",\n        \"Venezuela (Bolivarian Republic of)\",\n        \"Viet Nam\",\n        \"Virgin Islands (British)\",\n        \"Virgin Islands (U.S.)\",\n        \"Wallis and Futuna\",\n        \"Western Sahara\",\n        \"Yemen\",\n        \"Zambia\",\n        \"Zimbabwe\",\n        \"Åland Islands\"\n    ]\n    let countryValidity = false\n    let countryInput = country.value !== 0 ? (0,_capitalizeString__WEBPACK_IMPORTED_MODULE_0__.capitalize)(country.value) : country.value\n    let isValid = countryList.includes(countryInput)\n\n    if (countryInput.length === 0) {\n        country.className = \"invalid\"\n        showError('value-missing')\n    } else if (!isValid) {\n        country.className = \"invalid\"\n        showError('type-mismatch')\n    } else {\n        country.className = \"valid\"\n        countryError.textContent = \"\"\n        countryError.className = \"error\"\n        countryValidity = true\n    }\n\n    function showError(error) {            \n        if (error === 'value-missing') {\n            countryError.textContent = \"You need to enter a country.\";\n        } else if (error === 'type-mismatch') {\n            countryError.textContent = \"Entered value needs to be a valid country.\";\n        }\n        countryError.className = \"error active\";\n    }\n    return countryValidity\n}\n\n\n//# sourceURL=webpack://form-validation/./src/countryValidity.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n    let footer = document.createElement('footer')\n    footer.innerHTML = 'Made by Zakrnem <a href=\"http://github.com/zakrnem\"><svg class=\"github\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/></svg></a>'\n    \n    let body = document.querySelector('body')\n    return body.appendChild(footer)\n}\n\n//# sourceURL=webpack://form-validation/./src/footer.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _inputError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputError */ \"./src/inputError.js\");\n/* harmony import */ var _insertForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertForm */ \"./src/insertForm.js\");\n\n\n\n\nfunction homepage() {\n    (0,_insertForm__WEBPACK_IMPORTED_MODULE_2__.insertForm)()\n    ;(0,_footer__WEBPACK_IMPORTED_MODULE_0__.footer)()\n    ;(0,_inputError__WEBPACK_IMPORTED_MODULE_1__.inputError)()\n}\n\n//# sourceURL=webpack://form-validation/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.homepage)()\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

/***/ }),

/***/ "./src/inputError.js":
/*!***************************!*\
  !*** ./src/inputError.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputError\": () => (/* binding */ inputError)\n/* harmony export */ });\n/* harmony import */ var _mailValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mailValidity */ \"./src/mailValidity.js\");\n/* harmony import */ var _countryValidity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countryValidity */ \"./src/countryValidity.js\");\n/* harmony import */ var _zipCodeValidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zipCodeValidity */ \"./src/zipCodeValidity.js\");\n/* harmony import */ var _passValidity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passValidity */ \"./src/passValidity.js\");\n/* harmony import */ var _confirmPass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmPass */ \"./src/confirmPass.js\");\n\n\n\n\n\n\nfunction inputError() {\n    const form = document.querySelector(\"form\");\n\n    window.addEventListener(\"load\", () => {\n        (0,_mailValidity__WEBPACK_IMPORTED_MODULE_0__.emailValidity)()\n        ;(0,_countryValidity__WEBPACK_IMPORTED_MODULE_1__.countryValidity)()\n        ;(0,_zipCodeValidity__WEBPACK_IMPORTED_MODULE_2__.zipCodeValidity)()\n        ;(0,_passValidity__WEBPACK_IMPORTED_MODULE_3__.passwordValidity)()\n        ;(0,_confirmPass__WEBPACK_IMPORTED_MODULE_4__.passwordConfirm)()\n    });\n\n    document.addEventListener(\"input\", (e) => {\n        switch (true) {\n            case (e.target.id === 'mail'):\n                (0,_mailValidity__WEBPACK_IMPORTED_MODULE_0__.emailValidity)()\n                break\n            case (e.target.id === 'country'):\n                ;(0,_countryValidity__WEBPACK_IMPORTED_MODULE_1__.countryValidity)()\n                break\n            case (e.target.id === 'zip-code'):\n                ;(0,_zipCodeValidity__WEBPACK_IMPORTED_MODULE_2__.zipCodeValidity)()\n                break\n            case (e.target.id === 'password'):\n                ;(0,_passValidity__WEBPACK_IMPORTED_MODULE_3__.passwordValidity)()\n                break\n            case (e.target.id === 'password-confirm'):\n                ;(0,_confirmPass__WEBPACK_IMPORTED_MODULE_4__.passwordConfirm)()\n                break\n        }\n    });\n\n    form.addEventListener(\"submit\", (event) => {\n        let invalidForm = (0,_mailValidity__WEBPACK_IMPORTED_MODULE_0__.emailValidity)() && (0,_countryValidity__WEBPACK_IMPORTED_MODULE_1__.countryValidity)() && (0,_zipCodeValidity__WEBPACK_IMPORTED_MODULE_2__.zipCodeValidity)() && (0,_passValidity__WEBPACK_IMPORTED_MODULE_3__.passwordValidity)() && (0,_confirmPass__WEBPACK_IMPORTED_MODULE_4__.passwordConfirm)()\n        if (!invalidForm) {\n            event.preventDefault()\n        }\n    });\n}\n\n//# sourceURL=webpack://form-validation/./src/inputError.js?");

/***/ }),

/***/ "./src/insertForm.js":
/*!***************************!*\
  !*** ./src/insertForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertForm\": () => (/* binding */ insertForm)\n/* harmony export */ });\n/* harmony import */ var _newFormInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newFormInput */ \"./src/newFormInput.js\");\n\n\nfunction insertForm() {\n    const content = document.querySelector('#content')\n\n    const form = document.createElement('form')\n    form.id = 'registration-form'\n    //form.noValidate = true\n\n        const formTitle = document.createElement('h3')\n        formTitle.textContent = 'Registration form:'\n        formTitle.className = 'form-title'\n\n        const submit = document.createElement('button')\n        submit.id = 'submit'\n        submit.textContent = 'Register now'\n\n        const fieldset = document.createElement('fieldset')\n        fieldset.className = 'input-container'\n\n            const mail = (0,_newFormInput__WEBPACK_IMPORTED_MODULE_0__.newFormInput)('mail')\n            const country = (0,_newFormInput__WEBPACK_IMPORTED_MODULE_0__.newFormInput)('country')\n            const zipCode = (0,_newFormInput__WEBPACK_IMPORTED_MODULE_0__.newFormInput)('zip-code')\n            const password = (0,_newFormInput__WEBPACK_IMPORTED_MODULE_0__.newFormInput)('password')\n            const passwordConfirm = (0,_newFormInput__WEBPACK_IMPORTED_MODULE_0__.newFormInput) ('password-confirm')\n\n        fieldset.append(mail, country, zipCode, password, passwordConfirm)\n    \n    form.append(formTitle, fieldset, submit)\n    content.append(form)\n}\n\n//# sourceURL=webpack://form-validation/./src/insertForm.js?");

/***/ }),

/***/ "./src/mailValidity.js":
/*!*****************************!*\
  !*** ./src/mailValidity.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailValidity\": () => (/* binding */ emailValidity)\n/* harmony export */ });\nfunction emailValidity() {\n    const email = document.getElementById(\"mail\");\n    const emailError = document.querySelector(\"#mail + span.error\");\n\n    let mailValidity = false\n    const emailRegExp =\n    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\n    const isValid = emailRegExp.test(email.value)\n    const emailMinLength = 8\n\n        if (email.value.length === 0) {\n            email.className = \"invalid\"\n            showError('value-missing')\n        }\n        else if (!isValid) {\n            email.className = \"invalid\"\n            showError('type-mismatch')\n        } \n        else if (email.value.length < emailMinLength) {\n            email.className = 'invalid'\n            showError('too-short')\n        }\n        else {\n            email.className = \"valid\"\n            emailError.textContent = \"\"\n            emailError.className = \"error\"\n            mailValidity = true\n        }\n\n    function showError(error) {            \n        if (error === 'value-missing') {\n            emailError.textContent = \"You need to enter an email address.\";\n        } else if (error === 'type-mismatch') {\n            emailError.textContent = \"Entered value needs to be an email address.\";\n        } else if (error === 'too-short') {\n            emailError.textContent = `Email should be at least ${emailMinLength} characters; you entered ${email.value.length}.`;\n        }\n    \n        emailError.className = \"error active\";\n    }\n    return mailValidity\n}\n\n//# sourceURL=webpack://form-validation/./src/mailValidity.js?");

/***/ }),

/***/ "./src/newFormInput.js":
/*!*****************************!*\
  !*** ./src/newFormInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newFormInput\": () => (/* binding */ newFormInput)\n/* harmony export */ });\nfunction newFormInput(userInput) {\n    let inputText = userInput.replace(/[^\\w\\s]/gi, \" \")\n    .replace(/^\\w/, (c) => c.toUpperCase())\n    const inputContainer = document.createElement('div')\n    inputContainer.className = userInput + '-input'\n        const inputLabel = document.createElement('label')\n        inputLabel.setAttribute('for', userInput)\n        inputLabel.textContent = inputText + ':'\n\n        const newInput = document.createElement('input')\n        newInput.type = userInput.includes('password') ? 'password' : 'text'\n        newInput.id = userInput\n        \n        const inputError = document.createElement('span')\n        inputError.className = 'error'\n        inputError.setAttribute('aria-live', 'polite')\n\n        inputContainer.append(inputLabel, newInput, inputError)\n    return inputContainer\n}\n\n\n//# sourceURL=webpack://form-validation/./src/newFormInput.js?");

/***/ }),

/***/ "./src/passValidity.js":
/*!*****************************!*\
  !*** ./src/passValidity.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordValidity\": () => (/* binding */ passwordValidity)\n/* harmony export */ });\nfunction passwordValidity() {\n    const password = document.getElementById(\"password\");\n    const passwordError = document.querySelector(\"#password + span.error\");\n\n    let passwordValidity = false\n    const passwordRegExp =\n    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{4,}$/ \n    const isValid = passwordRegExp.test(password.value)\n    let minLength = 10\n\n        if (password.value.length === 0) {\n            password.className = \"invalid\"\n            showError('value-missing')\n        }\n        else if (!isValid) {\n            password.className = \"invalid\"\n            showError('type-mismatch')\n        } \n        else if (password.value.length < minLength) {\n            password.className = 'invalid'\n            showError('too-short')\n        }\n        else {\n            password.className = \"valid\"\n            passwordError.textContent = \"\"\n            passwordError.className = \"error\"\n            passwordValidity = true\n        }\n\n    function showError(error) {            \n        if (error === 'value-missing') {\n            passwordError.textContent = \"You need to enter an password.\";\n        } else if (error === 'type-mismatch') {\n            passwordError.textContent = \"Use a strong password with lowercase, uppercase, number, and special character.\";\n        } else if (error === 'too-short') {\n            passwordError.textContent = `Password should be at least ${minLength} characters; you entered ${password.value.length}.`;\n        }\n    \n        passwordError.className = \"error active\";\n    }\n    return passwordValidity\n}\n\n//# sourceURL=webpack://form-validation/./src/passValidity.js?");

/***/ }),

/***/ "./src/zipCodeValidity.js":
/*!********************************!*\
  !*** ./src/zipCodeValidity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"zipCodeValidity\": () => (/* binding */ zipCodeValidity)\n/* harmony export */ });\nfunction zipCodeValidity() {\n    const zipCode = document.querySelector('#zip-code')\n    const zipCodeError = document.querySelector(\"#zip-code + span.error\")\n    let zipCodeValidity = false\n    \n    if (zipCode.value.length === 0) {\n        zipCode.className = 'invalid'\n        zipCodeError.className = 'error active'\n        zipCodeError.textContent = 'You need to enter a zip code.'\n    } else {\n        zipCode.className = 'valid'\n        zipCodeError.textContent = ''\n        zipCodeError.className = 'error'\n        zipCodeValidity = true\n    }\n    return zipCodeValidity\n}\n\n//# sourceURL=webpack://form-validation/./src/zipCodeValidity.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://form-validation/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;