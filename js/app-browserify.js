// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")

// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
let Pace = require("../bower_components/pace/pace.js")
import m from 'mithril'
import {home} from './home'

let app = () => {
    setTimeout(() => m.mount(document.querySelector('.container'), home), 1000)
}

window.addEventListener('load', app)