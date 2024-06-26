;(() => {
    'use strict'
    var e = {
            607: (e, t, n) => {
                n.d(t, { A: () => p })
                var r = n(601),
                    o = n.n(r),
                    i = n(314),
                    a = n.n(i),
                    c = n(417),
                    d = n.n(c),
                    s = new URL(n(609), n.b),
                    l = a()(o()),
                    u = d()(s)
                l.push([
                    e.id,
                    `body {\n  font-family: "Roboto", sans-serif;\n  margin: 0;\n  padding: 0;\n  background-image: url(${u});\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  min-height: 100vh; /* Ensures viewport height */\n  place-items: center;\n  height: 100vh; /* Add this line for fullscreen */\n}\n\n#container {\n  background-color: rgba(248, 246, 246, 0.5);\n  border-radius: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  display: grid;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n  width: 100%;\n  max-width: 500px;\n  padding: 20px;\n  top: 0;\n  left: 0;\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  padding: 20px;\n  justify-content: space-between; /* Not needed for 4 columns layout */\n}\n\n/* CSS untuk elemen kustom */\n.note {\n  background-color: #e2f4c5;\n  color: rgb(206, 199, 247);\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.note h2 {\n  margin-top: 0;\n  color: #3c3c3c;\n}\n\n.note p {\n  color: #555;\n}\n\n.edit-buttons {\n  display: flex;\n  align-items: center;\n}\n\n.edit-buttons button {\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  margin-right: 5px;\n  color: #555;\n}\n\n.edit-buttons button:hover {\n  color: #333;\n}\n\n.text {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(1, 1fr);\n  gap: 10px;\n  place-items: center;\n  margin-bottom: 1rem;\n  margin-top: 15px;\n}\n\nfooter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0rem 7%;\n  background-color: rgba(40, 167, 145, 0.8);\n  border-bottom: 1px solid #513c28;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n\nfooter p {\n  display: flex;\n  justify-content: center;\n  margin-left: 45%;\n}\n`,
                    '',
                ])
                const p = l
            },
            314: (e) => {
                e.exports = function (e) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = '',
                                    r = void 0 !== t[5]
                                return (
                                    t[4] &&
                                        (n += '@supports ('.concat(
                                            t[4],
                                            ') {'
                                        )),
                                    t[2] && (n += '@media '.concat(t[2], ' {')),
                                    r &&
                                        (n += '@layer'.concat(
                                            t[5].length > 0
                                                ? ' '.concat(t[5])
                                                : '',
                                            ' {'
                                        )),
                                    (n += e(t)),
                                    r && (n += '}'),
                                    t[2] && (n += '}'),
                                    t[4] && (n += '}'),
                                    n
                                )
                            }).join('')
                        }),
                        (t.i = function (e, n, r, o, i) {
                            'string' == typeof e && (e = [[null, e, void 0]])
                            var a = {}
                            if (r)
                                for (var c = 0; c < this.length; c++) {
                                    var d = this[c][0]
                                    null != d && (a[d] = !0)
                                }
                            for (var s = 0; s < e.length; s++) {
                                var l = [].concat(e[s])
                                ;(r && a[l[0]]) ||
                                    (void 0 !== i &&
                                        (void 0 === l[5] ||
                                            (l[1] = '@layer'
                                                .concat(
                                                    l[5].length > 0
                                                        ? ' '.concat(l[5])
                                                        : '',
                                                    ' {'
                                                )
                                                .concat(l[1], '}')),
                                        (l[5] = i)),
                                    n &&
                                        (l[2]
                                            ? ((l[1] = '@media '
                                                  .concat(l[2], ' {')
                                                  .concat(l[1], '}')),
                                              (l[2] = n))
                                            : (l[2] = n)),
                                    o &&
                                        (l[4]
                                            ? ((l[1] = '@supports ('
                                                  .concat(l[4], ') {')
                                                  .concat(l[1], '}')),
                                              (l[4] = o))
                                            : (l[4] = ''.concat(o))),
                                    t.push(l))
                            }
                        }),
                        t
                    )
                }
            },
            417: (e) => {
                e.exports = function (e, t) {
                    return (
                        t || (t = {}),
                        e
                            ? ((e = String(e.__esModule ? e.default : e)),
                              /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                              t.hash && (e += t.hash),
                              /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                                  ? '"'.concat(
                                        e
                                            .replace(/"/g, '\\"')
                                            .replace(/\n/g, '\\n'),
                                        '"'
                                    )
                                  : e)
                            : e
                    )
                }
            },
            601: (e) => {
                e.exports = function (e) {
                    return e[1]
                }
            },
            72: (e) => {
                var t = []
                function n(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            n = r
                            break
                        }
                    return n
                }
                function r(e, r) {
                    for (var i = {}, a = [], c = 0; c < e.length; c++) {
                        var d = e[c],
                            s = r.base ? d[0] + r.base : d[0],
                            l = i[s] || 0,
                            u = ''.concat(s, ' ').concat(l)
                        i[s] = l + 1
                        var p = n(u),
                            f = {
                                css: d[1],
                                media: d[2],
                                sourceMap: d[3],
                                supports: d[4],
                                layer: d[5],
                            }
                        if (-1 !== p) t[p].references++, t[p].updater(f)
                        else {
                            var y = o(f, r)
                            ;(r.byIndex = c),
                                t.splice(c, 0, {
                                    identifier: u,
                                    updater: y,
                                    references: 1,
                                })
                        }
                        a.push(u)
                    }
                    return a
                }
                function o(e, t) {
                    var n = t.domAPI(t)
                    return (
                        n.update(e),
                        function (t) {
                            if (t) {
                                if (
                                    t.css === e.css &&
                                    t.media === e.media &&
                                    t.sourceMap === e.sourceMap &&
                                    t.supports === e.supports &&
                                    t.layer === e.layer
                                )
                                    return
                                n.update((e = t))
                            } else n.remove()
                        }
                    )
                }
                e.exports = function (e, o) {
                    var i = r((e = e || []), (o = o || {}))
                    return function (e) {
                        e = e || []
                        for (var a = 0; a < i.length; a++) {
                            var c = n(i[a])
                            t[c].references--
                        }
                        for (var d = r(e, o), s = 0; s < i.length; s++) {
                            var l = n(i[s])
                            0 === t[l].references &&
                                (t[l].updater(), t.splice(l, 1))
                        }
                        i = d
                    }
                }
            },
            659: (e) => {
                var t = {}
                e.exports = function (e, n) {
                    var r = (function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e)
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                            t[e] = n
                        }
                        return t[e]
                    })(e)
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        )
                    r.appendChild(n)
                }
            },
            540: (e) => {
                e.exports = function (e) {
                    var t = document.createElement('style')
                    return (
                        e.setAttributes(t, e.attributes),
                        e.insert(t, e.options),
                        t
                    )
                }
            },
            56: (e, t, n) => {
                e.exports = function (e) {
                    var t = n.nc
                    t && e.setAttribute('nonce', t)
                }
            },
            825: (e) => {
                e.exports = function (e) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        }
                    var t = e.insertStyleElement(e)
                    return {
                        update: function (n) {
                            !(function (e, t, n) {
                                var r = ''
                                n.supports &&
                                    (r += '@supports ('.concat(
                                        n.supports,
                                        ') {'
                                    )),
                                    n.media &&
                                        (r += '@media '.concat(n.media, ' {'))
                                var o = void 0 !== n.layer
                                o &&
                                    (r += '@layer'.concat(
                                        n.layer.length > 0
                                            ? ' '.concat(n.layer)
                                            : '',
                                        ' {'
                                    )),
                                    (r += n.css),
                                    o && (r += '}'),
                                    n.media && (r += '}'),
                                    n.supports && (r += '}')
                                var i = n.sourceMap
                                i &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i)
                                                    )
                                                )
                                            ),
                                            ' */'
                                        )),
                                    t.styleTagTransform(r, e, t.options)
                            })(t, e, n)
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1
                                e.parentNode.removeChild(e)
                            })(t)
                        },
                    }
                }
            },
            113: (e) => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild)
                        t.appendChild(document.createTextNode(e))
                    }
                }
            },
            609: (e, t, n) => {
                e.exports = n.p + '5883d4e8ba62263d6541.jpg'
            },
        },
        t = {}
    function n(r) {
        var o = t[r]
        if (void 0 !== o) return o.exports
        var i = (t[r] = { id: r, exports: {} })
        return e[r](i, i.exports, n), i.exports
    }
    ;(n.m = e),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e
            return n.d(t, { a: t }), t
        }),
        (n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis
            try {
                return this || new Function('return this')()
            } catch (e) {
                if ('object' == typeof window) return window
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            var e
            n.g.importScripts && (e = n.g.location + '')
            var t = n.g.document
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script')
                if (r.length)
                    for (
                        var o = r.length - 1;
                        o > -1 && (!e || !/^http(s?):/.test(e));

                    )
                        e = r[o--].src
            }
            if (!e)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                )
            ;(e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (n.p = e)
        })(),
        (n.b = document.baseURI || self.location.href),
        (n.nc = void 0),
        (() => {
            var e = n(72),
                t = n.n(e),
                r = n(825),
                o = n.n(r),
                i = n(659),
                a = n.n(i),
                c = n(56),
                d = n.n(c),
                s = n(540),
                l = n.n(s),
                u = n(113),
                p = n.n(u),
                f = n(607),
                y = {}
            ;(y.styleTagTransform = p()),
                (y.setAttributes = d()),
                (y.insert = a().bind(null, 'head')),
                (y.domAPI = o()),
                (y.insertStyleElement = l()),
                t()(f.A, y),
                f.A && f.A.locals && f.A.locals
            var h = [
                {
                    id: 'notes-jT-jjsyz61J8XKiI',
                    title: 'Welcome to Notes, Dimas!',
                    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
                    createdAt: '2022-07-28T10:03:12.594Z',
                    archived: !1,
                },
                {
                    id: 'notes-aB-cdefg12345',
                    title: 'Meeting Agenda',
                    body: 'Discuss project updates and assign tasks for the upcoming week.',
                    createdAt: '2022-08-05T15:30:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-XyZ-789012345',
                    title: 'Shopping List',
                    body: 'Milk, eggs, bread, fruits, and vegetables.',
                    createdAt: '2022-08-10T08:45:23.120Z',
                    archived: !1,
                },
                {
                    id: 'notes-1a-2b3c4d5e6f',
                    title: 'Personal Goals',
                    body: 'Read two books per month, exercise three times a week, learn a new language.',
                    createdAt: '2022-08-15T18:12:55.789Z',
                    archived: !1,
                },
                {
                    id: 'notes-LMN-456789',
                    title: 'Recipe: Spaghetti Bolognese',
                    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
                    createdAt: '2022-08-20T12:30:40.200Z',
                    archived: !1,
                },
                {
                    id: 'notes-QwErTyUiOp',
                    title: 'Workout Routine',
                    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
                    createdAt: '2022-08-25T09:15:17.890Z',
                    archived: !1,
                },
                {
                    id: 'notes-abcdef-987654',
                    title: 'Book Recommendations',
                    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
                    createdAt: '2022-09-01T14:20:05.321Z',
                    archived: !1,
                },
                {
                    id: 'notes-zyxwv-54321',
                    title: 'Daily Reflections',
                    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
                    createdAt: '2022-09-07T20:40:30.150Z',
                    archived: !1,
                },
                {
                    id: 'notes-poiuyt-987654',
                    title: 'Travel Bucket List',
                    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
                    createdAt: '2022-09-15T11:55:44.678Z',
                    archived: !1,
                },
                {
                    id: 'notes-asdfgh-123456',
                    title: 'Coding Projects',
                    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
                    createdAt: '2022-09-20T17:10:12.987Z',
                    archived: !1,
                },
                {
                    id: 'notes-5678-abcd-efgh',
                    title: 'Project Deadline',
                    body: 'Complete project tasks by the deadline on October 1st.',
                    createdAt: '2022-09-28T14:00:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-9876-wxyz-1234',
                    title: 'Health Checkup',
                    body: 'Schedule a routine health checkup with the doctor.',
                    createdAt: '2022-10-05T09:30:45.600Z',
                    archived: !1,
                },
                {
                    id: 'notes-qwerty-8765-4321',
                    title: 'Financial Goals',
                    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
                    createdAt: '2022-10-12T12:15:30.890Z',
                    archived: !1,
                },
                {
                    id: 'notes-98765-54321-12345',
                    title: 'Holiday Plans',
                    body: 'Research and plan for the upcoming holiday destination.',
                    createdAt: '2022-10-20T16:45:00.000Z',
                    archived: !1,
                },
                {
                    id: 'notes-1234-abcd-5678',
                    title: 'Language Learning',
                    body: 'Practice Spanish vocabulary for 30 minutes every day.',
                    createdAt: '2022-10-28T08:00:20.120Z',
                    archived: !1,
                },
            ]
            const b = function () {
                localStorage.setItem('notesData', JSON.stringify(h))
            }
            var m = localStorage.getItem('notesData')
            if (m)
                try {
                    var v = JSON.parse(m)
                    Object.assign(h, v)
                } catch (e) {
                    console.error(
                        'Error parsing notes data from localStorage:',
                        e
                    )
                }
            function g(e) {
                return (
                    (g =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              }),
                    g(e)
                )
            }
            function w(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
            }
            function x(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(e, S(r.key), r)
                }
            }
            function T(e, t, n) {
                return (
                    t && x(e.prototype, t),
                    n && x(e, n),
                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                    e
                )
            }
            function S(e) {
                var t = (function (e, t) {
                    if ('object' != g(e) || !e) return e
                    var n = e[Symbol.toPrimitive]
                    if (void 0 !== n) {
                        var r = n.call(e, 'string')
                        if ('object' != g(r)) return r
                        throw new TypeError(
                            '@@toPrimitive must return a primitive value.'
                        )
                    }
                    return String(e)
                })(e)
                return 'symbol' == g(t) ? t : t + ''
            }
            function k(e, t, n) {
                return (
                    (t = M(t)),
                    (function (e, t) {
                        if (t && ('object' === g(t) || 'function' == typeof t))
                            return t
                        if (void 0 !== t)
                            throw new TypeError(
                                'Derived constructors may only return object or undefined'
                            )
                        return (function (e) {
                            if (void 0 === e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                )
                            return e
                        })(e)
                    })(
                        e,
                        A()
                            ? Reflect.construct(t, n || [], M(e).constructor)
                            : t.apply(e, n)
                    )
                )
            }
            function E(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError(
                        'Super expression must either be null or a function'
                    )
                ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(e, 'prototype', { writable: !1 }),
                    t && j(e, t)
            }
            function C(e) {
                var t = 'function' == typeof Map ? new Map() : void 0
                return (
                    (C = function (e) {
                        if (
                            null === e ||
                            !(function (e) {
                                try {
                                    return (
                                        -1 !==
                                        Function.toString
                                            .call(e)
                                            .indexOf('[native code]')
                                    )
                                } catch (t) {
                                    return 'function' == typeof e
                                }
                            })(e)
                        )
                            return e
                        if ('function' != typeof e)
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            )
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e)
                            t.set(e, n)
                        }
                        function n() {
                            return (function (e, t, n) {
                                if (A())
                                    return Reflect.construct.apply(
                                        null,
                                        arguments
                                    )
                                var r = [null]
                                r.push.apply(r, t)
                                var o = new (e.bind.apply(e, r))()
                                return n && j(o, n.prototype), o
                            })(e, arguments, M(this).constructor)
                        }
                        return (
                            (n.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: n,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                            j(n, e)
                        )
                    }),
                    C(e)
                )
            }
            function A() {
                try {
                    var e = !Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                    )
                } catch (e) {}
                return (A = function () {
                    return !!e
                })()
            }
            function j(e, t) {
                return (
                    (j = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e
                          }),
                    j(e, t)
                )
            }
            function M(e) {
                return (
                    (M = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e)
                          }),
                    M(e)
                )
            }
            var O = (function (e) {
                function t() {
                    return w(this, t), k(this, t)
                }
                return (
                    E(t, e),
                    T(t, [
                        {
                            key: 'connectedCallback',
                            value: function () {
                                var e = this.dataset,
                                    t = e.id,
                                    n = e.title,
                                    r = e.body
                                ;(this.innerHTML =
                                    '\n      <div class="note" data-id="'
                                        .concat(t, '">\n        <h2>')
                                        .concat(n, '</h2>\n        <p>')
                                        .concat(
                                            r,
                                            '</p>\n        <div class="edit-buttons" style="display: flex; justify-content: center;"> <button id="buttonEdit"><i class="fa-solid fa-pen"></i></button>\n          <button id="buttonDel"><i class="fas fa-trash"></i></button>\n        </div>\n      </div>\n    '
                                        )),
                                    this.querySelector(
                                        '#buttonDel'
                                    ).addEventListener('click', function () {
                                        !(function (e) {
                                            var t = document.querySelector(
                                                '.note[data-id="'.concat(
                                                    e,
                                                    '"]'
                                                )
                                            )
                                            confirm(
                                                'Apakah Kamu Yakin Ingin Menghapus Note?'
                                            ) &&
                                                (t.parentNode.removeChild(t),
                                                alert(
                                                    'Catatan berhasil dihapus!'
                                                ))
                                        })(t)
                                    }),
                                    this.querySelector(
                                        '#buttonEdit'
                                    ).addEventListener('click', function () {
                                        !(function (e) {
                                            var t = document.querySelector(
                                                    '.note[data-id="'.concat(
                                                        e,
                                                        '"]'
                                                    )
                                                ),
                                                n =
                                                    t.querySelector(
                                                        'h2'
                                                    ).innerText,
                                                r =
                                                    t.querySelector(
                                                        'p'
                                                    ).innerText
                                            Swal.fire({
                                                title: 'Edit Note',
                                                html: '\n        <input id="editedTitle" class="swal2-input" value="'
                                                    .concat(
                                                        n,
                                                        '" placeholder="Title">\n        <textarea id="editedBody" class="swal2-textarea" placeholder="Note Body">'
                                                    )
                                                    .concat(
                                                        r,
                                                        '</textarea>\n      '
                                                    ),
                                                showCancelButton: !0,
                                                confirmButtonText: 'Simpan',
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function () {
                                                    var e =
                                                            document.getElementById(
                                                                'editedTitle'
                                                            ).value,
                                                        t =
                                                            document.getElementById(
                                                                'editedBody'
                                                            ).value
                                                    return (
                                                        (e && t) ||
                                                            Swal.showValidationMessage(
                                                                'Please enter both title and body for the note.'
                                                            ),
                                                        {
                                                            editedTitle: e,
                                                            editedBody: t,
                                                        }
                                                    )
                                                },
                                                allowOutsideClick: function () {
                                                    return !Swal.isLoading()
                                                },
                                            }).then(function (n) {
                                                if (n.isConfirmed) {
                                                    var r = n.value.editedTitle,
                                                        o = n.value.editedBody
                                                    ;(t.querySelector(
                                                        'h2'
                                                    ).innerText = r),
                                                        (t.querySelector(
                                                            'p'
                                                        ).innerText = o)
                                                    var i = h.findIndex(
                                                        function (t) {
                                                            return t.id === e
                                                        }
                                                    )
                                                    ;-1 !== i &&
                                                        ((h[i].title = r),
                                                        (h[i].body = o),
                                                        b()),
                                                        Swal.fire({
                                                            icon: 'Berhasil!',
                                                            title: 'Note Diperbarui!',
                                                            showConfirmButton:
                                                                !1,
                                                            timer: 1500,
                                                        })
                                                }
                                            })
                                        })(t)
                                    })
                            },
                        },
                    ])
                )
            })(C(HTMLElement))
            customElements.define('note-element', O)
            var B = (function (e) {
                function t() {
                    return w(this, t), k(this, t, arguments)
                }
                return (
                    E(t, e),
                    T(t, [
                        {
                            key: 'connectedCallback',
                            value: function () {
                                this.innerHTML =
                                    '\n      <header class="text">\n        <h1 id="notesApp">Aplikasi Note</h1>\n        <div class="search-container">\n          <i class="fas fa-search"></i>\n          <input type="text" id="pencarian" placeholder="Cari Note">\n        </div>\n      </header>\n    '
                            },
                        },
                    ])
                )
            })(C(HTMLElement))
            customElements.define('bar-aplikasi', B)
            var N = (function (e) {
                function t() {
                    return w(this, t), k(this, t, arguments)
                }
                return (
                    E(t, e),
                    T(t, [
                        {
                            key: 'connectedCallback',
                            value: function () {
                                ;(this.innerHTML =
                                    '\n      <div class="text">\n        <textarea id="judulNote" name="story" rows="1" cols="50" placeholder="Masukkan Judul Disini"></textarea>\n      </div>\n      <div class="text">\n        <textarea id="isiNote" name="story" rows="10" cols="50" placeholder="Masukkan Isi Note Disini"></textarea>\n      </div>\n        <div class="text">\n      <button id="buttonAdd"><i class="fas fa-add"></i> Tambah Note</button>\n      </div>\n    '),
                                    this.querySelector(
                                        '#buttonAdd'
                                    ).addEventListener('click', function () {
                                        !(function () {
                                            var e =
                                                    document.getElementById(
                                                        'judulNote'
                                                    ).value,
                                                t =
                                                    document.getElementById(
                                                        'isiNote'
                                                    ).value
                                            if (e && t) {
                                                var n =
                                                        'notes-' +
                                                        Math.random()
                                                            .toString(36)
                                                            .substr(2, 9),
                                                    r = {
                                                        id: n,
                                                        title: e,
                                                        body: t,
                                                    }
                                                h.push(r)
                                                var o =
                                                    document.createElement(
                                                        'note-element'
                                                    )
                                                ;(o.dataset.id = n),
                                                    (o.dataset.title = e),
                                                    (o.dataset.body = t),
                                                    document
                                                        .getElementById(
                                                            'notesContainer'
                                                        )
                                                        .appendChild(o),
                                                    b(),
                                                    (document.getElementById(
                                                        'judulNote'
                                                    ).value = ''),
                                                    (document.getElementById(
                                                        'isiNote'
                                                    ).value = ''),
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Catatan Berhasil Ditambahkan!',
                                                        showConfirmButton: !1,
                                                        timer: 1300,
                                                    })
                                            } else
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Waduhh! Sepertinya Ada yang Kurang nih...',
                                                    text: 'Harap Masukkan Judul dan Isi Note!.',
                                                })
                                        })()
                                    })
                            },
                        },
                    ])
                )
            })(C(HTMLElement))
            customElements.define('note-input', N)
            var L = document.getElementById('notesContainer'),
                I = document.getElementById('pencarian')
            I.addEventListener('keyup', function () {
                var e = I.value.toLowerCase(),
                    t = h.filter(function (t) {
                        return t.title.toLowerCase().includes(e)
                    })
                ;(L.innerHTML = ''),
                    t.forEach(function (e) {
                        var t = document.createElement('note-element')
                        ;(t.dataset.id = e.id),
                            (t.dataset.title = e.title),
                            (t.dataset.body = e.body),
                            L.appendChild(t)
                    })
            }),
                Array.isArray(h)
                    ? h.forEach(function (e) {
                          var t = document.createElement('note-element')
                          ;(t.dataset.id = e.id),
                              (t.dataset.title = e.title),
                              (t.dataset.body = e.body),
                              L.appendChild(t)
                      })
                    : console.error(
                          'notesData is not an array or is undefined.'
                      )
        })()
})()
