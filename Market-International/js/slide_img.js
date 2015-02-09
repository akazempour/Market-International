                        /*Jssor*/
                        (function (f, g, b, h, c, e, i) {/*! Jssor */
                            new (function () {
                            });
                            var d = {i: function (a) {
                                    return a
                                }, mc: function (a) {
                                    return-b.cos(a * b.PI) / 2 + .5
                                }, Wd: function (a) {
                                    return-a * (a - 2)
                                }, k: function (a) {
                                    return a * a * a
                                }, Pc: function (a) {
                                    return(a -= 1) * a * a + 1
                                }}, o = {sd: function (a) {
                                    return(a & 3) > 0
                                }, pd: function (a) {
                                    return(a & 12) > 0
                                }}, r = {ne: 37, ve: 39}, m, j, a = new function () {
                                var d = this, lb = 1, F = 2, F = 3, fb = 4, jb = 5, q = 0, l = 0, t = 0, Y = 0, D = 0, qb = navigator.appName, k = navigator.userAgent, p = g.documentElement, B;
                                function x() {
                                    if (!q)
                                        if (qb == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
                                            var d = k.indexOf("MSIE");
                                            q = lb;
                                            t = n(k.substring(d + 5, k.indexOf(";", d)));/*@cc_on Y=@_jscript_version@*/
                                            ;
                                            l = g.documentMode || t
                                        } else if (qb == "Netscape" && !!f.addEventListener) {
                                            var c = k.indexOf("Firefox"), a = k.indexOf("Safari"), h = k.indexOf("Chrome"), b = k.indexOf("AppleWebKit");
                                            if (c >= 0) {
                                                q = F;
                                                l = n(k.substring(c + 8))
                                            } else if (a >= 0) {
                                                var i = k.substring(0, a).lastIndexOf("/");
                                                q = h >= 0 ? fb : F;
                                                l = n(k.substring(i + 1, a))
                                            }
                                            if (b >= 0)
                                                D = n(k.substring(b + 12))
                                        } else {
                                            var e = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                                            if (e) {
                                                q = jb;
                                                l = n(e[2])
                                            }
                                        }
                                }
                                function s() {
                                    x();
                                    return q == lb
                                }
                                function N() {
                                    return s() && (l < 6 || g.compatMode == "BackCompat")
                                }
                                function eb() {
                                    x();
                                    return q == F
                                }
                                function db() {
                                    x();
                                    return q == fb
                                }
                                function ib() {
                                    x();
                                    return q == jb
                                }
                                function Z() {
                                    return eb() && D > 534 && D < 535
                                }
                                function A() {
                                    return s() && l < 9
                                }
                                function u(a) {
                                    if (!B) {
                                        j(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                                            if (a.style[b] != i) {
                                                B = b;
                                                return c
                                            }
                                        });
                                        B = B || "transform"
                                    }
                                    return B
                                }
                                function ob(a) {
                                    return Object.prototype.toString.call(a)
                                }
                                var I;
                                function j(a, d) {
                                    if (ob(a) == "[object Array]") {
                                        for (var b = 0; b < a.length; b++)
                                            if (d(a[b], b, a))
                                                return c
                                    } else
                                        for (var e in a)
                                            if (d(a[e], e, a))
                                                return c
                                }
                                function vb() {
                                    if (!I) {
                                        I = {};
                                        j(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                                            I["[object " + a + "]"] = a.toLowerCase()
                                        })
                                    }
                                    return I
                                }
                                function z(a) {
                                    return a == h ? String(a) : vb()[ob(a)] || "object"
                                }
                                function y(a, b) {
                                    return{x: a, y: b}
                                }
                                function pb(b, a) {
                                    setTimeout(b, a || 0)
                                }
                                function G(b, d, c) {
                                    var a = !b || b == "inherit" ? "" : b;
                                    j(d, function (c) {
                                        var b = c.exec(a);
                                        if (b) {
                                            var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                                            a = d + e
                                        }
                                    });
                                    a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
                                    return a
                                }
                                function bb(b, a) {
                                    if (l < 9)
                                        b.style.filter = a
                                }
                                function sb(b, a, c) {
                                    if (Y < 9) {
                                        var f = b.style.filter, h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", e = G(f, [h], g);
                                        bb(b, e);
                                        d.Rc(b, c.y);
                                        d.Uc(b, c.x)
                                    }
                                }
                                d.Ib = s;
                                d.ce = eb;
                                d.Eb = db;
                                d.rd = ib;
                                d.db = A;
                                d.S = function () {
                                    return l
                                };
                                d.de = function () {
                                    return t || l
                                };
                                d.ac = function () {
                                    x();
                                    return D
                                };
                                d.v = pb;
                                function mb(a) {
                                    a.constructor === mb.caller && a.td && a.td()
                                }
                                d.td = mb;
                                d.vb = function (a) {
                                    if (d.ae(a))
                                        a = g.getElementById(a);
                                    return a
                                };
                                function v(a) {
                                    return a || f.event
                                }
                                d.Zd = function (a) {
                                    a = v(a);
                                    return a.target || a.srcElement || g
                                };
                                d.hd = function (a) {
                                    a = v(a);
                                    var b = g.body;
                                    return{x: a.pageX || a.clientX + (p.scrollLeft || b.scrollLeft || 0) - (p.clientLeft || b.clientLeft || 0) || 0, y: a.pageY || a.clientY + (p.scrollTop || b.scrollTop || 0) - (p.clientTop || b.clientTop || 0) || 0}
                                };
                                d.le = function () {
                                    var a = g.body;
                                    return{x: a.clientWidth || p.clientWidth, y: a.clientHeight || p.clientHeight}
                                };
                                function E(c, d, a) {
                                    if (a != i)
                                        c.style[d] = a;
                                    else {
                                        var b = c.currentStyle || c.style;
                                        a = b[d];
                                        if (a == "" && f.getComputedStyle) {
                                            b = c.ownerDocument.defaultView.getComputedStyle(c, h);
                                            b && (a = b.getPropertyValue(d) || b[d])
                                        }
                                        return a
                                    }
                                }
                                function V(b, c, a, d) {
                                    if (a != i) {
                                        d && (a += "px");
                                        E(b, c, a)
                                    } else
                                        return n(E(b, c))
                                }
                                function o(d, a) {
                                    var b = a & 2, c = a ? V : E;
                                    return function (e, a) {
                                        return c(e, d, a, b)
                                    }
                                }
                                function tb(b) {
                                    if (s() && t < 9) {
                                        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                                        return a ? n(a[1]) / 100 : 1
                                    } else
                                        return n(b.style.opacity || "1")
                                }
                                function ub(c, a, f) {
                                    if (s() && t < 9) {
                                        var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                                        if (e < 100 || f)
                                            d = "alpha(opacity=" + e + ") ";
                                        var g = G(h, [i], d);
                                        bb(c, g)
                                    } else
                                        c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
                                }
                                function X(g, a) {
                                    var e = a.r || 0, c = a.H == i ? 1 : a.H;
                                    if (A()) {
                                        var l = d.ge(e / 180 * b.PI, c, c);
                                        sb(g, !e && c == 1 ? h : l, d.ie(l, a.ab, a.bb))
                                    } else {
                                        var j = u(g);
                                        if (j) {
                                            var k = "rotate(" + e % 360 + "deg) scale(" + c + ")";
                                            if (db() && D > 535 && "ontouchstart"in f)
                                                k += " perspective(2000px)";
                                            g.style[j] = k
                                        }
                                    }
                                }
                                d.bf = function (b, a) {
                                    if (Z())
                                        pb(d.lb(h, X, b, a));
                                    else
                                        X(b, a)
                                };
                                d.af = function (b, c) {
                                    var a = u(b);
                                    if (a)
                                        b.style[a + "Origin"] = c
                                };
                                d.df = function (a, c) {
                                    if (s() && t < 9 || t < 10 && N())
                                        a.style.zoom = c == 1 ? "" : c;
                                    else {
                                        var b = u(a);
                                        if (b) {
                                            var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = G(e, [g], f);
                                            a.style[b] = d
                                        }
                                    }
                                };
                                d.cf = function (a) {
                                    if (!a.style[u(a)] || a.style[u(a)] == "none")
                                        a.style[u(a)] = "perspective(2000px)"
                                };
                                d.Xe = function (a) {
                                    a.style[u(a)] = "none"
                                };
                                var hb = 0, cb = 0;
                                d.We = function (b, a) {
                                    return A() ? function () {
                                        var h = c, d = N() ? b.document.body : b.document.documentElement;
                                        if (d) {
                                            var g = d.offsetWidth - hb, f = d.offsetHeight - cb;
                                            if (g || f) {
                                                hb += g;
                                                cb += f
                                            } else
                                                h = e
                                        }
                                        h && a()
                                    } : a
                                };
                                d.vc = function (b, a) {
                                    return function (c) {
                                        c = v(c);
                                        var f = c.type, e = c.relatedTarget || (f == "mouseout" ? c.toElement : c.fromElement);
                                        (!e || e !== a && !d.Ze(a, e)) && b(c)
                                    }
                                };
                                d.j = function (a, c, e, b) {
                                    a = d.vb(a);
                                    if (a.addEventListener) {
                                        c == "mousewheel" && a.addEventListener("DOMMouseScroll", e, b);
                                        a.addEventListener(c, e, b)
                                    } else if (a.attachEvent) {
                                        a.attachEvent("on" + c, e);
                                        b && a.setCapture && a.setCapture()
                                    }
                                };
                                d.Kb = function (a, c, e, b) {
                                    a = d.vb(a);
                                    if (a.removeEventListener) {
                                        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, b);
                                        a.removeEventListener(c, e, b)
                                    } else if (a.detachEvent) {
                                        a.detachEvent("on" + c, e);
                                        b && a.releaseCapture && a.releaseCapture()
                                    }
                                };
                                d.lf = function (b, a) {
                                    d.j(A() ? g : f, "mouseup", b, a)
                                };
                                d.nb = function (a) {
                                    a = v(a);
                                    a.preventDefault && a.preventDefault();
                                    a.cancel = c;
                                    a.returnValue = e
                                };
                                d.lb = function (d, c) {
                                    var a = [].slice.call(arguments, 2), b = function () {
                                        var b = a.concat([].slice.call(arguments, 0));
                                        return c.apply(d, b)
                                    };
                                    return b
                                };
                                d.hf = function (a) {
                                    a.innerHTML = ""
                                };
                                d.gb = function (c) {
                                    for (var b = [], a = c.firstChild; a; a = a.nextSibling)
                                        a.nodeType == 1 && b.push(a);
                                    return b
                                };
                                function nb(a, c, e, b) {
                                    b = b || "u";
                                    for (a = a?a.firstChild:h; a; a = a.nextSibling)
                                        if (a.nodeType == 1) {
                                            if (R(a, b) == c)
                                                return a;
                                            if (!e) {
                                                var d = nb(a, c, e, b);
                                                if (d)
                                                    return d
                                            }
                                        }
                                }
                                d.F = nb;
                                function P(a, d, f, b) {
                                    b = b || "u";
                                    var c = [];
                                    for (a = a?a.firstChild:h; a; a = a.nextSibling)
                                        if (a.nodeType == 1) {
                                            R(a, b) == d && c.push(a);
                                            if (!f) {
                                                var e = P(a, d, f, b);
                                                if (e.length)
                                                    c = c.concat(e)
                                            }
                                        }
                                    return c
                                }
                                function gb(a, c, d) {
                                    for (a = a?a.firstChild:h; a; a = a.nextSibling)
                                        if (a.nodeType == 1) {
                                            if (a.tagName == c)
                                                return a;
                                            if (!d) {
                                                var b = gb(a, c, d);
                                                if (b)
                                                    return b
                                            }
                                        }
                                }
                                d.Me = gb;
                                function ab(a, c, e) {
                                    var b = [];
                                    for (a = a?a.firstChild:h; a; a = a.nextSibling)
                                        if (a.nodeType == 1) {
                                            (!c || a.tagName == c) && b.push(a);
                                            if (!e) {
                                                var d = ab(a, c, e);
                                                if (d.length)
                                                    b = b.concat(d)
                                            }
                                        }
                                    return b
                                }
                                d.He = ab;
                                d.Ge = function (b, a) {
                                    return b.getElementsByTagName(a)
                                };
                                function U(c) {
                                    for (var b = 1; b < arguments.length; b++) {
                                        var a = arguments[b];
                                        if (a)
                                            for (var d in a)
                                                c[d] = a[d]
                                    }
                                    return c
                                }
                                d.q = U;
                                d.Kc = function (a) {
                                    return z(a) == "function"
                                };
                                d.Oe = function (a) {
                                    return z(a) == "array"
                                };
                                d.ae = function (a) {
                                    return z(a) == "string"
                                };
                                d.jc = function (a) {
                                    return!isNaN(n(a)) && isFinite(a)
                                };
                                d.f = j;
                                function O(a) {
                                    return g.createElement(a)
                                }
                                d.mb = function () {
                                    return O("DIV", g)
                                };
                                d.sc = function () {
                                };
                                function S(b, c, a) {
                                    if (a == i)
                                        return b.getAttribute(c);
                                    b.setAttribute(c, a)
                                }
                                function R(a, b) {
                                    return S(a, b) || S(a, "data-" + b)
                                }
                                d.ib = R;
                                function r(b, a) {
                                    if (a == i)
                                        return b.className;
                                    b.className = a
                                }
                                d.Cc = r;
                                d.Bc = function (a) {
                                    return a.parentNode
                                };
                                d.M = function (a) {
                                    d.V(a, "none")
                                };
                                d.C = function (a, b) {
                                    d.V(a, b ? "none" : "")
                                };
                                d.Ec = function (b, a) {
                                    b.removeAttribute(a)
                                };
                                d.Se = function () {
                                    return s() && l < 10
                                };
                                d.Re = function (d, c) {
                                    if (c)
                                        d.style.clip = "rect(" + b.round(c.c) + "px " + b.round(c.o) + "px " + b.round(c.n) + "px " + b.round(c.b) + "px)";
                                    else {
                                        var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = G(g, f, "");
                                        a.Ob(d, e)
                                    }
                                };
                                d.Y = function () {
                                    return+new Date
                                };
                                d.G = function (b, a) {
                                    b.appendChild(a)
                                };
                                d.Ub = function (c, b, a) {
                                    c.insertBefore(b, a)
                                };
                                d.Fb = function (b, a) {
                                    b.removeChild(a)
                                };
                                d.Pd = function (b, a) {
                                    j(a, function (a) {
                                        d.Fb(b, a)
                                    })
                                };
                                d.Qd = function (a) {
                                    d.Pd(a, d.gb(a))
                                };
                                function n(a) {
                                    return parseFloat(a)
                                }
                                d.Od = n;
                                d.Ze = function (b, a) {
                                    var c = g.body;
                                    while (a && b != a && c != a)
                                        try {
                                            a = a.parentNode
                                        } catch (d) {
                                            return e
                                        }
                                    return b == a
                                };
                                function T(e, c, b) {
                                    var a = e.cloneNode(!c);
                                    !b && d.Ec(a, "id");
                                    return a
                                }
                                d.P = T;
                                function M(a) {
                                    if (a) {
                                        var b = a.wf;
                                        if (b & 1)
                                            a.x = a.Rd || 1;
                                        if (b & 2)
                                            a.x = -a.Rd || -1;
                                        if (b & 4)
                                            a.y = a.Vd || 1;
                                        if (b & 8)
                                            a.y = -a.Vd || -1;
                                        if (a.r == c)
                                            a.r = 1;
                                        M(a.Mb)
                                    }
                                }
                                d.Mc = function (a) {
                                    if (a) {
                                        for (var b = 0; b < a.length; b++)
                                            M(a[b]);
                                        for (var c in a)
                                            M(a[c])
                                    }
                                };
                                d.ub = function (f, g) {
                                    var a = new Image;
                                    function b(c) {
                                        d.Kb(a, "load", b);
                                        d.Kb(a, "abort", e);
                                        d.Kb(a, "error", e);
                                        g && g(a, c)
                                    }
                                    function e() {
                                        b(c)
                                    }
                                    if (ib() && l < 11.6 || !f)
                                        b(!f);
                                    else {
                                        d.j(a, "load", b);
                                        d.j(a, "abort", e);
                                        d.j(a, "error", e);
                                        a.src = f
                                    }
                                };
                                d.Ud = function (e, a, f) {
                                    var c = e.length + 1;
                                    function b(b) {
                                        c--;
                                        if (a && b && b.src == a.src)
                                            a = b;
                                        !c && f && f(a)
                                    }
                                    j(e, function (a) {
                                        d.ub(a.src, b)
                                    });
                                    b()
                                };
                                d.Td = function (c, h, j, i) {
                                    if (i)
                                        c = T(c);
                                    var d = P(c, h);
                                    if (!d.length)
                                        d = a.Ge(c, h);
                                    for (var f = d.length - 1; f > -1; f--) {
                                        var b = d[f], e = T(j);
                                        r(e, r(b));
                                        a.Ob(e, b.style.cssText);
                                        var g = a.Bc(b);
                                        a.Ub(g, e, b);
                                        a.Fb(g, b)
                                    }
                                    return c
                                };
                                var C;
                                function xb(b) {
                                    var k = this, m, l, g, f;
                                    function h() {
                                        var a = m;
                                        if (f)
                                            a += "ds";
                                        else if (l)
                                            a += "dn";
                                        else if (g == 2)
                                            a += "pv";
                                        else if (g)
                                            a += "av";
                                        r(b, a)
                                    }
                                    function n(a) {
                                        if (f)
                                            d.nb(a);
                                        else {
                                            C.push(k);
                                            l = c;
                                            h()
                                        }
                                    }
                                    k.Ed = function () {
                                        l = e;
                                        h()
                                    };
                                    k.Cd = function (a) {
                                        if (a != i) {
                                            g = a;
                                            h()
                                        } else
                                            return g
                                    };
                                    k.Jc = function (a) {
                                        if (a != i) {
                                            f = !a;
                                            h()
                                        } else
                                            return!f
                                    };
                                    b = d.vb(b);
                                    if (!C) {
                                        d.lf(function () {
                                            var a = C;
                                            C = [];
                                            j(a, function (a) {
                                                a.Ed()
                                            })
                                        });
                                        C = []
                                    }
                                    m = r(b);
                                    a.j(b, "mousedown", n)
                                }
                                d.bc = function (a) {
                                    return new xb(a)
                                };
                                d.zb = E;
                                d.jb = o("overflow");
                                d.D = o("top", 2);
                                d.I = o("left", 2);
                                d.s = o("width", 2);
                                d.z = o("height", 2);
                                d.Uc = o("marginLeft", 2);
                                d.Rc = o("marginTop", 2);
                                d.K = o("position");
                                d.V = o("display");
                                d.X = o("zIndex", 1);
                                d.pb = function (b, a, c) {
                                    if (a != i)
                                        ub(b, a, c);
                                    else
                                        return tb(b)
                                };
                                d.Ob = function (a, b) {
                                    if (b != i)
                                        a.style.cssText = b;
                                    else
                                        return a.style.cssText
                                };
                                var Q = {a: d.pb, c: d.D, b: d.I, eb: d.s, fb: d.z, ob: d.K, tf: d.V, cb: d.X}, w;
                                function H() {
                                    if (!w)
                                        w = U({uf: d.Rc, vf: d.Uc, d: d.Re, kb: d.bf}, Q);
                                    return w
                                }
                                function kb() {
                                    H();
                                    w.kb = w.kb;
                                    return w
                                }
                                d.Ad = H;
                                d.L = function (c, b) {
                                    var a = H();
                                    j(b, function (d, b) {
                                        a[b] && a[b](c, d)
                                    })
                                };
                                d.Dd = function (b, a) {
                                    kb();
                                    d.L(b, a)
                                };
                                m = new function () {
                                    var a = this;
                                    function b(d, g) {
                                        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                                            for (var k = f[c] = [], b = 0; b < h; b++) {
                                                for (var e = 0, a = 0; a < j; a++)
                                                    e += d[c][a] * g[a][b];
                                                k[b] = e
                                            }
                                        return f
                                    }
                                    a.Nb = function (d, c) {
                                        var a = b(d, [[c.x], [c.y]]);
                                        return y(a[0][0], a[1][0])
                                    }
                                };
                                d.ge = function (d, a, c) {
                                    var e = b.cos(d), f = b.sin(d);
                                    return[[e * a, -f * c], [f * a, e * c]]
                                };
                                d.ie = function (d, c, a) {
                                    var e = m.Nb(d, y(-c / 2, -a / 2)), f = m.Nb(d, y(c / 2, -a / 2)), g = m.Nb(d, y(c / 2, a / 2)), h = m.Nb(d, y(-c / 2, a / 2));
                                    return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
                                };
                                d.kb = function (j, k, t, q, u, w, g) {
                                    var c = k;
                                    if (j) {
                                        c = {};
                                        for (var e in k) {
                                            var x = w[e] || 1, r = u[e] || [0, 1], d = (t - r[0]) / r[1];
                                            d = b.min(b.max(d, 0), 1);
                                            d = d * x;
                                            var o = b.floor(d);
                                            if (d != o)
                                                d -= o;
                                            var v = q[e] || q.Q, p = v(d), f, s = j[e], n = k[e];
                                            if (a.jc(n))
                                                f = s + (n - s) * p;
                                            else {
                                                f = a.q({J: {}}, j[e]);
                                                a.f(n.J, function (c, b) {
                                                    var a = c * p;
                                                    f.J[b] = a;
                                                    f[b] += a
                                                })
                                            }
                                            c[e] = f
                                        }
                                        if (j.m)
                                            c.kb = {r: c.r || 0, H: c.m, ab: g.ab, bb: g.bb}
                                    }
                                    if (k.d && g.Cb) {
                                        var i = c.d.J, m = (i.c || 0) + (i.n || 0), l = (i.b || 0) + (i.o || 0);
                                        c.b = (c.b || 0) + l;
                                        c.c = (c.c || 0) + m;
                                        c.d.b -= l;
                                        c.d.o -= l;
                                        c.d.c -= m;
                                        c.d.n -= m
                                    }
                                    if (c.d && a.Se() && !c.d.c && !c.d.b && c.d.o == g.ab && c.d.n == g.bb)
                                        c.d = h;
                                    return c
                                }
                            }, l = function () {
                                var b = this, d = [];
                                function i(a, b) {
                                    d.push({lc: a, ic: b})
                                }
                                function h(b, c) {
                                    a.f(d, function (a, e) {
                                        a.lc == b && a.ic === c && d.splice(e, 1)
                                    })
                                }
                                b.sb = b.addEventListener = i;
                                b.removeEventListener = h;
                                b.l = function (b) {
                                    var c = [].slice.call(arguments, 1);
                                    a.f(d, function (a) {
                                        try {
                                            a.lc == b && a.ic.apply(f, c)
                                        } catch (d) {
                                        }
                                    })
                                }
                            };
                            j = function (n, z, j, R, P, L) {
                                n = n || 0;
                                var g = this, r, o, p, x, A = 0, I, J, H, C, E = 0, l = 0, u = 0, D, m = n, k, i, q, y = [], B;
                                function M(a) {
                                    k += a;
                                    i += a;
                                    m += a;
                                    l += a;
                                    u += a;
                                    E = a
                                }
                                function Q(a, b) {
                                    var c = a - k + n * b;
                                    M(c);
                                    return i
                                }
                                function w(f, n) {
                                    var d = f;
                                    if (q && (d >= i || d <= k))
                                        d = ((d - k) % q + q) % q + k;
                                    if (!D || x || n || l != d) {
                                        var e = b.min(d, i);
                                        e = b.max(e, k);
                                        if (!D || x || n || e != u) {
                                            if (L) {
                                                var h = (e - m) / (z || 1);
                                                if (j.yc)
                                                    h = 1 - h;
                                                var o = a.kb(P, L, h, I, H, J, j);
                                                a.f(o, function (b, a) {
                                                    B[a] && B[a](R, b)
                                                })
                                            }
                                            g.Wb(u - m, e - m)
                                        }
                                        u = e;
                                        a.f(y, function (b, c) {
                                            var a = f < l ? y[y.length - c - 1] : b;
                                            a.R(f - E, n)
                                        });
                                        var r = l, p = f;
                                        l = d;
                                        D = c;
                                        g.Qb(r, p)
                                    }
                                }
                                function F(a, c, d) {
                                    c && a.jd(i, 1);
                                    !d && (i = b.max(i, a.xb() + E));
                                    y.push(a)
                                }
                                var s = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
                                if (a.ce() && a.S() < 7)
                                    s = h;
                                s = s || function (b) {
                                    a.v(b, j.U)
                                };
                                function K() {
                                    if (r) {
                                        var d = a.Y(), e = b.min(d - A, j.kd), c = l + e * p;
                                        A = d;
                                        if (c * p >= o * p)
                                            c = o;
                                        w(c);
                                        if (!x && c * p >= o * p)
                                            N(C);
                                        else
                                            s(K)
                                    }
                                }
                                function v(d, e, f) {
                                    if (!r) {
                                        r = c;
                                        x = f;
                                        C = e;
                                        d = b.max(d, k);
                                        d = b.min(d, i);
                                        o = d;
                                        p = o < l ? -1 : 1;
                                        g.id();
                                        A = a.Y();
                                        s(K)
                                    }
                                }
                                function N(a) {
                                    if (r) {
                                        x = r = C = e;
                                        g.ed();
                                        a && a()
                                    }
                                }
                                g.dd = function (a, b, c) {
                                    v(a ? l + a : i, b, c)
                                };
                                g.md = v;
                                g.Z = N;
                                g.Hd = function (a) {
                                    v(a)
                                };
                                g.T = function () {
                                    return l
                                };
                                g.zc = function () {
                                    return o
                                };
                                g.wb = function () {
                                    return u
                                };
                                g.R = w;
                                g.Ac = function () {
                                    w(k, c)
                                };
                                g.Cb = function (a) {
                                    w(l + a)
                                };
                                g.Hc = function () {
                                    return r
                                };
                                g.ef = function (a) {
                                    q = a
                                };
                                g.jd = Q;
                                g.hc = M;
                                g.pc = function (a) {
                                    F(a, 0)
                                };
                                g.fc = function (a) {
                                    F(a, 1)
                                };
                                g.xb = function () {
                                    return i
                                };
                                g.Qb = g.id = g.ed = g.Wb = a.sc;
                                g.gc = a.Y();
                                j = a.q({U: 16, kd: 50}, j);
                                q = j.Zc;
                                B = a.q({}, a.Ad(), j.bd);
                                k = m = n;
                                i = n + z;
                                J = j.rb || {};
                                H = j.t || {};
                                I = a.q({Q: a.Kc(j.e) && j.e || d.mc}, j.e)
                            };
                            var p, k = {}, q;
                            new function () {
                                ;
                                function x(b, a, c) {
                                    c.push(a);
                                    b[a] = b[a] || [];
                                    b[a].push(c)
                                }
                                k.ud = function (d) {
                                    for (var e = [], a, c = 0; c < d.A; c++)
                                        for (a = 0; a < d.B; a++)
                                            x(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
                                    return e
                                };
                                function Q(a) {
                                    var b = a.zd(a);
                                    return a.yc ? b.reverse() : b
                                }
                                function K(h, g) {
                                    var f = {U: g, g: 1, v: 0, B: 1, A: 1, a: 0, m: 0, d: 0, Cb: e, p: e, yc: e, zd: k.ud, u: {W: 0, O: 0}, e: d.mc, rb: {}, Bb: [], t: {}};
                                    a.q(f, h);
                                    if (a.Kc(f.e))
                                        f.e = {Q: f.e};
                                    f.Qc = b.ceil(f.g / f.U);
                                    f.Oc = R(f);
                                    f.Sd = function (b, a) {
                                        b /= f.B;
                                        a /= f.A;
                                        var e = b + "x" + a;
                                        if (!f.Bb[e]) {
                                            f.Bb[e] = {eb: b, fb: a};
                                            for (var c = 0; c < f.B; c++)
                                                for (var d = 0; d < f.A; d++)
                                                    f.Bb[e][d + "," + c] = {c: d * a, o: c * b + b, n: d * a + a, b: c * b}
                                        }
                                        return f.Bb[e]
                                    };
                                    if (f.Mb) {
                                        f.Mb = K(f.Mb, g);
                                        f.p = c
                                    }
                                    return f
                                }
                                function R(e) {
                                    var c = e.e;
                                    if (!c.Q)
                                        c.Q = d.mc;
                                    var f = e.Qc, g = c.yb;
                                    if (!g) {
                                        var h = a.q({}, e.e, e.rb);
                                        g = c.yb = {};
                                        a.f(h, function (n, l) {
                                            var d = c[l] || c.Q, j = e.rb[l] || 1;
                                            if (!a.Oe(d.yb))
                                                d.yb = [];
                                            var h = d.yb[f] = d.yb[f] || [];
                                            if (!h[j]) {
                                                h[j] = [0];
                                                for (var k = 1; k <= f; k++) {
                                                    var i = k / f * j, m = b.floor(i);
                                                    if (i != m)
                                                        i -= m;
                                                    h[j][k] = d(i)
                                                }
                                            }
                                            g[l] = h
                                        })
                                    }
                                    return g
                                }
                                function L(C, i, d, x, n, k) {
                                    var A = this, u, v = {}, m = {}, l = [], g, f, s, q = d.u.W || 0, r = d.u.O || 0, h = d.Sd(n, k), p = Q(d), D = p.length - 1, t = d.g + d.v * D, y = x + t, j = d.p, z;
                                    y += a.Eb() ? 260 : 50;
                                    A.qd = y;
                                    A.Jb = function (c) {
                                        c -= x;
                                        var e = c < t;
                                        if (e || z) {
                                            z = e;
                                            if (!j)
                                                c = t - c;
                                            var f = b.ceil(c / d.U);
                                            a.f(m, function (c, e) {
                                                var d = b.max(f, c.Bd);
                                                d = b.min(d, c.length - 1);
                                                if (c.nd != d) {
                                                    if (!c.nd && !j)
                                                        a.C(l[e]);
                                                    else
                                                        d == c.of && j && a.M(l[e]);
                                                    c.nd = d;
                                                    a.Dd(l[e], c[d])
                                                }
                                            })
                                        }
                                    };
                                    function w(b) {
                                        a.Xe(b);
                                        var c = a.gb(b);
                                        a.f(c, function (a) {
                                            w(a)
                                        })
                                    }
                                    i = a.P(i);
                                    w(i);
                                    if (a.db()) {
                                        var E = !i["no-image"], B = a.He(i);
                                        a.f(B, function (b) {
                                            (E || b["jssor-slider"]) && a.pb(b, a.pb(b), c)
                                        })
                                    }
                                    a.f(p, function (i, l) {
                                        a.f(i, function (K) {
                                            var O = K[0], N = K[1], y = O + "," + N, t = e, w = e, z = e;
                                            if (q && N % 2) {
                                                if (o.sd(q))
                                                    t = !t;
                                                if (o.pd(q))
                                                    w = !w;
                                                if (q & 16)
                                                    z = !z
                                            }
                                            if (r && O % 2) {
                                                if (o.sd(r))
                                                    t = !t;
                                                if (o.pd(r))
                                                    w = !w;
                                                if (r & 16)
                                                    z = !z
                                            }
                                            d.c = d.c || d.d & 4;
                                            d.n = d.n || d.d & 8;
                                            d.b = d.b || d.d & 1;
                                            d.o = d.o || d.d & 2;
                                            var F = w ? d.n : d.c, C = w ? d.c : d.n, E = t ? d.o : d.b, D = t ? d.b : d.o;
                                            d.d = F || C || E || D;
                                            s = {};
                                            f = {c: 0, b: 0, a: 1, eb: n, fb: k};
                                            g = a.q({}, f);
                                            u = a.q({}, h[y]);
                                            if (d.a)
                                                f.a = 2 - d.a;
                                            if (d.cb) {
                                                f.cb = d.cb;
                                                g.cb = 0
                                            }
                                            var M = d.B * d.A > 1 || d.d;
                                            if (d.m || d.r) {
                                                var L = c;
                                                if (a.Ib() && a.de() < 9)
                                                    if (d.B * d.A > 1)
                                                        L = e;
                                                    else
                                                        M = e;
                                                if (L) {
                                                    f.m = d.m ? d.m - 1 : 1;
                                                    g.m = 1;
                                                    if (a.db() || a.rd())
                                                        f.m = b.min(f.m, 2);
                                                    var R = d.r;
                                                    f.r = R * 360 * (z ? -1 : 1);
                                                    g.r = 0
                                                }
                                            }
                                            if (M) {
                                                if (d.d) {
                                                    var x = d.pf || 1, p = u.J = {};
                                                    if (F && C) {
                                                        p.c = h.fb / 2 * x;
                                                        p.n = -p.c
                                                    } else if (F)
                                                        p.n = -h.fb * x;
                                                    else if (C)
                                                        p.c = h.fb * x;
                                                    if (E && D) {
                                                        p.b = h.eb / 2 * x;
                                                        p.o = -p.b
                                                    } else if (E)
                                                        p.o = -h.eb * x;
                                                    else if (D)
                                                        p.b = h.eb * x
                                                }
                                                s.d = u;
                                                g.d = h[y]
                                            }
                                            var P = t ? 1 : -1, Q = w ? 1 : -1;
                                            if (d.x)
                                                f.b += n * d.x * P;
                                            if (d.y)
                                                f.c += k * d.y * Q;
                                            a.f(f, function (b, c) {
                                                if (a.jc(b))
                                                    if (b != g[c])
                                                        s[c] = b - g[c]
                                            });
                                            v[y] = j ? g : f;
                                            var J = b.round(l * d.v / d.U);
                                            m[y] = new Array(J);
                                            m[y].Bd = J;
                                            for (var B = d.Qc, I = 0; I <= B; I++) {
                                                var i = {};
                                                a.f(s, function (f, c) {
                                                    var m = d.Oc[c] || d.Oc.Q, l = m[d.rb[c] || 1], k = d.t[c] || [0, 1], e = (I / B - k[0]) / k[1] * B;
                                                    e = b.round(b.min(B, b.max(e, 0)));
                                                    var j = l[e];
                                                    if (a.jc(f))
                                                        i[c] = g[c] + f * j;
                                                    else {
                                                        var h = i[c] = a.q({}, g[c]);
                                                        h.J = [];
                                                        a.f(f.J, function (c, b) {
                                                            var a = c * j;
                                                            h.J[b] = a;
                                                            h[b] += a
                                                        })
                                                    }
                                                });
                                                if (g.m)
                                                    i.kb = {r: i.r || 0, H: i.m, ab: n, bb: k};
                                                if (i.d && d.Cb) {
                                                    var A = i.d.J, H = (A.c || 0) + (A.n || 0), G = (A.b || 0) + (A.o || 0);
                                                    i.b = (i.b || 0) + G;
                                                    i.c = (i.c || 0) + H;
                                                    i.d.b -= G;
                                                    i.d.o -= G;
                                                    i.d.c -= H;
                                                    i.d.n -= H
                                                }
                                                i.cb = i.cb || 1;
                                                m[y].push(i)
                                            }
                                        })
                                    });
                                    p.reverse();
                                    a.f(p, function (b) {
                                        a.f(b, function (c) {
                                            var f = c[0], e = c[1], d = f + "," + e, b = i;
                                            if (e || f)
                                                b = a.P(i);
                                            a.L(b, v[d]);
                                            a.jb(b, "hidden");
                                            a.K(b, "absolute");
                                            C.Fd(b);
                                            l[d] = b;
                                            a.C(b, !j)
                                        })
                                    })
                                }
                                q = function (g, m, i, n, p) {
                                    var d = this, o, e, c, s = 0, r = n.Nd, k, f = 8;
                                    function q() {
                                        var a = this, b = 0;
                                        j.call(a, 0, o);
                                        a.Qb = function (d, a) {
                                            if (a - b > f) {
                                                b = a;
                                                c && c.Jb(a);
                                                e && e.Jb(a)
                                            }
                                        };
                                        a.Lc = k
                                    }
                                    d.yd = function () {
                                        var a = 0, c = n.qc, d = c.length;
                                        if (r)
                                            a = s++ % d;
                                        else
                                            a = b.floor(b.random() * d);
                                        c[a] && (c[a].hb = a);
                                        return c[a]
                                    };
                                    d.Pe = function (w, x, n, p, a) {
                                        k = a;
                                        a = K(a, f);
                                        var l = p.Fc, j = n.Fc;
                                        l["no-image"] = !p.Pb;
                                        j["no-image"] = !n.Pb;
                                        var q = l, r = j, v = a, h = a.Mb || K({}, f);
                                        if (!a.p) {
                                            q = j;
                                            r = l
                                        }
                                        var s = h.hc || 0;
                                        e = new L(g, r, h, b.max(s - h.U, 0), m, i);
                                        c = new L(g, q, v, b.max(h.U - s, 0), m, i);
                                        e.Jb(0);
                                        c.Jb(0);
                                        o = b.max(e.qd, c.qd);
                                        d.hb = w
                                    };
                                    d.tb = function () {
                                        g.tb();
                                        e = h;
                                        c = h
                                    };
                                    d.xd = function () {
                                        var a = h;
                                        if (c)
                                            a = new q;
                                        return a
                                    };
                                    if (a.db() || a.rd() || p && a.ac() < 537)
                                        f = 16;
                                    l.call(d);
                                    j.call(d, -1e7, 1e7)
                                };
                                function m(p, lc) {
                                    var k = this;
                                    function Hc() {
                                        var a = this;
                                        j.call(a, -1e8, 2e8);
                                        a.Ve = function () {
                                            var c = a.wb(), d = b.floor(c), f = u(d), e = c - b.floor(c);
                                            return{hb: f, Te: d, ob: e}
                                        };
                                        a.Qb = function (d, a) {
                                            var e = b.floor(a);
                                            if (e != a && a > d)
                                                e++;
                                            Yb(e, c);
                                            k.l(m.Ue, u(a), u(d), a, d)
                                        }
                                    }
                                    function Gc() {
                                        var b = this;
                                        j.call(b, 0, 0, {Zc: s});
                                        a.f(D, function (a) {
                                            H & 1 && a.ef(s);
                                            b.fc(a);
                                            a.hc(mb / fc)
                                        })
                                    }
                                    function Fc() {
                                        var a = this, b = Xb.Gb;
                                        j.call(a, -1, 2, {e: d.i, bd: {ob: dc}, Zc: s}, b, {ob: 1}, {ob: -1});
                                        a.Ab = b
                                    }
                                    function uc(n, l) {
                                        var a = this, d, f, g, i, b;
                                        j.call(a, -1e8, 2e8, {kd: 100});
                                        a.id = function () {
                                            S = c;
                                            Y = h;
                                            k.l(m.Ie, u(y.T()), y.T())
                                        };
                                        a.ed = function () {
                                            S = e;
                                            i = e;
                                            var a = y.Ve();
                                            k.l(m.Je, u(y.T()), y.T());
                                            !a.ob && Jc(a.Te, q)
                                        };
                                        a.Qb = function (h, e) {
                                            var a;
                                            if (i)
                                                a = b;
                                            else {
                                                a = f;
                                                if (g) {
                                                    var c = e / g;
                                                    a = o.Ne(c) * (f - d) + d
                                                }
                                            }
                                            y.R(a)
                                        };
                                        a.Lb = function (b, e, c, h) {
                                            d = b;
                                            f = e;
                                            g = c;
                                            y.R(b);
                                            a.R(0);
                                            a.md(c, h)
                                        };
                                        a.Le = function (d) {
                                            i = c;
                                            b = d;
                                            a.dd(d, h, c)
                                        };
                                        a.ff = function (a) {
                                            b = a
                                        };
                                        y = new Hc;
                                        y.pc(n);
                                        y.pc(l)
                                    }
                                    function vc() {
                                        var c = this, b = cc();
                                        a.X(b, 0);
                                        a.zb(b, "pointerEvents", "none");
                                        c.Gb = b;
                                        c.Fd = function (c) {
                                            a.G(b, c);
                                            a.C(b)
                                        };
                                        c.tb = function () {
                                            a.M(b);
                                            a.hf(b)
                                        }
                                    }
                                    function Ec(p, n) {
                                        var d = this, t, x, H, y, f, A = [], Q, r, S, G, O, F, g, w, i;
                                        j.call(d, -v, v + 1, {});
                                        function E(a) {
                                            x && x.Vb();
                                            t && t.Vb();
                                            R(p, a);
                                            F = c;
                                            t = new J.E(p, J, 1);
                                            x = new J.E(p, J);
                                            x.Ac();
                                            t.Ac()
                                        }
                                        function Z() {
                                            t.gc < J.gc && E()
                                        }
                                        function I(n, q, l) {
                                            if (!G) {
                                                G = c;
                                                if (f && l) {
                                                    var g = l.width, b = l.height, j = g, i = b;
                                                    if (g && b && o.qb) {
                                                        if (o.qb & 3 && (!(o.qb & 4) || g > M || b > L)) {
                                                            var h = e, p = M / L * b / g;
                                                            if (o.qb & 1)
                                                                h = p > 1;
                                                            else if (o.qb & 2)
                                                                h = p < 1;
                                                            j = h ? g * L / b : M;
                                                            i = h ? L : b * M / g
                                                        }
                                                        a.s(f, j);
                                                        a.z(f, i);
                                                        a.D(f, (L - i) / 2);
                                                        a.I(f, (M - j) / 2)
                                                    }
                                                    a.K(f, "absolute");
                                                    k.l(m.mf, ic)
                                                }
                                            }
                                            a.M(q);
                                            n && n(d)
                                        }
                                        function W(b, c, e, f) {
                                            if (f == Y && q == n && T)
                                                if (!Ic) {
                                                    var a = u(b);
                                                    B.Pe(a, n, c, d, e);
                                                    c.jf();
                                                    fb.jd(a, 1);
                                                    fb.R(a);
                                                    z.Lb(b, b, 0)
                                                }
                                        }
                                        function ab(b) {
                                            if (b == Y && q == n) {
                                                if (!g) {
                                                    var a = h;
                                                    if (B)
                                                        if (B.hb == n)
                                                            a = B.xd();
                                                        else
                                                            B.tb();
                                                    Z();
                                                    g = new Cc(p, n, a, d.kf(), d.fe());
                                                    g.od(i)
                                                }
                                                !g.Hc() && g.Zb()
                                            }
                                        }
                                        function P(e, c, k) {
                                            if (e == n) {
                                                if (e != c)
                                                    D[c] && D[c].Xd();
                                                else
                                                    !k && g && g.be();
                                                i && i.Jc();
                                                var l = Y = a.Y();
                                                d.ub(a.lb(h, ab, l))
                                            } else {
                                                var j = b.abs(n - e), f = v + o.oe;
                                                (!O || j <= f || s - j <= f) && d.ub()
                                            }
                                        }
                                        function bb() {
                                            if (q == n && g) {
                                                g.Z();
                                                i && i.Ae();
                                                i && i.Be();
                                                g.Nc()
                                            }
                                        }
                                        function cb() {
                                            q == n && g && g.Z()
                                        }
                                        function N(b) {
                                            if (V)
                                                a.nb(b);
                                            else
                                                k.l(m.ye, n, b)
                                        }
                                        function K() {
                                            i = w.pInstance;
                                            g && g.od(i)
                                        }
                                        d.ub = function (d, b) {
                                            b = b || y;
                                            if (A.length && !G) {
                                                a.C(b);
                                                if (!S) {
                                                    S = c;
                                                    k.l(m.ze);
                                                    a.f(A, function (b) {
                                                        if (!b.src) {
                                                            b.src = a.ib(b, "src2");
                                                            a.V(b, b["display-origin"])
                                                        }
                                                    })
                                                }
                                                a.Ud(A, f, a.lb(h, I, d, b))
                                            } else
                                                I(d, b)
                                        };
                                        d.Ee = function () {
                                            if (B) {
                                                var b = B.yd(s);
                                                if (b) {
                                                    var e = Y = a.Y(), c = n + bc, d = D[u(c)];
                                                    return d.ub(a.lb(h, W, c, d, b, e), y)
                                                }
                                            }
                                            gb(q + o.Fe * bc)
                                        };
                                        d.rc = function () {
                                            P(n, n, c)
                                        };
                                        d.Xd = function () {
                                            i && i.Ae();
                                            i && i.Be();
                                            d.cd();
                                            g && g.Ce();
                                            g = h;
                                            E()
                                        };
                                        d.jf = function () {
                                            a.M(p)
                                        };
                                        d.cd = function () {
                                            a.C(p)
                                        };
                                        d.De = function () {
                                            i && i.Jc()
                                        };
                                        function R(b, g, d) {
                                            if (b["jssor-slider"])
                                                return;
                                            d = d || 0;
                                            if (!F) {
                                                if (b.tagName == "IMG") {
                                                    A.push(b);
                                                    if (!b.src) {
                                                        O = c;
                                                        b["display-origin"] = a.V(b);
                                                        a.M(b)
                                                    }
                                                }
                                                a.db() && a.X(b, (a.X(b) || 0) + 1);
                                                if (o.Yc && a.ac())
                                                    (!X || a.ac() < 534 || !kb && !a.Eb()) && a.cf(b)
                                            }
                                            var h = a.gb(b);
                                            a.f(h, function (h) {
                                                var j = a.ib(h, "u");
                                                if (j == "player" && !w) {
                                                    w = h;
                                                    if (w.pInstance)
                                                        K();
                                                    else
                                                        a.j(w, "dataavailable", K)
                                                }
                                                if (j == "caption") {
                                                    if (!a.Ib() && !g) {
                                                        var i = a.P(h, e, c);
                                                        a.Ub(b, i, h);
                                                        a.Fb(b, h);
                                                        h = i;
                                                        g = c
                                                    }
                                                } else if (!F && !d && !f && a.ib(h, "u") == "image") {
                                                    f = h;
                                                    if (f) {
                                                        if (f.tagName == "A") {
                                                            Q = f;
                                                            a.L(Q, U);
                                                            r = a.P(f, c);
                                                            a.j(r, "click", N);
                                                            a.L(r, U);
                                                            a.V(r, "block");
                                                            a.pb(r, 0);
                                                            a.zb(r, "backgroundColor", "#000");
                                                            f = a.Me(f, "IMG")
                                                        }
                                                        f.border = 0;
                                                        a.L(f, U)
                                                    }
                                                }
                                                R(h, g, d + 1)
                                            })
                                        }
                                        d.Wb = function (c, b) {
                                            var a = v - b;
                                            dc(H, a)
                                        };
                                        d.kf = function () {
                                            return t
                                        };
                                        d.fe = function () {
                                            return x
                                        };
                                        d.hb = n;
                                        l.call(d);
                                        var C = a.F(p, "thumb", c);
                                        if (C) {
                                            d.xe = a.P(C);
                                            a.Ec(C, "id");
                                            a.M(C)
                                        }
                                        a.C(p);
                                        y = a.P(jb);
                                        a.X(y, 1e3);
                                        a.j(p, "click", N);
                                        E(c);
                                        d.Pb = f;
                                        d.Xc = r;
                                        d.Fc = p;
                                        d.Ab = H = p;
                                        a.G(H, y);
                                        k.sb(203, P);
                                        k.sb(28, cb);
                                        k.sb(24, bb)
                                    }
                                    function Cc(F, h, r, v, u) {
                                        var b = this, l = 0, x = 0, n, g, d, f, i, s, w, t, p = D[h];
                                        j.call(b, 0, 0);
                                        function y() {
                                            a.Qd(P);
                                            jc && i && p.Xc && a.G(P, p.Xc);
                                            a.C(P, !i && p.Pb)
                                        }
                                        function z() {
                                            if (s) {
                                                s = e;
                                                k.l(m.re, h, d, l, g, d, f);
                                                b.R(g)
                                            }
                                            b.Zb()
                                        }
                                        function A(a) {
                                            t = a;
                                            b.Z();
                                            b.Zb()
                                        }
                                        b.Zb = function () {
                                            var a = b.wb();
                                            if (!C && !S && !t && q == h) {
                                                if (!a) {
                                                    if (n && !i) {
                                                        i = c;
                                                        b.Nc(c);
                                                        k.l(m.se, h, l, x, n, f)
                                                    }
                                                    y()
                                                }
                                                var e, o = m.Sc;
                                                if (a != f)
                                                    if (a == d)
                                                        e = f;
                                                    else if (a == g)
                                                        e = d;
                                                    else if (!a)
                                                        e = g;
                                                    else if (a > d) {
                                                        s = c;
                                                        e = d;
                                                        o = m.pe
                                                    } else
                                                        e = b.zc();
                                                k.l(o, h, a, l, g, d, f);
                                                var j = T && (!K || G);
                                                if (a == f)
                                                    (d != f && !(K & 12) || j) && p.Ee();
                                                else
                                                    (j || a != d) && b.md(e, z)
                                            }
                                        };
                                        b.be = function () {
                                            d == f && d == b.wb() && b.R(g)
                                        };
                                        b.Ce = function () {
                                            B && B.hb == h && B.tb();
                                            var a = b.wb();
                                            a < f && k.l(m.Sc, h, -a - 1, l, g, d, f)
                                        };
                                        b.Nc = function (b) {
                                            r && a.jb(ob, b && r.Lc.N ? "" : "hidden")
                                        };
                                        b.Wb = function (b, a) {
                                            if (i && a >= n) {
                                                i = e;
                                                y();
                                                p.cd();
                                                B.tb();
                                                k.l(m.qe, h, l, x, n, f)
                                            }
                                            k.l(m.we, h, a, l, g, d, f)
                                        };
                                        b.od = function (a) {
                                            if (a && !w) {
                                                w = a;
                                                a.sb($JssorPlayer$.je, A)
                                            }
                                        };
                                        r && b.fc(r);
                                        n = b.xb();
                                        b.xb();
                                        b.fc(v);
                                        g = v.xb();
                                        d = g + (a.Od(a.ib(F, "idle")) || o.Wc);
                                        u.hc(d);
                                        b.pc(u);
                                        f = b.xb()
                                    }
                                    function dc(e, g) {
                                        var f = w > 0 ? w : nb, c = Fb * g * (f & 1), d = Gb * g * (f >> 1 & 1);
                                        if (a.Eb() && a.S() < 38) {
                                            c = c.toFixed(3);
                                            d = d.toFixed(3)
                                        } else {
                                            c = b.round(c);
                                            d = b.round(d)
                                        }
                                        if (a.Ib() && a.S() >= 10 && a.S() < 11)
                                            e.style.msTransform = "translate(" + c + "px, " + d + "px)";
                                        else if (a.Eb() && a.S() >= 30 && a.S() < 34) {
                                            e.style.WebkitTransition = "transform 0s";
                                            e.style.WebkitTransform = "translate3d(" + c + "px, " + d + "px, 0px) perspective(2000px)"
                                        } else {
                                            a.I(e, c);
                                            a.D(e, d)
                                        }
                                    }
                                    function Ac(c) {
                                        var b = a.Zd(c).tagName;
                                        !N && b != "INPUT" && b != "TEXTAREA" && b != "SELECT" && yc() && zc(c)
                                    }
                                    function Tb() {
                                        vb = S;
                                        Pb = z.zc();
                                        E = y.T()
                                    }
                                    function mc() {
                                        Tb();
                                        if (C || !G && K & 12) {
                                            z.Z();
                                            k.l(m.te)
                                        }
                                    }
                                    function kc(e) {
                                        e && Tb();
                                        if (!C && (G || !(K & 12)) && !z.Hc()) {
                                            var c = y.T(), a = b.ceil(E);
                                            if (e && b.abs(F) >= o.ad) {
                                                a = b.ceil(c);
                                                a += lb
                                            }
                                            if (!(H & 1))
                                                a = b.min(s - v, b.max(a, 0));
                                            var d = b.abs(a - c);
                                            d = 1 - b.pow(1 - d, 5);
                                            if (!V && vb)
                                                z.Hd(Pb);
                                            else if (c == a) {
                                                yb.De();
                                                yb.rc()
                                            } else
                                                z.Lb(c, a, d * Zb)
                                        }
                                    }
                                    function zc(b) {
                                        C = c;
                                        Eb = e;
                                        Y = h;
                                        a.j(g, tb, gc);
                                        a.Y();
                                        V = 0;
                                        mc();
                                        if (!vb)
                                            w = 0;
                                        if (hb) {
                                            var f = b.touches[0];
                                            zb = f.clientX;
                                            Ab = f.clientY
                                        } else {
                                            var d = a.hd(b);
                                            zb = d.x;
                                            Ab = d.y;
                                            a.nb(b)
                                        }
                                        F = 0;
                                        ib = 0;
                                        lb = 0;
                                        k.l(m.ue, u(E), E, b)
                                    }
                                    function gc(e) {
                                        if (C && (!a.db() || e.button)) {
                                            var f;
                                            if (hb) {
                                                var l = e.touches;
                                                if (l && l.length > 0)
                                                    f = {x: l[0].clientX, y: l[0].clientY}
                                            } else
                                                f = a.hd(e);
                                            if (f) {
                                                var j = f.x - zb, k = f.y - Ab;
                                                if (b.floor(E) != E)
                                                    w = w || nb & N;
                                                if ((j || k) && !w) {
                                                    if (N == 3)
                                                        if (b.abs(k) > b.abs(j))
                                                            w = 2;
                                                        else
                                                            w = 1;
                                                    else
                                                        w = N;
                                                    if (X && w == 1 && b.abs(k) - b.abs(j) > 3)
                                                        Eb = c
                                                }
                                                if (w) {
                                                    var d = k, i = Gb;
                                                    if (w == 1) {
                                                        d = j;
                                                        i = Fb
                                                    }
                                                    if (!(H & 1)) {
                                                        if (d > 0) {
                                                            var g = i * q, h = d - g;
                                                            if (h > 0)
                                                                d = g + b.sqrt(h) * 5
                                                        }
                                                        if (d < 0) {
                                                            var g = i * (s - v - q), h = -d - g;
                                                            if (h > 0)
                                                                d = -g - b.sqrt(h) * 5
                                                        }
                                                    }
                                                    if (F - ib < -2)
                                                        lb = 0;
                                                    else if (F - ib > 2)
                                                        lb = -1;
                                                    ib = F;
                                                    F = d;
                                                    xb = E - F / i / (eb || 1);
                                                    if (F && w && !Eb) {
                                                        a.nb(e);
                                                        if (!S)
                                                            z.Le(xb);
                                                        else
                                                            z.ff(xb)
                                                    } else
                                                        a.db() && a.nb(e)
                                                }
                                            }
                                        } else
                                            Jb(e)
                                    }
                                    function Jb(d) {
                                        wc();
                                        if (C) {
                                            C = e;
                                            a.Y();
                                            a.Kb(g, tb, gc);
                                            V = F;
                                            V && a.nb(d);
                                            z.Z();
                                            var b = y.T();
                                            k.l(m.ee, u(b), b, u(E), E, d);
                                            kc(c)
                                        }
                                    }
                                    function tc(a) {
                                        D[q];
                                        q = u(a);
                                        yb = D[q];
                                        Yb(a);
                                        return q
                                    }
                                    function Jc(a, b) {
                                        w = 0;
                                        tc(a);
                                        k.l(m.ke, u(a), b)
                                    }
                                    function Yb(b, c) {
                                        Cb = b;
                                        a.f(R, function (a) {
                                            a.oc(u(b), b, c)
                                        })
                                    }
                                    function yc() {
                                        var b = m.Vc || 0, a = Q;
                                        if (X)
                                            a & 1 && (a &= 1);
                                        m.Vc |= a;
                                        return N = a & ~b
                                    }
                                    function wc() {
                                        if (N) {
                                            m.Vc &= ~Q;
                                            N = 0
                                        }
                                    }
                                    function cc() {
                                        var b = a.mb();
                                        a.L(b, U);
                                        a.K(b, "absolute");
                                        return b
                                    }
                                    function u(a) {
                                        return(a % s + s) % s
                                    }
                                    function qc(a, c) {
                                        if (c)
                                            if (!H) {
                                                a = b.min(b.max(a + Cb, 0), s - v);
                                                c = e
                                            } else if (H & 2) {
                                                a = u(a + Cb);
                                                c = e
                                            }
                                        gb(a, o.Rb, c)
                                    }
                                    function Db() {
                                        a.f(R, function (a) {
                                            a.tc(a.Tb.Tc <= G)
                                        })
                                    }
                                    function oc() {
                                        if (!G) {
                                            G = 1;
                                            Db();
                                            if (!C) {
                                                K & 12 && kc();
                                                K & 3 && D[q].rc()
                                            }
                                        }
                                    }
                                    function nc() {
                                        if (G) {
                                            G = 0;
                                            Db();
                                            C || !(K & 12) || mc()
                                        }
                                    }
                                    function pc() {
                                        U = {eb: M, fb: L, c: 0, b: 0};
                                        a.f(Z, function (b) {
                                            a.L(b, U);
                                            a.K(b, "absolute");
                                            a.jb(b, "hidden");
                                            a.M(b)
                                        });
                                        a.L(jb, U)
                                    }
                                    function rb(b, a) {
                                        gb(b, a, c)
                                    }
                                    function gb(g, f, k) {
                                        if (Vb && (!C || o.fd)) {
                                            S = c;
                                            C = e;
                                            z.Z();
                                            if (f == i)
                                                f = Zb;
                                            var d = Kb.wb(), a = g;
                                            if (k) {
                                                a = d + g;
                                                if (g > 0)
                                                    a = b.ceil(a);
                                                else
                                                    a = b.floor(a)
                                            }
                                            if (!H)
                                                a = b.max(0, b.min(a, s - v));
                                            else if (H & 2)
                                                a = u(a);
                                            var j = (a - d) % s;
                                            a = d + j;
                                            var h = d == a ? 0 : f * b.abs(j);
                                            h = b.min(h, f * v * 1.5);
                                            z.Lb(d, a, h || 1)
                                        }
                                    }
                                    k.me = gb;
                                    k.dd = function () {
                                        if (!T) {
                                            T = c;
                                            D[q] && D[q].rc()
                                        }
                                    };
                                    k.Yd = function () {
                                        return V
                                    };
                                    function db() {
                                        return a.s(x || p)
                                    }
                                    function pb() {
                                        return a.z(x || p)
                                    }
                                    k.ab = db;
                                    k.bb = pb;
                                    function Mb(c, d) {
                                        if (c == i)
                                            return a.s(p);
                                        if (!x) {
                                            var b = a.mb(g);
                                            a.Cc(b, a.Cc(p));
                                            a.Ob(b, a.Ob(p));
                                            a.V(b, "block");
                                            a.K(b, "relative");
                                            a.D(b, 0);
                                            a.I(b, 0);
                                            a.jb(b, "visible");
                                            x = a.mb(g);
                                            a.K(x, "absolute");
                                            a.D(x, 0);
                                            a.I(x, 0);
                                            a.s(x, a.s(p));
                                            a.z(x, a.z(p));
                                            a.af(x, "0 0");
                                            a.G(x, b);
                                            var k = a.gb(p);
                                            a.G(p, x);
                                            a.zb(p, "backgroundImage", "");
                                            var j = {navigator: bb && bb.H == e, arrowleft: O && O.H == e, arrowright: O && O.H == e, thumbnavigator: I && I.H == e, thumbwrapper: I && I.H == e};
                                            a.f(k, function (c) {
                                                a.G(j[a.ib(c, "u")] ? p : b, c)
                                            })
                                        }
                                        eb = c / (d ? a.z : a.s)(x);
                                        a.df(x, eb);
                                        var h = d ? eb * db() : c, f = d ? c : eb * pb();
                                        a.s(p, h);
                                        a.z(p, f);
                                        a.f(R, function (a) {
                                            a.Yb(h, f)
                                        })
                                    }
                                    k.Ye = Mb;
                                    k.Ic = function (a) {
                                        var d = b.ceil(u(mb / fc)), c = u(a - q + d);
                                        if (c > v) {
                                            if (a - q > s / 2)
                                                a -= s;
                                            else if (a - q <= -s / 2)
                                                a += s
                                        } else
                                            a = q + c - d;
                                        return a
                                    };
                                    l.call(k);
                                    k.Gb = p = a.vb(p);
                                    var o = a.q({qb: 0, oe: 1, Xb: 0, wc: e, Ke: 1, Yc: c, fd: c, Fe: 1, Wc: 3e3, xc: 1, Rb: 500, Ne: d.Wd, ad: 20, Dc: 0, Sb: 1, Gc: 0, Qe: 1, dc: 1, cc: 1}, lc), nb = o.dc & 3, bc = (o.dc & 4) / -4 || 1, cb = o.he, J = a.q({E: t}, o.sf);
                                    a.Mc(J.gf);
                                    var bb = o.rf, O = o.wd, I = o.Md, W = !o.Qe, x, A = a.F(p, "slides", W), jb = a.F(p, "loading", W) || a.mb(g), Ob = a.F(p, "navigator", W), hc = a.F(p, "arrowleft", W), ec = a.F(p, "arrowright", W), Nb = a.F(p, "thumbnavigator", W), sc = a.s(A), rc = a.z(A), U, Z = [], Bc = a.gb(A);
                                    a.f(Bc, function (b) {
                                        b.tagName == "DIV" && !a.ib(b, "u") && Z.push(b)
                                    });
                                    var q = -1, Cb, yb, s = Z.length, M = o.Kd || sc, L = o.Ld || rc, ac = o.Dc, Fb = M + ac, Gb = L + ac, fc = nb & 1 ? Fb : Gb, v = b.min(o.Sb, s), ob, w, N, Eb, hb, X, R = [], Ub, Wb, Sb, jc, Ic, T, K = o.xc, Zb = o.Rb, wb, kb, mb, Vb = v < s, H = Vb ? o.Ke : 0, Q, V, G = 1, S, C, Y, zb = 0, Ab = 0, F, ib, lb, Kb, y, fb, z, Xb = new vc, eb;
                                    T = o.wc;
                                    k.Tb = lc;
                                    pc();
                                    p["jssor-slider"] = c;
                                    a.X(A, a.X(A) || 0);
                                    a.K(A, "absolute");
                                    ob = a.P(A, c);
                                    a.Ub(a.Bc(A), ob, A);
                                    if (cb) {
                                        jc = cb.Jd;
                                        wb = cb.E;
                                        a.Mc(cb.qc);
                                        kb = v == 1 && s > 1 && wb && (!a.Ib() || a.S() >= 8)
                                    }
                                    mb = kb || v >= s || !(H & 1) ? 0 : o.Gc;
                                    Q = (v > 1 || mb ? nb : -1) & o.cc;
                                    var Bb = A, D = [], B, P, Ib = "mousedown", tb = "mousemove", Lb = "mouseup", sb, E, vb, Pb, xb, ab;
                                    if (f.navigator.pointerEnabled || (ab = f.navigator.msPointerEnabled)) {
                                        X = c;
                                        Ib = ab ? "MSPointerDown" : "pointerdown";
                                        tb = ab ? "MSPointerMove" : "pointermove";
                                        Lb = ab ? "MSPointerUp" : "pointerup";
                                        sb = ab ? "MSPointerCancel" : "pointercancel";
                                        if (Q) {
                                            var Hb = "auto";
                                            if (Q == 2)
                                                Hb = "pan-x";
                                            else if (Q)
                                                Hb = "pan-y";
                                            a.zb(Bb, ab ? "msTouchAction" : "touchAction", Hb)
                                        }
                                    } else if ("ontouchstart"in f || "createTouch"in g) {
                                        hb = c;
                                        X = c;
                                        Ib = "touchstart";
                                        tb = "touchmove";
                                        Lb = "touchend";
                                        sb = "touchcancel"
                                    }
                                    fb = new Fc;
                                    if (kb)
                                        B = new wb(Xb, M, L, cb, hb);
                                    a.G(ob, fb.Ab);
                                    a.jb(A, "hidden");
                                    P = cc();
                                    a.zb(P, "backgroundColor", "#000");
                                    a.pb(P, 0);
                                    a.Ub(Bb, P, Bb.firstChild);
                                    for (var ub = 0; ub < Z.length; ub++) {
                                        var Dc = Z[ub], ic = new Ec(Dc, ub);
                                        D.push(ic)
                                    }
                                    a.M(jb);
                                    Kb = new Gc;
                                    z = new uc(Kb, fb);
                                    if (Q) {
                                        a.j(A, Ib, Ac);
                                        a.j(g, Lb, Jb);
                                        sb && a.j(g, sb, Jb)
                                    }
                                    K &= X ? 10 : 5;
                                    if (Ob && bb) {
                                        Ub = new bb.E(Ob, bb, db(), pb());
                                        R.push(Ub)
                                    }
                                    if (O && hc && ec) {
                                        Wb = new O.E(hc, ec, O, db(), pb());
                                        R.push(Wb)
                                    }
                                    if (Nb && I) {
                                        I.Xb = o.Xb;
                                        Sb = new I.E(Nb, I);
                                        R.push(Sb)
                                    }
                                    a.f(R, function (a) {
                                        a.kc(s, D, jb);
                                        a.sb(n.nc, qc)
                                    });
                                    Mb(db());
                                    a.j(p, "mouseout", a.vc(oc, p));
                                    a.j(p, "mouseover", a.vc(nc, p));
                                    Db();
                                    o.Id && a.j(g, "keydown", function (a) {
                                        if (a.keyCode == r.ne)
                                            rb(-1);
                                        else
                                            a.keyCode == r.ve && rb(1)
                                    });
                                    var qb = o.Xb;
                                    if (!(H & 1))
                                        qb = b.max(0, b.min(qb, s - v));
                                    z.Lb(qb, qb, 0)
                                }
                                m.ye = 21;
                                m.ue = 22;
                                m.ee = 23;
                                m.Ie = 24;
                                m.Je = 25;
                                m.ze = 26;
                                m.mf = 27;
                                m.te = 28;
                                m.Ue = 202;
                                m.ke = 203;
                                m.se = 206;
                                m.qe = 207;
                                m.we = 208;
                                m.Sc = 209;
                                m.pe = 210;
                                m.re = 211;
                                p = m
                            };
                            var n = {nc: 1};
                            var u = function (d, f, s, m) {
                                var b = this;
                                l.call(b);
                                var g, j, q = a.s(d), o = a.z(d);
                                function k(a) {
                                    b.l(n.nc, a, c)
                                }
                                b.oc = function (b, a, c) {
                                    if (c)
                                        ;
                                };
                                b.tc = function (b) {
                                    a.C(d, b);
                                    a.C(f, b)
                                };
                                var r;
                                b.Yb = function (h, b) {
                                    if (!r || g.H == e) {
                                        if (g.Hb & 1) {
                                            a.I(d, (m - q) / 2);
                                            a.I(f, (m - q) / 2)
                                        }
                                        if (g.Hb & 2) {
                                            a.D(d, (b - o) / 2);
                                            a.D(f, (b - o) / 2)
                                        }
                                        r = c
                                    }
                                };
                                var p;
                                b.kc = function (b) {
                                    if (!p) {
                                        a.j(d, "click", a.lb(h, k, -j));
                                        a.j(f, "click", a.lb(h, k, j));
                                        a.bc(d);
                                        a.bc(f);
                                        p = c
                                    }
                                };
                                b.Tb = g = a.q({vd: 1}, s);
                                j = g.vd
                            }, s = function (i, A) {
                                var h = this, x, m, d, u = [], y, w, f, o, q, t, s, k, r, g, j;
                                l.call(h);
                                i = a.vb(i);
                                function z(o, e) {
                                    var g = this, b, l, k;
                                    function p() {
                                        l.Cd(m == e)
                                    }
                                    function i() {
                                        if (!r.Yd()) {
                                            var a = f - e % f, b = r.Ic((e + a) / f - 1), c = b * f + f - a;
                                            h.l(n.nc, c)
                                        }
                                    }
                                    g.hb = e;
                                    g.gd = p;
                                    k = o.xe || o.Pb || a.mb();
                                    g.Ab = b = a.Td(j, "thumbnailtemplate", k, c);
                                    l = a.bc(b);
                                    d.ec & 1 && a.j(b, "click", i);
                                    d.ec & 2 && a.j(b, "mouseover", a.vc(i, b))
                                }
                                h.oc = function (c, d, e) {
                                    var a = m;
                                    m = c;
                                    a != -1 && u[a].gd();
                                    u[c].gd();
                                    !e && r.me(r.Ic(b.floor(d / f)))
                                };
                                h.tc = function (b) {
                                    a.C(i, b)
                                };
                                h.Yb = a.sc;
                                var v;
                                h.kc = function (F, D) {
                                    if (!v) {
                                        x = F;
                                        b.ceil(x / f);
                                        m = -1;
                                        k = b.min(k, D.length);
                                        var h = d.Db & 1, n = t + (t + o) * (f - 1) * (1 - h), l = s + (s + q) * (f - 1) * h, C = n + (n + o) * (k - 1) * h, A = l + (l + q) * (k - 1) * (1 - h);
                                        a.K(g, "absolute");
                                        a.jb(g, "hidden");
                                        d.Hb & 1 && a.I(g, (y - C) / 2);
                                        d.Hb & 2 && a.D(g, (w - A) / 2);
                                        a.s(g, C);
                                        a.z(g, A);
                                        var j = [];
                                        a.f(D, function (l, e) {
                                            var i = new z(l, e), d = i.Ab, c = b.floor(e / f), k = e % f;
                                            a.I(d, (t + o) * k * (1 - h));
                                            a.D(d, (s + q) * k * h);
                                            if (!j[c]) {
                                                j[c] = a.mb();
                                                a.G(g, j[c])
                                            }
                                            a.G(j[c], d);
                                            u.push(i)
                                        });
                                        var E = a.q({Yc: e, wc: e, fd: e, Kd: n, Ld: l, Dc: o * h + q * (1 - h), ad: 12, Rb: 200, xc: 1, dc: d.Db, cc: d.nf ? 0 : d.Db}, d);
                                        r = new p(i, E);
                                        v = c
                                    }
                                };
                                h.Tb = d = a.q({uc: 3, ld: 3, Sb: 1, Db: 1, Hb: 3, ec: 1}, A);
                                y = a.s(i);
                                w = a.z(i);
                                g = a.F(i, "slides", c);
                                j = a.F(g, "prototype");
                                t = a.s(j);
                                s = a.z(j);
                                a.Fb(g, j);
                                f = d.qf || 1;
                                o = d.uc;
                                q = d.ld;
                                k = d.Sb
                            };
                            function t() {
                                j.call(this, 0, 0);
                                this.Vb = a.sc
                            }
                            var v = [{g: 1200, x: .3, t: {b: [.3, .7]}, e: {b: d.k, a: d.i}, a: 2}, {g: 1200, x: -.3, p: c, e: {b: d.k, a: d.i}, a: 2}, {g: 1200, x: -.3, t: {b: [.3, .7]}, e: {b: d.k, a: d.i}, a: 2}, {g: 1200, x: .3, p: c, e: {b: d.k, a: d.i}, a: 2}, {g: 1200, y: .3, t: {c: [.3, .7]}, e: {c: d.k, a: d.i}, a: 2, N: c}, {g: 1200, y: -.3, p: c, e: {c: d.k, a: d.i}, a: 2, N: c}, {g: 1200, y: -.3, t: {c: [.3, .7]}, e: {c: d.k, a: d.i}, a: 2}, {g: 1200, y: .3, p: c, e: {c: d.k, a: d.i}, a: 2}, {g: 1200, x: .3, B: 2, t: {b: [.3, .7]}, u: {W: 3}, e: {b: d.k, a: d.i}, a: 2, N: c}, {g: 1200, x: .3, B: 2, p: c, u: {W: 3}, e: {b: d.k, a: d.i}, a: 2, N: c}, {g: 1200, y: .3, A: 2, t: {c: [.3, .7]}, u: {O: 12}, e: {c: d.k, a: d.i}, a: 2}, {g: 1200, y: .3, A: 2, p: c, u: {O: 12}, e: {c: d.k, a: d.i}, a: 2}, {g: 1200, y: .3, B: 2, t: {c: [.3, .7]}, u: {W: 12}, e: {c: d.k, a: d.i}, a: 2, N: c}, {g: 1200, y: -.3, B: 2, p: c, u: {W: 12}, e: {c: d.k, a: d.i}, a: 2}, {g: 1200, x: .3, A: 2, t: {b: [.3, .7]}, u: {O: 3}, e: {b: d.k, a: d.i}, a: 2, N: c}, {g: 1200, x: -.3, A: 2, p: c, u: {O: 3}, e: {b: d.k, a: d.i}, a: 2}, {g: 1200, x: .3, y: .3, B: 2, A: 2, t: {b: [.3, .7], c: [.3, .7]}, u: {W: 3, O: 12}, e: {b: d.k, c: d.k, a: d.i}, a: 2, N: c}, {g: 1200, x: .3, y: .3, B: 2, A: 2, t: {b: [.3, .7], c: [.3, .7]}, p: c, u: {W: 3, O: 12}, e: {b: d.k, c: d.k, a: d.i}, a: 2, N: c}, {g: 1200, v: 20, d: 3, e: {d: d.k, a: d.i}, a: 2}, {g: 1200, v: 20, d: 3, p: c, e: {d: d.Pc, a: d.i}, a: 2}, {g: 1200, v: 20, d: 12, e: {d: d.k, a: d.i}, a: 2}, {g: 1200, v: 20, d: 12, p: c, e: {d: d.Pc, a: d.i}, a: 2}];
                            jssor_slider1_starter = function (g) {
                                var e = new p(g, {wc: c, Wc: 1500, xc: 1, cc: 1, Id: c, Rb: 800, he: {E: q, qc: v, Nd: 1, Jd: c}, wd: {E: u, Tc: 1}, Md: {E: s, Tc: 2, uc: 8, Sb: 10, Gc: 360}});
                                function d() {
                                    var c = a.le().x;
                                    if (c)
                                        e.Ye(b.max(b.min(c, 800), 300));
                                    else
                                        a.v(d, 30)
                                }
                                d();
                                a.j(f, "load", d);
                                a.j(f, "resize", a.We(f, d));
                                a.j(f, "orientationchange", d)
                            }
                        })(window, document, Math, null, true, false)
