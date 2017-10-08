"use strict";

const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const bundle = require("./lib/bundle");

bundle([{
    id: "iife",
    ext: "",
    name: "IIFE",
}], [
    resolve({
        jsnext: true,
        main: true
    }),
    commonjs()
]);
