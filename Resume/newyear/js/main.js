!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document)throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = ae.type(e);
        return "function" === n || ae.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ae.isFunction(t))return ae.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return ae.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t))return ae.filter(t, e, n);
            t = ae.filter(t, e)
        }
        return ae.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return ae.each(e.match(be) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        U.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o), ae.ready()
    }

    function s() {
        this.expando = ae.expando + s.uid++
    }

    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(Ne, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? ae.parseJSON(n) : n
            } catch (i) {
            }
            Ee.set(e, t, n)
        } else n = void 0;
        return n
    }

    function u(e, t, n, r) {
        var i, a = 1, o = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return ae.css(e, t, "")
            }, l = s(), u = n && n[3] || (ae.cssNumber[t] ? "" : "px"), c = (ae.cssNumber[t] || "px" !== u && +l) && Pe.exec(ae.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do a = a || ".5", c /= a, ae.style(e, t, c + u); while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n
    }

    function p(e, t) {
        for (var n = 0, r = e.length; r > n; n++)ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
    }

    function d(e, t, n, r, i) {
        for (var a, o, s, l, u, d, f = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)if (a = e[m], a || 0 === a)if ("object" === ae.type(a)) ae.merge(h, a.nodeType ? [a] : a); else if (qe.test(a)) {
            for (o = o || f.appendChild(t.createElement("div")), s = (He.exec(a) || ["", ""])[1].toLowerCase(), l = ze[s] || ze._default, o.innerHTML = l[1] + ae.htmlPrefilter(a) + l[2], d = l[0]; d--;)o = o.lastChild;
            ae.merge(h, o.childNodes), o = f.firstChild, o.textContent = ""
        } else h.push(t.createTextNode(a));
        for (f.textContent = "", m = 0; a = h[m++];)if (r && ae.inArray(a, r) > -1) i && i.push(a); else if (u = ae.contains(a.ownerDocument, a), o = c(f.appendChild(a), "script"), u && p(o), n)for (d = 0; a = o[d++];)Ie.test(a.type || "") && n.push(a);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return U.activeElement
        } catch (e) {
        }
    }

    function g(e, t, n, r, i, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t)g(e, s, n, r, t[s], a);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h; else if (!i)return e;
        return 1 === a && (o = i, i = function (e) {
            return ae().off(e), o.apply(this, arguments)
        }, i.guid = o.guid || (o.guid = ae.guid++)), e.each(function () {
            ae.event.add(this, t, i, r, n)
        })
    }

    function v(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = $e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        var n, r, i, a, o, s, l, u;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (a = ke.access(e), o = ke.set(t, a), u = a.events)) {
                delete o.handle, o.events = {};
                for (i in u)for (n = 0, r = u[i].length; r > n; n++)ae.event.add(t, i, u[i][n])
            }
            Ee.hasData(e) && (s = Ee.access(e), l = ae.extend({}, s), Ee.set(t, l))
        }
    }

    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = Q.apply([], t);
        var i, a, o, s, l, u, p = 0, f = e.length, h = f - 1, m = t[0], g = ae.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !re.checkClone && Ge.test(m))return e.each(function (i) {
            var a = e.eq(i);
            g && (t[0] = m.call(this, i, a.html())), T(a, t, n, r)
        });
        if (f && (i = d(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (o = ae.map(c(i, "script"), y), s = o.length; f > p; p++)l = i, p !== h && (l = ae.clone(l, !0, !0), s && ae.merge(o, c(l, "script"))), n.call(e[p], l, p);
            if (s)for (u = o[o.length - 1].ownerDocument, ae.map(o, x), p = 0; s > p; p++)l = o[p], Ie.test(l.type || "") && !ke.access(l, "globalEval") && ae.contains(u, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace(Xe, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var r, i = t ? ae.filter(t, e) : e, a = 0; null != (r = i[a]); a++)n || 1 !== r.nodeType || ae.cleanData(c(r)), r.parentNode && (n && ae.contains(r.ownerDocument, r) && p(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function S(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body), r = ae.css(n[0], "display");
        return n.detach(), r
    }

    function k(e) {
        var t = U, n = Ye[e];
        return n || (n = S(e, t), "none" !== n && n || (_e = (_e || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = _e[0].contentDocument, t.write(), t.close(), n = S(e, t), _e.detach()), Ye[e] = n), n
    }

    function E(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || Ke(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, t)), n && !re.pixelMarginRight() && Ue.test(o) && Ve.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a), void 0 !== o ? o + "" : o
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e) {
        if (e in rt)return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)if (e = nt[n] + t, e in rt)return e
    }

    function A(e, t, n) {
        var r = Pe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function P(e, t, n, r, i) {
        for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += ae.css(e, n + Le[a], !0, i)), r ? ("content" === n && (o -= ae.css(e, "padding" + Le[a], !0, i)), "margin" !== n && (o -= ae.css(e, "border" + Le[a] + "Width", !0, i))) : (o += ae.css(e, "padding" + Le[a], !0, i), "padding" !== n && (o += ae.css(e, "border" + Le[a] + "Width", !0, i)));
        return o
    }

    function L(t, n, r) {
        var i = !0, a = "width" === n ? t.offsetWidth : t.offsetHeight, o = Ke(t), s = "border-box" === ae.css(t, "boxSizing", !1, o);
        if (U.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
            if (a = E(t, n, o), (0 > a || null == a) && (a = t.style[n]), Ue.test(a))return a;
            i = s && (re.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
        }
        return a + P(t, n, r || (s ? "border" : "content"), i, o) + "px"
    }

    function M(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++)r = e[o], r.style && (a[o] = ke.get(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Me(r) && (a[o] = ke.access(r, "olddisplay", k(r.nodeName)))) : (i = Me(r), "none" === n && i || ke.set(r, "olddisplay", i ? n : ae.css(r, "display"))));
        for (o = 0; s > o; o++)r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function H() {
        return e.setTimeout(function () {
            it = void 0
        }), it = ae.now()
    }

    function I(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Le[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e, t, n) {
        for (var r, i = (B.tweeners[t] || []).concat(B.tweeners["*"]), a = 0, o = i.length; o > a; a++)if (r = i[a].call(n, t, e))return r
    }

    function q(e, t, n) {
        var r, i, a, o, s, l, u, c, p = this, d = {}, f = e.style, h = e.nodeType && Me(e), m = ke.get(e, "fxshow");
        n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, p.always(function () {
            p.always(function () {
                s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ae.css(e, "display"), c = "none" === u ? ke.get(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === ae.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], ot.exec(i)) {
            if (delete t[r], a = a || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[r])continue;
                h = !0
            }
            d[r] = m && m[r] || ae.style(e, r)
        } else u = void 0;
        if (ae.isEmptyObject(d)) "inline" === ("none" === u ? k(e.nodeName) : u) && (f.display = u); else {
            m ? "hidden" in m && (h = m.hidden) : m = ke.access(e, "fxshow", {}), a && (m.hidden = !h), h ? ae(e).show() : p.done(function () {
                    ae(e).hide()
                }), p.done(function () {
                var t;
                ke.remove(e, "fxshow");
                for (t in d)ae.style(e, t, d[t])
            });
            for (r in d)o = z(h ? m[r] : 0, r, p), r in m || (m[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, a, o;
        for (n in e)if (r = ae.camelCase(n), i = t[r], a = e[n], ae.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = ae.cssHooks[r], o && "expand" in o) {
            a = o.expand(a), delete e[r];
            for (n in a)n in e || (e[n] = a[n], t[n] = i)
        } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, a = 0, o = B.prefilters.length, s = ae.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            for (var t = it || H(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(a);
            return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: ae.extend({}, t),
            opts: ae.extend(!0, {specialEasing: {}, easing: ae.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || H(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = ae.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? u.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (O(c, u.opts.specialEasing); o > a; a++)if (r = B.prefilters[a].call(u, e, c, u.opts))return ae.isFunction(r.stop) && (ae._queueHooks(u.elem, u.opts.queue).stop = ae.proxy(r.stop, r)), r;
        return ae.map(c, z, u), ae.isFunction(u.opts.start) && u.opts.start.call(e, u), ae.fx.timer(ae.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, a = t.toLowerCase().match(be) || [];
            if (ae.isFunction(n))for (; r = a[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function W(e, t, n, r) {
        function i(s) {
            var l;
            return a[s] = !0, ae.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }

        var a = {}, o = e === Et;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }

    function G(e, t) {
        var n, r, i = ae.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ae.extend(!0, e, r), e
    }

    function $(e, t, n) {
        for (var r, i, a, o, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in s)if (s[i] && s[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0] in n) a = l[0]; else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    a = i;
                    break
                }
                o || (o = i)
            }
            a = a || o
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function X(e, t, n, r) {
        var i, a, o, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (o in e.converters)u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a;)if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())if ("*" === a) a = l; else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)for (i in u)if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                o === !0 ? o = u[i] : u[i] !== !0 && (a = s[0], c.unshift(s[1]));
                break
            }
            if (o !== !0)if (o && e["throws"]) t = o(t); else try {
                t = o(t)
            } catch (p) {
                return {state: "parsererror", error: o ? p : "No conversion from " + l + " to " + a}
            }
        }
        return {state: "success", data: t}
    }

    function _(e, t, n, r) {
        var i;
        if (ae.isArray(t)) ae.each(t, function (t, i) {
            n || Pt.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ae.type(t)) r(e, t); else for (i in t)_(e + "[" + i + "]", t[i], n, r)
    }

    function Y(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var V = [], U = e.document, K = V.slice, Q = V.concat, J = V.push, Z = V.indexOf, ee = {}, te = ee.toString, ne = ee.hasOwnProperty, re = {}, ie = "2.2.3", ae = function (e, t) {
        return new ae.fn.init(e, t)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^-ms-/, le = /-([\da-z])/gi, ue = function (e, t) {
        return t.toUpperCase()
    };
    ae.fn = ae.prototype = {
        jquery: ie, constructor: ae, selector: "", length: 0, toArray: function () {
            return K.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        }, pushStack: function (e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return ae.each(this, e)
        }, map: function (e) {
            return this.pushStack(ae.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(K.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: J, sort: V.sort, splice: V.splice
    }, ae.extend = ae.fn.extend = function () {
        var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)if (null != (e = arguments[s]))for (t in e)n = o[t], r = e[t], o !== r && (u && r && (ae.isPlainObject(r) || (i = ae.isArray(r))) ? (i ? (i = !1, a = n && ae.isArray(n) ? n : []) : a = n && ae.isPlainObject(n) ? n : {}, o[t] = ae.extend(u, a, r)) : void 0 !== r && (o[t] = r));
        return o
    }, ae.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === ae.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (e) {
            var t;
            if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e))return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = ae.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(se, "ms-").replace(le, ue)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var r, i = 0;
            if (n(e))for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(oe, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ae.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++)r = !t(e[a], a), r !== s && i.push(e[a]);
            return i
        }, map: function (e, t, r) {
            var i, a, o = 0, s = [];
            if (n(e))for (i = e.length; i > o; o++)a = t(e[o], o, r), null != a && s.push(a); else for (o in e)a = t(e[o], o, r), null != a && s.push(a);
            return Q.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e) ? (r = K.call(arguments, 2), i = function () {
                    return e.apply(t || this, r.concat(K.call(arguments)))
                }, i.guid = e.guid = e.guid || ae.guid++, i) : void 0
        }, now: Date.now, support: re
    }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = V[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, r) {
            var i, a, o, s, l, u, p, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== M && L(t), t = t || M, H)) {
                if (11 !== m && (u = ve.exec(e)))if (i = u[1]) {
                    if (9 === m) {
                        if (!(o = t.getElementById(i)))return n;
                        if (o.id === i)return n.push(o), n
                    } else if (h && (o = h.getElementById(i)) && O(t, o) && o.id === i)return n.push(o), n
                } else {
                    if (u[2])return J.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)return J.apply(n, t.getElementsByClassName(i)), n
                }
                if (b.qsa && !X[e + " "] && (!I || !I.test(e))) {
                    if (1 !== m) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = B), p = k(e), a = p.length, l = de.test(s) ? "#" + s : "[id='" + s + "']"; a--;)p[a] = l + " " + d(p[a]);
                        f = p.join(","), h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f)try {
                        return J.apply(n, h.querySelectorAll(f)), n
                    } catch (g) {
                    } finally {
                        s === B && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = M.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)T.attrHandle[n[r]] = t
        }

        function o(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;)n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, a = W++;
            return t.first ? function (t, n, a) {
                    for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, a)
                } : function (t, n, o) {
                    var s, l, u, c = [F, a];
                    if (o) {
                        for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, o))return !0
                    } else for (; t = t[r];)if (1 === t.nodeType || i) {
                        if (u = t[B] || (t[B] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[r]) && s[0] === F && s[1] === a)return c[2] = s[2];
                        if (l[r] = c, c[2] = e(t, n, o))return !0
                    }
                }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                    return !0
                } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, a = n.length; a > i; i++)t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), u && t.push(s)));
            return o
        }

        function v(e, t, n, i, a, o) {
            return i && !i[B] && (i = v(i)), a && !a[B] && (a = v(a, o)), r(function (r, o, s, l) {
                var u, c, p, d = [], f = [], h = o.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, d, e, s, l), x = n ? a || (r ? e : h || i) ? [] : o : y;
                if (n && n(y, x, s, l), i)for (u = g(x, f), i(u, [], s, l), c = u.length; c--;)(p = u[c]) && (x[f[c]] = !(y[f[c]] = p));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = x.length; c--;)(p = x[c]) && u.push(y[c] = p);
                            a(null, x = [], u, l)
                        }
                        for (c = x.length; c--;)(p = x[c]) && (u = a ? ee(r, p) : d[c]) > -1 && (r[u] = !(o[u] = p))
                    }
                } else x = g(x === o ? x.splice(h, x.length) : x), a ? a(null, o, x, l) : J.apply(o, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = f(function (e) {
                return e === t
            }, o, !0), u = f(function (e) {
                return ee(t, e) > -1
            }, o, !0), c = [function (e, n, r) {
                var i = !a && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                return t = null, i
            }]; i > s; s++)if (n = T.relative[e[s].type]) c = [f(h(c), n)]; else {
                if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                    for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                    return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0, a = e.length > 0, o = function (r, o, s, l, u) {
                var c, p, d, f = 0, h = "0", m = r && [], v = [], y = N, x = r || a && T.find.TAG("*", u), w = F += null == y ? 1 : Math.random() || .1, b = x.length;
                for (u && (N = o === M || o || u); h !== b && null != (c = x[h]); h++) {
                    if (a && c) {
                        for (p = 0, o || c.ownerDocument === M || (L(c), s = !H); d = e[p++];)if (d(c, o || M, s)) {
                            l.push(c);
                            break
                        }
                        u && (F = w)
                    }
                    i && ((c = !d && c) && f--, r && m.push(c))
                }
                if (f += h, i && h !== f) {
                    for (p = 0; d = n[p++];)d(m, v, o, s);
                    if (r) {
                        if (f > 0)for (; h--;)m[h] || v[h] || (v[h] = K.call(l));
                        v = g(v)
                    }
                    J.apply(l, v), u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return u && (F = w, N = y), m
            };
            return i ? r(o) : o
        }

        var w, b, T, C, S, k, E, D, N, A, P, L, M, j, H, I, z, q, O, B = "sizzle" + 1 * new Date, R = e.document, F = 0, W = 0, G = n(), $ = n(), X = n(), _ = function (e, t) {
            return e === t && (P = !0), 0
        }, Y = 1 << 31, V = {}.hasOwnProperty, U = [], K = U.pop, Q = U.push, J = U.push, Z = U.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", oe = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae), de = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Te = function () {
            L()
        };
        try {
            J.apply(U = Z.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: U.length ? function (e, t) {
                        Q.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
            }
        }
        b = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, j = M.documentElement, H = !S(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = i(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = i(function (e) {
                    return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = ge.test(M.getElementsByClassName), b.getById = i(function (e) {
                    return j.appendChild(e).id = B, !M.getElementsByName || !M.getElementsByName(B).length
                }), b.getById ? (T.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, T.filter.ID = function (e) {
                        var t = e.replace(we, be);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function (e) {
                        var t = e.replace(we, be);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = b.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[i++];)1 === n.nodeType && r.push(n);
                            return r
                        }
                        return a
                    }, T.find.CLASS = b.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
                    }, z = [], I = [], (b.qsa = ge.test(M.querySelectorAll)) && (i(function (e) {
                    j.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]")
                }), i(function (e) {
                    var t = M.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (b.matchesSelector = ge.test(q = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (e) {
                    b.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), z.push("!=", ae)
                }), I = I.length && new RegExp(I.join("|")), z = z.length && new RegExp(z.join("|")), t = ge.test(j.compareDocumentPosition), O = t || ge.test(j.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, _ = t ? function (e, t) {
                        if (e === t)return P = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === R && O(R, e) ? -1 : t === M || t.ownerDocument === R && O(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return P = !0, 0;
                        var n, r = 0, i = e.parentNode, a = t.parentNode, s = [e], l = [t];
                        if (!i || !a)return e === M ? -1 : t === M ? 1 : i ? -1 : a ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                        if (i === a)return o(e, t);
                        for (n = e; n = n.parentNode;)s.unshift(n);
                        for (n = t; n = n.parentNode;)l.unshift(n);
                        for (; s[r] === l[r];)r++;
                        return r ? o(s[r], l[r]) : s[r] === R ? -1 : l[r] === R ? 1 : 0
                    }, M) : M
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== M && L(e), n = n.replace(ce, "='$1']"), b.matchesSelector && H && !X[n + " "] && (!z || !z.test(n)) && (!I || !I.test(n)))try {
                var r = q.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (i) {
            }
            return t(n, M, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== M && L(e), O(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== M && L(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (P = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(_), P) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return A = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                }, CLASS: function (e) {
                    var t = G[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, p, d, f, h, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, x = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (d = g, p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], x = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (x = f = 0) || h.pop();)if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [F, f, x];
                                        break
                                    }
                                } else if (y && (d = t, p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], x = f), x === !1)for (; (d = ++f && d && d[m] || (x = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [F, x]), d !== t)););
                                return x -= i, x === r || x % r === 0 && x / r >= 0
                            }
                        }
                }, PSEUDO: function (e, n) {
                    var i, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[B] ? a(n) : a.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                    for (var r, i = a(e, n), o = i.length; o--;)r = ee(e, i[o]), e[r] = !(t[r] = i[o])
                                }) : function (e) {
                                    return a(e, 0, i)
                                }) : a
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = E(e.replace(se, "$1"));
                    return i[B] ? r(function (e, t, n, r) {
                            for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                        }) : function (e, r, a) {
                            return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                        }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(we, be), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(), function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === j
                }, focus: function (e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return me.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = s(w);
        for (w in{submit: !0, reset: !0})T.pseudos[w] = l(w);
        return p.prototype = T.filters = T.pseudos, T.setFilters = new p, k = t.tokenize = function (e, n) {
            var r, i, a, o, s, l, u, c = $[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), a.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (o in T.filter)!(i = fe[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
                    value: r,
                    type: o,
                    matches: i
                }), s = s.slice(r.length));
                if (!r)break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [], i = [], a = X[e + " "];
            if (!a) {
                for (t || (t = k(e)), n = t.length; n--;)a = y(t[n]), a[B] ? r.push(a) : i.push(a);
                a = X(e, x(i, r)), a.selector = e
            }
            return a
        }, D = t.select = function (e, t, n, r) {
            var i, a, o, s, l, u = "function" == typeof e && e, p = !r && k(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === t.nodeType && H && T.relative[a[1].type]) {
                    if (t = (T.find.ID(o.matches[0].replace(we, be), t) || [])[0], !t)return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !T.relative[s = o.type]);)if ((l = T.find[s]) && (r = l(o.matches[0].replace(we, be), ye.test(a[0].type) && c(t.parentNode) || t))) {
                    if (a.splice(i, 1), e = r.length && d(a), !e)return J.apply(n, r), n;
                    break
                }
            }
            return (u || E(e, p))(r, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = B.split("").sort(_).join("") === B, b.detectDuplicates = !!P, L(), b.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(M.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ae.find = ce, ae.expr = ce.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = ce.uniqueSort, ae.text = ce.getText, ae.isXMLDoc = ce.isXML, ae.contains = ce.contains;
    var pe = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (i && ae(e).is(n))break;
            r.push(e)
        }
        return r
    }, de = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, fe = ae.expr.match.needsContext, he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, me = /^.[^:#\[\.,]*$/;
    ae.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ae.find.matchesSelector(r, e) ? [r] : [] : ae.find.matches(e, ae.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }, ae.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)return this.pushStack(ae(e).filter(function () {
                for (t = 0; n > t; t++)if (ae.contains(i[t], this))return !0
            }));
            for (t = 0; n > t; t++)ae.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? ae.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && fe.test(e) ? ae(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = ae.fn.init = function (e, t, n) {
        var r, i;
        if (!e)return this;
        if (n = n || ge, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : U, !0)), he.test(r[1]) && ae.isPlainObject(t))for (r in t)ae.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = U.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = U, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
    };
    ye.prototype = ae.fn, ge = ae(U);
    var xe = /^(?:parents|prev(?:Until|All))/, we = {children: !0, contents: !0, next: !0, prev: !0};
    ae.fn.extend({
        has: function (e) {
            var t = ae(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)if (ae.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, a = [], o = fe.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
        }, index: function (e) {
            return e ? "string" == typeof e ? Z.call(ae(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ae.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return pe(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return pe(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return pe(e, "nextSibling")
        }, prevAll: function (e) {
            return pe(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return pe(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return pe(e, "previousSibling", n)
        }, siblings: function (e) {
            return de((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return de(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || ae.merge([], e.childNodes)
        }
    }, function (e, t) {
        ae.fn[e] = function (n, r) {
            var i = ae.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ae.filter(r, i)), this.length > 1 && (we[e] || ae.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var be = /\S+/g;
    ae.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : ae.extend({}, e);
        var t, n, r, i, o = [], s = [], l = -1, u = function () {
            for (i = e.once, r = t = !0; s.length; l = -1)for (n = s.shift(); ++l < o.length;)o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, c = {
            add: function () {
                return o && (n && !t && (l = o.length - 1, s.push(n)), function r(t) {
                    ae.each(t, function (t, n) {
                        ae.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ae.type(n) && r(n)
                    })
                }(arguments), n && !t && u()), this
            }, remove: function () {
                return ae.each(arguments, function (e, t) {
                    for (var n; (n = ae.inArray(t, o, n)) > -1;)o.splice(n, 1), l >= n && l--
                }), this
            }, has: function (e) {
                return e ? ae.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = s = [], o = n = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = s = [], n || (o = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, ae.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return ae.Deferred(function (n) {
                        ae.each(t, function (t, a) {
                            var o = ae.isFunction(e[t]) && e[t];
                            i[a[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? ae.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, ae.each(t, function (e, a) {
                var o = a[2], s = a[3];
                r[a[1]] = o.add, s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function () {
                    return i[a[0] + "With"](this === i ? r : this, arguments), this
                }, i[a[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, a = K.call(arguments), o = a.length, s = 1 !== o || e && ae.isFunction(e.promise) ? o : 0, l = 1 === s ? e : ae.Deferred(), u = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? K.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (o > 1)for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++)a[i] && ae.isFunction(a[i].promise) ? a[i].promise().progress(u(i, n, t)).done(u(i, r, a)).fail(l.reject) : --s;
            return s || l.resolveWith(r, a), l.promise()
        }
    });
    var Te;
    ae.fn.ready = function (e) {
        return ae.ready.promise().done(e), this
    }, ae.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ae.readyWait++ : ae.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (Te.resolveWith(U, [ae]), ae.fn.triggerHandler && (ae(U).triggerHandler("ready"), ae(U).off("ready"))))
        }
    }), ae.ready.promise = function (t) {
        return Te || (Te = ae.Deferred(), "complete" === U.readyState || "loading" !== U.readyState && !U.documentElement.doScroll ? e.setTimeout(ae.ready) : (U.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o))), Te.promise(t)
    }, ae.ready.promise();
    var Ce = function (e, t, n, r, i, a, o) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === ae.type(n)) {
            i = !0;
            for (s in n)Ce(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== r && (i = !0, ae.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(ae(e), n)
                })), t))for (; l > s; s++)t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
    }, Se = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    s.uid = 1, s.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
        }, cache: function (e) {
            if (!Se(e))return {};
            var t = e[this.expando];
            return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n; else for (r in t)i[r] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t) this.register(e); else {
                    ae.isArray(t) ? r = t.concat(t.map(ae.camelCase)) : (i = ae.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(be) || [])), n = r.length;
                    for (; n--;)delete a[r[n]]
                }
                (void 0 === t || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ae.isEmptyObject(t)
        }
    };
    var ke = new s, Ee = new s, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ne = /[A-Z]/g;
    ae.extend({
        hasData: function (e) {
            return Ee.hasData(e) || ke.hasData(e)
        }, data: function (e, t, n) {
            return Ee.access(e, t, n)
        }, removeData: function (e, t) {
            Ee.remove(e, t)
        }, _data: function (e, t, n) {
            return ke.access(e, t, n)
        }, _removeData: function (e, t) {
            ke.remove(e, t)
        }
    }), ae.fn.extend({
        data: function (e, t) {
            var n, r, i, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = Ee.get(a), 1 === a.nodeType && !ke.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;)o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ae.camelCase(r.slice(5)), l(a, r, i[r])));
                    ke.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                    Ee.set(this, e)
                }) : Ce(this, function (t) {
                    var n, r;
                    if (a && void 0 === t) {
                        if (n = Ee.get(a, e) || Ee.get(a, e.replace(Ne, "-$&").toLowerCase()), void 0 !== n)return n;
                        if (r = ae.camelCase(e), n = Ee.get(a, r), void 0 !== n)return n;
                        if (n = l(a, r, void 0), void 0 !== n)return n
                    } else r = ae.camelCase(e), this.each(function () {
                        var n = Ee.get(this, r);
                        Ee.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Ee.remove(this, e)
            })
        }
    }), ae.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ke.get(e, t), n && (!r || ae.isArray(n) ? r = ke.access(e, t, ae.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ae.queue(e, t), r = n.length, i = n.shift(), a = ae._queueHooks(e, t), o = function () {
                ae.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ke.get(e, n) || ke.access(e, n, {
                    empty: ae.Callbacks("once memory").add(function () {
                        ke.remove(e, [t + "queue", n])
                    })
                })
        }
    }), ae.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = ae.queue(this, e, t);
                        ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
                    })
        }, dequeue: function (e) {
            return this.each(function () {
                ae.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = ae.Deferred(), a = this, o = this.length, s = function () {
                --r || i.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)n = ke.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"), Le = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
        return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
    }, je = /^(?:checkbox|radio)$/i, He = /<([\w:-]+)/, Ie = /^$|\/(?:java|ecma)script/i, ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
    var qe = /<|&#?\w+;/;
    !function () {
        var e = U.createDocumentFragment(), t = e.appendChild(U.createElement("div")), n = U.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Oe = /^key/, Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Re = /^([^.]*)(?:\.(.+)|)/;
    ae.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var a, o, s, l, u, c, p, d, f, h, m, g = ke.get(e);
            if (g)for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = ae.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(be) || [""], u = t.length; u--;)s = Re.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (p = ae.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = ae.event.special[f] || {}, c = ae.extend({
                type: f,
                origType: m,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && ae.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, a), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, o) !== !1 || e.addEventListener && e.addEventListener(f, o)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), ae.event.global[f] = !0)
        },
        remove: function (e, t, n, r, i) {
            var a, o, s, l, u, c, p, d, f, h, m, g = ke.hasData(e) && ke.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)if (s = Re.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (p = ae.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--;)c = d[a], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(a, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                    o && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ae.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l)ae.event.remove(e, f + t[u], n, r, !0);
                ae.isEmptyObject(l) && ke.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = ae.event.fix(e);
            var t, n, r, i, a, o = [], s = K.call(arguments), l = (ke.get(this, "events") || {})[e.type] || [], u = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (o = ae.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, r = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; s > n; n++)a = t[n], i = a.selector + " ", void 0 === r[i] && (r[i] = a.needsContext ? ae(i, this).index(l) > -1 : ae.find(i, this, null, [l]).length), r[i] && r.push(a);
                r.length && o.push({elem: l, handlers: r})
            }
            return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || U, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[ae.expando])return e;
            var t, n, r, i = e.type, a = e, o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Be.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(a), t = r.length; t--;)n = r[t], e[n] = a[n];
            return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return ae.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ae.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ae.Event = function (e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
    }, ae.Event.prototype = {
        constructor: ae.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        ae.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, a = e.handleObj;
                return i && (i === r || ae.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ae.fn.extend({
        on: function (e, t, n, r) {
            return g(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return g(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ae(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                ae.event.remove(this, e, n, t)
            })
        }
    });
    var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, We = /<script|<style|<link/i, Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, $e = /^true\/(.*)/, Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ae.extend({
        htmlPrefilter: function (e) {
            return e.replace(Fe, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, a, o, s = e.cloneNode(!0), l = ae.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))for (o = c(s), a = c(e), r = 0, i = a.length; i > r; r++)b(a[r], o[r]);
            if (t)if (n)for (a = a || c(e), o = o || c(s), r = 0, i = a.length; i > r; r++)w(a[r], o[r]); else w(e, s);
            return o = c(s, "script"), o.length > 0 && p(o, !l && c(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = ae.event.special, a = 0; void 0 !== (n = e[a]); a++)if (Se(n)) {
                if (t = n[ke.expando]) {
                    if (t.events)for (r in t.events)i[r] ? ae.event.remove(n, r) : ae.removeEvent(n, r, t.handle);
                    n[ke.expando] = void 0
                }
                n[Ee.expando] && (n[Ee.expando] = void 0)
            }
        }
    }), ae.fn.extend({
        domManip: T, detach: function (e) {
            return C(this, e, !0)
        }, remove: function (e) {
            return C(this, e)
        }, text: function (e) {
            return Ce(this, function (e) {
                return void 0 === e ? ae.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
            }, null, e, arguments.length)
        }, append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ae.cleanData(c(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ae.clone(this, e, t)
            })
        }, html: function (e) {
            return Ce(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !We.test(e) && !ze[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ae.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                ae.inArray(this, e) < 0 && (ae.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ae.fn[e] = function (e) {
            for (var n, r = [], i = ae(e), a = i.length - 1, o = 0; a >= o; o++)n = o === a ? this : this.clone(!0), ae(i[o])[t](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var _e, Ye = {
        HTML: "block",
        BODY: "block"
    }, Ve = /^margin/, Ue = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"), Ke = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Qe = function (e, t, n, r) {
        var i, a, o = {};
        for (a in t)o[a] = e.style[a], e.style[a] = t[a];
        i = n.apply(e, r || []);
        for (a in t)e.style[a] = o[a];
        return i
    }, Je = U.documentElement;
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(o);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, a = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Je.removeChild(o)
        }

        var n, r, i, a, o = U.createElement("div"), s = U.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ae.extend(re, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, pixelMarginRight: function () {
                return null == r && t(), i
            }, reliableMarginLeft: function () {
                return null == r && t(), a
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(U.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Je.appendChild(o), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(o), s.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/, et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, tt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, nt = ["Webkit", "O", "Moz", "ms"], rt = U.createElement("div").style;
    ae.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = ae.camelCase(t), l = e.style;
                return t = ae.cssProps[s] || (ae.cssProps[s] = N(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t] : (a = typeof n, "string" === a && (i = Pe.exec(n)) && i[1] && (n = u(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (ae.cssNumber[s] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, a, o, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = N(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = E(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
        }
    }), ae.each(["height", "width"], function (e, t) {
        ae.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? Ze.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function () {
                            return L(e, t, r)
                        }) : L(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i, a = r && Ke(e), o = r && P(e, t, r, "border-box" === ae.css(e, "boxSizing", !1, a), a);
                return o && (i = Pe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), A(e, n, o)
            }
        }
    }), ae.cssHooks.marginLeft = D(re.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
    }), ae.cssHooks.marginRight = D(re.reliableMarginRight, function (e, t) {
        return t ? Qe(e, {display: "inline-block"}, E, [e, "marginRight"]) : void 0
    }), ae.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ae.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Le[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        }, Ve.test(e) || (ae.cssHooks[e + t].set = A)
    }), ae.fn.extend({
        css: function (e, t) {
            return Ce(this, function (e, t, n) {
                var r, i, a = {}, o = 0;
                if (ae.isArray(t)) {
                    for (r = Ke(e), i = t.length; i > o; o++)a[t[o]] = ae.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return M(this, !0)
        }, hide: function () {
            return M(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Me(this) ? ae(this).show() : ae(this).hide()
                })
        }
    }), ae.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, n, r, i, a) {
            this.elem = e, this.prop = n, this.easing = i || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ae.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ae.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, ae.fx = j.prototype.init, ae.fx.step = {};
    var it, at, ot = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
    ae.Animation = ae.extend(B, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, Pe.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
        }, prefilters: [q], prefilter: function (e, t) {
            t ? B.prefilters.unshift(e) : B.prefilters.push(e)
        }
    }), ae.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ae.extend({}, e) : {
                complete: n || !n && t || ae.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ae.isFunction(t) && t
            };
        return r.duration = ae.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ae.fx.speeds ? ae.fx.speeds[r.duration] : ae.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ae.isFunction(r.old) && r.old.call(this), r.queue && ae.dequeue(this, r.queue)
        }, r
    }, ae.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ae.isEmptyObject(e), a = ae.speed(t, n, r), o = function () {
                var t = B(this, ae.extend({}, e), a);
                (i || ke.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", a = ae.timers, o = ke.get(this);
                if (i) o[i] && o[i].stop && r(o[i]); else for (i in o)o[i] && o[i].stop && st.test(i) && r(o[i]);
                for (i = a.length; i--;)a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                !t && n || ae.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ke.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = ae.timers, o = r ? r.length : 0;
                for (n.finish = !0, ae.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ae.each(["toggle", "show", "hide"], function (e, t) {
        var n = ae.fn[t];
        ae.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ae.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ae.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ae.timers = [], ae.fx.tick = function () {
        var e, t = 0, n = ae.timers;
        for (it = ae.now(); t < n.length; t++)e = n[t],
        e() || n[t] !== e || n.splice(t--, 1);
        n.length || ae.fx.stop(), it = void 0
    }, ae.fx.timer = function (e) {
        ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
    }, ae.fx.interval = 13, ae.fx.start = function () {
        at || (at = e.setInterval(ae.fx.tick, ae.fx.interval))
    }, ae.fx.stop = function () {
        e.clearInterval(at), at = null
    }, ae.fx.speeds = {slow: 600, fast: 200, _default: 400}, ae.fn.delay = function (t, n) {
        return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    }, function () {
        var e = U.createElement("input"), t = U.createElement("select"), n = t.appendChild(U.createElement("option"));
        e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = U.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
    var lt, ut = ae.expr.attrHandle;
    ae.fn.extend({
        attr: function (e, t) {
            return Ce(this, ae.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ae.removeAttr(this, e)
            })
        }
    }), ae.extend({
        attr: function (e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === a && ae.isXMLDoc(e) || (t = t.toLowerCase(), i = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ae.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!re.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, i = 0, a = t && t.match(be);
            if (a && 1 === e.nodeType)for (; n = a[i++];)r = ae.propFix[n] || n, ae.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), lt = {
        set: function (e, t, n) {
            return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ut[t] || ae.find.attr;
        ut[t] = function (e, t, r) {
            var i, a;
            return r || (a = ut[t], ut[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ut[t] = a), i
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function (e, t) {
            return Ce(this, ae.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[ae.propFix[e] || e]
            })
        }
    }), ae.extend({
        prop: function (e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)return 1 === a && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, i = ae.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), re.optSelected || (ae.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ae.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function (e) {
            var t, n, r, i, a, o, s, l = 0;
            if (ae.isFunction(e))return this.each(function (t) {
                ae(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(be) || []; n = this[l++];)if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                for (o = 0; a = t[o++];)r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                s = ae.trim(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, a, o, s, l = 0;
            if (ae.isFunction(e))return this.each(function (t) {
                ae(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(be) || []; n = this[l++];)if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                for (o = 0; a = t[o++];)for (; r.indexOf(" " + a + " ") > -1;)r = r.replace(" " + a + " ", " ");
                s = ae.trim(r), i !== s && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function (n) {
                        ae(this).toggleClass(e.call(this, n, R(this), t), t)
                    }) : this.each(function () {
                        var t, r, i, a;
                        if ("string" === n)for (r = 0, i = ae(this), a = e.match(be) || []; t = a[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = R(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ke.get(this, "__className__") || ""))
                    })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + R(n) + " ").replace(dt, " ").indexOf(t) > -1)return !0;
            return !1
        }
    });
    var ft = /\r/g, ht = /[\x20\t\r\n\f]+/g;
    ae.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = ae.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ae(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ae.isArray(i) && (i = ae.map(i, function (e) {
                                return null == e ? "" : e + ""
                            })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return t = ae.valHooks[i.type] || ae.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)
            }
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ae.find.attr(e, "value");
                    return null != t ? t : ae.trim(ae.text(e)).replace(ht, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)if (n = r[l], (n.selected || l === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ae(n).val(), a)return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, r, i = e.options, a = ae.makeArray(t), o = i.length; o--;)r = i[o], (r.selected = ae.inArray(ae.valHooks.option.get(r), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), ae.each(["radio", "checkbox"], function () {
        ae.valHooks[this] = {
            set: function (e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0
            }
        }, re.checkOn || (ae.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    ae.extend(ae.event, {
        trigger: function (t, n, r, i) {
            var a, o, s, l, u, c, p, d = [r || U], f = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = r = r || U, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(f + ae.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[ae.expando] ? t : new ae.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ae.makeArray(n, [t]), p = ae.event.special[f] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                if (!i && !p.noBubble && !ae.isWindow(r)) {
                    for (l = p.delegateType || f, mt.test(l + f) || (o = o.parentNode); o; o = o.parentNode)d.push(o), s = o;
                    s === (r.ownerDocument || U) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0; (o = d[a++]) && !t.isPropagationStopped();)t.type = a > 1 ? l : p.bindType || f, c = (ke.get(o, "events") || {})[t.type] && ke.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && Se(o) && (t.result = c.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Se(r) || u && ae.isFunction(r[f]) && !ae.isWindow(r) && (s = r[u], s && (r[u] = null), ae.event.triggered = f, r[f](), ae.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = ae.extend(new ae.Event, n, {type: e, isSimulated: !0});
            ae.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }), ae.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ae.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ae.event.trigger(e, t, n, !0) : void 0
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ae.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ae.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || ae.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            ae.event.simulate(t, e.target, ae.event.fix(e))
        };
        ae.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = ke.access(r, t);
                i || r.addEventListener(e, n, !0), ke.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = ke.access(r, t) - 1;
                i ? ke.access(r, t, i) : (r.removeEventListener(e, n, !0), ke.remove(r, t))
            }
        }
    });
    var gt = e.location, vt = ae.now(), yt = /\?/;
    ae.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, ae.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t)return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n
    };
    var xt = /#.*$/, wt = /([?&])_=[^&]*/, bt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ct = /^(?:GET|HEAD)$/, St = /^\/\//, kt = {}, Et = {}, Dt = "*/".concat("*"), Nt = U.createElement("a");
    Nt.href = gt.href, ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Tt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? G(G(e, ae.ajaxSettings), t) : G(ae.ajaxSettings, e)
        },
        ajaxPrefilter: F(kt),
        ajaxTransport: F(Et),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var u, p, y, x, b, C = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), i = void 0, o = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, r && (x = $(d, T, r)), x = X(d, x, T, u), u ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ae.lastModified[a] = b), b = T.getResponseHeader("etag"), b && (ae.etag[a] = b)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, p = x.data, y = x.error, u = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? m.resolveWith(f, [p, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? p : y]), g.fireWith(f, [T, C]), c && (h.trigger("ajaxComplete", [T, d]), --ae.active || ae.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, a, o, s, l, u, c, p, d = ae.ajaxSetup({}, n), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? ae(f) : ae.event, m = ae.Deferred(), g = ae.Callbacks("once memory"), v = d.statusCode || {}, y = {}, x = {}, w = 0, b = "canceled", T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === w) {
                        if (!s)for (s = {}; t = bt.exec(o);)s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === w ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return w || (e = x[n] = x[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return w || (d.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > w)for (t in e)v[t] = [v[t], e[t]]; else T.always(e[T.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return i && i.abort(t), r(0, t), this
                }
            };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || gt.href) + "").replace(xt, "").replace(St, gt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ae.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain) {
                u = U.createElement("a");
                try {
                    u.href = d.url, u.href = u.href, d.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
                } catch (C) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = ae.param(d.data, d.traditional)), W(kt, d, n, T), 2 === w)return T;
            c = ae.event && d.global, c && 0 === ae.active++ && ae.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ct.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (yt.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = wt.test(a) ? a.replace(wt, "$1_=" + vt++) : a + (yt.test(a) ? "&" : "?") + "_=" + vt++)), d.ifModified && (ae.lastModified[a] && T.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && T.setRequestHeader("If-None-Match", ae.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : d.accepts["*"]);
            for (p in d.headers)T.setRequestHeader(p, d.headers[p]);
            if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === w))return T.abort();
            b = "abort";
            for (p in{success: 1, error: 1, complete: 1})T[p](d[p]);
            if (i = W(Et, d, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), 2 === w)return T;
                d.async && d.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, i.send(y, r)
                } catch (C) {
                    if (!(2 > w))throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return ae.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ae.get(e, void 0, t, "script")
        }
    }), ae.each(["get", "post"], function (e, t) {
        ae[t] = function (e, n, r, i) {
            return ae.isFunction(n) && (i = i || r, r = n, n = void 0), ae.ajax(ae.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, ae.isPlainObject(e) && e))
        }
    }), ae._evalUrl = function (e) {
        return ae.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, ae.fn.extend({
        wrapAll: function (e) {
            var t;
            return ae.isFunction(e) ? this.each(function (t) {
                    ae(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                    return e
                }).append(this)), this)
        }, wrapInner: function (e) {
            return ae.isFunction(e) ? this.each(function (t) {
                    ae(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ae(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
        }, wrap: function (e) {
            var t = ae.isFunction(e);
            return this.each(function (n) {
                ae(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ae.expr.filters.hidden = function (e) {
        return !ae.expr.filters.visible(e)
    }, ae.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var At = /%20/g, Pt = /\[\]$/, Lt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i;
    ae.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = ae.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)_(n, e[n], t, i);
        return r.join("&").replace(At, "+")
    }, ae.fn.extend({
        serialize: function () {
            return ae.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && jt.test(this.nodeName) && !Mt.test(e) && (this.checked || !je.test(e))
            }).map(function (e, t) {
                var n = ae(this).val();
                return null == n ? null : ae.isArray(n) ? ae.map(n, function (e) {
                            return {name: t.name, value: e.replace(Lt, "\r\n")}
                        }) : {name: t.name, value: n.replace(Lt, "\r\n")}
            }).get()
        }
    }), ae.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ht = {0: 200, 1223: 204}, It = ae.ajaxSettings.xhr();
    re.cors = !!It && "withCredentials" in It, re.ajax = It = !!It, ae.ajaxTransport(function (t) {
        var n, r;
        return re.cors || It && !t.crossDomain ? {
                send: function (i, a) {
                    var o, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i)s.setRequestHeader(o, i[o]);
                    n = function (e) {
                        return function () {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                            4 === s.readyState && e.setTimeout(function () {
                                n && r()
                            })
                        }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n)throw l
                    }
                }, abort: function () {
                    n && n()
                }
            } : void 0
    }), ae.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return ae.globalEval(e), e
            }
        }
    }), ae.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ae.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = ae("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), U.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var zt = [], qt = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = zt.pop() || ae.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), ae.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, a, o, s = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return o || ae.error(i + " was not called"), o[0]
            }, t.dataTypes[0] = "json", a = e[i], e[i] = function () {
                o = arguments
            }, r.always(function () {
                void 0 === a ? ae(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, zt.push(i)), o && ae.isFunction(a) && a(o[0]), o = a = void 0
            }), "script") : void 0
    }), ae.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || U;
        var r = he.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && ae(i).remove(), ae.merge([], r.childNodes))
    };
    var Ot = ae.fn.load;
    ae.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
        var r, i, a, o = this, s = e.indexOf(" ");
        return s > -1 && (r = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && ae.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            a = arguments, o.html(r ? ae("<div>").append(ae.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
                o.each(function () {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
    }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ae.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ae.expr.filters.animated = function (e) {
        return ae.grep(ae.timers, function (t) {
            return e === t.elem
        }).length
    }, ae.offset = {
        setOffset: function (e, t, n) {
            var r, i, a, o, s, l, u, c = ae.css(e, "position"), p = ae(e), d = {};
            "static" === c && (e.style.position = "relative"), s = p.offset(), a = ae.css(e, "top"), l = ae.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1, u ? (r = p.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : p.css(d)
        }
    }, ae.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    ae.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {top: 0, left: 0}, a = r && r.ownerDocument;
            if (a)return t = a.documentElement, ae.contains(t, r) ? (i = r.getBoundingClientRect(), n = Y(a), {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (r = e.offset()), r.top += ae.css(e[0], "borderTopWidth", !0), r.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - ae.css(n, "marginTop", !0),
                    left: t.left - r.left - ae.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ae.css(e, "position");)e = e.offsetParent;
                return e || Je
            })
        }
    }), ae.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        ae.fn[e] = function (r) {
            return Ce(this, function (e, r, i) {
                var a = Y(e);
                return void 0 === i ? a ? a[t] : e[r] : void(a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), ae.each(["top", "left"], function (e, t) {
        ae.cssHooks[t] = D(re.pixelPosition, function (e, n) {
            return n ? (n = E(e, t), Ue.test(n) ? ae(e).position()[t] + "px" : n) : void 0
        })
    }), ae.each({Height: "height", Width: "width"}, function (e, t) {
        ae.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            ae.fn[r] = function (r, i) {
                var a = arguments.length && (n || "boolean" != typeof r), o = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ce(this, function (t, n, r) {
                    var i;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ae.css(t, n, o) : ae.style(t, n, r, o)
                }, t, a ? r : void 0, a, null)
            }
        })
    }), ae.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ae
    });
    var Bt = e.jQuery, Rt = e.$;
    return ae.noConflict = function (t) {
        return e.$ === ae && (e.$ = Rt), t && e.jQuery === ae && (e.jQuery = Bt), ae
    }, t || (e.jQuery = e.$ = ae), ae
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.Swiper = t(e.jQuery)
}(this, function (e) {
    "use strict";
    function t(e) {
        e.fn.swiper = function (t) {
            var r;
            return e(this).each(function () {
                var e = new n(this, t);
                r || (r = e)
            }), r
        }
    }

    var n = function (t, r) {
        function i(e) {
            return Math.floor(e)
        }

        function a() {
            x.autoplayTimeoutId = setTimeout(function () {
                x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? r.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
            }, x.params.autoplay)
        }

        function o(t, n) {
            var r = e(t.target);
            if (!r.is(n))if ("string" == typeof n) r = r.parents(n); else if (n.nodeType) {
                var i;
                return r.parents().each(function (e, t) {
                    t === n && (i = n)
                }), i ? n : void 0
            }
            if (0 !== r.length)return r[0]
        }

        function s(e, t) {
            t = t || {};
            var n = window.MutationObserver || window.WebkitMutationObserver, r = new n(function (e) {
                e.forEach(function (e) {
                    x.onResize(!0), x.emit("onObserverUpdate", x, e)
                })
            });
            r.observe(e, {
                attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                childList: "undefined" == typeof t.childList ? !0 : t.childList,
                characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
            }), x.observers.push(r)
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t))return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t))return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var n = !1;
                    if (x.container.parents(".swiper-slide").length > 0 && 0 === x.container.parents(".swiper-slide-active").length)return;
                    var r = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, i = window.innerWidth, a = window.innerHeight, o = x.container.offset();
                    x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                    for (var s = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < s.length; l++) {
                        var u = s[l];
                        u[0] >= r.left && u[0] <= r.left + i && u[1] >= r.top && u[1] <= r.top + a && (n = !0)
                    }
                    if (!n)return
                }
                x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev())
            }
        }

        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = x.mousewheel.event, n = 0, r = x.rtl ? -1 : 1;
            if ("mousewheel" === t)if (x.params.mousewheelForceToAxis)if (x.isHorizontal()) {
                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))return;
                n = e.wheelDeltaX * r
            } else {
                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))return;
                n = e.wheelDeltaY
            } else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r : -e.wheelDeltaY; else if ("DOMMouseScroll" === t) n = -e.detail; else if ("wheel" === t)if (x.params.mousewheelForceToAxis)if (x.isHorizontal()) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))return;
                n = -e.deltaX * r
            } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))return;
                n = -e.deltaY
            } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r : -e.deltaY;
            if (0 !== n) {
                if (x.params.mousewheelInvert && (n = -n), x.params.freeMode) {
                    var i = x.getWrapperTranslate() + n * x.params.mousewheelSensitivity, a = x.isBeginning, o = x.isEnd;
                    if (i >= x.minTranslate() && (i = x.minTranslate()), i <= x.maxTranslate() && (i = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(i), x.updateProgress(), x.updateActiveIndex(), (!a && x.isBeginning || !o && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function () {
                                x.slideReset()
                            }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), 0 === i || i === x.maxTranslate())return
                } else {
                    if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)if (0 > n)if (x.isEnd && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges)return !0
                    } else x.slideNext(); else if (x.isBeginning && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges)return !0
                    } else x.slidePrev();
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return x.params.autoplay && x.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function c(t, n) {
            t = e(t);
            var r, i, a, o = x.rtl ? -1 : 1;
            r = t.attr("data-swiper-parallax") || "0", i = t.attr("data-swiper-parallax-x"), a = t.attr("data-swiper-parallax-y"), i || a ? (i = i || "0", a = a || "0") : x.isHorizontal() ? (i = r, a = "0") : (a = r, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n * o + "%" : i * n * o + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%" : a * n + "px", t.transform("translate3d(" + i + ", " + a + ",0px)")
        }

        function p(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }

        if (!(this instanceof n))return new n(t, r);
        var d = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0},
            flip: {slideShadows: !0, limitRotation: !0},
            cube: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94},
            fade: {crossFade: !1},
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }, f = r && r.virtualTranslate;
        r = r || {};
        var h = {};
        for (var m in r)if ("object" != typeof r[m] || null === r[m] || (r[m].nodeType || r[m] === window || r[m] === document || "undefined" != typeof Dom7 && r[m] instanceof Dom7 || "undefined" != typeof jQuery && r[m] instanceof jQuery)) h[m] = r[m]; else {
            h[m] = {};
            for (var g in r[m])h[m][g] = r[m][g]
        }
        for (var v in d)if ("undefined" == typeof r[v]) r[v] = d[v]; else if ("object" == typeof r[v])for (var y in d[v])"undefined" == typeof r[v][y] && (r[v][y] = d[v][y]);
        var x = this;
        if (x.params = r, x.originalParams = h, x.classNames = [], "undefined" != typeof e && "undefined" != typeof Dom7 && (e = Dom7), ("undefined" != typeof e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (x.$ = e, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function () {
                if (!x.params.breakpoints)return !1;
                var e, t = !1, n = [];
                for (e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e) && n.push(e);
                n.sort(function (e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var r = 0; r < n.length; r++)e = n[r], e >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, x.setBreakpoint = function () {
                var e = x.getActiveBreakpoint();
                if (e && x.currentBreakpoint !== e) {
                    var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams, n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                    for (var r in t)x.params[r] = t[r];
                    x.currentBreakpoint = e, n && x.destroyLoop && x.reLoop(!0)
                }
            }, x.params.breakpoints && x.setBreakpoint(), x.container = e(t), 0 !== x.container.length)) {
            if (x.container.length > 1) {
                var w = [];
                return x.container.each(function () {
                    w.push(new n(this, r))
                }), w
            }
            x.container[0].swiper = x, x.container.data("swiper", x), x.classNames.push("swiper-container-" + x.params.direction), x.params.freeMode && x.classNames.push("swiper-container-free-mode"), x.support.flexbox || (x.classNames.push("swiper-container-no-flexbox"), x.params.slidesPerColumn = 1), x.params.autoHeight && x.classNames.push("swiper-container-autoheight"), (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push("swiper-container-3d")) : x.params.effect = "slide"), "slide" !== x.params.effect && x.classNames.push("swiper-container-" + x.params.effect),
            "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0, x.params.setWrapperSize = !1), "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, x.params.setWrapperSize = !1, "undefined" == typeof f && (x.params.virtualTranslate = !0)), x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1), x.wrapper = x.container.children("." + x.params.wrapperClass), x.params.pagination && (x.paginationContainer = e(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass("swiper-pagination-clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass("swiper-pagination-" + x.params.paginationType)), (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = e(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))), x.isHorizontal = function () {
                return "horizontal" === x.params.direction
            }, x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")), x.rtl && x.classNames.push("swiper-container-rtl"), x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")), x.params.slidesPerColumn > 1 && x.classNames.push("swiper-container-multirow"), x.device.android && x.classNames.push("swiper-container-android"), x.container.addClass(x.classNames.join(" ")), x.translate = 0, x.progress = 0, x.velocity = 0, x.lockSwipeToNext = function () {
                x.params.allowSwipeToNext = !1
            }, x.lockSwipeToPrev = function () {
                x.params.allowSwipeToPrev = !1
            }, x.lockSwipes = function () {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1
            }, x.unlockSwipeToNext = function () {
                x.params.allowSwipeToNext = !0
            }, x.unlockSwipeToPrev = function () {
                x.params.allowSwipeToPrev = !0
            }, x.unlockSwipes = function () {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0
            }, x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab"), x.imagesToLoad = [], x.imagesLoaded = 0, x.loadImage = function (e, t, n, r, i) {
                function a() {
                    i && i()
                }

                var o;
                e.complete && r ? a() : t ? (o = new window.Image, o.onload = a, o.onerror = a, n && (o.srcset = n), t && (o.src = t)) : a()
            }, x.preloadImages = function () {
                function e() {
                    "undefined" != typeof x && null !== x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                }

                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++)x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), !0, e)
            }, x.autoplayTimeoutId = void 0, x.autoplaying = !1, x.autoplayPaused = !1, x.startAutoplay = function () {
                return "undefined" != typeof x.autoplayTimeoutId ? !1 : x.params.autoplay ? x.autoplaying ? !1 : (x.autoplaying = !0, x.emit("onAutoplayStart", x), void a()) : !1
            }, x.stopAutoplay = function (e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
            }, x.pauseAutoplay = function (e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, a()) : x.wrapper.transitionEnd(function () {
                        x && (x.autoplayPaused = !1, x.autoplaying ? a() : x.stopAutoplay())
                    }))
            }, x.minTranslate = function () {
                return -x.snapGrid[0]
            }, x.maxTranslate = function () {
                return -x.snapGrid[x.snapGrid.length - 1]
            }, x.updateAutoHeight = function () {
                var e = x.slides.eq(x.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var t = e.offsetHeight;
                    t && x.wrapper.css("height", t + "px")
                }
            }, x.updateContainerSize = function () {
                var e, t;
                e = "undefined" != typeof x.params.width ? x.params.width : x.container[0].clientWidth, t = "undefined" != typeof x.params.height ? x.params.height : x.container[0].clientHeight, 0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width : x.height)
            }, x.updateSlidesSize = function () {
                x.slides = x.wrapper.children("." + x.params.slideClass), x.snapGrid = [], x.slidesGrid = [], x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween, n = -x.params.slidesOffsetBefore, r = 0, a = 0;
                if ("undefined" != typeof x.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size), x.virtualSize = -t, x.rtl ? x.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : x.slides.css({marginRight: "", marginBottom: ""});
                    var o;
                    x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var s, l = x.params.slidesPerColumn, u = o / l, c = u - (x.params.slidesPerColumn * u - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        s = 0;
                        var p = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var d, f, h;
                            "column" === x.params.slidesPerColumnFill ? (f = Math.floor(e / l), h = e - f * l, (f > c || f === c && h === l - 1) && ++h >= l && (h = 0, f++), d = f + h * o / l, p.css({
                                    "-webkit-box-ordinal-group": d,
                                    "-moz-box-ordinal-group": d,
                                    "-ms-flex-order": d,
                                    "-webkit-order": d,
                                    order: d
                                })) : (h = Math.floor(e / u), f = e - h * u), p.css({"margin-top": 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px"}).attr("data-swiper-column", f).attr("data-swiper-row", h)
                        }
                        "none" !== p.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? p.outerWidth(!0) : p.outerHeight(!0), x.params.roundLengths && (s = i(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (s = i(s)), x.isHorizontal() ? x.slides[e].style.width = s + "px" : x.slides[e].style.height = s + "px"), x.slides[e].swiperSlideSize = s, x.slidesSizesGrid.push(s), x.params.centeredSlides ? (n = n + s / 2 + r / 2 + t, 0 === e && (n = n - x.size / 2 - t), Math.abs(n) < .001 && (n = 0), a % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n)) : (a % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n), n = n + s + t), x.virtualSize += s + t, r = s, a++)
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var m;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}), x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}) : x.wrapper.css({height: x.virtualSize + x.params.spaceBetween + "px"})), x.params.slidesPerColumn > 1 && (x.virtualSize = (s + x.params.spaceBetween) * o, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.wrapper.css({width: x.virtualSize + x.params.spaceBetween + "px"}), x.params.centeredSlides)) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++)x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                        x.snapGrid = m
                    }
                    if (!x.params.centeredSlides) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++)x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                        x.snapGrid = m, Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]), 0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({marginLeft: t + "px"}) : x.slides.css({marginRight: t + "px"}) : x.slides.css({marginBottom: t + "px"})), x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            }, x.updateSlidesOffset = function () {
                for (var e = 0; e < x.slides.length; e++)x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
            }, x.updateSlidesProgress = function (e) {
                if ("undefined" == typeof e && (e = x.translate || 0), 0 !== x.slides.length) {
                    "undefined" == typeof x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e), x.slides.removeClass(x.params.slideVisibleClass);
                    for (var n = 0; n < x.slides.length; n++) {
                        var r = x.slides[n], i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var a = -(t - r.swiperSlideOffset), o = a + x.slidesSizesGrid[n], s = a >= 0 && a < x.size || o > 0 && o <= x.size || 0 >= a && o >= x.size;
                            s && x.slides.eq(n).addClass(x.params.slideVisibleClass)
                        }
                        r.progress = x.rtl ? -i : i
                    }
                }
            }, x.updateProgress = function (e) {
                "undefined" == typeof e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate(), n = x.isBeginning, r = x.isEnd;
                0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1), x.isBeginning && !n && x.emit("onReachBeginning", x), x.isEnd && !r && x.emit("onReachEnd", x), x.params.watchSlidesProgress && x.updateSlidesProgress(e), x.emit("onProgress", x, x.progress)
            }, x.updateActiveIndex = function () {
                var e, t, n, r = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++)"undefined" != typeof x.slidesGrid[t + 1] ? r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] && (e = t + 1) : r >= x.slidesGrid[t] && (e = t);
                (0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / x.params.slidesPerGroup), n >= x.snapGrid.length && (n = x.snapGrid.length - 1), e !== x.activeIndex && (x.snapIndex = n, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses())
            }, x.updateClasses = function () {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass);
                var t = x.slides.eq(x.activeIndex);
                t.addClass(x.params.slideActiveClass);
                var n = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === n.length && x.slides.eq(0).addClass(x.params.slideNextClass);
                var r = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === r.length && x.slides.eq(-1).addClass(x.params.slidePrevClass), x.paginationContainer && x.paginationContainer.length > 0) {
                    var i, a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? (i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), i > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), i > a - 1 && (i -= a), 0 > i && "bullets" !== x.params.paginationType && (i = a + i)) : i = "undefined" != typeof x.snapIndex ? x.snapIndex : x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function () {
                                e(this).index() === i && e(this).addClass(x.params.bulletActiveClass)
                            }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(a)), "progress" === x.params.paginationType) {
                        var o = (i + 1) / a, s = o, l = 1;
                        x.isHorizontal() || (l = o, s = 1), x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + s + ") scaleY(" + l + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, a)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            }, x.updatePagination = function () {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; t > n; n++)e += x.params.paginationBulletRender ? x.params.paginationBulletRender(n, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e), x.bullets = x.paginationContainer.find("." + x.params.bulletClass), x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)), "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)), "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            }, x.update = function (e) {
                function t() {
                    r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()), x.setWrapperTranslate(r), x.updateActiveIndex(), x.updateClasses()
                }

                if (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e) {
                    var n, r;
                    x.controller && x.controller.spline && (x.controller.spline = void 0), x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0), n || t())
                } else x.params.autoHeight && x.updateAutoHeight()
            }, x.onResize = function (e) {
                x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev, n = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0, x.updateContainerSize(), x.updateSlidesSize(), ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), x.controller && x.controller.spline && (x.controller.spline = void 0);
                var r = !1;
                if (x.params.freeMode) {
                    var i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(i), x.updateActiveIndex(), x.updateClasses(), x.params.autoHeight && x.updateAutoHeight()
                } else x.updateClasses(), r = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !r && x.lazy && x.lazy.load(), x.params.allowSwipeToPrev = t, x.params.allowSwipeToNext = n
            };
            var b = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? b = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (b = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : b[0],
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : b[1],
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : b[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction), x.initEvents = function (e) {
                var t = e ? "off" : "on", n = e ? "removeEventListener" : "addEventListener", i = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0], a = x.support.touch ? i : document, o = !!x.params.nested;
                x.browser.ie ? (i[n](x.touchEvents.start, x.onTouchStart, !1), a[n](x.touchEvents.move, x.onTouchMove, o), a[n](x.touchEvents.end, x.onTouchEnd, !1)) : (x.support.touch && (i[n](x.touchEvents.start, x.onTouchStart, !1), i[n](x.touchEvents.move, x.onTouchMove, o), i[n](x.touchEvents.end, x.onTouchEnd, !1)), !r.simulateTouch || x.device.ios || x.device.android || (i[n]("mousedown", x.onTouchStart, !1), document[n]("mousemove", x.onTouchMove, o), document[n]("mouseup", x.onTouchEnd, !1))), window[n]("resize", x.onResize), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)), x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)), (x.params.preventClicks || x.params.preventClicksPropagation) && i[n]("click", x.preventClicks, !0)
            }, x.attachEvents = function () {
                x.initEvents()
            }, x.detachEvents = function () {
                x.initEvents(!0)
            }, x.allowClick = !0, x.preventClicks = function (e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, x.onClickNext = function (e) {
                e.preventDefault(), x.isEnd && !x.params.loop || x.slideNext()
            }, x.onClickPrev = function (e) {
                e.preventDefault(), x.isBeginning && !x.params.loop || x.slidePrev()
            }, x.onClickIndex = function (t) {
                t.preventDefault();
                var n = e(this).index() * x.params.slidesPerGroup;
                x.params.loop && (n += x.loopedSlides), x.slideTo(n)
            }, x.updateClickedSlide = function (t) {
                var n = o(t, "." + x.params.slideClass), r = !1;
                if (n)for (var i = 0; i < x.slides.length; i++)x.slides[i] === n && (r = !0);
                if (!n || !r)return x.clickedSlide = void 0, void(x.clickedIndex = void 0);
                if (x.clickedSlide = n, x.clickedIndex = e(n).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var a, s = x.clickedIndex;
                    if (x.params.loop) {
                        if (x.animating)return;
                        a = e(x.clickedSlide).attr("data-swiper-slide-index"), x.params.centeredSlides ? s < x.loopedSlides - x.params.slidesPerView / 2 || s > x.slides.length - x.loopedSlides + x.params.slidesPerView / 2 ? (x.fixLoop(), s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                    x.slideTo(s)
                                }, 0)) : x.slideTo(s) : s > x.slides.length - x.params.slidesPerView ? (x.fixLoop(), s = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                    x.slideTo(s)
                                }, 0)) : x.slideTo(s)
                    } else x.slideTo(s)
                }
            };
            var T, C, S, k, E, D, N, A, P, L, M = "input, select, textarea, button", j = Date.now(), H = [];
            x.animating = !1, x.touches = {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0};
            var I, z;
            if (x.onTouchStart = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), I = "touchstart" === t.type, I || !("which" in t) || 3 !== t.which) {
                        if (x.params.noSwiping && o(t, "." + x.params.noSwipingClass))return void(x.allowClick = !0);
                        if (!x.params.swipeHandler || o(t, x.params.swipeHandler)) {
                            var n = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, r = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                            if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                                if (T = !0, C = !1, S = !0, E = void 0, z = void 0, x.touches.startX = n, x.touches.startY = r, k = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (A = !1), "touchstart" !== t.type) {
                                    var i = !0;
                                    e(t.target).is(M) && (i = !1), document.activeElement && e(document.activeElement).is(M) && document.activeElement.blur(), i && t.preventDefault()
                                }
                                x.emit("onTouchStart", x, t)
                            }
                        }
                    }
                }, x.onTouchMove = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), !I || "mousemove" !== t.type) {
                        if (t.preventedByNestedSwiper)return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                        if (x.params.onlyExternal)return x.allowClick = !1, void(T && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, k = Date.now()));
                        if (I && document.activeElement && t.target === document.activeElement && e(t.target).is(M))return C = !0, void(x.allowClick = !1);
                        if (S && x.emit("onTouchMove", x, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                            if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof E) {
                                var n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI;
                                E = x.isHorizontal() ? n > x.params.touchAngle : 90 - n > x.params.touchAngle
                            }
                            if (E && x.emit("onTouchMoveOpposite", x, t), "undefined" == typeof z && x.browser.ieTouch && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (z = !0)), T) {
                                if (E)return void(T = !1);
                                if (z || !x.browser.ieTouch) {
                                    x.allowClick = !1, x.emit("onSliderMove", x, t), t.preventDefault(), x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(), C || (r.loop && x.fixLoop(), N = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), L = !1, x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grabbing", x.container[0].style.cursor = "-moz-grabbin", x.container[0].style.cursor = "grabbing")), C = !0;
                                    var i = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                    i *= x.params.touchRatio, x.rtl && (i = -i), x.swipeDirection = i > 0 ? "prev" : "next", D = i + N;
                                    var a = !0;
                                    if (i > 0 && D > x.minTranslate() ? (a = !1, x.params.resistance && (D = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + N + i, x.params.resistanceRatio))) : 0 > i && D < x.maxTranslate() && (a = !1, x.params.resistance && (D = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - N - i, x.params.resistanceRatio))), a && (t.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && N > D && (D = N), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && D > N && (D = N), x.params.followFinger) {
                                        if (x.params.threshold > 0) {
                                            if (!(Math.abs(i) > x.params.threshold || A))return void(D = N);
                                            if (!A)return A = !0, x.touches.startX = x.touches.currentX, x.touches.startY = x.touches.currentY, D = N, void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                        }
                                        (x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(), x.params.freeMode && (0 === H.length && H.push({
                                            position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                            time: k
                                        }), H.push({
                                            position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), x.updateProgress(D), x.setWrapperTranslate(D)
                                    }
                                }
                            }
                        }
                    }
                }, x.onTouchEnd = function (t) {
                    if (t.originalEvent && (t = t.originalEvent), S && x.emit("onTouchEnd", x, t), S = !1, T) {
                        x.params.grabCursor && C && T && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab");
                        var n = Date.now(), r = n - k;
                        if (x.allowClick && (x.updateClickedSlide(t), x.emit("onTap", x, t), 300 > r && n - j > 300 && (P && clearTimeout(P), P = setTimeout(function () {
                                x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, t))
                            }, 300)), 300 > r && 300 > n - j && (P && clearTimeout(P), x.emit("onDoubleTap", x, t))), j = Date.now(), setTimeout(function () {
                                x && (x.allowClick = !0)
                            }, 0), !T || !C || !x.swipeDirection || 0 === x.touches.diff || D === N)return void(T = C = !1);
                        T = C = !1;
                        var i;
                        if (i = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -D, x.params.freeMode) {
                            if (i < -x.minTranslate())return void x.slideTo(x.activeIndex);
                            if (i > -x.maxTranslate())return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                            if (x.params.freeModeMomentum) {
                                if (H.length > 1) {
                                    var a = H.pop(), o = H.pop(), s = a.position - o.position, l = a.time - o.time;
                                    x.velocity = s / l, x.velocity = x.velocity / 2, Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0), (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0)
                                } else x.velocity = 0;
                                H.length = 0;
                                var u = 1e3 * x.params.freeModeMomentumRatio, c = x.velocity * u, p = x.translate + c;
                                x.rtl && (p = -p);
                                var d, f = !1, h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                if (p < x.maxTranslate()) x.params.freeModeMomentumBounce ? (p + x.maxTranslate() < -h && (p = x.maxTranslate() - h), d = x.maxTranslate(), f = !0, L = !0) : p = x.maxTranslate(); else if (p > x.minTranslate()) x.params.freeModeMomentumBounce ? (p - x.minTranslate() > h && (p = x.minTranslate() + h), d = x.minTranslate(), f = !0, L = !0) : p = x.minTranslate(); else if (x.params.freeModeSticky) {
                                    var m, g = 0;
                                    for (g = 0; g < x.snapGrid.length; g += 1)if (x.snapGrid[g] > -p) {
                                        m = g;
                                        break
                                    }
                                    p = Math.abs(x.snapGrid[m] - p) < Math.abs(x.snapGrid[m - 1] - p) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1], x.rtl || (p = -p)
                                }
                                if (0 !== x.velocity) u = x.rtl ? Math.abs((-p - x.translate) / x.velocity) : Math.abs((p - x.translate) / x.velocity); else if (x.params.freeModeSticky)return void x.slideReset();
                                x.params.freeModeMomentumBounce && f ? (x.updateProgress(d), x.setWrapperTransition(u), x.setWrapperTranslate(p), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && L && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(d), x.wrapper.transitionEnd(function () {
                                            x && x.onTransitionEnd()
                                        }))
                                    })) : x.velocity ? (x.updateProgress(p), x.setWrapperTransition(u), x.setWrapperTranslate(p), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                            x && x.onTransitionEnd()
                                        }))) : x.updateProgress(p), x.updateActiveIndex()
                            }
                            return void((!x.params.freeModeMomentum || r >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                        }
                        var v, y = 0, w = x.slidesSizesGrid[0];
                        for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup)"undefined" != typeof x.slidesGrid[v + x.params.slidesPerGroup] ? i >= x.slidesGrid[v] && i < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : i >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                        var b = (i - x.slidesGrid[y]) / w;
                        if (r > x.params.longSwipesMs) {
                            if (!x.params.longSwipes)return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)), "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                        } else {
                            if (!x.params.shortSwipes)return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup), "prev" === x.swipeDirection && x.slideTo(y)
                        }
                    }
                }, x._slideTo = function (e, t) {
                    return x.slideTo(e, t, !0, !0)
                }, x.slideTo = function (e, t, n, r) {
                    "undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), x.snapIndex = Math.floor(e / x.params.slidesPerGroup), x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                    var i = -x.snapGrid[x.snapIndex];
                    x.params.autoplay && x.autoplaying && (r || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()), x.updateProgress(i);
                    for (var a = 0; a < x.slidesGrid.length; a++)-Math.floor(100 * i) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                    return !x.params.allowSwipeToNext && i < x.translate && i < x.minTranslate() ? !1 : !x.params.allowSwipeToPrev && i > x.translate && i > x.maxTranslate() && (x.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.rtl && -i === x.translate || !x.rtl && i === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(i), !1) : (x.updateClasses(), x.onTransitionStart(n), 0 === t ? (x.setWrapperTranslate(i), x.setWrapperTransition(0), x.onTransitionEnd(n)) : (x.setWrapperTranslate(i), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function () {
                                        x && x.onTransitionEnd(n)
                                    }))), !0))
                }, x.onTransitionStart = function (e) {
                    "undefined" == typeof e && (e = !0), x.params.autoHeight && x.updateAutoHeight(), x.lazy && x.lazy.onTransitionStart(), e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                }, x.onTransitionEnd = function (e) {
                    x.animating = !1, x.setWrapperTransition(0), "undefined" == typeof e && (e = !0), x.lazy && x.lazy.onTransitionEnd(), e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))), x.params.hashnav && x.hashnav && x.hashnav.setHash()
                }, x.slideNext = function (e, t, n) {
                    if (x.params.loop) {
                        if (x.animating)return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                    }
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                }, x._slideNext = function (e) {
                    return x.slideNext(!0, e, !0)
                }, x.slidePrev = function (e, t, n) {
                    if (x.params.loop) {
                        if (x.animating)return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex - 1, t, e, n)
                    }
                    return x.slideTo(x.activeIndex - 1, t, e, n)
                }, x._slidePrev = function (e) {
                    return x.slidePrev(!0, e, !0)
                }, x.slideReset = function (e, t, n) {
                    return x.slideTo(x.activeIndex, t, e)
                }, x.setWrapperTransition = function (e, t) {
                    x.wrapper.transition(e), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e), x.params.parallax && x.parallax && x.parallax.setTransition(e), x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e), x.params.control && x.controller && x.controller.setTransition(e, t), x.emit("onSetTransition", x, e)
                }, x.setWrapperTranslate = function (e, t, n) {
                    var r = 0, a = 0, o = 0;
                    x.isHorizontal() ? r = x.rtl ? -e : e : a = e, x.params.roundLengths && (r = i(r), a = i(a)), x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + r + "px, " + a + "px, " + o + "px)") : x.wrapper.transform("translate(" + r + "px, " + a + "px)")), x.translate = x.isHorizontal() ? r : a;
                    var s, l = x.maxTranslate() - x.minTranslate();
                    s = 0 === l ? 0 : (e - x.minTranslate()) / l, s !== x.progress && x.updateProgress(e), t && x.updateActiveIndex(), "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate), x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate), x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate), x.params.control && x.controller && x.controller.setTranslate(x.translate, n), x.emit("onSetTranslate", x, x.translate)
                }, x.getTranslate = function (e, t) {
                    var n, r, i, a;
                    return "undefined" == typeof t && (t = "x"), x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
                                return e.replace(",", ".")
                            }).join(", ")), a = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), x.rtl && r && (r = -r), r || 0)
                }, x.getWrapperTranslate = function (e) {
                    return "undefined" == typeof e && (e = x.isHorizontal() ? "x" : "y"), x.getTranslate(x.wrapper[0], e)
                }, x.observers = [], x.initObservers = function () {
                    if (x.params.observeParents)for (var e = x.container.parents(), t = 0; t < e.length; t++)s(e[t]);
                    s(x.container[0], {childList: !1}), s(x.wrapper[0], {attributes: !1})
                }, x.disconnectObservers = function () {
                    for (var e = 0; e < x.observers.length; e++)x.observers[e].disconnect();
                    x.observers = []
                }, x.createLoop = function () {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                    var t = x.wrapper.children("." + x.params.slideClass);
                    "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length), x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10), x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides, x.loopedSlides > t.length && (x.loopedSlides = t.length);
                    var n, r = [], i = [];
                    for (t.each(function (n, a) {
                        var o = e(this);
                        n < x.loopedSlides && i.push(a), n < t.length && n >= t.length - x.loopedSlides && r.push(a), o.attr("data-swiper-slide-index", n)
                    }), n = 0; n < i.length; n++)x.wrapper.append(e(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                    for (n = r.length - 1; n >= 0; n--)x.wrapper.prepend(e(r[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                }, x.destroyLoop = function () {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(), x.slides.removeAttr("data-swiper-slide-index")
                }, x.reLoop = function (e) {
                    var t = x.activeIndex - x.loopedSlides;
                    x.destroyLoop(), x.createLoop(), x.updateSlidesSize(), e && x.slideTo(t + x.loopedSlides, 0, !1)
                }, x.fixLoop = function () {
                    var e;
                    x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
                }, x.appendSlide = function (e) {
                    if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length)for (var t = 0; t < e.length; t++)e[t] && x.wrapper.append(e[t]); else x.wrapper.append(e);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0)
                }, x.prependSlide = function (e) {
                    x.params.loop && x.destroyLoop();
                    var t = x.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++)e[n] && x.wrapper.prepend(e[n]);
                        t = x.activeIndex + e.length
                    } else x.wrapper.prepend(e);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.slideTo(t, 0, !1)
                }, x.removeSlide = function (e) {
                    x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                    var t, n = x.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var r = 0; r < e.length; r++)t = e[r], x.slides[t] && x.slides.eq(t).remove(), n > t && n--;
                        n = Math.max(n, 0)
                    } else t = e, x.slides[t] && x.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);
                    x.params.loop && x.createLoop(), x.params.observer && x.support.observer || x.update(!0), x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1)
                }, x.removeAllSlides = function () {
                    for (var e = [], t = 0; t < x.slides.length; t++)e.push(t);
                    x.removeSlide(e)
                }, x.effects = {
                    fade: {
                        setTranslate: function () {
                            for (var e = 0; e < x.slides.length; e++) {
                                var t = x.slides.eq(e), n = t[0].swiperSlideOffset, r = -n;
                                x.params.virtualTranslate || (r -= x.translate);
                                var i = 0;
                                x.isHorizontal() || (i = r, r = 0);
                                var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({opacity: a}).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                            }
                        }, setTransition: function (e) {
                            if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                x.slides.transitionEnd(function () {
                                    if (!t && x) {
                                        t = !0, x.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++)x.wrapper.trigger(e[n])
                                    }
                                })
                            }
                        }
                    }, flip: {
                        setTranslate: function () {
                            for (var t = 0; t < x.slides.length; t++) {
                                var n = x.slides.eq(t), r = n[0].progress;
                                x.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                                var i = n[0].swiperSlideOffset, a = -180 * r, o = a, s = 0, l = -i, u = 0;
                                if (x.isHorizontal() ? x.rtl && (o = -o) : (u = l, l = 0, s = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + x.slides.length, x.params.flip.slideShadows) {
                                    var c = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), p = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), n.append(c)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(p)), c.length && (c[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                                }
                                n.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)")
                            }
                        }, setTransition: function (t) {
                            if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), x.params.virtualTranslate && 0 !== t) {
                                var n = !1;
                                x.slides.eq(x.activeIndex).transitionEnd(function () {
                                    if (!n && x && e(this).hasClass(x.params.slideActiveClass)) {
                                        n = !0, x.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++)x.wrapper.trigger(t[r])
                                    }
                                })
                            }
                        }
                    }, cube: {
                        setTranslate: function () {
                            var t, n = 0;
                            x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(t)), t.css({height: x.width + "px"})) : (t = x.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), x.container.append(t))));
                            for (var r = 0; r < x.slides.length; r++) {
                                var i = x.slides.eq(r), a = 90 * r, o = Math.floor(a / 360);
                                x.rtl && (a = -a, o = Math.floor(-a / 360));
                                var s = Math.max(Math.min(i[0].progress, 1), -1), l = 0, u = 0, c = 0;
                                r % 4 === 0 ? (l = 4 * -o * x.size, c = 0) : (r - 1) % 4 === 0 ? (l = 0, c = 4 * -o * x.size) : (r - 2) % 4 === 0 ? (l = x.size + 4 * o * x.size, c = x.size) : (r - 3) % 4 === 0 && (l = -x.size, c = 3 * x.size + 4 * x.size * o), x.rtl && (l = -l), x.isHorizontal() || (u = l, l = 0);
                                var p = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + c + "px)";
                                if (1 >= s && s > -1 && (n = 90 * r + 90 * s, x.rtl && (n = 90 * -r - 90 * s)), i.transform(p), x.params.cube.slideShadows) {
                                    var d = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), f = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), i.append(d)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(f)), d.length && (d[0].style.opacity = Math.max(-s, 0)), f.length && (f[0].style.opacity = Math.max(s, 0))
                                }
                            }
                            if (x.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + x.size / 2 + "px"
                                }), x.params.cube.shadow)if (x.isHorizontal()) t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")"); else {
                                var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90), m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2), g = x.params.cube.shadowScale, v = x.params.cube.shadowScale / m, y = x.params.cube.shadowOffset;
                                t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                            }
                            var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                            x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n : 0) + "deg)")
                        }, setTransition: function (e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                        }
                    }, coverflow: {
                        setTranslate: function () {
                            for (var t = x.translate, n = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, r = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, i = x.params.coverflow.depth, a = 0, o = x.slides.length; o > a; a++) {
                                var s = x.slides.eq(a), l = x.slidesSizesGrid[a], u = s[0].swiperSlideOffset, c = (n - u - l / 2) / l * x.params.coverflow.modifier, p = x.isHorizontal() ? r * c : 0, d = x.isHorizontal() ? 0 : r * c, f = -i * Math.abs(c), h = x.isHorizontal() ? 0 : x.params.coverflow.stretch * c, m = x.isHorizontal() ? x.params.coverflow.stretch * c : 0;
                                Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(d) < .001 && (d = 0);
                                var g = "translate3d(" + m + "px," + h + "px," + f + "px)  rotateX(" + d + "deg) rotateY(" + p + "deg)";
                                if (s.transform(g), s[0].style.zIndex = -Math.abs(Math.round(c)) + 1, x.params.coverflow.slideShadows) {
                                    var v = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"), y = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'), s.append(v)), 0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(y)), v.length && (v[0].style.opacity = c > 0 ? c : 0), y.length && (y[0].style.opacity = -c > 0 ? -c : 0)
                                }
                            }
                            if (x.browser.ie) {
                                var w = x.wrapper[0].style;
                                w.perspectiveOrigin = n + "px 50%"
                            }
                        }, setTransition: function (e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, x.lazy = {
                    initialImageLoaded: !1, loadImageInSlide: function (t, n) {
                        if ("undefined" != typeof t && ("undefined" == typeof n && (n = !0), 0 !== x.slides.length)) {
                            var r = x.slides.eq(t), i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])), 0 !== i.length && i.each(function () {
                                var t = e(this);
                                t.addClass("swiper-lazy-loading");
                                var i = t.attr("data-background"), a = t.attr("data-src"), o = t.attr("data-srcset");
                                x.loadImage(t[0], a || i, o, !1, function () {
                                    if (i ? (t.css("background-image", 'url("' + i + '")'), t.removeAttr("data-background")) : (o && (t.attr("srcset", o), t.removeAttr("data-srcset")), a && (t.attr("src", a), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), x.params.loop && n) {
                                        var e = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(x.params.slideDuplicateClass)) {
                                            var s = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                            x.lazy.loadImageInSlide(s.index(), !1)
                                        } else {
                                            var l = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            x.lazy.loadImageInSlide(l.index(), !1)
                                        }
                                    }
                                    x.emit("onLazyImageReady", x, r[0], t[0])
                                }), x.emit("onLazyImageLoad", x, r[0], t[0])
                            })
                        }
                    }, load: function () {
                        var t;
                        if (x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function () {
                            x.lazy.loadImageInSlide(e(this).index())
                        }); else if (x.params.slidesPerView > 1)for (t = x.activeIndex; t < x.activeIndex + x.params.slidesPerView; t++)x.slides[t] && x.lazy.loadImageInSlide(t); else x.lazy.loadImageInSlide(x.activeIndex);
                        if (x.params.lazyLoadingInPrevNext)if (x.params.slidesPerView > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                            var n = x.params.lazyLoadingInPrevNextAmount, r = x.params.slidesPerView, i = Math.min(x.activeIndex + r + Math.max(n, r), x.slides.length), a = Math.max(x.activeIndex - Math.max(r, n), 0);
                            for (t = x.activeIndex + x.params.slidesPerView; i > t; t++)x.slides[t] && x.lazy.loadImageInSlide(t);
                            for (t = a; t < x.activeIndex; t++)x.slides[t] && x.lazy.loadImageInSlide(t)
                        } else {
                            var o = x.wrapper.children("." + x.params.slideNextClass);
                            o.length > 0 && x.lazy.loadImageInSlide(o.index());
                            var s = x.wrapper.children("." + x.params.slidePrevClass);
                            s.length > 0 && x.lazy.loadImageInSlide(s.index())
                        }
                    }, onTransitionStart: function () {
                        x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                    }, onTransitionEnd: function () {
                        x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                    }
                }, x.scrollbar = {
                    isTouched: !1, setDragPosition: function (e) {
                        var t = x.scrollbar, n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY, r = n - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2, i = -x.minTranslate() * t.moveDivider, a = -x.maxTranslate() * t.moveDivider;
                        i > r ? r = i : r > a && (r = a), r = -r / t.moveDivider, x.updateProgress(r), x.setWrapperTranslate(r, !0)
                    }, dragStart: function (e) {
                        var t = x.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), x.params.scrollbarHide && t.track.css("opacity", 1), x.wrapper.transition(100), t.drag.transition(100), x.emit("onScrollbarDragStart", x)
                    }, dragMove: function (e) {
                        var t = x.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x))
                    }, dragEnd: function (e) {
                        var t = x.scrollbar;
                        t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
                            t.track.css("opacity", 0), t.track.transition(400)
                        }, 1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                    }, enableDraggable: function () {
                        var t = x.scrollbar, n = x.support.touch ? t.track : document;
                        e(t.track).on(x.touchEvents.start, t.dragStart), e(n).on(x.touchEvents.move, t.dragMove), e(n).on(x.touchEvents.end, t.dragEnd)
                    }, disableDraggable: function () {
                        var t = x.scrollbar, n = x.support.touch ? t.track : document;
                        e(t.track).off(x.touchEvents.start, t.dragStart), e(n).off(x.touchEvents.move, t.dragMove), e(n).off(x.touchEvents.end, t.dragEnd)
                    }, set: function () {
                        if (x.params.scrollbar) {
                            var t = x.scrollbar;
                            t.track = e(x.params.scrollbar), x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = x.size / x.virtualSize, t.moveDivider = t.divider * (t.trackSize / x.size), t.dragSize = t.trackSize * t.divider, x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                        }
                    }, setTranslate: function () {
                        if (x.params.scrollbar) {
                            var e, t = x.scrollbar, n = (x.translate || 0, t.dragSize);
                            e = (t.trackSize - t.dragSize) * x.progress, x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"), x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    }, setTransition: function (e) {
                        x.params.scrollbar && x.scrollbar.drag.transition(e)
                    }
                }, x.controller = {
                    LinearSpline: function (e, t) {
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        var n, r;
                        this.x.length;
                        this.interpolate = function (e) {
                            return e ? (r = i(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                        };
                        var i = function () {
                            var e, t, n;
                            return function (r, i) {
                                for (t = -1, e = r.length; e - t > 1;)r[n = e + t >> 1] <= i ? t = n : e = n;
                                return e
                            }
                        }()
                    }, getInterpolateFunction: function (e) {
                        x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                    }, setTranslate: function (e, t) {
                        function r(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate, "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), a = -x.controller.spline.interpolate(-e)), a && "container" !== x.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), a = (e - x.minTranslate()) * i + t.minTranslate()), x.params.controlInverse && (a = t.maxTranslate() - a), t.updateProgress(a), t.setWrapperTranslate(a, !1, x), t.updateActiveIndex()
                        }

                        var i, a, o = x.params.control;
                        if (x.isArray(o))for (var s = 0; s < o.length; s++)o[s] !== t && o[s] instanceof n && r(o[s]); else o instanceof n && t !== o && r(o)
                    }, setTransition: function (e, t) {
                        function r(t) {
                            t.setWrapperTransition(e, x), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                                a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                            }))
                        }

                        var i, a = x.params.control;
                        if (x.isArray(a))for (i = 0; i < a.length; i++)a[i] !== t && a[i] instanceof n && r(a[i]); else a instanceof n && t !== a && r(a)
                    }
                }, x.hashnav = {
                    init: function () {
                        if (x.params.hashnav) {
                            x.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)for (var t = 0, n = 0, r = x.slides.length; r > n; n++) {
                                var i = x.slides.eq(n), a = i.attr("data-hash");
                                if (a === e && !i.hasClass(x.params.slideDuplicateClass)) {
                                    var o = i.index();
                                    x.slideTo(o, t, x.params.runCallbacksOnInit, !0)
                                }
                            }
                        }
                    }, setHash: function () {
                        x.hashnav.initialized && x.params.hashnav && (document.location.hash = x.slides.eq(x.activeIndex).attr("data-hash") || "")
                    }
                }, x.disableKeyboardControl = function () {
                    x.params.keyboardControl = !1, e(document).off("keydown", l)
                }, x.enableKeyboardControl = function () {
                    x.params.keyboardControl = !0, e(document).on("keydown", l)
                }, x.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, x.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), x.mousewheel.event = "wheel"
                } catch (q) {
                    (window.WheelEvent || x.container[0] && "wheel" in x.container[0]) && (x.mousewheel.event = "wheel")
                }
                !x.mousewheel.event && window.WheelEvent, x.mousewheel.event || void 0 === document.onmousewheel || (x.mousewheel.event = "mousewheel"), x.mousewheel.event || (x.mousewheel.event = "DOMMouseScroll")
            }
            x.disableMousewheelControl = function () {
                return x.mousewheel.event ? (x.container.off(x.mousewheel.event, u), !0) : !1
            }, x.enableMousewheelControl = function () {
                return x.mousewheel.event ? (x.container.on(x.mousewheel.event, u), !0) : !1
            }, x.parallax = {
                setTranslate: function () {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        c(this, x.progress)
                    }), x.slides.each(function () {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            var e = Math.min(Math.max(t[0].progress, -1), 1);
                            c(this, e)
                        })
                    })
                }, setTransition: function (t) {
                    "undefined" == typeof t && (t = x.params.speed), x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                        var n = e(this), r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), n.transition(r)
                    })
                }
            }, x._plugins = [];
            for (var O in x.plugins) {
                var B = x.plugins[O](x, x.params[O]);
                B && x._plugins.push(B)
            }
            return x.callPlugins = function (e) {
                for (var t = 0; t < x._plugins.length; t++)e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.emitterEventListeners = {}, x.emit = function (e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (x.emitterEventListeners[e])for (t = 0; t < x.emitterEventListeners[e].length; t++)x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, x.on = function (e, t) {
                return e = p(e), x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []), x.emitterEventListeners[e].push(t), x
            }, x.off = function (e, t) {
                var n;
                if (e = p(e), "undefined" == typeof t)return x.emitterEventListeners[e] = [], x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (n = 0; n < x.emitterEventListeners[e].length; n++)x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
                    return x
                }
            }, x.once = function (e, t) {
                e = p(e);
                var n = function () {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), x.off(e, n)
                };
                return x.on(e, n), x
            }, x.a11y = {
                makeFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function (e, t) {
                    return e.attr("role", t), e
                },
                addLabel: function (e, t) {
                    return e.attr("aria-label", t), e
                },
                disable: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (t) {
                    13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                },
                liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function (e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function () {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)), x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)), e(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function () {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function () {
                        var t = e(this);
                        x.a11y.makeFocusable(t), x.a11y.addRole(t, "button"), x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function () {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                }
            }, x.init = function () {
                x.params.loop && x.createLoop(), x.updateContainerSize(), x.updateSlidesSize(), x.updatePagination(), x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()), "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()), x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))), x.attachEvents(), x.params.observer && x.support.observer && x.initObservers(), x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(), x.params.autoplay && x.startAutoplay(), x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(), x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(), x.params.hashnav && x.hashnav && x.hashnav.init(), x.params.a11y && x.a11y && x.a11y.init(), x.emit("onInit", x)
            }, x.cleanupStyles = function () {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"), x.wrapper.removeAttr("style"), x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass), x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass), x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass), x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass), x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            }, x.destroy = function (e, t) {
                x.detachEvents(), x.stopAutoplay(), x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(), x.params.loop && x.destroyLoop(), t && x.cleanupStyles(), x.disconnectObservers(), x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(), x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(), x.params.a11y && x.a11y && x.a11y.destroy(), x.emit("onDestroy"), e !== !1 && (x = null)
            }, x.init(), x
        }
    };
    n.prototype = {
        isSafari: function () {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function () {
            var e = navigator.userAgent, t = e.match(/(Android);?[\s\/]+([\d.]+)?/), n = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/), i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {ios: n || i || r, android: t}
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(), flexbox: function () {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)if (t[n] in e)return !0
            }(), observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    }, t(e);
    var r = e;
    return r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function (e) {
        function t(a) {
            if (a.target === this)for (e.call(this, a), n = 0; n < r.length; n++)i.off(r[n], t)
        }

        var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
        if (e)for (n = 0; n < r.length; n++)i.on(r[n], t);
        return this
    }), "transform" in r.fn || (r.fn.transform = function (e) {
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
        }
        return this
    })), n
}), function e(t, n, r) {
    function i(o, s) {
        if (!n[o]) {
            if (!t[o]) {
                var l = "function" == typeof require && require;
                if (!s && l)return l(o, !0);
                if (a)return a(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var u = n[o] = {exports: {}};
            t[o][0].call(u.exports, function (e) {
                var n = t[o][1][e];
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[o].exports
    }

    for (var a = "function" == typeof require && require, o = 0; o < r.length; o++)i(r[o]);
    return i
}({
    1: [function (e, t, n) {
        var r = jQuery = e("jquery");
        t.exports = {
            initAnimationItems: function () {
                r(".animated").each(function () {
                    var e, t;
                    r(this).attr("data-origin-class", r(this).attr("class")), e = r(this).data("ani-duration"), t = r(this).data("ani-delay"), r(this).css({
                        visibility: "hidden",
                        "animation-duration": e,
                        "-webkit-animation-duration": e,
                        "animation-delay": t,
                        "-webkit-animation-delay": t
                    })
                })
            }, playAnimation: function (e) {
                this.clearAnimation();
                var t = e.slides[e.activeIndex].querySelectorAll(".animated");
                r(t).each(function () {
                    var e;
                    r(this).css({visibility: "visible"}), e = r(this).data("ani-name"), r(this).addClass(e)
                })
            }, clearAnimation: function () {
                r(".animated").each(function () {
                    r(this).css({visibility: "hidden"}), r(this).attr("class", r(this).data("origin-class"))
                })
            }
        }
    }, {jquery: 3}], 2: [function (e, t, n) {
        "use strict";
        var r = e("./animation-control.js");
        $(document).ready(function () {
            var e = $("audio").get(0), t = $(".btn-music"), n = $(".btn-swipe");
            t.click(function () {
                e.paused ? (e.play(), $(this).removeClass("paused")) : (e.pause(), $(this).addClass("paused"))
            }), new Swiper(".swiper-container", {
                mousewheelControl: !0,
                effect: "coverflow",
                speed: 400,
                direction: "vertical",
                fade: {crossFade: !1},
                coverflow: {rotate: 100, stretch: 0, depth: 300, modifier: 1, slideShadows: !1},
                flip: {limitRotation: !0, slideShadows: !1},
                onInit: function (e) {
                    r.initAnimationItems(), r.playAnimation(e)
                },
                onTransitionStart: function (e) {
                    e.activeIndex === e.slides.length - 1 ? n.hide() : n.show()
                },
                onTransitionEnd: function (e) {
                    r.playAnimation(e)
                },
                onTouchStart: function (n, r) {
                    !t.hasClass("paused") && e.paused && e.play()
                }
            }), $(".loading-overlay").slideUp()
        })
    }, {"./animation-control.js": 1}], 3: [function (e, t, n) {
        !function (e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (e) {
                        if (!e.document)throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            function n(e) {
                var t = !!e && "length" in e && e.length, n = ae.type(e);
                return "function" === n || ae.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function r(e, t, n) {
                if (ae.isFunction(t))return ae.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType)return ae.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (me.test(t))return ae.filter(t, e, n);
                    t = ae.filter(t, e)
                }
                return ae.grep(e, function (e) {
                    return Z.call(t, e) > -1 !== n
                })
            }

            function i(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function a(e) {
                var t = {};
                return ae.each(e.match(be) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function o() {
                U.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o), ae.ready()
            }

            function s() {
                this.expando = ae.expando + s.uid++
            }

            function l(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(Ne, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? ae.parseJSON(n) : n
                    } catch (i) {
                    }
                    Ee.set(e, t, n)
                } else n = void 0;
                return n
            }

            function u(e, t, n, r) {
                var i, a = 1, o = 20, s = r ? function () {
                        return r.cur()
                    } : function () {
                        return ae.css(e, t, "")
                    }, l = s(), u = n && n[3] || (ae.cssNumber[t] ? "" : "px"), c = (ae.cssNumber[t] || "px" !== u && +l) && Pe.exec(ae.css(e, t));
                if (c && c[3] !== u) {
                    u = u || c[3], n = n || [], c = +l || 1;
                    do a = a || ".5", c /= a, ae.style(e, t, c + u); while (a !== (a = s() / l) && 1 !== a && --o)
                }
                return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
            }

            function c(e, t) {
                var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n
            }

            function p(e, t) {
                for (var n = 0, r = e.length; r > n; n++)ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
            }

            function d(e, t, n, r, i) {
                for (var a, o, s, l, u, d, f = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)if (a = e[m], a || 0 === a)if ("object" === ae.type(a)) ae.merge(h, a.nodeType ? [a] : a); else if (qe.test(a)) {
                    for (o = o || f.appendChild(t.createElement("div")), s = (He.exec(a) || ["", ""])[1].toLowerCase(), l = ze[s] || ze._default, o.innerHTML = l[1] + ae.htmlPrefilter(a) + l[2], d = l[0]; d--;)o = o.lastChild;
                    ae.merge(h, o.childNodes), o = f.firstChild, o.textContent = ""
                } else h.push(t.createTextNode(a));
                for (f.textContent = "", m = 0; a = h[m++];)if (r && ae.inArray(a, r) > -1) i && i.push(a); else if (u = ae.contains(a.ownerDocument, a), o = c(f.appendChild(a), "script"), u && p(o), n)for (d = 0; a = o[d++];)Ie.test(a.type || "") && n.push(a);
                return f
            }

            function f() {
                return !0
            }

            function h() {
                return !1
            }

            function m() {
                try {
                    return U.activeElement
                } catch (e) {
                }
            }

            function g(e, t, n, r, i, a) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t)g(e, s, n, r, t[s], a);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h; else if (!i)return e;
                return 1 === a && (o = i, i = function (e) {
                    return ae().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = ae.guid++)), e.each(function () {
                    ae.event.add(this, t, i, r, n)
                })
            }

            function v(e, t) {
                return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function y(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function x(e) {
                var t = $e.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function w(e, t) {
                var n, r, i, a, o, s, l, u;
                if (1 === t.nodeType) {
                    if (ke.hasData(e) && (a = ke.access(e), o = ke.set(t, a), u = a.events)) {
                        delete o.handle, o.events = {};
                        for (i in u)for (n = 0, r = u[i].length; r > n; n++)ae.event.add(t, i, u[i][n]);
                    }
                    Ee.hasData(e) && (s = Ee.access(e), l = ae.extend({}, s), Ee.set(t, l))
                }
            }

            function b(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function T(e, t, n, r) {
                t = Q.apply([], t);
                var i, a, o, s, l, u, p = 0, f = e.length, h = f - 1, m = t[0], g = ae.isFunction(m);
                if (g || f > 1 && "string" == typeof m && !re.checkClone && Ge.test(m))return e.each(function (i) {
                    var a = e.eq(i);
                    g && (t[0] = m.call(this, i, a.html())), T(a, t, n, r)
                });
                if (f && (i = d(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
                    for (o = ae.map(c(i, "script"), y), s = o.length; f > p; p++)l = i, p !== h && (l = ae.clone(l, !0, !0), s && ae.merge(o, c(l, "script"))), n.call(e[p], l, p);
                    if (s)for (u = o[o.length - 1].ownerDocument, ae.map(o, x), p = 0; s > p; p++)l = o[p], Ie.test(l.type || "") && !ke.access(l, "globalEval") && ae.contains(u, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace(Xe, "")))
                }
                return e
            }

            function C(e, t, n) {
                for (var r, i = t ? ae.filter(t, e) : e, a = 0; null != (r = i[a]); a++)n || 1 !== r.nodeType || ae.cleanData(c(r)), r.parentNode && (n && ae.contains(r.ownerDocument, r) && p(c(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function S(e, t) {
                var n = ae(t.createElement(e)).appendTo(t.body), r = ae.css(n[0], "display");
                return n.detach(), r
            }

            function k(e) {
                var t = U, n = Ye[e];
                return n || (n = S(e, t), "none" !== n && n || (_e = (_e || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = _e[0].contentDocument, t.write(), t.close(), n = S(e, t), _e.detach()), Ye[e] = n), n
            }

            function E(e, t, n) {
                var r, i, a, o, s = e.style;
                return n = n || Ke(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, t)), n && !re.pixelMarginRight() && Ue.test(o) && Ve.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a), void 0 !== o ? o + "" : o
            }

            function D(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function N(e) {
                if (e in rt)return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)if (e = nt[n] + t, e in rt)return e
            }

            function A(e, t, n) {
                var r = Pe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function P(e, t, n, r, i) {
                for (var a = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += ae.css(e, n + Le[a], !0, i)), r ? ("content" === n && (o -= ae.css(e, "padding" + Le[a], !0, i)), "margin" !== n && (o -= ae.css(e, "border" + Le[a] + "Width", !0, i))) : (o += ae.css(e, "padding" + Le[a], !0, i), "padding" !== n && (o += ae.css(e, "border" + Le[a] + "Width", !0, i)));
                return o
            }

            function L(t, n, r) {
                var i = !0, a = "width" === n ? t.offsetWidth : t.offsetHeight, o = Ke(t), s = "border-box" === ae.css(t, "boxSizing", !1, o);
                if (U.msFullscreenElement && e.top !== e && t.getClientRects().length && (a = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= a || null == a) {
                    if (a = E(t, n, o), (0 > a || null == a) && (a = t.style[n]), Ue.test(a))return a;
                    i = s && (re.boxSizingReliable() || a === t.style[n]), a = parseFloat(a) || 0
                }
                return a + P(t, n, r || (s ? "border" : "content"), i, o) + "px"
            }

            function M(e, t) {
                for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++)r = e[o], r.style && (a[o] = ke.get(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Me(r) && (a[o] = ke.access(r, "olddisplay", k(r.nodeName)))) : (i = Me(r), "none" === n && i || ke.set(r, "olddisplay", i ? n : ae.css(r, "display"))));
                for (o = 0; s > o; o++)r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "" : "none"));
                return e
            }

            function j(e, t, n, r, i) {
                return new j.prototype.init(e, t, n, r, i)
            }

            function H() {
                return e.setTimeout(function () {
                    it = void 0
                }), it = ae.now()
            }

            function I(e, t) {
                var n, r = 0, i = {height: e};
                for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Le[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function z(e, t, n) {
                for (var r, i = (B.tweeners[t] || []).concat(B.tweeners["*"]), a = 0, o = i.length; o > a; a++)if (r = i[a].call(n, t, e))return r
            }

            function q(e, t, n) {
                var r, i, a, o, s, l, u, c, p = this, d = {}, f = e.style, h = e.nodeType && Me(e), m = ke.get(e, "fxshow");
                n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, p.always(function () {
                    p.always(function () {
                        s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ae.css(e, "display"), c = "none" === u ? ke.get(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === ae.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (r in t)if (i = t[r], ot.exec(i)) {
                    if (delete t[r], a = a || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r])continue;
                        h = !0
                    }
                    d[r] = m && m[r] || ae.style(e, r)
                } else u = void 0;
                if (ae.isEmptyObject(d)) "inline" === ("none" === u ? k(e.nodeName) : u) && (f.display = u); else {
                    m ? "hidden" in m && (h = m.hidden) : m = ke.access(e, "fxshow", {}), a && (m.hidden = !h), h ? ae(e).show() : p.done(function () {
                            ae(e).hide()
                        }), p.done(function () {
                        var t;
                        ke.remove(e, "fxshow");
                        for (t in d)ae.style(e, t, d[t])
                    });
                    for (r in d)o = z(h ? m[r] : 0, r, p), r in m || (m[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function O(e, t) {
                var n, r, i, a, o;
                for (n in e)if (r = ae.camelCase(n), i = t[r], a = e[n], ae.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = ae.cssHooks[r], o && "expand" in o) {
                    a = o.expand(a), delete e[r];
                    for (n in a)n in e || (e[n] = a[n], t[n] = i)
                } else t[r] = i
            }

            function B(e, t, n) {
                var r, i, a = 0, o = B.prefilters.length, s = ae.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (i)return !1;
                    for (var t = it || H(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(a);
                    return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
                }, u = s.promise({
                    elem: e,
                    props: ae.extend({}, t),
                    opts: ae.extend(!0, {specialEasing: {}, easing: ae.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: it || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = ae.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0, r = t ? u.tweens.length : 0;
                        if (i)return this;
                        for (i = !0; r > n; n++)u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }), c = u.props;
                for (O(c, u.opts.specialEasing); o > a; a++)if (r = B.prefilters[a].call(u, e, c, u.opts))return ae.isFunction(r.stop) && (ae._queueHooks(u.elem, u.opts.queue).stop = ae.proxy(r.stop, r)), r;
                return ae.map(c, z, u), ae.isFunction(u.opts.start) && u.opts.start.call(e, u), ae.fx.timer(ae.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function R(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function F(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0, a = t.toLowerCase().match(be) || [];
                    if (ae.isFunction(n))for (; r = a[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function W(e, t, n, r) {
                function i(s) {
                    var l;
                    return a[s] = !0, ae.each(e[s] || [], function (e, s) {
                        var u = s(t, n, r);
                        return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
                    }), l
                }

                var a = {}, o = e === Et;
                return i(t.dataTypes[0]) || !a["*"] && i("*")
            }

            function G(e, t) {
                var n, r, i = ae.ajaxSettings.flatOptions || {};
                for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && ae.extend(!0, e, r), e
            }

            function $(e, t, n) {
                for (var r, i, a, o, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)for (i in s)if (s[i] && s[i].test(r)) {
                    l.unshift(i);
                    break
                }
                if (l[0] in n) a = l[0]; else {
                    for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                            a = i;
                            break
                        }
                        o || (o = i)
                    }
                    a = a || o
                }
                return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
            }

            function X(e, t, n, r) {
                var i, a, o, s, l, u = {}, c = e.dataTypes.slice();
                if (c[1])for (o in e.converters)u[o.toLowerCase()] = e.converters[o];
                for (a = c.shift(); a;)if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                    if (o = u[l + " " + a] || u["* " + a], !o)for (i in u)if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                        o === !0 ? o = u[i] : u[i] !== !0 && (a = s[0], c.unshift(s[1]));
                        break
                    }
                    if (o !== !0)if (o && e["throws"]) t = o(t); else try {
                        t = o(t)
                    } catch (p) {
                        return {state: "parsererror", error: o ? p : "No conversion from " + l + " to " + a}
                    }
                }
                return {state: "success", data: t}
            }

            function _(e, t, n, r) {
                var i;
                if (ae.isArray(t)) ae.each(t, function (t, i) {
                    n || Pt.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                }); else if (n || "object" !== ae.type(t)) r(e, t); else for (i in t)_(e + "[" + i + "]", t[i], n, r)
            }

            function Y(e) {
                return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }

            var V = [], U = e.document, K = V.slice, Q = V.concat, J = V.push, Z = V.indexOf, ee = {}, te = ee.toString, ne = ee.hasOwnProperty, re = {}, ie = "2.2.3", ae = function (e, t) {
                return new ae.fn.init(e, t)
            }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^-ms-/, le = /-([\da-z])/gi, ue = function (e, t) {
                return t.toUpperCase()
            };
            ae.fn = ae.prototype = {
                jquery: ie, constructor: ae, selector: "", length: 0, toArray: function () {
                    return K.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
                }, pushStack: function (e) {
                    var t = ae.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e) {
                    return ae.each(this, e)
                }, map: function (e) {
                    return this.pushStack(ae.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(K.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length, n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: J, sort: V.sort, splice: V.splice
            }, ae.extend = ae.fn.extend = function () {
                var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)if (null != (e = arguments[s]))for (t in e)n = o[t], r = e[t], o !== r && (u && r && (ae.isPlainObject(r) || (i = ae.isArray(r))) ? (i ? (i = !1, a = n && ae.isArray(n) ? n : []) : a = n && ae.isPlainObject(n) ? n : {}, o[t] = ae.extend(u, a, r)) : void 0 !== r && (o[t] = r));
                return o
            }, ae.extend({
                expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {
                },
                isFunction: function (e) {
                    return "function" === ae.type(e)
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return null != e && e === e.window
                },
                isNumeric: function (e) {
                    var t = e && e.toString();
                    return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function (e) {
                    var t;
                    if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e))return !1;
                    if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))return !1;
                    for (t in e);
                    return void 0 === t || ne.call(e, t)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e)return !1;
                    return !0
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    var t, n = eval;
                    e = ae.trim(e), e && (1 === e.indexOf("use strict") ? (t = U.createElement("script"), t.text = e, U.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function (e) {
                    return e.replace(se, "ms-").replace(le, ue)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t) {
                    var r, i = 0;
                    if (n(e))for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(oe, "")
                },
                makeArray: function (e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? ae.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : Z.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function (e, t, n) {
                    for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++)r = !t(e[a], a), r !== s && i.push(e[a]);
                    return i
                },
                map: function (e, t, r) {
                    var i, a, o = 0, s = [];
                    if (n(e))for (i = e.length; i > o; o++)a = t(e[o], o, r), null != a && s.push(a); else for (o in e)a = t(e[o], o, r), null != a && s.push(a);
                    return Q.apply([], s)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, i;
                    return "string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e) ? (r = K.call(arguments, 2), i = function () {
                            return e.apply(t || this, r.concat(K.call(arguments)))
                        }, i.guid = e.guid = e.guid || ae.guid++, i) : void 0
                },
                now: Date.now,
                support: re
            }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = V[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            });
            var ce = function (e) {
                function t(e, t, n, r) {
                    var i, a, o, s, l, u, p, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
                    if (!r && ((t ? t.ownerDocument || t : R) !== M && L(t), t = t || M, H)) {
                        if (11 !== m && (u = ve.exec(e)))if (i = u[1]) {
                            if (9 === m) {
                                if (!(o = t.getElementById(i)))return n;
                                if (o.id === i)return n.push(o), n
                            } else if (h && (o = h.getElementById(i)) && O(t, o) && o.id === i)return n.push(o), n
                        } else {
                            if (u[2])return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)return J.apply(n, t.getElementsByClassName(i)), n
                        }
                        if (b.qsa && !X[e + " "] && (!I || !I.test(e))) {
                            if (1 !== m) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = B), p = k(e), a = p.length, l = de.test(s) ? "#" + s : "[id='" + s + "']"; a--;)p[a] = l + " " + d(p[a]);
                                f = p.join(","), h = ye.test(e) && c(t.parentNode) || t
                            }
                            if (f)try {
                                return J.apply(n, h.querySelectorAll(f)), n
                            } catch (g) {
                            } finally {
                                s === B && t.removeAttribute("id")
                            }
                        }
                    }
                    return D(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }

                    var t = [];
                    return e
                }

                function r(e) {
                    return e[B] = !0, e
                }

                function i(e) {
                    var t = M.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;)T.attrHandle[n[r]] = t
                }

                function o(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                    if (r)return r;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var i, a = e([], n.length, t), o = a.length; o--;)n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function p() {
                }

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                    return r
                }

                function f(e, t, n) {
                    var r = t.dir, i = n && "parentNode" === r, a = W++;
                    return t.first ? function (t, n, a) {
                            for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, a)
                        } : function (t, n, o) {
                            var s, l, u, c = [F, a];
                            if (o) {
                                for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, o))return !0
                            } else for (; t = t[r];)if (1 === t.nodeType || i) {
                                if (u = t[B] || (t[B] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[r]) && s[0] === F && s[1] === a)return c[2] = s[2];
                                if (l[r] = c, c[2] = e(t, n, o))return !0
                            }
                        }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, r) {
                            for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                            return !0
                        } : e[0]
                }

                function m(e, n, r) {
                    for (var i = 0, a = n.length; a > i; i++)t(e, n[i], r);
                    return r
                }

                function g(e, t, n, r, i) {
                    for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), u && t.push(s)));
                    return o
                }

                function v(e, t, n, i, a, o) {
                    return i && !i[B] && (i = v(i)), a && !a[B] && (a = v(a, o)), r(function (r, o, s, l) {
                        var u, c, p, d = [], f = [], h = o.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, d, e, s, l), x = n ? a || (r ? e : h || i) ? [] : o : y;
                        if (n && n(y, x, s, l), i)for (u = g(x, f), i(u, [], s, l), c = u.length; c--;)(p = u[c]) && (x[f[c]] = !(y[f[c]] = p));
                        if (r) {
                            if (a || e) {
                                if (a) {
                                    for (u = [], c = x.length; c--;)(p = x[c]) && u.push(y[c] = p);
                                    a(null, x = [], u, l)
                                }
                                for (c = x.length; c--;)(p = x[c]) && (u = a ? ee(r, p) : d[c]) > -1 && (r[u] = !(o[u] = p))
                            }
                        } else x = g(x === o ? x.splice(h, x.length) : x), a ? a(null, o, x, l) : J.apply(o, x)
                    })
                }

                function y(e) {
                    for (var t, n, r, i = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = f(function (e) {
                        return e === t
                    }, o, !0), u = f(function (e) {
                        return ee(t, e) > -1
                    }, o, !0), c = [function (e, n, r) {
                        var i = !a && (r || n !== N) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                        return t = null, i
                    }]; i > s; s++)if (n = T.relative[e[s].type]) c = [f(h(c), n)]; else {
                        if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                            for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                            return v(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                        }
                        c.push(n)
                    }
                    return h(c)
                }

                function x(e, n) {
                    var i = n.length > 0, a = e.length > 0, o = function (r, o, s, l, u) {
                        var c, p, d, f = 0, h = "0", m = r && [], v = [], y = N, x = r || a && T.find.TAG("*", u), w = F += null == y ? 1 : Math.random() || .1, b = x.length;
                        for (u && (N = o === M || o || u); h !== b && null != (c = x[h]); h++) {
                            if (a && c) {
                                for (p = 0, o || c.ownerDocument === M || (L(c), s = !H); d = e[p++];)if (d(c, o || M, s)) {
                                    l.push(c);
                                    break
                                }
                                u && (F = w)
                            }
                            i && ((c = !d && c) && f--, r && m.push(c))
                        }
                        if (f += h, i && h !== f) {
                            for (p = 0; d = n[p++];)d(m, v, o, s);
                            if (r) {
                                if (f > 0)for (; h--;)m[h] || v[h] || (v[h] = K.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (F = w, N = y), m
                    };
                    return i ? r(o) : o
                }

                var w, b, T, C, S, k, E, D, N, A, P, L, M, j, H, I, z, q, O, B = "sizzle" + 1 * new Date, R = e.document, F = 0, W = 0, G = n(), $ = n(), X = n(), _ = function (e, t) {
                    return e === t && (P = !0), 0
                }, Y = 1 << 31, V = {}.hasOwnProperty, U = [], K = U.pop, Q = U.push, J = U.push, Z = U.slice, ee = function (e, t) {
                    for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", oe = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), pe = new RegExp(ae), de = new RegExp("^" + re + "$"), fe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, Te = function () {
                    L()
                };
                try {
                    J.apply(U = Z.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType
                } catch (Ce) {
                    J = {
                        apply: U.length ? function (e, t) {
                                Q.apply(e, Z.call(t))
                            } : function (e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                    }
                }
                b = t.support = {}, S = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, L = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : R;
                    return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, j = M.documentElement, H = !S(M), (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = i(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), b.getElementsByTagName = i(function (e) {
                            return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                        }), b.getElementsByClassName = ge.test(M.getElementsByClassName), b.getById = i(function (e) {
                            return j.appendChild(e).id = B, !M.getElementsByName || !M.getElementsByName(B).length
                        }), b.getById ? (T.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && H) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }, T.filter.ID = function (e) {
                                var t = e.replace(we, be);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete T.find.ID, T.filter.ID = function (e) {
                                var t = e.replace(we, be);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), T.find.TAG = b.getElementsByTagName ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                            } : function (e, t) {
                                var n, r = [], i = 0, a = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = a[i++];)1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return a
                            }, T.find.CLASS = b.getElementsByClassName && function (e, t) {
                                return "undefined" != typeof t.getElementsByClassName && H ? t.getElementsByClassName(e) : void 0
                            }, z = [], I = [], (b.qsa = ge.test(M.querySelectorAll)) && (i(function (e) {
                            j.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]")
                        }), i(function (e) {
                            var t = M.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                        })), (b.matchesSelector = ge.test(q = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i(function (e) {
                            b.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), z.push("!=", ae)
                        }), I = I.length && new RegExp(I.join("|")), z = z.length && new RegExp(z.join("|")), t = ge.test(j.compareDocumentPosition), O = t || ge.test(j.contains) ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function (e, t) {
                                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                                return !1
                            }, _ = t ? function (e, t) {
                                if (e === t)return P = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === R && O(R, e) ? -1 : t === M || t.ownerDocument === R && O(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                            } : function (e, t) {
                                if (e === t)return P = !0, 0;
                                var n, r = 0, i = e.parentNode, a = t.parentNode, s = [e], l = [t];
                                if (!i || !a)return e === M ? -1 : t === M ? 1 : i ? -1 : a ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                                if (i === a)return o(e, t);
                                for (n = e; n = n.parentNode;)s.unshift(n);
                                for (n = t; n = n.parentNode;)l.unshift(n);
                                for (; s[r] === l[r];)r++;
                                return r ? o(s[r], l[r]) : s[r] === R ? -1 : l[r] === R ? 1 : 0
                            }, M) : M
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== M && L(e), n = n.replace(ce, "='$1']"), b.matchesSelector && H && !X[n + " "] && (!z || !z.test(n)) && (!I || !I.test(n)))try {
                        var r = q.call(e, n);
                        if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                    } catch (i) {
                    }
                    return t(n, M, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== M && L(e), O(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== M && L(e);
                    var n = T.attrHandle[t.toLowerCase()], r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                    return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], r = 0, i = 0;
                    if (P = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(_), P) {
                        for (; t = e[i++];)t === e[i] && (r = n.push(i));
                        for (; r--;)e.splice(n[r], 1)
                    }
                    return A = null, e
                }, C = t.getText = function (e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                        } else if (3 === i || 4 === i)return e.nodeValue
                    } else for (; t = e[r++];)n += C(t);
                    return n
                }, T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(we, be).toLowerCase();
                            return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                        }, CLASS: function (e) {
                            var t = G[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, r) {
                            return function (i) {
                                var a = t.attr(i, e);
                                return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var u, c, p, d, f, h, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, x = !1;
                                    if (g) {
                                        if (a) {
                                            for (; m;) {
                                                for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                                h = m = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                            for (d = g, p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], x = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (x = f = 0) || h.pop();)if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [F, f, x];
                                                break
                                            }
                                        } else if (y && (d = t, p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === F && u[1], x = f), x === !1)for (; (d = ++f && d && d[m] || (x = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (p = d[B] || (d[B] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [F, x]), d !== t)););
                                        return x -= i, x === r || x % r === 0 && x / r >= 0
                                    }
                                }
                        }, PSEUDO: function (e, n) {
                            var i, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return a[B] ? a(n) : a.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                            for (var r, i = a(e, n), o = i.length; o--;)r = ee(e, i[o]), e[r] = !(t[r] = i[o])
                                        }) : function (e) {
                                            return a(e, 0, i)
                                        }) : a
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [], n = [], i = E(e.replace(se, "$1"));
                            return i[B] ? r(function (e, t, n, r) {
                                    for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                                }) : function (e, r, a) {
                                    return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                                }
                        }), has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: r(function (e) {
                            return e = e.replace(we, be), function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                            }
                        }), lang: r(function (e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(), function (t) {
                                var n;
                                do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === j
                        }, focus: function (e) {
                            return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !T.pseudos.empty(e)
                        }, header: function (e) {
                            return me.test(e.nodeName)
                        }, input: function (e) {
                            return he.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: u(function () {
                            return [0]
                        }), last: u(function (e, t) {
                            return [t - 1]
                        }), eq: u(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }), even: u(function (e, t) {
                            for (var n = 0; t > n; n += 2)e.push(n);
                            return e
                        }), odd: u(function (e, t) {
                            for (var n = 1; t > n; n += 2)e.push(n);
                            return e
                        }), lt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                            return e
                        }), gt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[w] = s(w);
                for (w in{submit: !0, reset: !0})T.pseudos[w] = l(w);
                return p.prototype = T.filters = T.pseudos, T.setFilters = new p, k = t.tokenize = function (e, n) {
                    var r, i, a, o, s, l, u, c = $[e + " "];
                    if (c)return n ? 0 : c.slice(0);
                    for (s = e, l = [], u = T.preFilter; s;) {
                        r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), a.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }), s = s.slice(r.length));
                        for (o in T.filter)!(i = fe[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
                            value: r,
                            type: o,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r)break
                    }
                    return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
                }, E = t.compile = function (e, t) {
                    var n, r = [], i = [], a = X[e + " "];
                    if (!a) {
                        for (t || (t = k(e)), n = t.length; n--;)a = y(t[n]), a[B] ? r.push(a) : i.push(a);
                        a = X(e, x(i, r)), a.selector = e
                    }
                    return a
                }, D = t.select = function (e, t, n, r) {
                    var i, a, o, s, l, u = "function" == typeof e && e, p = !r && k(e = u.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === t.nodeType && H && T.relative[a[1].type]) {
                            if (t = (T.find.ID(o.matches[0].replace(we, be), t) || [])[0], !t)return n;
                            u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !T.relative[s = o.type]);)if ((l = T.find[s]) && (r = l(o.matches[0].replace(we, be), ye.test(a[0].type) && c(t.parentNode) || t))) {
                            if (a.splice(i, 1), e = r.length && d(a), !e)return J.apply(n, r), n;
                            break
                        }
                    }
                    return (u || E(e, p))(r, t, !H, n, !t || ye.test(e) && c(t.parentNode) || t), n
                }, b.sortStable = B.split("").sort(_).join("") === B, b.detectDuplicates = !!P, L(), b.sortDetached = i(function (e) {
                    return 1 & e.compareDocumentPosition(M.createElement("div"))
                }), i(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), b.attributes && i(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function (e) {
                    return null == e.getAttribute("disabled")
                }) || a(te, function (e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            ae.find = ce, ae.expr = ce.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = ce.uniqueSort, ae.text = ce.getText, ae.isXMLDoc = ce.isXML, ae.contains = ce.contains;
            var pe = function (e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                    if (i && ae(e).is(n))break;
                    r.push(e)
                }
                return r
            }, de = function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }, fe = ae.expr.match.needsContext, he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, me = /^.[^:#\[\.,]*$/;
            ae.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ae.find.matchesSelector(r, e) ? [r] : [] : ae.find.matches(e, ae.grep(t, function (e) {
                        return 1 === e.nodeType
                    }))
            }, ae.fn.extend({
                find: function (e) {
                    var t, n = this.length, r = [], i = this;
                    if ("string" != typeof e)return this.pushStack(ae(e).filter(function () {
                        for (t = 0; n > t; t++)if (ae.contains(i[t], this))return !0
                    }));
                    for (t = 0; n > t; t++)ae.find(e, i[t], r);
                    return r = this.pushStack(n > 1 ? ae.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
                }, filter: function (e) {
                    return this.pushStack(r(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(r(this, e || [], !0))
                }, is: function (e) {
                    return !!r(this, "string" == typeof e && fe.test(e) ? ae(e) : e || [], !1).length;
                }
            });
            var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = ae.fn.init = function (e, t, n) {
                var r, i;
                if (!e)return this;
                if (n = n || ge, "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : U, !0)), he.test(r[1]) && ae.isPlainObject(t))for (r in t)ae.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return i = U.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = U, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
            };
            ye.prototype = ae.fn, ge = ae(U);
            var xe = /^(?:parents|prev(?:Until|All))/, we = {children: !0, contents: !0, next: !0, prev: !0};
            ae.fn.extend({
                has: function (e) {
                    var t = ae(e, this), n = t.length;
                    return this.filter(function () {
                        for (var e = 0; n > e; e++)if (ae.contains(this, t[e]))return !0
                    })
                }, closest: function (e, t) {
                    for (var n, r = 0, i = this.length, a = [], o = fe.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
                    return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
                }, index: function (e) {
                    return e ? "string" == typeof e ? Z.call(ae(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), ae.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return pe(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return pe(e, "parentNode", n)
                }, next: function (e) {
                    return i(e, "nextSibling")
                }, prev: function (e) {
                    return i(e, "previousSibling")
                }, nextAll: function (e) {
                    return pe(e, "nextSibling")
                }, prevAll: function (e) {
                    return pe(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return pe(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return pe(e, "previousSibling", n)
                }, siblings: function (e) {
                    return de((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return de(e.firstChild)
                }, contents: function (e) {
                    return e.contentDocument || ae.merge([], e.childNodes)
                }
            }, function (e, t) {
                ae.fn[e] = function (n, r) {
                    var i = ae.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ae.filter(r, i)), this.length > 1 && (we[e] || ae.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var be = /\S+/g;
            ae.Callbacks = function (e) {
                e = "string" == typeof e ? a(e) : ae.extend({}, e);
                var t, n, r, i, o = [], s = [], l = -1, u = function () {
                    for (i = e.once, r = t = !0; s.length; l = -1)for (n = s.shift(); ++l < o.length;)o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                }, c = {
                    add: function () {
                        return o && (n && !t && (l = o.length - 1, s.push(n)), function r(t) {
                            ae.each(t, function (t, n) {
                                ae.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ae.type(n) && r(n)
                            })
                        }(arguments), n && !t && u()), this
                    }, remove: function () {
                        return ae.each(arguments, function (e, t) {
                            for (var n; (n = ae.inArray(t, o, n)) > -1;)o.splice(n, 1), l >= n && l--
                        }), this
                    }, has: function (e) {
                        return e ? ae.inArray(e, o) > -1 : o.length > 0
                    }, empty: function () {
                        return o && (o = []), this
                    }, disable: function () {
                        return i = s = [], o = n = "", this
                    }, disabled: function () {
                        return !o
                    }, lock: function () {
                        return i = s = [], n || (o = n = ""), this
                    }, locked: function () {
                        return !!i
                    }, fireWith: function (e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!r
                    }
                };
                return c
            }, ae.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]], n = "pending", r = {
                        state: function () {
                            return n
                        }, always: function () {
                            return i.done(arguments).fail(arguments), this
                        }, then: function () {
                            var e = arguments;
                            return ae.Deferred(function (n) {
                                ae.each(t, function (t, a) {
                                    var o = ae.isFunction(e[t]) && e[t];
                                    i[a[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? ae.extend(e, r) : r
                        }
                    }, i = {};
                    return r.pipe = r.then, ae.each(t, function (e, a) {
                        var o = a[2], s = a[3];
                        r[a[1]] = o.add, s && o.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[a[0]] = function () {
                            return i[a[0] + "With"](this === i ? r : this, arguments), this
                        }, i[a[0] + "With"] = o.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                }, when: function (e) {
                    var t, n, r, i = 0, a = K.call(arguments), o = a.length, s = 1 !== o || e && ae.isFunction(e.promise) ? o : 0, l = 1 === s ? e : ae.Deferred(), u = function (e, n, r) {
                        return function (i) {
                            n[e] = this, r[e] = arguments.length > 1 ? K.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                        }
                    };
                    if (o > 1)for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++)a[i] && ae.isFunction(a[i].promise) ? a[i].promise().progress(u(i, n, t)).done(u(i, r, a)).fail(l.reject) : --s;
                    return s || l.resolveWith(r, a), l.promise()
                }
            });
            var Te;
            ae.fn.ready = function (e) {
                return ae.ready.promise().done(e), this
            }, ae.extend({
                isReady: !1, readyWait: 1, holdReady: function (e) {
                    e ? ae.readyWait++ : ae.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (Te.resolveWith(U, [ae]), ae.fn.triggerHandler && (ae(U).triggerHandler("ready"), ae(U).off("ready"))))
                }
            }), ae.ready.promise = function (t) {
                return Te || (Te = ae.Deferred(), "complete" === U.readyState || "loading" !== U.readyState && !U.documentElement.doScroll ? e.setTimeout(ae.ready) : (U.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o))), Te.promise(t)
            }, ae.ready.promise();
            var Ce = function (e, t, n, r, i, a, o) {
                var s = 0, l = e.length, u = null == n;
                if ("object" === ae.type(n)) {
                    i = !0;
                    for (s in n)Ce(e, t, s, n[s], !0, a, o)
                } else if (void 0 !== r && (i = !0, ae.isFunction(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                            return u.call(ae(e), n)
                        })), t))for (; l > s; s++)t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : a
            }, Se = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            s.uid = 1, s.prototype = {
                register: function (e, t) {
                    var n = t || {};
                    return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                            value: n,
                            writable: !0,
                            configurable: !0
                        }), e[this.expando]
                }, cache: function (e) {
                    if (!Se(e))return {};
                    var t = e[this.expando];
                    return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                }, set: function (e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[t] = n; else for (r in t)i[r] = t[r];
                    return i
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
                }, access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, r, i, a = e[this.expando];
                    if (void 0 !== a) {
                        if (void 0 === t) this.register(e); else {
                            ae.isArray(t) ? r = t.concat(t.map(ae.camelCase)) : (i = ae.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(be) || [])), n = r.length;
                            for (; n--;)delete a[r[n]]
                        }
                        (void 0 === t || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !ae.isEmptyObject(t)
                }
            };
            var ke = new s, Ee = new s, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ne = /[A-Z]/g;
            ae.extend({
                hasData: function (e) {
                    return Ee.hasData(e) || ke.hasData(e)
                }, data: function (e, t, n) {
                    return Ee.access(e, t, n)
                }, removeData: function (e, t) {
                    Ee.remove(e, t)
                }, _data: function (e, t, n) {
                    return ke.access(e, t, n)
                }, _removeData: function (e, t) {
                    ke.remove(e, t)
                }
            }), ae.fn.extend({
                data: function (e, t) {
                    var n, r, i, a = this[0], o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Ee.get(a), 1 === a.nodeType && !ke.get(a, "hasDataAttrs"))) {
                            for (n = o.length; n--;)o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ae.camelCase(r.slice(5)), l(a, r, i[r])));
                            ke.set(a, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                            Ee.set(this, e)
                        }) : Ce(this, function (t) {
                            var n, r;
                            if (a && void 0 === t) {
                                if (n = Ee.get(a, e) || Ee.get(a, e.replace(Ne, "-$&").toLowerCase()), void 0 !== n)return n;
                                if (r = ae.camelCase(e), n = Ee.get(a, r), void 0 !== n)return n;
                                if (n = l(a, r, void 0), void 0 !== n)return n
                            } else r = ae.camelCase(e), this.each(function () {
                                var n = Ee.get(this, r);
                                Ee.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                            })
                        }, null, t, arguments.length > 1, null, !0)
                }, removeData: function (e) {
                    return this.each(function () {
                        Ee.remove(this, e)
                    })
                }
            }), ae.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = ke.get(e, t), n && (!r || ae.isArray(n) ? r = ke.access(e, t, ae.makeArray(n)) : r.push(n)), r || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ae.queue(e, t), r = n.length, i = n.shift(), a = ae._queueHooks(e, t), o = function () {
                        ae.dequeue(e, t)
                    };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ke.get(e, n) || ke.access(e, n, {
                            empty: ae.Callbacks("once memory").add(function () {
                                ke.remove(e, [t + "queue", n])
                            })
                        })
                }
            }), ae.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                                var n = ae.queue(this, e, t);
                                ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
                            })
                }, dequeue: function (e) {
                    return this.each(function () {
                        ae.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1, i = ae.Deferred(), a = this, o = this.length, s = function () {
                        --r || i.resolveWith(a, [a])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)n = ke.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"), Le = ["Top", "Right", "Bottom", "Left"], Me = function (e, t) {
                return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
            }, je = /^(?:checkbox|radio)$/i, He = /<([\w:-]+)/, Ie = /^$|\/(?:java|ecma)script/i, ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
            var qe = /<|&#?\w+;/;
            !function () {
                var e = U.createDocumentFragment(), t = e.appendChild(U.createElement("div")), n = U.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Oe = /^key/, Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Re = /^([^.]*)(?:\.(.+)|)/;
            ae.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var a, o, s, l, u, c, p, d, f, h, m, g = ke.get(e);
                    if (g)for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = ae.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                        return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(be) || [""], u = t.length; u--;)s = Re.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (p = ae.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, p = ae.event.special[f] || {}, c = ae.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ae.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, a), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, o) !== !1 || e.addEventListener && e.addEventListener(f, o)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), ae.event.global[f] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var a, o, s, l, u, c, p, d, f, h, m, g = ke.hasData(e) && ke.get(e);
                    if (g && (l = g.events)) {
                        for (t = (t || "").match(be) || [""], u = t.length; u--;)if (s = Re.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (p = ae.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--;)c = d[a], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(a, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                            o && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || ae.removeEvent(e, f, g.handle), delete l[f])
                        } else for (f in l)ae.event.remove(e, f + t[u], n, r, !0);
                        ae.isEmptyObject(l) && ke.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    e = ae.event.fix(e);
                    var t, n, r, i, a, o = [], s = K.call(arguments), l = (ke.get(this, "events") || {})[e.type] || [], u = ae.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (o = ae.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, r = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, a, o = [], s = t.delegateCount, l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++)a = t[n], i = a.selector + " ", void 0 === r[i] && (r[i] = a.needsContext ? ae(i, this).index(l) > -1 : ae.find(i, this, null, [l]).length), r[i] && r.push(a);
                        r.length && o.push({elem: l, handlers: r})
                    }
                    return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, i, a = t.button;
                        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || U, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[ae.expando])return e;
                    var t, n, r, i = e.type, a = e, o = this.fixHooks[i];
                    for (o || (this.fixHooks[i] = o = Be.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(a), t = r.length; t--;)n = r[t], e[n] = a[n];
                    return e.target || (e.target = U), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            return this !== m() && this.focus ? (this.focus(), !1) : void 0
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            return this === m() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return ae.nodeName(e.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, ae.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, ae.Event = function (e, t) {
                return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
            }, ae.Event.prototype = {
                constructor: ae.Event,
                isDefaultPrevented: h,
                isPropagationStopped: h,
                isImmediatePropagationStopped: h,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ae.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                ae.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, r = this, i = e.relatedTarget, a = e.handleObj;
                        return i && (i === r || ae.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ae.fn.extend({
                on: function (e, t, n, r) {
                    return g(this, e, t, n, r)
                }, one: function (e, t, n, r) {
                    return g(this, e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ae(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e)this.off(i, t, e[i]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                        ae.event.remove(this, e, n, t)
                    })
                }
            });
            var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, We = /<script|<style|<link/i, Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, $e = /^true\/(.*)/, Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            ae.extend({
                htmlPrefilter: function (e) {
                    return e.replace(Fe, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var r, i, a, o, s = e.cloneNode(!0), l = ae.contains(e.ownerDocument, e);
                    if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))for (o = c(s), a = c(e), r = 0, i = a.length; i > r; r++)b(a[r], o[r]);
                    if (t)if (n)for (a = a || c(e), o = o || c(s), r = 0, i = a.length; i > r; r++)w(a[r], o[r]); else w(e, s);
                    return o = c(s, "script"), o.length > 0 && p(o, !l && c(e, "script")), s
                }, cleanData: function (e) {
                    for (var t, n, r, i = ae.event.special, a = 0; void 0 !== (n = e[a]); a++)if (Se(n)) {
                        if (t = n[ke.expando]) {
                            if (t.events)for (r in t.events)i[r] ? ae.event.remove(n, r) : ae.removeEvent(n, r, t.handle);
                            n[ke.expando] = void 0
                        }
                        n[Ee.expando] && (n[Ee.expando] = void 0)
                    }
                }
            }), ae.fn.extend({
                domManip: T, detach: function (e) {
                    return C(this, e, !0)
                }, remove: function (e) {
                    return C(this, e)
                }, text: function (e) {
                    return Ce(this, function (e) {
                        return void 0 === e ? ae.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                    }, null, e, arguments.length)
                }, append: function () {
                    return T(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = v(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return T(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = v(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return T(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return T(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ae.cleanData(c(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                        return ae.clone(this, e, t)
                    })
                }, html: function (e) {
                    return Ce(this, function (e) {
                        var t = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                        if ("string" == typeof e && !We.test(e) && !ze[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ae.htmlPrefilter(e);
                            try {
                                for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(c(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {
                            }
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return T(this, arguments, function (t) {
                        var n = this.parentNode;
                        ae.inArray(this, e) < 0 && (ae.cleanData(c(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), ae.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                ae.fn[e] = function (e) {
                    for (var n, r = [], i = ae(e), a = i.length - 1, o = 0; a >= o; o++)n = o === a ? this : this.clone(!0), ae(i[o])[t](n), J.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var _e, Ye = {
                HTML: "block",
                BODY: "block"
            }, Ve = /^margin/, Ue = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"), Ke = function (t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            }, Qe = function (e, t, n, r) {
                var i, a, o = {};
                for (a in t)o[a] = e.style[a], e.style[a] = t[a];
                i = n.apply(e, r || []);
                for (a in t)e.style[a] = o[a];
                return i
            }, Je = U.documentElement;
            !function () {
                function t() {
                    s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(o);
                    var t = e.getComputedStyle(s);
                    n = "1%" !== t.top, a = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Je.removeChild(o)
                }

                var n, r, i, a, o = U.createElement("div"), s = U.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ae.extend(re, {
                    pixelPosition: function () {
                        return t(), n
                    }, boxSizingReliable: function () {
                        return null == r && t(), r
                    }, pixelMarginRight: function () {
                        return null == r && t(), i
                    }, reliableMarginLeft: function () {
                        return null == r && t(), a
                    }, reliableMarginRight: function () {
                        var t, n = s.appendChild(U.createElement("div"));
                        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Je.appendChild(o), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(o), s.removeChild(n), t
                    }
                }))
            }();
            var Ze = /^(none|table(?!-c[ea]).+)/, et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, tt = {
                letterSpacing: "0",
                fontWeight: "400"
            }, nt = ["Webkit", "O", "Moz", "ms"], rt = U.createElement("div").style;
            ae.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = E(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": "cssFloat"},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, a, o, s = ae.camelCase(t), l = e.style;
                        return t = ae.cssProps[s] || (ae.cssProps[s] = N(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : l[t] : (a = typeof n, "string" === a && (i = Pe.exec(n)) && i[1] && (n = u(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (ae.cssNumber[s] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l[t] = n)), void 0)
                    }
                },
                css: function (e, t, n, r) {
                    var i, a, o, s = ae.camelCase(t);
                    return t = ae.cssProps[s] || (ae.cssProps[s] = N(s) || s), o = ae.cssHooks[t] || ae.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = E(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
                }
            }), ae.each(["height", "width"], function (e, t) {
                ae.cssHooks[t] = {
                    get: function (e, n, r) {
                        return n ? Ze.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, et, function () {
                                    return L(e, t, r)
                                }) : L(e, t, r) : void 0
                    }, set: function (e, n, r) {
                        var i, a = r && Ke(e), o = r && P(e, t, r, "border-box" === ae.css(e, "boxSizing", !1, a), a);
                        return o && (i = Pe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), A(e, n, o)
                    }
                }
            }), ae.cssHooks.marginLeft = D(re.reliableMarginLeft, function (e, t) {
                return t ? (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {marginLeft: 0}, function () {
                        return e.getBoundingClientRect().left
                    })) + "px" : void 0
            }), ae.cssHooks.marginRight = D(re.reliableMarginRight, function (e, t) {
                return t ? Qe(e, {display: "inline-block"}, E, [e, "marginRight"]) : void 0
            }), ae.each({margin: "", padding: "", border: "Width"}, function (e, t) {
                ae.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Le[r] + t] = a[r] || a[r - 2] || a[0];
                        return i
                    }
                }, Ve.test(e) || (ae.cssHooks[e + t].set = A)
            }), ae.fn.extend({
                css: function (e, t) {
                    return Ce(this, function (e, t, n) {
                        var r, i, a = {}, o = 0;
                        if (ae.isArray(t)) {
                            for (r = Ke(e), i = t.length; i > o; o++)a[t[o]] = ae.css(e, t[o], !1, r);
                            return a
                        }
                        return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return M(this, !0)
                }, hide: function () {
                    return M(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                            Me(this) ? ae(this).show() : ae(this).hide()
                        })
                }
            }), ae.Tween = j, j.prototype = {
                constructor: j, init: function (e, t, n, r, i, a) {
                    this.elem = e, this.prop = n, this.easing = i || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (ae.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = j.propHooks[this.prop];
                    return e && e.get ? e.get(this) : j.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = j.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
                }
            }, j.prototype.init.prototype = j.prototype, j.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    }, set: function (e) {
                        ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, ae.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, ae.fx = j.prototype.init, ae.fx.step = {};
            var it, at, ot = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
            ae.Animation = ae.extend(B, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return u(n.elem, e, Pe.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
                    for (var n, r = 0, i = e.length; i > r; r++)n = e[r], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
                }, prefilters: [q], prefilter: function (e, t) {
                    t ? B.prefilters.unshift(e) : B.prefilters.push(e)
                }
            }), ae.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? ae.extend({}, e) : {
                        complete: n || !n && t || ae.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !ae.isFunction(t) && t
                    };
                return r.duration = ae.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ae.fx.speeds ? ae.fx.speeds[r.duration] : ae.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    ae.isFunction(r.old) && r.old.call(this), r.queue && ae.dequeue(this, r.queue)
                }, r
            }, ae.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(Me).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
                }, animate: function (e, t, n, r) {
                    var i = ae.isEmptyObject(e), a = ae.speed(t, n, r), o = function () {
                        var t = B(this, ae.extend({}, e), a);
                        (i || ke.get(this, "finish")) && t.stop(!0)
                    };
                    return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0, i = null != e && e + "queueHooks", a = ae.timers, o = ke.get(this);
                        if (i) o[i] && o[i].stop && r(o[i]); else for (i in o)o[i] && o[i].stop && st.test(i) && r(o[i]);
                        for (i = a.length; i--;)a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                        !t && n || ae.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ke.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = ae.timers, o = r ? r.length : 0;
                        for (n.finish = !0, ae.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; o > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ae.each(["toggle", "show", "hide"], function (e, t) {
                var n = ae.fn[t];
                ae.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
                }
            }), ae.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (e, t) {
                ae.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ae.timers = [], ae.fx.tick = function () {
                var e, t = 0, n = ae.timers;
                for (it = ae.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || ae.fx.stop(), it = void 0
            }, ae.fx.timer = function (e) {
                ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
            }, ae.fx.interval = 13, ae.fx.start = function () {
                at || (at = e.setInterval(ae.fx.tick, ae.fx.interval))
            }, ae.fx.stop = function () {
                e.clearInterval(at), at = null
            }, ae.fx.speeds = {slow: 600, fast: 200, _default: 400}, ae.fn.delay = function (t, n) {
                return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i)
                    }
                })
            }, function () {
                var e = U.createElement("input"), t = U.createElement("select"), n = t.appendChild(U.createElement("option"));
                e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = U.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
            }();
            var lt, ut = ae.expr.attrHandle;
            ae.fn.extend({
                attr: function (e, t) {
                    return Ce(this, ae.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        ae.removeAttr(this, e)
                    })
                }
            }), ae.extend({
                attr: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === a && ae.isXMLDoc(e) || (t = t.toLowerCase(), i = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ae.find.attr(e, t), null == r ? void 0 : r))
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!re.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, r, i = 0, a = t && t.match(be);
                    if (a && 1 === e.nodeType)for (; n = a[i++];)r = ae.propFix[n] || n, ae.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                }
            }), lt = {
                set: function (e, t, n) {
                    return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = ut[t] || ae.find.attr;
                ut[t] = function (e, t, r) {
                    var i, a;
                    return r || (a = ut[t], ut[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ut[t] = a), i
                }
            });
            var ct = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;
            ae.fn.extend({
                prop: function (e, t) {
                    return Ce(this, ae.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return this.each(function () {
                        delete this[ae.propFix[e] || e]
                    })
                }
            }), ae.extend({
                prop: function (e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)return 1 === a && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, i = ae.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = ae.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ct.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {"for": "htmlFor", "class": "className"}
            }), re.optSelected || (ae.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ae.propFix[this.toLowerCase()] = this
            });
            var dt = /[\t\r\n\f]/g;
            ae.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, a, o, s, l = 0;
                    if (ae.isFunction(e))return this.each(function (t) {
                        ae(this).addClass(e.call(this, t, R(this)))
                    });
                    if ("string" == typeof e && e)for (t = e.match(be) || []; n = this[l++];)if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (o = 0; a = t[o++];)r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                        s = ae.trim(r), i !== s && n.setAttribute("class", s)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, i, a, o, s, l = 0;
                    if (ae.isFunction(e))return this.each(function (t) {
                        ae(this).removeClass(e.call(this, t, R(this)))
                    });
                    if (!arguments.length)return this.attr("class", "");
                    if ("string" == typeof e && e)for (t = e.match(be) || []; n = this[l++];)if (i = R(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(dt, " ")) {
                        for (o = 0; a = t[o++];)for (; r.indexOf(" " + a + " ") > -1;)r = r.replace(" " + a + " ", " ");
                        s = ae.trim(r), i !== s && n.setAttribute("class", s)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function (n) {
                                ae(this).toggleClass(e.call(this, n, R(this), t), t)
                            }) : this.each(function () {
                                var t, r, i, a;
                                if ("string" === n)for (r = 0, i = ae(this), a = e.match(be) || []; t = a[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = R(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ke.get(this, "__className__") || ""))
                            })
                }, hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + R(n) + " ").replace(dt, " ").indexOf(t) > -1)return !0;
                    return !1
                }
            });
            var ft = /\r/g, ht = /[\x20\t\r\n\f]+/g;
            ae.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)return r = ae.isFunction(e), this.each(function (n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, ae(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ae.isArray(i) && (i = ae.map(i, function (e) {
                                        return null == e ? "" : e + ""
                                    })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i)return t = ae.valHooks[i.type] || ae.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)
                    }
                }
            }), ae.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = ae.find.attr(e, "value");
                            return null != t ? t : ae.trim(ae.text(e)).replace(ht, " ")
                        }
                    }, select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, a = "select-one" === e.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)if (n = r[l], (n.selected || l === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ae(n).val(), a)return t;
                                o.push(t)
                            }
                            return o
                        }, set: function (e, t) {
                            for (var n, r, i = e.options, a = ae.makeArray(t), o = i.length; o--;)r = i[o], (r.selected = ae.inArray(ae.valHooks.option.get(r), a) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), a
                        }
                    }
                }
            }), ae.each(["radio", "checkbox"], function () {
                ae.valHooks[this] = {
                    set: function (e, t) {
                        return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0
                    }
                }, re.checkOn || (ae.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var mt = /^(?:focusinfocus|focusoutblur)$/;
            ae.extend(ae.event, {
                trigger: function (t, n, r, i) {
                    var a, o, s, l, u, c, p, d = [r || U], f = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = s = r = r || U, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(f + ae.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[ae.expando] ? t : new ae.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ae.makeArray(n, [t]), p = ae.event.special[f] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                        if (!i && !p.noBubble && !ae.isWindow(r)) {
                            for (l = p.delegateType || f, mt.test(l + f) || (o = o.parentNode); o; o = o.parentNode)d.push(o), s = o;
                            s === (r.ownerDocument || U) && d.push(s.defaultView || s.parentWindow || e)
                        }
                        for (a = 0; (o = d[a++]) && !t.isPropagationStopped();)t.type = a > 1 ? l : p.bindType || f, c = (ke.get(o, "events") || {})[t.type] && ke.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && Se(o) && (t.result = c.apply(o, n), t.result === !1 && t.preventDefault());
                        return t.type = f, i || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Se(r) || u && ae.isFunction(r[f]) && !ae.isWindow(r) && (s = r[u], s && (r[u] = null), ae.event.triggered = f, r[f](), ae.event.triggered = void 0, s && (r[u] = s)), t.result
                    }
                }, simulate: function (e, t, n) {
                    var r = ae.extend(new ae.Event, n, {type: e, isSimulated: !0});
                    ae.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
                }
            }), ae.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        ae.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? ae.event.trigger(e, t, n, !0) : void 0
                }
            }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                ae.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), ae.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), re.focusin = "onfocusin" in e, re.focusin || ae.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    ae.event.simulate(t, e.target, ae.event.fix(e))
                };
                ae.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this, i = ke.access(r, t);
                        i || r.addEventListener(e, n, !0), ke.access(r, t, (i || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this, i = ke.access(r, t) - 1;
                        i ? ke.access(r, t, i) : (r.removeEventListener(e, n, !0), ke.remove(r, t))
                    }
                }
            });
            var gt = e.location, vt = ae.now(), yt = /\?/;
            ae.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, ae.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t)return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (r) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n
            };
            var xt = /#.*$/, wt = /([?&])_=[^&]*/, bt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ct = /^(?:GET|HEAD)$/, St = /^\/\//, kt = {}, Et = {}, Dt = "*/".concat("*"), Nt = U.createElement("a");
            Nt.href = gt.href, ae.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: gt.href,
                    type: "GET",
                    isLocal: Tt.test(gt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Dt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? G(G(e, ae.ajaxSettings), t) : G(ae.ajaxSettings, e)
                },
                ajaxPrefilter: F(kt),
                ajaxTransport: F(Et),
                ajax: function (t, n) {
                    function r(t, n, r, s) {
                        var u, p, y, x, b, C = n;
                        2 !== w && (w = 2, l && e.clearTimeout(l), i = void 0, o = s || "", T.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, r && (x = $(d, T, r)), x = X(d, x, T, u), u ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ae.lastModified[a] = b), b = T.getResponseHeader("etag"), b && (ae.etag[a] = b)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, p = x.data, y = x.error, u = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", u ? m.resolveWith(f, [p, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, d, u ? p : y]), g.fireWith(f, [T, C]), c && (h.trigger("ajaxComplete", [T, d]), --ae.active || ae.event.trigger("ajaxStop")))
                    }

                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, a, o, s, l, u, c, p, d = ae.ajaxSetup({}, n), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? ae(f) : ae.event, m = ae.Deferred(), g = ae.Callbacks("once memory"), v = d.statusCode || {}, y = {}, x = {}, w = 0, b = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === w) {
                                if (!s)for (s = {}; t = bt.exec(o);)s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === w ? o : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return w || (e = x[n] = x[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return w || (d.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)if (2 > w)for (t in e)v[t] = [v[t], e[t]]; else T.always(e[T.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || b;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                    if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || gt.href) + "").replace(xt, "").replace(St, gt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ae.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain) {
                        u = U.createElement("a");
                        try {
                            u.href = d.url, u.href = u.href, d.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
                        } catch (C) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = ae.param(d.data, d.traditional)), W(kt, d, n, T), 2 === w)return T;
                    c = ae.event && d.global, c && 0 === ae.active++ && ae.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ct.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (yt.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = wt.test(a) ? a.replace(wt, "$1_=" + vt++) : a + (yt.test(a) ? "&" : "?") + "_=" + vt++)), d.ifModified && (ae.lastModified[a] && T.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && T.setRequestHeader("If-None-Match", ae.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : d.accepts["*"]);
                    for (p in d.headers)T.setRequestHeader(p, d.headers[p]);
                    if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === w))return T.abort();
                    b = "abort";
                    for (p in{success: 1, error: 1, complete: 1})T[p](d[p]);
                    if (i = W(Et, d, n, T)) {
                        if (T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), 2 === w)return T;
                        d.async && d.timeout > 0 && (l = e.setTimeout(function () {
                            T.abort("timeout")
                        }, d.timeout));
                        try {
                            w = 1, i.send(y, r)
                        } catch (C) {
                            if (!(2 > w))throw C;
                            r(-1, C)
                        }
                    } else r(-1, "No Transport");
                    return T
                },
                getJSON: function (e, t, n) {
                    return ae.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return ae.get(e, void 0, t, "script")
                }
            }), ae.each(["get", "post"], function (e, t) {
                ae[t] = function (e, n, r, i) {
                    return ae.isFunction(n) && (i = i || r, r = n, n = void 0), ae.ajax(ae.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, ae.isPlainObject(e) && e))
                }
            }), ae._evalUrl = function (e) {
                return ae.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
            }, ae.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return ae.isFunction(e) ? this.each(function (t) {
                            ae(this).wrapAll(e.call(this, t))
                        }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                            return e
                        }).append(this)), this)
                }, wrapInner: function (e) {
                    return ae.isFunction(e) ? this.each(function (t) {
                            ae(this).wrapInner(e.call(this, t))
                        }) : this.each(function () {
                            var t = ae(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                }, wrap: function (e) {
                    var t = ae.isFunction(e);
                    return this.each(function (n) {
                        ae(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ae.expr.filters.hidden = function (e) {
                return !ae.expr.filters.visible(e)
            }, ae.expr.filters.visible = function (e) {
                return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
            };
            var At = /%20/g, Pt = /\[\]$/, Lt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i;
            ae.param = function (e, t) {
                var n, r = [], i = function (e, t) {
                    t = ae.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
                    i(this.name, this.value)
                }); else for (n in e)_(n, e[n], t, i);
                return r.join("&").replace(At, "+")
            }, ae.fn.extend({
                serialize: function () {
                    return ae.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = ae.prop(this, "elements");
                        return e ? ae.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !ae(this).is(":disabled") && jt.test(this.nodeName) && !Mt.test(e) && (this.checked || !je.test(e))
                    }).map(function (e, t) {
                        var n = ae(this).val();
                        return null == n ? null : ae.isArray(n) ? ae.map(n, function (e) {
                                    return {name: t.name, value: e.replace(Lt, "\r\n")}
                                }) : {name: t.name, value: n.replace(Lt, "\r\n")}
                    }).get()
                }
            }), ae.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {
                }
            };
            var Ht = {0: 200, 1223: 204}, It = ae.ajaxSettings.xhr();
            re.cors = !!It && "withCredentials" in It, re.ajax = It = !!It, ae.ajaxTransport(function (t) {
                var n, r;
                return re.cors || It && !t.crossDomain ? {
                        send: function (i, a) {
                            var o, s = t.xhr();
                            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)s[o] = t.xhrFields[o];
                            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (o in i)s.setRequestHeader(o, i[o]);
                            n = function (e) {
                                return function () {
                                    n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                                }
                            }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                                    4 === s.readyState && e.setTimeout(function () {
                                        n && r()
                                    })
                                }, n = n("abort");
                            try {
                                s.send(t.hasContent && t.data || null)
                            } catch (l) {
                                if (n)throw l
                            }
                        }, abort: function () {
                            n && n()
                        }
                    } : void 0
            }), ae.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return ae.globalEval(e), e
                    }
                }
            }), ae.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), ae.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function (r, i) {
                            t = ae("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function (e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), U.head.appendChild(t[0])
                        }, abort: function () {
                            n && n()
                        }
                    }
                }
            });
            var zt = [], qt = /(=)\?(?=&|$)|\?\?/;
            ae.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = zt.pop() || ae.expando + "_" + vt++;
                    return this[e] = !0, e
                }
            }), ae.ajaxPrefilter("json jsonp", function (t, n, r) {
                var i, a, o, s = t.jsonp !== !1 && (qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(qt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                        return o || ae.error(i + " was not called"), o[0]
                    }, t.dataTypes[0] = "json", a = e[i], e[i] = function () {
                        o = arguments
                    }, r.always(function () {
                        void 0 === a ? ae(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, zt.push(i)), o && ae.isFunction(a) && a(o[0]), o = a = void 0
                    }), "script") : void 0
            }), ae.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e)return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || U;
                var r = he.exec(e), i = !n && [];
                return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && ae(i).remove(), ae.merge([], r.childNodes))
            };
            var Ot = ae.fn.load;
            ae.fn.load = function (e, t, n) {
                if ("string" != typeof e && Ot)return Ot.apply(this, arguments);
                var r, i, a, o = this, s = e.indexOf(" ");
                return s > -1 && (r = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && ae.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    a = arguments, o.html(r ? ae("<div>").append(ae.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                        o.each(function () {
                            n.apply(this, a || [e.responseText, t, e])
                        })
                    }), this
            }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                ae.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), ae.expr.filters.animated = function (e) {
                return ae.grep(ae.timers, function (t) {
                    return e === t.elem
                }).length
            }, ae.offset = {
                setOffset: function (e, t, n) {
                    var r, i, a, o, s, l, u, c = ae.css(e, "position"), p = ae(e), d = {};
                    "static" === c && (e.style.position = "relative"), s = p.offset(), a = ae.css(e, "top"), l = ae.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1, u ? (r = p.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : p.css(d)
                }
            }, ae.fn.extend({
                offset: function (e) {
                    if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                            ae.offset.setOffset(this, e, t)
                        });
                    var t, n, r = this[0], i = {top: 0, left: 0}, a = r && r.ownerDocument;
                    if (a)return t = a.documentElement, ae.contains(t, r) ? (i = r.getBoundingClientRect(), n = Y(a), {
                            top: i.top + n.pageYOffset - t.clientTop,
                            left: i.left + n.pageXOffset - t.clientLeft
                        }) : i
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = this[0], r = {top: 0, left: 0};
                        return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (r = e.offset()), r.top += ae.css(e[0], "borderTopWidth", !0), r.left += ae.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - ae.css(n, "marginTop", !0),
                            left: t.left - r.left - ae.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === ae.css(e, "position");)e = e.offsetParent;
                        return e || Je
                    })
                }
            }), ae.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
                var n = "pageYOffset" === t;
                ae.fn[e] = function (r) {
                    return Ce(this, function (e, r, i) {
                        var a = Y(e);
                        return void 0 === i ? a ? a[t] : e[r] : void(a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i)
                    }, e, r, arguments.length)
                }
            }), ae.each(["top", "left"], function (e, t) {
                ae.cssHooks[t] = D(re.pixelPosition, function (e, n) {
                    return n ? (n = E(e, t), Ue.test(n) ? ae(e).position()[t] + "px" : n) : void 0
                })
            }), ae.each({Height: "height", Width: "width"}, function (e, t) {
                ae.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                    ae.fn[r] = function (r, i) {
                        var a = arguments.length && (n || "boolean" != typeof r), o = n || (r === !0 || i === !0 ? "margin" : "border");
                        return Ce(this, function (t, n, r) {
                            var i;
                            return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ae.css(t, n, o) : ae.style(t, n, r, o)
                        }, t, a ? r : void 0, a, null)
                    }
                })
            }), ae.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }, size: function () {
                    return this.length
                }
            }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
                return ae
            });
            var Bt = e.jQuery, Rt = e.$;
            return ae.noConflict = function (t) {
                return e.$ === ae && (e.$ = Rt), t && e.jQuery === ae && (e.jQuery = Bt), ae
            }, t || (e.jQuery = e.$ = ae), ae
        })
    }, {}]
}, {}, [2]);