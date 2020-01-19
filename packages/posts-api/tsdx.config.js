const visualizer = require("rollup-plugin-visualizer");
const ts = require("@wessberg/rollup-plugin-ts");
const multiEntry = require("rollup-plugin-multi-entry");
const builtins = require('builtin-modules')

const pjson = require('./package.json');


const now = new Date(Date.now());

function config(pjson) {
  return {
    rollup(config, opts) {
      const { plugins } = config;

      // swap out rollup-plugin-typescript2
      config.plugins = plugins.map(p => {
        if (p && p.name === "rpt2") {
          return ts({
            tsconfig: tsconfig => {
              return {
                ...tsconfig,
                target: "ESNext",
                sourceMap: true,
                declaration: true
              };
            },
            transpiler: "babel"
          });
        }
        return p;
      });
      config.plugins.shift(multiEntry());
      config.plugins.push(
        visualizer({
          filename: `${pjson.name}.stats.html`,
          title: `${pjson.name} Rollup Report (${now.toDateString()})`,
          sourcemap: true
        })
      );
      // console.log('config.watch', config.watch)
      // config.external = builtins;

      // config.watch = {
      //   clearScreen: false
      // }


      return { ...config };
    }
  };
}

module.exports = {
  ...config(pjson),
};