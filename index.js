window.baidu = window.baidu || {
    version: "1-0-0",
    emptyFn: function () { }
};
window.onerror = function () { }
    ;
baidu.isString = function (a) {
    return (typeof a == "object" && a && a.constructor == String) || typeof a == "string"
}
    ;
baidu.G = function () {
    for (var b = [], c = arguments.length - 1; c > -1; c--) {
        var d = arguments[c];
        b[c] = null;
        if (typeof d == "object" && d && d.dom) {
            b[c] = d.dom
        } else {
            if ((typeof d == "object" && d && d.tagName) || d == window || d == document) {
                b[c] = d
            } else {
                if (baidu.isString(d) && (d = document.getElementById(d))) {
                    b[c] = d
                }
            }
        }
    }
    return b.length < 2 ? b[0] : b
}
    ;
var Fe = Fe || {
    version: "20080809",
    emptyFn: function () { }
};
(function () {
    Fe._log = [];
    var a = 0;
    var b = {};
    Fe.BaseClass = function (c) {
        b[(this.hashCode = (c || Fe.BaseClass.guid()))] = this
    }
        ;
    Fe.BaseClass.guid = function () {
        return "mz_" + (a++).toString(36)
    }
        ;
    Fe.BaseClass.create = function () {
        var d = new Fe.BaseClass();
        d.decontrol();
        return d
    }
        ;
    window.Instance = Fe.instance = Fe.I = function (c) {
        return b[c]
    }
        ;
    Fe.BaseClass.prototype.dispose = function () {
        if (this.hashCode) {
            delete b[this.hashCode]
        }
        for (var c in this) {
            if (typeof this[c] != "function") {
                delete this[c]
            }
        }
    }
        ;
    Fe.BaseClass.prototype.getHashCode = function () {
        if (!this.hashCode) {
            b[(this.hashCode = Fe.BaseClass.guid())] = this
        }
        return this.hashCode
    }
        ;
    Fe.BaseClass.prototype.decontrol = function () {
        delete b[this.hashCode]
    }
        ;
    Fe.BaseClass.prototype.toString = function () {
        return "[object " + (this._className || "Object") + "]"
    }
        ;
    Fe.BaseClass.prototype._wlog = function (d, e) {
        var c = Fe._log;
        if (c.length > 100) {
            c.reverse().length = 50;
            c.reverse()
        }
        c[c.length] = "[" + d + "][" + (this._className || "Object") + " " + this.hashCode + "] " + e
    }
}
)();
Function.prototype.inherits = function (c, b) {
    var a, d, f = this.prototype, e = function () { };
    e.prototype = c.prototype;
    d = this.prototype = new e();
    if (typeof (b) == "string") {
        d._className = b
    }
    for (a in f) {
        d[a] = f[a]
    }
    this.prototype.constructor = f.constructor;
    f = e = null;
    return d
}
    ;
Fe.extend = function (f, d) {
    if (f && d && typeof (d) == "object") {
        for (var e in d) {
            f[e] = d[e]
        }
        var c = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        for (var a = 0, b; a < c.length; a++) {
            b = c[a];
            if (Object.prototype.hasOwnProperty.call(d, b)) {
                f[b] = d[b]
            }
        }
    }
    return f
}
    ;
Fe.on = function (c, b, a) {
    if (!(c = baidu.G(c))) {
        return c
    }
    b = b.replace(/^on/, "").toLowerCase();
    if (c.attachEvent) {
        c[b + a] = function () {
            a.call(c, window.event)
        }
            ;
        c.attachEvent("on" + b, c[b + a])
    } else {
        c.addEventListener(b, a, false)
    }
    return c
}
    ;
Fe.un = function (c, b, a) {
    if (!(c = baidu.G(c))) {
        return c
    }
    b = b.replace(/^on/, "").toLowerCase();
    if (c.attachEvent) {
        c.detachEvent("on" + b, c[b + a]);
        c[b + a] = null
    } else {
        c.removeEventListener(b, a, false)
    }
    return c
}
    ;
var mapConfig = {
    map: {
        key: "67bd734bd2ef5e5ccecfeccbb5a221ee",
        id: "MapContent",
        center: {
            x: 116.395645,
            y: 39.929986
        },
        city: "北京市",
        level: 12,
        width: 697,
        height: 550,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 697,
        maxHeight: 550
    },
    event: {
        dra: 1,
        scr: 1,
        dou: 1,
        key: 1
    },
    control: {
        nav: {
            self: 1,
            style: "LARGE",
            place: "TOP_LEFT"
        },
        ove: {
            self: 1,
            style: 1,
            place: "BOTTOM_RIGHT"
        },
        sca: {
            self: 1,
            style: "METRIC",
            place: "BOTTOM_LEFT"
        }
    }
};
var userConfig = {
    map: {
        key: "",
        id: mapConfig.map.id,
        center: mapConfig.map.center,
        city: mapConfig.map.city,
        level: mapConfig.map.level,
        width: mapConfig.map.width,
        height: mapConfig.map.height,
        minWidth: mapConfig.map.minWidth,
        minHeight: mapConfig.map.minHeight,
        maxWidth: mapConfig.map.maxWidth,
        maxHeight: mapConfig.map.maxHeight
    },
    event: {
        dra: mapConfig.event.dra,
        scr: mapConfig.event.scr,
        dou: mapConfig.event.dou,
        key: mapConfig.event.key
    },
    control: {
        nav: {
            self: mapConfig.control.nav.self,
            style: mapConfig.control.nav.style,
            place: mapConfig.control.nav.place
        },
        ove: {
            self: mapConfig.control.ove.self,
            style: mapConfig.control.ove.style,
            place: mapConfig.control.ove.place
        },
        sca: {
            self: mapConfig.control.sca.self,
            style: mapConfig.control.sca.style,
            place: mapConfig.control.sca.place
        }
    }
};
var temp = {
    map: {},
    control: {
        nav: new BMap.NavigationControl(),
        ove: new BMap.OverviewMapControl(),
        sca: new BMap.ScaleControl()
    }
};
var userCcof = userConfig.control;
function doLoad() {
    initMap();
    initMapSize();
    initMapControl();
    initMapEvent();
    hidInputOverline();
    bindEvent()
}
function initMap() {
    var c = userConfig.map;
    var b = userConfig.event;
    var d = new BMap.Map("MapContent");
    var a = new BMap.Point(c.center.x, c.center.y);
    d.centerAndZoom(a, c.level);
    setCurrentCityName(c.city);
    window.map = d;
    showMapPointAndLevel()
}
function showMapPointAndLevel() {
    var a = userConfig.map;
    baidu.G("mapCenterPointX").value = a.center.x;
    baidu.G("mapCenterPointY").value = a.center.y;
    baidu.G("mapCenterLevel").value = a.level
}
function initMapSize() {
    var b = userConfig.map;
    var a = b.width;
    var c = b.height;
    baidu.G(b.id).style.width = a + "px";
    baidu.G(b.id).style.height = c + "px";
    baidu.G("map_width").value = a;
    baidu.G("map_height").value = c
}
function initMapControl() {
    var j = userConfig.control;
    var c = temp.control;
    for (var d in c) {
        map.addControl(c[d])
    }
    for (var d in j) {
        var a = baidu.G("control_" + d);
        var e = baidu.G(d + "_style_" + j[d].style);
        var g = baidu.G(d + "_place_" + j[d].place);
        var f = window["BMAP_NAVIGATION_CONTROL_" + j[d].style];
        var b = window["BMAP_ANCHOR_" + j[d].place];
        if (j[d].self == 1) {
            if (c[d].setType) {
                c[d].setType(f)
            }
            if (c[d].setAnchor) {
                c[d].setAnchor(b)
            }
            if (c[d].changeView) {
                if (j[d].style == 1 && !c[d].isOpen()) {
                    c[d].changeView()
                }
            }
            var h = [a, e, g];
            for (var d = 0; d < h.length; d++) {
                if (h[d]) {
                    h[d].checked = "checked"
                }
            }
        } else {
            c[d].hide();
            if (a) {
                a.checked = ""
            }
        }
    }
}
function initMapEvent() {
    var a = userConfig.event;
    for (var c in a) {
        var d = baidu.G("event_" + c);
        var b = a[c] ? "enable" : "disable";
        if (d && a[c] == 1) {
            d.checked = "checked"
        } else {
            d.checked = ""
        }
        map[b + d.value]()
    }
}
function editCurrentCity() {
    baidu.G("CurrentCityCon").style.display = "none";
    baidu.G("CurrentCityEdit").style.display = "";
    baidu.G("CurrentCityInput").value = "请输入城市名称";
    baidu.G("CurrentCityInput").onfocus();
    baidu.G("CurrentCityInput").focus()
}
function updateCurrentCity() {
    var a = baidu.G("CurrentCityInput").value;
    a.replace(/^\s*|\s*$/g, "");
    if (!a || a == "请输入城市名称") {
        baidu.G("cityNameTip").style.display = "block";
        baidu.G("cityNameTip").innerHTML = "请输入正确的中文城市名称";
        return
    }
    getCityPoint(a);
    baidu.G("CurrentCityCon").style.display = "";
    baidu.G("CurrentCityEdit").style.display = "none";
    baidu.G("cityNameTip").style.display = "none"
}
function canelCurrentCity() {
    baidu.G("CurrentCityCon").style.display = "";
    baidu.G("CurrentCityEdit").style.display = "none";
    baidu.G("cityNameTip").style.display = "none"
}
function setCurrentCity(b) {
    if (b.content.error == 0) {
        editCurrentCity();
        setTimeout(function () {
            baidu.G("cityNameTip").style.display = "block";
            baidu.G("cityNameTip").innerHTML = "请输入正确的中文城市名称"
        }, 0)
    } else {
        setCurrentCityName(b.content.cname);
        var d = (((b.content.geo).split("|")[2]).split(";")[0]).split(",")[0];
        var c = (((b.content.geo).split("|")[2]).split(";")[0]).split(",")[1];
        var a = map.mercatorToLnglat(d, c);
        if (b.content.cname == "全国") {
            map.centerAndZoom(new BMap.Point(a[0], a[1]), 5)
        } else {
            map.centerAndZoom(new BMap.Point(a[0], a[1]), b.content.level)
        }
    }
}
function setCurrentCityName(b) {
    var a = userConfig.map;
    a.city = b;
    baidu.G("cityName").innerHTML = b
}
function getCityPoint(b) {
    b = encodeURIComponent(b);
    var a = "http://map.baidu.com/?newmap=1&qt=cur&callback=setCurrentCity&ie=utf-8&wd=" + b + "&oue=1&res=jc";
    scriptRequest(a, "null")
}
function getCurrentCityName() {
    var d = map.getZoom();
    var g = map.getBounds();
    var f = map.lnglatToMercator(g.minX, g.minY);
    var c = map.lnglatToMercator(g.maxX, g.maxY);
    var a = f[0] + "," + f[1] + ";" + c[0] + "," + c[1];
    if (d <= 7) {
        setCurrentCityName("全国");
        return
    }
    var e = "http://map.baidu.com/?newmap=1&qt=cen&b=" + a + "&l=" + d;
    scriptRequest(e, h);
    function h() {
        if (typeof (_mapCenter) != "undefined" && _mapCenter.content && _mapCenter.content.name) {
            setCurrentCityName(_mapCenter.content.name)
        }
    }
}
function getlikeArea() {
    if (typeof (l_search) == "undefined") {
        l_option = {
            onSearchComplete: function (e) {
                if (l_search.getStatus() == BMAP_STATUS_SUCCESS) {
                    var b = l_search._json.content.level || 17;
                    var g = 0;
                    if (l_search._json.content.length) {
                        g = l_search._json.content.length - e.getCurrentNumPois();
                        var h = "";
                        var c = l_search._json.content[g].cla;
                        for (var f = 0; f < c.length; f++) {
                            h += c[f].splice(",")[1] + ","
                        }
                        if (/区县/g.test(h)) {
                            b = 14
                        }
                    }
                    var k = e.getPoi(0);
                    var d = k.point;
                    var j = new BMap.Point(d.lng, d.lat);
                    map.centerAndZoom(j, b)
                }
            }
        };
        l_search = new BMap.LocalSearch(map, l_option)
    }
    var a = baidu.G("searchMap").value;
    if (!a.replace(/^\s*|\s*$/g, "")) {
        return
    }
    l_search.search(a)
}
function changeMapCenterPoint(d, c) {
    var b = userConfig.map;
    var e = d.value;
    b.center[c] = e;
    var a = new BMap.Point(b.center.x, b.center.y);
    map.centerAndZoom(a, b.level)
}
function changeMapSize(d, c) {
    var a = userConfig.map;
    var b = d.value;
    if (c == "wid") {
        if (b < a.minWidth || b > a.maxWidth) {
            if (b < a.minWidth) {
                b = a.minWidth
            } else {
                b = a.maxWidth
            }
            d.value = b
        }
        a.width = b;
        baidu.G(a.id).style.width = b + "px"
    } else {
        if (c == "hei") {
            if (b < a.minHeight || b > a.maxHeight) {
                if (b < a.minHeight) {
                    b = a.minHeight
                } else {
                    b = a.maxHeight
                }
                d.value = b
            }
            a.height = b;
            baidu.G(a.id).style.height = b + "px"
        }
    }
    setTimeout(function () {
        map.panTo(new BMap.Point(a.center.x, a.center.y), a.level)
    }, 200)
}
function changeMapControl(d) {
    var b = userConfig.control;
    var a = temp.control;
    var c = d.value;
    if (!d.checked && a[c].isVisible()) {
        a[c].hide();
        b[c].self = 0
    } else {
        a[c].show();
        if (document.all && c == "nav") {
            setTimeout(function () {
                a.nav.setType(window["BMAP_NAVIGATION_CONTROL_" + b.nav.style])
            }, 0)
        }
        b[c].self = 1
    }
}
function changeNavStyle(e) {
    var c = userConfig.control;
    var a = temp.control;
    var b = e.cl_type || e.getAttribute("cl_type");
    var f = "";
    if (b == "nav") {
        f = "BMAP_NAVIGATION_CONTROL_"
    } else {
        if (b == "sca") {
            f = "BMAP_UNIT_"
        }
    }
    var d = window[f + e.value];
    if (b == "nav") {
        a[b].setType(d)
    } else {
        if (b == "sca") {
            a[b].setUnit(d)
        }
    }
    c[b].style = e.value;
    baidu.G(b + "_style_" + e.value).checked = "checked"
}
function changeOveStyle(c) {
    var b = userConfig.control;
    var a = temp.control;
    baidu.G("ove_style_" + c.value).checked = "checked";
    if (!!c.name) {
        if (c.value == 1) {
            if (a.ove.isOpen()) {
                return
            }
            a.ove.changeView()
        } else {
            if (!a.ove.isOpen()) {
                return
            }
            a.ove.changeView()
        }
    }
    b.ove.style = c.value
}
function changeCtrlPlace(e) {
    var d = userConfig.control;
    var a = temp.control;
    var c = e.cl_type || e.getAttribute("cl_type");
    var b = window["BMAP_ANCHOR_" + e.value];
    a[c].setAnchor(b);
    d[c].place = e.value;
    baidu.G(c + "_place_" + e.value).checked = "checked"
}
function changeMapEvent(c) {
    var a = userConfig.event;
    var b = v = -1;
    if (c.checked) {
        b = "enable";
        v = 1
    } else {
        b = "disable";
        v = 0
    }
    if (!b) {
        return
    }
    map[b + c.value]();
    var d = c.value.slice(0, 3).toLowerCase();
    a[d] = v
}
function bindEvent() {
    var f = userConfig.map;
    var l = userConfig.control;
    var k = userConfig.event;
    var h = ["TOP_LEFT", "TOP_RIGHT", "BOTTOM_LEFT", "BOTTOM_RIGHT"];
    var c = function () {
        f.center.x = map.getCenter().lng;
        f.center.y = map.getCenter().lat;
        f.level = map.getZoom();
        getCurrentCityName();
        showMapPointAndLevel()
    };
    map.addEventListener("moveend", c);
    map.addEventListener("zoomend", c);
    map.addEventListener("load", c);
    baidu.G("CurrentCityInput").onkeydown = function (i) {
        var i = window.event || i;
        baidu.G("cityNameTip").style.display = "none";
        if (!(i.keyCode == 13) && !(i.keyCode == 27)) {
            return
        }
        if (i.keyCode == 13) {
            updateCurrentCity()
        } else {
            if (i.keyCode == 27) {
                canelCurrentCity()
            }
        }
    }
        ;
    baidu.G("searchMap").onkeydown = function (i) {
        var i = window.event || i;
        if (!(i.keyCode == 13)) {
            return
        }
        getlikeArea()
    }
        ;
    temp.control.ove.addEventListener("viewchanging", function () {
        var i = {};
        if (this.isOpen()) {
            i.value = 1
        } else {
            i.value = 0
        }
        changeOveStyle(i)
    });
    for (var e in l) {
        var d = baidu.G("control_" + e);
        if (d) {
            d.onclick = function () {
                changeMapControl(this)
            }
        }
        for (var a = 0; a < h.length; a++) {
            var g = baidu.G(e + "_place_" + h[a]);
            if (g) {
                g.onclick = function () {
                    changeCtrlPlace(this)
                }
            }
        }
    }
    var b = ["LARGE", "SMALL", "PAN", "ZOOM"];
    for (var e = 0; e < b.length; e++) {
        var d = baidu.G("nav_style_" + b[e]);
        if (d) {
            d.onclick = function () {
                changeNavStyle(this)
            }
        }
    }
    baidu.G("sca_style_METRIC").onclick = baidu.G("sca_style_IMPERIAL").onclick = function () {
        changeNavStyle(this)
    }
        ;
    baidu.G("ove_style_0").onclick = baidu.G("ove_style_1").onclick = function () {
        changeOveStyle(this)
    }
        ;
    for (var e in k) {
        var d = baidu.G("event_" + e);
        if (d) {
            d.onclick = function () {
                changeMapEvent(this)
            }
        }
    }
}
function hidInputOverline() {
    var a = document.getElementById("wxp_zdydt").getElementsByTagName("input");
    var c = [];
    for (var b = 0; b < a.length; b++) {
        (a[b].type == "checkbox" || a[b].type == "radio" || a[b].type == "button") ? c.push(a[b]) : null
    }
    for (var b = 0; b < c.length; b++) {
        c[b].onfocus = function () {
            this.blur()
        }
    }
}
function changeSignNav(c, d, b) {
    stopBubble(b);
    if (d == 1) {
        if (_gl.temp.curSignType == "iw") {
            return
        }
        _gl.temp.curSignType = "iw";
        _gl.temp.curSignNav = "Point";
        us_sign.openPoint()
    } else {
        if (d == 2) {
            if (_gl.temp.curSignType == "pl") {
                return
            }
            _gl.temp.curSignType = "pl";
            _gl.temp.curSignNav = "Polyline";
            us_sign.openPolyline()
        } else {
            if (d == 3) {
                if (_gl.temp.curSignType == "lb") {
                    return
                }
                _gl.temp.curSignType = "lb";
                _gl.temp.curSignNav = "Remark";
                us_sign.openRemark()
            }
        }
    }
    if (baidu.G("sign_nav_bg").className == "wxp_nav_bg" + d) {
        return
    }
    baidu.G("sign_nav_bg").className = "wxp_nav_bg" + d;
    for (var a = 1; a <= 3; a++) {
        baidu.G("sign_content_" + a).style.display = "none"
    }
    baidu.G("sign_content_" + d).style.display = "block";
    _gl.temp.signclickTrue = 1
}
function input_focus(c, a, b) {
    baidu.G("cityNameTip").style.display = "none";
    if (!b) {
        b = ""
    }
    c.style.color = "#000";
    (c.value != a) ? null : c.value = b
}
function input_blur(c, a, b) {
    c.style.color = "#8c8c8c";
    (c.value == b || c.value.length <= 0) ? c.value = a : null
}
function scriptRequest(url, echo, id, charset) {
    var isIe = /msie/i.test(window.navigator.userAgent);
    if (isIe && baidu.G("_script_" + id)) {
        var script = baidu.G("_script_" + id)
    } else {
        if (baidu.G("_script_" + id)) {
            baidu.G("_script_" + id).parentNode.removeChild(baidu.G("_script_" + id))
        }
        var script = document.createElement("script");
        if (charset != null) {
            script.charset = charset
        }
        if (id != null && id != "") {
            script.setAttribute("id", "_script_" + id)
        }
        script.setAttribute("type", "text/javascript");
        document.body.appendChild(script)
    }
    var t = new Date();
    if (url.indexOf("?") > -1) {
        url += "&t=" + t.getTime()
    } else {
        url += "?t=" + t.getTime()
    }
    var _complete = function () {
        if (!script.readyState || script.readyState == "loaded" || script.readyState == "complete") {
            if (echo == "null") {
                return
            } else {
                if (typeof (echo) == "function") {
                    echo()
                } else {
                    eval(echo)
                }
            }
        }
    };
    if (isIe) {
        script.onreadystatechange = _complete
    } else {
        script.onload = _complete
    }
    script.setAttribute("src", url)
}
function getScrollTop() {
    var a = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        a = document.documentElement.scrollTop
    } else {
        if (document.body) {
            a = document.body.scrollTop
        }
    }
    return a
}
function getPosition(a) {
    var b = {
        left: 0,
        top: 0
    };
    while (a && a.offsetParent) {
        b.left += a.offsetLeft;
        b.top += a.offsetTop;
        a = a.offsetParent
    }
    return b
}
function stopBubble(a) {
    var a = window.event || a;
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true
}
var _gl = null;
var _sign = function () { };
_sign.mapSign = {
    pointInfo: {
        list: {}
    },
    polylineInfo: {
        list: {}
    },
    remarkInfo: {
        list: {}
    }
};
_sign.isNull = function (a) {
    for (var b in a) {
        return 0
    }
    return 1
}
    ;
function Sign() {
    Fe.BaseClass.call(this);
    _gl.oSign = this;
    this.tabDom = null;
    this.tabIndex;
    this.followInfo = {
        point: "左键标记，右键退出",
        polyline: "左键单击开始画线，双击结束画线，右键退出",
        remark: "左键标记，右键退出"
    };
    this.temp = {
        event: {
            polyline: [],
            followTip: []
        },
        polyline: {}
    };
    return ""
}
Sign.inherits(Fe.BaseClass, "Sign");
Fe.extend(Sign.prototype, {
    openPoint: function () {
        var a = this;
        if (_gl.config.iw.toal >= _gl.config.iw.lagerT) {
            _gl.showTipInfo("signPointTip", "您最多可创建" + _gl.config.iw.lagerT + "个点标记");
            a.exituserSign();
            return
        }
        a.initMask("transparent.cur,default,curLab", this.openPointFun);
        a.showFollowTip("point")
    },
    openPointFun: function (f, d) {
        var a = _gl.createMark(f);
        var b = _gl.config.iw.index - 1;
        var g = b + 1;
        var c = '<li id="iwListCon' + b + '" class="signLihover">						<div class="wxp_nav_3"><div id="iwEdit' + b + '" style="display:none;float:right;margin:0;"><span onclick="editSignList(\'iw\',' + b + ")\">编辑</span> | <span onclick=\"removeSignList('iw'," + b + ')">删除</span></div><b id="iwFormTitle_' + b + '" class="cur_point" onclick="_gl.openInfoWnd(\'\',' + b + ');">' + _gl.config.iw.title + g + '</b><span style="color:#f00;cursor:auto;display:none" id="iwSaveTip' + b + '">(未保存)</span></div>						<div class="wxp_con_1" id="iwList' + b + '">						</div>					</li>';
        addSignList("signPointList", c, "mapPoint", "iw", b);
        setTimeout(d.exituserSign, 1)
    },
    openPolyline: function () {
        var f = this;
        if (_gl.config.pl.toal >= _gl.config.pl.lagerT) {
            _gl.showTipInfo("signPolyLineTip", "您最多可创建" + _gl.config.pl.lagerT + "个线标记");
            f.exituserSign();
            return
        }
        var j = f.initMask("circle.cur,crosshair", null);
        map.closeInfoWindow();
        this.showFollowTip("polyline");
        var d = [];
        var g = [];
        var h = [];
        var b;
        var i = 0;
        var c = function (p) {
            var k = BMap.OperationMask.getDrawPoint(p, true);
            if (h[h.length - 1] == '"' + k.lng + "|" + k.lat + '"') {
                return
            }
            var l = _gl.config.pl.index;
            f.temp.drawing = true;
            f.followTitle.setContent("双击结束画线");
            d.push(k);
            g.push(k);
            h.push('"' + k.lng + "|" + k.lat + '"');
            if (!b) {
                var o = _gl.config.pl;
                var m = {
                    strokeColor: o.color,
                    strokeWeight: o.weight,
                    strokeOpacity: o.opacity,
                    strokeStyle: o.style
                };
                var n = null;
                b = new BMap.Polyline(d, m);
                b.addEventListener("click", function () {
                    editSignList("pl", l)
                });
                b.addEventListener("mouseover", function () {
                    n = setTimeout(function () {
                        hoverListFrom("pl", l)
                    }, 300)
                });
                b.addEventListener("mouseout", function () {
                    outListFrom("pl", l);
                    clearTimeout(n)
                });
                f.temp.polyline.obj = b;
                f.temp.polyline.closeOk = 0;
                b.addEventListener("lineupdate", function () {
                    if (!i) {
                        return
                    }
                    var u = [];
                    var t = this.getPoints();
                    for (var r = 0; r < t.length; r++) {
                        var s = t[r];
                        var q = '"' + s.lng + "|" + s.lat + '"';
                        u.push(q)
                    }
                    _sign.mapSign.polylineInfo.list[l].arr = u
                });
                map.addOverlay(b)
            } else {
                b.setPoints(g)
            }
        };
        var a = function (l) {
            var k = BMap.OperationMask.getDrawPoint(l, true);
            if (d.length > 0) {
                d[g.length] = k;
                b.setPoints(d)
            }
        };
        var e = function (o) {
            if (h.length > 1) {
                var k = _gl.config.pl.index;
                var n = k * 1 + 1;
                var m = _gl.config.pl;
                if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
                    b.setPoints(g)
                }
                i = 1;
                f.temp.polyline.closeOk = 1;
                b.enableEditing();
                _sign.mapSign.polylineInfo.list[k] = {
                    polyobj: b,
                    arr: h,
                    color: m.color,
                    _color: m.color,
                    weight: m.weight,
                    _weight: m.weight,
                    opacity: m.opacity,
                    _opacity: m.opacity,
                    style: m.style,
                    _style: m.style
                };
                var l = '<li id="plListCon' + k + '" class="signLihover">							<div class="wxp_nav_3"><div id="plEdit' + k + '" style="float:right;margin:0;"><span onclick="editSignList(\'pl\',' + k + ")\">编辑</span> | <span onclick=\"removeSignList('pl'," + k + ')">删除</span></div><b id="plFormTitle_' + k + "\" onclick=\"gotoBestMap('pl'," + k + ')" class="cur_point">手绘路线' + n + '</b><span style="color:#f00;cursor:auto;display:none" id="plSaveTip' + k + '">(未保存)</span></div>							<div class="wxp_con_1" id="plList' + k + '">							</div>						</li>';
                _gl.config.pl.index++;
                _gl.config.pl.toal++;
                addSignList("signPolylineList", l, "mapPolyline", "pl", k)
            }
            _gl.temp.pl.index = k;
            f.temp.drawing = false;
            _gl.oSign.clearPolylineFun();
            _gl.oSign.exituserSign()
        };
        Fe.on(j, "click", c);
        Fe.on(j, "mousemove", a);
        Fe.on(j, "dblclick", e);
        f.temp.event.polyline.push({
            elem: j,
            type: "click",
            func: c
        }, {
            elem: j,
            type: "mousemove",
            func: a
        }, {
            elem: j,
            type: "dblclick",
            func: e
        })
    },
    clearPolylineFun: function () {
        var d = this;
        var c = d.temp.event.polyline;
        if (c && c.length > 0) {
            var a = d.temp.event.polyline;
            for (var b = 0; b < a.length; b++) {
                Fe.un(a[b].elem, a[b].type, a[b].func)
            }
        }
        if (!d.temp.polyline.closeOk) {
            map.removeOverlay(d.temp.polyline.obj)
        }
        d.temp.event.polyline = []
    },
    openRemark: function () {
        var a = this;
        if (_gl.config.lb.toal >= _gl.config.lb.lagerT) {
            _gl.showTipInfo("signRemarkTip", "您最多可创建" + _gl.config.lb.lagerT + "个文字标记");
            a.exituserSign();
            return
        }
        a.initMask(" ,text", this.openRemarkFun);
        a.showFollowTip("remark")
    },
    openRemarkFun: function (f, c) {
        _gl.createLabel(f);
        setTimeout(c.exituserSign, 1);
        var a = _gl.config.lb.index - 1;
        var d = a + 1;
        var b = '<li id="lbListCon' + a + '" class="signLihover">						<div class="wxp_nav_3"><div id="lbEdit' + a + '" style="float:right;margin:0;display:none"><span onclick="editSignList(\'lb\',' + a + ")\">编辑</span> | <span onclick=\"removeSignList('lb'," + a + ')">删除</span></div><b id="lbFormTitle_' + a + "\" onclick=\"gotoBestMap('lb'," + a + ')" class="cur_point">文字备注' + d + '</b><span style="color:#f00;cursor:auto;display:none" id="lbSaveTip' + a + '">(未保存)</span></div>						<div class="wxp_con_1" id="lbList' + a + '">						</div>					</li>';
        addSignList("signRemarkList", b, "mapRemark", "lb", a)
    },
    initMask: function (e, g) {
        _gl.oSign.exituserSign();
        map.closeInfoWindow();
        var f = e.split(",")[0];
        var d = e.split(",")[1];
        var h = e.split(",")[2] || "";
        var a = "images/" + f;
        if (FeBrowser.chrome || FeBrowser.safari || FeBrowser.opera) {
            a = ""
        }
        var c = this;
        BMap.OperationMask.show(map);
        var i = BMap.OperationMask.getDom(map);
        BMap.OperationMask.setCursor("url('" + a + "')," + d);
        if (h) {
            _gl.showCurLab()
        }
        var b = function (k) {
            var k = k || window.event;
            var j = k.target || k.srcElement;
            if (k.button == 2 && !c.temp.drawing) {
                setTimeout(c.exituserSign, 1);
                Fe.un(i, "mouseup", b)
            }
        };
        Fe.on(i, "mouseup", b);
        if (typeof (g) != "function") {
            return i
        }
        BMap.OperationMask.getDom(map).onclick = function (j) {
            g(j, c)
        }
    },
    exituserSign: function () {
        var b = this;
        var a = BMap.OperationMask.getDom(map);
        a.style.cursor = "pointer";
        BMap.OperationMask.hide(map);
        a.onclick = null;
        _gl.oSign.clearPolylineFun();
        _gl.exitShowCurLab();
        _gl.oSign.exitShowFollowTip();
        _gl.temp.curSignType = ""
    },
    showFollowTip: function (b) {
        var d = this;
        d.followShow = false;
        if (d.followInfo[b]) {
            var a;
            if (!d.followTitle) {
                a = d.followTitle = new BMap.Label(d.followInfo[b], {
                    offset: new BMap.Size(0, 0)
                })
            }
            a = d.followTitle;
            a.setOffset(new BMap.Size(8, 14));
            if (b == "point") {
                a.setOffset(new BMap.Size(5, 5))
            }
            a.setStyle({
                color: "#333",
                borderColor: "#ff0103"
            });
            a.setContent(d.followInfo[b]);
            map.addOverlay(a);
            a.hide();
            d.followShow = true;
            var e = function (g) {
                if (!d.followShow) {
                    return
                }
                g = window.event || g;
                var h = g.target || g.srcElement;
                if (h != BMap.OperationMask.getDom(map)) {
                    a.hide();
                    return
                }
                a.show();
                var f = BMap.OperationMask.getDrawPoint(g, true);
                a.setPoint(f);
                d.followShow = true
            };
            var c = function (f) {
                f = window.event || f;
                var g = f.target || f.srcElement;
                if (a) { }
                var h = g.getAttribute("userTagPanl");
                if (g == BMap.OperationMask.getDom(map)) { }
            };
            Fe.on(document, "mousemove", e);
            Fe.on(document, "click", c);
            d.temp.event.followTip.push({
                elem: document,
                type: "mousemove",
                func: e
            }, {
                elem: document,
                type: "click",
                func: c
            })
        }
    },
    exitShowFollowTip: function () {
        var d = this;
        var c = d.temp.event.followTip;
        if (d.followTitle) {
            d.followTitle.hide()
        }
        if (c && c.length > 0) {
            var a = d.temp.event.followTip;
            for (var b = 0; b < a.length; b++) {
                Fe.un(a[b].elem, a[b].type, a[b].func)
            }
        }
        d.temp.event.followTip = []
    }
});
function MapSign() {
    Fe.BaseClass.call(this);
    _gl = this;
    this.oSign = null;
    this.temp = {
        iw: {
            change: 0,
            previous: null
        },
        pl: {
            index: 0,
            previous: null,
            change: 0
        },
        lb: {
            index: 0,
            previous: null,
            change: 0
        },
        cur: {
            label: null,
            index: 11
        },
        icon: null,
        curSignType: null,
        preSignType: null,
        signclickTrue: 0,
        event: {
            showCurLab: []
        }
    };
    this.poiMarker = {};
    this.config = {
        iw: {
            index: 0,
            toal: 0,
            lagerT: 10,
            title: "我的标记",
            content: "我的备注",
            cityCode: 1,
            fav: 0,
            save: 0,
            show: 0
        },
        pl: {
            index: 0,
            toal: 0,
            lagerT: 10,
            color: "#f00",
            weight: 4,
            opacity: 0.6,
            style: "solid"
        },
        lb: {
            index: 0,
            toal: 0,
            lagerT: 10,
            content: "我的标记",
            label: {}
        },
        cur: {
            11: {
                _w: 12,
                w: 21,
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            12: {
                _w: 12,
                w: 21,
                h: 21,
                l: 23,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            13: {
                _w: 12,
                w: 21,
                h: 21,
                l: 46,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            14: {
                _w: 12,
                w: 21,
                h: 21,
                l: 69,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            15: {
                _w: 12,
                w: 21,
                h: 21,
                l: 92,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            16: {
                _w: 12,
                w: 21,
                h: 21,
                l: 115,
                t: 0,
                x: 6,
                y: 21,
                lb: 5
            },
            21: {
                _w: 19,
                w: 23,
                h: 25,
                l: 0,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            22: {
                _w: 19,
                w: 23,
                h: 25,
                l: 23,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            23: {
                _w: 19,
                w: 23,
                h: 25,
                l: 46,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            24: {
                _w: 19,
                w: 23,
                h: 25,
                l: 69,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            25: {
                _w: 19,
                w: 23,
                h: 25,
                l: 92,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            26: {
                _w: 19,
                w: 23,
                h: 25,
                l: 115,
                t: 21,
                x: 9,
                y: 25,
                lb: 12
            },
            31: {
                _w: 17,
                w: 21,
                h: 21,
                l: 0,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            },
            32: {
                _w: 17,
                w: 21,
                h: 21,
                l: 23,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            },
            33: {
                _w: 17,
                w: 21,
                h: 21,
                l: 46,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            },
            34: {
                _w: 17,
                w: 21,
                h: 21,
                l: 69,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            },
            35: {
                _w: 17,
                w: 21,
                h: 21,
                l: 92,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            },
            36: {
                _w: 17,
                w: 21,
                h: 21,
                l: 115,
                t: 46,
                x: 1,
                y: 21,
                lb: 10
            }
        }
    };
    this.favTime = ""
}
MapSign.inherits(Fe.BaseClass, "MapSign");
Fe.extend(MapSign.prototype, {
    createMark: function (j) {
        var b, m, a, k, n, g, h, p, q;
        var i = _gl.config.iw.index;
        var j = j || window.event;
        b = BMap.OperationMask.getDrawPoint(j, true);
        m = _gl.config.iw.title;
        k = _gl.config.iw.content;
        n = _gl.config.iw.cityCode;
        g = _gl.config.iw.fav;
        save = _gl.config.iw.save;
        p = _gl.config.iw.show;
        q = _gl.temp.cur.index;
        var d = _gl.config.cur[q];
        var r = [d.x, d.y];
        h = _gl.createIcon();
        h.offset = new BMap.Size(r[0], r[1]);
        var f = new BMap.Marker(b, {
            enableMassClear: false,
            icon: h
        });
        var c = null;
        f.addEventListener("click", function () {
            _gl.openInfoWnd(this, i, {
                type: "marker"
            })
        });
        f.addEventListener("mouseover", function () {
            this.setTop(true, 270000000);
            c = setTimeout(function () {
                hoverListFrom("iw", i)
            }, 300)
        });
        f.addEventListener("mouseout", function () {
            this.setTop(true, 260000000);
            outListFrom("iw", i);
            clearTimeout(c)
        });
        f.addEventListener("dragend", function () {
            var e = this.getPoint().lng + "|" + this.getPoint().lat;
            if (_sign.mapSign.pointInfo.list[i].point != e) {
                _sign.mapSign.pointInfo.list[i].point = e
            }
        });
        f.enableDragging(true);
        var l = new BMap.Label(m, {
            offset: new BMap.Size(d._w - d.x + 3, -20)
        });
        f.setLabel(l);
        var o = null;
        l.addEventListener("mouseover", function () {
            _gl.poiMarker[i].setTop(true, 270000000);
            o = setTimeout(function () {
                hoverListFrom("iw", i)
            }, 300)
        });
        l.addEventListener("mouseout", function () {
            _gl.poiMarker[i].setTop(true, 260000000);
            outListFrom("iw", i);
            clearTimeout(o)
        });
        l.addEventListener("click", function () {
            _gl.openInfoWnd(_gl.poiMarker[i], i, {
                type: "marker"
            })
        });
        map.addOverlay(f);
        l.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
        });
        f.setTitle("可移动改变位置");
        if (!_sign.mapSign.pointInfo.list[i]) {
            _sign.mapSign.pointInfo.list[i] = {
                marker: f,
                point: b.lng + "|" + b.lat,
                title: m,
                _title: m,
                content: k,
                _content: k,
                cityCode: n,
                fav: g,
                save: save,
                show: p,
                cur: q,
                _cur: q
            };
            _gl.poiMarker[i] = f
        }
        _gl.temp.iw.index = i;
        _gl.temp.iw.pre = i;
        _gl.config.iw.index++;
        _gl.config.iw.toal++;
        return f
    },
    createInfoWnd: function (e, d, c) {
        var b = e.index;
        var a = createSearchInfoWnd(e, d);
        a.addEventListener("open", function () {
            var g = _gl.temp.iw.index;
            var f = _sign.mapSign.pointInfo.list[g];
            _gl.temp.iw.pre = g;
            _gl.temp.iw.hashCode = f.marker.hashCode;
            f.marker.getLabel().hide()
        });
        a.addEventListener("close", function () {
            var i = _gl.temp.iw.pre;
            var f = _sign.mapSign.pointInfo.list[i];
            var g = formatTitle(f.title);
            var k = baidu.G("iwSaveTip" + i);
            _gl.temp.iw.hashCode = null;
            f.show = 0;
            var h = _gl.poiMarker[i].getLabel();
            var l = _gl.temp.cur.index;
            var j = _gl.config.cur[l];
            h.setStyle({
                left: (j._w - j.x + 3) + "px"
            });
            if (!f.curChange && !f.titleChange && !f.contentChange) {
                h.setContent(g);
                h.setTitle(g);
                h.setStyle({
                    color: ""
                })
            }
            h.show()
        });
        _gl.temp.iw._iw = a;
        return a
    },
    openInfoWnd: function (c, e, h) {
        baidu.G("iwFormName_" + e).blur();
        baidu.G("iwFormContent_" + e).blur();
        var b = _sign.mapSign.pointInfo.list[e];
        if (!c) {
            c = b.marker
        }
        if (_gl.temp.iw && (_gl.temp.iw.hashCode == c.hashCode)) {
            return
        }
        editSignList("iw", e, {
            type: "map"
        });
        _gl.temp.iw.index = e;
        b.show = 1;
        var a = b.point.split("|")[0];
        var g = b.point.split("|")[1];
        var f = function () {
            var i = _gl.createInfoWnd({
                userSign: 1,
                title: b._title,
                content: b._content,
                index: e,
                fav: b.fav
            }, {
                cityCode: b.cityCode,
                x: a,
                y: g
            });
            return i
        };
        var d = f();
        c.openInfoWindow(d)
    },
    deletePoint: function (a) {
        var c = _sign.mapSign.pointInfo.list[a];
        map.removeOverlay(c.marker);
        _gl.config.iw.toal--;
        delete _sign.mapSign.pointInfo.list[a];
        delete _gl.poiMarker[a];
        var b = baidu.G("iwListCon" + a);
        if (b) {
            baidu.G("signPointList").removeChild(b)
        }
    },
    createIcon: function () {
        var a = _gl.temp.cur.index;
        var c = _gl.config.cur[a];
        var b = new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_mk_icon.png", new BMap.Size(c.w, c.h), {
            imageOffset: new BMap.Size(-c.l, -c.t),
            infoWindowOffset: new BMap.Size(c.lb + 5, 1)
        });
        _gl.temp.icon = b;
        return b
    },
    showCurLab: function () {
        var c;
        if (!_gl.temp.cur.label) {
            c = _gl.temp.cur.label = new BMap.Marker(map.getCenter(), new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_cursor.gif"));
            c.setTop(true, 280000000)
        }
        c = _gl.temp.cur.label;
        var b = _gl.temp.cur.index;
        var g = _gl.config.cur[b];
        if (!c.isVisible()) {
            map.addOverlay(c)
        }
        var d = _gl.createIcon();
        var a = [g.x, g.y];
        d.offset = new BMap.Size(a[0], a[1]);
        c.setIcon(d);
        c.hide();
        var f = function (i) {
            i = window.event || i;
            var j = i.target || i.srcElement;
            if (j != BMap.OperationMask.getDom(map)) {
                c.hide();
                return
            }
            c.show();
            var h = BMap.OperationMask.getDrawPoint(i, true);
            c.setPoint(h)
        };
        var e = function (h) {
            h = window.event || h;
            var i = h.target || h.srcElement;
            var j = i.getAttribute("userTagPanl")
        };
        Fe.on(document, "mousemove", f);
        Fe.on(document, "click", e);
        _gl.temp.event.showCurLab.push({
            elem: document,
            type: "mousemove",
            func: f
        }, {
            elem: document,
            type: "click",
            func: e
        })
    },
    exitShowCurLab: function () {
        var b = _gl.temp.event.showCurLab;
        if (_gl.temp.cur && _gl.temp.cur.label) {
            _gl.temp.cur.label.hide()
        }
        if (b && b.length > 0) {
            for (var a = 0; a < b.length; a++) {
                Fe.un(b[a].elem, b[a].type, b[a].func)
            }
        }
        _gl.temp.event.showCurLab = []
    },
    setCurLab: function (c) {
        var a = _gl.temp.iw.index;
        var g = _sign.mapSign.pointInfo.list[a];
        _gl.temp.cur.index = c;
        var f = _gl.config.cur[c];
        var d = _gl.createIcon();
        var b = [f.x, f.y];
        var e = g.marker.getLabel();
        d.offset = new BMap.Size(b[0], b[1]);
        g.marker.setIcon(d);
        var f = _gl.config.cur[c];
        e.setStyle({
            left: (f._w - f.x + 3) + "px"
        })
    },
    showTipInfo: function (d, c) {
        var a = baidu.G(d);
        var b = function () {
            _gl.favTime = setTimeout(function () {
                a.style.display = "none"
            }, 1500)
        };
        a.innerHTML = c;
        a.style.display = "";
        b()
    },
    transformArea: function (a) {
        var e = new RegExp("\r\n", "g");
        var c = new RegExp("\n", "g");
        var b = new RegExp(" ", "g");
        var d = a.replace(e, "<br/>").replace(c, "<br/>").replace(b, "&nbsp;");
        return d
    },
    deTransformArea: function (a) {
        var d = new RegExp("<br/>", "g");
        var b = new RegExp("&nbsp;", "g");
        var c = a.replace(d, "\n").replace(b, " ");
        return c
    },
    createLabel: function (h) {
        var f = this;
        var d, a;
        var h = h || window.event;
        var c = _gl.config.lb.index;
        a = BMap.OperationMask.getDrawPoint(h, true);
        d = _gl.config.lb.content;
        var b = new BMap.Label("", {
            offset: new BMap.Size(3, -7),
            point: a,
            enableMassClear: false
        });
        var g = null;
        b.addEventListener("click", function () {
            editSignList("lb", c)
        });
        b.addEventListener("mouseover", function () {
            this.setStyle({
                zIndex: "100"
            });
            g = setTimeout(function () {
                hoverListFrom("lb", c)
            }, 300)
        });
        b.addEventListener("mouseout", function () {
            this.setStyle({
                zIndex: "100"
            });
            outListFrom("lb", c);
            clearTimeout(g)
        });
        b.setContent("<div style='padding:2px;'>" + d + "</div>");
        map.addOverlay(b);
        b.setStyle({
            border: "1px solid #999"
        });
        _sign.mapSign.remarkInfo.list[_gl.config.lb.index] = {
            point: a.lng + "|" + a.lat,
            content: d,
            _content: d,
            type: 0
        };
        _gl.config.lb.label[_gl.config.lb.index] = {
            label: b
        };
        _gl.config.lb.index++;
        _gl.config.lb.toal++
    },
    delRemark: function (b) {
        var d = this;
        var a = _gl.config.lb.label[b].label;
        var c = baidu.G("lbListCon" + b);
        map.removeOverlay(a);
        delete _sign.mapSign.remarkInfo.list[b];
        baidu.G("signRemarkList").removeChild(c);
        _gl.config.lb.toal--
    }
});
function createSearchInfoWnd(e, d) {
    var g = e.title;
    var c = e.content;
    var f = "<p class='iw_poi_title' title='" + g + "' id='SignIWTitle'>";
    f += g;
    f += "</p>";
    var b = '<div class="iw_poi_content" id="SignIWContent">' + c + "</div>";
    var a = new BMap.InfoWindow(b, {
        title: f,
        height: 0,
        margin: [10, 10, 20, 10]
    });
    return a
}
var us_mapSign = new MapSign();
var us_sign = new Sign();
function addSignList(f, c, a, d, b) {
    baidu.G("sign" + d + "NoListTip").style.display = "none";
    baidu.G(f).innerHTML += c;
    baidu.G("sign" + d + "SaveTip").style.display = "";
    var e = _gl.temp[d].previous;
    if (e != null) {
        hideListFrom(d, e)
    }
    _gl.temp[d].previous = b;
    showSignListCon(d, b)
}
function removeSignList(b, c) {
    var a = baidu.G(b + "ListCon" + c);
    if (b == "iw") {
        _gl.deletePoint(c)
    } else {
        if (b == "pl") {
            baidu.G("signPolylineList").removeChild(a);
            delPolyLine(c)
        } else {
            if (b == "lb") {
                _gl.delRemark(c)
            }
        }
    }
    if (_gl.config[b].toal < 1) {
        baidu.G("sign" + b + "SaveTip").style.display = "none";
        baidu.G("sign" + b + "NoListTip").style.display = ""
    }
}
function editSignList(b, e, d) {
    var c = _gl.temp[b].previous;
    var a = _sign.mapSign.pointInfo.list[e];
    _gl.temp[b].index = e;
    var d = d && d.type || "list";
    if (e != c) {
        hideListFrom(b, c)
    }
    showListFrom(b, e);
    showSignListCon(b, e);
    _gl.temp[b].previous = e;
    if (b == "iw" && d == "list") {
        _gl.openInfoWnd(a.marker, e, {
            type: "marker"
        })
    }
}
function showSignListCon(c, d) {
    var a = getEditHtml(c, d);
    baidu.G(c + "List" + d).innerHTML = a;
    if (c == "pl") {
        var b = _sign.mapSign.polylineInfo.list[d];
        baidu.G("plStyleWeight" + d).value = b._weight;
        baidu.G("plStyleColor" + d).value = b._color;
        baidu.G("plStyleOpacity" + d).value = b._opacity
    }
}
function goPtIcon(d) {
    var c = getPosition(baidu.G("sign_content_1")).top;
    var b = getPosition(d).top;
    var a = d.offsetHeight;
    baidu.G("pointIconCon").style.top = b - c + "px"
}
function exitPtIcon() {
    baidu.G("pointIconCon").style.top = "-1000px"
}
function setPtIcon(d) {
    var a = _gl.temp.iw.index;
    var c = _sign.mapSign.pointInfo.list[a];
    var b = c.marker.getLabel();
    exitPtIcon();
    baidu.G("iwFormIcon_" + a).className = "sp_s sp_" + d;
    _gl.setCurLab(d);
    c._cur = d;
    if (d != c.cur) {
        c.curChange = 1;
        baidu.G("iwSaveTip" + a).style.display = "";
        b.setContent("未保存");
        b.setStyle({
            color: "#f00"
        })
    } else {
        c.curChange = 0;
        baidu.G("iwSaveTip" + a).style.display = "none";
        if (!c.curChange && !c.titleChange && !c.contentChange) {
            baidu.G("iwSaveTip" + a).style.display = "none";
            b.setContent(c.title);
            b.setStyle({
                color: ""
            })
        }
    }
}
function hideListFrom(a, b) {
    if (baidu.G(a + "List" + b)) {
        baidu.G(a + "ListCon" + b).className = "";
        baidu.G(a + "Edit" + b).style.display = "";
        baidu.G(a + "List" + b).style.display = "none";
        if (a == "iw") {
            exitPtIcon()
        }
    }
}
function showListFrom(a, c) {
    var b = _gl.temp[a].previous;
    hideListFrom(a, b);
    if (baidu.G(a + "List" + c)) {
        baidu.G(a + "ListCon" + c).className = "signLihover";
        showSignListCon(a, c);
        baidu.G(a + "Edit" + c).style.display = "none";
        baidu.G(a + "List" + c).style.display = ""
    }
    _gl.temp[a].previous = c
}
function hoverListFrom(b, c) {
    var a = _gl.temp[b].index;
    if (c == a) {
        return
    }
    if (baidu.G(b + "List" + c)) {
        baidu.G(b + "ListCon" + c).className = "signLihover"
    }
}
function outListFrom(b, c) {
    var a = _gl.temp[b].index;
    if (c == a) {
        return
    }
    if (baidu.G(b + "List" + c)) {
        baidu.G(b + "ListCon" + c).className = ""
    }
}
function getEditHtml(c, d) {
    var b, a;
    switch (c) {
        case "iw":
            a = _sign.mapSign.pointInfo.list[d];
            b = '<ul class="wxp_lis_2">						<li class="li_hei1"><span class="wxp_nav_4">标记图标：</span><span class="wxp_img_con1" onclick="goPtIcon(this)"><img class="sp_s sp_' + a._cur + '" id="iwFormIcon_' + d + '" src="http://api.map.baidu.com/lbsapi/creatmap/images/transparent.gif"></span>						</li>						<li><span class="wxp_nav_4">名　称：</span><input type="text" value="' + a._title + '" id="iwFormName_' + d + '" class="ptInput1" onfocus="updateIwInfo(this,\'title\',' + d + ")\" onblur=\"delIwInfoUdT(this,'title'," + d + ')" /></li>						<li class="hei2"><span class="wxp_nav_4">备　注：</span><textarea class="ptInput2" id="iwFormContent_' + d + "\" onfocus=\"updateIwInfo(this,'content'," + d + ")\" onblur=\"delIwInfoUdT(this,'content'," + d + ')" >' + _gl.deTransformArea(a._content) + '</textarea></li>					</ul>					<div class="wxp_con_3" style="margin-top:7px;"><input type="button" value="保　存" onclick="submitSignList(\'iw\',' + d + ')"><input type="button" value="取　消" onclick="cancelSignList(\'iw\',' + d + ')"></div>';
            break;
        case "pl":
            a = _sign.mapSign.polylineInfo.list[d];
            b = '<ul class="wxp_lis_2">						<li><span class="wxp_nav_4">宽　度：</span><select onchange="plStyleSet(this,' + d + ",'Weight')\" id=\"plStyleWeight" + d + '"><option value="2">最细</option><option value="3">较细</option><option value="4">中等</option><option value="5">较粗</option><option value="6">最粗</option></select>						</li>						<li><span class="wxp_nav_4">颜　色：</span><select onchange="plStyleSet(this,' + d + ",'Color')\" id=\"plStyleColor" + d + '"><option value="#f00">红色</option><option value="#f0f">紫色</option><option value="#0ff">青色</option><option value="#000">黑色</option><option value="#00f">蓝色</option><option value="#0f0">绿色</option></select></li>						<li><span class="wxp_nav_4">透明度：</span><select onchange="plStyleSet(this,' + d + ",'Opacity')\" id=\"plStyleOpacity" + d + '"><option value="1">不透明</option><option value="0.4">高透明</option><option value="0.8">低透明</option><option value="0.6">中等</option></select></li>						<li><label for="psStyleSet' + d + '"><span style="float:left">保存为默认值</span><input type="checkbox" id="psStyleSet' + d + '" onfocus="this.blur()" /></label></li>					</ul>					<div class="wxp_con_3"><input type="button" value="保　存" onclick="submitSignList(\'pl\',' + d + ')"><input type="button" value="取　消" onclick="cancelSignList(\'pl\',' + d + ')"></div>';
            break;
        case "lb":
            a = _sign.mapSign.remarkInfo.list[d];
            b = '<ul class="wxp_lis_2">						<li class="hei3"><span class="wxp_nav_4">内　容：</span><textarea class="ptInput2" id="lbFormContent_' + d + '" onfocus="updateLbInfo(this,' + d + ')" onblur="delLbInfoUdT(this,' + d + ')">' + _gl.deTransformArea(a._content) + '</textarea></li>					</ul>					<div class="wxp_con_3"><input type="button" value="保　存" onclick="submitSignList(\'lb\',' + d + ')"><input type="button" value="取　消" onclick="cancelSignList(\'lb\',' + d + ')"></div>';
            break;
        default:
            b = ""
    }
    return b
}
function submitSignList(b, d) {
    if (b == "iw") {
        submitIwInfo(b, d)
    } else {
        if (b == "pl") {
            var a = _sign.mapSign.polylineInfo.list[d];
            a.weight = a._weight;
            a.color = a._color;
            a.opacity = a._opacity;
            if (baidu.G("psStyleSet" + d).checked) {
                var c = _gl.config.pl;
                c.weight = a._weight * 1;
                c.color = a._color;
                c.opacity = a._opacity * 1
            }
        } else {
            if (b == "lb") {
                updateRemarkInfo(b, d)
            }
        }
    }
    baidu.G(b + "SaveTip" + d).style.display = "none";
    hideListFrom(b, d)
}
function cancelSignList(b, e) {
    hideListFrom(b, e);
    if (b == "iw") {
        var d = _sign.mapSign.pointInfo.list[e];
        d.marker.closeInfoWindow();
        d._title = d.title;
        d._content = d.content;
        d._cur = d.cur;
        var c = d.marker.getLabel();
        c.setContent(d._title);
        c.setStyle({
            color: ""
        })
    } else {
        if (b == "pl") {
            var a = _sign.mapSign.polylineInfo.list[e];
            a.polyobj.setStrokeWeight(a.weight);
            a.polyobj.setStrokeColor(a.color);
            a.polyobj.setStrokeOpacity(a.opacity);
            a._weight = a.weight;
            a._color = a.color;
            a._opacity = a.opacity
        }
    }
    if (baidu.G(b + "SaveTip" + e)) {
        baidu.G(b + "SaveTip" + e).style.display = "none"
    }
}
function updateRemarkInfo(a, c) {
    var b = _sign.mapSign.remarkInfo.list[c];
    b.content = b._content;
    _gl.config.lb.label[c].label.setContent("<div style='padding:2px;'>" + b.content + "</div>")
}
function changeRemarkInfo(a, b) { }
function plStyleSet(d, e, c) {
    var b = _sign.mapSign.polylineInfo.list[e];
    var a = c.toLowerCase();
    b.polyobj["setStroke" + c](d.value);
    b["_" + a] = d.value;
    baidu.G("plSaveTip" + e).style.display = "";
    _gl.temp.pl.change = 1
}
function delPolyLine(b) {
    var a = _sign.mapSign.polylineInfo.list[b];
    map.removeOverlay(a.polyobj);
    delete _sign.mapSign.polylineInfo.list[b];
    _gl.config.pl.toal--
}
function getInputValue(b, a, d) {
    var c = b.value;
    c = c.replace(/^\s*|\s*$/g, "").replace(/<script>|<\/script>/g, "");
    c = _gl.transformArea(c);
    c = stringEscape(c);
    var e = c;
    e = e.replace(/<.*?>|<\/.*?>/g, "");
    if (!e) {
        c = _gl.config[a][d]
    }
    return c
}
function formatTitle(a) {
    a = a.replace(/^\s*|\s*$/g, "").replace(/<.*?>|<\/.*?>/g, "");
    if (a.length > 11) {
        a = a.substring(0, 10) + "..."
    }
    return a
}
function updateIwInfo(e, d, c) {
    var a = _sign.mapSign.pointInfo.list[c];
    var g = a[d];
    var f = a.marker.getLabel();
    var b = function () {
        var h = getInputValue(e, "iw", d);
        a["_" + d] = h;
        if (h != g) {
            a.marker.closeInfoWindow();
            f.setContent("未保存");
            f.setStyle({
                color: "#f00"
            });
            a[d + "Change"] = 1;
            baidu.G("iwSaveTip" + c).style.display = ""
        } else {
            a[d + "Change"] = 0;
            if (!a.curChange && !a.titleChange && !a.contentChange) {
                baidu.G("iwSaveTip" + c).style.display = "none";
                f.setContent(a.title);
                f.setStyle({
                    color: ""
                })
            }
        }
    };
    temp.IWtimer = setInterval(b, 200)
}
function delIwInfoUdT(d, c, b) {
    var e = getInputValue(d, "iw", c);
    var a = _sign.mapSign.pointInfo.list[b];
    a["_" + c] = e;
    clearInterval(temp.IWtimer)
}
function stringEscape(a) {
    a = a.replace(/<(script|link|style|iframe)(.|\n|\s)*/ig, "");
    a = a.replace(/on/ig, "");
    return a
}
function submitIwInfo(d, c) {
    var a = _sign.mapSign.pointInfo.list[c];
    var e = a.marker.getLabel();
    var b = formatTitle(a._title);
    a.title = stringEscape(a._title);
    a.content = stringEscape(a._content);
    a.cur = a._cur;
    e.setContent(b);
    e.setStyle({
        color: ""
    });
    a.titleChange = 0;
    a.contentChange = 0;
    a.curChange = 0;
    baidu.G(d + "FormTitle_" + c).innerHTML = b
}
function updateLbInfo(c, b) {
    var d = _sign.mapSign.remarkInfo.list[b];
    var e = d.content;
    var a = function () {
        var f = getInputValue(c, "lb", "content");
        d._content = f;
        _gl.config.lb.label[b].label.setContent("<div style='padding:2px;'>" + f + "</div>");
        if (d.contentChange && f == _gl.config.lb.content) { }
        if (f != e) {
            d.contentChange = 1;
            baidu.G("lbSaveTip" + b).style.display = ""
        } else {
            d.contentChange = 0;
            baidu.G("lbSaveTip" + b).style.display = "none"
        }
    };
    temp.LBtimer = setInterval(a, 200)
}
function delLbInfoUdT(b, a) {
    var d = getInputValue(b, "lb", "content");
    var c = _sign.mapSign.remarkInfo.list[a];
    c._content = d;
    clearInterval(temp.LBtimer)
}
function ApiKeyFocus(a) {
    baidu.G("APIKEYMessage").style.display = "none";
    baidu.G("APIKEYMessage").innerHTML = "请输入百度地图API密钥"
}
function gotoBestMap(f, d) {
    var c = userConfig.map;
    var e, b;
    if (f == "pl") {
        e = _sign.mapSign.polylineInfo.list[d];
        b = e.polyobj.getPoints()
    } else {
        if (f == "lb") {
            e = _sign.mapSign.remarkInfo.list[d];
            var h = e.point.split("|");
            var a = new BMap.Point(h[0], h[1]);
            b = [a]
        }
    }
    var g = c.level - map.getViewport(b).zoom;
    map.setViewport(b, {
        zoomFactor: g
    })
}
function getSignCode(c) {
    var e = userConfig.map;
    var m = userConfig.event;
    var n = userConfig.control;
    var l = '<style type="text/css">\n    html,body{margin:0;padding:0;}\n    .iw_poi_title {color:#CC5522;font-size:14px;font-weight:bold;overflow:hidden;padding-right:13px;white-space:nowrap}\n    .iw_poi_content {font:12px arial,sans-serif;overflow:visible;padding-top:4px;white-space:-moz-pre-wrap;word-wrap:break-word}\n</style>\n';
    var q = _ctrl_ove = _ctrl_sca = "";
    if (!!n.nav.self) {
        q = "//向地图中添加缩放控件\n	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_" + n.nav.place + ",type:BMAP_NAVIGATION_CONTROL_" + n.nav.style + "});\n	map.addControl(ctrl_nav);\n"
    }
    if (!!n.ove.self) {
        _ctrl_ove = "//向地图中添加缩略图控件\n	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_" + n.ove.place + ",isOpen:" + n.ove.style + "});\n	map.addControl(ctrl_ove);\n"
    }
    if (!!n.sca.self) {
        var p = "";
        if (n.sca.style == "IMPERIAL") {
            p = "ctrl_sca.setUnit(BMAP_UNIT_IMPERIAL)\n"
        }
        _ctrl_sca = "//向地图中添加比例尺控件\n	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_" + n.sca.place + "});\n	map.addControl(ctrl_sca);\n    " + p
    }
    var k = _event_scr = _event_dou = _event_key = "";
    if (!!m.dra) {
        k = "map.enableDragging();//启用地图拖拽事件，默认启用(可不写)\n"
    } else {
        k = "map.disableDragging();//禁用地图拖拽事件\n"
    }
    if (!!m.scr) {
        _event_scr = "map.enableScrollWheelZoom();//启用地图滚轮放大缩小\n"
    } else {
        _event_scr = "map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)\n"
    }
    if (!!m.dou) {
        _event_dou = "map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)\n"
    } else {
        _event_dou = "map.disableDoubleClickZoom();//禁用鼠标双击放大\n"
    }
    if (!!m.key) {
        _event_key = "map.enableKeyboard();//启用键盘上下左右键移动地图\n"
    } else {
        _event_key = "map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)\n"
    }
    var t = _sign_point = _sign_line = _sign_text = "";
    var s = _sign.mapSign;
    if (!_sign.isNull(s.pointInfo.list)) {
        var h = [];
        for (var o in s.pointInfo.list) {
            var r = s.pointInfo.list[o];
            var b = _gl.config.cur[r.cur];
            h.push('{title:"' + r.title + '",content:"' + r.content + '",point:"' + r.point + '",isOpen:' + r.show + ",icon:{w:" + b.w + ",h:" + b.h + ",l:" + b.l + ",t:" + b.t + ",x:" + b.x + ",lb:" + b.lb + "}}\n		 ")
        }
        _sign_point = "    //标注点数组\n    var markerArr = [" + h + '];\n    //创建marker\n    function addMarker(){\n        for(var i=0;i<markerArr.length;i++){\n            var json = markerArr[i];\n            var p0 = json.point.split("|")[0];\n            var p1 = json.point.split("|")[1];\n            var point = new BMap.Point(p0,p1);\n			var iconImg = createIcon(json.icon);\n            var marker = new BMap.Marker(point,{icon:iconImg});\n			var iw = createInfoWindow(i);\n			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});\n			marker.setLabel(label);\n            map.addOverlay(marker);\n            label.setStyle({\n                        borderColor:"#808080",\n                        color:"#333",\n                        cursor:"pointer"\n            });\n			\n			(function(){\n				var index = i;\n				var _iw = createInfoWindow(i);\n				var _marker = marker;\n				_marker.addEventListener("click",function(){\n				    this.openInfoWindow(_iw);\n			    });\n			    _iw.addEventListener("open",function(){\n				    _marker.getLabel().hide();\n			    })\n			    _iw.addEventListener("close",function(){\n				    _marker.getLabel().show();\n			    })\n				label.addEventListener("click",function(){\n				    _marker.openInfoWindow(_iw);\n			    })\n				if(!!json.isOpen){\n					label.hide();\n					_marker.openInfoWindow(_iw);\n				}\n			})()\n        }\n    }\n    //创建InfoWindow\n    function createInfoWindow(i){\n        var json = markerArr[i];\n        var iw = new BMap.InfoWindow("<b class=\'iw_poi_title\' title=\'" + json.title + "\'>" + json.title + "</b><div class=\'iw_poi_content\'>"+json.content+"</div>");\n        return iw;\n    }\n    //创建一个Icon\n    function createIcon(json){\n        var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})\n        return icon;\n    }\n';
        t += "        addMarker();//向地图中添加marker\n"
    }
    if (!_sign.isNull(s.polylineInfo.list)) {
        var g = [];
        for (var o in s.polylineInfo.list) {
            var r = s.polylineInfo.list[o];
            g.push('{style:"' + r.style + '",weight:' + r.weight + ',color:"' + r.color + '",opacity:' + r.opacity + ",points:[" + r.arr + "]}\n		 ")
        }
        _sign_line = "//标注线数组\n    var plPoints = [" + g + '];\n    //向地图中添加线函数\n    function addPolyline(){\n		for(var i=0;i<plPoints.length;i++){\n			var json = plPoints[i];\n			var points = [];\n			for(var j=0;j<json.points.length;j++){\n				var p1 = json.points[j].split("|")[0];\n				var p2 = json.points[j].split("|")[1];\n				points.push(new BMap.Point(p1,p2));\n			}\n			var line = new BMap.Polyline(points,{strokeStyle:json.style,strokeWeight:json.weight,strokeColor:json.color,strokeOpacity:json.opacity});\n			map.addOverlay(line);\n		}\n	}\n';
        t += "        addPolyline();//向地图中添加线\n"
    }
    if (!_sign.isNull(s.remarkInfo.list)) {
        var j = [];
        for (var o in s.remarkInfo.list) {
            var r = s.remarkInfo.list[o];
            j.push('{point:"' + r.point + '",content:"' + r.content + '"}\n		 ')
        }
        _sign_text = "//文字标注数组\n    var lbPoints = [" + j + '];\n    //向地图中添加文字标注函数\n    function addRemark(){\n        for(var i=0;i<lbPoints.length;i++){\n            var json = lbPoints[i];\n            var p1 = json.point.split("|")[0];\n            var p2 = json.point.split("|")[1];\n            var label = new BMap.Label("<div style=\'padding:2px;\'>"+json.content+"</div>",{point:new BMap.Point(p1,p2),offset:new BMap.Size(3,-6)});\n            map.addOverlay(label);\n            label.setStyle({borderColor:"#999"});\n        }\n    }\n';
        t += "        addRemark();//向地图中添加文字标注\n"
    }
    var a = "initMap();//创建和初始化地图\n";
    var f = e.key;
    if (c && c == "preview") {
        f = mapConfig.map.key
    }
    var d = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />\n<meta name="keywords" content="百度地图,百度地图API，百度地图自定义工具，百度地图所见即所得工具" />\n<meta name="description" content="百度地图API自定义地图，帮助用户在可视化操作下生成百度地图" />\n<title>百度地图API自定义地图</title>\n<!--引用百度地图API-->\n' + l + '<script type="text/javascript" src="http://api.map.baidu.com/api?key=' + f + '&v=1.1&services=true"><\/script>\n</head>\n\n<body>\n  <!--百度地图容器-->\n  <div style="width:' + e.width + "px;height:" + e.height + 'px;border:#ccc solid 1px;" id="dituContent"></div>\n</body>\n<script type="text/javascript">\n    //创建和初始化地图函数：\n    function initMap(){\n        createMap();//创建地图\n        setMapEvent();//设置地图事件\n        addMapControl();//向地图添加控件\n' + t + '    }\n    \n    //创建地图函数：\n    function createMap(){\n        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图\n        var point = new BMap.Point(' + e.center.x + "," + e.center.y + ");//定义一个中心点坐标\n        map.centerAndZoom(point," + e.level + ");//设定地图的中心点和坐标并将地图显示在地图容器中\n        window.map = map;//将map变量存储在全局\n    }\n    \n    //地图事件设置函数：\n    function setMapEvent(){\n        " + k + "        " + _event_scr + "        " + _event_dou + "        " + _event_key + "    }\n    \n    //地图控件添加函数：\n    function addMapControl(){\n        " + q + "        " + _ctrl_ove + "        " + _ctrl_sca + "}\n    \n" + _sign_point + "" + _sign_line + "" + _sign_text + "    \n    " + a + "<\/script>\n</html>";
    return d
}
function showSignCode() {
    var a = userConfig.map;
    var b = getSignCode();
    baidu.G("bareasign").value = b;
    var c = getScrollTop();
    if (!!c) {
        baidu.G("Layer1").style.top = c + "px"
    }
    baidu.G("Layer1").style.display = "";
    var d = getAbsPoint(baidu.G("copy_code"));
    M.fe.copy({
        copyBtnId: "copy_code",
        copytextId: "bareasign",
        copyTag: "value",
        callback: function (f) {
            var e = baidu.dom._g("su_sign");
            e.style.display = "inline";
            setTimeout(function () {
                e.style.display = "none"
            }, 1000)
        }
    });
    console.log(1);
    baidu.dom.getParent(baidu.dom._g("ZeroClipboardMovie_1")).style.top = d.y + "px";
    baidu.dom.getParent(baidu.dom._g("ZeroClipboardMovie_1")).style.left = d.x + "px";
    baidu.dom.getParent(baidu.dom._g("ZeroClipboardMovie_1")).style.zIndex = 30000
}
function closeSignCodeDom() {
    baidu.G("signCodeCon").style.display = "none"
}
function signPreview() {
    var a = userConfig.map;
    var b = getSignCode("preview");
    var c = window.open("", "_blank", "");
    c.document.open("text/html", "replace");
    c.document.write(b);
    if (document.all) {
        c.document.execCommand("Refresh")
    }
    c.document.close()
}
if (document.all) {
    Fe.on(window, "load", function () {
        var c = mapConfig.control;
        var d = [{
            value: c.nav.place,
            cl_type: "nav"
        }, {
            value: c.ove.place,
            cl_type: "ove"
        }, {
            value: c.sca.place,
            cl_type: "sca"
        }];
        var a = [{
            value: c.nav.style,
            cl_type: "nav"
        }, {
            value: c.sca.style,
            cl_type: "sca"
        }];
        for (var b = 0; b < d.length; b++) {
            changeCtrlPlace(d[b])
        }
        for (var b = 0; b < a.length; b++) {
            changeNavStyle(a[b])
        }
    })
}
function CreateFlash(c, a, b, d, f) {
    var e = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + b + '" height="' + d + '" id="' + c + '" align="middle">';
    e += '<param name="allowScriptAccess" value="always">';
    e += '<param name="quality" value="high">';
    e += '<param name="movie" value="' + a + '">';
    e += '<param name="flashvars" value="' + f + '">';
    e += '<embed src="' + a + '" flashvars="' + f + '" quality="high" width="' + b + '" height="' + d + '" name="' + c + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">';
    e += "</object>";
    return e
}
if (typeof (HTMLElement) != "undefined" && !window.opera && !HTMLElement.prototype.insertAdjacentHTML) {
    HTMLElement.prototype.insertAdjacentHTML = function (a, b) {
        var c = this.ownerDocument.createRange();
        c.setStartBefore(this);
        c = c.createContextualFragment(b);
        switch (a) {
            case "beforeBegin":
                this.parentNode.insertBefore(c, this);
                break;
            case "afterBegin":
                this.insertBefore(c, this.firstChild);
                break;
            case "beforeEnd":
                this.appendChild(c);
                break;
            case "afterEnd":
                if (!this.nextSibling) {
                    this.parentNode.appendChild(c)
                } else {
                    this.parentNode.insertBefore(c, this.nextSibling)
                }
                break
        }
    }
}
function beforeEndHTML(b, a) {
    b.insertAdjacentHTML("beforeEnd", a);
    return b.lastChild
}
function setFlashClipContentsign() {
    var a = baidu.G("bareasign").value;
    if (baidu.G("su_sign")) {
        baidu.G("su_sign").style.display = "inline"
    }
    setTimeout(function () {
        if (baidu.G("su_sign")) {
            baidu.G("su_sign").style.display = "none"
        }
    }, 1000);
    return a
}
var _bapi = {};
_bapi.init = function (c, f, a) {
    var g = baidu.G(c);
    var e = c.split("_")[1];
    var b = baidu.G("barea" + e);
    if (document.all) {
        var h;
        if (f == 40) {
            h = beforeEndHTML(g, '<input type="button" class="cen copy" style="border:1px solid #e3f2ff;cursor:pointer;line-height:' + a + 'px" value="复制"/>')
        } else {
            h = beforeEndHTML(g, '<div class="bder_color t10" style="width:98px;height:34px;"><span id="copy_code" class="bder_color cen bg_h2 bold font_color font14" style="display:block;cursor:pointer;width:94px;height:30px;margin:1px;line-height:30px;vertical-align:middle;" class="t30">复制代码</span></div>')
        }
    } else {
        h = beforeEndHTML(g, '<div class="bder_color t10" style="width:98px;height:34px;"><span id="copy_code" class="bder_color cen bg_h2 bold font_color font14" style="display:block;cursor:pointer;width:94px;height:30px;margin:1px;line-height:30px;vertical-align:middle;" class="t30">复制代码</span></div>')
    }
}
    ;
function getAbsPoint(b) {
    var a = b.offsetLeft;
    var c = b.offsetTop;
    while (b = b.offsetParent) {
        a += b.offsetLeft;
        c += b.offsetTop
    }
    return {
        x: a,
        y: c
    }
}
;