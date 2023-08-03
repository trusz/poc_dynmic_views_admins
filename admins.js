(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".admin-container ul{list-style:none;display:flex;gap:1rem;padding:0;margin:0}.admin-card{display:flex;flex-wrap:wrap;width:15rem;height:12rem;padding:1rem;background-color:#393939;outline:2px solid rgba(0,0,0,0);outline-offset:-2px;gap:2rem;flex-direction:column;cursor:pointer}:root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function Dd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function zd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ys = { exports: {} }, co = {}, Xs = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), Md = Symbol.for("react.portal"), Td = Symbol.for("react.fragment"), Od = Symbol.for("react.strict_mode"), Fd = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), Ud = Symbol.for("react.context"), Id = Symbol.for("react.forward_ref"), Ad = Symbol.for("react.suspense"), Bd = Symbol.for("react.memo"), $d = Symbol.for("react.lazy"), Sa = Symbol.iterator;
function Vd(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Js = Object.assign, Zs = {};
function tr(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Gs;
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {
}
qs.prototype = tr.prototype;
function fu(e, t, n) {
  this.props = e, this.context = t, this.refs = Zs, this.updater = n || Gs;
}
var du = fu.prototype = new qs();
du.constructor = fu;
Js(du, tr.prototype);
du.isPureReactComponent = !0;
var ka = Array.isArray, bs = Object.prototype.hasOwnProperty, pu = { current: null }, ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function tc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      bs.call(t, r) && !ec.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++)
      a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: el, type: e, key: o, ref: i, props: l, _owner: pu.current };
}
function Wd(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function Hd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ea = /\/+/g;
function Ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Hd("" + e.key) : t.toString(36);
}
function Pl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case el:
          case Md:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Ao(i, 0) : r, ka(l) ? (n = "", e != null && (n = e.replace(Ea, "$&/") + "/"), Pl(l, t, n, "", function(s) {
      return s;
    })) : l != null && (hu(l) && (l = Wd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ea, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ka(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Ao(o, u);
      i += Pl(o, t, n, a, l);
    }
  else if (a = Vd(e), typeof a == "function")
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, a = r + Ao(o, u++), i += Pl(o, t, n, a, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sl(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Pl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Qd(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var De = { current: null }, Ll = { transition: null }, Kd = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Ll, ReactCurrentOwner: pu };
V.Children = { map: sl, forEach: function(e, t, n) {
  sl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!hu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = tr;
V.Fragment = Td;
V.Profiler = Fd;
V.PureComponent = fu;
V.StrictMode = Od;
V.Suspense = Ad;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kd;
V.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Js({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = pu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (a in t)
      bs.call(t, a) && !ec.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++)
      u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: el, type: e.type, key: l, ref: o, props: r, _owner: i };
};
V.createContext = function(e) {
  return e = { $$typeof: Ud, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jd, _context: e }, e.Consumer = e;
};
V.createElement = tc;
V.createFactory = function(e) {
  var t = tc.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: Id, render: e };
};
V.isValidElement = hu;
V.lazy = function(e) {
  return { $$typeof: $d, _payload: { _status: -1, _result: e }, _init: Qd };
};
V.memo = function(e, t) {
  return { $$typeof: Bd, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Ll.transition;
  Ll.transition = {};
  try {
    e();
  } finally {
    Ll.transition = t;
  }
};
V.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
V.useContext = function(e) {
  return De.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
V.useId = function() {
  return De.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return De.current.useRef(e);
};
V.useState = function(e) {
  return De.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return De.current.useTransition();
};
V.version = "18.2.0";
Xs.exports = V;
var N = Xs.exports;
const mu = /* @__PURE__ */ zd(N), Yd = /* @__PURE__ */ Dd({
  __proto__: null,
  default: mu
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd = N, Gd = Symbol.for("react.element"), Jd = Symbol.for("react.fragment"), Zd = Object.prototype.hasOwnProperty, qd = Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Zd.call(t, r) && !bd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Gd, type: e, key: o, ref: i, props: l, _owner: qd.current };
}
co.Fragment = Jd;
co.jsx = nc;
co.jsxs = nc;
Ys.exports = co;
var Me = Ys.exports, pi = {}, rc = { exports: {} }, We = {}, lc = { exports: {} }, oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(L, F) {
    var B = L.length;
    L.push(F);
    e:
      for (; 0 < B; ) {
        var ne = B - 1 >>> 1, se = L[ne];
        if (0 < l(se, F))
          L[ne] = F, L[B] = se, B = ne;
        else
          break e;
      }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0)
      return null;
    var F = L[0], B = L.pop();
    if (B !== F) {
      L[0] = B;
      e:
        for (var ne = 0, se = L.length, En = se >>> 1; ne < En; ) {
          var G = 2 * (ne + 1) - 1, mt = L[G], st = G + 1, xn = L[st];
          if (0 > l(mt, B))
            st < se && 0 > l(xn, mt) ? (L[ne] = xn, L[st] = B, ne = st) : (L[ne] = mt, L[G] = B, ne = G);
          else if (st < se && 0 > l(xn, B))
            L[ne] = xn, L[st] = B, ne = st;
          else
            break e;
        }
    }
    return F;
  }
  function l(L, F) {
    var B = L.sortIndex - F.sortIndex;
    return B !== 0 ? B : L.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var a = [], s = [], p = 1, v = null, m = 3, k = !1, w = !1, S = !1, P = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(L) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null)
        r(s);
      else if (F.startTime <= L)
        r(s), F.sortIndex = F.expirationTime, t(a, F);
      else
        break;
      F = n(s);
    }
  }
  function f(L) {
    if (S = !1, h(L), !w)
      if (n(a) !== null)
        w = !0, Ie(x);
      else {
        var F = n(s);
        F !== null && at(f, F.startTime - L);
      }
  }
  function x(L, F) {
    w = !1, S && (S = !1, d(z), z = -1), k = !0;
    var B = m;
    try {
      for (h(F), v = n(a); v !== null && (!(v.expirationTime > F) || L && !ve()); ) {
        var ne = v.callback;
        if (typeof ne == "function") {
          v.callback = null, m = v.priorityLevel;
          var se = ne(v.expirationTime <= F);
          F = e.unstable_now(), typeof se == "function" ? v.callback = se : v === n(a) && r(a), h(F);
        } else
          r(a);
        v = n(a);
      }
      if (v !== null)
        var En = !0;
      else {
        var G = n(s);
        G !== null && at(f, G.startTime - F), En = !1;
      }
      return En;
    } finally {
      v = null, m = B, k = !1;
    }
  }
  var _ = !1, R = null, z = -1, W = 5, j = -1;
  function ve() {
    return !(e.unstable_now() - j < W);
  }
  function X() {
    if (R !== null) {
      var L = e.unstable_now();
      j = L;
      var F = !0;
      try {
        F = R(!0, L);
      } finally {
        F ? ut() : (_ = !1, R = null);
      }
    } else
      _ = !1;
  }
  var ut;
  if (typeof c == "function")
    ut = function() {
      c(X);
    };
  else if (typeof MessageChannel < "u") {
    var Dt = new MessageChannel(), zt = Dt.port2;
    Dt.port1.onmessage = X, ut = function() {
      zt.postMessage(null);
    };
  } else
    ut = function() {
      P(X, 0);
    };
  function Ie(L) {
    R = L, _ || (_ = !0, ut());
  }
  function at(L, F) {
    z = P(function() {
      L(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
    L.callback = null;
  }, e.unstable_continueExecution = function() {
    w || k || (w = !0, Ie(x));
  }, e.unstable_forceFrameRate = function(L) {
    0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < L ? Math.floor(1e3 / L) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(L) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = m;
    }
    var B = m;
    m = F;
    try {
      return L();
    } finally {
      m = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(L, F) {
    switch (L) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        L = 3;
    }
    var B = m;
    m = L;
    try {
      return F();
    } finally {
      m = B;
    }
  }, e.unstable_scheduleCallback = function(L, F, B) {
    var ne = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ne + B : ne) : B = ne, L) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = B + se, L = { id: p++, callback: F, priorityLevel: L, startTime: B, expirationTime: se, sortIndex: -1 }, B > ne ? (L.sortIndex = B, t(s, L), n(a) === null && L === n(s) && (S ? (d(z), z = -1) : S = !0, at(f, B - ne))) : (L.sortIndex = se, t(a, L), w || k || (w = !0, Ie(x))), L;
  }, e.unstable_shouldYield = ve, e.unstable_wrapCallback = function(L) {
    var F = m;
    return function() {
      var B = m;
      m = F;
      try {
        return L.apply(this, arguments);
      } finally {
        m = B;
      }
    };
  };
})(oc);
lc.exports = oc;
var ep = lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ic = N, Ve = ep;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var uc = /* @__PURE__ */ new Set(), Fr = {};
function wn(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++)
    uc.add(t[e]);
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hi = Object.prototype.hasOwnProperty, tp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xa = {}, Ca = {};
function np(e) {
  return hi.call(Ca, e) ? !0 : hi.call(xa, e) ? !1 : tp.test(e) ? Ca[e] = !0 : (xa[e] = !0, !1);
}
function rp(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lp(e, t, n, r) {
  if (t === null || typeof t > "u" || rp(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vu,
    yu
  );
  Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vu, yu);
  Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vu, yu);
  Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gu(e, t, n, r) {
  var l = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lp(t, n, l, r) && (n = null), r || l === null ? np(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cl = Symbol.for("react.element"), _n = Symbol.for("react.portal"), Pn = Symbol.for("react.fragment"), wu = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), ac = Symbol.for("react.provider"), sc = Symbol.for("react.context"), Su = Symbol.for("react.forward_ref"), vi = Symbol.for("react.suspense"), yi = Symbol.for("react.suspense_list"), ku = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), cc = Symbol.for("react.offscreen"), Ra = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object" ? null : (e = Ra && e[Ra] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, Bo;
function kr(e) {
  if (Bo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bo = t && t[1] || "";
    }
  return `
` + Bo + e;
}
var $o = !1;
function Vo(e, t) {
  if (!e || $o)
    return "";
  $o = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var l = s.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var a = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    $o = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function op(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, !1), e;
    case 11:
      return e = Vo(e.type.render, !1), e;
    case 1:
      return e = Vo(e.type, !0), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case _n:
      return "Portal";
    case mi:
      return "Profiler";
    case wu:
      return "StrictMode";
    case vi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sc:
        return (e.displayName || "Context") + ".Consumer";
      case ac:
        return (e._context.displayName || "Context") + ".Provider";
      case Su:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ku:
        return t = e.displayName || null, t !== null ? t : gi(e.type) || "Memo";
      case jt:
        t = e._payload, e = e._init;
        try {
          return gi(e(t));
        } catch {
        }
    }
  return null;
}
function ip(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === wu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function up(e) {
  var t = fc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = up(e));
}
function dc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = fc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Al(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pc(e, t) {
  t = t.checked, t != null && gu(e, "checked", t, !1);
}
function Si(e, t) {
  pc(e, t);
  var n = Jt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && ki(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Bn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(C(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function La(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(C(92));
      if (Er(n)) {
        if (1 < n.length)
          throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function hc(e, t) {
  var n = Jt(t.value), r = Jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? mc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var dl, vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (dl = dl || document.createElement("div"), dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function(e) {
  ap.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rr[t] = Rr[e];
  });
});
function yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rr.hasOwnProperty(e) && Rr[e] ? ("" + t).trim() : t + "px";
}
function gc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = yc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var sp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ci(e, t) {
  if (t) {
    if (sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(C(62));
  }
}
function Ri(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _i = null;
function Eu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Pi = null, $n = null, Vn = null;
function Da(e) {
  if (e = rl(e)) {
    if (typeof Pi != "function")
      throw Error(C(280));
    var t = e.stateNode;
    t && (t = vo(t), Pi(e.stateNode, e.type, t));
  }
}
function wc(e) {
  $n ? Vn ? Vn.push(e) : Vn = [e] : $n = e;
}
function Sc() {
  if ($n) {
    var e = $n, t = Vn;
    if (Vn = $n = null, Da(e), t)
      for (e = 0; e < t.length; e++)
        Da(t[e]);
  }
}
function kc(e, t) {
  return e(t);
}
function Ec() {
}
var Wo = !1;
function xc(e, t, n) {
  if (Wo)
    return e(t, n);
  Wo = !0;
  try {
    return kc(e, t, n);
  } finally {
    Wo = !1, ($n !== null || Vn !== null) && (Ec(), Sc());
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = vo(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(C(231, t, typeof n));
  return n;
}
var Li = !1;
if (Ct)
  try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      Li = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    Li = !1;
  }
function cp(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var _r = !1, Bl = null, $l = !1, Ni = null, fp = { onError: function(e) {
  _r = !0, Bl = e;
} };
function dp(e, t, n, r, l, o, i, u, a) {
  _r = !1, Bl = null, cp.apply(fp, arguments);
}
function pp(e, t, n, r, l, o, i, u, a) {
  if (dp.apply(this, arguments), _r) {
    if (_r) {
      var s = Bl;
      _r = !1, Bl = null;
    } else
      throw Error(C(198));
    $l || ($l = !0, Ni = s);
  }
}
function Sn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function za(e) {
  if (Sn(e) !== e)
    throw Error(C(188));
}
function hp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Sn(e), t === null)
      throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return za(l), e;
        if (o === r)
          return za(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(C(189));
      }
    }
    if (n.alternate !== r)
      throw Error(C(190));
  }
  if (n.tag !== 3)
    throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Rc(e) {
  return e = hp(e), e !== null ? _c(e) : null;
}
function _c(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = _c(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Pc = Ve.unstable_scheduleCallback, Ma = Ve.unstable_cancelCallback, mp = Ve.unstable_shouldYield, vp = Ve.unstable_requestPaint, ae = Ve.unstable_now, yp = Ve.unstable_getCurrentPriorityLevel, xu = Ve.unstable_ImmediatePriority, Lc = Ve.unstable_UserBlockingPriority, Vl = Ve.unstable_NormalPriority, gp = Ve.unstable_LowPriority, Nc = Ve.unstable_IdlePriority, fo = null, pt = null;
function wp(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(fo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var lt = Math.clz32 ? Math.clz32 : Ep, Sp = Math.log, kp = Math.LN2;
function Ep(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sp(e) / kp | 0) | 0;
}
var pl = 64, hl = 4194304;
function xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = xr(u) : (o &= i, o !== 0 && (r = xr(o)));
  } else
    i = n & ~l, i !== 0 ? r = xr(i) : o !== 0 && (r = xr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - lt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Cp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - lt(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & n) || u & r) && (l[i] = xp(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Di(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dc() {
  var e = pl;
  return pl <<= 1, !(pl & 4194240) && (pl = 64), e;
}
function Ho(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Rp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - lt(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Cu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var Q = 0;
function zc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mc, Ru, Tc, Oc, Fc, zi = !1, ml = [], Vt = null, Wt = null, Ht = null, Ir = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), It = [], _p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ta(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function fr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = rl(t), t !== null && Ru(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Pp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Vt = fr(Vt, e, t, n, r, l), !0;
    case "dragenter":
      return Wt = fr(Wt, e, t, n, r, l), !0;
    case "mouseover":
      return Ht = fr(Ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ir.set(o, fr(Ir.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ar.set(o, fr(Ar.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function jc(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Cc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
            Tc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _i = r, n.target.dispatchEvent(r), _i = null;
    } else
      return t = rl(n), t !== null && Ru(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Oa(e, t, n) {
  Nl(e) && n.delete(t);
}
function Lp() {
  zi = !1, Vt !== null && Nl(Vt) && (Vt = null), Wt !== null && Nl(Wt) && (Wt = null), Ht !== null && Nl(Ht) && (Ht = null), Ir.forEach(Oa), Ar.forEach(Oa);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zi || (zi = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Lp)));
}
function Br(e) {
  function t(l) {
    return dr(l, e);
  }
  if (0 < ml.length) {
    dr(ml[0], e);
    for (var n = 1; n < ml.length; n++) {
      var r = ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && dr(Vt, e), Wt !== null && dr(Wt, e), Ht !== null && dr(Ht, e), Ir.forEach(t), Ar.forEach(t), n = 0; n < It.length; n++)
    r = It[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && (n = It[0], n.blockedOn === null); )
    jc(n), n.blockedOn === null && It.shift();
}
var Wn = Lt.ReactCurrentBatchConfig, Hl = !0;
function Np(e, t, n, r) {
  var l = Q, o = Wn.transition;
  Wn.transition = null;
  try {
    Q = 1, _u(e, t, n, r);
  } finally {
    Q = l, Wn.transition = o;
  }
}
function Dp(e, t, n, r) {
  var l = Q, o = Wn.transition;
  Wn.transition = null;
  try {
    Q = 4, _u(e, t, n, r);
  } finally {
    Q = l, Wn.transition = o;
  }
}
function _u(e, t, n, r) {
  if (Hl) {
    var l = Mi(e, t, n, r);
    if (l === null)
      ei(e, t, r, Ql, n), Ta(e, r);
    else if (Pp(l, e, t, n, r))
      r.stopPropagation();
    else if (Ta(e, r), t & 4 && -1 < _p.indexOf(e)) {
      for (; l !== null; ) {
        var o = rl(l);
        if (o !== null && Mc(o), o = Mi(e, t, n, r), o === null && ei(e, t, r, Ql, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      ei(e, t, r, null, n);
  }
}
var Ql = null;
function Mi(e, t, n, r) {
  if (Ql = null, e = Eu(r), e = on(e), e !== null)
    if (t = Sn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Cc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ql = e, null;
}
function Uc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yp()) {
        case xu:
          return 1;
        case Lc:
          return 4;
        case Vl:
        case gp:
          return 16;
        case Nc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null, Pu = null, Dl = null;
function Ic() {
  if (Dl)
    return Dl;
  var e, t = Pu, n = t.length, r, l = "value" in Bt ? Bt.value : Bt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Dl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function zl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vl() {
  return !0;
}
function Fa() {
  return !1;
}
function He(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vl : Fa, this.isPropagationStopped = Fa, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vl);
  }, persist: function() {
  }, isPersistent: vl }), t;
}
var nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lu = He(nr), nl = oe({}, nr, { view: 0, detail: 0 }), zp = He(nl), Qo, Ko, pr, po = oe({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (Qo = e.screenX - pr.screenX, Ko = e.screenY - pr.screenY) : Ko = Qo = 0, pr = e), Qo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ko;
} }), ja = He(po), Mp = oe({}, po, { dataTransfer: 0 }), Tp = He(Mp), Op = oe({}, nl, { relatedTarget: 0 }), Yo = He(Op), Fp = oe({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jp = He(Fp), Up = oe({}, nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ip = He(Up), Ap = oe({}, nr, { data: 0 }), Ua = He(Ap), Bp = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, $p = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Vp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Wp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1;
}
function Nu() {
  return Wp;
}
var Hp = oe({}, nl, { key: function(e) {
  if (e.key) {
    var t = Bp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $p[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nu, charCode: function(e) {
  return e.type === "keypress" ? zl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qp = He(Hp), Kp = oe({}, po, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ia = He(Kp), Yp = oe({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nu }), Xp = He(Yp), Gp = oe({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = He(Gp), Zp = oe({}, po, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), qp = He(Zp), bp = [9, 13, 27, 32], Du = Ct && "CompositionEvent" in window, Pr = null;
Ct && "documentMode" in document && (Pr = document.documentMode);
var eh = Ct && "TextEvent" in window && !Pr, Ac = Ct && (!Du || Pr && 8 < Pr && 11 >= Pr), Aa = String.fromCharCode(32), Ba = !1;
function Bc(e, t) {
  switch (e) {
    case "keyup":
      return bp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $c(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function th(e, t) {
  switch (e) {
    case "compositionend":
      return $c(t);
    case "keypress":
      return t.which !== 32 ? null : (Ba = !0, Aa);
    case "textInput":
      return e = t.data, e === Aa && Ba ? null : e;
    default:
      return null;
  }
}
function nh(e, t) {
  if (Ln)
    return e === "compositionend" || !Du && Bc(e, t) ? (e = Ic(), Dl = Pu = Bt = null, Ln = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ac && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rh[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  wc(r), t = Kl(t, "onChange"), 0 < t.length && (n = new Lu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Lr = null, $r = null;
function lh(e) {
  bc(e, 0);
}
function ho(e) {
  var t = zn(e);
  if (dc(t))
    return e;
}
function oh(e, t) {
  if (e === "change")
    return t;
}
var Wc = !1;
if (Ct) {
  var Xo;
  if (Ct) {
    var Go = "oninput" in document;
    if (!Go) {
      var Va = document.createElement("div");
      Va.setAttribute("oninput", "return;"), Go = typeof Va.oninput == "function";
    }
    Xo = Go;
  } else
    Xo = !1;
  Wc = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Wa() {
  Lr && (Lr.detachEvent("onpropertychange", Hc), $r = Lr = null);
}
function Hc(e) {
  if (e.propertyName === "value" && ho($r)) {
    var t = [];
    Vc(t, $r, e, Eu(e)), xc(lh, t);
  }
}
function ih(e, t, n) {
  e === "focusin" ? (Wa(), Lr = t, $r = n, Lr.attachEvent("onpropertychange", Hc)) : e === "focusout" && Wa();
}
function uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ho($r);
}
function ah(e, t) {
  if (e === "click")
    return ho(t);
}
function sh(e, t) {
  if (e === "input" || e === "change")
    return ho(t);
}
function ch(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var it = typeof Object.is == "function" ? Object.is : ch;
function Vr(e, t) {
  if (it(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!hi.call(t, l) || !it(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Qa(e, t) {
  var n = Ha(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ha(n);
  }
}
function Qc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Kc() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Al(e.document);
  }
  return t;
}
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function fh(e) {
  var t = Kc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Qc(n.ownerDocument.documentElement, n)) {
    if (r !== null && zu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Qa(n, o);
        var i = Qa(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var dh = Ct && "documentMode" in document && 11 >= document.documentMode, Nn = null, Ti = null, Nr = null, Oi = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oi || Nn == null || Nn !== Al(r) || (r = Nn, "selectionStart" in r && zu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Vr(Nr, r) || (Nr = r, r = Kl(Ti, "onSelect"), 0 < r.length && (t = new Lu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Nn)));
}
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: yl("Animation", "AnimationEnd"), animationiteration: yl("Animation", "AnimationIteration"), animationstart: yl("Animation", "AnimationStart"), transitionend: yl("Transition", "TransitionEnd") }, Jo = {}, Yc = {};
Ct && (Yc = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function mo(e) {
  if (Jo[e])
    return Jo[e];
  if (!Dn[e])
    return e;
  var t = Dn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Yc)
      return Jo[e] = t[n];
  return e;
}
var Xc = mo("animationend"), Gc = mo("animationiteration"), Jc = mo("animationstart"), Zc = mo("transitionend"), qc = /* @__PURE__ */ new Map(), Ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  qc.set(e, t), wn(t, [e]);
}
for (var Zo = 0; Zo < Ya.length; Zo++) {
  var qo = Ya[Zo], ph = qo.toLowerCase(), hh = qo[0].toUpperCase() + qo.slice(1);
  qt(ph, "on" + hh);
}
qt(Xc, "onAnimationEnd");
qt(Gc, "onAnimationIteration");
qt(Jc, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(Zc, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function Xa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, pp(r, t, void 0, e), e.currentTarget = null;
}
function bc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], a = u.instance, s = u.currentTarget;
          if (u = u.listener, a !== o && l.isPropagationStopped())
            break e;
          Xa(l, u, s), o = a;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped())
            break e;
          Xa(l, u, s), o = a;
        }
    }
  }
  if ($l)
    throw e = Ni, $l = !1, Ni = null, e;
}
function q(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ef(t, e, 2, !1), n.add(r));
}
function bo(e, t, n) {
  var r = 0;
  t && (r |= 4), ef(n, e, r, t);
}
var gl = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[gl]) {
    e[gl] = !0, uc.forEach(function(n) {
      n !== "selectionchange" && (mh.has(n) || bo(n, !1, e), bo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gl] || (t[gl] = !0, bo("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var l = Np;
      break;
    case 4:
      l = Dp;
      break;
    default:
      l = _u;
  }
  n = l.bind(null, t, n, e), l = void 0, !Li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var a = i.tag;
              if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = on(u), i === null)
              return;
            if (a = i.tag, a === 5 || a === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  xc(function() {
    var s = o, p = Eu(n), v = [];
    e: {
      var m = qc.get(e);
      if (m !== void 0) {
        var k = Lu, w = e;
        switch (e) {
          case "keypress":
            if (zl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            k = Qp;
            break;
          case "focusin":
            w = "focus", k = Yo;
            break;
          case "focusout":
            w = "blur", k = Yo;
            break;
          case "beforeblur":
          case "afterblur":
            k = Yo;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = ja;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Tp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Xp;
            break;
          case Xc:
          case Gc:
          case Jc:
            k = jp;
            break;
          case Zc:
            k = Jp;
            break;
          case "scroll":
            k = zp;
            break;
          case "wheel":
            k = qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Ip;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Ia;
        }
        var S = (t & 4) !== 0, P = !S && e === "scroll", d = S ? m !== null ? m + "Capture" : null : m;
        S = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var f = h.stateNode;
          if (h.tag === 5 && f !== null && (h = f, d !== null && (f = Ur(c, d), f != null && S.push(Hr(c, f, h)))), P)
            break;
          c = c.return;
        }
        0 < S.length && (m = new k(m, w, null, n, p), v.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", m && n !== _i && (w = n.relatedTarget || n.fromElement) && (on(w) || w[Rt]))
          break e;
        if ((k || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, k ? (w = n.relatedTarget || n.toElement, k = s, w = w ? on(w) : null, w !== null && (P = Sn(w), w !== P || w.tag !== 5 && w.tag !== 6) && (w = null)) : (k = null, w = s), k !== w)) {
          if (S = ja, f = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = Ia, f = "onPointerLeave", d = "onPointerEnter", c = "pointer"), P = k == null ? m : zn(k), h = w == null ? m : zn(w), m = new S(f, c + "leave", k, n, p), m.target = P, m.relatedTarget = h, f = null, on(p) === s && (S = new S(d, c + "enter", w, n, p), S.target = h, S.relatedTarget = P, f = S), P = f, k && w)
            t: {
              for (S = k, d = w, c = 0, h = S; h; h = Cn(h))
                c++;
              for (h = 0, f = d; f; f = Cn(f))
                h++;
              for (; 0 < c - h; )
                S = Cn(S), c--;
              for (; 0 < h - c; )
                d = Cn(d), h--;
              for (; c--; ) {
                if (S === d || d !== null && S === d.alternate)
                  break t;
                S = Cn(S), d = Cn(d);
              }
              S = null;
            }
          else
            S = null;
          k !== null && Ga(v, m, k, S, !1), w !== null && P !== null && Ga(v, P, w, S, !0);
        }
      }
      e: {
        if (m = s ? zn(s) : window, k = m.nodeName && m.nodeName.toLowerCase(), k === "select" || k === "input" && m.type === "file")
          var x = oh;
        else if ($a(m))
          if (Wc)
            x = sh;
          else {
            x = uh;
            var _ = ih;
          }
        else
          (k = m.nodeName) && k.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = ah);
        if (x && (x = x(e, s))) {
          Vc(v, x, n, p);
          break e;
        }
        _ && _(e, m, s), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && ki(m, "number", m.value);
      }
      switch (_ = s ? zn(s) : window, e) {
        case "focusin":
          ($a(_) || _.contentEditable === "true") && (Nn = _, Ti = s, Nr = null);
          break;
        case "focusout":
          Nr = Ti = Nn = null;
          break;
        case "mousedown":
          Oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oi = !1, Ka(v, n, p);
          break;
        case "selectionchange":
          if (dh)
            break;
        case "keydown":
        case "keyup":
          Ka(v, n, p);
      }
      var R;
      if (Du)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Ln ? Bc(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Ac && n.locale !== "ko" && (Ln || z !== "onCompositionStart" ? z === "onCompositionEnd" && Ln && (R = Ic()) : (Bt = p, Pu = "value" in Bt ? Bt.value : Bt.textContent, Ln = !0)), _ = Kl(s, z), 0 < _.length && (z = new Ua(z, e, null, n, p), v.push({ event: z, listeners: _ }), R ? z.data = R : (R = $c(n), R !== null && (z.data = R)))), (R = eh ? th(e, n) : nh(e, n)) && (s = Kl(s, "onBeforeInput"), 0 < s.length && (p = new Ua("onBeforeInput", "beforeinput", null, n, p), v.push({ event: p, listeners: s }), p.data = R));
    }
    bc(v, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ur(e, n), o != null && r.unshift(Hr(e, o, l)), o = Ur(e, t), o != null && r.push(Hr(e, o, l))), e = e.return;
  }
  return r;
}
function Cn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ga(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, s = u.stateNode;
    if (a !== null && a === r)
      break;
    u.tag === 5 && s !== null && (u = s, l ? (a = Ur(n, o), a != null && i.unshift(Hr(n, a, u))) : l || (a = Ur(n, o), a != null && i.push(Hr(n, a, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var vh = /\r\n?/g, yh = /\u0000|\uFFFD/g;
function Ja(e) {
  return (typeof e == "string" ? e : "" + e).replace(vh, `
`).replace(yh, "");
}
function wl(e, t, n) {
  if (t = Ja(t), Ja(e) !== t && n)
    throw Error(C(425));
}
function Yl() {
}
var Fi = null, ji = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0, gh = typeof clearTimeout == "function" ? clearTimeout : void 0, Za = typeof Promise == "function" ? Promise : void 0, wh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Za < "u" ? function(e) {
  return Za.resolve(null).then(e).catch(Sh);
} : Ii;
function Sh(e) {
  setTimeout(function() {
    throw e;
  });
}
function ti(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Br(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Br(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function qa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2), dt = "__reactFiber$" + rr, Qr = "__reactProps$" + rr, Rt = "__reactContainer$" + rr, Ai = "__reactEvents$" + rr, kh = "__reactListeners$" + rr, Eh = "__reactHandles$" + rr;
function on(e) {
  var t = e[dt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rt] || n[dt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = qa(e); e !== null; ) {
          if (n = e[dt])
            return n;
          e = qa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rl(e) {
  return e = e[dt] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(C(33));
}
function vo(e) {
  return e[Qr] || null;
}
var Bi = [], Mn = -1;
function bt(e) {
  return { current: e };
}
function b(e) {
  0 > Mn || (e.current = Bi[Mn], Bi[Mn] = null, Mn--);
}
function Z(e, t) {
  Mn++, Bi[Mn] = e.current, e.current = t;
}
var Zt = {}, Pe = bt(Zt), Fe = bt(!1), dn = Zt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function Xl() {
  b(Fe), b(Pe);
}
function ba(e, t, n) {
  if (Pe.current !== Zt)
    throw Error(C(168));
  Z(Pe, t), Z(Fe, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(C(108, ip(e) || "Unknown", l));
  return oe({}, n, r);
}
function Gl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, dn = Pe.current, Z(Pe, e), Z(Fe, Fe.current), !0;
}
function es(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(C(169));
  n ? (e = tf(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, b(Fe), b(Pe), Z(Pe, e)) : b(Fe), Z(Fe, n);
}
var wt = null, yo = !1, ni = !1;
function nf(e) {
  wt === null ? wt = [e] : wt.push(e);
}
function xh(e) {
  yo = !0, nf(e);
}
function en() {
  if (!ni && wt !== null) {
    ni = !0;
    var e = 0, t = Q;
    try {
      var n = wt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      wt = null, yo = !1;
    } catch (l) {
      throw wt !== null && (wt = wt.slice(e + 1)), Pc(xu, en), l;
    } finally {
      Q = t, ni = !1;
    }
  }
  return null;
}
var Tn = [], On = 0, Jl = null, Zl = 0, Ke = [], Ye = 0, pn = null, St = 1, kt = "";
function rn(e, t) {
  Tn[On++] = Zl, Tn[On++] = Jl, Jl = e, Zl = t;
}
function rf(e, t, n) {
  Ke[Ye++] = St, Ke[Ye++] = kt, Ke[Ye++] = pn, pn = e;
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - lt(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, St = 1 << 32 - lt(t) + l | n << l | r, kt = o + e;
  } else
    St = 1 << o | n << l | r, kt = e;
}
function Mu(e) {
  e.return !== null && (rn(e, 1), rf(e, 1, 0));
}
function Tu(e) {
  for (; e === Jl; )
    Jl = Tn[--On], Tn[On] = null, Zl = Tn[--On], Tn[On] = null;
  for (; e === pn; )
    pn = Ke[--Ye], Ke[Ye] = null, kt = Ke[--Ye], Ke[Ye] = null, St = Ke[--Ye], Ke[Ye] = null;
}
var $e = null, Be = null, te = !1, rt = null;
function lf(e, t) {
  var n = Xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, Be = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, Be = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: St, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, Be = null, !0) : !1;
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (te) {
    var t = Be;
    if (t) {
      var n = t;
      if (!ts(e, t)) {
        if ($i(e))
          throw Error(C(418));
        t = Qt(n.nextSibling);
        var r = $e;
        t && ts(e, t) ? lf(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, $e = e);
      }
    } else {
      if ($i(e))
        throw Error(C(418));
      e.flags = e.flags & -4097 | 2, te = !1, $e = e;
    }
  }
}
function ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Sl(e) {
  if (e !== $e)
    return !1;
  if (!te)
    return ns(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = Be)) {
    if ($i(e))
      throw of(), Error(C(418));
    for (; t; )
      lf(e, t), t = Qt(t.nextSibling);
  }
  if (ns(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else
    Be = $e ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function of() {
  for (var e = Be; e; )
    e = Qt(e.nextSibling);
}
function Gn() {
  Be = $e = null, te = !1;
}
function Ou(e) {
  rt === null ? rt = [e] : rt.push(e);
}
var Ch = Lt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ql = bt(null), bl = null, Fn = null, Fu = null;
function ju() {
  Fu = Fn = bl = null;
}
function Uu(e) {
  var t = ql.current;
  b(ql), e._currentValue = t;
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  bl = e, Fu = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (Fu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Fn === null) {
      if (bl === null)
        throw Error(C(308));
      Fn = e, bl.dependencies = { lanes: 0, firstContext: e };
    } else
      Fn = Fn.next = e;
  return t;
}
var un = null;
function Iu(e) {
  un === null ? un = [e] : un.push(e);
}
function uf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Iu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, _t(e, r);
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ut = !1;
function Au(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function af(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, H & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, _t(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Iu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, _t(e, n);
}
function Ml(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
function rs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function eo(e, t, n, r) {
  var l = e.updateQueue;
  Ut = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, s = a.next;
    a.next = null, i === null ? o = s : i.next = s, i = a;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = s : u.next = s, p.lastBaseUpdate = a));
  }
  if (o !== null) {
    var v = l.baseState;
    i = 0, p = s = a = null, u = o;
    do {
      var m = u.lane, k = u.eventTime;
      if ((r & m) === m) {
        p !== null && (p = p.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, S = u;
          switch (m = t, k = n, S.tag) {
            case 1:
              if (w = S.payload, typeof w == "function") {
                v = w.call(k, v, m);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = S.payload, m = typeof w == "function" ? w.call(k, v, m) : w, m == null)
                break e;
              v = oe({}, v, m);
              break e;
            case 2:
              Ut = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else
        k = { eventTime: k, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (s = p = k, a = v) : p = p.next = k, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (1);
    if (p === null && (a = v), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    mn |= i, e.lanes = i, e.memoizedState = v;
  }
}
function ls(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var sf = new ic.Component().refs;
function Hi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var go = { isMounted: function(e) {
  return (e = e._reactInternals) ? Sn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), l = Xt(e), o = Et(r, l);
  o.payload = t, n != null && (o.callback = n), t = Kt(e, o, l), t !== null && (ot(t, e, l, r), Ml(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ne(), l = Xt(e), o = Et(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Kt(e, o, l), t !== null && (ot(t, e, l, r), Ml(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ne(), r = Xt(e), l = Et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Kt(e, l, r), t !== null && (ot(t, e, r, n), Ml(t, e, r));
} };
function os(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(l, o) : !0;
}
function cf(e, t, n) {
  var r = !1, l = Zt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Je(o) : (l = je(t) ? dn : Pe.current, r = t.contextTypes, o = (r = r != null) ? Xn(e, l) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = go, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function is(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && go.enqueueReplaceState(t, t.state, null);
}
function Qi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = sf, Au(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Je(o) : (o = je(t) ? dn : Pe.current, l.context = Xn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && go.enqueueReplaceState(l, l.state, null), eo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(C(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === sf && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(C(284));
    if (!n._owner)
      throw Error(C(290, e));
  }
  return e;
}
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function us(e) {
  var t = e._init;
  return t(e._payload);
}
function ff(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [c], d.flags |= 16) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function l(d, c) {
    return d = Gt(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < c ? (d.flags |= 2, c) : h) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, h, f) {
    return c === null || c.tag !== 6 ? (c = si(h, d.mode, f), c.return = d, c) : (c = l(c, h), c.return = d, c);
  }
  function a(d, c, h, f) {
    var x = h.type;
    return x === Pn ? p(d, c, h.props.children, f, h.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === jt && us(x) === c.type) ? (f = l(c, h.props), f.ref = hr(d, c, h), f.return = d, f) : (f = Il(h.type, h.key, h.props, null, d.mode, f), f.ref = hr(d, c, h), f.return = d, f);
  }
  function s(d, c, h, f) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = ci(h, d.mode, f), c.return = d, c) : (c = l(c, h.children || []), c.return = d, c);
  }
  function p(d, c, h, f, x) {
    return c === null || c.tag !== 7 ? (c = fn(h, d.mode, f, x), c.return = d, c) : (c = l(c, h), c.return = d, c);
  }
  function v(d, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = si("" + c, d.mode, h), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case cl:
          return h = Il(c.type, c.key, c.props, null, d.mode, h), h.ref = hr(d, null, c), h.return = d, h;
        case _n:
          return c = ci(c, d.mode, h), c.return = d, c;
        case jt:
          var f = c._init;
          return v(d, f(c._payload), h);
      }
      if (Er(c) || sr(c))
        return c = fn(c, d.mode, h, null), c.return = d, c;
      kl(d, c);
    }
    return null;
  }
  function m(d, c, h, f) {
    var x = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return x !== null ? null : u(d, c, "" + h, f);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case cl:
          return h.key === x ? a(d, c, h, f) : null;
        case _n:
          return h.key === x ? s(d, c, h, f) : null;
        case jt:
          return x = h._init, m(
            d,
            c,
            x(h._payload),
            f
          );
      }
      if (Er(h) || sr(h))
        return x !== null ? null : p(d, c, h, f, null);
      kl(d, h);
    }
    return null;
  }
  function k(d, c, h, f, x) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return d = d.get(h) || null, u(c, d, "" + f, x);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case cl:
          return d = d.get(f.key === null ? h : f.key) || null, a(c, d, f, x);
        case _n:
          return d = d.get(f.key === null ? h : f.key) || null, s(c, d, f, x);
        case jt:
          var _ = f._init;
          return k(d, c, h, _(f._payload), x);
      }
      if (Er(f) || sr(f))
        return d = d.get(h) || null, p(c, d, f, x, null);
      kl(c, f);
    }
    return null;
  }
  function w(d, c, h, f) {
    for (var x = null, _ = null, R = c, z = c = 0, W = null; R !== null && z < h.length; z++) {
      R.index > z ? (W = R, R = null) : W = R.sibling;
      var j = m(d, R, h[z], f);
      if (j === null) {
        R === null && (R = W);
        break;
      }
      e && R && j.alternate === null && t(d, R), c = o(j, c, z), _ === null ? x = j : _.sibling = j, _ = j, R = W;
    }
    if (z === h.length)
      return n(d, R), te && rn(d, z), x;
    if (R === null) {
      for (; z < h.length; z++)
        R = v(d, h[z], f), R !== null && (c = o(R, c, z), _ === null ? x = R : _.sibling = R, _ = R);
      return te && rn(d, z), x;
    }
    for (R = r(d, R); z < h.length; z++)
      W = k(R, d, z, h[z], f), W !== null && (e && W.alternate !== null && R.delete(W.key === null ? z : W.key), c = o(W, c, z), _ === null ? x = W : _.sibling = W, _ = W);
    return e && R.forEach(function(ve) {
      return t(d, ve);
    }), te && rn(d, z), x;
  }
  function S(d, c, h, f) {
    var x = sr(h);
    if (typeof x != "function")
      throw Error(C(150));
    if (h = x.call(h), h == null)
      throw Error(C(151));
    for (var _ = x = null, R = c, z = c = 0, W = null, j = h.next(); R !== null && !j.done; z++, j = h.next()) {
      R.index > z ? (W = R, R = null) : W = R.sibling;
      var ve = m(d, R, j.value, f);
      if (ve === null) {
        R === null && (R = W);
        break;
      }
      e && R && ve.alternate === null && t(d, R), c = o(ve, c, z), _ === null ? x = ve : _.sibling = ve, _ = ve, R = W;
    }
    if (j.done)
      return n(
        d,
        R
      ), te && rn(d, z), x;
    if (R === null) {
      for (; !j.done; z++, j = h.next())
        j = v(d, j.value, f), j !== null && (c = o(j, c, z), _ === null ? x = j : _.sibling = j, _ = j);
      return te && rn(d, z), x;
    }
    for (R = r(d, R); !j.done; z++, j = h.next())
      j = k(R, d, z, j.value, f), j !== null && (e && j.alternate !== null && R.delete(j.key === null ? z : j.key), c = o(j, c, z), _ === null ? x = j : _.sibling = j, _ = j);
    return e && R.forEach(function(X) {
      return t(d, X);
    }), te && rn(d, z), x;
  }
  function P(d, c, h, f) {
    if (typeof h == "object" && h !== null && h.type === Pn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case cl:
          e: {
            for (var x = h.key, _ = c; _ !== null; ) {
              if (_.key === x) {
                if (x = h.type, x === Pn) {
                  if (_.tag === 7) {
                    n(d, _.sibling), c = l(_, h.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === jt && us(x) === _.type) {
                  n(d, _.sibling), c = l(_, h.props), c.ref = hr(d, _, h), c.return = d, d = c;
                  break e;
                }
                n(d, _);
                break;
              } else
                t(d, _);
              _ = _.sibling;
            }
            h.type === Pn ? (c = fn(h.props.children, d.mode, f, h.key), c.return = d, d = c) : (f = Il(h.type, h.key, h.props, null, d.mode, f), f.ref = hr(d, c, h), f.return = d, d = f);
          }
          return i(d);
        case _n:
          e: {
            for (_ = h.key; c !== null; ) {
              if (c.key === _)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(d, c.sibling), c = l(c, h.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else
                t(d, c);
              c = c.sibling;
            }
            c = ci(h, d.mode, f), c.return = d, d = c;
          }
          return i(d);
        case jt:
          return _ = h._init, P(d, c, _(h._payload), f);
      }
      if (Er(h))
        return w(d, c, h, f);
      if (sr(h))
        return S(d, c, h, f);
      kl(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, h), c.return = d, d = c) : (n(d, c), c = si(h, d.mode, f), c.return = d, d = c), i(d)) : n(d, c);
  }
  return P;
}
var Jn = ff(!0), df = ff(!1), ll = {}, ht = bt(ll), Kr = bt(ll), Yr = bt(ll);
function an(e) {
  if (e === ll)
    throw Error(C(174));
  return e;
}
function Bu(e, t) {
  switch (Z(Yr, t), Z(Kr, e), Z(ht, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xi(t, e);
  }
  b(ht), Z(ht, t);
}
function Zn() {
  b(ht), b(Kr), b(Yr);
}
function pf(e) {
  an(Yr.current);
  var t = an(ht.current), n = xi(t, e.type);
  t !== n && (Z(Kr, e), Z(ht, n));
}
function $u(e) {
  Kr.current === e && (b(ht), b(Kr));
}
var re = bt(0);
function to(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ri = [];
function Vu() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var Tl = Lt.ReactCurrentDispatcher, li = Lt.ReactCurrentBatchConfig, hn = 0, le = null, he = null, ge = null, no = !1, Dr = !1, Xr = 0, Rh = 0;
function Ce() {
  throw Error(C(321));
}
function Wu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n]))
      return !1;
  return !0;
}
function Hu(e, t, n, r, l, o) {
  if (hn = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Tl.current = e === null || e.memoizedState === null ? Nh : Dh, e = n(r, l), Dr) {
    o = 0;
    do {
      if (Dr = !1, Xr = 0, 25 <= o)
        throw Error(C(301));
      o += 1, ge = he = null, t.updateQueue = null, Tl.current = zh, e = n(r, l);
    } while (Dr);
  }
  if (Tl.current = ro, t = he !== null && he.next !== null, hn = 0, ge = he = le = null, no = !1, t)
    throw Error(C(300));
  return e;
}
function Qu() {
  var e = Xr !== 0;
  return Xr = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? le.memoizedState = ge = e : ge = ge.next = e, ge;
}
function Ze() {
  if (he === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = he.next;
  var t = ge === null ? le.memoizedState : ge.next;
  if (t !== null)
    ge = t, he = e;
  else {
    if (e === null)
      throw Error(C(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ge === null ? le.memoizedState = ge = e : ge = ge.next = e;
  }
  return ge;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oi(e) {
  var t = Ze(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = he, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, a = null, s = o;
    do {
      var p = s.lane;
      if ((hn & p) === p)
        a !== null && (a = a.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
      else {
        var v = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        a === null ? (u = a = v, i = r) : a = a.next = v, le.lanes |= p, mn |= p;
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? i = r : a.next = u, it(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, le.lanes |= o, mn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ii(e) {
  var t = Ze(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    it(o, t.memoizedState) || (Oe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function hf() {
}
function mf(e, t) {
  var n = le, r = Ze(), l = t(), o = !it(r.memoizedState, l);
  if (o && (r.memoizedState = l, Oe = !0), r = r.queue, Ku(gf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, Jr(9, yf.bind(null, n, r, l, t), void 0, null), we === null)
      throw Error(C(349));
    hn & 30 || vf(n, t, l);
  }
  return l;
}
function vf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function yf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wf(t) && Sf(e);
}
function gf(e, t, n) {
  return n(function() {
    wf(t) && Sf(e);
  });
}
function wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function Sf(e) {
  var t = _t(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function as(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Lh.bind(null, le, e), [t.memoizedState, e];
}
function Jr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kf() {
  return Ze().memoizedState;
}
function Ol(e, t, n, r) {
  var l = ft();
  le.flags |= e, l.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
}
function wo(e, t, n, r) {
  var l = Ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var i = he.memoizedState;
    if (o = i.destroy, r !== null && Wu(r, i.deps)) {
      l.memoizedState = Jr(t, n, o, r);
      return;
    }
  }
  le.flags |= e, l.memoizedState = Jr(1 | t, n, o, r);
}
function ss(e, t) {
  return Ol(8390656, 8, e, t);
}
function Ku(e, t) {
  return wo(2048, 8, e, t);
}
function Ef(e, t) {
  return wo(4, 2, e, t);
}
function xf(e, t) {
  return wo(4, 4, e, t);
}
function Cf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Rf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, wo(4, 4, Cf.bind(null, t, e), n);
}
function Yu() {
}
function _f(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Pf(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lf(e, t, n) {
  return hn & 21 ? (it(n, t) || (n = Dc(), le.lanes |= n, mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n);
}
function _h(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = li.transition;
  li.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, li.transition = r;
  }
}
function Nf() {
  return Ze().memoizedState;
}
function Ph(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Df(e))
    zf(t, n);
  else if (n = uf(e, t, n, r), n !== null) {
    var l = Ne();
    ot(n, e, r, l), Mf(n, t, r);
  }
}
function Lh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Df(e))
    zf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, it(u, i)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Iu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = uf(e, t, l, r), n !== null && (l = Ne(), ot(n, e, r, l), Mf(n, t, r));
  }
}
function Df(e) {
  var t = e.alternate;
  return e === le || t !== null && t === le;
}
function zf(e, t) {
  Dr = no = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
var ro = { readContext: Je, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, Nh = { readContext: Je, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Je, useEffect: ss, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ol(
    4194308,
    4,
    Cf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ph.bind(null, le, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: as, useDebugValue: Yu, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = as(!1), t = e[0];
  return e = _h.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = le, l = ft();
  if (te) {
    if (n === void 0)
      throw Error(C(407));
    n = n();
  } else {
    if (n = t(), we === null)
      throw Error(C(349));
    hn & 30 || vf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, ss(gf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Jr(9, yf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = we.identifierPrefix;
  if (te) {
    var n = kt, r = St;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Rh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Dh = {
  readContext: Je,
  useCallback: _f,
  useContext: Je,
  useEffect: Ku,
  useImperativeHandle: Rf,
  useInsertionEffect: Ef,
  useLayoutEffect: xf,
  useMemo: Pf,
  useReducer: oi,
  useRef: kf,
  useState: function() {
    return oi(Gr);
  },
  useDebugValue: Yu,
  useDeferredValue: function(e) {
    var t = Ze();
    return Lf(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = oi(Gr)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: hf,
  useSyncExternalStore: mf,
  useId: Nf,
  unstable_isNewReconciler: !1
}, zh = { readContext: Je, useCallback: _f, useContext: Je, useEffect: Ku, useImperativeHandle: Rf, useInsertionEffect: Ef, useLayoutEffect: xf, useMemo: Pf, useReducer: ii, useRef: kf, useState: function() {
  return ii(Gr);
}, useDebugValue: Yu, useDeferredValue: function(e) {
  var t = Ze();
  return he === null ? t.memoizedState = e : Lf(t, he.memoizedState, e);
}, useTransition: function() {
  var e = ii(Gr)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: hf, useSyncExternalStore: mf, useId: Nf, unstable_isNewReconciler: !1 };
function qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += op(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Mh = typeof WeakMap == "function" ? WeakMap : Map;
function Tf(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    oo || (oo = !0, nu = r), Ki(e, t);
  }, n;
}
function Of(e, t, n) {
  n = Et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ki(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ki(e, t), typeof r != "function" && (Yt === null ? Yt = /* @__PURE__ */ new Set([this]) : Yt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Kh.bind(null, e, t, n), t.then(e, e));
}
function fs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ds(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e);
}
var Th = Lt.ReactCurrentOwner, Oe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? df(t, null, n, r) : Jn(t, e.child, n, r);
}
function ps(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Hn(t, l), r = Hu(e, t, n, r, o, l), n = Qu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (te && n && Mu(t), t.flags |= 1, Le(e, t, r, l), t.child);
}
function hs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ta(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ff(e, t, o, r, l)) : (e = Il(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Vr, n(i, r) && e.ref === t.ref)
      return Pt(e, t, l);
  }
  return t.flags |= 1, e = Gt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ff(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vr(o, r) && e.ref === t.ref)
      if (Oe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Oe = !0);
      else
        return t.lanes = e.lanes, Pt(e, t, l);
  }
  return Yi(e, t, n, r, l);
}
function jf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(Un, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Z(Un, Ae), Ae |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Z(Un, Ae), Ae |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Z(Un, Ae), Ae |= r;
  return Le(e, t, l, n), t.child;
}
function Uf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Yi(e, t, n, r, l) {
  var o = je(n) ? dn : Pe.current;
  return o = Xn(t, o), Hn(t, l), n = Hu(e, t, n, r, o, l), r = Qu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (te && r && Mu(t), t.flags |= 1, Le(e, t, n, l), t.child);
}
function ms(e, t, n, r, l) {
  if (je(n)) {
    var o = !0;
    Gl(t);
  } else
    o = !1;
  if (Hn(t, l), t.stateNode === null)
    Fl(e, t), cf(t, n, r), Qi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var a = i.context, s = n.contextType;
    typeof s == "object" && s !== null ? s = Je(s) : (s = je(n) ? dn : Pe.current, s = Xn(t, s));
    var p = n.getDerivedStateFromProps, v = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    v || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== s) && is(t, i, r, s), Ut = !1;
    var m = t.memoizedState;
    i.state = m, eo(t, r, i, l), a = t.memoizedState, u !== r || m !== a || Fe.current || Ut ? (typeof p == "function" && (Hi(t, n, p, r), a = t.memoizedState), (u = Ut || os(t, n, u, r, m, a, s)) ? (v || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = s, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, af(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : et(t.type, u), i.props = s, v = t.pendingProps, m = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Je(a) : (a = je(n) ? dn : Pe.current, a = Xn(t, a));
    var k = n.getDerivedStateFromProps;
    (p = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== v || m !== a) && is(t, i, r, a), Ut = !1, m = t.memoizedState, i.state = m, eo(t, r, i, l);
    var w = t.memoizedState;
    u !== v || m !== w || Fe.current || Ut ? (typeof k == "function" && (Hi(t, n, k, r), w = t.memoizedState), (s = Ut || os(t, n, s, r, m, w, a) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = a, r = s) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Xi(e, t, n, r, o, l);
}
function Xi(e, t, n, r, l, o) {
  Uf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && es(t, n, !1), Pt(e, t, o);
  r = t.stateNode, Th.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Jn(t, e.child, null, o), t.child = Jn(t, null, u, o)) : Le(e, t, u, o), t.memoizedState = r.state, l && es(t, n, !0), t.child;
}
function If(e) {
  var t = e.stateNode;
  t.pendingContext ? ba(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ba(e, t.context, !1), Bu(e, t.containerInfo);
}
function vs(e, t, n, r, l) {
  return Gn(), Ou(l), t.flags |= 256, Le(e, t, n, r), t.child;
}
var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ji(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Af(e, t, n) {
  var r = t.pendingProps, l = re.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Z(re, l & 1), e === null)
    return Vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Eo(i, r, 0, null), e = fn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ji(n), t.memoizedState = Gi, e) : Xu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Oh(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Gt(u, o) : (o = fn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ji(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Gi, r;
  }
  return o = e.child, e = o.sibling, r = Gt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Xu(e, t) {
  return t = Eo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && Ou(r), Jn(t, e.child, null, n), e = Xu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Oh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ui(Error(C(422))), El(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Eo({ mode: "visible", children: r.children }, l, 0, null), o = fn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Jn(t, e.child, null, i), t.child.memoizedState = Ji(i), t.memoizedState = Gi, o);
  if (!(t.mode & 1))
    return El(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(C(419)), r = ui(o, r, void 0), El(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Oe || u) {
    if (r = we, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, _t(e, l), ot(r, e, l, -1));
    }
    return ea(), r = ui(Error(C(421))), El(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Be = Qt(l.nextSibling), $e = t, te = !0, rt = null, e !== null && (Ke[Ye++] = St, Ke[Ye++] = kt, Ke[Ye++] = pn, St = e.id, kt = e.overflow, pn = t), t = Xu(t, r.children), t.flags |= 4096, t);
}
function ys(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function ai(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Bf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Le(e, t, r.children, n), r = re.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ys(e, n, t);
          else if (e.tag === 19)
            ys(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (Z(re, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && to(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ai(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && to(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ai(t, !0, n, null, o);
        break;
      case "together":
        ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), mn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fh(e, t, n) {
  switch (t.tag) {
    case 3:
      If(t), Gn();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      je(t.type) && Gl(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Z(ql, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Z(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Af(e, t, n) : (Z(re, re.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
      Z(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Bf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(re, re.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, jf(e, t, n);
  }
  return Pt(e, t, n);
}
var $f, Zi, Vf, Wf;
$f = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Zi = function() {
};
Vf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, an(ht.current);
    var o = null;
    switch (n) {
      case "input":
        l = wi(e, l), r = wi(e, r), o = [];
        break;
      case "select":
        l = oe({}, l, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ei(e, l), r = Ei(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yl);
    }
    Ci(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Fr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (u = l?.[s], r.hasOwnProperty(s) && a !== u && (a != null || u != null))
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in a)
              a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
          } else
            n || (o || (o = []), o.push(
              s,
              n
            )), n = a;
        else
          s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Fr.hasOwnProperty(s) ? (a != null && s === "onScroll" && q("scroll", e), o || u === a || (o = [])) : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Wf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function jh(e, t, n) {
  var r = t.pendingProps;
  switch (Tu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return je(t.type) && Xl(), Re(t), null;
    case 3:
      return r = t.stateNode, Zn(), b(Fe), b(Pe), Vu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (ou(rt), rt = null))), Zi(e, t), Re(t), null;
    case 5:
      $u(t);
      var l = an(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(C(166));
          return Re(t), null;
        }
        if (e = an(ht.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[dt] = t, r[Qr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cr.length; l++)
                q(Cr[l], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q(
                "error",
                r
              ), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              _a(r, o), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, q("invalid", r);
              break;
            case "textarea":
              La(r, o), q("invalid", r);
          }
          Ci(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && wl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && wl(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Fr.hasOwnProperty(i) && u != null && i === "onScroll" && q("scroll", r);
            }
          switch (n) {
            case "input":
              fl(r), Pa(r, o, !0);
              break;
            case "textarea":
              fl(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[dt] = t, e[Qr] = r, $f(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ri(n, r), n) {
              case "dialog":
                q("cancel", e), q("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++)
                  q(Cr[l], e);
                l = r;
                break;
              case "source":
                q("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  e
                ), q("load", e), l = r;
                break;
              case "details":
                q("toggle", e), l = r;
                break;
              case "input":
                _a(e, r), l = wi(e, r), q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = oe({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                La(e, r), l = Ei(e, r), q("invalid", e);
                break;
              default:
                l = r;
            }
            Ci(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style" ? gc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && vc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && jr(e, a) : typeof a == "number" && jr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fr.hasOwnProperty(o) ? a != null && o === "onScroll" && q("scroll", e) : a != null && gu(e, o, a, i));
              }
            switch (n) {
              case "input":
                fl(e), Pa(e, r, !1);
                break;
              case "textarea":
                fl(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Bn(e, !!r.multiple, o, !1) : r.defaultValue != null && Bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null)
        Wf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(C(166));
        if (n = an(Yr.current), an(ht.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (o = r.nodeValue !== n) && (e = $e, e !== null))
            switch (e.tag) {
              case 3:
                wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
      }
      return Re(t), null;
    case 13:
      if (b(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
          of(), Gn(), t.flags |= 98560, o = !1;
        else if (o = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(C(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(C(317));
            o[dt] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Re(t), o = !1;
        } else
          rt !== null && (ou(rt), rt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? me === 0 && (me = 3) : ea())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
    case 4:
      return Zn(), Zi(e, t), e === null && Wr(t.stateNode.containerInfo), Re(t), null;
    case 10:
      return Uu(t.type._context), Re(t), null;
    case 17:
      return je(t.type) && Xl(), Re(t), null;
    case 19:
      if (b(re), o = t.memoizedState, o === null)
        return Re(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          mr(o, !1);
        else {
          if (me !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = to(e), i !== null) {
                for (t.flags |= 128, mr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Z(re, re.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ae() > bn && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = to(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !te)
              return Re(t), null;
          } else
            2 * ae() - o.renderingStartTime > bn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ae(), t.sibling = null, n = re.current, Z(re, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
    case 22:
    case 23:
      return bu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Uh(e, t) {
  switch (Tu(t), t.tag) {
    case 1:
      return je(t.type) && Xl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Zn(), b(Fe), b(Pe), Vu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $u(t), null;
    case 13:
      if (b(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(C(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return b(re), null;
    case 4:
      return Zn(), null;
    case 10:
      return Uu(t.type._context), null;
    case 22:
    case 23:
      return bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xl = !1, _e = !1, Ih = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else
      n.current = null;
}
function qi(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var gs = !1;
function Ah(e, t) {
  if (Fi = Hl, e = Kc(), zu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, a = -1, s = 0, p = 0, v = e, m = null;
          t:
            for (; ; ) {
              for (var k; v !== n || l !== 0 && v.nodeType !== 3 || (u = i + l), v !== o || r !== 0 && v.nodeType !== 3 || (a = i + r), v.nodeType === 3 && (i += v.nodeValue.length), (k = v.firstChild) !== null; )
                m = v, v = k;
              for (; ; ) {
                if (v === e)
                  break t;
                if (m === n && ++s === l && (u = i), m === o && ++p === r && (a = i), (k = v.nextSibling) !== null)
                  break;
                v = m, m = v.parentNode;
              }
              v = k;
            }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ji = { focusedElem: e, selectionRange: n }, Hl = !1, D = t; D !== null; )
    if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, D = e;
    else
      for (; D !== null; ) {
        t = D;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps, P = w.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : et(t.type, S), P);
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (f) {
          ie(t, t.return, f);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, D = e;
          break;
        }
        D = t.return;
      }
  return w = gs, gs = !1, w;
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && qi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function So(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Hf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[Qr], delete t[Ai], delete t[kh], delete t[Eh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ws(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qf(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; )
      eu(e, t, n), e = e.sibling;
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; )
      tu(e, t, n), e = e.sibling;
}
var Se = null, tt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; )
    Kf(e, t, n), n = n.sibling;
}
function Kf(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(fo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      _e || jn(n, t);
    case 6:
      var r = Se, l = tt;
      Se = null, Ft(e, t, n), Se = r, tt = l, Se !== null && (tt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (tt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n), Br(e)) : ti(Se, n.stateNode));
      break;
    case 4:
      r = Se, l = tt, Se = n.stateNode.containerInfo, tt = !0, Ft(e, t, n), Se = r, tt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && qi(n, t, i), l = l.next;
        } while (l !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (!_e && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ie(n, t, u);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, Ft(e, t, n), _e = r) : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Ss(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ih()), t.forEach(function(r) {
      var l = Xh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                Se = u.stateNode, tt = !1;
                break e;
              case 3:
                Se = u.stateNode.containerInfo, tt = !0;
                break e;
              case 4:
                Se = u.stateNode.containerInfo, tt = !0;
                break e;
            }
            u = u.return;
          }
        if (Se === null)
          throw Error(C(160));
        Kf(o, i, l), Se = null, tt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (s) {
        ie(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Yf(t, e), t = t.sibling;
}
function Yf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (be(t, e), ct(e), r & 4) {
        try {
          zr(3, e, e.return), So(3, e);
        } catch (S) {
          ie(e, e.return, S);
        }
        try {
          zr(5, e, e.return);
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 1:
      be(t, e), ct(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (be(t, e), ct(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jr(l, "");
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && pc(l, o), Ri(u, i);
            var s = Ri(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i], v = a[i + 1];
              p === "style" ? gc(l, v) : p === "dangerouslySetInnerHTML" ? vc(l, v) : p === "children" ? jr(l, v) : gu(l, p, v, s);
            }
            switch (u) {
              case "input":
                Si(l, o);
                break;
              case "textarea":
                hc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null ? Bn(l, !!o.multiple, k, !1) : m !== !!o.multiple && (o.defaultValue != null ? Bn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Bn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Qr] = o;
          } catch (S) {
            ie(e, e.return, S);
          }
      }
      break;
    case 6:
      if (be(t, e), ct(e), r & 4) {
        if (e.stateNode === null)
          throw Error(C(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 3:
      if (be(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Br(t.containerInfo);
        } catch (S) {
          ie(e, e.return, S);
        }
      break;
    case 4:
      be(t, e), ct(e);
      break;
    case 13:
      be(t, e), ct(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Zu = ae())), r & 4 && Ss(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (s = _e) || p, be(t, e), _e = s) : be(t, e), ct(e), r & 8192) {
        if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !p && e.mode & 1)
          for (D = e, p = e.child; p !== null; ) {
            for (v = D = p; D !== null; ) {
              switch (m = D, k = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, m, m.return);
                  break;
                case 1:
                  jn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (S) {
                      ie(r, n, S);
                    }
                  }
                  break;
                case 5:
                  jn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Es(v);
                    continue;
                  }
              }
              k !== null ? (k.return = m, D = k) : Es(v);
            }
            p = p.sibling;
          }
        e:
          for (p = null, v = e; ; ) {
            if (v.tag === 5) {
              if (p === null) {
                p = v;
                try {
                  l = v.stateNode, s ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = v.stateNode, a = v.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = yc("display", i));
                } catch (S) {
                  ie(e, e.return, S);
                }
              }
            } else if (v.tag === 6) {
              if (p === null)
                try {
                  v.stateNode.nodeValue = s ? "" : v.memoizedProps;
                } catch (S) {
                  ie(e, e.return, S);
                }
            } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
              v.child.return = v, v = v.child;
              continue;
            }
            if (v === e)
              break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e)
                break e;
              p === v && (p = null), v = v.return;
            }
            p === v && (p = null), v.sibling.return = v.return, v = v.sibling;
          }
      }
      break;
    case 19:
      be(t, e), ct(e), r & 4 && Ss(e);
      break;
    case 21:
      break;
    default:
      be(
        t,
        e
      ), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jr(l, ""), r.flags &= -33);
          var o = ws(e);
          tu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ws(e);
          eu(e, u, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bh(e, t, n) {
  D = e, Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xl;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || _e;
        u = xl;
        var s = _e;
        if (xl = i, (_e = a) && !s)
          for (D = l; D !== null; )
            i = D, a = i.child, i.tag === 22 && i.memoizedState !== null ? xs(l) : a !== null ? (a.return = i, D = a) : xs(l);
        for (; o !== null; )
          D = o, Xf(o), o = o.sibling;
        D = l, xl = u, _e = s;
      }
      ks(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, D = o) : ks(e);
  }
}
function ks(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || So(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ls(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ls(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Br(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        _e || t.flags & 512 && bi(t);
      } catch (m) {
        ie(t, t.return, m);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function Es(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, D = n;
      break;
    }
    D = t.return;
  }
}
function xs(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, l, a);
            }
          }
          var o = t.return;
          try {
            bi(t);
          } catch (a) {
            ie(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            bi(t);
          } catch (a) {
            ie(t, i, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, D = u;
      break;
    }
    D = t.return;
  }
}
var $h = Math.ceil, lo = Lt.ReactCurrentDispatcher, Gu = Lt.ReactCurrentOwner, Ge = Lt.ReactCurrentBatchConfig, H = 0, we = null, fe = null, ke = 0, Ae = 0, Un = bt(0), me = 0, Zr = null, mn = 0, ko = 0, Ju = 0, Mr = null, Te = null, Zu = 0, bn = 1 / 0, gt = null, oo = !1, nu = null, Yt = null, Cl = !1, $t = null, io = 0, Tr = 0, ru = null, jl = -1, Ul = 0;
function Ne() {
  return H & 6 ? ae() : jl !== -1 ? jl : jl = ae();
}
function Xt(e) {
  return e.mode & 1 ? H & 2 && ke !== 0 ? ke & -ke : Ch.transition !== null ? (Ul === 0 && (Ul = Dc()), Ul) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function ot(e, t, n, r) {
  if (50 < Tr)
    throw Tr = 0, ru = null, Error(C(185));
  tl(e, n, r), (!(H & 2) || e !== we) && (e === we && (!(H & 2) && (ko |= n), me === 4 && At(e, ke)), Ue(e, r), n === 1 && H === 0 && !(t.mode & 1) && (bn = ae() + 500, yo && en()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Cp(e, t);
  var r = Wl(e, e === we ? ke : 0);
  if (r === 0)
    n !== null && Ma(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ma(n), t === 1)
      e.tag === 0 ? xh(Cs.bind(null, e)) : nf(Cs.bind(null, e)), wh(function() {
        !(H & 6) && en();
      }), n = null;
    else {
      switch (zc(r)) {
        case 1:
          n = xu;
          break;
        case 4:
          n = Lc;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = Nc;
          break;
        default:
          n = Vl;
      }
      n = nd(n, Gf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gf(e, t) {
  if (jl = -1, Ul = 0, H & 6)
    throw Error(C(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n)
    return null;
  var r = Wl(e, e === we ? ke : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = uo(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = Zf();
    (we !== e || ke !== t) && (gt = null, bn = ae() + 500, cn(e, t));
    do
      try {
        Hh();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (1);
    ju(), lo.current = o, H = l, fe !== null ? t = 0 : (we = null, ke = 0, t = me);
  }
  if (t !== 0) {
    if (t === 2 && (l = Di(e), l !== 0 && (r = l, t = lu(e, l))), t === 1)
      throw n = Zr, cn(e, 0), At(e, r), Ue(e, ae()), n;
    if (t === 6)
      At(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Vh(l) && (t = uo(e, r), t === 2 && (o = Di(e), o !== 0 && (r = o, t = lu(e, o))), t === 1))
        throw n = Zr, cn(e, 0), At(e, r), Ue(e, ae()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          ln(e, Te, gt);
          break;
        case 3:
          if (At(e, r), (r & 130023424) === r && (t = Zu + 500 - ae(), 10 < t)) {
            if (Wl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ne(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ii(ln.bind(null, e, Te, gt), t);
            break;
          }
          ln(e, Te, gt);
          break;
        case 4:
          if (At(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - lt(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $h(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ii(ln.bind(null, e, Te, gt), r);
            break;
          }
          ln(e, Te, gt);
          break;
        case 5:
          ln(e, Te, gt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ue(e, ae()), e.callbackNode === n ? Gf.bind(null, e) : null;
}
function lu(e, t) {
  var n = Mr;
  return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = uo(e, t), e !== 2 && (t = Te, Te = n, t !== null && ou(t)), e;
}
function ou(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Vh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!it(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function At(e, t) {
  for (t &= ~Ju, t &= ~ko, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Cs(e) {
  if (H & 6)
    throw Error(C(327));
  Qn();
  var t = Wl(e, 0);
  if (!(t & 1))
    return Ue(e, ae()), null;
  var n = uo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && (t = r, n = lu(e, r));
  }
  if (n === 1)
    throw n = Zr, cn(e, 0), At(e, t), Ue(e, ae()), n;
  if (n === 6)
    throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Te, gt), Ue(e, ae()), null;
}
function qu(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (bn = ae() + 500, yo && en());
  }
}
function vn(e) {
  $t !== null && $t.tag === 0 && !(H & 6) && Qn();
  var t = H;
  H |= 1;
  var n = Ge.transition, r = Q;
  try {
    if (Ge.transition = null, Q = 1, e)
      return e();
  } finally {
    Q = r, Ge.transition = n, H = t, !(H & 6) && en();
  }
}
function bu() {
  Ae = Un.current, b(Un);
}
function cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gh(n)), fe !== null)
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch (Tu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Xl();
          break;
        case 3:
          Zn(), b(Fe), b(Pe), Vu();
          break;
        case 5:
          $u(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          b(re);
          break;
        case 19:
          b(re);
          break;
        case 10:
          Uu(r.type._context);
          break;
        case 22:
        case 23:
          bu();
      }
      n = n.return;
    }
  if (we = e, fe = e = Gt(e.current, null), ke = Ae = t, me = 0, Zr = null, Ju = ko = mn = 0, Te = Mr = null, un !== null) {
    for (t = 0; t < un.length; t++)
      if (n = un[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Jf(e, t) {
  do {
    var n = fe;
    try {
      if (ju(), Tl.current = ro, no) {
        for (var r = le.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        no = !1;
      }
      if (hn = 0, ge = he = le = null, Dr = !1, Xr = 0, Gu.current = null, n === null || n.return === null) {
        me = 1, Zr = t, fe = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, a = t;
        if (t = ke, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var s = a, p = u, v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var k = fs(i);
          if (k !== null) {
            k.flags &= -257, ds(k, i, u, o, t), k.mode & 1 && cs(o, s, t), t = k, a = s;
            var w = t.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else
              w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              cs(o, s, t), ea();
              break e;
            }
            a = Error(C(426));
          }
        } else if (te && u.mode & 1) {
          var P = fs(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), ds(P, i, u, o, t), Ou(qn(a, u));
            break e;
          }
        }
        o = a = qn(a, u), me !== 4 && (me = 2), Mr === null ? Mr = [o] : Mr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Tf(o, a, t);
              rs(o, d);
              break e;
            case 1:
              u = a;
              var c = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Yt === null || !Yt.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var f = Of(o, u, t);
                rs(o, f);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      bf(n);
    } catch (x) {
      t = x, fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Zf() {
  var e = lo.current;
  return lo.current = ro, e === null ? ro : e;
}
function ea() {
  (me === 0 || me === 3 || me === 2) && (me = 4), we === null || !(mn & 268435455) && !(ko & 268435455) || At(we, ke);
}
function uo(e, t) {
  var n = H;
  H |= 2;
  var r = Zf();
  (we !== e || ke !== t) && (gt = null, cn(e, t));
  do
    try {
      Wh();
      break;
    } catch (l) {
      Jf(e, l);
    }
  while (1);
  if (ju(), H = n, lo.current = r, fe !== null)
    throw Error(C(261));
  return we = null, ke = 0, me;
}
function Wh() {
  for (; fe !== null; )
    qf(fe);
}
function Hh() {
  for (; fe !== null && !mp(); )
    qf(fe);
}
function qf(e) {
  var t = td(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? bf(e) : fe = t, Gu.current = null;
}
function bf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Uh(n, t), n !== null) {
        n.flags &= 32767, fe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        me = 6, fe = null;
        return;
      }
    } else if (n = jh(n, t, Ae), n !== null) {
      fe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function ln(e, t, n) {
  var r = Q, l = Ge.transition;
  try {
    Ge.transition = null, Q = 1, Qh(e, t, n, r);
  } finally {
    Ge.transition = l, Q = r;
  }
  return null;
}
function Qh(e, t, n, r) {
  do
    Qn();
  while ($t !== null);
  if (H & 6)
    throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Rp(e, o), e === we && (fe = we = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cl || (Cl = !0, nd(Vl, function() {
    return Qn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ge.transition, Ge.transition = null;
    var i = Q;
    Q = 1;
    var u = H;
    H |= 4, Gu.current = null, Ah(e, n), Yf(n, e), fh(ji), Hl = !!Fi, ji = Fi = null, e.current = n, Bh(n), vp(), H = u, Q = i, Ge.transition = o;
  } else
    e.current = n;
  if (Cl && (Cl = !1, $t = e, io = l), o = e.pendingLanes, o === 0 && (Yt = null), wp(n.stateNode), Ue(e, ae()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (oo)
    throw oo = !1, e = nu, nu = null, e;
  return io & 1 && e.tag !== 0 && Qn(), o = e.pendingLanes, o & 1 ? e === ru ? Tr++ : (Tr = 0, ru = e) : Tr = 0, en(), null;
}
function Qn() {
  if ($t !== null) {
    var e = zc(io), t = Ge.transition, n = Q;
    try {
      if (Ge.transition = null, Q = 16 > e ? 16 : e, $t === null)
        var r = !1;
      else {
        if (e = $t, $t = null, io = 0, H & 6)
          throw Error(C(331));
        var l = H;
        for (H |= 4, D = e.current; D !== null; ) {
          var o = D, i = o.child;
          if (D.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (D = s; D !== null; ) {
                  var p = D;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null)
                    v.return = p, D = v;
                  else
                    for (; D !== null; ) {
                      p = D;
                      var m = p.sibling, k = p.return;
                      if (Hf(p), p === s) {
                        D = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = k, D = m;
                        break;
                      }
                      D = k;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var P = S.sibling;
                    S.sibling = null, S = P;
                  } while (S !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, D = i;
          else
            e:
              for (; D !== null; ) {
                if (o = D, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  d.return = o.return, D = d;
                  break e;
                }
                D = o.return;
              }
        }
        var c = e.current;
        for (D = c; D !== null; ) {
          i = D;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null)
            h.return = i, D = h;
          else
            e:
              for (i = c; D !== null; ) {
                if (u = D, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        So(9, u);
                    }
                  } catch (x) {
                    ie(u, u.return, x);
                  }
                if (u === i) {
                  D = null;
                  break e;
                }
                var f = u.sibling;
                if (f !== null) {
                  f.return = u.return, D = f;
                  break e;
                }
                D = u.return;
              }
        }
        if (H = l, en(), pt && typeof pt.onPostCommitFiberRoot == "function")
          try {
            pt.onPostCommitFiberRoot(fo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      Q = n, Ge.transition = t;
    }
  }
  return !1;
}
function Rs(e, t, n) {
  t = qn(n, t), t = Tf(e, t, 1), e = Kt(e, t, 1), t = Ne(), e !== null && (tl(e, 1, t), Ue(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3)
    Rs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r))) {
          e = qn(n, e), e = Of(t, e, 1), t = Kt(t, e, 1), e = Ne(), t !== null && (tl(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, we === e && (ke & n) === n && (me === 4 || me === 3 && (ke & 130023424) === ke && 500 > ae() - Zu ? cn(e, 0) : Ju |= n), Ue(e, t);
}
function ed(e, t) {
  t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
  var n = Ne();
  e = _t(e, t), e !== null && (tl(e, t, n), Ue(e, n));
}
function Yh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ed(e, n);
}
function Xh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), ed(e, n);
}
var td;
td = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current)
      Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Oe = !1, Fh(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else
    Oe = !1, te && t.flags & 1048576 && rf(t, Zl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fl(e, t), e = t.pendingProps;
      var l = Xn(t, Pe.current);
      Hn(t, n), l = Hu(null, t, r, e, l, n);
      var o = Qu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (o = !0, Gl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Au(t), l.updater = go, t.stateNode = l, l._reactInternals = t, Qi(t, r, e, n), t = Xi(null, t, r, !0, o, n)) : (t.tag = 0, te && o && Mu(t), Le(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Jh(r), e = et(r, e), l) {
          case 0:
            t = Yi(null, t, r, e, n);
            break e;
          case 1:
            t = ms(null, t, r, e, n);
            break e;
          case 11:
            t = ps(null, t, r, e, n);
            break e;
          case 14:
            t = hs(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : et(r, l), Yi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : et(r, l), ms(e, t, r, l, n);
    case 3:
      e: {
        if (If(t), e === null)
          throw Error(C(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, af(e, t), eo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = qn(Error(C(423)), t), t = vs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = qn(Error(C(424)), t), t = vs(e, t, r, n, l);
            break e;
          } else
            for (Be = Qt(t.stateNode.containerInfo.firstChild), $e = t, te = !0, rt = null, n = df(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === l) {
            t = Pt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pf(t), e === null && Vi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ui(r, l) ? i = null : o !== null && Ui(r, o) && (t.flags |= 32), Uf(e, t), Le(e, t, i, n), t.child;
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return Af(e, t, n);
    case 4:
      return Bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : et(r, l), ps(e, t, r, l, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, Z(ql, r._currentValue), r._currentValue = i, o !== null)
          if (it(o.value, i)) {
            if (o.children === l.children && !Fe.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      a = Et(-1, n & -n), a.tag = 2;
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null ? a.next = a : (a.next = p.next, p.next = a), s.pending = a;
                      }
                    }
                    o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Wi(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(C(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Wi(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Le(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Hn(t, n), l = Je(l), r = r(l), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = et(r, t.pendingProps), l = et(r.type, l), hs(e, t, r, l, n);
    case 15:
      return Ff(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : et(r, l), Fl(e, t), t.tag = 1, je(r) ? (e = !0, Gl(t)) : e = !1, Hn(t, n), cf(t, r, l), Qi(t, r, l, n), Xi(null, t, r, !0, e, n);
    case 19:
      return Bf(e, t, n);
    case 22:
      return jf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function nd(e, t) {
  return Pc(e, t);
}
function Gh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Xe(e, t, n, r) {
  return new Gh(e, t, n, r);
}
function ta(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jh(e) {
  if (typeof e == "function")
    return ta(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Su)
      return 11;
    if (e === ku)
      return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Il(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    ta(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case Pn:
          return fn(n.children, l, o, t);
        case wu:
          i = 8, l |= 8;
          break;
        case mi:
          return e = Xe(12, n, t, l | 2), e.elementType = mi, e.lanes = o, e;
        case vi:
          return e = Xe(13, n, t, l), e.elementType = vi, e.lanes = o, e;
        case yi:
          return e = Xe(19, n, t, l), e.elementType = yi, e.lanes = o, e;
        case cc:
          return Eo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ac:
                i = 10;
                break e;
              case sc:
                i = 9;
                break e;
              case Su:
                i = 11;
                break e;
              case ku:
                i = 14;
                break e;
              case jt:
                i = 16, r = null;
                break e;
            }
          throw Error(C(130, e == null ? e : typeof e, ""));
      }
  return t = Xe(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function fn(e, t, n, r) {
  return e = Xe(7, e, r, t), e.lanes = n, e;
}
function Eo(e, t, n, r) {
  return e = Xe(22, e, r, t), e.elementType = cc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Xe(6, e, null, t), e.lanes = n, e;
}
function ci(e, t, n) {
  return t = Xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Zh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function na(e, t, n, r, l, o, i, u, a) {
  return e = new Zh(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Au(o), e;
}
function qh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: _n, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function rd(e) {
  if (!e)
    return Zt;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1)
      throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n))
      return tf(e, n, t);
  }
  return t;
}
function ld(e, t, n, r, l, o, i, u, a) {
  return e = na(n, r, !0, e, l, o, i, u, a), e.context = rd(null), n = e.current, r = Ne(), l = Xt(n), o = Et(r, l), o.callback = t ?? null, Kt(n, o, l), e.current.lanes = l, tl(e, l, r), Ue(e, r), e;
}
function xo(e, t, n, r) {
  var l = t.current, o = Ne(), i = Xt(l);
  return n = rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(l, t, i), e !== null && (ot(e, l, i, o), Ml(e, l, i)), i;
}
function ao(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _s(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  _s(e, t), (e = e.alternate) && _s(e, t);
}
function bh() {
  return null;
}
var od = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function la(e) {
  this._internalRoot = e;
}
Co.prototype.render = la.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(C(409));
  xo(e, t, null, null);
};
Co.prototype.unmount = la.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vn(function() {
      xo(null, e, null, null);
    }), t[Rt] = null;
  }
};
function Co(e) {
  this._internalRoot = e;
}
Co.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Oc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++)
      ;
    It.splice(n, 0, e), n === 0 && jc(e);
  }
};
function oa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ro(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ps() {
}
function em(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var s = ao(i);
        o.call(s);
      };
    }
    var i = ld(t, r, e, 0, null, !1, !1, "", Ps);
    return e._reactRootContainer = i, e[Rt] = i.current, Wr(e.nodeType === 8 ? e.parentNode : e), vn(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var s = ao(a);
      u.call(s);
    };
  }
  var a = na(e, 0, !1, null, null, !1, !1, "", Ps);
  return e._reactRootContainer = a, e[Rt] = a.current, Wr(e.nodeType === 8 ? e.parentNode : e), vn(function() {
    xo(t, a, n, r);
  }), a;
}
function _o(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ao(i);
        u.call(a);
      };
    }
    xo(t, i, e, l);
  } else
    i = em(n, t, e, l, r);
  return ao(i);
}
Mc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 && (Cu(t, n | 1), Ue(t, ae()), !(H & 6) && (bn = ae() + 500, en()));
      }
      break;
    case 13:
      vn(function() {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Ne();
          ot(r, e, 1, l);
        }
      }), ra(e, 1);
  }
};
Ru = function(e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ne();
      ot(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
Tc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = _t(e, t);
    if (n !== null) {
      var r = Ne();
      ot(n, e, t, r);
    }
    ra(e, t);
  }
};
Oc = function() {
  return Q;
};
Fc = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
Pi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Si(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = vo(r);
            if (!l)
              throw Error(C(90));
            dc(r), Si(r, l);
          }
        }
      }
      break;
    case "textarea":
      hc(e, n);
      break;
    case "select":
      t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
  }
};
kc = qu;
Ec = vn;
var tm = { usingClientEntryPoint: !1, Events: [rl, zn, vo, wc, Sc, qu] }, vr = { findFiberByHostInstance: on, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, nm = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vr.findFiberByHostInstance || bh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rl.isDisabled && Rl.supportsFiber)
    try {
      fo = Rl.inject(nm), pt = Rl;
    } catch {
    }
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
We.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!oa(t))
    throw Error(C(200));
  return qh(e, t, null, n);
};
We.createRoot = function(e, t) {
  if (!oa(e))
    throw Error(C(299));
  var n = !1, r = "", l = od;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = na(e, 1, !1, null, null, n, !1, r, l), e[Rt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new la(t);
};
We.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = Rc(t), e = e === null ? null : e.stateNode, e;
};
We.flushSync = function(e) {
  return vn(e);
};
We.hydrate = function(e, t, n) {
  if (!Ro(t))
    throw Error(C(200));
  return _o(null, e, t, !0, n);
};
We.hydrateRoot = function(e, t, n) {
  if (!oa(e))
    throw Error(C(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = od;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, l, !1, o, i), e[Rt] = t.current, Wr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Co(t);
};
We.render = function(e, t, n) {
  if (!Ro(t))
    throw Error(C(200));
  return _o(null, e, t, !1, n);
};
We.unmountComponentAtNode = function(e) {
  if (!Ro(e))
    throw Error(C(40));
  return e._reactRootContainer ? (vn(function() {
    _o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rt] = null;
    });
  }), !0) : !1;
};
We.unstable_batchedUpdates = qu;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ro(n))
    throw Error(C(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(C(38));
  return _o(e, t, n, !1, r);
};
We.version = "18.2.0-next-9e3b772b8-20220608";
function id() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id);
    } catch (e) {
      console.error(e);
    }
}
id(), rc.exports = We;
var rm = rc.exports, Ls = rm;
pi.createRoot = Ls.createRoot, pi.hydrateRoot = Ls.hydrateRoot;
function lm(e) {
  const { employee: t } = e;
  return /* @__PURE__ */ Me.jsx("div", { className: "admin-card", children: /* @__PURE__ */ Me.jsx("h3", { children: t.name }) });
}
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ee.apply(this, arguments);
}
var ce;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ce || (ce = {}));
const Ns = "popstate";
function om(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let {
      pathname: o,
      search: i,
      hash: u
    } = r.location;
    return qr(
      "",
      {
        pathname: o,
        search: i,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : yn(l);
  }
  return um(t, n, null, e);
}
function $(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function er(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function im() {
  return Math.random().toString(36).substr(2, 8);
}
function Ds(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function qr(e, t, n, r) {
  return n === void 0 && (n = null), ee({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Nt(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || im()
  });
}
function yn(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Nt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function um(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: l = document.defaultView,
    v5Compat: o = !1
  } = r, i = l.history, u = ce.Pop, a = null, s = p();
  s == null && (s = 0, i.replaceState(ee({}, i.state, {
    idx: s
  }), ""));
  function p() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function v() {
    u = ce.Pop;
    let P = p(), d = P == null ? null : P - s;
    s = P, a && a({
      action: u,
      location: S.location,
      delta: d
    });
  }
  function m(P, d) {
    u = ce.Push;
    let c = qr(S.location, P, d);
    n && n(c, P), s = p() + 1;
    let h = Ds(c, s), f = S.createHref(c);
    try {
      i.pushState(h, "", f);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError")
        throw x;
      l.location.assign(f);
    }
    o && a && a({
      action: u,
      location: S.location,
      delta: 1
    });
  }
  function k(P, d) {
    u = ce.Replace;
    let c = qr(S.location, P, d);
    n && n(c, P), s = p();
    let h = Ds(c, s), f = S.createHref(c);
    i.replaceState(h, "", f), o && a && a({
      action: u,
      location: S.location,
      delta: 0
    });
  }
  function w(P) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href, c = typeof P == "string" ? P : yn(P);
    return $(d, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, d);
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(P) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(Ns, v), a = P, () => {
        l.removeEventListener(Ns, v), a = null;
      };
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: w,
    encodeLocation(P) {
      let d = w(P);
      return {
        pathname: d.pathname,
        search: d.search,
        hash: d.hash
      };
    },
    push: m,
    replace: k,
    go(P) {
      return i.go(P);
    }
  };
  return S;
}
var pe;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(pe || (pe = {}));
const am = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function sm(e) {
  return e.index === !0;
}
function iu(e, t, n, r) {
  return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((l, o) => {
    let i = [...n, o], u = typeof l.id == "string" ? l.id : i.join("-");
    if ($(l.index !== !0 || !l.children, "Cannot specify children on an index route"), $(!r[u], 'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`), sm(l)) {
      let a = ee({}, l, t(l), {
        id: u
      });
      return r[u] = a, a;
    } else {
      let a = ee({}, l, t(l), {
        id: u,
        children: void 0
      });
      return r[u] = a, l.children && (a.children = iu(l.children, t, i, r)), a;
    }
  });
}
function In(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Nt(t) : t, l = lr(r.pathname || "/", n);
  if (l == null)
    return null;
  let o = ud(e);
  cm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u)
    i = wm(
      o[u],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Em(l)
    );
  return i;
}
function ud(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    a.relativePath.startsWith("/") && ($(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let s = xt([r, a.relativePath]), p = n.concat(a);
    o.children && o.children.length > 0 && ($(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')
    ), ud(o.children, t, p, s)), !(o.path == null && !o.index) && t.push({
      path: s,
      score: ym(s, o.index),
      routesMeta: p
    });
  };
  return e.forEach((o, i) => {
    var u;
    if (o.path === "" || !((u = o.path) != null && u.includes("?")))
      l(o, i);
    else
      for (let a of ad(o.path))
        l(o, i, a);
  }), t;
}
function ad(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return l ? [o, ""] : [o];
  let i = ad(r.join("/")), u = [];
  return u.push(...i.map((a) => a === "" ? o : [o, a].join("/"))), l && u.push(...i), u.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function cm(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : gm(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const fm = /^:\w+$/, dm = 3, pm = 2, hm = 1, mm = 10, vm = -2, zs = (e) => e === "*";
function ym(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(zs) && (r += vm), t && (r += pm), n.filter((l) => !zs(l)).reduce((l, o) => l + (fm.test(o) ? dm : o === "" ? hm : mm), r);
}
function gm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function wm(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, l = "/", o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i], a = i === n.length - 1, s = l === "/" ? t : t.slice(l.length) || "/", p = Sm({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: a
    }, s);
    if (!p)
      return null;
    Object.assign(r, p.params);
    let v = u.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: xt([l, p.pathname]),
      pathnameBase: _m(xt([l, p.pathnameBase])),
      route: v
    }), p.pathnameBase !== "/" && (l = xt([l, p.pathnameBase]));
  }
  return o;
}
function Sm(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = km(e.path, e.caseSensitive, e.end), l = t.match(n);
  if (!l)
    return null;
  let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      if (p === "*") {
        let m = u[v] || "";
        i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return s[p] = xm(u[v] || "", p), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function km(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), er(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r];
}
function Em(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return er(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function xm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return er(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function lr(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? Nt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Rm(n, t) : t,
    search: Pm(r),
    hash: Lm(l)
  };
}
function Rm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
  }), n.length > 1 ? n.join("/") : "/";
}
function fi(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Po(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function ia(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = Nt(e) : (l = ee({}, e), $(!l.pathname || !l.pathname.includes("?"), fi("?", "pathname", "search", l)), $(!l.pathname || !l.pathname.includes("#"), fi("#", "pathname", "hash", l)), $(!l.search || !l.search.includes("#"), fi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
  if (r || i == null)
    u = n;
  else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), v -= 1;
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let a = Cm(l, u), s = i && i !== "/" && i.endsWith("/"), p = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const xt = (e) => e.join("/").replace(/\/\/+/g, "/"), _m = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Pm = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Lm = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class ua {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function sd(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const cd = ["post", "put", "patch", "delete"], Nm = new Set(cd), Dm = ["get", ...cd], zm = new Set(Dm), Mm = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Tm = /* @__PURE__ */ new Set([307, 308]), di = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Om = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, yr = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, fd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fm = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
});
function jm(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u", r = !n;
  $(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let l;
  if (e.mapRouteProperties)
    l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (g) => ({
      hasErrorBoundary: y(g)
    });
  } else
    l = Fm;
  let o = {}, i = iu(e.routes, l, void 0, o), u, a = e.basename || "/", s = ee({
    v7_normalizeFormMethod: !1,
    v7_prependBasename: !1
  }, e.future), p = null, v = /* @__PURE__ */ new Set(), m = null, k = null, w = null, S = e.hydrationData != null, P = In(i, e.history.location, a), d = null;
  if (P == null) {
    let y = Qe(404, {
      pathname: e.history.location.pathname
    }), {
      matches: g,
      route: E
    } = As(i);
    P = g, d = {
      [E.id]: y
    };
  }
  let c = (
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !P.some((y) => y.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
    (!P.some((y) => y.route.loader) || e.hydrationData != null)
  ), h, f = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: P,
    initialized: c,
    navigation: di,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || d,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, x = ce.Pop, _ = !1, R, z = !1, W = !1, j = [], ve = [], X = /* @__PURE__ */ new Map(), ut = 0, Dt = -1, zt = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), B = !1;
  function ne() {
    return p = e.history.listen((y) => {
      let {
        action: g,
        location: E,
        delta: M
      } = y;
      if (B) {
        B = !1;
        return;
      }
      er(F.size === 0 || M != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let A = va({
        currentLocation: f.location,
        nextLocation: E,
        historyAction: g
      });
      if (A && M != null) {
        B = !0, e.history.go(M * -1), ul(A, {
          state: "blocked",
          location: E,
          proceed() {
            ul(A, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: E
            }), e.history.go(M);
          },
          reset() {
            let U = new Map(f.blockers);
            U.set(A, yr), G({
              blockers: U
            });
          }
        });
        return;
      }
      return Mt(g, E);
    }), f.initialized || Mt(ce.Pop, f.location), h;
  }
  function se() {
    p && p(), v.clear(), R && R.abort(), f.fetchers.forEach((y, g) => Mo(g)), f.blockers.forEach((y, g) => ma(g));
  }
  function En(y) {
    return v.add(y), () => v.delete(y);
  }
  function G(y) {
    f = ee({}, f, y), v.forEach((g) => g(f));
  }
  function mt(y, g) {
    var E, M;
    let A = f.actionData != null && f.navigation.formMethod != null && nt(f.navigation.formMethod) && f.navigation.state === "loading" && ((E = y.state) == null ? void 0 : E._isRedirect) !== !0, U;
    g.actionData ? Object.keys(g.actionData).length > 0 ? U = g.actionData : U = null : A ? U = f.actionData : U = null;
    let I = g.loaderData ? Is(f.loaderData, g.loaderData, g.matches || [], g.errors) : f.loaderData, O = f.blockers;
    O.size > 0 && (O = new Map(O), O.forEach((J, xe) => O.set(xe, yr)));
    let T = _ === !0 || f.navigation.formMethod != null && nt(f.navigation.formMethod) && ((M = y.state) == null ? void 0 : M._isRedirect) !== !0;
    u && (i = u, u = void 0), z || x === ce.Pop || (x === ce.Push ? e.history.push(y, y.state) : x === ce.Replace && e.history.replace(y, y.state)), G(ee({}, g, {
      actionData: U,
      loaderData: I,
      historyAction: x,
      location: y,
      initialized: !0,
      navigation: di,
      revalidation: "idle",
      restoreScrollPosition: ga(y, g.matches || f.matches),
      preventScrollReset: T,
      blockers: O
    })), x = ce.Pop, _ = !1, z = !1, W = !1, j = [], ve = [];
  }
  async function st(y, g) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let E = uu(f.location, f.matches, a, s.v7_prependBasename, y, g?.fromRouteId, g?.relative), {
      path: M,
      submission: A,
      error: U
    } = Ms(s.v7_normalizeFormMethod, !1, E, g), I = f.location, O = qr(f.location, M, g && g.state);
    O = ee({}, O, e.history.encodeLocation(O));
    let T = g && g.replace != null ? g.replace : void 0, J = ce.Push;
    T === !0 ? J = ce.Replace : T === !1 || A != null && nt(A.formMethod) && A.formAction === f.location.pathname + f.location.search && (J = ce.Replace);
    let xe = g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0, K = va({
      currentLocation: I,
      nextLocation: O,
      historyAction: J
    });
    if (K) {
      ul(K, {
        state: "blocked",
        location: O,
        proceed() {
          ul(K, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: O
          }), st(y, g);
        },
        reset() {
          let ue = new Map(f.blockers);
          ue.set(K, yr), G({
            blockers: ue
          });
        }
      });
      return;
    }
    return await Mt(J, O, {
      submission: A,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: U,
      preventScrollReset: xe,
      replace: g && g.replace
    });
  }
  function xn() {
    if (zo(), G({
      revalidation: "loading"
    }), f.navigation.state !== "submitting") {
      if (f.navigation.state === "idle") {
        Mt(f.historyAction, f.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      Mt(x || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation
      });
    }
  }
  async function Mt(y, g, E) {
    R && R.abort(), R = null, x = y, z = (E && E.startUninterruptedRevalidation) === !0, Pd(f.location, f.matches), _ = (E && E.preventScrollReset) === !0;
    let M = u || i, A = E && E.overrideNavigation, U = In(M, g, a);
    if (!U) {
      let ue = Qe(404, {
        pathname: g.pathname
      }), {
        matches: ye,
        route: tn
      } = As(M);
      To(), mt(g, {
        matches: ye,
        loaderData: {},
        errors: {
          [tn.id]: ue
        }
      });
      return;
    }
    if (f.initialized && !W && $m(f.location, g) && !(E && E.submission && nt(E.submission.formMethod))) {
      mt(g, {
        matches: U
      });
      return;
    }
    R = new AbortController();
    let I = wr(e.history, g, R.signal, E && E.submission), O, T;
    if (E && E.pendingError)
      T = {
        [An(U).route.id]: E.pendingError
      };
    else if (E && E.submission && nt(E.submission.formMethod)) {
      let ue = await Sd(I, g, E.submission, U, {
        replace: E.replace
      });
      if (ue.shortCircuited)
        return;
      O = ue.pendingActionData, T = ue.pendingActionError, A = _l(g, E.submission), I = new Request(I.url, {
        signal: I.signal
      });
    }
    let {
      shortCircuited: J,
      loaderData: xe,
      errors: K
    } = await kd(I, g, U, A, E && E.submission, E && E.fetcherSubmission, E && E.replace, O, T);
    J || (R = null, mt(g, ee({
      matches: U
    }, O ? {
      actionData: O
    } : {}, {
      loaderData: xe,
      errors: K
    })));
  }
  async function Sd(y, g, E, M, A) {
    A === void 0 && (A = {}), zo();
    let U = Km(g, E);
    G({
      navigation: U
    });
    let I, O = su(M, g);
    if (!O.route.action && !O.route.lazy)
      I = {
        type: pe.error,
        error: Qe(405, {
          method: y.method,
          pathname: g.pathname,
          routeId: O.route.id
        })
      };
    else if (I = await gr("action", y, O, M, o, l, a), y.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (Kn(I)) {
      let T;
      return A && A.replace != null ? T = A.replace : T = I.location === f.location.pathname + f.location.search, await ir(f, I, {
        submission: E,
        replace: T
      }), {
        shortCircuited: !0
      };
    }
    if (Or(I)) {
      let T = An(M, O.route.id);
      return (A && A.replace) !== !0 && (x = ce.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [T.route.id]: I.error
        }
      };
    }
    if (sn(I))
      throw Qe(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [O.route.id]: I.data
      }
    };
  }
  async function kd(y, g, E, M, A, U, I, O, T) {
    let J = M || _l(g, A), xe = A || U || Vs(J), K = u || i, [ue, ye] = Ts(e.history, f, E, xe, g, W, j, ve, at, Ie, K, a, O, T);
    if (To((Y) => !(E && E.some((qe) => qe.route.id === Y)) || ue && ue.some((qe) => qe.route.id === Y)), Dt = ++ut, ue.length === 0 && ye.length === 0) {
      let Y = pa();
      return mt(g, ee({
        matches: E,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: T || null
      }, O ? {
        actionData: O
      } : {}, Y ? {
        fetchers: new Map(f.fetchers)
      } : {})), {
        shortCircuited: !0
      };
    }
    if (!z) {
      ye.forEach((qe) => {
        let Ot = f.fetchers.get(qe.key), Io = Sr(void 0, Ot ? Ot.data : void 0);
        f.fetchers.set(qe.key, Io);
      });
      let Y = O || f.actionData;
      G(ee({
        navigation: J
      }, Y ? Object.keys(Y).length === 0 ? {
        actionData: null
      } : {
        actionData: Y
      } : {}, ye.length > 0 ? {
        fetchers: new Map(f.fetchers)
      } : {}));
    }
    ye.forEach((Y) => {
      X.has(Y.key) && Tt(Y.key), Y.controller && X.set(Y.key, Y.controller);
    });
    let tn = () => ye.forEach((Y) => Tt(Y.key));
    R && R.signal.addEventListener("abort", tn);
    let {
      results: nn,
      loaderResults: ur,
      fetcherResults: Oo
    } = await fa(f.matches, E, ue, ye, y);
    if (y.signal.aborted)
      return {
        shortCircuited: !0
      };
    R && R.signal.removeEventListener("abort", tn), ye.forEach((Y) => X.delete(Y.key));
    let vt = Bs(nn);
    if (vt) {
      if (vt.idx >= ue.length) {
        let Y = ye[vt.idx - ue.length].key;
        Ie.add(Y);
      }
      return await ir(f, vt.result, {
        replace: I
      }), {
        shortCircuited: !0
      };
    }
    let {
      loaderData: yt,
      errors: al
    } = Us(f, E, ue, ur, T, ye, Oo, L);
    L.forEach((Y, qe) => {
      Y.subscribe((Ot) => {
        (Ot || Y.done) && L.delete(qe);
      });
    });
    let Fo = pa(), jo = ha(Dt), Uo = Fo || jo || ye.length > 0;
    return ee({
      loaderData: yt,
      errors: al
    }, Uo ? {
      fetchers: new Map(f.fetchers)
    } : {});
  }
  function ca(y) {
    return f.fetchers.get(y) || Om;
  }
  function Ed(y, g, E, M) {
    if (r)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    X.has(y) && Tt(y);
    let A = u || i, U = uu(f.location, f.matches, a, s.v7_prependBasename, E, g, M?.relative), I = In(A, U, a);
    if (!I) {
      il(y, g, Qe(404, {
        pathname: U
      }));
      return;
    }
    let {
      path: O,
      submission: T,
      error: J
    } = Ms(s.v7_normalizeFormMethod, !0, U, M);
    if (J) {
      il(y, g, J);
      return;
    }
    let xe = su(I, O);
    if (_ = (M && M.preventScrollReset) === !0, T && nt(T.formMethod)) {
      xd(y, g, O, xe, I, T);
      return;
    }
    at.set(y, {
      routeId: g,
      path: O
    }), Cd(y, g, O, xe, I, T);
  }
  async function xd(y, g, E, M, A, U) {
    if (zo(), at.delete(y), !M.route.action && !M.route.lazy) {
      let de = Qe(405, {
        method: U.formMethod,
        pathname: E,
        routeId: g
      });
      il(y, g, de);
      return;
    }
    let I = f.fetchers.get(y), O = Ym(U, I);
    f.fetchers.set(y, O), G({
      fetchers: new Map(f.fetchers)
    });
    let T = new AbortController(), J = wr(e.history, E, T.signal, U);
    X.set(y, T);
    let xe = ut, K = await gr("action", J, M, A, o, l, a);
    if (J.signal.aborted) {
      X.get(y) === T && X.delete(y);
      return;
    }
    if (Kn(K))
      if (X.delete(y), Dt > xe) {
        let de = Rn(void 0);
        f.fetchers.set(y, de), G({
          fetchers: new Map(f.fetchers)
        });
        return;
      } else {
        Ie.add(y);
        let de = Sr(U);
        return f.fetchers.set(y, de), G({
          fetchers: new Map(f.fetchers)
        }), ir(f, K, {
          submission: U,
          isFetchActionRedirect: !0
        });
      }
    if (Or(K)) {
      il(y, g, K.error);
      return;
    }
    if (sn(K))
      throw Qe(400, {
        type: "defer-action"
      });
    let ue = f.navigation.location || f.location, ye = wr(e.history, ue, T.signal), tn = u || i, nn = f.navigation.state !== "idle" ? In(tn, f.navigation.location, a) : f.matches;
    $(nn, "Didn't find any matches after fetcher action");
    let ur = ++ut;
    zt.set(y, ur);
    let Oo = Sr(U, K.data);
    f.fetchers.set(y, Oo);
    let [vt, yt] = Ts(
      e.history,
      f,
      nn,
      U,
      ue,
      W,
      j,
      ve,
      at,
      Ie,
      tn,
      a,
      {
        [M.route.id]: K.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    yt.filter((de) => de.key !== y).forEach((de) => {
      let ar = de.key, wa = f.fetchers.get(ar), Nd = Sr(void 0, wa ? wa.data : void 0);
      f.fetchers.set(ar, Nd), X.has(ar) && Tt(ar), de.controller && X.set(ar, de.controller);
    }), G({
      fetchers: new Map(f.fetchers)
    });
    let al = () => yt.forEach((de) => Tt(de.key));
    T.signal.addEventListener("abort", al);
    let {
      results: Fo,
      loaderResults: jo,
      fetcherResults: Uo
    } = await fa(f.matches, nn, vt, yt, ye);
    if (T.signal.aborted)
      return;
    T.signal.removeEventListener("abort", al), zt.delete(y), X.delete(y), yt.forEach((de) => X.delete(de.key));
    let Y = Bs(Fo);
    if (Y) {
      if (Y.idx >= vt.length) {
        let de = yt[Y.idx - vt.length].key;
        Ie.add(de);
      }
      return ir(f, Y.result);
    }
    let {
      loaderData: qe,
      errors: Ot
    } = Us(f, f.matches, vt, jo, void 0, yt, Uo, L);
    if (f.fetchers.has(y)) {
      let de = Rn(K.data);
      f.fetchers.set(y, de);
    }
    let Io = ha(ur);
    f.navigation.state === "loading" && ur > Dt ? ($(x, "Expected pending action"), R && R.abort(), mt(f.navigation.location, {
      matches: nn,
      loaderData: qe,
      errors: Ot,
      fetchers: new Map(f.fetchers)
    })) : (G(ee({
      errors: Ot,
      loaderData: Is(f.loaderData, qe, nn, Ot)
    }, Io || yt.length > 0 ? {
      fetchers: new Map(f.fetchers)
    } : {})), W = !1);
  }
  async function Cd(y, g, E, M, A, U) {
    let I = f.fetchers.get(y), O = Sr(U, I ? I.data : void 0);
    f.fetchers.set(y, O), G({
      fetchers: new Map(f.fetchers)
    });
    let T = new AbortController(), J = wr(e.history, E, T.signal);
    X.set(y, T);
    let xe = ut, K = await gr("loader", J, M, A, o, l, a);
    if (sn(K) && (K = await hd(K, J.signal, !0) || K), X.get(y) === T && X.delete(y), J.signal.aborted)
      return;
    if (Kn(K))
      if (Dt > xe) {
        let ye = Rn(void 0);
        f.fetchers.set(y, ye), G({
          fetchers: new Map(f.fetchers)
        });
        return;
      } else {
        Ie.add(y), await ir(f, K);
        return;
      }
    if (Or(K)) {
      let ye = An(f.matches, g);
      f.fetchers.delete(y), G({
        fetchers: new Map(f.fetchers),
        errors: {
          [ye.route.id]: K.error
        }
      });
      return;
    }
    $(!sn(K), "Unhandled fetcher deferred data");
    let ue = Rn(K.data);
    f.fetchers.set(y, ue), G({
      fetchers: new Map(f.fetchers)
    });
  }
  async function ir(y, g, E) {
    let {
      submission: M,
      replace: A,
      isFetchActionRedirect: U
    } = E === void 0 ? {} : E;
    g.revalidate && (W = !0);
    let I = qr(
      y.location,
      g.location,
      // TODO: This can be removed once we get rid of useTransition in Remix v2
      ee({
        _isRedirect: !0
      }, U ? {
        _isFetchActionRedirect: !0
      } : {})
    );
    if ($(I, "Expected a location on the redirect navigation"), fd.test(g.location) && n) {
      let J = e.history.createURL(g.location), xe = lr(J.pathname, a) == null;
      if (t.location.origin !== J.origin || xe) {
        A ? t.location.replace(g.location) : t.location.assign(g.location);
        return;
      }
    }
    R = null;
    let O = A === !0 ? ce.Replace : ce.Push, T = M || Vs(y.navigation);
    if (Tm.has(g.status) && T && nt(T.formMethod))
      await Mt(O, I, {
        submission: ee({}, T, {
          formAction: g.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: _
      });
    else if (U)
      await Mt(O, I, {
        overrideNavigation: _l(I),
        fetcherSubmission: T,
        // Preserve this flag across redirects
        preventScrollReset: _
      });
    else {
      let J = _l(I, T);
      await Mt(O, I, {
        overrideNavigation: J,
        // Preserve this flag across redirects
        preventScrollReset: _
      });
    }
  }
  async function fa(y, g, E, M, A) {
    let U = await Promise.all([...E.map((T) => gr("loader", A, T, g, o, l, a)), ...M.map((T) => T.matches && T.match && T.controller ? gr("loader", wr(e.history, T.path, T.controller.signal), T.match, T.matches, o, l, a) : {
      type: pe.error,
      error: Qe(404, {
        pathname: T.path
      })
    })]), I = U.slice(0, E.length), O = U.slice(E.length);
    return await Promise.all([$s(y, E, I, I.map(() => A.signal), !1, f.loaderData), $s(y, M.map((T) => T.match), O, M.map((T) => T.controller ? T.controller.signal : null), !0)]), {
      results: U,
      loaderResults: I,
      fetcherResults: O
    };
  }
  function zo() {
    W = !0, j.push(...To()), at.forEach((y, g) => {
      X.has(g) && (ve.push(g), Tt(g));
    });
  }
  function il(y, g, E) {
    let M = An(f.matches, g);
    Mo(y), G({
      errors: {
        [M.route.id]: E
      },
      fetchers: new Map(f.fetchers)
    });
  }
  function Mo(y) {
    let g = f.fetchers.get(y);
    X.has(y) && !(g && g.state === "loading" && zt.has(y)) && Tt(y), at.delete(y), zt.delete(y), Ie.delete(y), f.fetchers.delete(y);
  }
  function Tt(y) {
    let g = X.get(y);
    $(g, "Expected fetch controller: " + y), g.abort(), X.delete(y);
  }
  function da(y) {
    for (let g of y) {
      let E = ca(g), M = Rn(E.data);
      f.fetchers.set(g, M);
    }
  }
  function pa() {
    let y = [], g = !1;
    for (let E of Ie) {
      let M = f.fetchers.get(E);
      $(M, "Expected fetcher: " + E), M.state === "loading" && (Ie.delete(E), y.push(E), g = !0);
    }
    return da(y), g;
  }
  function ha(y) {
    let g = [];
    for (let [E, M] of zt)
      if (M < y) {
        let A = f.fetchers.get(E);
        $(A, "Expected fetcher: " + E), A.state === "loading" && (Tt(E), zt.delete(E), g.push(E));
      }
    return da(g), g.length > 0;
  }
  function Rd(y, g) {
    let E = f.blockers.get(y) || yr;
    return F.get(y) !== g && F.set(y, g), E;
  }
  function ma(y) {
    f.blockers.delete(y), F.delete(y);
  }
  function ul(y, g) {
    let E = f.blockers.get(y) || yr;
    $(E.state === "unblocked" && g.state === "blocked" || E.state === "blocked" && g.state === "blocked" || E.state === "blocked" && g.state === "proceeding" || E.state === "blocked" && g.state === "unblocked" || E.state === "proceeding" && g.state === "unblocked", "Invalid blocker state transition: " + E.state + " -> " + g.state);
    let M = new Map(f.blockers);
    M.set(y, g), G({
      blockers: M
    });
  }
  function va(y) {
    let {
      currentLocation: g,
      nextLocation: E,
      historyAction: M
    } = y;
    if (F.size === 0)
      return;
    F.size > 1 && er(!1, "A router only supports one blocker at a time");
    let A = Array.from(F.entries()), [U, I] = A[A.length - 1], O = f.blockers.get(U);
    if (!(O && O.state === "proceeding") && I({
      currentLocation: g,
      nextLocation: E,
      historyAction: M
    }))
      return U;
  }
  function To(y) {
    let g = [];
    return L.forEach((E, M) => {
      (!y || y(M)) && (E.cancel(), g.push(M), L.delete(M));
    }), g;
  }
  function _d(y, g, E) {
    if (m = y, w = g, k = E || null, !S && f.navigation === di) {
      S = !0;
      let M = ga(f.location, f.matches);
      M != null && G({
        restoreScrollPosition: M
      });
    }
    return () => {
      m = null, w = null, k = null;
    };
  }
  function ya(y, g) {
    return k && k(y, g.map((M) => Qm(M, f.loaderData))) || y.key;
  }
  function Pd(y, g) {
    if (m && w) {
      let E = ya(y, g);
      m[E] = w();
    }
  }
  function ga(y, g) {
    if (m) {
      let E = ya(y, g), M = m[E];
      if (typeof M == "number")
        return M;
    }
    return null;
  }
  function Ld(y) {
    o = {}, u = iu(y, l, void 0, o);
  }
  return h = {
    get basename() {
      return a;
    },
    get state() {
      return f;
    },
    get routes() {
      return i;
    },
    initialize: ne,
    subscribe: En,
    enableScrollRestoration: _d,
    navigate: st,
    fetch: Ed,
    revalidate: xn,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (y) => e.history.createHref(y),
    encodeLocation: (y) => e.history.encodeLocation(y),
    getFetcher: ca,
    deleteFetcher: Mo,
    dispose: se,
    getBlocker: Rd,
    deleteBlocker: ma,
    _internalFetchControllers: X,
    _internalActiveDeferreds: L,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Ld
  }, h;
}
function Um(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function uu(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== "path") {
    u = [];
    for (let p of t)
      if (u.push(p), p.route.id === o) {
        a = p;
        break;
      }
  } else
    u = t, a = t[t.length - 1];
  let s = ia(l || ".", Po(u).map((p) => p.pathnameBase), lr(e.pathname, n) || e.pathname, i === "path");
  return l == null && (s.search = e.search, s.hash = e.hash), (l == null || l === "" || l === ".") && a && a.route.index && !aa(s.search) && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (s.pathname = s.pathname === "/" ? n : xt([n, s.pathname])), yn(s);
}
function Ms(e, t, n, r) {
  if (!r || !Um(r))
    return {
      path: n
    };
  if (r.formMethod && !Hm(r.formMethod))
    return {
      path: n,
      error: Qe(405, {
        method: r.formMethod
      })
    };
  let l = () => ({
    path: n,
    error: Qe(400, {
      type: "invalid-body"
    })
  }), o = r.formMethod || "get", i = e ? o.toUpperCase() : o.toLowerCase(), u = pd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!nt(i))
        return l();
      let m = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(r.body.entries()).reduce((k, w) => {
          let [S, P] = w;
          return "" + k + S + "=" + P + `
`;
        }, "")
      ) : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!nt(i))
        return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0
          }
        };
      } catch {
        return l();
      }
    }
  }
  $(typeof FormData == "function", "FormData is not available in this environment");
  let a, s;
  if (r.formData)
    a = au(r.formData), s = r.formData;
  else if (r.body instanceof FormData)
    a = au(r.body), s = r.body;
  else if (r.body instanceof URLSearchParams)
    a = r.body, s = js(a);
  else if (r.body == null)
    a = new URLSearchParams(), s = new FormData();
  else
    try {
      a = new URLSearchParams(r.body), s = js(a);
    } catch {
      return l();
    }
  let p = {
    formMethod: i,
    formAction: u,
    formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0
  };
  if (nt(p.formMethod))
    return {
      path: n,
      submission: p
    };
  let v = Nt(n);
  return t && v.search && aa(v.search) && a.append("index", ""), v.search = "?" + a, {
    path: yn(v),
    submission: p
  };
}
function Im(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ts(e, t, n, r, l, o, i, u, a, s, p, v, m, k) {
  let w = k ? Object.values(k)[0] : m ? Object.values(m)[0] : void 0, S = e.createURL(t.location), P = e.createURL(l), d = k ? Object.keys(k)[0] : void 0, h = Im(n, d).filter((x, _) => {
    if (x.route.lazy)
      return !0;
    if (x.route.loader == null)
      return !1;
    if (Am(t.loaderData, t.matches[_], x) || i.some((W) => W === x.route.id))
      return !0;
    let R = t.matches[_], z = x;
    return Os(x, ee({
      currentUrl: S,
      currentParams: R.params,
      nextUrl: P,
      nextParams: z.params
    }, r, {
      actionResult: w,
      defaultShouldRevalidate: (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        o || // Clicked the same link, resubmitted a GET form
        S.pathname + S.search === P.pathname + P.search || // Search params affect all loaders
        S.search !== P.search || dd(R, z)
      )
    }));
  }), f = [];
  return a.forEach((x, _) => {
    if (!n.some((ve) => ve.route.id === x.routeId))
      return;
    let R = In(p, x.path, v);
    if (!R) {
      f.push({
        key: _,
        routeId: x.routeId,
        path: x.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let z = t.fetchers.get(_), W = su(R, x.path), j = !1;
    s.has(_) ? j = !1 : u.includes(_) ? j = !0 : z && z.state !== "idle" && z.data === void 0 ? j = o : j = Os(W, ee({
      currentUrl: S,
      currentParams: t.matches[t.matches.length - 1].params,
      nextUrl: P,
      nextParams: n[n.length - 1].params
    }, r, {
      actionResult: w,
      defaultShouldRevalidate: o
    })), j && f.push({
      key: _,
      routeId: x.routeId,
      path: x.path,
      matches: R,
      match: W,
      controller: new AbortController()
    });
  }), [h, f];
}
function Am(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), l = e[n.route.id] === void 0;
  return r || l;
}
function dd(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Os(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
async function Fs(e, t, n) {
  if (!e.lazy)
    return;
  let r = await e.lazy();
  if (!e.lazy)
    return;
  let l = n[e.id];
  $(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    i !== "hasErrorBoundary";
    er(!a, 'Route "' + l.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')), !a && !am.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ee({}, t(l), {
    lazy: void 0
  }));
}
async function gr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a, s, p, v = (w) => {
    let S, P = new Promise((d, c) => S = c);
    return p = () => S(), t.signal.addEventListener("abort", p), Promise.race([w({
      request: t,
      params: n.params,
      context: u.requestContext
    }), P]);
  };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w)
        s = (await Promise.all([v(w), Fs(n.route, o, l)]))[0];
      else if (await Fs(n.route, o, l), w = n.route[e], w)
        s = await v(w);
      else if (e === "action") {
        let S = new URL(t.url), P = S.pathname + S.search;
        throw Qe(405, {
          method: t.method,
          pathname: P,
          routeId: n.route.id
        });
      } else
        return {
          type: pe.data,
          data: void 0
        };
    else if (w)
      s = await v(w);
    else {
      let S = new URL(t.url), P = S.pathname + S.search;
      throw Qe(404, {
        pathname: P
      });
    }
    $(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (w) {
    a = pe.error, s = w;
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Wm(s)) {
    let w = s.status;
    if (Mm.has(w)) {
      let d = s.headers.get("Location");
      if ($(d, "Redirects returned/thrown from loaders/actions must have a Location header"), !fd.test(d))
        d = uu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let c = new URL(t.url), h = d.startsWith("//") ? new URL(c.protocol + d) : new URL(d), f = lr(h.pathname, i) != null;
        h.origin === c.origin && f && (d = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest)
        throw s.headers.set("Location", d), s;
      return {
        type: pe.redirect,
        status: w,
        location: d,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null
      };
    }
    if (u.isRouteRequest)
      throw {
        type: a || pe.data,
        response: s
      };
    let S, P = s.headers.get("Content-Type");
    return P && /\bapplication\/json\b/.test(P) ? S = await s.json() : S = await s.text(), a === pe.error ? {
      type: a,
      error: new ua(w, s.statusText, S),
      headers: s.headers
    } : {
      type: pe.data,
      data: S,
      statusCode: s.status,
      headers: s.headers
    };
  }
  if (a === pe.error)
    return {
      type: a,
      error: s
    };
  if (Vm(s)) {
    var m, k;
    return {
      type: pe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers: ((k = s.init) == null ? void 0 : k.headers) && new Headers(s.init.headers)
    };
  }
  return {
    type: pe.data,
    data: s
  };
}
function wr(e, t, n, r) {
  let l = e.createURL(pd(t)).toString(), o = {
    signal: n
  };
  if (r && nt(r.formMethod)) {
    let {
      formMethod: i,
      formEncType: u
    } = r;
    o.method = i.toUpperCase(), u === "application/json" ? (o.headers = new Headers({
      "Content-Type": u
    }), o.body = JSON.stringify(r.json)) : u === "text/plain" ? o.body = r.text : u === "application/x-www-form-urlencoded" && r.formData ? o.body = au(r.formData) : o.body = r.formData;
  }
  return new Request(l, o);
}
function au(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function js(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function Bm(e, t, n, r, l) {
  let o = {}, i = null, u, a = !1, s = {};
  return n.forEach((p, v) => {
    let m = t[v].route.id;
    if ($(!Kn(p), "Cannot handle redirect results in processLoaderData"), Or(p)) {
      let k = An(e, m), w = p.error;
      r && (w = Object.values(r)[0], r = void 0), i = i || {}, i[k.route.id] == null && (i[k.route.id] = w), o[m] = void 0, a || (a = !0, u = sd(p.error) ? p.error.status : 500), p.headers && (s[m] = p.headers);
    } else
      sn(p) ? (l.set(m, p.deferredData), o[m] = p.deferredData.data) : o[m] = p.data, p.statusCode != null && p.statusCode !== 200 && !a && (u = p.statusCode), p.headers && (s[m] = p.headers);
  }), r && (i = r, o[Object.keys(r)[0]] = void 0), {
    loaderData: o,
    errors: i,
    statusCode: u || 200,
    loaderHeaders: s
  };
}
function Us(e, t, n, r, l, o, i, u) {
  let {
    loaderData: a,
    errors: s
  } = Bm(t, n, r, l, u);
  for (let p = 0; p < o.length; p++) {
    let {
      key: v,
      match: m,
      controller: k
    } = o[p];
    $(i !== void 0 && i[p] !== void 0, "Did not find corresponding fetcher result");
    let w = i[p];
    if (!(k && k.signal.aborted))
      if (Or(w)) {
        let S = An(e.matches, m?.route.id);
        s && s[S.route.id] || (s = ee({}, s, {
          [S.route.id]: w.error
        })), e.fetchers.delete(v);
      } else if (Kn(w))
        $(!1, "Unhandled fetcher revalidation redirect");
      else if (sn(w))
        $(!1, "Unhandled fetcher deferred data");
      else {
        let S = Rn(w.data);
        e.fetchers.set(v, S);
      }
  }
  return {
    loaderData: a,
    errors: s
  };
}
function Is(e, t, n, r) {
  let l = ee({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && o.route.loader && (l[i] = e[i]), r && r.hasOwnProperty(i))
      break;
  }
  return l;
}
function An(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function As(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function Qe(e, t) {
  let {
    pathname: n,
    routeId: r,
    method: l,
    type: o
  } = t === void 0 ? {} : t, i = "Unknown Server Error", u = "Unknown @remix-run/router error";
  return e === 400 ? (i = "Bad Request", l && n && r ? u = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? u = "defer() is not supported in actions" : o === "invalid-body" && (u = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden", u = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (i = "Not Found", u = 'No route matches URL "' + n + '"') : e === 405 && (i = "Method Not Allowed", l && n && r ? u = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')), new ua(e || 500, i, new Error(u), !0);
}
function Bs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Kn(n))
      return {
        result: n,
        idx: t
      };
  }
}
function pd(e) {
  let t = typeof e == "string" ? Nt(e) : e;
  return yn(ee({}, t, {
    hash: ""
  }));
}
function $m(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function sn(e) {
  return e.type === pe.deferred;
}
function Or(e) {
  return e.type === pe.error;
}
function Kn(e) {
  return (e && e.type) === pe.redirect;
}
function Vm(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Wm(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Hm(e) {
  return zm.has(e.toLowerCase());
}
function nt(e) {
  return Nm.has(e.toLowerCase());
}
async function $s(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i], a = t[i];
    if (!a)
      continue;
    let s = e.find((v) => v.route.id === a.route.id), p = s != null && !dd(s, a) && (o && o[a.route.id]) !== void 0;
    if (sn(u) && (l || p)) {
      let v = r[i];
      $(v, "Expected an AbortSignal for revalidating fetcher deferred result"), await hd(u, v, l).then((m) => {
        m && (n[i] = m || n[i]);
      });
    }
  }
}
async function hd(e, t, n) {
  if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
    if (n)
      try {
        return {
          type: pe.data,
          data: e.deferredData.unwrappedData
        };
      } catch (l) {
        return {
          type: pe.error,
          error: l
        };
      }
    return {
      type: pe.data,
      data: e.deferredData.data
    };
  }
}
function aa(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Qm(e, t) {
  let {
    route: n,
    pathname: r,
    params: l
  } = e;
  return {
    id: n.id,
    pathname: r,
    params: l,
    data: t[n.id],
    handle: n.handle
  };
}
function su(e, t) {
  let n = typeof t == "string" ? Nt(t).search : t.search;
  if (e[e.length - 1].route.index && aa(n || ""))
    return e[e.length - 1];
  let r = Po(e);
  return r[r.length - 1];
}
function Vs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0
      };
  }
}
function _l(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Km(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function Sr(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t,
    " _hasFetcherDoneAnything ": !0
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t,
    " _hasFetcherDoneAnything ": !0
  };
}
function Ym(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0
  };
}
function Rn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0
  };
}
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function so() {
  return so = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, so.apply(this, arguments);
}
const Lo = /* @__PURE__ */ N.createContext(null), md = /* @__PURE__ */ N.createContext(null), or = /* @__PURE__ */ N.createContext(null), No = /* @__PURE__ */ N.createContext(null), kn = /* @__PURE__ */ N.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), vd = /* @__PURE__ */ N.createContext(null);
function Xm(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  ol() || $(!1);
  let {
    basename: r,
    navigator: l
  } = N.useContext(or), {
    hash: o,
    pathname: i,
    search: u
  } = gd(e, {
    relative: n
  }), a = i;
  return r !== "/" && (a = i === "/" ? r : xt([r, i])), l.createHref({
    pathname: a,
    search: u,
    hash: o
  });
}
function ol() {
  return N.useContext(No) != null;
}
function Do() {
  return ol() || $(!1), N.useContext(No).location;
}
function yd(e) {
  N.useContext(or).static || N.useLayoutEffect(e);
}
function Gm() {
  let {
    isDataRoute: e
  } = N.useContext(kn);
  return e ? uv() : Jm();
}
function Jm() {
  ol() || $(!1);
  let e = N.useContext(Lo), {
    basename: t,
    navigator: n
  } = N.useContext(or), {
    matches: r
  } = N.useContext(kn), {
    pathname: l
  } = Do(), o = JSON.stringify(Po(r).map((a) => a.pathnameBase)), i = N.useRef(!1);
  return yd(() => {
    i.current = !0;
  }), N.useCallback(function(a, s) {
    if (s === void 0 && (s = {}), !i.current)
      return;
    if (typeof a == "number") {
      n.go(a);
      return;
    }
    let p = ia(a, JSON.parse(o), l, s.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : xt([t, p.pathname])), (s.replace ? n.replace : n.push)(p, s.state, s);
  }, [t, n, o, l, e]);
}
function gd(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = N.useContext(kn), {
    pathname: l
  } = Do(), o = JSON.stringify(Po(r).map((i) => i.pathnameBase));
  return N.useMemo(() => ia(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Zm(e, t, n) {
  ol() || $(!1);
  let {
    navigator: r
  } = N.useContext(or), {
    matches: l
  } = N.useContext(kn), o = l[l.length - 1], i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Do(), s;
  if (t) {
    var p;
    let S = typeof t == "string" ? Nt(t) : t;
    u === "/" || (p = S.pathname) != null && p.startsWith(u) || $(!1), s = S;
  } else
    s = a;
  let v = s.pathname || "/", m = u === "/" ? v : v.slice(u.length) || "/", k = In(e, {
    pathname: m
  }), w = nv(k && k.map((S) => Object.assign({}, S, {
    params: Object.assign({}, i, S.params),
    pathname: xt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(S.pathname).pathname : S.pathname
    ]),
    pathnameBase: S.pathnameBase === "/" ? u : xt([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(S.pathnameBase).pathname : S.pathnameBase
    ])
  })), l, n);
  return t && w ? /* @__PURE__ */ N.createElement(No.Provider, {
    value: {
      location: so({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, s),
      navigationType: ce.Pop
    }
  }, w) : w;
}
function qm() {
  let e = iv(), t = sd(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  }, o = null;
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ N.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ N.createElement("pre", {
    style: l
  }, n) : null, o);
}
const bm = /* @__PURE__ */ N.createElement(qm, null);
class ev extends N.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error || n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ N.createElement(kn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ N.createElement(vd.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function tv(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, l = N.useContext(Lo);
  return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ N.createElement(kn.Provider, {
    value: t
  }, r);
}
function nv(e, t, n) {
  var r;
  if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
    var l;
    if ((l = n) != null && l.errors)
      e = n.matches;
    else
      return null;
  }
  let o = e, i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex((a) => a.route.id && i?.[a.route.id]);
    u >= 0 || $(!1), o = o.slice(0, Math.min(o.length, u + 1));
  }
  return o.reduceRight((u, a, s) => {
    let p = a.route.id ? i?.[a.route.id] : null, v = null;
    n && (v = a.route.errorElement || bm);
    let m = t.concat(o.slice(0, s + 1)), k = () => {
      let w;
      return p ? w = v : a.route.Component ? w = /* @__PURE__ */ N.createElement(a.route.Component, null) : a.route.element ? w = a.route.element : w = u, /* @__PURE__ */ N.createElement(tv, {
        match: a,
        routeContext: {
          outlet: u,
          matches: m,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0) ? /* @__PURE__ */ N.createElement(ev, {
      location: n.location,
      revalidation: n.revalidation,
      component: v,
      error: p,
      children: k(),
      routeContext: {
        outlet: null,
        matches: m,
        isDataRoute: !0
      }
    }) : k();
  }, null);
}
var cu;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate";
})(cu || (cu = {}));
var gn;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId";
})(gn || (gn = {}));
function rv(e) {
  let t = N.useContext(Lo);
  return t || $(!1), t;
}
function wd(e) {
  let t = N.useContext(md);
  return t || $(!1), t;
}
function lv(e) {
  let t = N.useContext(kn);
  return t || $(!1), t;
}
function sa(e) {
  let t = lv(), n = t.matches[t.matches.length - 1];
  return n.route.id || $(!1), n.route.id;
}
function ov() {
  let e = wd(gn.UseLoaderData), t = sa(gn.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
    return;
  }
  return e.loaderData[t];
}
function iv() {
  var e;
  let t = N.useContext(vd), n = wd(gn.UseRouteError), r = sa(gn.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function uv() {
  let {
    router: e
  } = rv(cu.UseNavigateStable), t = sa(gn.UseNavigateStable), n = N.useRef(!1);
  return yd(() => {
    n.current = !0;
  }), N.useCallback(function(l, o) {
    o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, so({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
const av = "startTransition", Ws = Yd[av];
function sv(e) {
  let {
    fallbackElement: t,
    router: n,
    future: r
  } = e, [l, o] = N.useState(n.state), {
    v7_startTransition: i
  } = r || {}, u = N.useCallback((v) => {
    i && Ws ? Ws(() => o(v)) : o(v);
  }, [o, i]);
  N.useLayoutEffect(() => n.subscribe(u), [n, u]);
  let a = N.useMemo(() => ({
    createHref: n.createHref,
    encodeLocation: n.encodeLocation,
    go: (v) => n.navigate(v),
    push: (v, m, k) => n.navigate(v, {
      state: m,
      preventScrollReset: k?.preventScrollReset
    }),
    replace: (v, m, k) => n.navigate(v, {
      replace: !0,
      state: m,
      preventScrollReset: k?.preventScrollReset
    })
  }), [n]), s = n.basename || "/", p = N.useMemo(() => ({
    router: n,
    navigator: a,
    static: !1,
    basename: s
  }), [n, a, s]);
  return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Lo.Provider, {
    value: p
  }, /* @__PURE__ */ N.createElement(md.Provider, {
    value: l
  }, /* @__PURE__ */ N.createElement(fv, {
    basename: s,
    location: l.location,
    navigationType: l.historyAction,
    navigator: a
  }, l.initialized ? /* @__PURE__ */ N.createElement(cv, {
    routes: n.routes,
    state: l
  }) : t))), null);
}
function cv(e) {
  let {
    routes: t,
    state: n
  } = e;
  return Zm(t, void 0, n);
}
function fv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ce.Pop,
    navigator: o,
    static: i = !1
  } = e;
  ol() && $(!1);
  let u = t.replace(/^\/*/, "/"), a = N.useMemo(() => ({
    basename: u,
    navigator: o,
    static: i
  }), [u, o, i]);
  typeof r == "string" && (r = Nt(r));
  let {
    pathname: s = "/",
    search: p = "",
    hash: v = "",
    state: m = null,
    key: k = "default"
  } = r, w = N.useMemo(() => {
    let S = lr(s, u);
    return S == null ? null : {
      location: {
        pathname: S,
        search: p,
        hash: v,
        state: m,
        key: k
      },
      navigationType: l
    };
  }, [u, s, p, v, m, k, l]);
  return w == null ? null : /* @__PURE__ */ N.createElement(or.Provider, {
    value: a
  }, /* @__PURE__ */ N.createElement(No.Provider, {
    children: n,
    value: w
  }));
}
var Hs;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(Hs || (Hs = {}));
new Promise(() => {
});
function dv(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && Object.assign(t, {
    element: /* @__PURE__ */ N.createElement(e.Component),
    Component: void 0
  }), e.ErrorBoundary && Object.assign(t, {
    errorElement: /* @__PURE__ */ N.createElement(e.ErrorBoundary),
    ErrorBoundary: void 0
  }), t;
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, br.apply(this, arguments);
}
function pv(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function hv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mv(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !hv(e);
}
const vv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function yv(e, t) {
  return jm({
    basename: t?.basename,
    future: br({}, t?.future, {
      v7_prependBasename: !0
    }),
    history: om({
      window: t?.window
    }),
    hydrationData: t?.hydrationData || gv(),
    routes: e,
    mapRouteProperties: dv
  }).initialize();
}
function gv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = br({}, t, {
    errors: wv(t.errors)
  })), t;
}
function wv(e) {
  if (!e)
    return null;
  let t = Object.entries(e), n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ua(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            i.stack = "", n[r] = i;
          } catch {
          }
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        o.stack = "", n[r] = o;
      }
    } else
      n[r] = l;
  return n;
}
const Sv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ev = /* @__PURE__ */ N.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: o,
    replace: i,
    state: u,
    target: a,
    to: s,
    preventScrollReset: p
  } = t, v = pv(t, vv), {
    basename: m
  } = N.useContext(or), k, w = !1;
  if (typeof s == "string" && kv.test(s) && (k = s, Sv))
    try {
      let c = new URL(window.location.href), h = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s), f = lr(h.pathname, m);
      h.origin === c.origin && f != null ? s = f + h.search + h.hash : w = !0;
    } catch {
    }
  let S = Xm(s, {
    relative: l
  }), P = xv(s, {
    replace: i,
    state: u,
    target: a,
    preventScrollReset: p,
    relative: l
  });
  function d(c) {
    r && r(c), c.defaultPrevented || P(c);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ N.createElement("a", br({}, v, {
      href: k || S,
      onClick: w || o ? r : d,
      ref: n,
      target: a
    }))
  );
});
var Qs;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher";
})(Qs || (Qs = {}));
var Ks;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Ks || (Ks = {}));
function xv(e, t) {
  let {
    target: n,
    replace: r,
    state: l,
    preventScrollReset: o,
    relative: i
  } = t === void 0 ? {} : t, u = Gm(), a = Do(), s = gd(e, {
    relative: i
  });
  return N.useCallback((p) => {
    if (mv(p, n)) {
      p.preventDefault();
      let v = r !== void 0 ? r : yn(a) === yn(s);
      u(e, {
        replace: v,
        state: l,
        preventScrollReset: o,
        relative: i
      });
    }
  }, [a, u, s, r, l, n, e, o, i]);
}
function Cv() {
  const t = mu.useMemo(() => {
    const n = window.localStorage.getItem("employees");
    return n ? JSON.parse(n) : [];
  }, []).filter((n) => n.isAdmin);
  return /* @__PURE__ */ Me.jsxs("div", { className: "admin-container", children: [
    /* @__PURE__ */ Me.jsx("h3", { children: "Admins" }),
    /* @__PURE__ */ Me.jsx("ul", { children: t.map((n, r) => /* @__PURE__ */ Me.jsx("li", { children: /* @__PURE__ */ Me.jsx(Ev, { to: n.id, children: /* @__PURE__ */ Me.jsx(lm, { employee: n }) }) }, r)) })
  ] });
}
function Rv(e) {
  const { admin: t } = ov();
  return /* @__PURE__ */ Me.jsx("div", { children: /* @__PURE__ */ Me.jsx("h3", { children: t.name }) });
}
async function _v({ params: e }) {
  const { adminId: t } = e, n = window.localStorage.getItem("employees");
  return n ? { admin: JSON.parse(n).filter((i) => i.isAdmin).find((i) => i.id === t) } : void 0;
}
function Pv(e, t, n) {
  const r = yv(
    [
      {
        path: "/",
        element: /* @__PURE__ */ Me.jsx(Cv, {})
      },
      {
        path: "/:adminId",
        element: /* @__PURE__ */ Me.jsx(Rv, {}),
        loader: _v
      }
    ],
    {
      basename: `${e}/${t}`
    }
  );
  pi.createRoot(document.getElementById("view-root")).render(
    /* @__PURE__ */ Me.jsx(mu.StrictMode, { children: /* @__PURE__ */ Me.jsx(sv, { router: r }) })
  );
}
export {
  Pv as default
};
