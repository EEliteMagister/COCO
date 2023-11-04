function reche() {

    rechum = "";

    var offsi = 0;
    if (tablet)
        offsi = 0;
    rechum += divo("genre1", 5, 0, y, y, y, "'", "Genre&nbsp;:" + divo("genre2", 55, 0, y, y, y, "' onclick=choisex();", genry[genru]));

    rechum += divo("age1", 128, 0, y, y, y, "'", "Age&nbsp;:" + divo("age2", 40, 0, y, y, y, "white-space:nowrap;' onclick=choixage();", yeary[yearu]));

    rechum += divo("selex", 100, 0, y, y, y, "'", "");

    rechum += divo("psiid", 270, 0, y, y, y, "z-index:25;' onclick=recpseudo()", "Pseudo");

    rechum = divo(y, y, 10, y, y, y, bo13 + "'", rechum);

}
function recpseudo() {
    if (myver > 3) {
        var qcz = "Rentrez les 4 ou 5 premieres lettres du pseudo ? rechercher";
        if (tablet) {
            kbon();
            document.getElementById("searchy").innerHTML = divo(y, 10, 60, y, y, y, "'", qcz);
        } else
            messig(qcz);
    } else
        messig("la recherche de pseudo est reservée aux Premiums");
}

function choisex() {
    document.getElementById("age1").style.visibility = "hidden";
    document.getElementById("genre2").style.visibility = "hidden";
    document.getElementById("psiid").style.visibility = "hidden";
    var stk = "";
    var qqq1 = 0;
    for (i = 0; i < genry.length; i++) {
        stk += divo(y, -40 + qqq1, 0, y, y, y, "z-index:80;color:#dd0000;' onclick=genru=" + i + ";hidsel();", genry[i]);

        qqq1 += (genry[i].length) * 16;
        //alert(genry[i].length);
    }
    document.getElementById("selex").innerHTML = stk;

}
function choixage() {
    document.getElementById("age1").style.visibility = "hidden";
    document.getElementById("genre1").style.visibility = "hidden";
    document.getElementById("age2").style.visibility = "hidden";
    document.getElementById("psiid").style.visibility = "hidden";
    var stk = "";
    var qqq1 = 0;
    for (i = 0; i < yeary.length; i++) {
        stk += divo(y, -94 + qqq1, 0, y, y, y, "z-index:80;color:#dd0000;white-space:nowrap;' onclick=yearu=" + i + ";hidsel();", yeary[i]);

        qqq1 += 70;
        //(yeary[i].length)*12;
    }
    document.getElementById("selex").innerHTML = stk;
}
function hidsel() {
    reche();

    searchnow();
}

function errora(timo, xc, yc, mess, wz) {

    disp(timo, xc, yc, mess, wz, -1, "cc6666", false, false, false);

}

function disp(timo, xc, yc, mess, wz, hez, coloz, closo, croixi, leavo) {
    clearTimeout(messo);

    if (contor > 700) {
        xc -= 200;
        if (xc < 1)
            xc = 1;
    }

    var uka = document.getElementById("overy");

    if (closo) {

        uka.onmousedown = function(e) {
            var targ;

            e = e || window.event;
            targ = e.target || e.srcElement;
            if (targ.id == "overy")
                disparu();
        }

    } else {
        uka.onmousedown = "";

    }
    var iee = -22;
    iee = 0;

    if (wz > -1) {
        wz -= 22;
        hez -= 22;

        uka.style.width = wz + "px";
    } else
        uka.style.width = "auto";

    if (hez < 0)
        uka.style.height = "auto";
    else
        uka.style.height = hez + "px";

    if (contor > 700)
        if (xc + wz > 380)
            xc = 380 - wz;

    dleft("overy", cadrx + xc);

    var leba = yc + hez - widy - 60;
    if (leba > 0) {
        yc -= (leba);
    }
    dtop("overy", cadry + yc);

    uka.innerHTML = mess;

    //alert(wz);

    //uka.style.overflow="auto";

    uka.style.backgroundColor = coloz;

    uka.style.visibility = "visible";
    if (timo > 0)
        messo = setTimeout("disparu()", timo);

    if (croixi) {
        uka.onmouseleave = "";
        uka.innerHTML += "<div style='position:absolute;overflow:hidden;height:21;left:" + (wz - 5 + iee) + ";top:4;width:21;z-index:50;'>" + croix + "onclick=disparu()></div>";
    }
    if (leavo)
        if (!tablet) {
            uka.onmouseleave = function(e) {

                disparu();
            }

        }
}
function disparu() {
    document.getElementById("overy").innerHTML = "";
    document.getElementById("overy").style.visibility = "hidden";

    if (dextrop > 0)
        document.getElementById("boardz").style.zIndex = 0;
}

function cherchasalon() {

    agir("89");
}

function favo() {
//javo=window.open('page.html','Sauvegarde','toolbar=no,location=yes,scrollbars=no,resizable=yes,width=200,height=200');

/*
infor=LireCookie("samedi");
if ( navigator.appName != 'Microsoft Internet Explorer' ) 
{
window.sidebar.addPanel("CocoLand","http://www.cocoland.fr/?sav"+infor+"vas","");
} 
else
{
window.external.AddFavorite("http://www.cocoland.fr/?sav"+infor+"vas","CocoLand");
}
*/
//alert(infor);
}

function guga(ttt) {
    var ooo = "" + ttt;
    ooo += "xqx";

    var mwf = ooo.length;
    for (i = 0; i < (31 - mwf); i++) {
        ooo += "Q";
    }
    ooo += infor;
    agix(urlav + ooo, 5)
    //alert(ooo);

}

function resresult(namek, agek, sexk, townk, nickIDa, vera) {

    resnom[rescounter] = namek;
    resage[rescounter] = agek;
    rescity[rescounter] = townk;
    ressex[rescounter] = sexk;
    resID[rescounter] = nickIDa;

    var loing = 18 - namek.length;
    var spacio = "";

    for (s = 0; s < loing; s++) {
        spacio += "&nbsp;";
    }

    var textik = namek + spacio + agek + "&nbsp;" + villa(townk % 50000);

    var sexcolor = "ff00ff";
    var sexcolori = "00ff00";

    var sexko = (sexk % 5);

    sexcolor = coul2[sexko];
    sexcolori = coul[sexko];

    var kgk = "";

    var cok = true;
    if (neutri == 1) {
        if (mytime < 1000) {
            var namew = namek.toLowerCase();
            nonp = new Array("suce","passif","actif","branl","bite","soumi","sex","cul","trav","baise","recoi");
            for (k = 0; k < nonp.length; k++) {
                if (namew.indexOf(nonp[k]) > -1)
                    cok = false;
            }
        }
    }

    if (cok) {

        resum += "<div onclick='creatonglet(" + rescounter + ");' class='fixedsy' " + onmousa(sexcolor, sexcolori) + " style='position:absolute;width:330px;padding-left:12px;height:22px;text-align:left;" + niro + ";background-color:#" + sexcolori + ";overflow:hidden;top:" + (decalim + yfont) + "px;'>" + textik + "</div>";
        rescounter++;

        decalim += 21;
    }

    /*
if(rescounter==40)
{
	//resum+="<div style='position:absolute;top:"+(decalim+20)+";'>affinez votre recherche...</div>"; 
}
*/

}

function villa(vil) {
    var boom = false;

    for (k = 0; k < maville.length; k++) {
        if (maville[k] == vil) {
            vil = maville[k + 1];
            boom = true;
        }
        k++;
    }
    if (!boom) {
        var g = 0;
        while ((!boom) && (g < 100)) {
            if (vil < depax[g]) {
                if (g < 10)
                    vil = "dep 0" + g;
                else
                    vil = "dep " + g;

                boom = true;
            }
            g++;
        }
    }
    return vil;

}

function killum() {
    ignora[ignora.length] = tabnickID[ongleto];
    deletonglet(ongleto);

}

function codolus() {

    var contulus = 0;
    var q0 = cityIDraw;

    var woj = 0;
    var woj2 = 0;
    var continuq = true;

    woj = q0.indexOf('*', 0);
    while ((woj > -1) && continuq) {

        woj2 = q0.indexOf('*', woj + 1);
        if (woj2 > -1) {
            var namoc = q0.substring(woj + 1, woj2);
            maville[contulus] = namoc;
            contulus++;
            woj = q0.indexOf('*', woj2);

        } else {
            var namoc = q0.substring(woj + 1, q0.length);

            maville[contulus] = namoc;
            contulus++;

            continuq = false;
        }

    }

    maville[contulus] = 40000;
    maville[contulus + 2] = 40001;
    maville[contulus + 4] = 40002;
    maville[contulus + 6] = 40003;
    maville[contulus + 8] = 40004;
    maville[contulus + 10] = 40005;
    maville[contulus + 12] = 40009;

    maville[contulus + 1] = "CANADA";
    maville[contulus + 3] = "BELGIQUE";
    maville[contulus + 5] = "SUISSE";
    maville[contulus + 7] = "ALLEMAGNE";
    maville[contulus + 9] = "GREAT BRITAIN";
    maville[contulus + 11] = "LUXEMBOURG";
    maville[contulus + 13] = "ETRANGER";

}

function agix(txt1, tg) {
    tg++;
    //alert("test01234");

    //var headTag = document.getElementById("heado");

    if (!denis) {
        var headTag = document.getElementsByTagName("head").item(0);

        var scriptTag = document.createElement("script");
        /*
if(speco==7)
{
txt1+=speca;
speca++;
}
*/

        scriptTag.src = txt1;
        if (testix == -1)
            headTag.replaceChild(scriptTag, headTag.childNodes[tg]);
        else
            headTag.appendChild(scriptTag);
    } else {
        txt1 = txt1.substring(url1.length);
        window.document.denis.talk(txt1);
    }

}

function agir(txt3) {
    txt3 = "" + txt3;
    //if(ie4)
    //txt3+="?"+Math.floor(Math.random()*10000000);
    agix(url1 + txt3.substring(0, 2) + mynickID + monpass + txt3.substring(2) + "?" + Math.random(), 4);

}

function demelux(urlq) {
    var mopo = 0;
    hzy = 0;
    var ind = 0;

    ind = urlq.indexOf("#", hzy);

    mysalon = parseInt(urlq.substring(0, 3));

    mysaloname = urlq.substring(3, ind);
    mysaloname = transformix(mysaloname, -1, 0);
    hzy = ind + 1;

    urlq = urlq.substring(ind - 1);

    if ((mysalon == 115) || (mysalon == 116))
        lesbo = true;
    else
        lesbo = false;

    populate(salage, salsex, salcity, salID, salnom, salniv, salstat, salok, urlq, 0);

    actusaloo();

}

function actusaloo() {
    saloo = "";
    var shu = 0;

    for (i = 0; i < salnom.length; i++) {

        var kron = "";
        var colu = "";
        //var dcx=0;
        var cobase = "";

        var camu = "";
        var dvh = salstat[i];
        var mnr = false;
        if (salnom[i].indexOf(".") > 0) {
            mnr = true;
            salnom[i] = salnom[i].substring(0, salnom[i].length - 1);
        }

        var spex = salnom[i].indexOf(")");
        if (spex > 0) {

            //var gmz=salnom[i].indexOf("(");
            if (spex > 0) {
                var fuw = salnom[i].substring(spex + 1, spex + 3);
                salnom[i] = salnom[i].substring(0, salnom[i].length - 3);
                camu = divo(y, y, y, y, y, y, "z-index:70;'", cam8 + salID[i] + fuw + salnom[i] + cam6);

            }
            if (salID[i] == mynickID)
                camroom = timz1;
        }

        if (salcity[i] > 49999)
            colu = "<img src=blogo.gif onclick=showy(" + salID[i] + "," + i + "); style='position:relative;width:15px;height:12px;z-index:50;top:1px;left:45px;'>";
        else if (salsex[i] > 4) {
            var wjk = "";

            //colu=divo(y,salnom[i].length*8+45,0,15,15,y,"font-family:"+fixpol+";z-index:50;' onclick=showy("+salID[i]+","+i+"); "+wjk+" "+roug,"?");
            colu = "<span style='position:relative;font-family:" + fixpol + ";z-index:50;left:45px;' onclick=showy(" + salID[i] + "," + i + "); " + wjk + " " + roug + ">?</span>";

        }
        if ((dvh != 0) || lesbo) {
            var motif = "&#9829;";
            var trn = false;
            var cow = "#000000";
            if (dvh == 1)
                cow = "#bf3fbf";

            if (dvh == 7)
                cow = "#4444cc";

            if (dvh == 6)
                cow = "#1f90ff";

            if (dvh == 8)
                cow = "#cc0000";
            if (dvh == 3) {
                if (mystat < 9)
                    trn = false;

                cow = "#44bb44";
            }
            if (dvh == 4)
                cow = "#43B101";

            if (dvh == 3) {
                cow = "#008A8A";
                motif = "&#9824;"
            }
            if (dvh == 2) {
                cow = "#888888";

                //motif="<img src=shit3.gif>"
            }

            if (dvh == "A")
                cow = "#ea9515";

            /*
		desactivé pour le genre
		if((lesbo)&&(salok[i]>0)&&(salstat[i]==0))
		{
			cow="44dddd";
			dvh=4;
		}
		*/

            if (dvh != 0)
                trn = true;

            if (dvh == 5)
                trn = false;

            if (trn)
                colu += "<span style='position:relative;margin-left:4px;left:45px;color:" + cow + ";' onclick=cuoro('" + dvh + "');>ó</span>";

        }

        //if(salnom[i]=="Dislui")
        //colu+=divo(y,salnom[i].length*8+58,-1,y,y,y,"z-index:52;font-family:"+fixpol+";color:"+cow+";font-size:16px;' onclick=messig('jeune-demoiselle-recherche-un-mec-mortel');","<img src=https://www.coco.gg/chat/emot/cadeau.png>");

        var clicu = "";
        var crocoul = "";
        if (salniv[i] > 1)
            crocoul = crowny[salniv[i]];

        var acc = "messcrow()";

        var cola = roug;
        if (salok[i] % 2 == 1)
            cola = viol;
        if (salok[i] > 1)
            cola = bleu;

        if (myver > 3)
            if ((salok[i] > 3) && (salstat[i] < 6)) {
                cola = "";
                cobase = "color:#bb00bb;";
            }

        if (myver > 4) {
            var ukp = "";
            var prx = "this.style.color='';";
            if (salsex[i] > 4)
                ukp = "showy(" + salID[i] + ",10);";
            else
                ukp = "document.getElementById('showav').style.visibility='hidden';";
            var cck = "#ee0000";
            if (salok[i] % 2 == 1)
                cck = "#cc00cc";
            if (salok[i] > 1)
                cck = "#0000ff";
            if ((salok[i] > 3) && (salstat[i] < 6)) {
                cck = "#bb00bb";
                prx = "";
            }

            cola = "onmouseover=if(checkav){clicus(event);this.style.backgroundColor='#ffffff';" + ukp + "}this.style.color='" + cck + "'; onmouseout=this.style.backgroundColor='';" + prx;
        }

        if (mysalon > 399) {
            if (mnr) {
                //crocoul="ffffff";
                cobase = "color:#0080FF";
                cola = "";
            }
            if (myver > 3)
                acc = "agir(77363" + salID[i] + ")";
        }

        var imkil = "<img src='crowny.gif' onclick=" + acc + "; style='position:absolute;left:0;top:1px;'>";
        if (salok[i] > 7) {
            crocoul = "ffffff";
            imkil = "<img src=diamond.gif onclick=" + acc + "; style='position:absolute;left:0;top:1px;'>";
        }
        if (salok[i] != 8) {
            if (salniv[i] > 0)
                kron = divo(y, -1, 1, 17, 13, crocoul, "margin-right:5px;font-family:arial;font-size:8px;'", "") + imkil;

            var afm = "ondblclick=this.style.backgroundColor='222222';votu(event," + i + ");this.blur();";
            var denz = "";
            if (tablet) {
                afm = "onclick=prevota(" + i + ",'" + salnom[i] + "');";

            }
            var xrj = "onmousedown='creasix(" + i + ",event);' onmouseup='affisix(" + i + ",event);'";
            if (tablet)
                xrj = "onclick='creasix(" + i + ",event);'";
            var salna = "<span style='position:relative;left:41px;height:16px;" + cobase + "' " + cola + " " + xrj + ">" + salnom[i] + "</span>";
            saloo += divo(y, 0, shu * 15, y, 15, y, "line-height:1em;'", kron + camu + divo(y, 19, y, 16, 15, coul[salsex[i] % 5], "-webkit-user-select: none;' " + afm + " ", salage[i]) + salna + colu);
            shu++;
        }
    }

    document.getElementById("salonik").innerHTML = saloo;

}

function cancelo(e) {

    var evt = e ? e : window.event;

    evt.cancelBubble = true;
    if (evt.stopPropagation)
        evt.stopPropagation();

    evt.preventDefault();

}

function votu(e, mmq) {
    cancelo(e);
    killaz(mmq);
}

function checkavu(e) {
    if (gauche(e)) {

        //alert("eee");
        checkav = true;
        dleft("showav", extclose + 105);

    }
}
function checkavo() {

    checkav = false;
    document.getElementById('showav').style.visibility = 'hidden';
    dleft("showav", extclose + 70);

}

function messcrow() {
    messig('double cliquez sur le carre d age de la personne a bannir');
}

function prevota(kile, numiia) {
    var tgt = "";
    kbona = 2;
    setTimeout("kbona=0;", 2000);
    if (voxeus) {
        for (j = 0; j < 5; j++) {

            if (voxnam[j] == numiia)
                tgt = "&nbsp;&nbsp;&nbsp;<input type=button value=KILL onclick=killvox(" + j + "); style='background-color: #FFE17B;" + niro + ";'>";
        }
    }
    if (myXP > 0)
        messig("voter le pseudo : <span style='background-color:#ffffff;'>" + numiia + "</span> ?<br><br><input type=button value=BAN onclick=killaz(" + kile + ");disparu();>&nbsp;&nbsp;" + tgt);

}
function citer(efg) {
    document.getElementById('cocoa').value = efg + ": ";

    kbon();
}

function killaz(kile) {
    if (((salniv[kile] < (myXP + 1)) && (myXP > 0)) || (myver > 4)) {
        if (((timz1 - lban) > 1) || (mystat > 8)) {
            if ((salok[kile] > 0) && (myver == 0)) {
                messig("ban user authentifié impossible");
                autbar(4);
            } else {
                if (salstat[kile] < 7) {
                    if ((mysaloname.indexOf('nsult') < 0) || (mystat > 5) || (mystat == 2)) {
                        agir("93" + salID[kile]);
                        lban = timz1;
                    }
                } else
                    alert("invincible");
            }

        } else
            errora(1500, 300, 100, "attendez un peu avant de voter", 180);
    }
}

function changanam(jms) {
    var fhp = document.getElementById("cocoa").value;
    if (fhp.length < 2)
        fhj = "xx";
    var ss5 = writo(fhp);
    agir("83123zap" + (jms) + ss5.substring(0, ss5.length));
}

function cocoda(sss) {}

function sysmess() {}
function filum(ppx) {

    var trx = ppx;
    //document.getElementById('overy').innerHTML=trx;

    var wij = trx.indexOf('#', 0);
    var wij2 = trx.indexOf('*', wij + 1);

    var wij3 = trx.indexOf(',', wij2 + 1);

    var nomecton = parseInt(trx.substring(wij + 1, wij2));
    var fichal = trx.substring(wij2 + 1);
    if (wij3 > -1)
        fichal = trx.substring(wij2 + 1, wij3);

    var intera = fichal.indexOf("?");
    var srv7 = 1;
    if (intera > -1) {
        srv7 = parseInt(fichal.substring(intera + 1, intera + 2));

        fichal = fichal.substring(0, intera);

    }

    var spd2 = Math.floor((parseInt(trx.substring(wij3 + 1))) / 1000);

    if (spd2 > 5) {
        if (speedo > 0)
            speedo = Math.floor((speedo + spd2) / 2);
        else
            speedo = spd2;

        if (speedo > 10000)
            speedo = 0;
        sauve(0);
    }
    if (mystat == 9)
        messig(spd2 + "  >>> " + speedo);

    if ((mytime > 4) || (myver > 2)) {
        if (wij2 > 0) {

            for (p = 0; p < tabnickID.length; p++) {
                if (tabnickID[p] == nomecton) {
                    if (joko < timz1) {
                        joko = timz1 + 1;
                        var ling = fichal.length;

                        var oka = fichal.substring(ling - 3, ling);
                        var oko = oka.toLowerCase();
                        //var goud="]0*x"+fichal+"*y"+fichal+"*z";
                        var goud = "!3" + fichal;
                        if ((oko.indexOf('jpg') > -1) || (oko.indexOf('gif') > -1) || (oko.indexOf('png') > -1))
                            goud = "_!1" + fichal;
                        else if (oko.indexOf('mp3') > -1)
                            goud = "_!2" + fichal;
                        else if (oko.indexOf('mp4') > -1) {
                            goud = "_!6" + fichal + srv7;

                        } else if (oko.indexOf('mov') > -1)
                            goud = "_!6" + fichal + srv7;

                        if (nomecton > 1000) {

                            if (((myver % 2) > 0) || ((tabsex[p] % 5) != 2) || (myver > 3)) {
                                ling = "87" + tabnickID[p] + roulix + goud;
                                postage(transformix(goud, -1, myver), p);

                                agir(ling);
                            } else {
                                autbar(1);
                                messig("vous devez etre authentifié par Tel pour envoyer une photo");
                            }
                        } else {
                            //if((goud.indexOf("*t")>-1)||(goud.indexOf("*M")>-1))
                            if (goud.indexOf("_") > -1)
                                agir("86999999" + mycolo + goud);
                        }
                    }

                }

            }

            //document.getElementById("textum").scrollTop=20000;

        }

    } else {
        autbar(1);
        messig("vous devez etre authentifié par Tel pour envoyer une photo");
    }
    document.getElementById("ifranos").src = envox;

    //indixo="94";	
}

function refrenvoi() {
    //alert(document.getElementById("ifranos").innerText);

    if (lastenvoi < mini) {
        lastenvoi = mini + 8;
        document.getElementById("ifranos").src = envox;
    }

}

function sos() {

    agir("97");

    //modes=modeq;	
}
function prepav() {
    var qq1 = "infom=" + mynickID + monpass + "&crypt=" + mycrypt3;
    if (myver < 2)
        if (mytime < 50) {
            qq1 = "a";
            errora(4000, 300, 150, "Vous devez etre authentifié par Tel ou etre Premium<br>pour charger un avatar en ligne", 280);
            setTimeout("profilum()", 3000);
        }

    return qq1;

}

function fichez(avix) {
    var jjj = ReplaceAll(document.getElementById("fica").value, "\n", "&");
    jjj = ReplaceAll(jjj, "\r", "");
    var kk3 = jjj.indexOf("?");
    if (kk3 > -1)
        jjj = ReplaceAll(jjj, "?", "!");
    if (jjj.length > 4) {
        agir("83552" + avix + "*" + jjj);
    }
}

function fetchum() {
    var msf = document.getElementById("fichex").value;
    msf = ReplaceAll(msf, " ", "");
    if (msf.indexOf("/") == -1) {
        if (msf.indexOf("@") > -1)
            msf = "email/" + msf;
        else if (msf.indexOf("0") == 0)
            msf = "tel/" + msf;
        else
            msf = "ficos/" + msf;

    }

    agir("83551" + msf);
    setTimeout("agir('83553')", 300);
}

function noaccent(qmp) {
    return (qmp.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
}

function profilum() {
    var pff = "";

    if (mysex > 4)
        pff += "<img id=moi SRC=" + urlav + mynickID + (((randopub + mytry) % 85) + 10) + " WIDTH=150 HEIGHT=150 style='position:absolute;left:5px;top:5px;'>";

    var gmg = ""
    if (colsave > -1)
        gmg = "visibility:hidden;";

    var no3 = "<span style='font-family:verdana;font-size:13px;color:#bb0000'><b>NON</b></span>";

    var ok3 = "<span style='font-family:verdana;font-size:13px;color:#00aa00'><b>OK</b></span>";

    pff += divo("saloncoul", 5, 328, 235, 60, "dddddd", "z-index:40;font-family:" + fixpol + ";'", "couleur" + selecol + divon("colium", 190, 15, y, y, y, gmg + "' onclick=savecol();this.style.visibility='hidden';", "save"));
    //pff+="<div id='saloncoul' style='position:absolute;left:5;top:218;width:235;height:60;z-index:40;background-color:dddddd;font-family:"+fixpol+";'>couleur"+selecol+divon("colium",190,15,y,y,y,gmg+"' onclick=savecol();this.style.visibility='hidden';","save")+"</div>";

    var textuk = "Tel " + no3;
    var actuk = "samos()";
    pff += "<div style='position:absolute;left:2px;background-color:#dddddd;top:162px;width:140px;height:50px;'>Authentification";

    if (myver % 4 > 2) {
        if (mystat < 9) {
            textuk = "Tel " + ok3;
            actuk = "messig('deja-auth.-par-tel');";
        }
    }
    pff += divo(y, 2, 15, y, y, y, "' onclick=" + actuk + " " + roug + " ", textuk);
    //pff+="<div "+roug+" onclick="+actuk+" style='position:absolute;left:2;top:15;'>"+textuk+"</div>";

    textuk = "Mail " + no3;
    actuk = "authal(2)";
    if (mymail.length > 5) {
        textuk = "Mail " + ok3;
    }
    pff += divo(y, 2, 30, y, y, y, "' onclick=" + actuk + " " + roug + " ", textuk);

    pff += "</div>";

    pff += divon(y, 2, 215, y, y, "ddccaa", "padding:2px;' onclick=authal(3) " + roug + " ", "Récupération profil");

    if (allmess.length > 2)
        pff += divo("lemess", 180, 190, y, y, y, "' onclick=procmess(false);affimess(); " + roug + " ", "messages");

    var pr8 = "PREMIUM: " + no3;
    if (mypremiumtime > 0)
        pr8 = "PREMIUM: <span style='color:#0a0;'>" + Math.floor(mypremiumtime / 86400) + " J</span>";
    pff += divo(y, 2, 250, y, y, y, "' onclick=agir(77369); " + roug + " ", pr8);

    var jxj = "notification message: " + no3;
    if (rady > 0)
        jxj = "notification message: " + ok3;

    pff += divo(y, 5, 286, y, y, "bbaabb", "' onclick=if(rady==0){permisso();}else{rady=0;profilum();sauve(0);} " + bleu + " ", jxj);

    jxj = "alerte sonore: " + no3;
    if (alirt == 1)
        jxj = "alerte sonore: " + ok3;
    pff += divo(y, 5, 302, y, y, "bbaabb", "' onclick='alirt=((alirt+1)%2);profilum();sauve(0);' " + bleu + " ", jxj);

    pff += "<IFRAME SRC=" + avaref + myavatar + " name='ifravatar' id='ifravatar' HEIGHT=38 WIDTH=110 FRAMEBORDER=0 allowTransparency='true' style='position:absolute;overflow:hidden;top:30px;left:155px;z-index:0;' ></IFRAME>";

    var wjk = widx - 152;
    if (modex == 1)
        wjk = widx - 4;

    disp(-1, wjk, opto[1] - 80, pff, 270, 400, "bbbbbb", true, false);

}
function permisso() {
    disp(-1, 50, 100, "Voulez vous activer les notifications de messages entrants<br><br><br>(vous pourrez annuler ce choix par la suite)<br><br>il vous faudra autoriser les notifications<br>dans votre navigateur<br><br>" + divon(y, y, y, 120, 30, "e0e28f", "text-align:center;' onclick=notifyes();disparu();", "J'autorise") + "<br><br><br>", 460, -1, 'bbddaa', true, false);

}
function notifyes() {
    rady = 1;
    sauve(0);
    initNotify();
    notify("notifications", "les notifications sont actives", "sing.gif");
}

function savecol() {
    if (myver > 3) {
        colsave = mycoul;
        sauve(0);

    } else
        messig("sauvegarde couleur reservée aux premiums");

}

function adroll(adf) {
    roll++;

    if (contor < 777) {
        if (parami[6].length > 6)
            document.getElementById("ifrad").src = sourcad + "?" + roll;
        else {
            roll = 1;
            document.getElementById("ifrad").src = sourcad + (roll % 2) + ".htm?" + roll;

        }
    } else
        document.getElementById("ifrad").style.visibility = "hidden";

}

function neutel(qxq) {
    var kol = Math.abs(qxq);
    if (kol > 0) {
        var reck = "<span id=ntl" + kol;
        var lzg = "acceptée";
        if (qxq < 0)
            lzg = "refusée";
        var kgk = tabmessage[ongleto];
        var xrh = kgk.indexOf(reck);
        if (xrh > -1) {
            tabmessage[ongleto] = kgk.substring(0, xrh) + "<span style='" + c12 + "'>conversation tel " + lzg + "</span>" + kgk.substring(kgk.indexOf("/span", xrh) + 6);
            ecritab("", ongleto);
        }
        var qqj = "22";
        if (qxq < 0)
            qqj = "33";
        agix("http://tel.coco.gg:1234/tel73" + qqj + mynickID + monpass + tabnickID[ongleto], 4);

    } else {
        if (myver > 3) {
            agix("http://tel.coco.gg:1234/tel7311" + mynickID + monpass + tabnickID[ongleto], 4);
            ecritab("<span style='" + c12 + "'>demande de conversation tel envoyée</span><br>", ongleto);
        } else
            messig("reservé aux Premiums");

    }
}

function ecritab(wws, ong) {
    if (ong > 89000)
        ong = getab(ong);

    if (ong > -1) {
        if (wws.length > 0)
            tabmessage[ong] += wws;
        if (ong == ongleto) {
            document.getElementById("textum").innerHTML = tabmessage[ong] + "<br>";

            scrolly();
        }
    }
}

function scrolly() {
    document.getElementById("textum").scrollTop = 50000;
    setTimeout("scrolldown()", 10);
}

function scrolldown() {
    document.getElementById("textum").scrollTop = 50000;
    //document.getElementById("textum").scrollTop=50000;	
}

function getab(nik) {
    var mht = -1;
    for (i = 0; i < currentab; i++) {
        if (nik == tabnickID[i]) {
            mht = i;
            break;
        }
    }
    return mht;
}

function emota() {
    var xzo = "";
    var ooi;
    for (i = 0; i < tabsmil.length; i++) {
        ooi = i;
        if (i < 10)
            ooi = "0" + i;
        xzo += "<img onclick=disparu();emoto(" + i + "); src=emot/" + tabsmil[i] + ".png style='position:absolute;left:" + ((i % 9) * 30) + "px;top:" + (Math.floor(i / 9) * 40) + "px;'>" + divo(y, -2 + (i % 9) * 30, 19 + Math.floor(i / 9) * 40, y, y, y, "font-family:" + policius + ";font-size:10px;'", ";" + ooi);
    }
    var xza = divo(y, 10, 10, y, y, y, "'", xzo);
    var xf5 = 290;
    if (tablet) {
        xf5 = 330;
        opto[3] = 92;
        modezemic = -1;
        defoc();
    }
    disp(-1, widx - 168, opto[3] - 60, xza, xf5, 325, "ddddee", true, false, false);
}
function emoto(jld) {
    document.getElementById('cocoa').value += " " + tabms[jld];
}

function salongo(nox) {
    if (nox != mysalon) {

        if ((nox < 300) || (nox > 399)) {
            if ((myage > 17) || (nox < 200))
                agir("92" + nox);
            else
                messig("les salons privés sont interdits aux mineurs");
        } else
            agir('82' + nox);
    } else
        messig("deja connecte");
}

function creaprivo() {
    //if((myXP>4)||(myver>3))
    if (myver > 0) {
        var privnam = writo(document.getElementById("crex").value);
        var ctu = 0;

        for (i = 0; i < privnam.length; i++) {
            var kjn = privnam.charCodeAt(i);

            if ((kjn == 58) || (kjn == 41))
                ctu = 10;
            if (kjn < 60)
                ctu++;
        }
        if (ctu < 5) {

            if (document.getElementById("trivor").checked)
                privnam += "--3,";

            if (document.getElementById("managis").checked)
                privnam += "/-";

            if (document.getElementById("premis").checked)
                privnam += ";;";
            else if (document.getElementById("authis").checked)
                privnam += ";";

            //else
            //{

            //}
            agir("91*" + privnam);
        } else
            alert("caracteres interdits");
    } else
        messig("vous devez avoir niv.5 ou ?tre Premium pour creer un salon");
}

function messig(hsp) {
    errora(3000, 300, 150, hsp, 240);
}

function saloname(frg) {

    var zmz = frg.indexOf("--3,");
    var zma = frg.indexOf("--5,");
    if (zma > 0)
        zmz = zma;
    var lft = 0;
    var zmo = "";
    if (zmz > 0) {
        lft += 26;
        frg = frg.substring(0, zmz) + frg.substring(zmz + 4);

        zmo += divo(y, 2, 3, 20, 9, y, "left:2px;z-index:14;'", "<span style='position:absolute;left:0px;top:-8px;font-size:10px;z-index:15;'>vox</span>");
        //zmo+="<span style='position:relative;float:left;left:2px;top:-1px;font-size:10px;'>vox</span>";

    }
    var premii = "";
    zmz = frg.indexOf(";;");
    if (zmz > -1) {
        frg = ReplaceAll(frg, ";;", "");
        premii = "width:100%;background-color:#fff24f;";

    } else {
        zmz = frg.indexOf(";");
        if (zmz > -1) {
            frg = ReplaceAll(frg, ";", "");

            zmo += divo(y, lft, 6, 14, 9, "fff24f", "color:ffffff;float:left;overflow:hidden;'", "");
            zmo += "<span style='position:absolute;float:left;left:" + lft + "px;top:2px;font-size:10px;'>au</span> ";
            lft += 18;
        }
    }

    zmo += "<span style='position:absolute;font-weight:bold;top:0;left:0;text-indent:" + lft + "px;" + premii + "'>" + frg + "</span>";

    return zmo;

}

function envoicapch() {
    agir("83736" + document.getElementById("capcho").value);

}

function ghosto() {
    disp(6000, 220, -30, "vous etes en navigation privée<br><br>desactivez la navigation privée dans les parametres de votre navigateur<br><br>sinon vous perdrez votre compte ? chaque reconnexion ...", 340, -1, 'bda', true, false);

}
