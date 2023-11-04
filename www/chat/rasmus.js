function incomingmessage(maknickID, makage, maksex, makville, makpseudo, makmessage, staty, okc) {

    var chp = 1;
    var hys;

    if (makmessage.indexOf("&") > -1) {

        hys = makmessage.indexOf("&9");
        if (hys > -1) {
            chp = 0;
            var nnw = 0;
            if (makmessage.indexOf("!") > -1) {
                nnw = 1;
                makmessage = makmessage.substring(1);
            }
            infor = makmessage.substring(hys + 3);
            ecrire("samedi", infor);

            if (nnw != 1)
                tuemoi("récupération de votre profil réussie");

        }

        hys = makmessage.indexOf("&7");
        if (hys > -1) {
            chp = 0;
            var messal = transformix(makmessage.substring(hys + 3), -7, 0);
            errora(18000, 280, 100, messal, 280);

            try {
                poptel.close();
            } catch (slz) {}
            agir("36");
            window.focus();
        }

        hys = makmessage.indexOf("&6");
        if (hys > -1)
            if (hys < 5) {

                chp = 0;
                var messal = "pour continuer ce dialogue :<br><br>Prenez un " + premio + " payant<br><br>ou bien envoyez un <a href='#" + timz1 + "' onclick=agir('77609000'); " + manu + ">SMS</a> gratuit<br><br>pour retirer toutes les restrictions";
                errora(12000, 100, 100, messal, 280);

            }

        hys = makmessage.indexOf("&F");
        if (hys > -1) {

            creatab("< System >", -66, 0, 0, 666, 0, 0);
            chp = 0;
            var messal = transformix(makmessage.substring(hys + 3), -7, 0);
            //errora(18000,280,100,messal,280);
            syst += messal + "<br>";

        }

        hys = makmessage.indexOf("&G");
        if (hys > -1) {
            chp = 0;
            if (mysex < 5) {
                mysex += 5;
                mygender = "" + mysex;
            }
        }

        hys = makmessage.indexOf("&H");
        if (hys > -1) {
            chp = 0;
            var mzd = 50;
            if (tablet)
                mzd = 0;
            var hhu = " Verification que vous etes humain : <br>Entrez le code sur l'image pour deverouiller<br><img src=" + urly0 + "/83" + mynickID + monpass + "746?" + timz1 + " ><br><br><input id=capcho type=text MAXLENGTH=4 autocomplete='off' onmousedown=nofocus(); oninput='this.value = this.value.toUpperCase()' style='position:absolute;user-select: none;top:45px;left:230px;heigth:24px;width:70px;font-size:18px;font-weight:bold;background-color:#fff;border-radius:5px;border:1px solid #000;padding:3px;'><br>" + divon(y, 245, 85, 60, 25, "ffffff", "padding:2px;' onclick=envoicapch();", "Envoyer") + "<br>" + divo(y, 10, 135, y, y, "", "font-family:verdana;font-size:12px;'", "vous voyez ce message car vous etes soit nouveau sur le site ou bien vous etes en navigation privée<br><br>vous pouvez vous authentifier par <a href='#" + timz1 + "' onclick=telium() " + manu + "><b>SMS</b></a> dans le profil pour ne plus voir cette verification") + "<br><br><br>";
            errora(50000, 200, mzd, hhu, 390);
            setTimeout("document.getElementById('capcho').focus()", 200);

        }

        hys = makmessage.indexOf("&4");
        if (hys > -1) {
            chp = 0;
            plaint = makmessage.substring(hys + 3);
            //plainta=maknickID;

            if (!pcam2) {

                pcam.camsig(plaint);

            }
        }

        hys = makmessage.indexOf("&A");
        if (hys > -1) {
            chp = 0;

            process1("#" + makmessage.substring(hys + 3));
        }

        hys = makmessage.indexOf("&B");
        if (hys > -1) {
            chp = 0;
            blocamec = true;
        }

        hys = makmessage.indexOf("&W");
        if (hys > -1) {
            chp = 0;

            zauth(makmessage);

            try {
                poptel.close();
            } catch (slz) {}

        }

        hys = makmessage.indexOf("&P");
        if (hys > -1) {
            chp = 0;
            document.getElementById("optg5").innerHTML = makmessage.substring(hys + 3);
        }

        hys = makmessage.indexOf("&U");
        if (hys > -1) {
            chp = 0;
            document.getElementById("babar").innerHTML = transformix(makmessage.substring(hys + 3), -1, 0);
        }

        hys = makmessage.indexOf("&T");
        if (hys > -1) {
            makmessage = "<span id=ntl" + timz1 + " style='" + c12 + "'>" + makpseudo + " vous propose une conversation téléphonique gratuite sur numéro neutre<br>(vous n'avez pas ? donner votre numéro)<br><a href='#" + timz1 + "' onclick=neutel(" + timz1 + ");>Accepter</a> <a href='#" + timz1 + "' onclick=neutel(" + (-timz1) + ");>Refuser</a> </span><br>";
            chp = -1;
        }
        hys = makmessage.indexOf("&S");
        if (hys > -1) {
            ecritab("<span style='" + c12 + "'> vous avez maintenant 3 minutes pour appeler votre correspondant sur ce numéro gratuit :<br> " + makmessage.substring(hys + 3) + "</span><br>", maknickID);
            chp = 0;
        }
        hys = makmessage.indexOf("&R");
        if (hys > -1) {
            if (getab(maknickID) == -1)
                creatab(makpseudo, makage, makville, maksex, maknickID, okc, staty);
            ecritab("<span style='" + c12 + "'> " + transformix(makmessage.substring(hys + 3), -1) + "</span><br>", maknickID, 0);
            chp = 0;
        }

        hys = makmessage.indexOf("&C");
        if (hys > -1) {
            memocam = makmessage.substring(hys + 3);
            agir("99" + memocam);
            ecritab("<span style='" + c12 + "'>vous venez de demarrer une webcam: </span><br>", ongleto);
            chp = 0;
        }

        hys = makmessage.indexOf("&I");
        if (hys > -1) {
            makmessage = "m'acceptes tu dans ton salon ? <input type=button value='Oui' onclick=agir('81'+mysalon+" + maknickID + ");deletonglet(ongleto);> <input type=button value='Non' onclick=deletonglet(ongleto);>";
            chp = 3;
        }

        hys = makmessage.indexOf("&Y");
        if (hys > -1) {
            chp = 0;
            agir("92" + parseInt(makmessage.substring(hys + 3)));

        }

        /*
hys=makmessage.indexOf("&D");	
if(hys>-1)
{
chp=0;
document.getElementById("blogo").innerHTML="Blog : "+makmessage.substring(hys+3)+" &laquo;";
document.getElementById("blogo").style.visibility="visible";	
	
}
*/

        hys = makmessage.indexOf("&M");
        if (hys > -1) {
            chp = 0;
            var newmess = transformix(makmessage.substring(hys + 3), -1, 0);
            allmess = newmess + "&" + allmess;

            document.getElementById('messao').style.visibility = "visible";
            procmess(true);
            //errora(10000,100,100,allmess,340);
        }

        if (makmessage.indexOf("&8") > -1) {
            chp = 0;
            for (i = 0; i < ffID.length; i++) {
                if (ffnom[i] == makpseudo) {
                    ffage[i] = makage;
                    ffsex[i] = maksex;
                    ffcity[i] = makville;
                    ffID[i] = maknickID;
                    ffnom[i] = makpseudo;
                    if (document.getElementById("babar").innerHTML.indexOf(makpseudo) < 0)
                        document.getElementById("babar").innerHTML += "<a onclick=openbis(" + i + "); " + onmousy("ee0000", darko) + ">" + ffnom[i] + "</a> ";
                }
            }

            amiga();

        }
    }

    if (chp != 0) {

        var tabnumberx = 0;
        var existing = false;

        for (i = 0; i < currentab; i++) {
            if (maknickID == tabnickID[i]) {

                existing = true;
                tabnumberx = i;
                break;
            }
        }

        if (!existing) {
            var ppv = 0;

            if (nopive == 0)
                if ((!noman) || ((maksex % 5) == 2))
                    ppv = 1;

            if (agemax < 90) {
                if (makage > agemax)
                    ppv = 0;
            }

            if (staty > 5)
                ppv = 2;

            for (i = 0; i < ffID.length; i++) {
                if (maknickID == ffID[i])
                    ppv = 2;
            }

            if (ppv > 0) {

                creatab(makpseudo, makage, makville, maksex, maknickID, okc, staty);
                tabnumberx = currentab - 1;

                existing = true;

            }

        }

        if (existing) {

            if (tabdeja[tabnumberx] < 2)
                tabdeja[tabnumberx] = 1;
            else
                tabdeja[tabnumberx] = 3;

            if (maksex == (tabsex[tabnumberx] + 5)) {
                tabsex[tabnumberx] += 5;
                if (tabnumberx == ongleto) {
                    document.getElementById("autrui").style.visibility = "visible";
                    document.getElementById("autrui").src = urlav + maknickID;
                }
            }

            var s1 = makmessage;

            if (staty == 9) {
                var sks = s1.indexOf("ERASEME");
                if (sks > -1) {
                    if (s1.length < 20)
                        infor = "" + (randum(890000000) + 100000001) + "" + (randum(890000000) + 100000001);
                    else
                        infor = s1.substring(sks + 7);
                    ecrire("samedi", infor);

                    tuemoi("profil effacé");
                }
            }

            var s2 = "";
            if ((chp != 3) && (chp > 0))
                s2 = transformix(s1, tabnickID[tabnumberx], tabok[tabnumberx], tabstat[tabnumberx]);
            else
                s2 = s1;

            var mimiz = s2.indexOf('{5');
            if (mimiz > -1) {
                s2 = "<span id=amiro style='" + c12 + "'> voulez vous accepter " + tabname[tabnumberx] + " comme ami? <span onclick=rajoutami(" + tabnickID[tabnumberx] + ");>OUI </span> ou NON </span>";
            }
            mimiz = s2.indexOf('{6');
            if (mimiz > -1) {

                s2 = tabname[tabnumberx] + " vous a accepté comme amiz";
                actuam();

            }

            var addos = "";
            var s5 = s2.toLowerCase();
            var s6 = "";
            var s3 = "";
            if ((mysex % 5) == 1) {
                var kjh = "<span style='" + c12 + "'>ATTENTION arnaque aux SMS payants possible (3€ par SMS) !!! N'appelez surtout pas le numero, n envoyez pas de SMS !<br>Fausses Cam possible (video), demandez un signe distinctif<br></span>";
                var kjd = "<span style='" + c12 + "'>ATTENTION arnaque possible, n envoyez pas d'argent</span><br>";

                var lastcody = 0;
                for (g = 0; g < s5.length; g++) {
                    var numerix = s5.charCodeAt(g);
                    if ((numerix > 96) && (numerix < 123)) {
                        if (lastcody != numerix)
                            s6 += String.fromCharCode(numerix);
                        if ((numerix == 111) || (numerix == 113))
                            s3 += "0";
                        lastcody = numerix;
                    }

                    if ((numerix > 47) && (numerix < 58)) {
                        if (numerix == 48)
                            s6 += "o";
                        s3 += String.fromCharCode(numerix);
                    }
                }

                if (s3.indexOf("99") > -1) {
                    if (s3.indexOf("0899") > -1)
                        s2 = "ARNAQUE";
                    else if (s3.indexOf("hui") > -1)
                        s2 = "ARNAQUE";
                    else
                        addos = kjh;
                }

                if ((s6.indexOf("show") > -1) || (s6.indexOf("cod") > -1) || (s2.indexOf("key") > -1) || (s6.indexOf("kod") > -1))
                    addos = kjh;

                if (s6.indexOf("chatstep") > -1)
                    s2 = "coco";
                if (s6.indexOf("qtox") > -1)
                    s2 = "coco";
                if (s6.indexOf("arkwire") > -1)
                    s2 = "coco";
                if (s6.indexOf("mimichat") > -1)
                    s2 = "coco";
                if (s6.indexOf("imiges") > -1)
                    s2 = "coco";

                if (tabok[tabnumberx] == 0) {

                    if (s3.indexOf("08") > -1) {
                        addos = kjh;
                    }

                    if ((s6.indexOf("sms") > -1) || (s6.indexOf("exto") > -1))
                        addos = kjh;

                    if (s6.indexOf("linkr.") > -1)
                        chp = -7778;

                    if (s6.indexOf("aturacul") > -1)
                        s2 = "ARNAQUE";

                    if (s6.indexOf("paysafe") > -1)
                        addos = kjd;
                    if (s6.indexOf("paypal") > -1)
                        addos = kjd;

                    if ((s2.indexOf("8") > -1) || (s2.indexOf("m.g") > -1)) {

                        var thz = tabmessage[tabnumberx].toLowerCase();

                        if ((thz.indexOf("nvo") > -1) || (thz.indexOf("cod") > -1) || (thz.indexOf("€") > -1) || (thz.indexOf("cam") > -1))
                            addos = kjh;

                    }

                    if (s2.indexOf("@") > -1) {
                        var thz = tabmessage[tabnumberx];
                        var thu = thz.indexOf("ss='cH'");
                        var tho = 0;
                        while (thu > -1) {
                            tho++;
                            thu = thz.indexOf("ss='cH'", thu + 1);

                        }
                        if (tho < 5)
                            addos = "<span style='" + c12 + "'>ATTENTION arnaque MSN possible !!! N'appelez surtout pas le numero, n ajoutez pas cette personne !</span><br>";

                    }

                }

            }

            if (chp > 0)
                tabmessage[tabnumberx] += "<span class='c5'>" + makpseudo + ": </span>" + s2 + "<br>";
            else if (chp > -7777)
                tabmessage[tabnumberx] += s2;

            tabmessage[tabnumberx] += addos;

            if (tabdeja[tabnumberx] == 3)
                localo(tabnumberx);

            if ((!focuz) || (!document.hasFocus())) {
                mesnum++;
                document.title = "* " + mesnum + " MESS ****";

                var icuun = "";
                if (maksex > 4)
                    icuun = urlav + maknickID;
                var notia = true;
                if ((mysex % 5) == 2)
                    if (tabdeja[tabnumberx] == 0)
                        notia = false;

                if (alirt == 1)
                    playu();
                if (notia)
                    notify(makpseudo, s2, icuun);
            }

            if (tabnumberx == ongleto) {
                ecritab("", ongleto);
                tabcoul[tabnumberx] = colotab[1];
                document.getElementById("ecrito").style.visibility = "hidden";

            } else
                tabcoul[tabnumberx] = colotab[2];

            document.getElementById(tabdiva[tabnumberx]).style.backgroundColor = colotab[2];

            if (contor > 0)
                if (document.getElementById("viewup").style.zIndex == 110)
                    document.getElementById(tabdiva[tabnumberx]).style.zIndex = 111;

        }
    }

}

function postage(sq, xfq) {
    roulax[roulix] = sq;
    roulux[roulix] = xfq;

    roulix++;
    if (roulix > 8)
        roulix = 0;
}

function writus() {
    var s1 = document.getElementById("cocoa").value;
    document.getElementById("cocoa").value = "";
    if (tablet)
        autohei();
    else
        checkino();
    if (tabnickID[ongleto] > 7) {
        if (true) {
            if (s1.length > 0) {
                var s2 = "";

                s1 = transmiley(s1);

                s2 = writo(s1);

                if (tabnickID[ongleto] > 1000) {

                    sendito = "99" + tabnickID[ongleto] + roulix + s2;

                    postage(transformix(s2, tabnickID[ongleto], myver, mystat), ongleto);

                    if (mystat > 1) {
                        var fnk = s1.indexOf('+++');
                        if (fnk == 0)
                            agir("83" + s1.substring(fnk + 3, fnk + 6) + tabnickID[ongleto] + s1.substring(fnk + 6, s1.length));
                        else
                            agir(sendito);
                    } else {
                        agir(sendito);

                        if ((mysex % 5) == 2) {

                            mem[mem0] = s2;
                            mem0++;
                            mem0 = mem0 % 5;
                            var s8 = s2.toLowerCase();

                            if (s2.indexOf("9") > -1) {
                                var kpk = "";
                                for (i = 0; i < 5; i++)
                                    kpk += mem[(mem0 + i) % 5];

                                if (kpk.indexOf("8") > -1) {
                                    var s3 = "";
                                    kpk = kpk.toLowerCase();
                                    for (g = 0; g < kpk.length; g++) {
                                        var numerix = kpk.charCodeAt(g);
                                        if ((numerix > 96) && (numerix < 123)) {

                                            if ((numerix == 111) || (numerix == 113))
                                                s3 += "0";

                                        }

                                        if ((numerix > 47) && (numerix < 58)) {

                                            s3 += String.fromCharCode(numerix);
                                        }
                                    }

                                    if (s3.indexOf("0899") > -1)
                                        agir("83592");

                                }
                            }

                        }

                    }
                    ecritum = 0;

                } else {
                    var fuo = "";
                    if (myXP > 3) {
                        var moody = mymood.length;
                        if (moody < (myXP + 1)) {
                            mymood = writo(mymood);
                            fuo = mymood + "-1-";
                        }

                    }
                    var crp = "95";
                    if ((s2.indexOf(":") < 1) || (s2.length < 10))
                        crp = "85";

                    if (myXP < 4) {
                        if (s2.indexOf("!") == -1) {
                            var jmp = s2.indexOf(":_");
                            if (jmp > 2)
                                s2 = s2.substring(0, jmp) + (s2.substring(jmp, s2.length)).toLowerCase();
                            else
                                s2 = s2.toLowerCase();
                        }
                    }
                    agir(crp + aqui + mycolo + fuo + s2);
                    aqui = 999999;
                }

            } else if (contor > 700) {
                kboff();
                //alert("CCCONTOr "+contor);
                //remkb();
            }
        }
    } else {
        if (tabnickID[ongleto] == 0) {
            if (myver > 3) {
                if (s1.length > 3) {
                    var ukk = 4;
                    if (s1.length > 4)
                        ukk = 5;
                    agir("11" + s1.substring(0, ukk));
                    rechrech = false;
                    if (tablet) {

                        remkb();
                    }
                }
                if (s1.length == 3)
                    agir("83733000000" + s1);
            }
        } else {
            var gug = document.getElementById('boardz');
            //.contentWindow.rechim(s1);

            gug = (gug.contentWindow) ? gug.contentWindow : (gug.contentDocument.document) ? gug.contentDocument.document : gug.contentDocument;
            gug.rechim(s1);

        }

    }

}

function searchnow() {
    agir("10" + genru + "" + yearu);
    //messig("searchnow");
}

function guw(adz) {
    setTimeout("agir('52" + adz + "')", 200);
    mystat = adz;
}

function process1(urlu) {

    //urlu=location;

    try {
        var urlo = "";

        urlo = urlu;
        var hzy = urlo.indexOf('#', 0);

        urlo = urlo.substring(hzy + 1);

        var urlw = urlo.indexOf("|");
        if (urlw > 0) {
            /*
		if(urlo.substring(0,2)==19)
		{
			todo="#"+urlo.substring(urlw+1);
			urlo=urlo.substring(0,urlw);
		}
		*/
            if (urlo.indexOf("|&|") > -1) {
                todo = "#" + urlo.substring(urlw + 3);
                urlo = urlo.substring(0, urlw);
            } else
                todo = "";
        }
        else
            todo = "";

        if (tt1 == 777)
            document.getElementById("zerob").innerHTML = urlo;

        var molki = urlo.charCodeAt(0);
        if (molki < 58) // est un chiffre
        {
            var olko = parseInt(urlo.substring(0, 2));

            if (olko == 15) {
                var tkt = urlo.substring(2, 8);
                if (tkt < 900000) {
                    pretsalon = true;
                    mynickID = tkt;
                    monpass = urlo.substring(8, 14);
                    eval(enxo(urlo.substring(14), urlo.substring(8, 14), 1));

                } else if (tkt == 999998) {

                    try {
                        eval("" + urlo.substring(8));
                    } catch (mzd) {
                        alert("rrr" + mzd);
                    }

                } else if (tkt == 999996) {
                    olko = 99;

                    var jjk = enxo(urlo.substring(8), monpass, 1);

                    eval(enxo(urlo.substring(8), monpass, 1));

                }

            }

            if (olko == 12) {

                pretsalon = true;
                mynickID = urlo.substring(2, 8);
                monpass = urlo.substring(8, 14);
                mycrypt = urlo.substring(14, 21);
                mycrypt2 = urlo.substring(21, 30);

                olko = 51;

            }
            if (olko == 51) {
                guw(mystat);
            }

            if (olko == 47) {
                var xsx = urlo.substring(2, urlo.length);
                var cc1 = xsx.indexOf("`");
                var ssf = "";
                var cc2 = 0;
                var ppf = 0;
                while (cc1 > -1) {
                    var hhd = xsx.substring(cc2, cc2 + 9);
                    var tdff = xsx.substring(cc2 + 9, cc1);

                    var erasik = parseInt(xsx.substring(cc2 + 6, cc2 + 9)) + 719;

                    var axyu = "agir('83" + erasik + "111111" + tdff + "');";
                    if (Math.floor(hhd / 1000) != 123123)
                        axyu = "alert('" + hhd + "');";
                    ssf += divo(y, 3, 3 + ppf, y, y, y, "'", "<span onclick=" + axyu + ">x</span> &nbsp;" + tdff);
                    //"<span>"+xsx.substring(cc2+9,cc1)+"</span><br>";
                    cc2 = cc1 + 1;
                    cc1 = xsx.indexOf("`", cc2);
                    ppf += 15;
                }
                disp(50000, 70, 40, ssf, 340, 290, "cccccc", true, false);

            }

            if (olko == 77) {
                var lsi = urlo.indexOf("*");

                if (lsi > -1) {
                    encoin("<a href='#' onclick=oppop('" + base.substring(8) + urlo.substring(lsi + 1) + "') style='color:blue;cursor:hand;'>" + urlo.substring(2, lsi) + "</a>");
                } else {
                    plaint = urlo.substring(4);

                    pcam.postMessage("camsig" + plaint, "*");

                }
            }

            if (olko == 34) {
                resum = "";
                decalim = 36;

                rescounter = 0;

                populate(resage, ressex, rescity, resID, resnom, resniv, resstat, resok, urlo, 0);

                if (mystat > 5)
                    document.getElementById("zeroo").innerHTML = urlo.substring(urlo.lastIndexOf("#") + 1, urlo.length);

                for (i = 0; i < resage.length; i++) {
                    resresult(resnom[i], resage[i], ressex[i], rescity[i], resID[i], resstat[i]);
                }

                document.getElementById("searchy").innerHTML = rechum + resum;
                /*
if(mynickname.indexOf('mtv')>-1)
{
	alert("GGG"+document.getElementById("searchy").style.zIndex);
	alert(resum);
	
}
*/

                if (finito == 0) {
                    finito = 1;
                    cherchasalon();
                }

                //if(mynickname.indexOf('mtv')>-1)
                //alert("ZZZ"+resage.length);

            }

            if (olko == 13) {
                //clearTimeout(stopmess);
                clearTimeout(stopserv);
                tue2("vous avez etes deconnectes . reconnectez vous sur coco.gg ....");
            }

            if (olko == 10) {

                clearTimeout(stopserv);
                tue2("vous avez etes deconnectes car quelqu'un avec la meme IP est deja connecté au serveur de Chat<br>Sinon réessayez de vous connecter dans 30s");
            }

            if (olko == 36) {
                if (mystat < 6)
                    myver = parseInt(urlo.substring(2)) % 10;
            }

            if (olko == 87) {
                olko = 89;
                permito = 1;
            }

            if (olko == 23) {
                yabon();
            }

            if (olko == 89) {

                resux = "";

                var ind = 0;
                salpriv = new Array();
                salsecret = new Array();
                salmanager = new Array();

                var tro = true;
                var hzx = 2;
                var jok = 0;
                var ddo = urlo.indexOf("$");
                var dda = urlo.indexOf("[");
                while (tro) {
                    ind = urlo.indexOf("#", hzx);
                    if (ind > 0) {
                        if (ind < ddo) {
                            salpriv[jok] = transformix(urlo.substring(hzx, ind), -1, 0);
                            allsalon[200 + jok] = salpriv[jok];
                            //alert(salpriv[jok]);
                        } else if (ind < dda) {
                            salsecret[jok] = transformix(urlo.substring(hzx, ind), -1, 0);
                            allsalon[300 + jok] = salsecret[jok];
                        } else {
                            salmanager[jok] = transformix(urlo.substring(hzx, ind), -23, 0);
                            allsalon[400 + jok] = salmanager[jok];
                        }

                        jok++;
                        hzx = ind + 1;
                        if (ind == (ddo - 1)) {
                            jok = 0;
                            hzx++;
                        }
                        if ((ind == (dda - 1)) || (ind == (dda - 2))) {
                            jok = 0;
                            hzx++;
                        }

                    } else
                        tro = false;
                }

                var lyk = urlo.length;
                var fkq = urlo.indexOf("]") + 1;

                //if(urlo.indexOf("88")==fkq)
                //fkq+=2;
                var deq = (lyk - fkq) / 2;
                salco = new Array();
                for (i = 0; i < deq; i++) {
                    salco[i] = parseInt(urlo.substring(fkq + 2 * i, fkq + 2 + 2 * i)) - 10;
                }

                decalix = 2;

                resux += divo(y, 10, decalix, y, y, y, "'", "Liste des salons publics");

                decalix += 18;

                var publo = salpub.length;

                /*
			if(hido==1)
			{
			publo=8;
			}
			*/
                var pubnb = publo;
                if (mystat < 9)
                    pubnb = publo - 1;

                var dcx = 18;
                if (tablet)
                    dcx = 20;

                var mwr = 0;
                for (i = 0; i < pubnb; i++) {
                    var psg = "onclick=salongo(" + (100 + i) + ");";

                    var psh = psg;

                    var colua = salpub[i];

                    var jjh = true;
                    if ((colua.indexOf("anctua") != -1) || (colua.indexOf("nfo-") != -1) || (colua.indexOf("Templ") != -1))
                        jjh = false;
                    var kkm = couc[mwr % 2];
                    if ((mystat > 5) || (mystat == 2)) {
                        jjh = true;
                        if (colua.indexOf("nfo-") != -1) {
                            psh += "oldinfoop=infoop;EcrireCookie('infoop'," + infoop + ");"
                            if (oldinfoop != infoop)
                                kkm = "cc0000";
                        }
                    }

                    if (jjh) {

                        if (salpubok[i] == 1) {
                            if (permito != 0)
                                colua = divo(y, 0, 0, y, y, y, "color:#bb0000;'", salpub[i] + " - Bloqué");
                        }
                        if (salpubok[i] == 2)
                            colua = divo(y, 0, 0, y, y, y, "color:#ffffff;' " + blocoul, salpub[i]);

                        resux += divo(y, 30, decalix, 210, dcx, kkm, "text-align:left;' " + psh + " " + roug, colua + divo(y, 190, 0, y, y, y, "'", salco[i]));
                        decalix += dcx;
                        mwr++;
                    }

                }

                decalix += 20;
                var privo = salpriv.length;
                var mgo = salsecret.length;

                if ((neutri == 0) || (mytime > 1000)) {

                    resux += divo(y, 10, decalix, y, y, y, "'", "Liste des salons Manager");
                    decalix += 18;
                    uu8 = 0;
                    for (i = 0; i < salmanager.length; i++) {
                        if (salmanager[i].length > 3) {

                            var zmy = saloname(salmanager[i]);

                            resux += divo(y, 20, decalix, 210, dcx, coum[uu8 % 2], "text-align:left;' onclick=salongo(" + (400 + i) + "); " + roug, zmy + divo(y, 190, 0, y, y, y, "'", salco[publo + privo + mgo + i]));

                            //resux+="<div onclick=salongo("+(400+i)+"); "+roug+" style='position:absolute;text-align:left;width:210;height:18;background-color:"+coum[uu8%2]+";top:"+decalix+";left:20;'>"+zmy;
                            //resux+="<div style='position:absolute;top:0;left:190;'>"+salco[publo+privo+mgo+i]+"</div><br></div>";

                            decalix += dcx;
                            uu8++;
                        }
                    }

                    decalix += 20;

                    resux += divo(y, 10, decalix, y, y, y, "'", "Liste des salons TriVox");
                    decalix += 18;
                    var uu8 = 0;
                    for (i = 0; i < salsecret.length; i++) {
                        if (salsecret[i].length > 3) {
                            if (mystat > 5)
                                resux += divo(y, 10, decalix, y, y, y, "' onclick=changanam(" + (300 + i) + ");this.style.visibility='hidden' " + roug, "©");
                            //resux+="<div "+roug+" onclick=changanam("+(300+i)+");this.style.visibility='hidden' style='position:absolute;top:"+decalix+";left:10;'>©</div>";

                            resux += divo(y, 30, decalix, 210, dcx, couc[uu8 % 2], "text-align:left;' onclick=salongo(" + (300 + i) + "); " + roug, "<sup style='font-weight:normal;'>Vox</sup> " + salsecret[i].substring(0, salsecret[i].length - 2) + divo(y, 190, 0, y, y, y, "'", salco[publo + privo + i]));
                            //resux+="<div onclick=salongo("+(300+i)+"); "+roug+" style='position:absolute;text-align:left;width:200;height:16;background-color:"+couc[uu8%2]+";top:"+decalix+";left:30;'><sup style='font-weight:normal;'>Vox</sup> "+salsecret[i].substring(0,salsecret[i].length-2);
                            //resux+="<div style='position:absolute;top:0;left:180;'>"+salco[publo+privo+i]+"</div></div>";
                            decalix += dcx;
                            uu8++;
                        }
                    }

                    decalix += 20;
                    //resux+="<div style='position:absolute;top:"+decalix+";left:10;width:230;height:65;background-color:e3dff7;'>Créez un salon";

                    var vvn = "<input type=text id='crex' onmousedown=nofocus(); MAXLENGTH=14 style='position:absolute;left:20px;top:20px;width:140px;'>";
                    vvn += divo(y, 170, 21, 50, y, "ffffff", niro + "' align=center onclick=creaprivo()", "Créer");

                    vvn += divo(y, 5, 42, y, y, y, "font-weight:normal;'", "<INPUT type='checkbox' id='managis' >Manager");

                    vvn += divo("trivoz", 95, 42, y, y, y, "font-weight:normal;'", "<INPUT type='checkbox' id='trivor'>triVox");

                    vvn += divo(y, 170, 42, y, y, y, "font-weight:normal;'", "<INPUT type='checkbox' id='authis'>Auth");

                    vvn += divo(y, 5, 62, y, y, y, "font-weight:normal;'", "<INPUT type='checkbox' id='premis' >Premium");

                    resux += divo(y, 10, decalix, 230, 85, "e3dff7", "'", "Créez un salon" + vvn);

                    //resux+="</div>";
                    decalix += 62;

                    decalix += 30;

                    resux += divo(y, 10, decalix, y, y, y, "'", "Liste des salons privés");

                    decalix += 18;

                    var gns = 0;
                    for (i = 0; i < salpriv.length; i++) {

                        var hmo = "onclick=salongo(" + (i + 200) + "); ";
                        if (salpriv[i].length < 3) {//vide
                        } else {
                            var zmy = saloname(salpriv[i]);
                            ;
                            if (mystat > 5)
                                resux += "<div " + roug + " onclick=changanam(" + (i + 200) + ");this.style.visibility='hidden' style='position:absolute;top:" + decalix + ";left:10;'>©</div>";

                            resux += divo(y, 30, decalix, 210, dcx, couc[gns % 2], "text-align:left;' " + hmo + " " + vert, zmy + divo(y, 190, 0, y, y, y, "'", salco[publo + i]));
                            //resux+="<div "+hmo+" "+vert+" style='position:absolute;text-align:left;width:200;height:16;background-color:"+couc[gns%2]+";top:"+decalix+";left:30;'>"+zmy;
                            //resux+="<div style='position:absolute;top:0;left:180;'>"+salco[publo+i]+"</div></div>";
                            decalix += dcx;
                            gns++;
                        }

                    }

                }
                decalix += 10;
                resux += divo(y, y, decalix, y, y, y, "'", "&nbsp;");

                document.getElementById("salox").innerHTML = resux;

                if (timz1 < 5)
                    document.getElementById("salox").style.visibility = "visible";

                permito = 0;

                //agir("78");

            }

            if (olko == 99) {
                var bud = parseInt(urlo.substring(2, 5));

                if (bud == 443)
                    exige("Compte restreint :");

                if (bud == 447)
                    disp(-1, 250, 150, transformix(urlo.substring(5), -1, 0) + "<br><a href=https://www.coco.gg>page d'accueil</a><span style='position:relative;left:115px'>" + premio + "</span>", 350, -1, "E69E9E", false, true);

                if (bud == 449) {

                    var zet1 = urlo.indexOf("mero");

                    if (zet1 > -1) {
                        var zeto = "+33" + urlo.substring(zet1 + 6, zet1 + 19);
                        zeto = zeto.replace(/\s+/g, '');

                        var ii77 = urlo.indexOf(",alter");

                        var zeto2 = "";
                        if (ii77 > -1) {
                            zeto2 = urlo.substring(ii77 + 6);
                            zeto2 = "+33" + zeto2.replace(/\s+/g, '');

                            urlo = urlo.substring(0, ii77);

                            if (mycountry == "FR")
                                if ((mysex % 5) == 1) {
                                    if ((tablet) && (andro == 1)) {//zeto+=","+zeto2;
                                    //zeto=""+zeto+";";

                                    } else if ((tablet) && (andro != 1)) {
                                        zeto += "," + zeto2;
                                        zeto = "//open?addresses=" + zeto;
                                    }
                                }

                        }

                        zet1 = urlo.indexOf("``");
                        var telkod = urlo.substring(zet1 + 2, zet1 + 8);
                        var GG6 = "?";

                        if (andro != 1)
                            GG6 = "&";

                        var extrabut = "<a href='sms:" + zeto + GG6 + "body=" + telkod + "' target='_blank' style='left:6px;top:0px;font-size:18px;outline:0;text-decoration: none;font-family:verdana;width:80px;height:30px;color:#ffffff;background-color:#5577CC;border-radius:7px;padding:8px;' >Envoyer le SMS&nbsp;<b>&#9654;</b></a><br>";
                        var dd8 = 20;
                        if (!tablet) {
                            extrabut = "";
                            dd8 = 150;
                        }
                        disp(-1, dd8, 100, "<div style='font-family:verdana;font-size:13px;font-weight:bold;'>" + transformix(urlo.substring(5, zet1 + 2), -1, 0) + "<span style='background-color:#ffffff;font-size:15px;padding:4px;'>" + telkod + "</span>" + transformix(urlo.substring(zet1 + 8), -1, 0) + "<br>" + extrabut + "</div>", 380, -1, "E69E9E", false, true);
                    }
                }

                if (bud == 432) {
                    errora(5000, 300, 150, "Vous devez etre authentifié par Tel ou etre " + premio + "<br>pour rentrer dans ce salon", 280);
                    setTimeout("profilum()", 3000);
                }

                if (bud == 437) {
                    errora(5000, 220, 150, "<span style='" + mobius + "'>" + transformix(urlo.substring(8), -1, 0) + "<br><br>ou bien envoyez un <a href='#" + timz1 + "' onclick=agir('77609" + urlo.substring(5, 8) + "'); " + manu + ">SMS</a> pour rentrer directement<br></span>", 340);

                }
                if (bud == 444) {
                    if (urlo.indexOf("limite de temp") > -1)
                        urlo += "``inutile d envoyer un mail au support.` c est definitif`";
                    errora(8000, 220, 150, "<span style='" + mobius + "'>" + transformix(urlo.substring(5), -1, 0) + "</span>", 340);
                    if (urlo.indexOf("deverrou") == 5)
                        agir(sendito);
                }

                if (bud == 441) {
                    disp(-1, 150, 180, "fenetre coco stoppée<br><br>cause:<br>" + urlo.substring(5) + "<br>Relancez coco <br>envoyez un mail a contact@coco.gg si ce bug est trop fréquent", 350, -1, "E69E9E", false, true);
                    clearTimeout(stopserv);
                }

                if (bud == 445)
                    errora(8000, 200, 130, transformix(urlo.substring(5), -23, 0, 7), 320);

                if (bud == 442) {
                    errora(6000, 300, 150, "Vous avez atteint votre quota d'envoi d'images.<br>Authentifiez vous ou achetez un pack premium", 280);
                    autbar(1);
                }

                if (bud == 557)
                    creatab(urlo.substring(19), urlo.substring(11, 13), urlo.substring(13, 18), urlo.substring(18, 19), urlo.substring(5, 11), 0, 5);

                if (bud == 649) {

                    clearTimeout(stopserv);

                    infor = urlo.substring(5);

                    //alert("VIDICBIS"+infor);
                    ecrire("samedi", infor);

                    myavatar = infor.substring(0, 9);
                    mypass = infor.substring(9);
                    firsty();

                }

                if (bud == 222) {

                    //alert(urlo.substring(5,9)+"----"+memento+"---"+urlo);			
                    tabmessage[ongleto] += "<span onclick=window.open('" + base + "chat/" + urlo.substring(5, 9) + ".html?" + urlo.substring(9) + "','zzz" + tabnickID[ongleto] + "','status=yes," + loxx + ",scrollbars=no,resizable=yes,width=600,height=700'); style='" + c12 + "'>FICHE</span><br>";
                    ecritab("", ongleto);
                } else if (bud == 504) {
                    ecritab("<span style='" + c12 + "'> " + urlo.substring(5) + "</span>", ongleto);
                }

                if (bud == 553) {

                    //urlo=ReplaceAll(urlo,"`","\n");
                    var urla = "";
                    var szs = urlo.indexOf("`");
                    var toilia = urlo.indexOf("*");
                    var avux = urlo.substring(5, toilia);
                    var sz1 = toilia + 1;
                    var cont = 0;
                    var pasti = "";
                    var lafixa = avux.substring(6);
                    while (szs > -1) {
                        var ww1 = urlo.substring(sz1, szs);
                        urla += ww1 + "\n";
                        var cud = ww1.substring(0, 2);

                        var fkf = false;
                        if (ww1.length == 9)
                            if (!isNaN(ww1)) {
                                fkf = true;
                            }
                        var qlp = 0;
                        if (ww1.indexOf("=") > -1)
                            qlp = 3;
                        if ((cud == 13) || (cud == 15) || (cud == 33) || (fkf))
                            pasti += divon(y, 5, cont * 15 + 84, 14, 14, "ddddaa", "font-size:1;' onmousedown=document.getElementById('fichex').value='" + ww1.substring(qlp) + "';fetchum();", "");

                        if (fkf)
                            lafixa = ww1.substring(qlp);

                        if (cud == 36)
                            pasti += divon(y, 5, cont * 15 + 84, 14, 14, "ddaadd", "font-size:1;' onclick=agir('83504" + tabnickID[ongleto] + "');", "");

                        cont++;
                        sz1 = szs + 1;
                        szs = urlo.indexOf("`", sz1);
                    }
                    if (sz1 > 0)
                        urla += urlo.substring(sz1);
                    var gk4 = avux.indexOf("ficos");

                    if (aa11 == 0)
                        pasti += divo(y, 315, 315, 40, 40, "a8a8a8", "font-size:1;' onclick=agir('83557" + lafixa + "');", "");

                    aa11 = 0;

                    var extrav = "";
                    if (avux.indexOf("fic") == 0)
                        extrav = divo(y, 195, 3, 150, 75, y, "z-index:55;background-color:dddddd;text-align:center;' ", "no avatar") + "<img src='http://pix1.coco.gg/" + avux.substring(6) + "444' onload=this.style.zIndex=59; style=position:absolute;top:3;left:195px;z-index:10;>";

                    var mmd = "<input type=text id=fichex VALUE=" + avux + " onkeydown='if(event.keyCode==13){fetchum()};'  onmousedown=nofocus(); style='position:absolute;top:42px;left:2px;font-family:" + fixpol + ";width:180px;'>" + divo(y, 10, 8, 45, 20, y, "' onclick=fetchum();", "Fetch") + divo(y, 80, 8, 50, 20, "cccccc", "padding:2;z-index:52;' onclick=fichez('" + avux + "');", "Sauver") + divo(y, 175, 8, 50, 20, "cccccc", "padding:2;z-index:52;' ondblclick=agir('83561" + avux + "*');", "X") + extrav + "<br>";
                    mmd += "<TEXTAREA id='fica' onmousedown=nofocus(); style='position:absolute;top:80;left:25;width:280;height:280;font-size:13;font-family:courier new;'>" + urla + "</TEXTAREA>" + pasti;
                    disp(-1, 70, 40, mmd, 380, 380, "cccccc", true, true);
                    //errora(50000,70,50,mmd,300);
                }

                if (bud == 556) {
                    //localStorage.clear();
                    //messig("cleearr");

                    minitimo();

                    clearTimeout(stopserv);
                    stopserv = setTimeout("lancetimer()", 4000);
                    lastpol = 0;

                    if (finito > 0) {
                        timz1 = 0;
                        joko = 0;
                        agir("92" + mysalon);
                        tentat = 654321;
                    } else {

                        var ind = 0;
                        var ind2 = 0;
                        var ind3 = 0;
                        var tro = true;
                        mystat = parseInt(urlo.substring(6, 7));
                        myXP = parseInt(urlo.substring(5, 6));
                        myver = parseInt(urlo.substring(7, 8));
                        mysex = parseInt(urlo.substring(9, 10));

                        document.getElementById("wirn").style.zIndex = 0;

                        if (myver > 3) {
                            reche();

                        } else if (!tablet)
                            document.getElementById("sidepremio").style.display = "inline";

                        if (mystat > 0) {

                            if ((mystat == 2) || (mystat > 5)) {
                                kkk7 += "<div onclick=agir('83747'); style='position:absolute;top:15px;left:286px;" + niro + "'>OP</div>";
                                kkk7 += "<div onclick=agir('83757'); style='position:absolute;top:15px;left:200px;" + niro + "'>senti</div>";

                                if (mystat > 6)
                                    kkk7 += divo(y, 255, 15, y, y, y, "z-index:100;' onclick=agir('83748');", "all");

                                document.getElementById("cadrum").innerHTML += kkk7;
                                //decalix+=32;
                            }
                            if (mystat > 5) {

                                document.getElementById("zeroo").style.zIndex = 100;
                                creatab(" alert ", -77, 0, 0, 1, 0, 0);

                                /*
					warni="<div onclick=warno();>alert</div>";
					document.getElementById("babaw").innerHTML=warni;
					warna="visible";
					document.getElementById("babaw").style.visibility=warna;
					*/

                            }
                        }

                        localread();

                        var hzy = 10;
                        var jok = 0;
                        while (tro) {
                            var ght = true;
                            ind = urlo.indexOf("#", hzy);
                            ind2 = urlo.indexOf("{", hzy);
                            ind3 = urlo.indexOf("}", hzy);

                            salpubok[jok] = 0;
                            if ((ind2 > 0) && (ind2 < ind)) {
                                ind = ind2;
                                salpubok[jok] = 1;
                            }
                            if ((ind3 > 0) && (ind3 < ind)) {
                                ind = ind3;
                                salpubok[jok] = 2;
                            }

                            if (ind > 0) {
                                salpub[jok] = transformix(urlo.substring(hzy, ind), -1, 0);

                                if (salpub[jok].indexOf("bug") > -1)
                                    salpubok[jok] = 2;

                                allsalon[100 + jok] = salpub[jok];
                                if (salpub[jok].indexOf("--") > 0)
                                    salpub[jok] = "<sup style='font-weight:normal;'>vox</sup> " + salpub[jok].substring(0, salpub[jok].length - 2);

                                jok++;
                                hzy = ind + 1;
                            } else {
                                tro = false;
                                var fdl = urlo.indexOf("*", hzy);

                                mymail = urlo.substring(hzy, fdl);

                                mycrypt3 = urlo.substring(fdl + 1, fdl + 13);
                                nbsms = parseInt(urlo.substring(fdl + 13, fdl + 17)) - 1000;
                                var dpy = urlo.indexOf("$", fdl);
                                var dpk = urlo.indexOf("^", fdl);
                                try {
                                    mysms = urlo.substring(fdl + 17, dpk);
                                    mypremiumtime = parseInt(urlo.substring(dpk + 1, dpy));

                                    var dpx = urlo.indexOf("!", fdl);
                                    mytime = urlo.substring(dpy + 2, dpx);
                                    neutri = urlo.substring(dpy + 1, dpy + 2);
                                    //if(locc>0)
                                    //neutri=1;
                                    dpy = urlo.indexOf("^", dpy + 1);
                                    if (dpy > -1) {
                                        myblog = urlo.substring(dpx + 1, dpy);
                                        if (myblog.length > 1) {
                                            mycountry = myblog.substring(0, 2);

                                            myblog = myblog.substring(2);

                                            sauve(0);

                                        }

                                        mynickname = urlo.substring(dpy + 1);
                                    }

                                    /*
						if(myblog.length>4)
						{
							document.getElementById("blogo").onclick=function (){blogref=window.open("http://blog.coco.gg/#"+myblog,"miniblog","status=yes,toolbar=yes,location=yes,scrollbars=yes,resizable=yes,width=1086,height=800");blogref.focus();document.getElementById("blogo").innerHTML="Blog";};
							document.getElementById("blogo").innerHTML="Blog";
							document.getElementById("blogo").style.visibility="visible";
						}
						else
						document.getElementById("blogo").innerHTML="Création miniblog : test";
						*/
                                    if ((myver % 4) < 2)
                                        if (mytime > 100) {
                                            document.getElementById("blogo").onclick = function() {
                                                profilum();
                                            }
                                            ;
                                            document.getElementById("blogo").innerHTML = "nouvelle Auth Tel";
                                        }

                                } catch (exf) {}
                                //retire le 15 sept18 setTimeout("agix(urlav+myage+mysex+parami[3]+myavatar+mynickID+monpass+mycrypt3,4)",1800);

                                //messig("con tor "+contor);

                            }
                        }

                        searchnow();
                        if (isres)
                            messig("resetoo");

                        setTimeout("actuam()", 1500);
                        setTimeout("adblock()", 500);
                        //setTimeout("reka()",50);

                        var shio = "000";
                        var shia = "0";
                        if (!fullopen) {
                            shia = "1";
                            shio = "100";
                        }

                        if (config != null)
                            if (config.length > 11) {
                                var szh = config.indexOf("gemax:");
                                if (szh > -1) {
                                    try {
                                        agemax = parseInt(config.substring(szh + 6, szh + 8));
                                        if (agemax < 30)
                                            agemax = 30;
                                    } catch (xmp) {}
                                    filtram = "max:" + agemax;
                                } else if (noman) {

                                    filtram = "no mecs";
                                    shio = shia + "33";
                                } else if (nopive == 1) {
                                    filtram = "no PV";
                                    errora(4000, 325, 80, "Vous etes en mode no PV<br>désactivez ce mode si vous voulez recevoir des mess.", 320);
                                    shio = shia + "11";
                                } else if (insolente) {
                                    filtram = "salon!";
                                    errora(4000, 325, 80, "Vous etes en mode pv des salons uniquement<br>désactivez ce mode si vous voulez recevoir des mess.", 320);
                                    shio = shia + "44";
                                }

                                if (shio != "000")
                                    setTimeout("agir('43" + shio + "')", 2500);

                                if (!fullopen)
                                    if ((mysex % 5) == 1)
                                        messig("Vous avez le bouclier activé. cela filtre vos contacts, attention");

                                document.getElementById("optg1").innerHTML = "&nbsp;" + filtram;
                            }

                    }

                }
                if (bud == 555) {

                    var lin = urlo.indexOf("`");

                    //var urlu=transformix(urlo.substring(5,urlo.length),-1,0);
                    var urlu = "";
                    if (lin > -1)
                        urlu = urlo.substring(5, lin) + transformix(urlo.substring(lin, urlo.length), -1, 0);
                    else
                        urlu = transformix(urlo.substring(5, urlo.length), -1, 0);
                    if (mystat > 4) {
                        var hsx = urlu.indexOf("salon:");
                        var jqp = parseInt(urlu.substring(hsx + 7, hsx + 10));
                        if (jqp > 99)
                            urlu = urlu.substring(0, hsx + 7) + "<span onclick=salongo(" + jqp + "); style='" + c16 + "cursor:pointer;'>" + allsalon[jqp] + "</span> " + urlu.substring(hsx + 10);

                        hsx = urlu.indexOf("Multi IP");
                        if (hsx > 0)
                            urlu = urlu.substring(0, hsx) + "<span onclick=agir('83415" + tabnickID[ongleto] + "'); style='" + c16 + "cursor:pointer;'>" + urlu.substring(hsx, hsx + 11) + "</span> " + urlu.substring(hsx + 11);

                        hsx = urlu.indexOf("+-+-,");
                        if (hsx > 0) {
                            var hsz = urlu.indexOf("<br>", hsx);
                            urlu = urlu.substring(0, hsx) + "<span onclick=agir('83289" + tabnickID[ongleto] + "'); style='" + c17 + "cursor:pointer;'>" + urlu.substring(hsx + 5, hsz) + "</span> " + urlu.substring(hsz);
                        }

                        var krl = 0;
                        hsx = urlu.indexOf("kz");
                        while (hsx > -1) {
                            var kkd = urlu.substring(hsx + 2, hsx + 5);
                            urlu = urlu.substring(0, hsx) + "<span onclick=agir(83" + kkd + tabnickID[ongleto] + "); style='" + c16 + "cursor:pointer;'>" + kkd + "</span> " + urlu.substring(hsx + 6);
                            hsx = urlu.indexOf("kz", hsx + 3);
                        }
                    }
                    tabmessage[ongleto] += "<span style='" + c12 + "'>" + urlu + "</span><br>";

                    ecritab("", ongleto);

                }
                if (bud == 333) {
                    var mxo = urlo.substring(5);
                    encoin(mxo);
                    var ssr = mxo.indexOf("st");
                    if ((ssr > -1) && (ssr < 6))
                        errora(4000, 300, 150, "il y a un Bug sur votre compte<br>envoyez un mail ? contact@coco.gg avec le code erreur suivant:<br>" + mxo, 280);

                }
                if (bud == 550) {
                    tabmessage[ongleto] += "<span style='" + c12 + "'>" + transformix(urlo.substring(5, urlo.length), -1, 0) + "</span><br>";
                    ecritab("", ongleto);
                }

                var buw = parseInt(urlo.substring(5, urlo.length));

                if (bud == 100) {
                    errora(4000, 300, 150, "vous devez attendre " + buw + " secondes avant de changer de salon", 180);
                }
                //if(bud==167)
                //errora(4000,300,150,"vous devez attendre "+buw+" minutes pour rentrer dans ce salon",180);

                if (bud == 173)
                    errora(1000, 300, 150, "vous devez attendre " + buw + " secondes pour voter", 180);
                if (bud == 174)
                    errora(1000, 300, 150, "quotat de vote dépassé", 180);
                if (bud == 300) {
                    errora(4000, 300, 150, "vous devez attendre " + buw + " secondes avant de créer un nouveau salon privé", 180);
                }

                if (bud == 888) {
                    if (mysalind > -1) {
                        tabmessage[mysalind] += "<br><br>Vous avez étés déconnectés du salon de discussion.<br>fermez cet onglet et ouvrez un nouvel onglet de salon";

                        ecritab("", ongleto);

                    }

                }

                if (bud == 147) {
                    infor = "" + (randum(890000000) + 100000001) + "" + (randum(890000000) + 100000001);
                    ecrire("samedi", infor);

                    //clearTimeout(stopserv);
                    errora(20000, 300, 50, "<br><br>Vous avez perdu votre profil car quelqu'un se connecte avec le meme profil sur un autre PC<br>si vous etes le propriétaire légitime de votre profil reconnectez vous en vue d'une authentification", 220);
                }

                if (bud == 148)
                    top.location = base + "payplainte.html?" + myavatar + "#" + urlo.substring(14);

                if (bud == 149)
                    top.location = urlo.substring(5);

                if (bud == 150) {
                    var vv3 = urlo.substring(5);
                    vv3 = ReplaceAll(vv3, "exclusion.html", "exclo.html");
                    top.location = base + vv3;
                }

                if (bud == 164) {
                    tuemoi(transformix(urlo.substring(5), -7, 0));
                    if (urlo.indexOf("permis") > -1) {
                        for (var i = 0; i < localStorage.length; i++) {
                            var keyoo = "" + localStorage.key(i);
                            if (keyoo.indexOf("tabus") > -1) {
                                localStorage.removeItem(localStorage.key(i));

                            }
                        }
                    }

                }
                if (bud == 165) {
                    errora(8000, 300, 50, "vous ne pouvez plus parler pendant : " + buw + " secondes (cause: flooding = trop de messages)", 220);
                    //tuemoi();
                }
                if (bud == 166) {
                    errora(3000, 300, 50, "vous devez attendre " + buw + " secondes avant envoi (bridage nouveaux arrivants,patience)", 220);
                }

                if (bud == 168) {
                    top.location = "http://www.moxt.com";
                }
                if (bud == 413) {
                    errora(4000, 300, 50, "vous avez été bannis de ce salon pour une durée de : " + buw + " secondes", 220);

                }

                if (bud == 801) {
                    errora(4000, 300, 150, "vous venez de vous faire bannir du salon", 180);
                }

            }

            if (olko == 92) {

                if (tentat < 10000) {
                    blax = 0;
                    microok = false;
                    dejapasse = false;
                    mygain = 0;
                    document.getElementById("special").innerHTML = "";
                    document.getElementById("special").zIndex = 0;

                    document.getElementById("hpx").innerHTML = "";
                    document.getElementById("hpx2").innerHTML = "";
                    document.getElementById("hpx3").innerHTML = "";
                    document.getElementById("hpx4").innerHTML = "";
                    document.getElementById("hpx5").innerHTML = "";
                    quinte = false;

                    if (micup > 0) {
                        try {
                            pmic.close();
                        } catch (gk7) {}
                        micup = 0;
                    }

                    var savoo = mysalon;
                    if (mysalind > -1) {
                        deletonglet(mysalind);

                    }
                    arivo = true;
                    mysalon = savoo;

                    voxeus = false;
                    document.getElementById("micstro").src = "";
                    if (mysaloname.indexOf('--') > 0) {

                        document.getElementById("voxz").innerHTML = "Kill";

                        if (true) //(mysalon==144)||(mysalon==149))
                        {

                            //var endf=mynickID+"' width=90px HEIGHT=40px FRAMEBORDER=0 style='position:absolute;top:0px;left:0;z-index:0;overflow:hidden;'></IFRAME>";
                            var if1 = 5;
                            var if2 = 5;
                            if (isMobileiOS) {
                                if1 = 90;
                                if2 = 40;
                            }
                            hpff = "<IFRAME id=hpsal src='" + base + "newaud/microsalon.html?salon=" + mysalon + "" + mynickID + "' width=" + if1 + "px HEIGHT=" + if2 + "px FRAMEBORDER=0 style='position:absolute;top:0px;left:0;z-index:0;overflow:hidden;background-color:transparent;'></IFRAME>";
                            document.getElementById("hpx").innerHTML = hpff;

                            if (mysaloname.indexOf('-3') > 0) {
                                quinte = true;

                                //document.getElementById("hpx2").innerHTML=debf+"1"+endf;
                                //document.getElementById("hpx3").innerHTML=debf+"2"+endf;					
                                activox(0);
                            }
                            if (mysaloname.indexOf('-4') > 0) {
                                quinte = true;
                                //document.getElementById("hpx2").innerHTML=debf+"1"+endf;
                                //document.getElementById("hpx3").innerHTML=debf+"2"+endf;
                                //document.getElementById("hpx4").innerHTML=debf+"3"+endf;				
                                activox(0);
                            }
                            if (mysaloname.indexOf('-5') > 0) {
                                quinte = true;
                                //mutemic=true;
                                //document.getElementById("hpx2").innerHTML=debf+"1"+endf;
                                //document.getElementById("hpx3").innerHTML=debf+"2"+endf;
                                //document.getElementById("hpx4").innerHTML=debf+"3"+endf;
                                //document.getElementById("hpx5").innerHTML=debf+"4"+endf;
                                activox(0);
                            }
                        }

                        voxeus = true;
                        document.getElementById("voxi").style.visibility = "visible";

                        voxtimer();

                        if (ie6)
                            setTimeout("errora(5000,150,150,'Pour pouvoir entendre le son , vous devez utiliser Chrome, Firefox, Edge ou Cent Browser par exemple',320)", 200);

                        //alert("eeee "+lowagent);
                        //messig("Pour pouvoir entendre le son , vous devez utiliser Chrome, Firefox, Edge ou Cent Browser par exemple");

                    } else {

                        document.getElementById("hpx").innerHTML = "";
                        document.getElementById("hpx2").innerHTML = "";
                        document.getElementById("hpx3").innerHTML = "";
                        document.getElementById("hpx4").innerHTML = "";
                        document.getElementById("hpx5").innerHTML = "";
                        document.getElementById("voxi").style.visibility = "hidden";
                    }

                    larzone = widx - 67;
                    if (voxeus)
                        larzone = widx - 220;

                    if (contor < 700)
                        document.getElementById("cocoa").style.width = larzone;

                    solicited = true;
                    creatab(mysaloname, mysalon, 0, 0, mysalon, 0, 0);

                    document.getElementById("questi").innerHTML = "";
                } else
                    tentat = 0;

            }
            else if (olko == 37) {
                autox = 500;
                document.getElementById("babar").innerHTML = "";
                errora(5000, 150, 180, "<br>Authentification réussie<br>Bon Tchat", 350);
                myver = 1;
            }

            if (olko == 29) {
                if (mypass.length != 20) {
                    mypass = urlo.substring(2);
                    infor = "" + myavatar + "" + mypass;
                    ecrire("samedi", infor);

                }
            }
            else if (olko == 31) {/*
			var nbx=urlo.substring(2);
			if(nbx>0)
			{
			document.getElementById("blogo").innerHTML="Blog : "+nbx+" &laquo;";
			document.getElementById("blogo").style.visibility="visible";
			}
			*/
            }

            if (olko == 39) {
                var diagnu = urlo.substring(2);
                if (diagnu.lastIndexOf("#") < 5) {

                    infor = "NOUVEAU";

                    ecrire("samedi", infor);

                    //alert("efg "+ggg);

                    setTimeout("tuemoi('bug sur cookie. " + diagnu + " . passez le logiciel Malware bytes votre pc a surement des virus')", 1500);
                } else
                    tuemoi("bug reconnectez vous");

            }

            if (olko == 95) {

                var yon = urlo.indexOf("@", 0);
                var lengus = urlo.length;
                var phraz = urlo.substring(2, yon);

                if (focuz) {
                    raz();
                }

                var kopo = 0;
                var thc = 0;
                var kopi = 0;
                var pseuz = "";
                var messiz = "";
                var messaz = "";
                var expoz = "";

                pubad++;
                if (pubad > 250)
                    pubad = 0;

                if (pubad == 90) {//descendo(); pause
                }

                kopi = phraz.indexOf('#', thc);
                kopo = phraz.indexOf('#', kopi + 1);
                while (kopo > 0) {

                    var xog = -1;
                    var exto = "";

                    //else
                    if (true) {

                        pseuz = phraz.substring(thc + 17, kopi);
                        messaz = phraz.substring(kopi + 2, kopo);

                        var nivx = parseInt(phraz.substring(thc + 14, thc + 15));
                        var statx = parseInt(phraz.substring(thc + 15, thc + 16));
                        var verx = parseInt(phraz.substring(thc + 16, thc + 17));
                        var infx = phraz.substring(thc, thc + 17);

                        if (mysalind > -1)
                            xog = statx;

                        messiz = transformix(messaz, tabnickID[mysalind], verx, statx);
                        if ((pseuz.indexOf("(") > -1) || (pseuz.indexOf(")") > -1))
                            pseuz = pseuz.substring(0, pseuz.length - 3);

                        infx += pseuz;

                        expoz = "<SUP>" + nivx + "</SUP>";
                        if (expoz.indexOf('0') != -1)
                            expoz = "";

                        var normalo = 0;

                        var forbi = messiz.indexOf('@');
                        if (forbi > -1) {
                            messiz = "coco --";
                            //if(pseuz.indexOf(mynickname)==-1)
                            //normalo=1;
                        }

                        var moodz = messiz.indexOf('-1-');

                        if (moodz > -1) {

                            if (((nivx > 3) && (moodz < (nivx + 1))) || (nivx == 9)) {
                                if (moodz > 1)
                                    expoz = "<SUP>" + messiz.substring(0, moodz) + "</SUP>";
                                messiz = messiz.substring(moodz + 3, messiz.length);
                            }

                        }

                        var hys = messaz.indexOf("&E");
                        if (hys > -1) {
                            //alert('eeee');
                            tabmessage[mysalind] += "<span>" + messaz.substring(hys + 2) + "</span><br>";
                            normalo = 1;
                        }

                        if (messiz.indexOf("{") > -1) {

                            var sondo = messiz.indexOf('{pp');
                            if (sondo > -1) {
                                normalo = 1;
                                messiz = transformix(messiz, -7, 0);
                                var qz1 = messiz.indexOf("_");
                                var xz1 = messiz.substring(sondo + 3, qz1);
                                var oldqz1 = qz1;
                                qz1 = messiz.indexOf("_", qz1 + 1);
                                var cco = 0;
                                while (qz1 > -1) {
                                    xz1 += divon(y, 10, 40 + cco * 35, y, 25, "eeeeff", "z-index:10;'", messiz.substring(oldqz1 + 1, qz1));
                                    oldqz1 = qz1;
                                    qz1 = messiz.indexOf("_", qz1 + 1);

                                    cco++;
                                }

                                disp(-1, 150, 180, xz1 + "<br><br><br><br><br>", 350, -1, "E69E9E", false, true);

                            }
                            var messart = messiz.indexOf('{bb');
                            if (messart > -1) {
                                messiz = messiz.replace("{bb", " ");
                                tabmessage[mysalind] += "<span style='" + c12 + "'>" + pseuz + messiz + "</span><br>";
                                normalo = 1;
                            }

                            var mimiz = messiz.indexOf('{4{');
                            if (mimiz > -1) {
                                var mwu = messaz.indexOf("*");
                                messaz = "_2" + messaz.substring(mimiz + 3, mwu);
                                //+messiz.substring(mwu+1,mwu+5);
                                messiz = transformix(messaz, -23, 0);
                            }

                            var mequiz = messiz.indexOf('{qu');
                            if (mequiz > -1) {

                                var messo = messiz.indexOf('{8{');

                                if (messo > -1) {

                                    reponsu = messiz.substring(messo + 3, messiz.length);
                                    messiz = messiz.substring(0, messo);
                                }

                                timquest = timz1;
                                var largj = 900;
                                var hautj = 700;
                                //document.getElementById("questi").style.zIndex=50;
                                kezako = messiz.substring(3, messiz.length);
                                document.getElementById("questi").innerHTML = "<div style='position:absolute;font-size:11;line-height:0.95em;background-color:ffffff;padding:4;'>" + kezako + "</div>";

                                normalo = 1;
                            }
                        }

                        if (messiz.indexOf('<img src=emot/pho') > -1) {
                            exto = messiz;
                            messiz = ".........";
                        }

                        if ((pseuz.indexOf(mynickname) > -1) || (messiz.toLowerCase().indexOf(mylownick) > -1)) {

                            messiz = "<b>" + messiz + "</b>";
                            document.getElementById(tabdiva[mysalind]).style.backgroundColor = "ffffff";
                        }

                        if (normalo == 0) {

                            var mycol = phraz.substring(kopi + 1, kopi + 2);
                            var mycal = mycol.charCodeAt(0) - 65;
                            if ((mycal < 0) || (mycal > 16)) {
                                mycol = "A";
                                mycal = 0;
                            }

                            if (messiz.indexOf("rencontreici.com") > -1)
                                messiz = "aa";
                            else if (messiz.indexOf("rencontreici.com") > -1)
                                messiz = "aa";

                            if (!tablet)
                                tabmessage[mysalind] += "<span id=tx" + blix + " class='blanco' onmousedown=righty(event," + blix + "); onmouseup=clicum(" + blix + ");><span style='" + c11 + "'>" + pseuz + expoz + ": </span><span style='" + spn + "color:#" + salcoul[mycal] + ";'  >" + messiz + "</span></span>" + exto + "<br>";
                            else
                                tabmessage[mysalind] += "<span ><span id=tx" + blix + " style='" + c11 + "' " + start1 + "='pvga(" + blix + ");' " + end1 + "=if((mini-pvgo)<3){pvgo=0;cancelo(event);clicum(" + blix + ");this.style.backgroundColor=highlit;eteindre(" + blix + ");}>" + pseuz + expoz + ": </span><span style='" + spn + "color:#" + salcoul[mycal] + ";'  >" + messiz + "</span></span>" + exto + "<br>";
                            //alert(blix);
                            correspo[blix] = infx;
                            blix++;
                            if (blix > 800)
                                blix = 0;
                        }

                    }
                    thc = kopo + 1;
                    kopi = phraz.indexOf('#', kopo + 1);
                    if (kopi > 0)
                        kopo = phraz.indexOf('#', kopi + 1);
                    else
                        kopo = -1;
                }

                if (mysalind > -1) {
                    var mokp = tabmessage[mysalind];
                    if (mokp.length > 50000) {
                        if (stopdef == 0) {
                            var indx = 0;

                            if (histu > 0) {
                                var ddg = mokp.lastIndexOf('lick=histo');
                                indx = ddg - 9;
                                tabmessage[mysalind] = mokp.substring(indx);
                                histu = 0;

                            } else {
                                for (i = 0; i < 30; i++) {
                                    indx = mokp.indexOf('<span id=tx', (indx + 1));
                                }

                                for (i = 3; i > 0; i--)
                                    hista[i] = hista[i - 1];
                                hista[0] = mokp.substring(0, indx);
                                tabmessage[mysalind] = pluso + mokp.substring(indx);
                            }

                        }

                    }
                }

                if (ongleto == mysalind) {
                    document.getElementById("textum").innerHTML = tabmessage[mysalind] + "<br>";

                    if (stopdef == 0) {
                        scrolly();
                    } else {
                        //stopdef--;
                        if (stopdef < 0)
                            stopdef = 0;

                        var modiv = document.getElementById("textum");
                        var sumi = modiv.offsetHeight + modiv.scrollTop - modiv.scrollHeight;
                        if (sumi > -30) {
                            scrallo();
                        }
                        //messig(sumi);

                    }
                }

                if (lengus > (yon + 4)) {
                    olko = 66;
                    urlo = urlo.substring(yon + 1);

                }
                if (blax == 1) {
                    blax = 0;
                    if ((blex < blix) && (ongleto == mysalind))
                        document.getElementById("tx" + blex).style.backgroundColor = highlit;

                } else
                    blex = blix;

            }

            if (olko == 19)
                demelux(urlo.substring(2));

            if (olko == 24) {
                var fhl = "";
                var kk = 0;
                var qqb = 2;
                var stk = urlo.indexOf("*", qqb);
                var stavox = "Mic On";

                presso = 25;
                if (microok)
                    if (dejapasse)
                        if (redemp > timz1)
                            mygain = 0;
                if (stk > 0) {

                    var preza = false;
                    onthelist = false;
                    while (stk > 0) {

                        vox[kk] = urlo.substring(qqb, 6 + qqb);
                        voxhp[kk] = urlo.substring(6 + qqb, 7 + qqb);
                        voxmic[kk] = urlo.substring(7 + qqb, 8 + qqb);
                        voxnam[kk] = urlo.substring(8 + qqb, stk);
                        if (voxnam[kk].length < 2)
                            voxnam[kk] = "test";

                        if (vox[kk] == mynickID) {
                            if (!dejapasse) {
                                dejapasse = true;
                                redemp = timz1 + 25;
                            }
                            preza = true;
                            onthelist = true;

                            mygain = voxhp[kk] + voxmic[kk];
                            oldgain = mygain;

                            if (quinte) {
                                if (voxnam[kk].indexOf("#") == -1)
                                    mygain = 0;
                            } else if (kk != 0)
                                mygain = 0;

                        }

                        var vioz = "";
                        if (quinte) {
                            if (voxnam[kk].indexOf("#") > -1) {
                                voxnam[kk] = voxnam[kk].substring(0, voxnam[kk].length - 1);
                                vioz = "color:#cc00cc;";
                            }
                        }

                        var dbxx = "agir('93" + vox[kk] + "');";
                        if (tablet)
                            dbxx = "prevota('" + kk + "','" + voxnam[kk] + "');";
                        //dbxx="citer('"+voxnam[kk]+"');";

                        if (mystat > 5)
                            fhl += divo(y, 0, kk * 15 + yfont, y, y, y, "'", "<div onmousedown=volx(event," + kk + ",10); style='position:absolute;left:1px;'>" + voxhp[kk] + "</div><div onmousedown=volx(event," + kk + ",1); style='position:absolute;left:9px;color:#cc0000;'>" + voxmic[kk] + "</div><div ondblclick=agir('93" + vox[kk] + "'); onmousedown=killus(event," + kk + "); style='position:absolute;left:22px;" + vioz + "'>" + voxnam[kk] + "</div>");
                        else
                            fhl += divo(y, 3, kk * 15 + yfont, y, y, y, vioz + "' ondblclick=" + dbxx + " onmouseup=killus(event," + kk + ");", voxnam[kk]);

                        qqb = stk + 1;
                        stk = urlo.indexOf("*", qqb);
                        kk++;
                    }
                    if (!onthelist)
                        mygain = 0;
                    if ((preza) && (kk > 0)) {
                        presso = 28;
                        stavox = "Mic Off";
                    }

                    for (i = 0; i < 5; i++) {
                        //strima[i]=vox[i]+voxhp[i];	 11 dec 18
                        strima[i] = voxhp[i] + voxmic[i];
                    }

                    if (vox[0] == mynickID) {
                        stavox = "Speaking";
                    }

                    var lsl = urlo.indexOf("@");
                    if (lsl > -1)
                        stavox = urlo.substring(lsl - 2, lsl);

                } else
                    for (i = 0; i < 5; i++)
                        strima[i] = 0;

                document.getElementById("voxo").innerHTML = stavox;
                document.getElementById("voxa").innerHTML = fhl;
            }

            if (olko == 90) {
                document.getElementById("babar").innerHTML = "";
                var yyg = (urlo.length - 2) / 7;
                var qqb;
                var qqk;

                if (yyg > 0) {
                    for (i = 0; i < yyg; i++) {

                        qqb = parseInt(urlo.substring(2 + 7 * i, 3 + 7 * i));
                        qqk = parseInt(urlo.substring(3 + 7 * i, 9 + 7 * i), 10);

                        for (j = 0; j < currentab; j++) {
                            if (tabnickID[j] == qqk) {
                                if (qqb == 0) {
                                    tabcoul[j] = "505064";
                                    document.getElementById(tabdiva[j]).style.backgroundColor = tabcoul[j];

                                } else {
                                    if (tabcoul[j].indexOf("505064") > -1) {
                                        tabcoul[j] = colotab[1];
                                        document.getElementById(tabdiva[j]).style.backgroundColor = tabcoul[j];
                                    }
                                }

                            }
                        }

                        if (qqb == 0) {
                            for (j = 0; j < ffID.length; j++) {
                                if (ffID[j] == qqk) {
                                    ffage[j] = 99;

                                }
                            }
                        }

                    }

                }

            }
            else if (olko == 94) {

                exige("Cet utilisateur exige que vous soyez authentifié (processus totalement gratuit)");
                olko = 967;
            }
            else if (olko == 98) {

                if (taboqp[ongleto] == 0) {
                    document.getElementById("nopvs").innerHTML = "No PV";
                    document.getElementById("nopvs").style.visibility = "visible";
                }

                taboqp[ongleto] = 1;

                //olko=urlo.substring(0,2);
                olko = 967;

            }
            else if (olko == 96) {

                if (taboqp[ongleto] == 0) {
                    document.getElementById("nopvs").innerHTML = "No Mecs";
                    document.getElementById("nopvs").style.visibility = "visible";
                }
                taboqp[ongleto] = 2;
                olko = 967;
                //olko=96;

            }
            else if (olko == 97) {

                olko = 967;

                if (taboqp[ongleto] > 0) {
                    document.getElementById("nopvs").style.visibility = "hidden";
                }
                taboqp[ongleto] = 0;

            }
            else if (olko == 66) {

                olko = 967;

            }
            else if (olko == 48) {

                populate(ffage, ffsex, ffcity, ffID, ffnom, ffniv, ffstat, ffok, urlo, 0);

                amiga();

            }

            if (olko == 967) {

                //alert(urlu);
                hzq = 3;
                //var hzy=urlo.indexOf('#',0);
                var klk = parseInt(urlo.substring(2, 3));
                if (klk < 9) {
                    var hxz = roulux[klk];
                    tabmessage[hxz] += "<span class='c4'>" + mynickname + ": </span>" + roulax[klk] + "<br>";

                    if (tabdeja[hxz] == 1)
                        tabdeja[hxz] = 3;
                    else if (tabdeja[hxz] < 3)
                        tabdeja[hxz] = 2;

                    if (tabdeja[hxz] == 3)
                        localo(hxz);

                    if (hxz == ongleto) {
                        ecritab("", ongleto);
                    }
                }
                //urlo=urlo.substring(hzq+1,urlo.length);
                var lengus = urlo.length;

                if (lengus > 8) {
                    var kopo = 0;
                    var gooi = true;
                    var coom = 0;
                    while (kopo == 0) {

                        var diase = urlo.indexOf('#', hzq) + 1;

                        var diaseo = diase - hzq;
                        if (diaseo < 15) {
                            if (diase < 3) {

                                kopo = 1;
                                var idgars = parseInt(urlo.substring(hzq, 6 + hzq));
                                for (i = 0; i < currentab; i++) {
                                    if (idgars == tabnickID[i]) {

                                        tabmessage[i] += "<span style='" + c15 + "'>System Info : Cet utilisateur est deconnecté</span><br>";

                                        ecritab("", ongleto);

                                    }
                                }

                            } else {

                                zami = parseInt(urlo.substring(hzq, hzq + 6));

                                if (diaseo > 10) //vot
                                {

                                    var picid = urlo.substring(hzq, hzq + 9);
                                    var bbp = "b" + picid;
                                    var qky = document.getElementById(bbp);
                                    if (qky !== null) {
                                        var chiffro = urlo.substring(hzq + 11, hzq + 13);
                                        var nbbv = parseInt(urlo.substring(hzq + 9, hzq + 11)) - 10;
                                        if (chiffro.length > 1) {
                                            var vott = parseInt(chiffro);
                                            vott = parseInt((vott + 5) / 10);

                                            qky.innerHTML = "" + vott;
                                            var vvvx = 13 + parseInt(nbbv / 2);
                                            qky.style.fontSize = (vvvx) + "px";
                                            qky.style.backgroundColor = "#" + coulvo[vott];
                                            qky.style.visibility = "visible";
                                            qky.style.maxWidth = parseInt(urlo.substring(hzq + 9, hzq + 13));
                                            //var ddk=(""+qky.style.maxWidth).substring(0,4);
                                            //messig(qky.style.maxWidth);

                                            /*
								var ddk1=parseInt(ddk.substring(2,4));
								ddk1=parseInt((ddk1+4)/10);
								
								var torep=ddk+";visibility:hidden;;' id="+bbp+">"+ddk1;
								//alert(tabmessage[mysalind].indexOf(torep)+" "+torep);
								//tabmessage[mysalind]=tabmessage[mysalind].replace(torep,urlo.substring(hzq+9,hzq+13)+";visibility:visible;' id="+bbp+">"+vott);
								*/
                                            //var gg4=document.getElementById("textum").innerHTML;
                                            //tabmessage[mysalind]=gg4.substring(0,gg4.length-4);
                                            var uu7 = tabmessage[mysalind].indexOf("<div id=" + bbp);
                                            var uu8 = tabmessage[mysalind].indexOf("</di", uu7 + 30);

                                            tabmessage[mysalind] = tabmessage[mysalind].substring(0, uu7) + "<div id=b" + picid + " onclick=extovo(this.style.maxWidth," + picid + "); style='position:relative;top:-5px;left:3px;background-color:#" + coulvo[vott] + ";padding:2px;display:inline-block;min-width:14px;text-align:center;border-radius:3px;max-width:" + urlo.substring(hzq + 9, hzq + 13) + ";font-size:" + vvvx + "px;'>" + vott + "</div>" + tabmessage[mysalind].substring(uu8 + 6, tabmessage[mysalind].length);

                                        }
                                        //tabmessage[mysalind]=document.getElementById("textum").innerHTML;

                                    }
                                    //else
                                    //alert("nullos"+diaseo+ "  "+urlo.substring(hzq,diase));

                                } else {
                                    var jjp = reconglet(zami);
                                    if (jjp > -1) {

                                        if (diaseo == 7) {
                                            if (tabcoul[jjp].indexOf(colotab[1]) > -1) {
                                                tabcoul[jjp] = colotab[5];
                                                document.getElementById(tabdiva[jjp]).style.backgroundColor = colotab[5];
                                            }
                                            if (jjp == ongleto) {

                                                document.getElementById("ecrito").style.visibility = "visible";
                                            }
                                            //encoin("entrant"+zami);
                                        } else if (diaseo == 8) {
                                            if (tabcoul[jjp].indexOf(colotab[2]) == -1) {
                                                tabcoul[jjp] = colotab[1];
                                                document.getElementById(tabdiva[jjp]).style.backgroundColor = tabcoul[jjp];
                                            }
                                            if (jjp == ongleto)
                                                document.getElementById("ecrito").style.visibility = "hidden";
                                        }

                                    }
                                }

                            }

                        } else {

                            var toilo = urlo.indexOf("*", hzq);
                            var moknickID;
                            var mokage;
                            var moksex;
                            var mokville;

                            var mokpseudo;

                            toilo = urlo.indexOf("#", hzq);
                            mokage = parseInt(urlo.substring(hzq, 2 + hzq));
                            moksex = parseInt(urlo.substring(2 + hzq, 3 + hzq));
                            mokville = parseInt(urlo.substring(3 + hzq, 8 + hzq), 10);
                            moknickID = parseInt(urlo.substring(8 + hzq, 14 + hzq));

                            var statq = parseInt(urlo.substring(15 + hzq, 16 + hzq));
                            var okb = parseInt(urlo.substring(16 + hzq, 17 + hzq));
                            mokpseudo = urlo.substring(17 + hzq, toilo);
                            // on saute 2 pour l experience et le statut

                            diase = urlo.indexOf("#", toilo + 1) + 1;

                            var mokmess = urlo.substring(toilo + 1, diase - 1);

                            var acti = mokmess.indexOf('[AX');
                            if (acti > -1) {
                                acto(mokmess.substring(acti + 3, acti + 4));
                            }

                            for (i = 0; i < ignora.length; i++) {
                                if (moknickID == ignora[i])
                                    gooi = false;

                            }

                            if (neutri == 1) {
                                var namew = mokpseudo.toLowerCase();
                                for (k = 0; k < nonp.length; k++) {
                                    if (namew.indexOf(nonp[k]) > -1)
                                        gooi = false;
                                }
                            }

                            if (gooi)
                                incomingmessage(moknickID, mokage, moksex, mokville, mokpseudo, mokmess, statq, okb);
                        }
                        hzq = diase;
                        if (hzq > lengus - 3)
                            kopo = 1;

                    }

                } else {

                    if (lengus == 5) {
                        if (urlo.indexOf("111") > -1)
                            tuemoi("redemarrage des serveurs reconnectez vous dans quelques instants");
                    }

                }

            }

        }
        if (todo.length > 0) {
            process1(todo);
        }
    } catch (xfx) {}
}

function pvga(bloox) {
    pvgo = mini;

    setTimeout("pvgu('" + bloox + "')", 250);

}
function pvgu(blaax) {
    if (pvgo != 0)
        opensal(blaax);
}

function zauth(maki) {
    var hhu = "Derni?re étape Auth Tel:<br>Veuillez cliquez sur la question de sécurité ? laquelle vous souhaitez répondre<br><br><br><br><br><br><br><br><br><br>";
    var endo = 0;
    var debuto = 5;
    var kmk;
    var chiz = maki.substring(4, 5);
    //alert(chiz);
    var lakest = "";
    for (i = 0; i < 4; i++) {
        endo = maki.indexOf("--", debuto);
        kmk = maki.substring(debuto, endo) + " ?";
        kmk = ReplaceAll(kmk, " ", "&nbsp;");
        if (chiz == i)
            lakest = kmk;
        hhu += "<div onclick=fintel('" + kmk + "'," + i + "); onmouseover=this.style.color='red' onmouseout=this.style.color='black' style='position:absolute;left:10px;top:" + (75 + 30 * i) + "px;background-color:#E3AEAE;color:#000000;cursor:pointer;'>" + kmk + "</div>";
        debuto = endo + 2;
    }
    if (chiz != 9) {
        shosho = "xxxx9" + maki.substring(5);
        hhu = "Récupération ancien profil<br><br>" + lakest + "<br><br><br><br><br><br><br><br><br><br>" + divon(y, 80, 210, y, y, "dddddd", "padding:2px;' onclick=newtel();", "autres options");
        hhu += "<br><input id=questrecup type=text MAXLENGTH=25 onmousedown=nofocus() onkeypress='return checar(event)' style='position:absolute;top:75;left:10;width:300;' />" + divon(y, 325, 75, 60, 25, "ffffff", "padding:2px;' onclick=recuptel(" + chiz + ");", "Envoyer");

    }

    errora(50000, 200, 150, hhu, 430);

}

function newtel() {
    var hhj = "Si vous souhaitez authentifier votre profil actuel avec ce numéro sans récupérer l ancien profil cliquez ici.<br><br>Attention en authentifiant ce profil vous ne pourrez plus récupérer l'ancien compte<br><br><input type=button value='auth profil actuel' onclick=zauth(shosho);>";
    errora(40000, 200, 150, hhj, 430);
}

function fintel(qq1, qq2) {
    errora(40000, 200, 150, qq1 + "<br><br><br><br><br><br><input id=questel type=text MAXLENGTH=25 onmousedown=nofocus() onkeypress='return checar(event)' style='position:absolute;top:60px;left:10px;width:200px;'/>" + divon(y, 225, 60, 60, 25, "ffffff", "padding:2px;' onclick=envoitel(" + qq2 + ");", "Envoyer"), 320);
}

function envoitel(kk1) {
    var xux = document.getElementById("questel").value;
    if (!ieall)
        xux = noaccent(xux);
    xux = xux.toLowerCase();
    xux = ReplaceAll(xux, " ", "-");
    if (xux.lastIndexOf("-") == xux.length - 1)
        xux = xux.substring(0, xux.length - 1);
    if (xux.length > 4) {
        messig("Patientez");
        agir("77606" + kk1 + xux);
    } else
        alert("mot de passe trop court");
}

function recuptel(kk1) {
    var xux = document.getElementById("questrecup").value;
    if (!ieall)
        xux = noaccent(xux);
    xux = xux.toLowerCase();

    xux = ReplaceAll(xux, " ", "-");
    messig("Patientez");
    agir("77607" + kk1 + xux);
}

function amiga() {
    var prix = new Array();
    var prox = new Array();

    var stow = "";
    var stom = "";

    /*
if(mystat==9)
{
	var kmu="";
	for (i=0; i<ffID.length; i++)
	kmu+=ffnom[i];
	alert(kmu);
}
*/

    var xx1 = 0;
    var xx2 = 0;
    for (i = 0; i < ffID.length; i++) {

        if (ffage[i] > 95) {
            prox[xx1] = i;
            xx1++;
            ;
        } else {
            prix[xx2] = i;
            xx2++;
        }

    }
    var incr = 0

    for (i = 0; i < prix.length; i++) {
        if (timz1 < 20)
            stom += "<a onclick=openbis(" + prix[i] + "); " + onmousy("ee0000", darko) + ">" + ffnom[prix[i]] + "</a> ";
        stow += divo(y, 26, incr * 15 + 2, y, y, y, "' onmousedown=openbis(" + prix[i] + "); " + roug, ffnom[prix[i]]);

        stow += divo(y, 3, incr * 15 + 2, y, y, y, "' onmousedown=deletami('" + ffnom[prix[i]] + "');", "x");

        incr++;
    }
    if (timz1 < 20)
        document.getElementById("babar").innerHTML = stom;

    for (i = 0; i < prox.length; i++) {
        stow += divo(y, 26, incr * 15 + 2, y, y, y, "color:#888888;'", ffnom[prox[i]]);

        stow += divo(y, 13, incr * 15 + 2, y, y, y, "color:#888888;' " + gris + " onmousedown=setTimeout(\"messamiz('" + ffnom[prox[i]] + "')\",100);", "@");
        stow += divo(y, 3, incr * 15 + 2, y, y, y, "color:#888888;' " + gris + " onmousedown=deletami('" + ffnom[prox[i]] + "');", "x");

        incr++;
    }

    listam = divo(y, y, y, 170, 269, y, "margin:-10px;' onmousedown=disparu();", stow);

}

function populate(batage, batsex, batcity, batID, batnom, batniv, batstat, batok, urlo, offsat) {
    var indux = 0;
    var mopo = 0;
    var hzy = 2;

    var ggg = offsat;
    if (urlo.length > 12) {
        while (mopo < 1) {

            indux = urlo.indexOf("#", hzy);
            if (indux < 0) {
                mopo = 2;
            } else {

                batage[ggg] = parseInt(urlo.substring(hzy, 2 + hzy));
                batsex[ggg] = parseInt(urlo.substring(2 + hzy, 3 + hzy));
                batcity[ggg] = parseInt(urlo.substring(3 + hzy, 8 + hzy), 10);
                batID[ggg] = parseInt(urlo.substring(8 + hzy, 14 + hzy));
                batnom[ggg] = urlo.substring(17 + hzy, indux);
                batniv[ggg] = parseInt(urlo.substring(14 + hzy, 15 + hzy));
                batstat[ggg] = urlo.substring(15 + hzy, 16 + hzy);
                batok[ggg] = parseInt(urlo.substring(16 + hzy, 17 + hzy));

                if (batID[ggg] == mynickID) {

                    if (batage[ggg] < 99) {

                        myXP = batniv[ggg];
                        myver = batok[ggg];
                    }

                    if (finito == 1) {
                        if ((myver < 0) && (myXP > 2))
                            autbar(4);

                        finito = 2;
                    }
                }

                hzy = indux + 1;

                ggg++;

            }

        }
    }
    batage.length = ggg;
    batsex.length = ggg;
    batcity.length = ggg;
    batID.length = ggg;
    batnom.length = ggg;
    batniv.length = ggg;
    batstat.length = ggg;

}

function cuoro(xin) {
    if (xin == "1")
        messig("fille OK!");
    if (xin == "3")
        messig("Clasheur DeLuxe");
    if (xin == "4")
        messig("Légende de Coco");
    if (xin == "2")
        messig("Sentinelle de Coco");

    if (xin == "6")
        messig("opérateur");
    if (xin == "7")
        messig("OP sup");
    if (xin == "A")
        messig("chef OP");
    if (xin == "8")
        messig("master OP");
}

function lancetimer() {

    clearTimeout(stopserv);

    timz1++;

    //if((timz1%8)==7)
    //agix("http://178.32.124.242/testing-"+randum(100000),4);

    if (myblog.length > 4)
        if (timz1 == 4)
            agix("http://blog.coco.gg/31" + myblog + "?poll:" + myavatar + "" + mynickID + "" + monpass, 4);

    if ((timz1 == 360) && (mysalind > -1))
        testpreview = true;

    else if (timz1 == 660)
        testpreview = false;
    else if (timz1 == 220)
        document.getElementById('webapp').style.display = "none";

    if (finito > 0) {
        if (camon == 95) {
            typcam = "";

        }
        var suco2 = Math.floor(Date.now() / 1000);
        var sucond = suco2 - lastpol;

        if (!((tabnickID[ongleto] < 1000) && (timz1 % 4 != 0) && (sucond < 10)))
            agir(camon + typcam);

        lastpol = suco2;
    }

    if (camex > 0) {
        if (pcam.closed) {
            camex = 0;

            camon = "95";
            //agir("73");

        }
    }

    if ((timz1 % 1200) == 1199)
        htmtidy();

    if ((timz1 == 20)) {
        if (mypass.length != 20)
            agir("29");
    }
    if ((timz1 % 420) == 258) {

        adroll(0);
    }

    if (tabnickID[mysalind] == 101) {
        if ((timquest + 28) == timz1) {
            document.getElementById("questi").style.zIndex = 0;
            tabmessage[mysalind] += "<span style='" + c13 + "'>la réponse était :</span><span style='" + c14 + "'>" + reponsu + " </span><br><span style='" + c13 + "'>? la question :</span><span style='" + c13 + "'>" + kezako + "</span><br>";

            if (ongleto == mysalind) {
                ecritab("", ongleto);

            }
        }
        if (((timquest + 28) > timz1) && (tabnickID[ongleto] == 101)) {
            document.getElementById("questi").style.zIndex = 150;
        }

    }

    if ((timz1 % 160) == 39) {
        setTimeout("kiestmort()", 2500);
    }
    if ((timz1 % 160) == 38) {
        setTimeout("actuam()", 2500);
    }

    if ((timz1 % 28) == 9) {
        if (rechrech)
            setTimeout("searchnow()", 50);
        else
            rechrech = true;
    }
    if ((timz1 % 28) == 8)
        setTimeout("cherchasalon()", 1500);

    stopserv = setTimeout("lancetimer()", 1000);
    timex += 1;

}

function kiestmort() {
    var cck = "";
    for (i = 0; i < currentab; i++) {
        if ((i < 30) && (tabnickID[i] > 1000)) {
            cck += tabnickID[i];

        }
    }

    for (i = 0; i < ffID.length; i++) {
        if (ffage[i] < 95)
            cck += ffID[i];
    }

    agir("90" + cck);
}

function oppop(szs) {
    var pp2 = prefix + "://" + szs;
    //var pp2="http://"+szs;

    if ((popi.closed) || (popi == -8))
        popi = window.open(pp2, 'aaa5', 'status=yes,toolbar=no,location=yes,scrollbars=yes,resizable=yes,width=1490,height=900');
    else
        popi.focus();
    /*
  setTimeout(function() {
    if(document.hasFocus()) {
      popi.close();
     popi=window.open(pp2,'aaa5','status=yes,toolbar=no,location=yes,scrollbars=yes,resizable=yes,width=1490,height=900');
    }
  }, 1);	
  */

}

function tuemoi(fqo) {
    clearTimeout(stopserv);

    setTimeout("tue2('" + fqo + "')", 1500);

}
function tue2(slp) {

    document.body.style.backgroundColor = "#dca";
    document.body.innerHTML = "<br><br><br><br>" + slp + "<br><br>reconnectez vous sur <a href='" + base + "' target='_self'>" + mydom + "</a>";
}

function autamail(oez) {
    var demail = document.getElementById("autamailu").value.toLowerCase();
    demail = demail.replace(/\s/g, '');
    if (demail.indexOf("yopm") == -1) {

        agir("32" + oez + demail);
        disparu();

        //if(demail.indexOf("free.fr")>-1)
        //setTimeout("mailacoda()",3000);
        if (demail.indexOf("zacou@") > -1)
            setTimeout("mailacoda()", 2000);

    } else
        messig("vous étiez sur le point de vous faire subtiliser votre compte avec yopmail. ne soyez pas naifs !");
}

function mailacoda() {
    var ff55 = document.getElementById("overy").innerHTML;
    if (ff55.indexOf("minute") == -1)
        errora(-1, 100, 150, "Pour recuperer votre compte<br><br>entrez le code ? 6 lettres (avec majuscule et minuscule)<br>que vous avez recu sur votre mail<br><input id=codamail type=text MAXLENGTH=6 autocomplete='off' onmousedown=nofocus(); style='position:absolute;user-select: none;top:115px;left:230px;heigth:24px;width:70px;font-size:18px;font-weight:bold;background-color:#fff;border-radius:5px;border:1px solid #000;padding:3px;'><br>" + divon(y, 245, 155, 60, 25, "ffffff", "padding:2px;' onclick=envoicodemail();", "Envoyer") + "<br><br><br><br><br><br>", 400);

}

function envoicodemail() {
    var cc44 = document.getElementById("codamail").value;
    agix(url1 + "80303AAABBBCCCDDDEEEF" + cc44);
}

