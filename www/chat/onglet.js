function creatonglet(numires) {

    if ((resID[numires] == mynickID) && (mystat < 6))
        errora(4000, 300, 150, "vous ne pouvez pas cliquer sur vous meme", 160);
    else {
        solicited = true;
        creatab(resnom[numires], resage[numires], rescity[numires], ressex[numires], resID[numires], resok[numires], resstat[numires]);
    }
}

function creatab(numius, agius, townius, sexius, nickIDf, verok, nickstat) {
    var alreadyexist = false;
    var tabexistnum = 0;
    var namoki = numius;
    if ((!solicited) || ((sexius % 5) != 1) || (!blocamec) || (myver > 0)) //if(((sexius%5)!=2)||(myver>-4)||(!solicited))  // a remplacer par 4 le -4
    {
        for (i = 0; i < currentab; i++) {
            if (nickIDf == tabnickID[i]) {
                alreadyexist = true;
                tabexistnum = i;
                break;
            }
        }
        if (alreadyexist)
            cliconglet(tabexistnum);
        else {
            if (townius < 0)
                alert("AIE NEGATIF");

            tabcity[currentab] = 100000 + townius;
            /*
	if(townius>9999)
tabcity[currentab]=""+townius;
else if(townius>999)
tabcity[currentab]="0"+townius;
else if(townius>99)
tabcity[currentab]="00"+townius;
else if(townius>9)
tabcity[currentab]="000"+townius;
else if(townius>-1)
tabcity[currentab]="0000"+townius;
*/

            tabtown[currentab] = villa(townius % 50000);
            tablog[currentab] = 0;
            if (townius > 49999)
                tablog[currentab] = 1;

            tabage[currentab] = agius;
            tabsex[currentab] = sexius;
            tabnickID[currentab] = nickIDf;
            taboqp[currentab] = 0;
            tabok[currentab] = verok;
            tabstat[currentab] = nickstat;
            tabdeja[currentab] = 0;

            if (agius > 99) {
                tabcoul[currentab] = colotab[3];
                mysalind = currentab;

            } else {
                var coy = "505064";
                if (agius < 98) {
                    tabcoul[currentab] = colotab[1];
                    if (agius < 0) {
                        if (agius == -55) {
                            Array.prototype.push.apply(doc, coul3);
                            applye(doc);
                            coy = "cccccc";
                        } else if (agius == -66)
                            coy = "acccb9";
                        else
                            coy = "aaaaaa";

                    } else
                        coy = "b5caee";
                }
                tabcoul[currentab] = coy;
            }

            tabname[currentab] = namoki;
            tabwidth[currentab] = namoki.length * 8 + 8;
            if (currentab == 0) {
                tabwidth[currentab] = 82;
                tabyoffset[currentab] = cadry - 24;
            }
            if (currentab == 0) {
                tabstart[currentab] = 10;
                tabyoffset[currentab] = cadry - 24;
            } else {
                var resuly = tabstart[currentab - 1] + tabwidth[currentab - 1] - 1;
                if (resuly + tabwidth[currentab] < largos - 9) {

                    tabstart[currentab] = resuly;
                    tabyoffset[currentab] = tabyoffset[currentab - 1];
                } else {
                    tabstart[currentab] = 0;
                    tabyoffset[currentab] = tabyoffset[currentab - 1] - 24;
                }
            }

            if (agius > 99) {
                var pls = "";
                hista = ["", "", "", "", ""];
                if (mypremiumtime < (180 * 86400))
                    pls = pluso;
                tabmessage[currentab] = "<br><br><br>" + pls + "<br>";

            } else {
                if (agius > -66)
                    tabmessage[currentab] = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
                //else
                //tabmessage[currentab]="<IFRAME SRC='"+base+"warning/index.html' name='boardz' id='boardz' FRAMEBORDER=0 style='position:absolute;width:"+(widx-60)+";height:"+(widy-2)+";top:0;left:0;z-index:0;'></IFRAME>";
            }

            criro = true;
            focuso();

            showongulus(currentab);
            currentab += 1;

            arrangus(0);

            if (solicited) {
                cliconglet(currentab - 1);
            }

        }
        solicited = false;

    } else {
        document.getElementById("babar").innerHTML = "vous devez etre authentifié pour parler ? cette personne";
        setTimeout("autbar(4)", 1500);
    }
}

function retreci(xbx) {

    var kp2 = widx - 21;
    if (xbx == 1) {

        kp2 = widx - 254;
    }

    document.getElementById("textum").style.width = kp2 + "px";

}

function hausalon() {
    var sqw = 300;
    var kp1 = 268;
    var scr1 = cadrx + widx - 80;
    if (exlist == 1) {
        sqw = widy - 40;

        kp1 = widy - 72;
        dleft("cachslide", cadrx + widx - 251);

        scr1 -= 230;
    } else
        dleft("cachslide", cadrx + widx - 18);

    dleft("scrall", scr1);
    listoh = sqw;

    document.getElementById("closus").style.height = sqw + "px";
    document.getElementById("salonik").style.height = kp1 + "px";

}

function expandinfo() {

    if (decaclose == 0) {

        decaclose = 42;
        if (tablet)
            document.getElementById("closus").style.height = "300px";
        else {

            retreci(1);

            exlist = 1;
            sauve(0);
        }

    } else {
        decaclose = 0;

        if (tablet)
            document.getElementById("closus").style.height = "30px";
        else {

            retreci(0);
            exlist = 0;
            sauve(0);
        }
        if (tabage[ongleto] < 99) {
            document.getElementById("closus").style.height = "156px";
        }

    }
    if (!tablet)
        hausalon();

}

function showongulus(numaz) {

    var larguk = tabwidth[numaz] - 16;
    var tempik = tabstart[numaz];
    var tempuk = 8 + larguk;

    if (currentab == maxonglus) {
        var stockos = "";

        var munikid = "ongdiv" + numaz;

        tabdiva[numaz] = munikid;

        numiko = "ongun" + numaz;
        tabnom[numaz] = numiko;

        stockos += divo(munikid, y, larguk + 16, y, y, tabcoul[numaz], "pointer-events: all;overflow:hidden;border-radius:8px;text-align:center;border-style:solid;padding-top:4px;border-width:1px;border-color:000000;' class='fixedsy' " + start1 + "=sorc(" + numaz + ",event);", tabname[numaz]);

        document.getElementById("ongulus").innerHTML += stockos;
        maxonglus++;

    }

    var topus = tabyoffset[numaz];

    //document.getElementById(tabnom[numaz]).innerHTML=tabname[numaz];
    document.getElementById(tabdiva[numaz]).innerHTML = tabname[numaz];

    document.getElementById(tabdiva[numaz]).style.zIndex = 60 + Math.floor(topus / 24);
    //alert("shoxwongulu "+document.getElementById(tabdiva[numaz]).style.zIndex);

    document.getElementById(tabdiva[numaz]).style.width = tabwidth[numaz];

    dtop(tabdiva[numaz], topus);
    dleft(tabdiva[numaz], tempik);

    document.getElementById(tabdiva[numaz]).style.height = cadry + 11 - topus;

    document.getElementById(tabdiva[numaz]).style.visibility = "visible";

    sauvegarde = document.getElementById("ongulus").innerHTML;

}

function arrangus(i) {

    for (i = 0; i < currentab; i++) {

        if (i != 0) {
            var resuly = tabstart[i - 1] + tabwidth[i - 1] + 1;

            if (resuly + tabwidth[i] < (largos - 9 - decax)) {

                tabstart[i] = resuly;
                tabyoffset[i] = tabyoffset[i - 1];
            } else {

                tabstart[i] = 0;
                tabyoffset[i] = tabyoffset[i - 1] - 24;

            }
        } else
            tabyoffset[0] = cadry - 24;
        document.getElementById(tabdiva[i]).style.backgroundColor = tabcoul[i];
        document.getElementById(tabdiva[i]).style.width = tabwidth[i];
        tabdiva
        document.getElementById(tabdiva[i]).style.zIndex = 60 + Math.floor(tabyoffset[i] / 24);
        dleft(tabdiva[i], tabstart[i]);
        dtop(tabdiva[i], tabyoffset[i]);

        document.getElementById(tabdiva[i]).style.height = cadry + 11 - tabyoffset[i];

    }

}

(function(e, t, n, r, i) {
    var s = {}, o = function(t) {
        return e.Function("return " + t)()
    }, u = e.document, a, f = function(t, i) {
        var o = {
            exports: {}
        };
        s[t] = 1,
        n[t] = o.exports;
        if (!i)
            i = i || e[t];
        else if (typeof i == "function") {
            var u = l;
            r[t] && r[t].sandbox && typeof u == "function" && (u = a),
            i = i(u, o.exports, o) || o.exports
        }
        return i = i,
        n[t] = i
    }, l = function(e) {
        var t = n[e]
          , r = [e, t];
        return r && (e = r[0],
        t = r[1]),
        s[e] && t ? t : (typeof t == "string" && t.indexOf("(function(") === 0 && (t = o(t)),
        f(e, t))
    }, c = {
        exports: {}
    };
    for (var h in n)
        s[h] = 0;
    t(l, c.exports, c)
}
)(this, function(e, t, n) {
    window.XXH = e("xxhash")
}, {
    "./lib/uint32": function(e, t, n) {
        (function(e) {
            function t(e, n) {
                if (!(this instanceof t))
                    return new t(e,n);
                this._low = 0,
                this._high = 0,
                this.remainder = null;
                if (typeof n == "undefined")
                    return i.call(this, e);
                if (typeof e == "string")
                    return s.call(this, e, n);
                r.call(this, e, n)
            }
            function r(e, t) {
                return this._low = e | 0,
                this._high = t | 0,
                this
            }
            function i(e) {
                return this._low = e & 65535,
                this._high = e >>> 16,
                this
            }
            function s(e, t) {
                var n = parseInt(e, t || 10);
                return this._low = n & 65535,
                this._high = n >>> 16,
                this
            }
            var o = {
                36: t(Math.pow(36, 5)),
                16: t(Math.pow(16, 7)),
                10: t(Math.pow(10, 9)),
                2: t(Math.pow(2, 30))
            }
              , u = {
                36: t(36),
                16: t(16),
                10: t(10),
                2: t(2)
            };
            t.prototype.fromBits = r,
            t.prototype.fromNumber = i,
            t.prototype.fromString = s,
            t.prototype.toNumber = function() {
                return this._high << 16 | this._low
            }
            ,
            t.prototype.toString = function(e) {
                e = e || 10;
                var n = u[e] || new t(e);
                if (!this.gt(n))
                    return this.toNumber().toString(e);
                var r = this.clone()
                  , i = new Array(32);
                for (var s = 31; s >= 0; s--) {
                    r.div(n),
                    i[s] = r.remainder.toNumber().toString(e);
                    if (!r.gt(n))
                        break
                }
                return i[s - 1] = r.toNumber().toString(e),
                i.join("")
            }
            ,
            t.prototype.add = function(e) {
                var t = this._low + e._low
                  , n = t >>> 16;
                return n += this._high + e._high,
                this._low = t & 65535,
                this._high = n & 65535,
                this
            }
            ,
            t.prototype.subtract = function(e) {
                return this.add(e.clone().negate())
            }
            ,
            t.prototype.multiply = function(e) {
                var t = this._high, n = this._low, r = e._high, i = e._low, s, o;
                return o = n * i,
                s = o >>> 16,
                s += t * i,
                s &= 65535,
                s += n * r,
                this._low = o & 65535,
                this._high = s & 65535,
                this
            }
            ,
            t.prototype.div = function(e) {
                if (e._low == 0 && e._high == 0)
                    throw Error("division by zero");
                if (e._high == 0 && e._low == 1)
                    return this.remainder = new t(0),
                    this;
                if (e.gt(this))
                    return this.remainder = new t(0),
                    this._low = 0,
                    this._high = 0,
                    this;
                if (this.eq(e))
                    return this.remainder = new t(0),
                    this._low = 1,
                    this._high = 0,
                    this;
                var n = e.clone()
                  , r = -1;
                while (!this.lt(n))
                    n.shiftLeft(1, !0),
                    r++;
                this.remainder = this.clone(),
                this._low = 0,
                this._high = 0;
                for (; r >= 0; r--)
                    n.shiftRight(1),
                    this.remainder.lt(n) || (this.remainder.subtract(n),
                    r >= 16 ? this._high |= 1 << r - 16 : this._low |= 1 << r);
                return this
            }
            ,
            t.prototype.negate = t.prototype.not = function() {
                var e = (~this._low & 65535) + 1;
                return this._low = e & 65535,
                this._high = ~this._high + (e >>> 16) & 65535,
                this
            }
            ,
            t.prototype.equals = t.prototype.eq = function(e) {
                return this._low == e._low && this._high == e._high
            }
            ,
            t.prototype.greaterThan = t.prototype.gt = function(e) {
                return this._high > e._high ? !0 : this._high < e._high ? !1 : this._low > e._low
            }
            ,
            t.prototype.lessThan = t.prototype.lt = function(e) {
                return this._high < e._high ? !0 : this._high > e._high ? !1 : this._low < e._low
            }
            ,
            t.prototype.or = function(e) {
                return this._low |= e._low,
                this._high |= e._high,
                this
            }
            ,
            t.prototype.and = function(e) {
                return this._low &= e._low,
                this._high &= e._high,
                this
            }
            ,
            t.prototype.xor = function(e) {
                return this._low ^= e._low,
                this._high ^= e._high,
                this
            }
            ,
            t.prototype.shiftRight = t.prototype.shiftr = function(e) {
                return e > 16 ? (this._low = this._high >> e - 16,
                this._high = 0) : e == 16 ? (this._low = this._high,
                this._high = 0) : (this._low = this._low >> e | this._high << 16 - e & 65535,
                this._high >>= e),
                this
            }
            ,
            t.prototype.shiftLeft = t.prototype.shiftl = function(e, t) {
                return e > 16 ? (this._high = this._low << e - 16,
                this._low = 0,
                t || (this._high &= 65535)) : e == 16 ? (this._high = this._low,
                this._low = 0) : (this._high = this._high << e | this._low >> 16 - e,
                this._low = this._low << e & 65535,
                t || (this._high &= 65535)),
                this
            }
            ,
            t.prototype.rotateLeft = t.prototype.rotl = function(e) {
                var t = this._high << 16 | this._low;
                return t = t << e | t >>> 32 - e,
                this._low = t & 65535,
                this._high = t >>> 16,
                this
            }
            ,
            t.prototype.rotateRight = t.prototype.rotr = function(e) {
                var t = this._high << 16 | this._low;
                return t = t >>> e | t << 32 - e,
                this._low = t & 65535,
                this._high = t >>> 16,
                this
            }
            ,
            t.prototype.clone = function() {
                return new t(this._low,this._high)
            }
            ,
            typeof define != "undefined" && define.amd ? define([], function() {
                return t
            }) : typeof n != "undefined" && n.exports ? n.exports = t : e.UINT32 = t
        }
        )(this)
    },
    cuint: function(e, t, n) {
        t.UINT32 = e("./lib/uint32"),
        t.UINT64 = e("./lib/uint64")
    },
    xxhash: function(e, t, n) {
        (function(t) {
            function r() {
                if (arguments.length == 2)
                    return (new r(arguments[1])).update(arguments[0]).digest();
                if (!(this instanceof r))
                    return new r(arguments[0]);
                i.call(this, arguments[0])
            }
            function i(e) {
                return this.seed = e instanceof s ? e.clone() : s(e),
                this.v1 = this.seed.clone().add(c),
                this.v2 = this.seed.clone().add(u),
                this.v3 = this.seed.clone(),
                this.v4 = this.seed.clone().subtract(o),
                this.total_len = 0,
                this.memsize = 0,
                this.memory = null,
                this
            }
            var s = e("cuint").UINT32;
            s.prototype.xxh_update = function(e, t) {
                var n = u._low, r = u._high, i, s;
                s = e * n,
                i = s >>> 16,
                i += t * n,
                i &= 65535,
                i += e * r;
                var a = this._low + (s & 65535)
                  , f = a >>> 16;
                f += this._high + (i & 65535);
                var l = f << 16 | a & 65535;
                l = l << 13 | l >>> 19,
                a = l & 65535,
                f = l >>> 16,
                n = o._low,
                r = o._high,
                s = a * n,
                i = s >>> 16,
                i += f * n,
                i &= 65535,
                i += a * r,
                this._low = s & 65535,
                this._high = i & 65535
            }
            ;
            var o = s("2654435761")
              , u = s("2246822519")
              , a = s("3266489917")
              , f = s("668265263")
              , l = s("374761393")
              , c = o.clone().add(u);
            r.prototype.init = i,
            r.prototype.update = function(e) {
                var t = typeof e == "string", n;
                e instanceof ArrayBuffer && (n = !0,
                e = new Uint8Array(e));
                var r = 0
                  , i = e.length
                  , s = r + i;
                if (i == 0)
                    return this;
                this.total_len += i,
                this.memsize == 0 && (t ? this.memory = "" : n ? this.memory = new Uint8Array(16) : this.memory = new Buffer(16));
                if (this.memsize + i < 16)
                    return t ? this.memory += e : n ? this.memory.set(e.subarray(0, i), this.memsize) : e.copy(this.memory, this.memsize, 0, i),
                    this.memsize += i,
                    this;
                if (this.memsize > 0) {
                    t ? this.memory += e.slice(0, 16 - this.memsize) : n ? this.memory.set(e.subarray(0, 16 - this.memsize), this.memsize) : e.copy(this.memory, this.memsize, 0, 16 - this.memsize);
                    var o = 0;
                    t ? (this.v1.xxh_update(this.memory.charCodeAt(o + 1) << 8 | this.memory.charCodeAt(o), this.memory.charCodeAt(o + 3) << 8 | this.memory.charCodeAt(o + 2)),
                    o += 4,
                    this.v2.xxh_update(this.memory.charCodeAt(o + 1) << 8 | this.memory.charCodeAt(o), this.memory.charCodeAt(o + 3) << 8 | this.memory.charCodeAt(o + 2)),
                    o += 4,
                    this.v3.xxh_update(this.memory.charCodeAt(o + 1) << 8 | this.memory.charCodeAt(o), this.memory.charCodeAt(o + 3) << 8 | this.memory.charCodeAt(o + 2)),
                    o += 4,
                    this.v4.xxh_update(this.memory.charCodeAt(o + 1) << 8 | this.memory.charCodeAt(o), this.memory.charCodeAt(o + 3) << 8 | this.memory.charCodeAt(o + 2))) : (this.v1.xxh_update(this.memory[o + 1] << 8 | this.memory[o], this.memory[o + 3] << 8 | this.memory[o + 2]),
                    o += 4,
                    this.v2.xxh_update(this.memory[o + 1] << 8 | this.memory[o], this.memory[o + 3] << 8 | this.memory[o + 2]),
                    o += 4,
                    this.v3.xxh_update(this.memory[o + 1] << 8 | this.memory[o], this.memory[o + 3] << 8 | this.memory[o + 2]),
                    o += 4,
                    this.v4.xxh_update(this.memory[o + 1] << 8 | this.memory[o], this.memory[o + 3] << 8 | this.memory[o + 2])),
                    r += 16 - this.memsize,
                    this.memsize = 0,
                    t && (this.memory = "")
                }
                if (r <= s - 16) {
                    var u = s - 16;
                    do
                        t ? (this.v1.xxh_update(e.charCodeAt(r + 1) << 8 | e.charCodeAt(r), e.charCodeAt(r + 3) << 8 | e.charCodeAt(r + 2)),
                        r += 4,
                        this.v2.xxh_update(e.charCodeAt(r + 1) << 8 | e.charCodeAt(r), e.charCodeAt(r + 3) << 8 | e.charCodeAt(r + 2)),
                        r += 4,
                        this.v3.xxh_update(e.charCodeAt(r + 1) << 8 | e.charCodeAt(r), e.charCodeAt(r + 3) << 8 | e.charCodeAt(r + 2)),
                        r += 4,
                        this.v4.xxh_update(e.charCodeAt(r + 1) << 8 | e.charCodeAt(r), e.charCodeAt(r + 3) << 8 | e.charCodeAt(r + 2))) : (this.v1.xxh_update(e[r + 1] << 8 | e[r], e[r + 3] << 8 | e[r + 2]),
                        r += 4,
                        this.v2.xxh_update(e[r + 1] << 8 | e[r], e[r + 3] << 8 | e[r + 2]),
                        r += 4,
                        this.v3.xxh_update(e[r + 1] << 8 | e[r], e[r + 3] << 8 | e[r + 2]),
                        r += 4,
                        this.v4.xxh_update(e[r + 1] << 8 | e[r], e[r + 3] << 8 | e[r + 2])),
                        r += 4;
                    while (r <= u)
                }
                return r < s && (t ? this.memory += e.slice(r) : n ? this.memory.set(e.subarray(r, s), this.memsize) : e.copy(this.memory, this.memsize, r, s),
                this.memsize = s - r),
                this
            }
            ,
            r.prototype.digest = function() {
                var e = this.memory, t = typeof e == "string", n = 0, r = this.memsize, i, c, h = new s;
                this.total_len >= 16 ? i = this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))) : i = this.seed.add(l),
                i.add(h.fromNumber(this.total_len));
                while (n <= r - 4)
                    t ? h.fromBits(e.charCodeAt(n + 1) << 8 | e.charCodeAt(n), e.charCodeAt(n + 3) << 8 | e.charCodeAt(n + 2)) : h.fromBits(e[n + 1] << 8 | e[n], e[n + 3] << 8 | e[n + 2]),
                    i.add(h.multiply(a)).rotl(17).multiply(f),
                    n += 4;
                while (n < r)
                    h.fromBits(t ? e.charCodeAt(n++) : e[n++], 0),
                    i.add(h.multiply(l)).rotl(11).multiply(o);
                return c = i.clone().shiftRight(15),
                i.xor(c).multiply(u),
                c = i.clone().shiftRight(13),
                i.xor(c).multiply(a),
                c = i.clone().shiftRight(16),
                i.xor(c),
                this.init(this.seed),
                i
            }
            ,
            typeof define != "undefined" && define.amd ? define([], function() {
                return r
            }) : typeof n != "undefined" && n.exports ? n.exports = r : t.XXH = r
        }
        )(this)
    }
}, {}, {})

var geta = {};
(function(global) {

    try {
        geta.canvas = document.createElement('canvas');
        dtx = geta.canvas.getContext('2d');
        dtx.canvas.width = 500;
        dtx.canvas.height = 500;
        //text
        var tcor = ["rgba(255,0,0,0.1)", "rgba(0,255,0,0.1)", "rgba(0,0,255,0.1)"];
        var tstr = ["Cwm fjordbank glyphs vext quiz", "Centillion", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"];
        var tfon = ["Baskerville Old Face", "Baskerville", "Bookman Old Style", "Garamond", "Georgia", "Century Schoolbook", "Palatino Linotype", "Palatino", "Times New Roman", "Times", "Cambria", "Constantia", "Bell MT", "Book Antiqua", "Bodoni MT", "Adobe Caslon Pro", "Chaparral Pro", "MinionPro", "Big Caslon", "Cochin", "Didot", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Hoefler Text", "Perpetua", "Bitstream Charter", "DejaVu Serif", "URW Bookman L", "Century Schoolbook L", "URW Palladio L", "FreeSerif", "Nimbus Roman No9 L", "Akzidenz Grotesk", "Avenir", "Bembo", "Bickham Script Pro", "Caslon", "Clarendon", "Franklin Gothic", "Frutiger", "Futura", "Gill Sans", "Helvetica", "Lucida Sans", "Lucida Grande", "Minion", "Myriad", "Optima", "Palatino", "Rockwell", "Sabon"];
        var squs = Math.ceil(Math.sqrt(tstr.length * tfon.length * tcor.length));
        var item = 0;
        for (color in tcor) {
            var cco = tcor[color];
            dtx.fillStyle = cco;
            for (font in tfon) {
                var crf = Math.round(dtx.canvas.height / squs * 1.5) + 'px ' + tfon[font] + '';
                dtx.font = crf;
                for (string in tstr) {
                    var currentString = tstr[string];
                    var x = Math.floor(item / squs) - Math.round(squs / 4);
                    var y = item % squs;
                    x = (x + 1) * (dtx.canvas.width / 2 / squs);
                    y = (y + 1) * (dtx.canvas.height / squs);
                    dtx.fillText(currentString, x, y);
                    item++;
                }
            }
        }
    } catch (rrrr) {}

}(this));

function cliconglet(tabnumber) {

    liteoff();
    disparu();
    ongleto = tabnumber;
    ymouse = 100;

    var o = tabnumber;
    if (contor > 700) {
        if (voxeus) {
            var qpp = "visible";
            if (tabage[ongleto] < 100)
                qpp = "hidden";

            document.getElementById("voxi").style.visibility = qpp;
        }

    }

    document.getElementById("micstro").style.zIndex = 0;

    document.getElementById("cocoa").value = "";
    decaclose = 0;

    var lmlm = "visible";
    if (tabcoul[ongleto].indexOf(colotab[5]) == -1)
        lmlm = "hidden";

    document.getElementById("ecrito").style.visibility = lmlm;

    var ukz = tabage[ongleto];

    if (!tablet) {
        if (ukz > 99)
            document.getElementById("cachslide").style.display = "inline";
        else
            document.getElementById("cachslide").style.display = "none";

    }
    if (ukz < 0) {
        //document.getElementById("degradon").style.visibility="hidden";
        document.getElementById("closus").style.display = "none";

        if (ukz == -55)
            resinit();
        else if (ukz == -66) {
            document.getElementById("cadrum").style.zIndex = 0;

            document.getElementById("onguselect").style.backgroundColor = "d3e4db";

            document.getElementById("degradus").style.background = "none #d3e4db";
            //document.getElementById("textum").style.backgroundColor="d3e4db";
            document.getElementById("textum").innerHTML = syst;

        } else if (ukz == -77) {
            document.getElementById("cadrum").style.zIndex = 0;

            document.getElementById("onguselect").style.backgroundColor = "C0C0C0";
            warno();
        }

    } else {
        //document.getElementById("minipub").style.visibility="hidden";
        document.getElementById("degradus").style.background = "none " + colotab[4];
        //document.getElementById("textum").style.backgroundColor="eeeeee";
        if (tabage[ongleto] < 100) {
            if (exlist == 1)
                retreci(0);

            dtop("ifranos", 3);
            dleft("ifranos", 185);

            document.getElementById(tabdiva[ongleto]).style.zIndex = 60 + Math.floor(tabyoffset[ongleto] / 24);

            if (taboqp[ongleto] > 0) {
                document.getElementById("nopvs").style.visibility = "visible";
                var usk = "";
                if (taboqp[ongleto] == 2)
                    usk = "No Mecs";
                else
                    usk = "No PV";
                document.getElementById("nopvs").innerHTML = usk;
            } else
                document.getElementById("nopvs").style.visibility = "hidden";

            if (tabcoul[ongleto].indexOf(colotab[2]) > -1)
                tabcoul[ongleto] = colotab[1];

            if (tabcoul[ongleto].indexOf("505064") < 0)
                document.getElementById("onguselect").style.backgroundColor = colotab[0];
            else
                document.getElementById("onguselect").style.backgroundColor = "505064";

            //if(document.getElementById("degradon").style.visibility.indexOf("hid")>-1)
            //document.getElementById("degradon").style.visibility="visible";
            document.getElementById("degradus").style.background = "linear-gradient(#9cb4df 180px, #" + degrafond + " 85%)";

            document.getElementById(tabdiva[ongleto]).style.zIndex = 60 + Math.floor(tabyoffset[ongleto] / 24);

            //document.getElementById("degradon").src="degrade.gif";

            document.getElementById("closus").style.height = "216px";

            document.getElementById("allsalon").style.visibility = "hidden";
            document.getElementById("saloncon").style.visibility = "hidden";

            document.getElementById("closus").style.backgroundColor = colotab[1];
            document.getElementById("cocoa").style.color = "#000";
            //document.getElementById("quest").style.visibility="visible";
            dtop("quest", 56);
            dleft("quest", 187);
            dleft("delpv", 162);

            document.getElementById("questi").style.zIndex = 0;

        } else {
            aqui = 999999;

            dtop("ifranos", 2);
            dleft("ifranos", 30);

            document.getElementById("micstro").style.zIndex = 85;
            document.getElementById("nopvs").style.visibility = "hidden";
            dtop("quest", 2);
            dleft("quest", 3);
            dleft("delpv", 190);

            document.getElementById("onguselect").style.backgroundColor = colotab[4];
            //document.getElementById("degradon").style.visibility="hidden";
            //document.getElementById("degradus").style.background="none";

            document.getElementById("closus").style.height = listoh;
            if (exlist == 1)
                retreci(1);
            document.getElementById("allsalon").style.visibility = "visible";
            document.getElementById("saloncon").style.visibility = "visible";

            document.getElementById("closus").style.backgroundColor = colotab[3];
            document.getElementById("cocoa").style.color = salcoul[mycoul];

        }

        if (tabsex[o] > 4) {
            document.getElementById("autrui").src = urlav + tabnickID[o];
            document.getElementById("autrui").style.visibility = "visible";
        } else
            document.getElementById("autrui").style.visibility = "hidden";

        document.getElementById("closus").style.display = "";

        var qmu = "hidden";
        if (tablog[o] > 0)
            qmu = "visible";
        document.getElementById("blogi").style.visibility = qmu;

        ecritab("", ongleto);

        //document.getElementById("searchad").style.zIndex=0;
        //document.getElementById("salox").style.zIndex=0;
        document.getElementById("cadrum").style.zIndex = 0;

        document.getElementById("closustext").innerHTML = tabtown[o];

        document.getElementById("closusage").innerHTML = tabage[o];

        document.getElementById("closuscoul").style.backgroundColor = coul[(tabsex[o] % 5)];

    }
    document.getElementById("onguselect1").style.visibility = "visible";

    document.getElementById("onguselect").innerHTML = tabname[o];

    dtop("onguselect1", -3 + tabyoffset[o]);
    dleft("onguselect1", tabstart[o] - 2 + decax);

    scrallo();

    document.getElementById("onguselect1").style.height = cadry + 4 - tabyoffset[o];
    document.getElementById("onguselect1").style.width = tabwidth[o] + 6;
    document.getElementById("onguselect").style.width = tabwidth[o] + 4;

    if (tablet) {
        if (ongleto == 0) {
            document.getElementById("viewup").style.zIndex = 0;
            document.getElementById("viewup3").style.zIndex = 0;
        } else {

            if (document.getElementById("viewup").width.indexOf("5") == -1)
                document.getElementById("viewup").style.zIndex = 110;
            if (document.getElementById("viewup3").width.indexOf("5") == -1)
                document.getElementById("viewup3").style.zIndex = 110;
        }
    }

}

function deletonglet(numiq) {
    if (mystat > 5)
        if (numiq < 2)
            numiq = 0;

    if (numiq > 0) {
        var oldnick = tabnickID[numiq];
        var ecarto = tabwidth[numiq];
        if (tabage[numiq] > 99) {
            mysalon = 0;
            mysalind = -1;

        }
        for (m = numiq + 1; m < currentab; m++) {

            if (tabage[m] > 99) {
                mysalind -= 1;
            }

            tabname[m - 1] = tabname[m];

            tabstart[m - 1] = tabstart[m] - ecarto + 1;

            tabwidth[m - 1] = tabwidth[m];

            tabcity[m - 1] = tabcity[m];
            tabtown[m - 1] = tabtown[m];
            tabage[m - 1] = tabage[m];
            tabsex[m - 1] = tabsex[m];
            tabnickID[m - 1] = tabnickID[m];
            tabcoul[m - 1] = tabcoul[m];
            taboqp[m - 1] = taboqp[m];
            tabok[m - 1] = tabok[m];
            tabstat[m - 1] = tabstat[m];
            tablog[m - 1] = tablog[m];
            tabdeja[m - 1] = tabdeja[m];

            tabmessage[m - 1] = tabmessage[m];

            document.getElementById(tabdiva[m - 1]).style.backgroundColor = document.getElementById(tabdiva[m]).style.backgroundColor;

            //document.getElementById(tabnom[m-1]).innerHTML=tabname[m-1];
            document.getElementById(tabdiva[m - 1]).innerHTML = tabname[m - 1];

        }

        arrangus(numiq);

        document.getElementById(tabdiva[currentab - 1]).style.visibility = "hidden";

        sauvegarde = document.getElementById("ongulus").innerHTML;

        currentab -= 1;

        if ((numiq == ongleto) || (mysalind < 0)) {
            if (numiq == currentab)
                cliconglet(numiq - 1);
            else
                cliconglet(numiq);
        } else {
            if (numiq < ongleto)
                ongleto--;
            cliconglet(ongleto);
        }

        try {
            for (var i = 0; i < localStorage.length; i++) {
                var keyoo = "" + localStorage.key(i);
                if (keyoo.indexOf(oldnick) > 0) {
                    localStorage.removeItem(localStorage.key(i));
                    break;
                }
            }
        } catch (mndik) {}

    }

}

function resinit() {
    //disparu();

    //if(contor>700)
    //modax(0);

    //if (currentab>0) 
    //liteoff();
    ongleto = 0;

    document.getElementById("questi").style.zIndex = 0;

    document.getElementById("closus").style.display = "none";
    /*
document.getElementById("recherchus").style.zIndex=31;
document.getElementById("recherchus").style.top=resy;
*/

    document.getElementById("textum").innerHTML = "";
    document.getElementById("searchy").innerHTML = rechum + resum;
    //document.getElementById("searchad").style.zIndex=24;

    document.getElementById("salox").innerHTML = resux;
    //document.getElementById("salox").style.zIndex=24;

    document.getElementById("cadrum").style.zIndex = 10;

    document.getElementById("degradus").style.background = "none #dddddd";
    //document.getElementById("textum").style.backgroundColor="dddddd";
    document.getElementById("onguselect").style.backgroundColor = "dddddd";

    //document.getElementById("minipub").style.visibility="visible";

}

function applye(rgr) {
    for (i = 0; i < 10; i++) {
        var fjz = rgr[i + 20];
        rgr[i + 20] = rgr[i + 30];
        rgr[i + 30] = fjz;
    }
}

function yabon() {

    if (mysex < 5) {
        mysex += 5;
        mygender = "" + mysex;
        //agir("60");		
    }

}

function frais(mrf) {

    mytry++;
    if (mrf == "OK") //(s0.indexOf('OK')>-1)
    {

        //location="#";
        yabon();
        document.getElementById("ifravatar").src = avaref + myavatar;
        profilum();
    }

}

function yapabon() {}

function nofocus() {
    nofox = false;
}

function focuso() {
    if (!focuz)
        raz();

    if (contor < 40)
        if (nofox) {
            mesnum = 0;

            document.getElementById("cocoa").focus();
            document.getElementById("cocoa").focus();
        } else
            nofox = true;
}

function adblock() {//if (tester.indexOf("tchater")>-1)
//disp(10000,90,90,"probleme AdBlock plus :<br>veuillez désinstaller ce module de votre navigateur<br>ou d'autres modules bloquants <br> pour ne pas etre deconnecté de coco<br><br>allez dans les parametres<br>",340,150,"eecccc",true,false);

}

function exige(dgd) {
    ecritab("<span style='" + c12 + "'> " + dgd + "<br>choisissez de vous authentifier par <a href='#" + timz1 + "' onclick=telium() " + manu + ">SMS</a><br>ou prenez un pack <a href='#" + timz1 + "' onclick=premiolo() " + manu + ">Premium</a><br></span>", ongleto);
}
