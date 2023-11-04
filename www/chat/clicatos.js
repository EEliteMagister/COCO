function clicus(e) {

    if (!e)
        var e = window.event;

    if (document.all) {
        //IE4,IE5,IE6
        xmouse = e.clientX;
        ymouse = e.clientY;
    } else if (document.layers || document.getElementById) //N4,N6,Moz
    {
        xmouse = e.pageX;
        ymouse = e.pageY;
    }

}

function acto(dfh) {
    alert("yyy");

}

function eteindre(xpz) {
    if (blex > 0)
        document.getElementById("tx" + oldblix).style.backgroundColor = "";
    oldblix = xpz;
}

function liteoff() {

    if (ongleto != 999) {

        document.getElementById(tabdiva[ongleto]).style.backgroundColor = tabcoul[ongleto];

    }

    if (ecritum == 1) {
        notif(0);
    }
    ecritum = 0;

}

function flasher(nami, dimox, dimoy) {
    var randok = Math.floor(Math.random() * 500000);

    var stik = "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' id='" + nami + "' width='" + dimox + "' height='" + dimoy + "'><param name='movie' value='" + nami + ".swf'>";
    stik += "<embed src='" + nami + ".swf?4' name='" + nami + "' width='" + dimox + "' height='" + dimoy + "' type='application/x-shockwave-flash' />";
    stik += "</object>";
    stik += "</div>";

    return stik;
}

function openid(bmw) {
    agir("83557" + bmw);
}

function checode(e) {
    var autorisation = false;
    var cocode = e.keyCode ? e.keyCode : e.charCode;
    if ((cocode > 47) && (cocode < 58))
        autorisation = true;
    if (cocode == 8)
        autorisation = true;

    return autorisation;

}

function checar(e) {
    var autorisation = false;
    var cocode = e.keyCode ? e.keyCode : e.charCode;
    if ((cocode > 47) && (cocode < 58))
        autorisation = true;
    if ((cocode == 8) || (cocode == 32))
        autorisation = true;
    if ((cocode > 64) && (cocode < 91))
        autorisation = true;
    if ((cocode > 96) && (cocode < 123))
        autorisation = true;

    return autorisation;

}

function couli(oki) {

    mycolo = String.fromCharCode(65 + oki);
    mycoul = oki;
    document.getElementById("cocoa").style.color = salcoul[oki];

}

function nono(buk) {

    if (buk > 9) {

        agemax = 99;
        var jjy = buk;

        if (!isNaN(jjy)) {
            if (jjy < 20)
                jjy = 20;
            if (jjy > 70)
                jjy = 99;
            if (jjy < 90) {
                var fq = confirm("Voulez vous vraiment bloquer les plus de " + jjy + " ans?");
                if (fq) {
                    agemax = jjy;
                    filtram = "max:" + jjy;

                }

            }
        }

    }

    var shia = "0";
    if (!fullopen)
        shia = "1";

    if (buk == 1) {

        var fq = confirm("Voulez vous vraiment bloquer les nouveaux onglets de discussion pour ne garder que ceux déja présents?");
        if (fq) {
            nopive = 1;
            agir("43" + shia + "11");
            filtram = "no PV";
        }

    }
    if (buk == 2) {

        var fq = confirm("Voulez vous vraiment bloquer tous les hommes?");
        if (fq) {
            noman = true;
            agir("43" + shia + "33");
            filtram = "no mecs";
        }
    }

    if (buk == 4) {

        var fq = confirm("Voulez vous vraiment ne recevoir des messages que des membres des salons sur lequel vous etes ?");
        if (fq) {
            insolente = true;
            noman = false;
            nopive = 0;
            agir("43" + shia + "44");
            filtram = "salon!";
        }
    }

    if (buk == 0) {
        insolente = false;
        nopive = 0;
        noman = false;
        agir("43" + shia + "22");
        filtram = "Filtre";

    }
    document.getElementById("optg1").innerHTML = "&nbsp;" + filtram;
    sauve(0);
    disparu();

}

function clicum(gom) {

    var fka = "";
    if (mystat > 4)
        fka = document.getElementById("cocoa").value;

    var rbk = correspo[gom];
    //alert(tablet+"gym"+gom+"    "+rbk);

    if (contor > 700) {
        if (modezemic == 0)
            kbon();
    } else
        document.getElementById("cocoa").focus();

    var jtx = rbk.substring(17);
    aqui = "999999";
    if (fka.indexOf(jtx) > -1)
        fka = fka.substring(fka.lastIndexOf(":") + 2);

    fka = jtx + ": " + fka;
    aqui = rbk.substring(8, 14);

    lastkey += fka.length;
    document.getElementById("cocoa").value = fka

    nofocus();

}

function clico(gom) {
    var fuv = document.getElementById("cocoa").value;
    var hlx = fuv.lastIndexOf(": ");
    if (hlx > 0)
        fuv = fuv.substring(hlx + 2, fuv.length);
    hlx = correspo[gom].substring(17) + ": " + fuv;
    lastkey = hlx.length;
    document.getElementById("cocoa").value = "";
    document.getElementById("cocoa").value = hlx;
    aqui = correspo[gom].substring(8, 14);
}

function killus(e, qoy) {
    if (gauche(e))
        killvox(qoy);
    else {
        if (!tablet) {
            lastkey = voxnam[qoy].length;
            document.getElementById("cocoa").value = voxnam[qoy] + ": ";
            setTimeout("setEnd()", 50);
        } else
            setTimeout("if(kbona!=2){citer('" + voxnam[qoy] + "');}", 500);
        //setTimeout("if(kbona==0){prevota('"+qoy+"','"+voxnam[qoy]+"')}",500);
        //citer(voxnam[qoy]);

    }
}

function setEnd() {
    document.getElementById("cocoa").focus();
    var slm = document.getElementById("cocoa").value;
    document.getElementById("cocoa").value = "";
    document.getElementById("cocoa").value = slm;
    document.getElementById("cocoa").focus();
}

function righty(e, gom) {
    minikb = mini + 18;
    if (gauche(e))
        opensal(gom);
}

function opensal(kkh) {

    solicited = true;
    var rbk = correspo[kkh];
    var rbnick = rbk.substring(8, 14);
    var rbok = true;

    var statj = rbk.substring(15, 16);

    if ((statj > 5) || (rbnick == mynickID)) {
        rbok = false;

        for (i = 0; i < salnom.length; i++) {
            if (salID[i] == rbnick) {
                if (rbnick == mynickID)
                    creasal(i);
                else
                    rbok = true;

            }

        }

    }
    if (rbok)
        creatab(rbk.substring(17), rbk.substring(0, 2), rbk.substring(3, 8), rbk.substring(2, 3), rbnick, rbk.substring(16, 17), statj);
}

function sorc(gzm, e) {

    if (gzm == 888)
        gzm = ongleto;
    if (gauche(e)) {
        deletonglet(gzm);
    } else
        cliconglet(gzm);

}

function gauche(e) {
    var jxq = false;
    if ((!document.all && e.which == 3) || (document.all && event.button == 2))
        jxq = true;
    return jxq;
}

function openmic() {
    if (myver > 3) {

        micid = String.fromCharCode(97 + Math.floor(Math.random() * 25)) + (10000 + Math.floor(Math.random() * 89997));

        if (!ie6) {
            urld = "microphone.html#M" + micid + mynickID + monpass + myavatar + mycrypt3 + "M" + tabnickID[ongleto] + "," + speedo;
            if (tablet) {

                if (base.indexOf("https") > -1) {
                    urld = "microphone.html#x" + micid + mynickID + monpass + myavatar + mycrypt3 + "M" + tabnickID[ongleto] + "," + speedo;
                    var ko4 = document.getElementById("micstro");
                    ko4.style.zIndex = 150;
                    ko4.style.width = "150px";
                    ko4.style.height = "188px";
                    ko4.style.display = "inline";

                    ko4.style.zIndex = 100;

                    ko4.src = secserv + "newaud/" + urld;

                    ko4.allow = "microphone; camera";
                }

            } else {

                pmic = window.open(secserv + "newaud/" + urld, "Mic123", "status=yes,statusbar=yes," + loxx + ",scrollbars=yes,menubar=no,resizable=yes,width=615,height=270");
            }
        } else {
            messig("passez sur chrome ou firefox");
        }

    } else
        messig("reservé aux Premiums");

}

function micstream() {
    ecritab("<span style='" + c12 + "'>vous venez de demarrer votre micro: </span><br>", ongleto);
    agir("99" + tabnickID[ongleto] + "_mic.!5" + micid);

}
function newmic() {

    ecritab("<span style='" + c12 + "'>vous venez de demarrer votre micro: </span><br>", ongleto);
    agir("99" + tabnickID[ongleto] + "_mic.!M" + micid);

}

function opencam() {
    if (typcam.length < 2) {
        servideo = Math.floor(Math.random() * 6);
        //servideo=3;

        if (pcam.closed || pcam2) {
            if (((tabsex[ongleto] % 5) != 2) || ((myver % 2) == 1) || (myver > 3)) {
                pcam2 = false;
                camid = mynickID;
                if (tabnickID[ongleto] > 1000)
                    camid = String.fromCharCode(97 + Math.floor(Math.random() * 25)) + (10000 + Math.floor(Math.random() * 89997));
                var urld = "";

                if (contor > 0) {

                    urld = "camuz.html#X" + camid + mynickID + monpass + myavatar + mycrypt3 + servideo + tabnickID[ongleto] + "," + speedo;
                    var ko4 = document.getElementById("streamup");
                    ko4.style.zIndex = 150;
                    ko4.style.width = "340px";
                    ko4.style.height = "300px";
                    ko4.style.display = "inline";

                    ko4.src = secserv + "vdo/" + urld;
                    ko4.style.overflow = "hidden";

                    ko4.allow = "microphone; camera";

                    ko4.onload = function() {

                        var managcam = new Hammer.Manager(ko4.contentWindow.document.body);
                        var pancam = new Hammer.Pan({
                            direction: Hammer.DIRECTION_ALL,
                            threshold: 0
                        });
                        managcam.add(pancam);

                        managcam.on("pan", function(e) {
                            movecam(e, 2);
                        });
                    }

                } else {

                    urld = "camuz.html#Y" + camid + mynickID + monpass + myavatar + mycrypt3 + servideo + tabnickID[ongleto] + "," + speedo;

                    //pcam=window.open("https://www.zix.net/"+urld,"webcam123","status=yes,statusbar=yes,"+loxx+",scrollbars=yes,menubar=no,resizable=yes,width=615,height=270");

                    pcam = window.open(secserv + "vdo/" + urld, "webcam123", "status=yes,statusbar=yes," + loxx + ",scrollbars=yes,menubar=no,resizable=yes,width=615,height=270");

                }
            } else {
                autbar(1);
                messig("vous devez etre authentifié par Tel pour mettre votre cam");
            }
        } else {
            if (memocam.substring(0, 6) == tabnickID[ongleto])
                setTimeout('pcam.focus()', 10);
            else if (tabnickID[ongleto] > 1000) {
                agir("99" + tabnickID[ongleto] + memocam.substring(6));
                ecritab("<span style='" + c12 + "'>vous venez de demarrer une webcam: </span><br>", ongleto);
            } else {
                if (camroom > (timz1 - 30)) {
                    agir("99" + tabnickID[ongleto] + mynickID);
                    ecritab("<span style='" + c12 + "'>vous venez de demarrer une webcam: </span><br>", ongleto);
                }
            }

        }

    } else if (tabnickID[ongleto] > 1000)
        camul(-3);
    /*
	if(!pcam.closed)
	setTimeout("camix()",1000);
	*/
}

function camul(glw) {
}

function amigo() {

    ecritab("<span style='" + c12 + "'>vous venez de proposer ? " + tabname[ongleto] + " d'etre votre ami</span><br>", ongleto);

    agir("46" + tabnickID[ongleto]);

}

function rajoutami(pom) {

    var ldv = tabmessage[ongleto].indexOf('<span id=amiro');
    var kjo = tabmessage[ongleto].indexOf('</span', ldv + 5);

    tabmessage[ongleto] = tabmessage[ongleto].substring(0, ldv) + tabmessage[ongleto].substring(kjo + 14, tabmessage[ongleto].length);
    ecritab("", ongleto);

    agir("47" + tabnickID[ongleto]);
}

function raz() {
    focuz = true;
    mesnum = 0;
    document.title = provi;
}

function mizor() {

    disp(-1, widx - 85, widy - 250, listam, 200, 250, "E2B838", false, false, true);
}

function deletami(kos) {

    var fq = confirm("Voulez vous vraiment supprimer " + kos + " de vos amiz?");
    if (fq)
        agir("49" + kos);

}

function openbis(d) {
    solicited = true;
    creatab(ffnom[d], ffage[d], ffcity[d], ffsex[d], ffID[d], ffok[d], ffstat[d]);
}

function actuam() {
    agir("48");
}

function wheelos(e) {
    //stopdef=0;
    if (ongleto == mysalind) {

        var modiv = document.getElementById("textum");
        var sumi = modiv.offsetHeight + modiv.scrollTop - modiv.scrollHeight;

        if (sumi > -30) {
            if (!tablet)
                if (delayweel == 0) {
                    if (delayweel == 0) {
                        setTimeout("appaslide()", 150);

                    }
                }
            stopdef = 0;
            document.getElementById("scrall").style.zIndex = 0;

            //document.getElementById("textum").style.scrollbarWidth="thin";
        } else {
            stopdef = 2;

            document.getElementById("scrall").style.zIndex = 62;
            if (!tablet) {
                document.getElementById("cachslide").style.display = "none";
                delayweel = 0;
                timasco = mini + 6;

            }
        }

        //alert("STOPDEF");

    }

}

function appaslide() {

    document.getElementById("cachslide").style.display = "inline";
    delayweel = 1;
}
function scrallo() {
    document.getElementById("scrall").style.zIndex = 0;
    stopdef = 0;
    scrolly();

}

function descendo() {

    ciel += cielx;
    if (ciel > 250) {
        cielx = -3;
        setTimeout("descendo()", 8000);
    } else {
        ptop("ifrad", ciel);

        if ((cielx == -3) && (ciel < 1)) {
            cielx = 2;
            ciel = 0;
        } else
            setTimeout("descendo()", 70);
    }

}

function fermu() {
    document.getElementById("certif").style.visibility = "hidden";
    document.getElementById("certif").style.zIndex = 0;
}

function muta() {

    var kml = document.getElementById("muto");
    if (kml.style.textDecoration == "line-through") {
        kml.style.textDecoration = "";
        kml.style.backgroundColor = "#EEEEEE";
        muti = false;
        var wn = document.getElementById('hpsal').contentWindow;
        wn.postMessage('ok', '*');
    } else {
        kml.style.backgroundColor = "#E7C0C0";
        kml.style.textDecoration = "line-through";
        muti = true;
        var wn = document.getElementById('hpsal').contentWindow;
        wn.postMessage('mute', '*');
    }
}

function infuz(e) {
    if (myver > 3) {
        if (gauche(e)) {
            if (mystat > 7) {
                aa11 = 1;
                agir("83554" + tabnickID[ongleto]);
                setTimeout("agir('83553')", 300);

            }
            //else
            //agir("83563"+tabnickID[ongleto]);
        } else
            agir('83555' + tabnickID[ongleto]);
    } else
        messig("reservé aux Premiums");

}

function ReplaceAll(Source, stringToFind, stringToReplace) {
    var temp = Source;
    var indexi = temp.indexOf(stringToFind);
    while (indexi != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        indexi = temp.indexOf(stringToFind);
    }
    return temp;
}

function creasix(zzz, e) {

    if (gauche(e))
        lastroom = salnom[zzz];
    else
        creasal(zzz);
}
function affisix(zzz, e) {
    if (gauche(e))
        if (salnom[zzz] == lastroom) {
            lastkey = 50;
            document.getElementById("cocoa").value = lastroom + ": ";
            setTimeout("setEnd()", 50);
        }
}

function creasal(ii) {
    if (salID[ii] != mynickID) {
        solicited = true;

        creatab(salnom[ii], salage[ii], salcity[ii], salsex[ii], salID[ii], salok[ii], salstat[ii]);
    } else {
        if (myXP > 3) {
            mymood = prompt("Entre votre humeur : " + mymood);
            if (mymood == null)
                mymood = "";
            sauve(0);
        }
    }

}

function showy(xin, ikz) {
    var lxy = document.getElementById("showav");
    lxy.src = urlav + xin;
    lxy.style.top = (ymouse - 30) + "px";

}

function hurlo(qcd) {//alert(qcd);
}

function strim(mxp) {
    try {
        var hud = "";
        if ((mxp > 0) && (mxp < 6))
            hud = strima[mxp - 1];

        if (muti)
            hud = 0;
        //hud=50;

        return hud;
    } catch (smz) {}
}

function volx(e, ssp, ppy) {
    var ssj = 0;
    var kku = 0;
    if (gauche(e))
        kku = -ppy;
    else
        kku = ppy;

    var actus = true;

    try {
        ssj = parseInt(voxhp[ssp]) * 10 + parseInt(voxmic[ssp]) + kku;

        if ((ssj % 10) < 1)
            actus = false;

        if ((ssj) > 99)
            actus = false;
    } catch (rcq) {
        ssj = 155;
    }
    if (actus)
        agir("26" + vox[ssp] + ssj);

}

function voxstart(ssm) {
    //return (mynickID+"91.121.134.51");

    //alert(ssm);
    //var dpr="8";
    //if(chrome)
    dpr = "4";
    //alert(mynickID+dpr+soundip);
    return (mynickID + dpr + soundip);

}
function voxok(kdf) {

    var kdy = 0;
    kdy = 20000;
    /*
	if(kdf>0)
	{
		kdy=20000;
		microok=true;
	}
	*/
    setTimeout("voxhide()", kdy);
}

function demaromic(xpy) {
    agir("25");
}

function voxniv(sdf) {

    try {

        document.getElementById("micra").style.height = Math.floor(parseInt(sdf) / 5);
        var groga = mygain;

        //if(sdf>0)
        if ((!onthelist) && (reponsu == 0))
            groga = 0;

        if (microok)
            if (quinte)
                if (mutemic)
                    groga = 0;

        if (!microok)
            if ((sdf > 0) || (lastmic == -77))
                microok = true;

        if (mynickname.indexOf("852") > -1)
            document.getElementById("cocoa").value = groga;
        return groga;
    } catch (zse) {}

}

function voxhide() {
    reponsu = 0;
    document.getElementById("special").style.visibility = "hidden";
}
function voxtimer() {
    clearTimeout(stopvox);
    var wzv = "";
    if (quinte && onthelist) {
        if (!mutemic)
            wzv = "abc";

        agir("23" + wzv);
    } else
        agir("24" + wzv);

    if (voxeus) {
        stopvox = setTimeout("voxtimer()", 700);

    }

}

function killvox(msm) {

    if (myver > 0)
        agir("27" + vox[msm]);
    else
        autbar(4);
}

function activox(tjr) {
    //if(tabnickID[ongleto]<-299)

    if (quinte) {
        if (tjr == 3)
            mutemic = !mutemic;
        if (tjr == 1)
            mutemic = false;
        if (tjr == 0)
            mutemic = true;
        if (tjr == 7)
            mutemic = !mutemic;
        var dkd = "AAD4FF";
        var dko = "COUPER";
        if (mutemic) {
            dkd = "FFFFFF";
            dko = "CTRL";
        }
        document.getElementById("voxi").style.backgroundColor = dkd;
        document.getElementById("voxz").innerHTML = dko;
    } else if (tjr == 7)
        killvox(0);

}

function voxou(sdg) {
    if (true) {
        if (mysalon > 100) {
            if (micup > 0)
                if (micup < timz1 - 4)
                    microok = false;

            if (!microok) {
                if (sdg != 28) {

                    if (lastmic < (timz1 - 8))
                        lastmic = -77;
                    else
                        lastmic = timz1;

                    reponsu = timz1;

                    //if((tablet)&&(base.indexOf("https")>-1))
                    var multiv = 0;
                    if (quinte)
                        multiv = 1;

                    if (true) {
                        urld = "microphone.html#X" + mynickID + mynickID + monpass + myavatar + mycrypt3 + "R" + mynickID + mysalon + "," + multiv + speedo;
                        dtop("micstro", extcloset + 3);
                        dleft("micstro", extclose + 64);
                        var ko4 = document.getElementById("micstro");
                        ko4.style.zIndex = 150;
                        ko4.style.width = "150px";
                        ko4.style.height = "188px";
                        ko4.style.display = "inline";

                        ko4.src = secserv + "newaud/" + urld;

                        setTimeout("reduiso()", 5000);

                        ko4.allow = "microphone; camera";

                    }

                }
            } else {
                if (sdg == 25) {

                    agir(presso);
                    mygain = 50;
                    if (oldgain > 0)
                        mygain = oldgain;

                }
                if (sdg == 28) {
                    agir(presso);

                }

            }

        }
    } else
        messig("non permis sur Chrome 60. passez sur firefox pour monter au micro");
}

function verif(sgu) {
    var qmk = false;
    if ((myver % (2 * sgu)) > (sgu - 1))
        return true;

}

function messamiz(szs) {
    errora(-1, 120, 180, "Ecrivez votre mail ? votre Amiz " + szs + "<br>Ce message pourra etre lu une fois la personne connectée<br><br><TEXTAREA type=text MAXLENGTH=180 id=messamu onmousedown=nofocus(); style='width:340;height:80;'></TEXTAREA><input type=button Value='Envoyer' onclick=messamo('" + szs + "');><br>", 370);
}
function messamo(nqn) {
    var jjj = ReplaceAll(document.getElementById("messamu").value, "\n", ".");

    jjj = writo(transmiley(jjj));

    if ((jjj.length < 199) && (jjj.length > 4)) {
        agir("42" + nqn + "*" + jjj);
        disparu();
    } else
        alert("message trop long ou trop court");
}

function procmess(wru) {
    var qlq = 0;
    var ccu = 0;
    var qmq = 0;
    while ((ccu < 10) && (qmq != -1)) {

        qmq = allmess.indexOf("&", qlq);
        if (qmq != -1) {
            messtab[ccu] = allmess.substring(qlq, qmq);
            qlq = qmq + 1;
            ccu++;
        }
    }
    if (ccu == 10)
        allmess = allmess.substring(0, qlq);

    if (wru)
        EcrireCookie("allthemess", allmess);

}

function affimess() {
    var xzp = "Messages :<br>";
    for (i = 0; i < messtab.length; i++) {
        xzp += "<div style='position:relative;background-color:dddddd;'>" + messtab[i] + "</div><br>";
    }
    //errora(20000,100,20,xzp,340);	
    disp(-1, 100, 20, xzp, 340, 290, "bbbbbb", true, false);
}

function filtro() {

    var xzu = "";

    var actoli = "";
    var textoli = "";

    if (true) //((mysex%5)==2)
    {
        actoli = "nono(0);";
        textoli = "debloquer mecs";
        if (!noman) {
            actoli = "nono(2);";
            textoli = "no mecs";
        }
        xzu += divo("nomec", 10, 120, 86, 30, "dddddd", "line-height:1em;' align=CENTER " + roug + " onclick=" + actoli, textoli);

    }

    actoli = "shieldum()";
    textoli = "Activer Bouclier";
    if (!fullopen) {
        actoli = "shieldum()";
        textoli = "Désactiver Bouclier";
    }
    xzu += divo(y, 10, 80, 86, 30, "dddddd", "line-height:1em;' align=CENTER " + roug + " onclick=" + actoli, textoli);

    actoli = "nono(0);";
    textoli = "Debloquer nvx pv";
    if (!nopive) {
        actoli = "nono(1);";
        textoli = "Bloquer nvx pv";
    }

    xzu += divo("bloco", 10, 40, 86, 30, "dddddd", "line-height:1em;' align=CENTER " + roug + " onclick=" + actoli, textoli);

    actoli = "nono(0);";
    textoli = "Debloquer pv salon";
    if (!insolente) {
        actoli = "nono(4);";
        textoli = "pv du salon only";
    }

    xzu += divo("bloco", 10, 210, 86, 36, "dddddd", "' align=CENTER " + roug + " onclick=" + actoli, textoli);

    xzu += divo(y, 10, 163, 86, 30, "dddddd", "'", "Age Max<input type=text id='agemaxi' onclick=this.value=''; VALUE=" + agemax + " onkeyup=if(this.value.length==2)nono(this.value); onmousedown=nofocus(); MAXLENGTH=2 style='position:absolute;left:60px;top:0;width:26px;height:24px;'>");

    var wjx = widx + 4;

    disp(-1, wjx, opto[0], xzu, 104, 260, "d8afca", true, false);
}

function shieldum() {
    var glg = "&#9824;";
    if (fullopen) {
        fullopen = false;
        glg = "&#9829;";
        errora(7000, 325, 40, "Vous venez d'activer le bouclier antipervers<br>Désormais seuls les personnes authentifiés pourront vous parler en PV", 380);
        agir("43100");
        sauve(0);
    } else {
        fullopen = true;
        errora(7000, 305, 40, "Vous venez de désactiver le bouclier antipervers<br>? vos risques et périls...", 400);
        agir("43000");
        sauve(1);
    }
    document.getElementById("shieldo").innerHTML = glg;

}

function chango(aaa) {
    try {
        var flo = "";
        if (navigator.appName.indexOf("Microsoft") != -1)
            flo = window.micro93;
        else
            flo = window.document.micro93;

        flo.changa(aaa);
    } catch (ew) {
        alert("probl" + ew);
    }
}

function openblog() {
    blogref = window.open(base + "redirect.html?" + mynickID + monpass + tabnickID[ongleto], "miniblog", "status=yes,toolbar=yes,location=yes,scrollbars=yes,resizable=yes,width=1086,height=800");
    blogref.focus();
}

function bckfo(fnr) {
    geta.oyx = fnr;
}
function opop(fsh) {

    oldinfoop = LireCookie("infoop");

    infoop = fsh;
    if (mysaloname.indexOf('nfo-') > -1) {

        oldinfoop = fsh;
        EcrireCookie("infoop", oldinfoop);
    }
}

function initNotify() {
    // Onload du body
    var btn = document.getElementById('notify');
    if (window.Notification) {
        Notification.requestPermission(function(status) {
            if (status == 'granted') {
                btn.disabled = false;
                btn.onclick = notify;
                rady = 1;
                sauve(0);
            } else {//alert("refus");
            //btn.disabled = true;
            //btn.onclick = undefined;
            }
        });
    } else {
        btn.disabled = true;
        btn.onclick = undefined;
        alert('Votre navigateur est trop ancien (ou est Internet Explorer) pour supporter cette fonctionnalité !');
    }
}
function notify(tti, msd, icano) {
    if (rady == 1) {
        var notif;
        if (icano.length > 4) {
            notif = new Notification(tti,{
                body: msd,
                icon: icano
            });
        } else {
            notif = new Notification(tti,{
                body: msd
            });
        }
        notif.onclick = function() {
            parent.focus();
            window.focus();
            this.close();
        }
        ;
    }
}

function playu() {
    try {
        document.getElementById('nota').pause();
        document.getElementById('nota').currentTime = 0;
        document.getElementById('nota').play();
    } catch (wlm) {}
}

function shobig() {
    if (mystat > 5)
        disp(-1, 30, 30, "<img src=" + urlav + tabnickID[ongleto] + "zzz onclick=disparu();>", -1, -1, "ddaadd", true, false);

}
function shoava() {
    if (mystat < 6) {
        if (myver > 3)
            disp(-1, widx - 380, 0, "<img src=" + urlav + tabnickID[ongleto] + " WIDTH=360 onclick=disparu();>", -1, -1, "ddaadd", true, false);
        else
            messig("vous devez etre premium pour agrandir les avatars");
    }
}

var detectIncognito = function() {
    return new Promise(function(resolve, reject) {
        var browserName = "Unknown";

        function __callback(isPrivate) {
            resolve({
                isPrivate: isPrivate,
                browserName: browserName
            });
        }

        function identifyChromium() {
            var ua = navigator.userAgent;
            if (ua.match(/Chrome/)) {
                if (navigator.brave !== undefined) {
                    return "Brave";
                } else if (ua.match(/Edg/)) {
                    return "Edge";
                } else if (ua.match(/OPR/)) {
                    return "Opera";
                }
                return "Chrome";
            } else {
                return "Chromium";
            }
        }

        function assertEvalToString(value) {
            return value === eval.toString().length;
        }

        function isSafari() {
            var v = navigator.vendor;
            return v !== undefined && v.indexOf("Apple") === 0 && assertEvalToString(37);
        }

        function isChrome() {
            var v = navigator.vendor;
            return v !== undefined && v.indexOf("Google") === 0 && assertEvalToString(33);
        }

        function isFirefox() {
            return (document.documentElement !== undefined && document.documentElement.style.MozAppearance !== undefined && assertEvalToString(37));
        }

        function isMSIE() {
            return navigator.msSaveBlob !== undefined && assertEvalToString(39);
        }

        function newSafariTest() {
            var tmp_name = String(Math.random());
            try {
                var db = window.indexedDB.open(tmp_name, 1);
                db.onupgradeneeded = function(i) {
                    var _a, _b;
                    var res = (_a = i.target) === null || _a === void 0 ? void 0 : _a.result;
                    try {
                        res.createObjectStore("test", {
                            autoIncrement: true
                        }).put(new Blob());
                        __callback(false);
                    } catch (e) {
                        var message = e;
                        if (e instanceof Error) {
                            message = (_b = e.message) !== null && _b !== void 0 ? _b : e;
                        }
                        if (typeof message !== "string") {
                            return __callback(false);
                        }
                        var matchesExpectedError = /BlobURLs are not yet supported/.test(message);
                        return __callback(matchesExpectedError);
                    } finally {
                        res.close();
                        window.indexedDB.deleteDatabase(tmp_name);
                    }
                }
                ;
            } catch (e) {
                return __callback(false);
            }
        }

        function oldSafariTest() {
            var openDB = window.openDatabase;
            var storage = window.localStorage;
            try {
                openDB(null, null, null, null);
            } catch (e) {
                return __callback(true);
            }
            try {
                storage.setItem("test", "1");
                storage.removeItem("test");
            } catch (e) {
                return __callback(true);
            }
            return __callback(false);
        }

        function safariPrivateTest() {
            if (navigator.maxTouchPoints !== undefined) {
                newSafariTest();
            } else {
                oldSafariTest();
            }
        }

        function getQuotaLimit() {
            var w = window;
            if (w.performance !== undefined && w.performance.memory !== undefined && w.performance.memory.jsHeapSizeLimit !== undefined) {
                return performance.memory.jsHeapSizeLimit;
            }
            return 1073741824;
        }

        function storageQuotaChromePrivateTest() {
            navigator.webkitTemporaryStorage.queryUsageAndQuota(function(_, quota) {
                var quotaInMib = Math.round(quota / (1024 * 1024));
                var quotaLimitInMib = Math.round(getQuotaLimit() / (1024 * 1024)) * 2;
                __callback(quotaInMib < quotaLimitInMib);
            }, function(e) {
                reject(new Error("detectIncognito somehow failed to query storage quota: " + e.message));
            });
        }

        function oldChromePrivateTest() {
            var fs = window.webkitRequestFileSystem;
            var success = function() {
                __callback(false);
            };
            var error = function() {
                __callback(true);
            };
            fs(0, 1, success, error);
        }

        function chromePrivateTest() {
            if (self.Promise !== undefined && self.Promise.allSettled !== undefined) {
                storageQuotaChromePrivateTest();
            } else {
                oldChromePrivateTest();
            }
        }

        function firefoxPrivateTest() {
            __callback(navigator.serviceWorker === undefined);
        }

        function msiePrivateTest() {
            __callback(window.indexedDB === undefined);
        }

        function main() {
            if (isSafari()) {
                browserName = "Safari";
                safariPrivateTest();
            } else if (isChrome()) {
                browserName = identifyChromium();
                chromePrivateTest();
            } else if (isFirefox()) {
                browserName = "Firefox";
                firefoxPrivateTest();
            } else if (isMSIE()) {
                browserName = "Internet Explorer";
                msiePrivateTest();
            } else {
                reject(new Error("detectIncognito cannot determine the browser"));
            }
        }

        main();
    }
    );
};
