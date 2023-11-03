var deuxio = 0;

function resizo() {
    if (tablet) {
        setTimeout("redimbout()", 150);

    } else if (contor != 48) {
        resizex = true;
        if (contor < 30)
            setTimeout("sourisup()", 300);
    }

    //Else
    //messig("hhhhh"+window.innerHeight);

}

function redimbout() {

    var hhh = window.innerHeight;

    //messig("reseessizo"+hhh+"    hautos"+hautos+ "  tout "+document.getElementById("tout").style.height);	

    if ((hhh > (hautos - 190)) || ipados)
        if ((mini - kbtim) > 3) {
            //kbtim=mini+2;	

            scrolldown();

            if ((iosver < 15) || ((iosver > 14) && (hhh > maxhautos) && (noswipe == 0)) || ipados) {
                maxhautos = hhh;
                dtop("juki", hhh - 90);
                document.getElementById("textum").style.height = "" + (hhh - cadry - 85) + "px";

                document.getElementById("degradus").style.height = "" + (hhh - cadry - 82) + "px";

                widy = hhh - cadry - 90;
                dragos('searchy');
                dragos('salox');
                document.getElementById("cadrum").style.height = widy - 2;

                if (standalone) {
                    if (!tabletus)
                        document.getElementById("tout").style.width = "380px";
                    /*
		document.getElementById("htma").style.height=""+hhh+"px";
		//document.getElementById("htma").style.overflow="hidden";
		document.body.style.position="fixed";
		document.getElementById("tout").style.height=""+hhh+"px";
		document.body.style.height=""+hhh+"px";
		*/
                }

                //messig("----"+hhh);
            }

            var offg = 60;

            if (iosver > 14) {

                var swi = document.getElementById("swipa");
                if (inihautos == 0) {
                    inihautos = hhh;

                    ipados = /iPad|iPod/.test(navigator.platform);
                    if (!standalone)
                        if (!ipados) {
                            swi.style.display = "inline";
                            swi.style.zIndex = 99;

                            //alert("hhh"+hhh);
                            //document.body.style.height=(hhh+10)+"px";
                            document.getElementById("tout").style.height = (hhh + 140) + "px";

                            //errora(10000,410,10,"<div style='top:0;width:180px;height:300px;background-color:#dd00dd;font-family:arial;'><br><b>SWIPE UP</b><br><br><img height=200 src=https://www.coco.gg/swipe.png><br><br>"+divo(y,120,10,40,200,y,"font-size:28px;' onclick=messig('pas-de-redimension-installez-l-appli');noswipe=1;document.getElementById('swipeup').style.zIndex=0;","<b>X</b></div>"),180);
                            //swi.style.cssText="position:fixed;left:175px;top:100px;width:200px;height:400px;background-color:#ffff8e;z-index:400;font-size:18px;text-align:center;";
                            //swi.onclick=function(){document.getElementById("swipeup").style.zIndex=0;};
                            //swi.innerHTML="<br><b>SWIPE UP</b><br><br><br><img src=https://www.coco.gg/swipe.png><br><br>"+divo(y,155,350,45,45,y,"font-size:28px;' onclick=messig('pas-de-redimension-installez-l-appli');noswipe=1;document.getElementById('swipeup').style.zIndex=0;","<b>X</b>");
                        }

                }

                if (noswipe == 0)
                    if (!standalone) {
                        if (inihautos + 15 > hhh)
                            document.getElementById("swipa").style.zIndex = 98;
                        else
                            document.getElementById("swipa").style.zIndex = 0;
                    }

            }

            //if(((iosver>14))&&((mini>-1)||standalone))
            if ((deuxio > 0) && (iosver > 14) && (noswipe == 0)) {
                if (hhh > (hautos + 50)) {
                    offg = 0;

                    //document.getElementById("htma").style.height="601px";
                    //messig("rediua++gg--+"+hhh);
                    if (deuxio == 1) {
                        //document.getElementById("tout").style.height=""+(hhh+190)+"px";	
                        //document.getElementById("htma").style.height=""+(hhh+190)+"px";

                        document.getElementById("htma").style.height = "" + (hhh + 15000) + "px";
                        document.getElementById("tout").style.height = "" + (hhh + 15000) + "px";

                        //messig("deuxia "+hhh+"   "+hautos);

                        document.getElementById("tout").style.position = "fixed";
                        document.getElementById("containo").style.position = "fixed";
                        document.getElementById("mago").style.position = "fixed";
                        //document.body.style.position="fixed";
                    }
                    dtop("babar", hhh - 42);
                    dtop("voxi", hhh - 114);
                    deuxio++;
                }
                //document.body.style.position="fixed";	
                //document.getElementById("htma").style.position="fixed";

            } else {
                deuxio = 1;

                dtop("babar", hhh - 20);
                dtop("voxi", hhh - 95);
            }
            //document.body.style.position="fixed";
            hautos = hhh;
            //messig("redam"+hhh);

            //document.body.style.height=""+(hautos+offg)+"px";	

        }

    //messig("hhhhh"+window.innerHeight);

}

function sourisup() {
    if (resizex) {
        resizex = false;
        taillo();
        sauve(0);
    }
}

function bloxi(ww1, hh1, ww2, hh2, cc1) {
    if (!ie6) {
        ww2 -= 2;
        hh2 -= 2;
    }
    return (niro + ";" + blox(ww1, hh1, ww2, hh2, cc1));

}

function blox(ww1, hh1, ww2, hh2, cc1) {
    var rr0 = "position:absolute;";
    if (ww1 != -8)
        rr0 += "left:" + ww1 + "px;";
    if (hh1 != -8)
        rr0 += "top:" + hh1 + "px;";
    if (ww2 != -8)
        rr0 += "width:" + ww2 + "px;";
    if (hh2 != -8)
        rr0 += "height:" + hh2 + "px;";
    if (cc1 != -8)
        rr0 += "background-color:#" + cc1 + ";";
    return rr0;
}

function divon(nn1, ww1, hh1, ww2, hh2, cc1, evv, in1) {
    if (!ie6) {
        ww2 -= 2;
        hh2 -= 2;
    }
    return (divo(nn1, ww1, hh1, ww2, hh2, cc1, niro + ";" + evv, in1));
}
function divo(nn1, ww1, hh1, ww2, hh2, cc1, evv, in1) {
    var rr1 = "<div style='";
    if (nn1 != -8)
        rr1 = "<div id=" + nn1 + " style='";

    rr1 += blox(ww1, hh1, ww2, hh2, cc1);
    rr1 += evv;
    rr1 += ">";
    if (in1 != -8)
        rr1 += in1;
    rr1 += "</div>";
    return rr1;
}

function tablette(uuy) {
    //messig("onDDDDD");

    if (uuy == 0) {
        contor = 48;
        var mvp = document.getElementById('viewport');

        var mvp = document.getElementById('viewport');
        mvp.setAttribute("content", "minimal-ui, user-scalable=1");

        tablet = false;
        document.body.style.touchAction = "auto";
        mvp.setAttribute("content", "minimal-ui, width=" + largos + ", user-scalable=1");
        document.body.style.position = "static";

        //document.getElementById("tout").style.width=largos;
        //	document.getElementById("tout").style.height=hautos;
    }
    //else if(uuy==1)
    //document.getElementById("tout").style.overflow="hidden";

    taillo();
    initial();
    resinit();

}

function initaillo() {
    if (contor == 777) {
        dimdim();
        if ((hautos / largos) > 1) {
            var qx8 = "chat-logo.svg";
            if (locc == 2)
                qx8 = "chat-net.svg"
            document.getElementById("tout").innerHTML = "<div style='position:absolute;width:380px;height:100%;background-color:#dddddd;'></div><object id='logo' data='" + qx8 + "?15' width='370' type='image/svg+xml' style='position:absolute;top:150px;z-index:20;'></object>";
            //document.getElementById("tout").style.backgroundColor="#888888";

            setTimeout("tablette(1)", 600);

        } else {

            var qq5 = "<div style='position:absolute;left:45%;top:90;width:55%;height:70;background-color:cccccc;text-align:center;'><img src=tablet.jpg width=100% " + start1 + "=tablette(0);></div>";
            qq5 += "<div style='position:absolute;left:5%;top:40;width:40%;height:70;background-color:cccccc;text-align:center;' ><img src=smartphone.jpg width=100% " + start1 + "=tablette(1);></div>";

            setTimeout("tablette(1)", 600);

            //document.getElementById("tout").innerHTML=qq5;
        }
        //dimdim();
        document.getElementById("wirn").innerHTML = "";
    } else {
        taillo();
        initial();
        resinit();
        document.getElementById('viewport').setAttribute("content", "width=device-width");
    }

}

function delai(z1z, m1m, t1t) {

    document.getElementById(z1z).onmouseleave = function(e) {

        clearTimeout(delayact);

    }
    delayact = setTimeout(m1m, t1t);
    //alert(z1z+" "+m1m+" "+t1t);
}

function taillo() {
    //if((largos>1000)||(hautos>1000))
    //contor=777;

    //messig("Version tablette");

    if (contor < 800)
        tailla();
}
function tailla() {
    dimdim();

    stockar = "";

    document.getElementById("tout").innerHTML = "";
    //document.body.innerHTML='';  //     reset ALL
    if (des1 > 5) {
        var tablier = "";
        for (i = 0; i < 60; i++) {
            tablier += "<div class='dav' style='position:relative'></div>";
        }
        tablier = "<div  id=fondo style='position:absolute;left:-40px;top:0px;width:120%;height:100%;background: linear-gradient(to bottom, #6e529d 0%,#d97b93 100%);'>" + tablier + "</div>";

        document.getElementById('tout').innerHTML = tablier;

        colotab[4] = "#e6e6e6";
        degrafond = "e1e6ee";
        darko = "ccc";
    } else {
        darko = "000";
        degrafond = "eaf2ff";
        colotab[4] = "#eeeeee";
    }

    document.body.style.width = "380px";
    if (locc == 2)
        des1 = 4;

    var mizo = 950;

    if (des1 == 0) {
        coulsa = "ae9484";
        coultop = "ae9484";
        groundy = "#c5b1a7";
    } else if (des1 == 1) {

        coulsa = "c8ad95";
        coultop = "c8ad95";
        groundy = "#d9c7b7";

    } else if (des1 == 2) {

        coulsa = "cba9bc";
        coultop = "c7a3b8";
        groundy = "#d9c4cf";
    } else if (des1 == 3) {

        coulsa = "aba5a5";
        coultop = "aba5a5";
        groundy = "#c7c2c2";
    } else if (des1 == 4) {

        coulsa = "a5b1c5";
        coultop = "a5b1c5";
        groundy = "#b7c1cc";
    } else if (des1 == 5) {

        coulsa = "9fb384";
        coultop = "9fb384";
        groundy = "#b4c292";
    } else if (des1 == 6) {

        coulsa = "7a5a68";
        coultop = "";
        groundy = "";
    }

    document.body.style.backgroundColor = groundy;

    var refpub = parami[6];

    bordi = "";

    if (hautos < 520)
        hautos = 520;

    if (contor == 48) {
        if (hautos > largos)
            hautos = Math.floor(hautos * 0.66);

    }

    if (contor == 777) {

        hautos = 702;

        //largos=381;	
        //hautos=310;
    }

    //widx=largos-263;
    //widy=hautos-218;

    if (contor == 777) {

        oldheight = window.innerHeight;

    } else {
        document.getElementById("tout").style.width = largos;
        document.getElementById("tout").style.height = hautos;

    }

    if (largos > 1490) {
        cadrx = Math.floor((largos - 1260) / 2);
        widx = 1260;
    } else {
        cadrx = 110;
        widx = largos - 220;
    }

    cadry = 130;

    widy = hautos - 230;

    var gausabl = 120;
    var larsabl = widx + 84;
    resy = cadry - 1;

    decax = cadrx;

    extclose = cadrx + widx - 234;

    if (hautos < 570) {
        petith = 2;

    }

    if (petith == 2) {
        cadry = 80;
        widy += 75;
    }
    extcloset = cadry + 19;

    if (sidem == 4) {
        decax = 3;
        widx += (cadrx + 1);
        cadrx = -1;
    }

    if (dextrop == 2) {
        dleft("boardz", cadrx);
        dtop("boardz", cadry + 1);
    }

    dextrop = 0;

    var gautext = cadrx + 20;
    var lartext = widx - 21;

    var ongucoul = "";

    bbout = window.innerHeight;

    if (isIOS13) {
        bbout += 80;

    }

    document.getElementById("tout").style.height = bbout;

    if (contor == 777) {

        cadrx = -6;
        cadry = 70;
        decax = 0;
        widx = largg + 10;
        gautext = 2;
        lartext = widx - 42;

        ongucoul = "#ddccaa";

        if (standalone) {
            cadry += 30;
            document.body.style.backgroundColor = "#cccccc";
            ongucoul = "#ddccaa";

            document.getElementById("mago").style.height = bbout;

        } else if (navpriv)
            cadry += 30;

        widy = bbout - cadry - 80;

        extclose = cadrx + widx - 224;
        extcloset = cadry + 5;
    }

    stockar = '';

    stockar += "<div id='degradus' style='" + bloxi(cadrx, cadry, widx, widy, "eeeeee") + "overflow:hidden;z-index:2;'></div>";

    larzone = widx - 97;
    if (voxeus)
        larzone = widx - 250;

    var sle = blox(cadrx + 20, cadry + widy + 17, larzone, 40, "fff");

    if (contor < 777) {
        var jtj = "onpropertychange='this.focus();' onfocus='raz();'";
        if (contor > 40)
            jtj = "";

        var ss9 = pSBC(0.6, "#" + coulsa);
        if (des1 > 5) {
            ss9 = "#dedede";
            stockar += divon(y, -1, -2, largos + 2, 30, "222222", "z-index:3;border-color:#947b4e;'", "");
        }
        stockar += "<input type=text id='cocoa' MAXLENGTH=460 onkeypress='return displayunicode(event);' " + jtj + " autocapitalize='off' autocomplete='off' autocorrect='off' style='z-index:11;" + sle + "font-family:" + policius + ";" + bo13 + ";padding-top:" + (6 + 4 * gapy) + ";" + niro + ";padding-left:8px;border-radius:4px;outline:none;background-color:" + ss9 + "'>";

    } else {
        sle = blox(5, 10, larzone + 28, 32, "FFFFFF");
        var cocom = "<textarea id='cocoa' MAXLENGTH=460 onkeypress='return retourlig(event);' oninput=autohei(event);  onblur=bluro(); onclick=kbon(); spellcheck='false' autocapitalize='off' autocomplete='off' autocorrect='on' style='" + sle + "font-family:" + policius + ";" + bo13 + ";font-size:16px;overflow:hidden;top:" + (cadry + 6) + "px;padding:6px;" + niro + ";outline:none;display:none;'></textarea>";

        stockar += cocom;
        var speecho = divon(y, 10, 35, 45, 55, "ddccaa", "text-align:center;border-radius:5px;z-index:194;' " + end1 + "=cancelo(event);quist();", "<br><b>?</b>");
        if (andro > 0)
            speecho += divon("zemic", 10, 80, 45, 55, "bb88bb", "text-align:center;border-radius:5px;z-index:104;' " + end1 + "=speecha();", "<br><b>mic</b>")
        stockar += divo("boutus", cadrx + larzone + 38, cadry, 50, 50, y, "z-index:95;display:none;'", divon(y, 10, -55, 45, 65, "cccccc", "text-align:center;border-radius:5px;z-index:194;' " + end1 + "=effacio();ecritum=0;notif(0);cancelo(event);", "<b>X</b>") + speecho + divon(y, 0, -10, 55, 55, "44dd44", "text-align:center;border-radius:5px;z-index:195;' " + start1 + "=writus();eventHandler(event);", "<b>OK</b>") + divon(y, -37, -33, 50, 50, "e0e28f", "text-align:center;border-radius:5px;z-index:5;' " + start1 + "=emota();cancelo(event);", "<b>:)</b>"));

    }
    //stockar+=divon("kok",0,1,55,55,"77dd44","text-align:center;z-index:95;' "+start1+"=jjj();eventHandler(event);","<b>ko</b>");

    stockar += "<div id=ongulus style='position:relative;left:" + decax + ";top:0;width:" + (largos - cadrx) + ";height:" + cadry + ";pointer-events: none;overflow:hidden;background-color:" + ongucoul + ";'></div>";

    stockar += divo("onguselect1", 0, -3, largos - cadrx, cadry + 3, y, "z-index:71;overflow:hidden;'", divo("onguselect", y, y, 100, cadry + 20, y, "border-radius:10px;" + niro + ";text-align:center;padding-top:5px;' class='fixedsy' " + start1 + "=sorc(888,event);", ""));

    stockar += divon("closus", extclose, extcloset, 216, 56, y, "overflow:hidden;z-index:21;'", "");

    //stockar+="<div id=encum style='position:absolute;top:"+(cadry+1)+";left:"+gautext+";overflow:auto;height:"+(widy-2)+";width:"+lartext+";z-index:5;'>";

    if (contor > 0) {
        stockar += "<IFRAME id=streamup name=streamup src='' FRAMEBORDER=0 style='position:absolute;top:0;left:0;display:none;z-index:0;overflow:hidden;width:5px;height:5px;'></IFRAME>";
        stockar += "<IFRAME id=viewup name=viewup src='' width=5 HEIGHT=5 FRAMEBORDER=0 style='position:absolute;top:0;left:0;display:none;z-index:0;overflow:hidden;z-index:0;'></IFRAME>";
        stockar += "<IFRAME id=viewup3 name=viewup3 src='' width=5 HEIGHT=5 FRAMEBORDER=0 style='position:absolute;top:0;left:0;display:none;z-index:0;overflow:hidden;z-index:0;'></IFRAME>";
    }

    stockar += divo("textum", gautext, cadry + 1, lartext, widy - 2, y, "font-family:verdana;z-index:10;font-size:" + fontasize + "px;" + touchy + "overflow:auto;background-size:" + lartext + " " + (widy - 2) + ";' onmousewheel=setTimeout('wheelos(event)',40); onscroll=wheelos(event);", y);

    stockar += divo("cachslide", cadrx + widx - 18, cadry + 1, 17, widy - 2, colotab[4].substring(1), "z-index:92;display:none;' onmouseenter=ascenceur(1); onmouseout=ascenceur(0);", y);

    stockar += divo("scrall", cadrx + widx - 80, cadry + widy - 80, 48, 48, y, "overflow:hidden;touch-action:none;'", "<img src=scrall.gif?0 TITLE='scrolling' style='position:absolute;left:0;top:0;height:96px;width:48px;touch-action:none;'  onclick='scrallo();' onmouseover=this.style.top=-48px; onmouseout='this.style.top=0'; >");

    //stockar+="</div>"; 
    var lsx = cadrx + 20;

    stockar += "<div id=cadrum style='position:absolute;top:" + (cadry + 1) + "px;left:" + cadrx + "px;height:" + (widy - 2) + ";" + bo13 + ";width:" + widx + ";z-index:40;'>";

    //if(contor<700)
    //stockar+="<IFRAME SRC='miniban.html' name='minipub' id='minipub' HEIGHT=60 WIDTH=468 allowTransparency='true' FRAMEBORDER=0 SCROLLING=NO style='position:absolute;left:"+(cadrx+widx-474)+";margin:0;overflow:hidden;z-index:60;top:5;'></IFRAME>";

    stockar += divo("searchy", widx - 367, 1, 366, widy - 3, y, touchy + "overflow-y:scroll;" + bo13 + ";z-index:5;font-weight:normal;'", kkk7);

    var hws = "";
    if (resux.length < 40)
        hws = "visibility:hidden;";

    var ctz = 13;
    if (tablet)
        ctz = 16;
    stockar += divon("salox", 40, 65, 290, widy - 66, "bbb4df", touchy + "font-size:" + ctz + "px;font-family:" + policius + ";line-height:1.5em;overflow-y:scroll;" + hws + "'", "salut");
    stockar += "</div>";

    //stockar+="<div id='critero'  style='"+blox(lsx+40,cadry+22,240,60,y)+bo13+";z-index:10;'> </div>";

    var tinao = "position:absolute;left:" + (cadrx + 316) + "px;top:" + (cadry + 100) + "px";
    if (tablet) {
        tinao = "float:right;top:-50px";
    }

    stockar += "<div id=tino onmouseover=this.style.display='none'; style='position:relative;float:right;z-index:90;padding:16px;display:none;" + tinao + ";background-color:#bbbbbb;'></div>";

    if ((contor < 777)) {
    //if(!deluxe)
    //stockar+="<IMG ondblclick=adroll(0); SRC=soleil.gif id='solius' WIDTH=140 HEIGHT=140 style='position:absolute;top:0;left:"+(largos-141)+";'>";

    //stockar+="<IMG SRC=anan.gif style='position:absolute;top:"+(hautos-366)+";left:"+(largos-152)+";z-index:5;'>";

    }

    var testa = "" + location;

    sourcad = "ifrad";

    var colim = "#5f4c3f";
    if (des1 > 0)
        colim = pSBC(-0.6, "#" + coulsa);
    if (true) {
        //sourcad=parami[6];
        var ftx = 42;

        sourcad = "bigban";
        if (parami[6].length > 6)
            sourcad = parami[6];
        var ddip = "";
        if ((cadry < 100) || (des1 > 5))
            ddip = "display:none;";

        if (navpriv) {

            var colam = pSBC(-0.7, "#" + coulsa);
            var ghosti = "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='fill:" + colam + ";' onmouseover=this.style.fill='#b44'; onmouseout=this.style.fill='" + colam + "';  x='0px' y='0px' width='90px'  viewBox='0 0 512 512' xml:space='preserve'>";

            ghosti += "<path  d='M 233,1.1 C 203.4,4.2 175.9,12.3 149.1,26 90.4,55.9 45.3,112 29.1,175.3 c -8,31.2 -8.3,36.6 -7.9,185.7 l 0.3,126.5 2.2,4.7 c 3,6.6 10.4,14.1 16.6,16.9 4.9,2.2 6.4,2.4 23.7,2.4 17.3,0 18.8,-0.2 23.7,-2.4 6.1,-2.7 13.6,-10.3 16.3,-16.4 1,-2.3 2.2,-7.1 2.6,-10.6 0.5,-5 1.3,-7.1 3.5,-9.5 l 2.7,-3.1 12.3,-0.4 c 19.2,-0.5 23,1.6 24.3,13.1 0.4,3.5 1.6,8.2 2.6,10.5 2.7,6.1 10.2,13.7 16.3,16.4 4.9,2.2 6.4,2.4 23.7,2.4 17.3,0 18.8,-0.2 23.7,-2.4 6.1,-2.7 13.6,-10.3 16.3,-16.4 1,-2.3 2.1,-6.9 2.5,-10.2 1.3,-11.4 4.7,-13.5 21.5,-13.5 16.8,0 20.2,2.1 21.5,13.5 0.4,3.3 1.5,7.9 2.5,10.2 2.7,6.1 10.2,13.7 16.3,16.4 4.9,2.2 6.4,2.4 23.7,2.4 17.3,0 18.8,-0.2 23.7,-2.4 6.1,-2.7 13.6,-10.3 16.3,-16.4 1,-2.3 2.2,-7.1 2.6,-10.6 0.5,-5 1.3,-7.1 3.5,-9.5 l 2.7,-3.1 12.3,-0.4 c 19.2,-0.5 23,1.6 24.3,13.1 0.4,3.5 1.6,8.2 2.6,10.5 2.7,6.1 10.2,13.7 16.3,16.4 4.9,2.2 6.4,2.4 23.7,2.4 17.3,0 18.8,-0.2 23.7,-2.4 6.2,-2.8 13.6,-10.3 16.6,-16.9 l 2.2,-4.7 0.3,-126.5 C 491.1,233 490.7,215.6 487.4,196 479.1,147.2 455.9,102.7 420.4,67.6 371.4,19 301.1,-5.9 233,1.1 Z m -55.5,130 c 15,5.5 25.9,16.1 32.3,31.2 2.5,5.8 2.6,7.4 3,25.4 l 0.4,19.3 -2.9,2.8 c -2.3,2.3 -4,3 -9.2,3.5 -13,1.4 -23.9,9.3 -28.1,20.5 -1.8,4.6 -2.1,7.2 -1.8,13.2 0.6,9.3 3.8,16 10.4,21.8 4.4,4 13.4,8.2 17.4,8.2 3,0 7.9,4.8 8.6,8.5 0.8,4.7 -3.2,11.9 -11,19.4 -27.4,26.2 -71.2,16.7 -86.3,-18.9 l -2.8,-6.5 V 224 168.5 l 2.6,-6.2 c 6.6,-15.2 17.8,-26 32.4,-31.1 8.2,-2.9 9.7,-3.1 20,-2.7 6.2,0.2 10.9,1 15,2.6 z m 192,0 c 15.5,5.8 27,17.2 32.8,32.6 1.9,5 2.2,8.3 2.5,24.5 l 0.4,18.8 -2.9,2.8 c -2.3,2.3 -4,3 -9.2,3.5 -13,1.4 -23.9,9.3 -28.1,20.5 -1.8,4.6 -2.1,7.2 -1.8,13.2 0.6,9.3 3.8,16 10.4,21.8 4.5,4 13.4,8.2 17.5,8.2 2.7,0 7.6,5 8.5,8.6 1,4.1 -3.5,12 -11,19.2 -27.4,26.3 -71.2,16.8 -86.3,-18.8 l -2.8,-6.5 V 224 168.5 l 2.6,-6.2 c 6.5,-15.1 17.9,-26 32.4,-31.1 8.2,-2.9 9.7,-3.1 20,-2.7 6.2,0.2 10.9,1 15,2.6 z'/>";
            ghosti += "</svg>";
            ddip = "display:none;";
            var gogost = 20;
            if (tablet)
                gogost = 150;
            stockar += divo(y, gogost, 5, 200, 80, y, "z-index:10;' ", "<div onclick=ghosto()>" + ghosti + "</div>");
        }

        stockar += "<IFRAME SRC='' name='ifrad' id='ifrad' HEIGHT=95 WIDTH=720 allowTransparency='true' FRAMEBORDER=0 SCROLLING=NO style='position:absolute;margin:0;" + ddip + "overflow:hidden;top:0;left:" + ftx + "px;z-index:58;'></IFRAME>";

    }

    if (contor == 777) {
        stockar += "<div id='recherchus' style='position:absolute;overflow:hidden;top:0;left:0;z-index:15;'></div>";

        stockar += divon("swipa", 220, 110, 180, 350, "bb88bb", "overflow:hidden;display:none;font-family:arial;padding:0px;overflow:auto;z-index:0;'", "<br><b>SWIPE UP</b><b style='position:absolute;left:130px;top:5px;font-size:28px;' onclick=messig('pas-de-redimension-installez-l-appli');noswipe=1;document.getElementById('swipa').style.zIndex=0;>X</b><br><br><img src=https://www.coco.gg/swipe.png><br><br>");

    }

    stockar += divon("overy", 300, 300, y, y, y, "font-family:" + fixpol + ";" + touchy + "padding:10px;overflow:auto;visibility:hidden;z-index:99;'", "");

    stockar += divo("questi", cadrx + 40, cadry + widy - 20, widx - 45, y, y, "'", "");

    //
    if (contor < 777) {

        stockar += divon("sablus", -2, cadry + widy - 1, largos + 10, 115, coulsa, "z-index:4;overflow:hidden;'", "");
        var log7 = 20;
        var lgg = 420;
        var rgg = 2;

        if (cadry < 100) {
            lgg = 380;
            log7 = 5;
            rgg = -112;

        }
        var jhj = "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='" + lgg + "px' x='0px' y='0px' viewBox='0 0 841.89 200.667' xml:space='preserve'>";

        jhj += "<path fill='" + colim + "' d='m 509.73,0 c -38.792,0 -68.977,22.483 -78.01,57.264 -0.038,0.054 -0.0772,0.07586 -0.11523,0.13086 -0.164,0.878 -0.3582,1.6937 -0.5332,2.5547 -0.289,1.291 -0.58446,2.5793 -0.81446,3.9023 -8.04,35.381 -24.354,53.234 -24.354,53.234 -9.381,12.937 -21.988,18.764 -38.488,18.764 -30.726,0 -51.104,-25.228 -51.104,-56.279 0,-31.049 17.143,-56.281 51.104,-56.281 10.54,0 19.66,2.7242 27.838,8.6582 l 7.75,-24.404 c -10.892,-5.061 -22.958,-7.541 -35.588,-7.541 -34.57,0 -60.911,18.557 -72.209,46.895 -11.902,-28.827 -39.823,-46.895 -74.623,-46.895 -38.791,0 -68.972,22.483 -78.006,57.26 -0.04,0.054 -0.0791,0.07577 -0.11914,0.13476 -0.17,0.914 -0.37268,1.7623 -0.55468,2.6543 -0.277,1.24 -0.55921,2.479 -0.78321,3.752 -8.036,35.412 -24.357,53.285 -24.357,53.285 -9.382,12.937 -21.994,18.762 -38.494,18.762 -30.729,0 -51.104,-25.228 -51.104,-56.279 0,-31.049 17.146,-56.281 51.104,-56.281 10.282,0 19.208,2.5957 27.225,8.2227 l 7.7051,-24.277 c -10.716,-4.85 -22.551,-7.2324 -34.93,-7.2324 -46.576,0 -78.27,33.637 -78.27,79.568 0,46.575 31.375,79.562 78.27,79.562 22,0 42.698,-7.4369 57.25,-24.256 0,0 11.307,-15.307 21.943,-3.4805 0.119,0.143 0.24523,0.27883 0.36523,0.42383 0.30501,0.356 0.60816,0.64678 0.91016,1.0508 0.381,0.508 0.72397,0.83369 1.043,1.0547 14.514,15.87 35.863,25.209 60.805,25.209 34.724,0 62.588,-17.992 74.535,-46.703 11.201,28.469 37.447,46.703 72.295,46.703 21.996,0 42.698,-7.4388 57.25,-24.258 0,0 11.311,-15.318 21.947,-3.4726 0.109,0.134 0.22885,0.26148 0.33984,0.39648 0.31001,0.362 0.62169,0.65931 0.92969,1.0703 0.38,0.508 0.72492,0.83369 1.0449,1.0547 14.514,15.87 35.863,25.209 60.803,25.209 46.576,0 80.861,-32.342 80.861,-79.563 -10e-4,-47.224 -34.285,-79.572 -80.861,-79.572 z M 220.58,23.289 c 32.67,0 53.689,24.587 53.689,56.281 0,31.696 -21.019,56.279 -53.689,56.279 -32.663,0 -53.689,-24.583 -53.689,-56.279 0,-31.694 21.026,-56.281 53.689,-56.281 z m 289.15,0 c 32.67,0 53.695,24.587 53.695,56.281 0,31.696 -21.026,56.279 -53.695,56.279 -32.666,0 -53.693,-24.583 -53.693,-56.279 0,-31.694 21.027,-56.281 53.693,-56.281 z m -292.7,34.256 c -4.354,0 -7.8828,3.5298 -7.8828,7.8828 0,4.355 3.5288,7.8887 7.8828,7.8887 4.354,0 7.8887,-3.5347 7.8887,-7.8887 0,-4.353 -3.5347,-7.8828 -7.8887,-7.8828 z m 36.051,0 c -4.353,0 -7.8828,3.5298 -7.8828,7.8828 0,4.355 3.5288,7.8887 7.8828,7.8887 4.354,0 7.8848,-3.5347 7.8848,-7.8887 0,-4.353 -3.5318,-7.8828 -7.8848,-7.8828 z m 226.06,0 c -4.355,0 -7.8848,3.5298 -7.8848,7.8828 0,4.355 3.5308,7.8887 7.8848,7.8887 4.353,0 7.8828,-3.5347 7.8828,-7.8887 0,-4.353 -3.5298,-7.8828 -7.8828,-7.8828 z m 36.051,0 c -4.354,0 -7.8867,3.5298 -7.8867,7.8828 0,4.355 3.5327,7.8887 7.8867,7.8887 4.354,0 7.8848,-3.5347 7.8848,-7.8887 0,-4.353 -3.5308,-7.8828 -7.8848,-7.8828 z m -304.56,35.557 c 0,10e-7 2.4413,18.701 17.486,25.621 15.042,6.918 23.586,-20.742 23.586,-20.742 z m 266.72,0 c 0,10e-7 2.4384,18.701 17.482,25.621 15.046,6.918 23.586,-20.742 23.586,-20.742 z m 320.76,-42.554 c 6.2686,0 12.82227,0.783567 19.661,2.3507 6.98067,1.424667 13.748,3.5617 20.302,6.4111 v 93.601 c 0,14.532 -4.20267,25.92933 -12.608,34.192 -8.40533,8.40533 -19.73167,12.608 -33.979,12.608 -14.104,0 -27.92333,-3.84667 -41.458,-11.54 l 8.3344,-21.584 c 4.9864,2.70687 10.1154,4.8439 15.387,6.4111 5.27133,1.56713 10.329,2.3507 15.173,2.3507 7.266,0 12.53733,-1.85207 15.814,-5.5562 3.4192,-3.56173 5.1288,-8.9754 5.1288,-16.241 v -4.0603 c -6.55353,2.84933 -13.53453,4.274 -20.943,4.274 -8.40533,0 -15.885,-2.0658 -22.439,-6.1974 -6.41107,-4.1316 -11.46873,-10.11527 -15.173,-17.951 -3.56173,-7.836 -5.3426,-17.02533 -5.3426,-27.568 0,-10.4 2.13703,-19.446667 6.4111,-27.14 4.41653,-7.836 10.54253,-13.819667 18.378,-17.951 7.836,-4.274067 16.954,-6.4111 27.354,-6.4111 z m -2.137,79.497 c 5.12887,0 9.7592,-0.99727 13.891,-2.9918 v -50.647 c -3.98907,-1.2822 -8.3344,-1.9233 -13.036,-1.9233 -7.266,0 -12.89333,2.350733 -16.882,7.0522 -3.98907,4.701467 -5.9836,11.5398 -5.9836,20.515 0,9.26067 1.92333,16.24167 5.77,20.943 3.84667,4.70147 9.26033,7.0522 16.241,7.0522 z M 688.485,50.548 c 6.2686,0 12.82227,0.783567 19.661,2.3507 6.98067,1.424667 13.748,3.5617 20.302,6.4111 v 93.601 c 0,14.532 -4.20267,25.92933 -12.608,34.192 -8.40533,8.40533 -19.73167,12.608 -33.979,12.608 -14.104,0 -27.92333,-3.84667 -41.458,-11.54 l 8.3344,-21.584 c 4.9864,2.70687 10.1154,4.8439 15.387,6.4111 5.27133,1.56713 10.329,2.3507 15.173,2.3507 7.266,0 12.53733,-1.85207 15.814,-5.5562 3.4192,-3.56173 5.1288,-8.9754 5.1288,-16.241 v -4.0603 c -6.55353,2.84933 -13.53453,4.274 -20.943,4.274 -8.40533,0 -15.885,-2.0658 -22.439,-6.1974 -6.41107,-4.1316 -11.46873,-10.11527 -15.173,-17.951 -3.56173,-7.836 -5.3426,-17.02533 -5.3426,-27.568 0,-10.4 2.13703,-19.446667 6.4111,-27.14 4.41653,-7.836 10.54253,-13.819667 18.378,-17.951 7.836,-4.274067 16.954,-6.4111 27.354,-6.4111 z m -2.137,79.497 c 5.12887,0 9.7592,-0.99727 13.891,-2.9918 v -50.647 c -3.98913,-1.2822 -8.33447,-1.9233 -13.036,-1.9233 -7.266,0 -12.89333,2.350733 -16.882,7.0522 -3.98907,4.701467 -5.9836,11.5398 -5.9836,20.515 0,9.26067 1.92333,16.24167 5.77,20.943 3.84667,4.70147 9.26033,7.0522 16.241,7.0522 z m -63.60324,21.066 -26.777,0.016 -0.03,-29.126 26.797,-0.021 z' />";

        jhj += "</svg>";

        if (locc == 2)
            jhj = "";
        if (coultop.length > 2)
            stockar += divo("header", -2, -2, largos + 10, cadry + 1, coultop, "z-index:4;overflow:hidden;border-style:solid;border-width:1px;border-color:#5f4c3f;'", divo(y, y, log7, lgg + rgg, cadry, y, "right:16px;overflow:hidden;'", jhj));

        stockar += "<div style='position:absolute;top:" + (hautos - 17 - 2 * gapy) + "px;'>";
        //stockar+="<div onclick=agir('77126'); style='position:absolute;cursor:pointer;font-size:10;z-index:5;left:"+(largos-459)+";'>Top30</div>";
        var reg2 = "reglement.html";
        if (locc == 1)
            reg2 = "regle.html";
        if (locc == 2)
            reg2 = "rules.html";

        stockar += divo(y, largos - 349, y, y, y, y, "font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('" + reg2 + "');", "Réglement");

        stockar += divo(y, largos - 270, y, y, y, y, "font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('" + base + "contact.html','contact','status=yes," + loxx + ",scrollbars=yes,resizable=yes,width=520,height=465');", "Contact");

        stockar += divo(y, largos - 209, y, y, y, y, "font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('" + base + "aide/');", "Aide");

        stockar += divo(y, largos - 169, y, y, y, y, "font-size:10px;cursor:pointer;z-index:5;' onclick=window.open('http://www.moxt.com/');", "Jeux&nbsp;Gratuits");

        //stockar+="<div onclick=window.open('"+base+"WEBMASTER/'); style='position:absolute;cursor:pointer;font-size:10;z-index:5;left:"+(largos-74)+";'>Webmasters</div>";

        //stockar+="<div onclick=window.open('http://www.joker.net/poker.html'); style='position:absolute;cursor:pointer;font-family:courier new;font-weight:bold;font-size:12;z-index:5;top:-2;left:"+(largos-450)+";'>Poker</div>";

        stockar += "</div>";

    }

    stockar += "<IFRAME SRC='' name='certif' id='certif' FRAMEBORDER=0 style='position:absolute;top:" + (hautos - 400) + ";left:" + (cadrx + widx - 335) + ";z-index:0;width:300;height:270;visibility:hidden;border-style:solid;border-width:1px;'></IFRAME>";

    stockar += "<img id='showav' src='' style='position:absolute;z-index:94;width:180px;height:180px;left:" + (extclose + 60) + ";top:250px;visibility:hidden;' onmousedown=this.style.visibility='hidden'; onload=this.style.visibility='visible'; >";

    var babal = cadrx + 50;
    var babah = cadry + widy + 59;

    stockar += divo("babar", babal, babah + yfont, y, y, y, "font-family:" + fixpol + ";color:#" + darko + ";z-index:10;'", "");

    ecritl = cadrx + 58;
    ecrith = cadry + widy + 1;

    stockar += divo("ecrito", ecritl, ecrith, y, y, y, "z-index:12;font-style:italic;font-size:12px;color:#" + darko + ";visibility:hidden;'", "<b>en train d'écrire ...</b>");
    //stockar+=divo("publis",ecritl+190,ecrith,y,y,y,"z-index:80;font-family:"+fixpol+";background-color:ff00ff;'","<div onclick=window.open('http://www.joker.net/'); style='position:absolute;cursor:pointer;font-family:courier new;font-weight:bold;font-size:12;z-index:5;top:0;left:0'>&nbsp;&nbsp;Poker&Echecs<div style='position:absolute;font-size:16;z-index:52;left:2;top:-2;font-weight:normal;'>&#9829;</div></div>");

    var alx = hautos - 49;
    var aly = largos - 108;

    stockar += divon("babaw", aly, alx + yfont, y, y, y, "font-family:" + fixpol + ";z-index:10;color:#" + darko + ";visibility:" + warna + ";'", warni);

    stockar += "<div id='zeroo' style='position:absolute;top:0;left:0;font-family:" + fixpol + ";z-index:10;color:#" + darko + "' onclick=oppop('www.coco.gg/graph/')></div>";
    stockar += "<div id='zerob' style='position:absolute;top:" + (hautos - 18) + ";left:0;font-family:" + fixpol + ";z-index:30;'></div>";

    var optal = cadrx + widx + 2;
    var optah = cadry + 5;
    var resety = 150;

    var gg9 = "";
    lesopt = "";

    var optio = new Array("'cliconglet(0)'","dddddd","Accueil","'filtro()'","d8afca","&nbsp;" + filtram,"'designu()'","e0e28f","Design","'reseto()'","bbddaa","Reset","'profilum()'","dddddd","Profil","'agir(77369)'","E69E9E","Info","'premiolo()'","ddccaa","Premium","'mizor()'","e2b838","Amiz");
    //b8bed8,
    var lengopt = optio.length / 3;
    //if(sidem==0)
    //lengopt-=1;
    opto[0] = widy - 100;
    opto[1] = widy - 212;

    opto[3] = widy - 212;
    var xt3 = "";
    for (i = 0; i < lengopt; i++) {
        var mth = "onclick";
        xt3 = "";
        if ((optio[3 * i + 2] == "Premium") || (optio[3 * i + 2] == "Reset") || (optio[3 * i + 2] == "Info"))
            mth = "onclick"

        var optl = 18;
        var optt = Math.floor(i * (widy - 50) / (lengopt - 1));
        var opth = 28;
        var optw = 70;

        var toptex = 5;

        if (i == 1)
            opto[0] = optt;
        if (i == 4)
            opto[1] = optt - 90;

        if (i == 7) {//mth="onmouseover";
        //xt3="onmouseenter=delai('opt"+i+"',"+optio[3*i]+",150);";
        }

        if (i == 1)
            lesopt += divo("shieldo", optl + 4, optt + opth / 2 - 10, 1, 16, y, "font-size:" + (17 + yfont) + "px;font-family:courier new;z-index:20;' " + bleu + " onmousedown=shieldum();", shielda);
        //stockar+="<div id=shieldo "+bleu+" onmousedown=shieldum(); style='position:absolute;font-size:"+(17+yfont)+";left:"+(optl+4)+";top:"+(optt+opth/2-10)+";font-family:courier new;height:16;width:15;z-index:20;'>"+shielda+"</div>";

        if (i == 2)
            resety = cadry + optt + 21;

        lesopt += divon("opt" + i, optl, optt, optw, opth, optio[3 * i + 1], "' " + xt3 + " " + mth + "=" + optio[i * 3] + " " + roug, divo("optg" + i, y, toptex + yfont, optw, 10, y, "text-align:center;'", optio[3 * i + 2]));
    }
    if (des1 > 5) {
        gg9 = "onmouseenter=cancelo(event);showopt(1); onmouseleave=showopt(0);";
    }
    stockar += "<div id=optim class='fixedsy' style='" + blox(optal, optah, 100, widy, y) + ";' " + gg9 + ">";

    stockar += "</div>";

    if (!tablet) {

        stockar += divon("optsm", cadrx + widx - 10, cadry + widy + 23, 70, 28, "b8bed8", "z-index:30;' onmousedown=emota(); " + roug, divo(y, y, 5 + yfont, optw, 10, y, "text-align:center;' class='fixedsy'", "Smiley"));

        stockar += divon("sidepremio", cadrx - 75, cadry + widy + 23, 70, 28, "ddccaa", "z-index:30;display:none;' onmousedown=premiolo() ", divo(y, y, 5 + yfont, optw, 10, y, "text-align:center;' " + roug + " class='fixedsy'", "Premium"));

        stockar += divo("plusa", cadrx - 50 + 12 * sidem, cadry + widy - 1, 24, 24, "", "box-sizing: border-box;font-size:20px;z-index:30;border-radius:4px;padding:6px;overflow:hidden; line-height:10px;' onmouseover=this.style.backgroundColor='#e0e28f'; onmouseleave=this.style.backgroundColor='';this.style.width='26px';   ", "<span onmousedown='incremfont(1,false);'>+</span>");

        var ss7 = pSBC(-0.6, "#" + coulsa);

        stockar += divo("downa", 10 + 3 * sidem, cadry + widy - 6, 24, 24, "", "font-size:20px;z-index:30;overflow:hidden;color:" + ss7 + "; ' " + onmousy("880000", ss7.substring(1)) + " ", "<span onmousedown='petith=((petith+2)%4);taillo();sauve(0);'>&#9660;</span>");

        stockar += divo("lefta", -2, cadry + widy + 25, 24, 24, "", "font-size:20px;z-index:30;overflow:hidden;color:" + ss7 + "; ' " + onmousy("880000", ss7.substring(1)) + " ", "<span onmousedown='sidem=((sidem+4)%8);taillo();sauve(0);'>&#9654;</span>");

    }
    stockar += divo("messao", cadrx + widx - 250, cadry + widy + 2, y, y, "z-index:40;visibility:hidden;font-family:" + fixpol + "' onclick=this.style.visibility='hidden';affimess();", "New Mess");

    if (contor < 700)
        stockar += divo("blogo", cadrx + 200, cadry + widy - 1, 220, 20, y, "z-index:50;font-weight:bold;color:#" + darko + ";font-size:14;cursor:pointer;' " + onmousy("ee0000", darko) + " ", "");

    var voxil = cadrx + widx - 195;
    var voxit = cadry + widy - 15;

    var hnn = "hidden";
    if (voxeus)
        hnn = "visible";
    stockar += "<div id='voxi' style='" + bloxi(voxil, voxit, 150, 95, "ffffff") + "visibility:" + hnn + ";font-family:" + fixpol + ";z-index:91;'>";

    stockar += divon("voxo", 3, 3, 60, 20, "dddddd", "font-family:" + fixpol + ";z-index:93;' " + start1 + "=voxou('25');", "Mic ON");

    stockar += divon("voxz", 78, 3, 38, 20, "dddddd", "font-family:" + fixpol + ";' " + start1 + "=activox(7);", "");

    stockar += divo("muto", 119, 4, y, 20, "eeeeee", "font-size:10px;font-family:" + policius + ";line-height:24px;' " + start1 + "=muta();", "mute");
    //stockar+=divo("speex",119,1,y,y,"eeeeee","font-size:10px;visibility:hidden;font-family:"+policius+";' onclick=speex();","V");

    stockar += divo("micra", 138, 0, 10, 10, "000000", "overflow:hidden;'", "");

    stockar += divo("voxa", 3, 22, y, y, y, "font-family:" + fixpol + ";'", "");

    stockar += "</div>";

    //document.body.innerHTML=stockar;
    document.getElementById("tout").innerHTML += stockar;

    if (des1 > 5) {
    } else
        document.getElementById("optim").innerHTML = lesopt;

    zet = document.getElementById("textum");

    document.getElementById('onguselect').style.backgroundColor = colotab[0];

    document.getElementById("cadrum").innerHTML += kkk7;

    adroll(0);

    microok = false;

    //

    if (ffID.length > 0)
        amiga();

    var closas = divo("delpv", 190, 4, 90, 21, y, "overflow:hidden;z-index:50;'", croix + " " + start1 + "=cancelo(event);deletonglet(ongleto);>");
    //"<div style='position:absolute;overflow:hidden;height:21;left:190;top:4;width:90;z-index:50;'>";
    //closas+=croix+"onclick=deletonglet(ongleto);>";

    //closas+="</div>";

    closas += divo("quest", 0, 0, 24, 24, y, "overflow:hidden;z-index:50;'", "<img  src=camzy.gif TITLE='allumer la cam' style='position:absolute;left:0;top:0;" + squa + "'  onclick=opencam();  onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    closas += "<IFRAME SRC='" + envox + "' name='ifranos' id='ifranos' HEIGHT=35 WIDTH=30 FRAMEBORDER=0 SCROLLING=NO allowTransparency='true' style='position:absolute;z-index:50;' onload=setTimeout('refrenvoi()',100); ></IFRAME>";

    //closas+="<div style='position:absolute;left:154;top:32;height:36;width:80;z-index:20;font-family:"+fixpol+";'>Envoyer<br>Fichier</div>";

    closas += divo(y, 187, 108, 24, 24, y, "overflow:hidden;'", "<img src=kill.gif TITLE='bloquer' style='position:absolute;left:0;top:0;" + squa + "'  onclick='killum();' onmouseover=this.style.top=-24; onmouseout=this.style.top=0; >");

    closas += divo(y, 187, 162, 24, 24, y, "overflow:hidden;'", "<img src=ami.gif?1 TITLE='ajouter amiz' style='position:absolute;left:0;top:0;" + squa + "'  onclick='amigo();' onmouseover='this.style.top=-24;' onmouseout='this.style.top=0'; >");

    closas += divo("blogi", 187, 124, 24, 24, y, "overflow:hidden;'", "");

    closas += divo("closuscoul", 4, 4, 28, 25, "", "overflow:hidden'", "");

    closas += divo("closusage", 10, 5 + yfont, 25, 21, "", "font-family:" + fixpol + ";' onclick=al2()", "");

    closas += divo("closustext", 34, 9, 160, 34, "", "font-family:" + fixpol + ";overflow:hidden'", "");

    closas += divo(y, 187, 82, 24, 24, y, "overflow:hidden;'", "<img src=fleur2.gif?5 TITLE='faire un cadeau' style='position:absolute;left:0;top:0;" + squa + "'  onclick=cadolo(); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    //closas+=divo(y,158,64,24,24,y,"overflow:hidden;'","<img src=tele.gif TITLE='appeler' style='position:absolute;left:0;top:0;"+squa+"'  onclick=neutel(0); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    closas += divo(y, 187, 188, 24, 24, y, "overflow:hidden;'", "<img src=questor.gif?2 TITLE='info' style='position:absolute;left:0;top:0;" + squa + "'  onmousedown=infuz(event); onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    closas += divo(y, 187, 134, 24, 24, y, "overflow:hidden;'", "<img src=alerte.gif?3 TITLE='alerter abus' style='position:absolute;left:0;top:0;" + squa + "' onmousedown=alerta() onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    closas += divo(y, 187, 29, 24, 24, y, "overflow:hidden;'", "<img src=micro.gif?3 TITLE='micro' style='position:absolute;left:0;top:0;" + squa + "' onclick=openmic() onmouseover=this.style.top=-24; onmouseout='this.style.top=0'; >");

    closas += divo(y, 6, 14, 20, 15, y, "font-family:" + fixpol + ";'", "ans");

    closas += divon("noavat", 24, 54, 140, 140, y, "font-family:" + fixpol + ";z-index:21;'", "no avatar");

    closas += divo("nopvs", 15, 50, 100, y, "ddbbbb", "visibility:hidden;" + bo13 + ";z-index:104;'", "no PV");

    closas += "<img id=autrui  WIDTH=180 HEIGHT=180 style='position:absolute;left:3px;top:32px;visibility:hidden;z-index:94;' onclick=shoava(); ondblclick=shobig();>";

    var salonh = 268;

    var ggk = divo("salonik", 4, 0, 210, salonh, colotab[3], "overflow:auto;z-index:45;overflow-x: hidden;' class='fixedsy' onmousedown=checkavu(event); onmouseup=checkavo();", "")
    closas += divo("allsalon", 0, 30, y, y, y, "z-index:40;'", ggk);
    closas += divo("saloncon", 2, 3, 145, 24, colotab[3], "padding-top:3px;padding-left:62px;z-index:40;font-family:" + fixpol + ";' " + roug + " " + start1 + "=expandinfo();", "Liste du salon");

    document.getElementById("closus").innerHTML = closas;

    document.getElementById("salonik").innerHTML = saloo;

    for (i = 0; i < salcoul.length; i++) {
        var topr = 15 + Math.floor(i / 8) * 23;

        var topg = 2 + (i % 8) * 23 + Math.floor(i / 8) * 7;
        if (i == 16) {
            topr = 38;
            topg = 193;
        }
        selecol += divo(y, topg, topr, 18, 18, salcoul[i], "z-index:46;' onmouseover=this.style.width=22;this.style.height=22;this.style.margin=-2; onmouseout=this.style.width=18;this.style.height=18;this.style.margin=0; onclick=couli(" + i + ");colsave=-1;document.getElementById('colium').style.visibility='visible';sauve(0);", "");

    }

    if (contor == 777)
        setTimeout("initimob()", 50);

    document.getElementById("ongulus").innerHTML = sauvegarde;

    arrangus(0);

    if (ongleto == 999)
        resinit();
    else
        cliconglet(ongleto);

    if (!tablet) {
        hausalon();

    } else {
        exlist = 0;
    }

}

const pSBC = (p,c0,c1,l)=>{
    let r, g, b, P, f, t, h, i = parseInt, m = Math.round, a = typeof (c1) == "string";
    if (typeof (p) != "number" || p < -1 || p > 1 || typeof (c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !a))
        return null;
    if (!this.pSBCr)
        this.pSBCr = (d)=>{
            let n = d.length
              , x = {};
            if (n > 9) {
                [r,g,b,a] = d = d.split(","),
                n = d.length;
                if (n < 3 || n > 4)
                    return null;
                x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)),
                x.g = i(g),
                x.b = i(b),
                x.a = a ? parseFloat(a) : -1
            } else {
                if (n == 8 || n == 6 || n < 4)
                    return null;
                if (n < 6)
                    d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
                d = i(d.slice(1), 16);
                if (n == 9 || n == 5)
                    x.r = d >> 24 & 255,
                    x.g = d >> 16 & 255,
                    x.b = d >> 8 & 255,
                    x.a = m((d & 255) / 0.255) / 1000;
                else
                    x.r = d >> 16,
                    x.g = d >> 8 & 255,
                    x.b = d & 255,
                    x.a = -1
            }
            return x
        }
        ;
    h = c0.length > 9,
    h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h,
    f = this.pSBCr(c0),
    P = p < 0,
    t = c1 && c1 != "c" ? this.pSBCr(c1) : P ? {
        r: 0,
        g: 0,
        b: 0,
        a: -1
    } : {
        r: 255,
        g: 255,
        b: 255,
        a: -1
    },
    p = P ? p * -1 : p,
    P = 1 - p;
    if (!f || !t)
        return null;
    if (l)
        r = m(P * f.r + p * t.r),
        g = m(P * f.g + p * t.g),
        b = m(P * f.b + p * t.b);
    else
        r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5),
        g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5),
        b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    a = f.a,
    t = t.a,
    f = a >= 0 || t >= 0,
    a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
    if (h)
        return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
    else
        return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
}

function ascenceur(dpt) {
    if (document.getElementById("scrall").style.zIndex < 20) {

        if (dpt == 1) {
            if (timasco < mini)
                asco = setTimeout("document.getElementById('cachslide').style.display='none'", 150);

        } else {
            clearTimeout(asco);
        }
    }
}

function showopt(dpr) {
    var qm4 = "";
    if (dpr == 1)
        qm4 = lesopt;
    document.getElementById("optim").innerHTML = qm4;
}

function designu() {

    des1 = (des1 + 1) % 7;

    taillo();

    /*
for(i=0; i<maxonglus; i++)
{

document.getElementById("brdg"+i).src="gauche"+bordi+".gif";
document.getElementById("ongur"+i).src="droite"+bordi+".gif";
}
*/
    sauve(0);

}