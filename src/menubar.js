import {props} from './menubar-data.js'

const React = require('react')
const ReactDOMServer = require('react-dom/server')

const S_Menubar = require('../components/S_Menubar.jsx').default

const menubar = ReactDOMServer.renderToString(
    React.createElement(S_Menubar, props)
)

export {menubar}