// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../dist/pascua.js":[function(require,module,exports) {
var define;
(function (a, b) {
  if ("function" == typeof define && define.amd) define(["exports"], b);else if ("undefined" != typeof exports) b(exports);else {
    var c = {
      exports: {}
    };
    b(c.exports), a.pascua = c.exports;
  }
})(this, function (a) {
  "use strict";

  function b(a) {
    var b = Number.parseInt(a, 10);
    if (!Number.isNaN(b) && 1983 < b) return b;
    throw new Error("Invalid year. Should be an integer > 1983");
  }

  function c(a) {
    return "[object Date]" === Object.prototype.toString.call(a) && b(a.getFullYear());
  }

  function d(a) {
    var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "-05:00",
        c = a.getFullYear(),
        d = a.getMonth() + 1,
        e = a.getDate(),
        f = 10 > d ? "0".concat(d) : d,
        g = 10 > e ? "0".concat(e) : e;
    return "".concat(c, "-").concat(f, "-").concat(g, "T00:00:00.000").concat(b);
  }

  function e(a, b, c) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : "-05:00",
        e = 10 > b ? "0".concat(b) : b,
        f = 10 > c ? "0".concat(c) : c;
    return new Date("".concat(a, "-").concat(e, "-").concat(f, "T00:00:00.000").concat(d));
  }

  function f(a, b) {
    var c = new Date(a.getTime());
    return c.setDate(c.getDate() + b), c;
  }

  function g(a, b) {
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth();
  }

  function h(a, b) {
    var c = new Date(a.getTime());
    return c.setDate(a.getDate() + (7 + b - a.getDay()) % 7), c;
  }

  function j(a) {
    var b = Math.floor,
        c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-05:00",
        d = a % 19,
        f = b(a / 100),
        g = a % 100,
        h = b(f / 4),
        i = b((f + 8) / 25),
        j = b((f - i + 1) / 3),
        k = (19 * d + f - h - j + 15) % 30,
        l = b(g / 4),
        m = (32 + 2 * (f % 4) + 2 * l - k - g % 4) % 7,
        n = b((d + 11 * k + 22 * m) / 451),
        o = k + m - 7 * n + 114,
        p = b(o / 31),
        q = e(a, p, 1 + o % 31, c);
    return q;
  }

  Object.defineProperty(a, "__esModule", {
    value: !0
  }), a.getHoliday = function () {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : new Date(),
        b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "-05:00";
    if (!c(a)) throw new Error("Invalid date.");

    for (var d = a.getFullYear(), l = 0; l < k.length; l += 1) {
      if (1 === k[l].type) {
        var q = e(d, k[l].month, k[l].day, b);
        if (g(a, q)) return k[l].name;
      }

      if (2 === k[l].type) {
        var m = e(d, k[l].month, k[l].day, b),
            n = h(m, 1);
        if (g(a, n)) return k[l].name;
      }

      if (3 === k[l].type) {
        var o = j(d, b),
            p = f(o, k[l].offset);
        if (g(a, p)) return k[l].name;
      }
    }

    return "";
  }, a.getAllHolidays = function () {
    for (var a, c = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : new Date().getFullYear(), g = b(c), l = [], m = 0; m < k.length; m += 1) {
      a = void 0, 1 === k[m].type && (a = e(g, k[m].month, k[m].day)), 2 === k[m].type && (a = h(e(g, k[m].month, k[m].day), 1)), 3 === k[m].type && (a = f(j(g), k[m].offset)), l.push({
        date: d(a),
        type: k[m].type,
        name: k[m].name
      });
    }

    return l;
  };
  var k = [{
    type: 1,
    name: "A\xF1o Nuevo",
    day: 1,
    month: 1
  }, {
    type: 1,
    name: "D\xEDa del Trabajo",
    day: 1,
    month: 5
  }, {
    type: 1,
    name: "Grito de la Independencia",
    day: 20,
    month: 7
  }, {
    type: 1,
    name: "Batalla de Boyac\xE1",
    day: 7,
    month: 8
  }, {
    type: 1,
    name: "Inmaculada Concepci\xF3n",
    day: 8,
    month: 12
  }, {
    type: 1,
    name: "Navidad",
    day: 25,
    month: 12
  }, {
    type: 2,
    name: "Reyes Magos",
    day: 6,
    month: 1
  }, {
    type: 2,
    name: "San Jos\xE9",
    day: 19,
    month: 3
  }, {
    type: 2,
    name: "San Pedro y San Pablo",
    day: 29,
    month: 6
  }, {
    type: 2,
    name: "Asunci\xF3n de la Virgen",
    day: 15,
    month: 8
  }, {
    type: 2,
    name: "D\xEDa de la Raza",
    day: 12,
    month: 10
  }, {
    type: 2,
    name: "Todos los Santos",
    day: 1,
    month: 11
  }, {
    type: 2,
    name: "Independencia de Cartagena",
    day: 11,
    month: 11
  }, {
    type: 3,
    name: "Jueves Santo",
    offset: -3
  }, {
    type: 3,
    name: "Viernes Santo",
    offset: -2
  }, {
    type: 3,
    name: "Ascensi\xF3n de Jes\xFAs",
    offset: 43
  }, {
    type: 3,
    name: "Corpus Christi",
    offset: 64
  }, {
    type: 3,
    name: "Sagrado Coraz\xF3n de Jes\xFAs",
    offset: 71
  }];
});
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _pascua = require("../dist/pascua");

(function () {
  // el año actual sobre el que se va a cargar la página
  var year = new Date().getFullYear(); // el contenedor en donde vamos a incrustar la lista desplegable
  // con los años disponibles

  var yearsDiv = document.getElementById("years"); // creamos la lista desplegable en donde vamos a cargar los
  // año a partir de 1984 hasta cinco años pasado el año actual

  var selectList = document.createElement("select");
  selectList.id = "pascuaYears";
  yearsDiv.appendChild(selectList); // agregramos las opciones a la lista desplegable, desde 1984
  // hasta cinco años pasado el años actual y dejamos seleccionado
  // el año actual.

  for (var i = 1984; i <= year + 5; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;

    if (i === year) {
      option.selected = true;
    }

    selectList.appendChild(option);
  }

  function loadHolidays() {
    // obtenemos todos los festivos para el año deseado y los ordenamos
    // de menor a mayor por fecha
    var holidays = (0, _pascua.getAllHolidays)(selectList.value).sort(function (a, b) {
      return a.date.localeCompare(b.date);
    }); // opciones de formato para la fecha

    var dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var dateFormat = new Intl.DateTimeFormat("es", dateOptions); // la fecha actual para contrastar si un festivo ya pasó aún no ha pasado

    var date = new Date(); // la tabla en donde vamos a insertar los festivos para el año seleccionado

    var table = document.getElementById("festivos-colombia"); // limpiamos el contenido de la tabla antes de insertar los resultados.

    table.innerHTML = ""; // recorremos cada uno de los festivos obtenidos para generar una columna
    // con la información de cada festivo

    for (var i = 0; i < holidays.length; i++) {
      // creamos un fecha de JS para poder realizar los cálculos y conversiones
      var holidayDate = new Date(holidays[i].date); // agregamos una nueva fila a la tabla

      var row = table.insertRow(); // agregamos una nueva celda a la fila que acabamos de crear

      var festivoName = row.insertCell(0); // damos el formato de acuerdo a lo que deseamos

      festivoName.classList.add("has-text-centered");

      if (holidayDate <= date) {
        if (date.toISOString() === holidayDate.toISOString()) {
          festivoName.classList.add("is-selected");
        } else {
          festivoName.classList.add("has-text-grey-light");
        }
      }

      festivoName.innerHTML = "<p class='is-size-3'>" + holidays[i].name + "</p><p class='is-size-6'>" + dateFormat.format(holidayDate) + "</p>";
    }
  }

  loadHolidays();
  selectList.addEventListener("change", loadHolidays);
})();
},{"../dist/pascua":"../dist/pascua.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52503" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/examples.e31bb0bc.map