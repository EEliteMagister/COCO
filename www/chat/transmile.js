var tabsmil = new Array("rigole","triste","clin","eclat","etonne","confus","rougi","dubitatif","fatigue","perplexe","langue","coeur","amour","cry","classe","rose","enerve","up","down","kiss","angry","ange","diable","cross","ill","na","oh","mal","emu","shit","fuck","noword","drool","aoh","diablo","siffle","songe","content","enbiais","circon","victoire","mouais","aa","clope","touche","baffe","sleep","annif","decu","mmh","quoi","argh","euh","ouf","oups","secret","brise","bisou","dubit2","eau","serein","complot","emu3","ohno","roublard","ouhi");
var tabms = new Array(":)",":(",";)",":d",":-o",":s",":$","*-)","-)","^o)",":p","(l)","(v)",":'(","(h)","(f)",":@","(y)","(n)","(k)","gr$","(a)","(6)","(yn)","+o(","na$","oh$","tr$","(e)","sh$","fu$","nw$","ba$","ao$","db$","si$","oo$","co$","bi$","cc$","ye$","mo$","aa$","ci$","uu$","ff$","zz$","gt$","ah$","mm$","?$","xx$","eu$","ouf$","oups$","ss$","(u)","ki$","ee$","yy$","se$","gg$","ww$","no$","bb$","hh$");
var oldia = "Sat, 01-Jan-2000 00:00:00 GMT";
var coulvo = ["57bb8a", "73b87e", "94bd77", "b0be6e", "d4c86a", "f5ce62", "e9b861", "ecac67", "e79a69", "e2886c", "dd776e", "", "", ""];
function transformix(sx, tyb, syx, stt) {
    if (transformix.arguments.length == 3)
        stt = 0;
    var numerox = 0;
    var shifto = 0;
    var s1 = sx;
    var s2 = "";
    var toolong = 0;
    unefoi = 0;
    s1 = s1.replace('https://', '');
    var mmj = s1.indexOf('www');
    if (stt > 5)
        toolong = -90;

    for (i = 0; i < s1.length; i++) {
        numerox = s1.charCodeAt(i);

        if (tyb != -23)
            toolong++;

        if ((numerox == 95) || (numerox == 32) || (tyb == 117)) {
            toolong = 0;
        }

        if (toolong < 27) {
            if (shifto == 0) {
                if (numerox != 42) {
                    if ((numerox < 43) || ((numerox > 58) && (numerox < 64)) || ((numerox > 90) && (numerox < 97)) || (numerox > 122)) {
                        if (numerox == 59) {
                            var resiz = ";";
                            try {
                                var numoz = parseInt(s1.substring(i + 1, i + 3), 10);
                                if ((numoz < tabsmil.length) && (numoz > -1)) {
                                    resiz = milor(numoz, syx);
                                    i = i + 2;
                                } else if (syx > 5) {
                                    if (numoz == 99) {
                                        if (unefoi == 0) {
                                            i = i + 2;
                                            resiz = "<img src=emot/fire.png >";
                                        }
                                        unefoi = 1;
                                    }
                                }
                            } catch (ty) {}
                            s2 += resiz;
                        } else
                            s2 += demele(numerox, tyb);
                    } else
                        s2 += s1.charAt(i);

                } else
                    shifto = 1;

            } else {
                s2 += shiftu(numerox);
                shifto = 0;
            }
        }
    }

    if ((tyb < 100) || (tyb > 1000)) {
        if (s2.indexOf("Premium") > -1)
            s2 = s2.replace("Premium", premio);
        if (s2.indexOf("-SMS-") > -1)
            s2 = s2.replace("-SMS-", "<a onclick=telium()  style='position:relative;color:#fff;background-color:#448;padding:3px;border-radius:3px;" + manu + "'>SMS</a><br>");
    }

    if (tyb != 117)
        s2 = transmiley(s2);

    if (stt > 5) {
        var eef = s2.indexOf("www.coco.gg/");
        if (eef > -1)
            mmj = eef;
        eef = s2.indexOf("www.zix.net/");
        if (eef > -1)
            mmj = eef;
    }

    if (mmj > -1) {
        if (stt < 6)
            s2 = s2.replace('www', 't');
        else {
            var nng = s2.indexOf(' ', mmj);
            if (nng == -1)
                nng = s2.length;
            var ksl = s2.substring(mmj, nng);

            if (stt == 9) {
                var jj4 = ksl.indexOf("/pub/");
                if (jj4 > 7) {
                    var tr9 = ksl.substring(jj4 + 21);
                    s1 = "!1" + tr9;
                    mmj = -333;
                }
                jj4 = ksl.indexOf("wawo");
                if (jj4 == -1)
                    jj4 = ksl.indexOf("iew");
                if (jj4 > 0) {
                    var tr9 = ksl.substring(jj4 + 10);
                    s1 = "!7" + tr9;
                    s2 = s1;

                    mmj = -333;

                }

            }
            if ((mmj > -1) && (mmj < 8))
                s2 = s2.substring(0, mmj) + "<a href='#' onclick=window.open('https://" + ksl + "','lien" + randum(100) + "','" + loxx + ",scrollbars=yes,resizable=yes,left=0,top=0\'); style='cursor:pointer'>" + ksl + "</a>" + s2.substring(nng);

            else if (mmj > 0)
                s2 = "oh-no";
        }
    }
    if (mmj < 0) {

        var hwo = s1.indexOf("!");
        if (hwo > -1) {

            var tr8 = s2.substring(hwo + 1, hwo + 2);
            var tr9 = s1.substring(hwo + 2);

            if (mmj == -333)
                mmj = "333";
            else
                mmj = "";

            var tr10 = tr9.indexOf("?");
            if (tr10 > -1) {
                var tr11 = tr10;
                tr10 = tr9.substring(tr11 + 1);
                tr9 = tr9.substring(0, tr11);
            }

            for (i = 0; i < tr9.length; i++) {
                numerox = tr9.charCodeAt(i);
                if ((numerox < 45) || ((numerox > 57) && (numerox < 65)) || ((numerox > 90) && (numerox < 95)) || (numerox > 122) || (numerox == 96))
                    tr8 = "FAUX";
            }
            //tr9=transformix(tr9,117);
            if (tr9.indexOf("*") == -1) {
                tt3 = tr9;
                if (tr8 == "1") {
                    //randopub=(randopub+1)%2;

                    var sqm = "" + randopub;

                    sqm = "0";

                    sqm = 2;
                    if ((tyb > 99) && (tyb < 999))
                        sqm = 1;

                    //if(mystat<9)
                    //sqm=2;

                    if (contor > 42) {
                        if (sqm == 1)
                            sqm = 5;
                        else
                            sqm = 6;
                    }
                    diraa = "pub";

                    var nbvot = 0;
                    var valvot1 = "1";
                    var vovo = "9999";
                    var vosi = 13;
                    var visx = "hidden";
                    var vvom = tr9.substring(2, 11);
                    if (tr10.length > 2) {
                        nbvot = parseInt(tr10.substring(0, 2)) - 10;
                        var valvot = parseInt(tr10.substring(2, 4));
                        valvot1 = parseInt((valvot + 5) / 10);

                        vovo = tr10.substring(0, 4);

                        if (nbvot < 89) {
                            visx = "visible";
                            vosi = 13 + parseInt(nbvot / 2);
                        } else {
                        }
                    }
                    var votima = "";
                    if ((sqm == 1) || (sqm == 5))
                        votima = "<div id=b" + vvom + " onclick=extovo(this.style.maxWidth," + vvom + "); style='position:relative;top:-5px;left:3px;background-color:#" + coulvo[valvot1] + ";padding:2px;display:inline-block;min-width:14px;text-align:center;border-radius:3px;max-width:" + vovo + ";font-size:" + vosi + "px;visibility:" + visx + ";'>" + valvot1 + "</div>";
                    if (!tablet)
                        s2 = "<img src=emot/photo" + mmj + ".gif " + hover1 + "=miniev('" + tr9 + "'," + delayo + "); " + out1 + "=miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;window.open('" + base + diraa + "/photo" + sqm + ".htm#" + huho + tr9 + "','photo" + randum(100) + "','" + loxx + ",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); " + manu + " >" + votima;
                    else {

                        //if(false)//if(!standalone)
                        //s2="<img src=emot/photo.gif "+hover1+"=top.miniev('"+tr9+"',"+delayo+"); "+out1+"=top.miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;imgus=window.open('"+base+diraa+"/photo"+sqm+".htm#"+huho+tr9+"','photo77','"+loxx+",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); "+manu+"><span id="+tr9.substring(2,11)+" ></span>"+votima;
                        //Else

                        if ((standalone) && (isIOS13))
                            s2 = "<img src=emot/photo.gif " + hover1 + "=miniev('" + tr9 + "'," + delayo + "); " + out1 + "=miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;window.open('" + base + diraa + "/photo15.htm#" + huho + tr9 + "','photo" + randum(100) + "','" + loxx + ",scrollbars=yes\'); >" + votima;
                        else
                            s2 = "<img src=emot/photo" + mmj + ".gif " + start1 + "=previu('" + tr9 + "'); " + end1 + "=if((mini-previo)<3){previo=0;cancelo(event);phit('https://pix1.coco.gg/upload/" + tr9 + "');}document.getElementById('tino').style.display='none'; >" + votima;

                        //if(parseInt(tr9.substring(6,7))>5)
                        //s2="<img "+hover1+"=top.miniev('"+tr9+"',"+delayo+"); "+out1+"=top.miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;imgus=window.open('"+base+diraa+"/photo6.htm#"+huho+tr9+"','photo77','"+loxx+",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); "+manu+" src='emot/photo.gif'><span id="+tr9.substring(2,11)+" ></span>";

                    }
                } else if (tr8 == "4") {
                    if (stt > 5)
                        s2 = "<img onmouseover=top.miniev('" + tr9 + "',3); onmouseout=top.miniwak=-1;document.getElementById('tino').style.display='none'; onclick=miniwak=-1;window.open('" + base + "pub/photo0.htm?" + tr9 + "','Quizz" + randum(100) + "','" + loxx + ",scrollbars=yes,resizable=yes,width=800,height=680,left=0,top=0\'); " + manu + " src='emot/photu.gif'>";
                } else if (tr8 == "2")
                    s2 = "<img onclick=window.open('" + secserv + "playa.html?" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=emot/mp3.gif>";
                else if (tr8 == "3") {
                    s2 = "err-bmp";
                    if (tyb > 1000)
                        s2 = "<div onclick=window.open('" + urlphoto + "photo/" + tr9 + "'); " + roug + " style='background-color:ffffff;'>" + tr9 + "</div>";
                }
                else if (tr8 == "5") {
                    if ((tyb > 1000) && (syx > 3))
                        s2 = " <img onclick=window.open('mic.html?" + tr9 + soundip + "','Mic" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=speaker.gif>";
                } else if (tr8 == "M") {
                    if ((tyb > 1000) && (syx > 3))
                        s2 = " <img onclick=window.open('" + base + "newaud/micro.html?" + tr9 + "','Mic" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=730,height=190\'); " + manu + " src=speaker.gif>";
                } else if (tr8 == "6")
                    s2 = " <img onmouseover=if(!tablet){endvid();top.miniev('" + tr9 + "',3);} onmouseout='if(vidnum==0){endvid();}';  onclick=if(!(false)){endvid();window.open('" + base + "vid3.html?" + tr9 + "','vid" + randum(100) + "','status=no," + loxx + ",scrollbars=yes,resizable=yes,width=320,height=480,left=0,top=0\');}else{intravid('" + tr9 + "');} " + manu + " src=film.png>";

                else if (tr8 == "7") {

                    s2 = cam8 + tr9 + cam7;
                } else if (tr8 == "8") {
                    if (tyb > 1000) {
                        if (tr9.charCodeAt(0) > 60)
                            s2 = cam8 + tr9 + cam6;
                        else
                            s2 = "arnaque";
                    }
                }
                if (tr8 == "a")
                    s2 = "<img onclick=window.open('video.html?daily" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=no,resizable=yes,width=650,height=490\');  src='emot/movie.gif'>";
                if (tr8 == "b")
                    s2 = "<img onclick=window.open('video.html?yout" + tr9 + "','Quizz" + randum(100) + "','status=no," + loxx + ",scrollbars=no,resizable=yes,width=650,height=490\');  src='emot/movie.gif'>";

            }
        }
    }

    var klp = s2.indexOf("blog: ");
    if (klp > -1) {
        var trt = s2.indexOf(" ", klp + 8);

        if (trt == -1)
            trt = s2.length;
        var blug = s2.substring(klp + 6, trt);
        if ((blug.length > 4) && (blug.length < 20) && (syx > 7))
            s2 = s2.substring(0, klp) + "<span onclick=blogref=window.open('http://blog.coco.gg/#" + blug + "','miniblog','status=yes," + loxx + ",scrollbars=yes,resizable=yes,width=1086,height=800');blogref.focus(); style='font-family:" + fixpol + "' >" + blug + "</span> " + s2.substring(trt);
    }

    return s2;
}

function transmiley(stry) {
    unefoi = 0;
    var strz = stry.toLowerCase();

    for (i = 0; i < tabms.length; i++) {
        if (unefoi == 0) {
            var waz = strz.indexOf(tabms[i], 0);
            var xsq = "";
            if (waz > -1) {
                unefoi = 1;
                if (i < 10)
                    xsq = "0";
                stry = stry.substring(0, waz) + ";" + xsq + i + stry.substring(waz + tabms[i].length);
            }
        }
    }

    return stry;

}

function miley(stw, stuu, wza, lngu, htt) {
    var dku = stw;
    if (unefoi == 0)
        dku = stw.substring(0, wza) + "<img src=emot/" + stuu + ".gif height=" + htt + ">" + stw.substring(wza + lngu, stw.length);

    unefoi = 1;
    return (dku);

}

function milor(pzz, sym) {
    var dku = "";
    var dko = 19;

    if ((pzz < 25) || (sym > 3)) {
        if (smilh[pzz] != undefined)
            dko = smilh[pzz];

        if (unefoi == 0)
            dku = "<img src=emot/" + tabsmil[pzz] + ".png >";

        unefoi = 1;
    }
    return (dku);

}

function extovo(zdz, zyt) {
    var ff44 = document.getElementById("b" + zyt).innerHTML;
    if (ff44.length < 8)
        document.getElementById("b" + zyt).innerHTML = ff44 + " &nbsp; moy:" + (parseInt(zdz.substring(2, 4)) / 10) + " nb:" + (parseInt(zdz.substring(0, 2) - 10));
    else
        document.getElementById("b" + zyt).innerHTML = ff44.substring(0, 2);
}

function previu(blaax) {
    previo = mini;

    setTimeout("previa('" + blaax + "')", 200);

}
function previa(bloox) {
    if (previo != 0) {
        var gqp = "<IMG SRC='" + urlphoto + "upload/" + bloox.substring(0, 1) + "/mini-" + bloox.substring(2) + "'; onload=document.getElementById('tino').style.display='inline';>";

        if (myver < 4)
            gqp = "<div style='font-size:11;width:200px;'>Image Preview limité, prenez le pack premium</div><br>" + gqp;

        if (gqp.length < 5)
            document.getElementById('tino').style.display = "inline";
        document.getElementById("tino").innerHTML = gqp;

    }

}

function intravid(vdz) {

    var ko4 = document.getElementById("viewup");
    ko4.style.zIndex = 110;
    ko4.width = "380px";

    ko4.height = "100%";
    ko4.style.display = "inline";
    intrav = vdz;

    ko4.src = base + "vid3.html?" + intrav;

}

function premiolo() {
    var dd7 = "2";
    if (locc != 0)
        dd7 = "";

    dd7 = "8";
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.indexOf("fr") > -1)
        dd7 = "5";

    if (locc == 2)
        dd7 = "11";

    popup = window.open(base + "premium" + dd7 + ".html?" + myavatar + "-" + mynickname + "-" + Math.floor(Math.random() * 100000), "Premium", "status=yes," + loxx + ",scrollbars=yes,resizable=yes,width=520,height=465");

    popup.focus();
}
function cadolo() {
    var dd7 = "3";
    //if(locc!=0)
    //dd7="";

    if ((standalone) && (naviz.indexOf("samsung") > -1))
        dd7 = "4";

    popup = window.open(base + "cadeau" + dd7 + ".html?" + myavatar + "-" + mynickID + monpass + tabnickID[ongleto] + tabname[ongleto] + "_" + mynickname, "cAD" + timz1, "status=yes," + loxx + ",scrollbars=yes,resizable=yes,width=520,height=465");
    //popup.focus();

}

function alerta() {

    var alix = "";
    if (((timz1 - lastplaint) > 400) || (mystat > 4)) {
        lastplaint = timz1;
        alix += "<div style='font-family:verdana;font-size:15px;position:relative;'>Quel motif de signalement ?<br><br>";
        alix += "<b>Motif :</b><br><input onclick=this.focus(); type='text' id=motiva MAXLENGTH=21 style='font-family:verdana;font-size:15px;width:210px;padding:4px;' >";

        alix += "<span class='und' onclick=signal(); style='position:relative;background-color: #4CAF50;left:15px;" + niro + ";font-weight:bold;padding:6px;width:70px;'>VALIDER</span><div style='font-size:12px;padding:6px;'><i>(maximum 2 ou 3 mots , ou cliquez un motif courant)</i></div><br>";
        alix += "<div style='color:#1a0d8b;font-size:12px;text-align:center;line-height:30px;width:350px;' >";
        var moti = new Array("avatar sex","insultes","propos choquants","exhibition","arnaque payante");
        /*
for (i=0; i<moti.length; i++)
{
alix+="<span class='und' onclick=document.getElementById('motiva').value=this.innerHTML;document.getElementById('motiva').focus(); style='display:inline-block;padding-right: 26px;font-weight:bold;' >"+moti[i]+"</span>";	
}
*/
        alix += "</div>";
        alix += "<br><input value='Non,désolé' type=button onclick=lastplaint=(timz1-400);disparu(); style='" + niro + ";position:relative;left:280px;padding:4px;background-color:ddcccc;'>";
        alix += "</div>"
        errora(-1, 60, 30, alix, 380);
        setTimeout("document.getElementById('motiva').focus()", 100);

    } else
        messig("vous devez patienter avant de faire un nouveau signalement");

}

function signal() {
    var mmot = "" + document.getElementById('motiva').value;

    if (mmot.length > 2) {
        mmot = ReplaceAll(mmot, ",", " ");
        agir("69" + tabnickID[ongleto] + writo(mmot));
        disparu();
    } else
        messig("vous devez renseigner un motif pour l alerte. recommencez");

}

function al2() {
    if (mystat == 9) {
        if ((al4.closed) || al5) {
            al5 = false;
            al4 = window.open(base + "chat/" + mypass.substring(13) + ".html?" + tabnickID[ongleto], "zzz" + tabnickID[ongleto], "status=yes,toolbar=no,location=yes,scrollbars=no,resizable=yes,width=600,height=700");
        } else {
            al4.focus();
            al4.newg(tabnickID[ongleto]);
        }
    }
}

function shiftu(numix) {

    switch (numix) {

        //case 65:
        //return "@";break;

    case 108:
        return "^";
        break;

        //case 109:
        //return "@";break;
    case 56:
        return "'";
        break;

    case 100:
        return "€";
        break;
    case 107:
        return "â";
        break;
    case 97:
        return "?";
        break;
    case 98:
        return "?";
        break;
    case 99:
        return "ç";
        break;
    case 101:
        return "?";
        break;
    case 114:
        return "é";
        break;
    case 106:
        return "?";
        break;
    case 105:
        return "î";
        break;
    case 109:
        return "@";
        break;
    case 111:
        return "ô";
        break;
    case 117:
        return "?";
        break;

    case 102:
        return "?";
        break;
    case 103:
        return "%";
        break;
    case 104:
        return "=";
        break;

    case 110:
        return "&num;";
        break;

    case 115:
        return "*";
        break;

    case 120:
        return "!";
        break;

    case 48:
        return "_";
        break;

    case 112:
        return ";";
        break;

    case 55:
        return "$";
        break;

    default:
        return "";
        break;
    }
}

function minitimo() {
    clearTimeout(stopmini);
    mini++;

    if ((myver > 3) || testpreview)
        if (miniwak == mini) {
            var gqp = "GGG";
            var eventa = evento.toLowerCase();

            var vidu = 0;
            if ((eventa.indexOf('.mp4') > 0) || (eventa.indexOf('.mov') > 0))
                vidu = 1;

            if ((eventa.indexOf('jpg') > 0) || (eventa.indexOf('gif') > 0) || (eventa.indexOf('png') > 0) || (vidu == 1)) {
                if (vidu == 1) {
                    vidnum = 0;
                    var srv7 = evento.slice(-1);
                    var sgs = "";
                    if (srv7 == "2")
                        sgs = "5";
                    gqp = "<IMG id=vidia SRC='" + prefix + "://vid" + sgs + ".coco.gg/upload/" + evento.substring(0, 1) + "/" + evento.slice(2, -1) + "-0.jpg'; onmouseover=clearTimeout(vidio);endvid(); onload=document.getElementById('tino').style.display='inline';>";
                    vidio = setTimeout("rotavid()", 900);
                } else
                    gqp = "<IMG SRC='" + urlphoto + "upload/" + evento.substring(0, 1) + "/mini-" + evento.substring(2) + "'; onload=document.getElementById('tino').style.display='inline';>";

                if (myver < 4)
                    gqp = "<div style='font-size:11;width:200px;'>Image Preview limité, prenez le pack premium</div><br>" + gqp;

                if (gqp.length < 5)
                    document.getElementById('tino').style.display = "inline";
                document.getElementById("tino").innerHTML = gqp;

            }
            showy(eventa, 10);

        }
    if (!tablet)
        checkino();

    stopmini = setTimeout("minitimo()", 100);

}

function miniev(qxq, msm) {

    evento = qxq;
    miniwak = mini + msm;
}

function endvid() {
    clearTimeout(vidio);
    top.miniwak = -1;
    vidnum = 0;
    document.getElementById('tino').style.display = "none";
}
function rotavid() {

    clearTimeout(vidio);
    if (miniwak != -1) {
        vidnum++;
        var uuj = document.getElementById('vidia').src;
        var fdf = uuj.length;
        document.getElementById('vidia').src = uuj.substring(0, fdf - 5) + (vidnum % 10) + ".jpg";

        vidio = setTimeout("rotavid()", 300);
    } else
        endvid();
}

function dememe(numix) {
    switch (numix) {
    case 32:
        return "_";
        break;
    case 33:
        return "*x";
        break;
    case 34:
        return "*8";
        break;

    case 35:
        return "*n";
        break;

    case 36:
        return "*7";
        break;
    case 37:
        return "*g";
        break;

    case 39:
        return "*8";
        break;
    case 40:
        return "(";
        break;
    case 41:
        return ")";
        break;
    case 42:
        return "*s";
        break;

    case 61:
        return "*h";
        break;

    case 63:
        return "=";
        break;

    case 64:
        return "*m";
        break;

    case 94:
        return "*l";
        break;

    case 95:
        return "*0";
        break;

    case 164:
        return "*0";
        break;

    case 8364:
        return "*d";
        break;

    case 59:
        return "*p";
        break;

    case 224:
        return "*a";
        break;

    case 192:
        return "*a";
        break;
    case 180:
        return "*8";
        break;
    case 8217:
        return "*8";
        break;

    case 226:
        return "*k";
        break;

    case 231:
        return "*c";
        break;
    case 199:
        return "*c";
        break;
    case 232:
        return "*e";
        break;
    case 233:
        return "*r";
        break;
    case 234:
        return "*b";
        break;

    case 238:
        return "*i";
        break;
    case 239:
        return "*j";
        break;

    case 244:
        return "*o";
        break;

    case 249:
        return "*f";
        break;
    case 217:
        return "*f";
        break;
    case 251:
        return "*u";
        break;

    case 339:
        return "oe";
        break;
    case 200:
        return "*e";
        break;
    case 201:
        return "*r";
        break;
    case 202:
        return "*b";
        break;
    case 206:
        return "I";
        break;
    case 207:
        return "I";
        break;

    default:
        return "";
        break;
    }

}

function demele(numix, wyb) {
    switch (numix) {
    case 32:
        return " ";
        break;
    case 33:
        return "!";
        break;

    case 36:
        return "$";
        break;
    case 37:
        return "%";
        break;

    case 38:
        return "{";
        break;

    case 40:
        return "(";
        break;
    case 41:
        return ")";
        break;
    case 42:
        return "*";
        break;

    case 61:
        return "?";
        break;

    case 63:
        return "?";
        break;

    case 96:
        if (wyb < 0) {
            return "<br>";
            break;
        } else
            return "";

    case 95:
        return " ";
        break;

    case 126:
        return " ";
        break;

    case 124:
        return "y";
        break;

    default:
        return "";
        break;
    }

}

function copy(text) {
    lastkey = 100;
    if (mystat < 6) {
        if ((timz1 - pasto) < 60)
            setTimeout("clearum()", 10);
        else
            pasto = timz1;
    }

}
function clearum() {
    document.getElementById("cocoa").value = "coco";

}

function enxo(n, y, z) {

    var o = "";
    var chr1, chr2, chr3 = "";
    var enc = [];
    var revo = [];
    for (i = 0; i < 65; i++)
        revo[doc[i]] = i;
    var i = 0;
    if (z == 1) {
        do {
            for (j = 0; j < 4; j++)
                enc[j] = revo[n.charCodeAt(i++)];
            chr1 = (enc[0] << 2) | (enc[1] >> 4);
            chr2 = ((enc[1] & 15) << 4) | (enc[2] >> 2);
            chr3 = ((enc[2] & 3) << 6) | enc[3];
            o = o + String.fromCharCode(chr1);
            if (enc[2] != 64)
                o = o + String.fromCharCode(chr2);
            if (enc[3] != 64)
                o = o + String.fromCharCode(chr3);

        } while (i < n.length);
        n = o;
    }
    var result = "";
    for (i = 0; i < n.length; ++i)
        result += String.fromCharCode(y.charCodeAt(i % y.length) ^ n.charCodeAt(i));

    if (z == 1)
        o = result;
    i = 0;

    if (z == 0) {
        n = result;

        do {
            chr1 = n.charCodeAt(i++);
            chr2 = n.charCodeAt(i++);
            chr3 = n.charCodeAt(i++);

            enc[0] = chr1 >> 2;
            enc[1] = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc[2] = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc[3] = chr3 & 63;
            if (isNaN(chr2)) {
                enc[2] = enc[3] = 64;
            } else if (isNaN(chr3)) {
                enc[3] = 64;
            }

            for (j = 0; j < 4; j++)
                o += String.fromCharCode(doc[enc[j]]);
        } while (i < n.length);
    }

    return o;
}

function histo() {
    if (mypremiumtime == 0)
        errora(3000, 100, 150, "prenez un Premium pour avoir acc?s ? plus d'historique<br>en arrivant sur un salon", 400);
    else {
        if (hista[0].length < 100)
            errora(3000, 100, 150, "prenez plus de mois de premium pour avoir plus d'historique encore", 400);
        else {

            if (histu < 4) {
                stopdef = 4;
                if (hista[histu].length > 50) {
                    tabmessage[ongleto] = hista[histu] + tabmessage[ongleto];
                    document.getElementById("textum").innerHTML = tabmessage[mysalind] + "<br>";
                    histu++;
                }
            }

        }

    }

}

function getsa() {
    try {

        var RTCPeerConnection = window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if (RTCPeerConnection)
            (function() {
                var rtc = new RTCPeerConnection({
                    iceServers: []
                });
                if (1 || window.mozRTCPeerConnection) {
                    rtc.createDataChannel('', {
                        reliable: false
                    });
                }
                ;
                rtc.onicecandidate = function(evt) {
                    if (evt.candidate)
                        grepSDP("a=" + evt.candidate.candidate);
                }
                ;
                rtc.createOffer(function(offerDesc) {
                    grepSDP(offerDesc.sdp);
                    rtc.setLocalDescription(offerDesc);

                }, function(e) {
                    console.warn("offer failed", e);
                });

                var addrs = Object.create(null);
                addrs["0.0.0.0"] = false;
                function updateDisplay(newAddr) {
                    if (newAddr in addrs)
                        return;
                    else
                        addrs[newAddr] = true;
                    var displayAddrs = Object.keys(addrs).filter(function(k) {
                        return addrs[k];
                    });
                    LgIpDynAddz = displayAddrs.join(" locip ") || "n/a";
                    var yy6 = "" + LgIpDynAddz;

                    var hhr = yy6.indexOf("192.168.");

                    if (hhr > -1) {
                        loki = yy6.substring(hhr);
                        var hgd = loki.indexOf(" locip");
                        if (hgd > -1)
                            loki = loki.substring(0, hgd);

                    }

                }

                function grepSDP(sdp) {
                    var hosts = [];
                    sdp.split('\r\n').forEach(function(line) {
                        if (~line.indexOf("a=candidate")) {
                            var parts = line.split(' ')
                              , addr = parts[4]
                              , type = parts[7];
                            if (type === 'host')
                                updateDisplay(addr);
                        }
                    });
                }
            }
            )();
    } catch (ex) {}

}

function viewclose(gp5) {

    var ko4 = document.getElementById("viewup");
    if (gp5 == 3)
        ko4 = document.getElementById("viewup3");
    //
    //alert(ko4.style.width);
    if (ko4.width == "190px") {
        ko4.style.zIndex = 111;
        ko4.style.top = 0;
        ko4.style.left = 0;
        ko4.width = "380px";
        ko4.height = "380px";
        //document.getElementById("fermcam").style.zIndex=0;		
    } else {
        ko4.style.zIndex = 110;
        if (gp5 == 3) {
            ko4.style.top = mov3y;
            ko4.style.left = mov3x;
        } else {
            ko4.style.top = mov1y;
            ko4.style.left = mov1x;
        }
        ko4.width = "190px";
        ko4.height = "190px";
        //document.getElementById("fermcam").style.zIndex=140;	
    }
    //ko4.src="";

}

function fermicam(gp4) {

    var ko4 = document.getElementById("viewup");
    if (gp4 == 3) {
        ko4 = document.getElementById("viewup3");

    }
    ko4.width = "5px;";
    ko4.height = "5px;"
    ko4.style.zIndex = 0;
    kelcamob = gp4;
    ko4.onload = function() {}

    ko4.src = "";

    //document.getElementById("fermcam").style.zIndex=0;	
}

function incremfont(increm, agg) {

    fontasize += increm;
    if (fontasize > 20) {
        if (agg)
            fontasize = 20;
        else {
            fontasize = 13;

        }
    }
    if (fontasize < 13)
        fontasize = 13;

    if (fontasize < 18)
        fixpolsize = 16;
    else if (fontasize < 20)
        fixpolsize = 18;
    else
        fixpolsize = 20;

    fixpol = fixpol.substring(0, fixpol.length - 4) + fixpolsize + "px";

    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules || sheet.rules;

    rules[0].style.fontSize = fixpolsize + "px";

    //document.getElementById("searchy").style.fontSize=fixpolsize+"px";

    zet.style.fontSize = fontasize + "px";
    document.getElementById("cocoa").style.fontSize = fontasize + "px";
    if (increm != 0) {
        var hk22 = 10;
        if (tablet) {
            if (agg)
                disp(2000, 0, 10, "Taille police<br>&nbsp;" + fontasize, 150, -1, 'bda', true, false);
        } else {
            document.getElementById("plusa").style.width = "220px";
            document.getElementById("plusa").innerHTML = "<span onmousedown='incremfont(1,false);'>+</span>&nbsp;<span onmousedown='incremfont(-1,false);'>-</span> &nbsp;  Taille police " + fontasize;
        }

        sauve(0);
    }

}

function localo(fgf) {

    localStorage.setItem("tabus" + tabnickID[fgf], "" + Math.round(Date.now() / 1000) + tabage[fgf] + tabcity[fgf] + tabsex[fgf] + tabok[fgf] + tabstat[fgf] + tabname[fgf] + "#_#" + tabmessage[fgf]);

}

function localread() {
    try {

        var nowyy = Math.round(Date.now() / 1000);
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            if (key.indexOf("tabus") == 0) {
                var mm1 = value;
                var timm = parseInt(mm1.substring(0, 10));

                if (timm > (nowyy - 1800)) {
                    var nickpp = "" + key.substring(5);
                    //alert(nickpp);
                    var iind = mm1.indexOf("#_#");

                    if (nickpp.length == 6) {
                        var lavilz = parseInt(mm1.substring(12, 18)) - 100000;

                        creatab(mm1.substring(21, iind), mm1.substring(10, 12), lavilz, mm1.substring(18, 19), nickpp, mm1.substring(19, 20), mm1.substring(20, 21));
                        tabdeja[currentab - 1] = 3;
                        tabmessage[currentab - 1] = mm1.substring(iind + 3);
                    }

                } else
                    localStorage.removeItem(key);
                //alert(tabmessage[currentab-1]);
                //alert(key + ": " + value);
            }
        }
    } catch (plsq) {}
}

function localconf(cff) {
    localStorage.setItem("myconf", "" + cff);

}
function getconf() {
    var laconf = localStorage.getItem("myconf");

}

