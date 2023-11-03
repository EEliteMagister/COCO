var itext="";
var modfun=1;
var upil="<div style='font-size:26;'>";
var tabout1=new Array("Options","clavier","Clavier");
var tabout2=new Array(upil+"&#9660;","salons","Accueil");
var tabout3=new Array("connectés","connectés","Options");
var tabout4=new Array("salons","Options","Clavier");
var freeza,freezo,freeztouc,freezy=0;
var freeze=false;
var whatim="";
var gg33="";
//contor=777;

var qqy=50;
var resulo=new Array(0,0,0,0);;
var moyo=new Array(0,0,0,0);
var tranzo;
var accel;
//var divax;
var moyu;

var divik=new Array();
var cdiv=0;
var vvcoul=["57bb8a","73b87e","94bd77","b0be6e","d4c86a","f5ce62","e9b861","ecac67","e79a69","e2886c","dd776e","","",""];

var lettro=["à",":)","é","è",",",".","ù","ï","ô","!","a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","up","w","x","c","v","b","n","'","bac","mic","&nbsp;","?","enter"];
var lettrocoul=new Array();
for (i=0; i<10; i++)
	lettrocoul[i]=1;
	for (i=38; i<44; i++)
lettrocoul[i]=1;
	lettrocoul[40]=0;
lettrocoul[30]=1;
lettrocoul[38]=1;
var lettrow=new Array();
for (i=0; i<44; i++)
lettrow[i]=26;
lettrow[30]=38;
lettrow[38]=46;
lettrow[40]=180;
lettrow[42]=48;
var debsav;

var rofin=new Array(920,2300,0,0);

var alterco="88aadd";
var hautedebase=0;


var SpeechRecognition;
var recognition;
var startouch=0;
var nopan=0;
var scrolo=0;

var keltel=0;
var naviz=navigator.userAgent.toLowerCase();
if(naviz.indexOf("android")>-1)
{
	keltel=1;
	if(naviz.indexOf("chrome")==-1)
	alert("pour faire fonctionner coco sur Android téléchargez Chrome pour mobile");
}
if(naviz.indexOf("dows phon")>-1)
keltel=2;



kbona=0;
kbtim=-6;

if(keltel==2)
{
start1="onmousedown";
end1="onmouseup";
move1="onmousemove";	
	
}

if(!((navigo.match(/iP/i)||(hhk.indexOf("iphon")>-1)||(navigo.indexOf("android")>-1)||(navigo.indexOf("indows pho")>-1))))
start1="onmousedown";


var vwp = document.getElementById('viewport');
var bloctrans=true;





var displayImage = new Image();

let minScale = 1;
let maxScale = 4;
let imageWidth;
let imageHeight;
let containerWidth;
let containerHeight;
let displayImageX = 0;
let displayImageY = 0;
let displayImageScale = 1;

let displayDefaultWidth;
let displayDefaultHeight;

let rangeX = 0;
let rangeMaxX = 100;
let rangeMinX = -100;

let rangeY = 0;
let rangeMaxY = 0;
let rangeMinY = 0;

let displayImageRangeY = 0;

let displayImageCurrentX = 0;
let displayImageCurrentY = 0;
let displayImageCurrentScale = 1;



var inidist=0;

var oldzoom=1;
var samp1=0;
var samp2=0;
var samp3=0;
var moy1=0;


var clampin=false;
var nodow;
var disap,disapo;
var clav2=false;

function clampzoomout(value, min, max) {
  
  var qq7=value;
    	
  	qq7=value;

  		var coefqq=3.33*(displayImageCurrentScale-1);
  		var ecarto=(coefqq*value);
  		if(clampin)
  		qq7=ecarto;
  	
 
  return qq7;
  
}


function eventHandler(e) {
    
  
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    
    e.preventDefault();
        
}



function kelzoom()
{
messig(window.innerWidth+ "  XYY "+window.innerHeight);
//alert(window.outerWidth+ "  XX"+window.outerHeight);
	
}


function initimob()
{

dimdim();


if(window.innerHeight!=oldheight)
{
	resizex=true;
	
	sourisup();
}
else
initifu();	
	
}
function disto(event)
{
return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
}

function descroll()
{

if(scrolo<(mini-3))
{
	
	scrolo=mini;
	document.body.scrollTop=0;
	window.scroll(0, 0);
}
	
}
function descra(e)
{

//document.body.scrollTop=0;


/*
document.getElementById("textum").style.overflow = 'hidden';
     messig('aokkooos');
      //event.stopPropagation();
      document.getElementById("textum").style.overflow = 'auto';
e.preventDefault();
document.getElementById("htma").scrollTop = document.getElementById("htma").scrollTop;
document.getElementById("htma").scrollTop=0;
//document.getElementById("htma").style.overflow="hidden";
*/
//messig("desc--jjqrda");


}

function stopParentScroll(selector) {
    let last_touch;
    let MouseWheelHandler = (e, selector) => {
        let delta;
        if(e.deltaY)
            delta = e.deltaY;
        else if(e.wheelDelta)
            delta = e.wheelDelta;
        else if(e.changedTouches){
            if(!last_touch){
                last_touch = e.changedTouches[0].clientY;
            }
            else{
                if(e.changedTouches[0].clientY > last_touch){
                    delta = -1;
                }
                else{
                    delta = 1;
                }
            }
        }
        let prevent = function() {
            e.stopPropagation();
            e.preventDefault();
            e.returnValue = false;
            messig("prevento");
            return false;
        };

        if(selector.scrollTop === 0 && delta < 0){
            return prevent();
        }
        else if(selector.scrollTop === (selector.scrollHeight - selector.clientHeight) && delta > 0){
            return prevent();
        }
    };

    selector.onwheel = e => {MouseWheelHandler(e, selector)}; 
    selector.onmousewheel = e => {MouseWheelHandler(e, selector)}; 
    selector.ontouchmove  = e => {MouseWheelHandler(e, selector)};
}

function stoplettre()
{
	
if(disapo)
document.getElementById('loupe').style.display='none';
else
disapu=true;
}
function disapa()
{
disapo=true;
if(disapu)
document.getElementById('loupe').style.display='none';
}

function showlettre(mm3)
{
//document.getElementById('cocoa').value+=lettro[mm3];	
//document.getElementById("toucho").play();
var fg9=document.getElementById("lettro"+mm3);


if(lettrow[mm3]==26)
{
	clearTimeout(disap);
	disapo=true;
	var lt5=document.getElementById('loupe');
lt5.innerHTML=lettro[mm3];

dtop("loupe",parseInt(fg9.style.top, 10)-40);
dleft("loupe",parseInt(fg9.style.left, 10)-7);
lt5.style.display="inline";
disapo=false;
disapu=false;
disap=setTimeout("disapa()",140);

	document.getElementById('cocoa').value+=lettro[mm3];	

}
else if(mm3==38)
	document.getElementById('cocoa').value=document.getElementById('cocoa').value.slice(0, -1);
else if(mm3==40)
document.getElementById('cocoa').value+=" ";	




	window.navigator.vibrate(20);
}


function retourlig(e)
{

if (e.keyCode == 13 && !e.shiftKey)
{
e.preventDefault();
writus();	
}
if(tabnickID[ongleto]>1000)
{

	if(ecritum==0)
	if(document.getElementById("cocoa").value.length==0)
	{
		notif(1);
		ecritum=1;
	}
	

}


}



function escapo()
{
/*
var yyk=document.getElementById("croiw");
	//yyk.style.top="15px";
	yyk.style.transition="transform 330ms ease-in-out";
	yyk.style.transform="translateX(-100px) translateY(100px) translateZ(0px) scale(3)";
	yyk.onclick=function(){top.location=base;}
	*/
top.location=base;
}

function initifu()
{







modfun=1;
des1=0;
contor=888;
//alert("contoraaa"+contor);





if(largg==580)
{
	ligg=320;
	imageContainer.style.width="580px";
	
	
}



var scru=document.getElementById('ecrito').style;
scru.zIndex=96;
scru.backgroundColor="#e2b838";
scru.padding="3px";
scru.borderRadius="4px";
dleft("ecrito",10);
var finuu="width="+largg;//+", user-scalable=0, user-scalable=no";
if(isIOS13)
{
	finuu+=", user-scalable=0, user-scalable=no";
}


if(largg!=660)
vwp.setAttribute("content",finuu);



document.body.style.width=largg+"px";

//messig("largo "+largg+ "   "+window.innerWidth);


//document.body.onmouseup =  function(e){e.preventDefault();}
//document.body.onscroll=function(event){"event.preventDefault();messig('rrrf');"};

var istab=1;

if(tabletus)
{

	istab=2;
	
}

dleft("ifranos",-300)
document.getElementById("zerob").style.visibility="hidden";


var lefti=0;

var juki="<div id=juki style='position:absolute;bottom:0;width:100%;height:100px;background-color:#aaa;z-index:55;touch-action:pan-y;'>";



modfun=istab;

juki+="<div id=bout1 "+start1+"=bouton1(); "+end1+"=eventHandler(event); style='touch-action:none;position:absolute;width:97px;height:93px;top:0;left:-2px;z-index:55;background-color:#bbbbbb;text-align:center;border-style:solid;border-width:1px;border-color:000000;'>"+tabout1[istab]+"</div>";
juki+="<div id=bout2 onclick=bouton2(); style='position:absolute;width:95px;height:93px;top:0;left:94px;z-index:55;background-color:#bbbbbb;text-align:center;border-style:solid;border-width:1px;border-color:000000;'>"+tabout2[istab]+"</div>";
juki+="<div id=bout3 onclick=bouton3(); style='position:absolute;width:95px;height:93px;top:0;left:188px;z-index:55;background-color:#bbbbbb;text-align:center;border-style:solid;border-width:1px;border-color:000000;'>"+tabout3[istab]+"</div>";
if(!tabletus)
juki+="<div id=bout4 onclick=bouton4(); style='position:absolute;width:99px;height:93px;top:0;left:282px;z-index:55;background-color:#bbbbbb;text-align:center;border-style:solid;border-width:1px;border-color:000000;'>"+tabout4[istab]+"</div>";

var x12=largg-330;
if(clav2)
{



juki+=divon("soft1",x12,-160,333,250,"bbbbbb","z-index:300;'","<div id=loupe class='key' style='position:absolute;display:none;-webkit-box-shadow: #aaa 0px -1px 0px 0px;width:45px;height:45px;z-index:355;'></div>");

//juki+="<div id=loupe class='key' style='display:inline;position:absolute;width:45px;height:45px;z-index:355;'></div>";
//juki+=divon("soft2",400,cadry+widy-200,250,250,"dddddd","display:none;'","aaaa");
var cck=document.getElementById("cocoa");

cck.readOnly = true;
cck.style.width=(largg-310)+"px";
dtop("cocoa",cadry+widy-200);
dleft("cocoa",x12);




}


juki+="</div>";

juki+="<img id=croiw src=croiw.gif class='pixelated' onclick=escapo(); WIDTH=42 style='position:absolute;top:0;z-index:93;right:0px;'>";

document.getElementById("tout").innerHTML+=juki;



//document.getElementById("juki").innerHTML=juki;

if(!tabletus)
{
	document.getElementById('searchy').style.visibility="hidden";
dleft("searchy",20);
}
else
	{	

if(clav2)
{
var laclass="";	
var xdd=0;
var ydd=0;
for (i=0; i<43; i++)
{
laclass="key";
if(lettrocoul[i]==1)
laclass+=" system_key";



document.getElementById('soft1').innerHTML+=divo("lettro"+i,xdd,ydd,lettrow[i]+6,51,y,"' ontouchstart=cancelo(event);showlettre("+i+"); ontouchend=stoplettre();",divo(y,3,4,lettrow[i],y,y,"' class='"+laclass+"'",lettro[i]));
xdd+=(lettrow[i]+6);
if(xdd>(300))
{
xdd=0;
ydd+=51;
}
}
}


	}
//dtop("closus",extcloset);
dleft("closus",largg-220);




dtop("salox",5);
dleft("salox",10);

document.getElementById("salox").style.width=360;







zet=document.getElementById("textum");
zet.style.width=largg;

var scaling=false;
try
{
	
	zet.addEventListener('touchstart', function (e) {
		
  if(e.touches.length > 1)
  {
  	e.preventDefault();	
  	inidist=disto(e);
  	
  }
  });
  
 
	
zet.addEventListener('touchmove', function (e) {
  	if (event.touches.length === 2) {
  	e.preventDefault();
  	
  	var actuazo=disto(e);
  	if((actuazo-inidist)>75)
  	{
  		inidist=actuazo;
  		incremfont(1,true);
  		
	
	scrolldown();		
  	}
  	else if((actuazo-inidist)<-70)
  	{
  		inidist=actuazo;
  		incremfont(-1,true);
	  		
  	}	
  }
  });
  
 
//document.body.onscroll=function(e){e.preventDefault();messig("dqqqqgch"+document.body.scrollTop);descroll();};


}
catch(nkn){}




//document.getElementById("searchy").style.webkitAppearance="button";






document.getElementById("babar").style.zIndex=75;

document.getElementById("cadrum").style.overflow="hidden";


setTimeout("initdisp()",500);





//document.getElementById("tout").style.height=""+(hautos+250)+"px";
document.body.style.backgroundColor="#000";

document.body.style.webkitUserSelect='none';
document.body.style.webkitTouchCallout='none';
document.body.style.webkitTextSizeAdjust='none';


imageContainer.ontouchstart=function(){startouch=mini;nodow=setTimeout("savimage()",1000);};
imageContainer.onclick=function(event){phix(event);};



resizeContainer();

redimbout();

if(andro>0)
document.body.style.touchAction = "auto";
	


//window.addEventListener('resize', resizeContainer, true);



displayImage.onload = function(){
  //displayImage.style.visibility="visible";
  imageWidth = displayImage.width;
  imageHeight = displayImage.height;
  imageContainer.appendChild(displayImage);
  displayImage.addEventListener('mousedown', e => e.preventDefault(), false);
  displayDefaultWidth = displayImage.offsetWidth;
  displayDefaultHeight = displayImage.offsetHeight;
  rangeX = Math.max(0, displayDefaultWidth - containerWidth);
  rangeY = Math.max(0, displayDefaultHeight - containerHeight);
  
  
rangeMaxX = 100;
rangeMinX = -100;

rangeMaxY = 100;
rangeMinY = -100;

  
}

imageContainer.addEventListener('wheel', e => {
  displayImageScale = displayImageCurrentScale = clampScale(displayImageScale + (e.wheelDelta / 800));
  updateRange();
  displayImageCurrentX = clamp(displayImageCurrentX, rangeMinX, rangeMaxX)
  displayImageCurrentY = clamp(displayImageCurrentY, rangeMinY, rangeMaxY)
	updateDisplayImage(displayImageCurrentX, displayImageCurrentY, displayImageScale);  
}, false);





const hammertime = new Hammer(imageContainer);

hammertime.get('pinch').set({ enable: true });
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL});



hammertime.on('pan', ev => {
	startouch=mini+3;




if((mini-nopan)>3)
	{
	
	
	
	rangeX = Math.max(0, Math.round(displayDefaultWidth * displayImageCurrentScale) - containerWidth);
  rangeY = Math.max(0, Math.round(displayDefaultHeight * displayImageCurrentScale) - containerHeight);
	
		
	rangeMaxX = Math.round(((rangeX / 2)+100)/displayImageCurrentScale);
  rangeMinX = 0 - rangeMaxX;

  rangeMaxY = Math.round(((rangeY / 2)+100)/displayImageCurrentScale);
  //rangeMaxY = Math.round(100*displayImageCurrentScale);//Math.round(rangeY / 2)+Math.round(100/displayImageCurrentScale);
  rangeMinY = 0 - rangeMaxY;
  
  //updateRange();
  
  
	
  displayImageCurrentX = clamp(displayImageX + ev.deltaX/displayImageScale, rangeMinX, rangeMaxX);
  displayImageCurrentY = clamp(displayImageY + ev.deltaY/displayImageScale, rangeMinY, rangeMaxY);
  
  
  
	updateDisplayImage(displayImageCurrentX, displayImageCurrentY, displayImageScale);
	

}		
	
});

hammertime.on('pinch pinchmove', ev => {
	nopan=mini;
	startouch=mini+3;
  
  
  
  oldzoom=displayImageCurrentScale;
  displayImageCurrentScale = clampScale(ev.scale * displayImageScale);
  updateRange();
   
  samp1=displayImageCurrentScale-oldzoom;
  moy1=samp1+samp2+samp3;
  
  if((moy1<-0.001)&&(displayImageCurrentScale<1.3))
  {
  	clampin=true;
  	nopan=mini;
  }
  else if(moy1>0.001)
  clampin=false;
  	
  samp3=samp2;
  samp2=samp1;
  
  
  
  
  
   displayImageCurrentX=clampzoomout(displayImageX + ev.deltaX/displayImageScale, rangeMinX, rangeMaxX) ;
 		displayImageCurrentY=clampzoomout(displayImageY + ev.deltaY/displayImageScale, rangeMinY, rangeMaxY);
  
  
  updateDisplayImage(displayImageCurrentX, displayImageCurrentY, displayImageCurrentScale);
});

hammertime.on('panend pancancel pinchend pinchcancel', () => {
  clearTimeout(nodow);
  displayImageScale = displayImageCurrentScale;
  displayImageX = displayImageCurrentX;
  displayImageY = displayImageCurrentY;
});


/*
hammertime.on('tap', ev => {  
alert("clicccl");
});
*/


var audioData = 'data:audio/mp3;base64,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';
document.getElementById("toucho").src=audioData;
//audio.src = audioData;

}




function updateDisplayImage(x, y, scale) {
  const transform = 'scale(' + scale + ',' + scale + ') translateX(' + x + 'px) translateY(' + y + 'px) translateZ(0px)';
  displayImage.style.transform = transform;
  displayImage.style.WebkitTransform = transform;
  displayImage.style.msTransform = transform;
 
}

function resizeContainer() {
  
  
  containerWidth = imageContainer.offsetWidth;
  containerHeight = imageContainer.offsetHeight;

  if (displayDefaultWidth !== undefined && displayDefaultHeight !== undefined) {
      
      
      

displayImageX = 0;
displayImageY = 0;
displayImageScale = 1;


rangeX = 0;
rangeMaxX = 100;
rangeMinX = -100;

rangeY = 0;
rangeMaxY = 100;
rangeMinY = -100;

displayImageRangeY = 0;

displayImageCurrentX = 0;
displayImageCurrentY = 0;
displayImageCurrentScale = 1;
      
      
           
      
      
    displayDefaultWidth = displayImage.offsetWidth;
    displayDefaultHeight = displayImage.offsetHeight;
    updateRange();
    displayImageCurrentX = clamp( displayImageX, rangeMinX, rangeMaxX );
    displayImageCurrentY = clamp( displayImageY, rangeMinY, rangeMaxY );
    updateDisplayImage(
      displayImageCurrentX,
      displayImageCurrentY,
      displayImageCurrentScale );
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function clampScale(newScale) {
  if(newScale<1)
	clampin=true;
  return clamp(newScale, minScale, maxScale);
}


function updateRange() {
  rangeX = Math.max(0, Math.round(displayDefaultWidth * displayImageCurrentScale) - containerWidth);
  rangeY = Math.max(0, Math.round(displayDefaultHeight * displayImageCurrentScale) - containerHeight);
  
  //rangeMaxX = Math.round(rangeX / 2);
  rangeMaxX = Math.round(rangeX / 2)+Math.round(40*(displayImageScale.toFixed(4)-1));
  rangeMinX = 0 - rangeMaxX;

  //rangeMaxY = Math.round(rangeY / 2)
  rangeMaxY = Math.round(rangeY / 2)+Math.round(40*(displayImageScale.toFixed(4)-1));
  rangeMinY = 0 - rangeMaxY;
}






function initdisp()
{

document.body.style.overflow="hidden";


if(!isIOS13)
{
	//document.body.style.width="380px";


const rootElement = document.documentElement;

// Apply CSS transform to zoom out
//rootElement.style.transform = 'scale(1)'; // Adjust the scale value as needed

// Apply other CSS properties to ensure the content fits within the viewport
rootElement.style.transformOrigin = 'top left';
rootElement.style.width = '100%';
//rootElement.style.height = '100%';

// Disable user scaling to prevent further zooming
rootElement.style.userSelect = 'none';
rootElement.style.touchAction = 'none';

}

//kelzoom();

//messig("Largos "+window.innerWidth);
//window.scrollTo(0, 1);

//document.body.style.overflowY="auto";

var lcy=document.getElementById("optim");


if(largg<600)
{
lcy.style.left=120;
lcy.style.zIndex=0;
}
hautedebase=window.innerHeight;
//window.onresize = checkDimensions;



ligg=hautedebase-355;

if(standalone)
{
	ligg=hautedebase-430;
ligg-=50;
}
if(largg>600)
{
ligg=140;
imageContainer.style.width=largg+"px";

}
if(oldapp)
{
	
	var wxx=document.getElementById("webapp");
	
dleft("webapp",100);
wxx.style.width="180px";
	wxx.innerHTML=divo(y,0,0,y,60,"e84134","' onclick=newapp();","Desinstallez cette ancienne appli");
	
wxx.style.display="inline";
wxx.style.zIndex = 25;
//alert("oldap");
}

	
}

function newapp()
{
	disp(6000,220,-30,"desinstallez cette ancienne application obsolete<br><br>appuyez longuement sur l icone coco pour desintaller<br><br><object data='coco-app-icon.svg' width='150' type='image/svg+xml' style='z-index:20;'></object><object data='longpress.svg' width='200' type='image/svg+xml' style='display:inline;z-index:20;'></object><br><br>puis reinstallez la nouvelle appli",340,-1,'bda',true,false);
	
}

function checkDimensions(aaa)
{
	alert(window.innerHeight);
}

function dragos(abz)
{

//var divax=document.getElementById(aax);
divik[cdiv]=document.getElementById(abz);

//divik[cdiv].style.webkitTransitionTimingFunction ='ease-out';//'cubic-bezier(0,0,0.25,1)';




var ghg=cdiv;

divik[cdiv].style.height=widy-15;
//divik[cdiv].style.height=rofin[ghg];



cdiv++;

}




	





function remkb()
{


	
}
function kboff()
{
	
	
modezemic=0;	
//alert("off");
if(clav2)
{
document.getElementById('soft1').style.display='none';	

}


document.getElementById('cocoa').style.display="none";
document.getElementById('boutus').style.display="none";
if(ongleto!=0)
document.getElementById('closus').style.display="inline";

zet.style.zIndex=10;
dtop("textum",cadry+1);
dleft("textum",2);
dtop('ecrito',cadry+widy-22);
kbona=0;

zet.style.width=largg;
zet.style.height=widy-2;

setTimeout("kbend()",200);


}
function kbend()
{
scrolldown();
window.scrollTo(0, 1);
}

function kbon()
{
kbona=1;
kbtim=mini;
modezemic=0;
var ligy=document.getElementById('cocoa');
/*
var ccc1="#eeeeee";
if(tabnickID[ongleto]>1000)
ccc1="#C5DAF9";
ligy.style.backgroundColor=ccc1
*/


document.getElementById('closus').style.display="none";
ligy.style.display="inline";
document.getElementById('boutus').style.display="inline";
autohei();

ligy.style.zIndex=155;
if(andro>0)
setTimeout("kbsize()",800);


if(clav2)
{
document.getElementById('soft1').style.display='inline';	

}
//messig("kbon");


//zet.style.backgroundColor="#ff00ff";
dtop("textum",cadry+41);
dleft("textum",2);




//zet.style.width=larzone+50;
if (ongleto==0)
{
	//ligy.style.height=40;
	zet.zIndex=10;
	zet.style.height=5;
}
else
{
	zet.style.zIndex=94;
	
	
	
		zet.style.height=ligg;
		scrolldown();
	
	
	dtop("ecrito",cadry+38);
	document.getElementById("ecrito").style.zIndex=96;
	
}


//if(keltel!=1)
ligy.focus();

setTimeout("kbclic()",50);

}
function kbsize()
{
var hte=window.innerHeight;
//messig( "hte " +hte+ "     ---- huatdebase"+hautedebase);
//document.getElementById("textum").style.height="calc(100vh - 130px)";

if(ligg>(hte-30-cadry))
{
	ligg=hte-30-cadry;
zet.style.height=ligg;
scrolldown();
}





}

function kbclic()
{


//window.scrollTo(0,1); retire

window.scrollTo(0, 1);


}

function effacio()
{

var eff1=document.getElementById('cocoa').value;
//alert(eff1.length);

if(eff1.length>1)
{
	
	document.getElementById('cocoa').value="";
	

}
else
{
	document.getElementById('cocoa').blur();
	kboff();
}
autohei();
}
	
function jjj()
{
	messig(window.innerHeight);
	
}

function fontasiz()
{
	incremfont(1,false)
	
	
	document.getElementById('funta').innerHTML="taille "+fontasize+"<br>police";
	
}

function bouton1()
{
	
if(modfun==1)
{

	
	kbon();
	
	
	
}
else
{
	if(kbona==0)
	kbon();
	else
	kboff();
	
}	


}


function bouton2()
{


	
if(modfun==1)
{
	
	
	//document.body.innerHTML+="<div >aaa</div>";
	//resinit();
	//modax(0);
	
	
	cliconglet(0);
	
	document.getElementById('searchy').style.visibility="hidden";
	document.getElementById('salox').style.visibility="visible";
	document.getElementById("salox").innerHTML=resux;
	
	
	
}
else if(modfun==2)
{
	cliconglet(0);
	
	
}

	
}
function bouton3()
{


if(modfun==1)
{


cliconglet(0);

document.getElementById('salox').style.visibility="hidden";
	document.getElementById('searchy').style.visibility="visible";
	document.getElementById("searchy").innerHTML=rechum+resum;


}
else if(modfun==2)
{
	affioptio();
	
	
}

	
}



function bouton4()
{
	
	if(modfun==1)
{
//kboff();
affioptio();
		
		//hsl.style.zIndex=80;
	
	
}
else if(modfun==2)
{
	kbon();
	
}
	
	




}


function affioptio()
{
	document.getElementById('cocoa').blur();
	var hsl=document.getElementById('optim');
	
		
		var amz1=listam;
		var amz3=ffID.length;
		if(amz3==0)
		amz1="liste des amiz";
		var hz3=100;
		var hinc=0;
		if(amz3>5)
		{
			hinc=80;
			hz3=200;
		}
		var adden=divon(y,5,5,180,hz3,"E2B838",touchy+"overflow:auto;padding-left:10px;' ","<br>"+amz1);
		//adden+=divon(y,100,110,80,45,"b8bed8",touchy+"' onclick=emota();","Smiley");
		adden+=divon(y,100,130+hinc,80,45,"d8afca",touchy+"' onclick=filtro();","&nbsp;"+filtram);
		adden+=divon(y,100,240+hinc,80,45,"ddccaa",touchy+"' onclick=premiolo();","Premium");
		adden+=divon(y,5,130+hinc,80,45,"e69e9e",touchy+"' onclick=agir(77369);","Info");
		adden+=divon(y,5,190+hinc,80,45,"dddddd",touchy+"' onclick=profilum();","Profil");
		adden+=divon(y,100,190+hinc,80,45,"bbddaa",touchy+"' onclick=reseto();messig('reset')","Reset");
		
		adden+=divon("funta",5,300+hinc,80,45,"bbddaa",touchy+"' "+start1+"=fontasiz();","taille "+fontasize+"<br>police");
		//var yud=divo(y,5,5,185,370,"","overflow:hidden;' onclick=disparu();",adden);
		disp(-1,400,cadry+widy-400-hinc,adden,200,430+hinc,"eeeeee",true,false);
	
}

function freeza()
{
freeze=false;
freezy=0;	
}


function bluro()
{
if(!clav2)
{
if(modezemic==0)
kboff();
else if(modezemic<0)
	modezemic=0;
}
	//document.getElementById('cocoa').blur();
}

function speecha()
{
	


zet.style.width=largg;
zet.style.height=widy-32;
var wqm=document.getElementById("zemic");
if(modezemic==0)
{
		       
		        
                // new speech recognition object
                SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                modezemic=1;
                
                recognition.onstart = function() {
                	
                    wqm.innerHTML="<br><b>GO</b>";
                    wqm.style.backgroundColor="#cc8888";
                    modezemic=3;
                };
                
                recognition.onspeechend = function() {
                    //action.innerHTML = "<small>stopped listening, hope you are done...</small>";
                     modezemic=1;
                     wqm.innerHTML="<br><b>mic</b>";
                    wqm.style.backgroundColor="#bb88bb";
                    recognition.stop();
                    
                }
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var areos=document.getElementById('cocoa');
                    
                    var transcript = event.results[0][0].transcript;
                    
                    try
                    {
                    if(areos.value.length>4)
                    transcript=areos.value+" "+transcript;
                    areos.value=transcript;
                    
                    areos.style.height="auto;"
                    
                    
                    areos.style.height=(areos.scrollHeight)+"px";
                    
                    
                  	}
                  	catch(tgg){alert("puuurb"+tgg);}
                   
                    
                    wqm.innerHTML="<br><b>mic</b>";
                    wqm.style.backgroundColor="#bb88bb";
                    modezemic=1;
                    //var confidence = event.results[0][0].confidence;
                    //output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
                    //output.classList.remove("hide");
                };
                
                recognition.start();
}
if(modezemic==3)
{
	wqm.innerHTML="<br><b>mic</b>";
  wqm.style.backgroundColor="#bb88bb";
	recognition.stop();
	modezemic=1;
	
}
if(modezemic==1)
{
	wqm.innerHTML="<br><b>GO</b>";
   wqm.style.backgroundColor="#cc8888";
   recognition.start();
    modezemic=3;
	
}

defoc();

            
                // This runs when the speech recognition service starts
                
              
                 // start recognition
                 
	        

	
}
function defoc()
{
	document.getElementById('cocoa').blur();
}

function quist()
{
	document.getElementById('cocoa').value+=" ?";
	
}

function autohei(ev)
{
	//alert("dd"+ev.keyCode);
	var areos=document.getElementById('cocoa');
   if(areos.value.length<30)
   areos.style.height="32px";   	
   	else
   		{
   areos.style.height="auto;"
   var klh=areos.scrollHeight;
   if(klh<32)
   klh=32;
  areos.style.height=klh+"px";
  
}
  
	
}


function phit(fff)
{
	
if(kbona==1)
bluro();
try
{
	
imageContainer.style.height=hautos+1;	
}
catch(fgf){alert(" rrrr " +fgf)} 
	resizeContainer();
displayImage.src =""+ fff;
displayImage.crossOrigin = "Anonymous";
whatim=fff;


//imageContainer.appendChild(displayImage);

imageContainer.style.zIndex=200;
imageContainer.style.visibility="visible";


}
function phin()
{
imageContainer.style.backgroundColor="#dca";
}

function phix(e)
{

try
{
var x11=e.clientX;
var letempo=mini-startouch;			
startouch=mini+3;
if(x11<80)
{

var stox="<div id=voto style='position:absolute;left:0;top:0;width:80px;height:100%;'>";
	
for (i=0; i<11; i++)
stox+="<div id='voti"+i+"' onmousedown=votus('"+i+"'); style='text-align:center;line-height: 40px;background-color:"+vvcoul[i]+";position:absolute;cursor:default;top:"+(490-i*48)+"px;left:16px;width:40px;height:40px;user-select: none;border-radius:6px;border-style:solid;border-width:2px;border-color:#000;'>"+i+"</div>";
stox+="</div>";

document.getElementById("containo").innerHTML=stox;
document.getElementById("containo").style.zIndex=233;	
	
	
}		
else
{
	if(letempo>-1)
	{
		fermaphot();
		document.getElementById("textum").focus();
	}
}
}
catch(eeg){alert(eeg);fermaphot();}




    
}

function fermaphot()
{
	document.getElementById("containo").style.zIndex=0;	
	displayImage.src ="https://www.coco.gg/trans.png";
	document.getElementById("mago").style.height="70px";
	
//document.getElementById("mago").innerHTML="";
document.getElementById("mago").style.visibility="hidden";
document.getElementById("mago").style.zIndex=0;
document.getElementById("mago").style.backgroundColor="";
//window.scrollTo(0, 1);
	
}

function votus(note)
{
	for (i=0; i<11; i++)
	{
if(i==note)
{
	var yyk=document.getElementById("voti"+i);
	//yyk.style.top="15px";
	yyk.style.transition="transform 330ms ease-in-out";
	yyk.style.transform="scale(1.8)";
	yyk.style.fontWeight="bold";
	setTimeout("byevote()",1500);
	
	//parent.postMessage("FFFFFFf", "*");
	
	
	agir("77577"+whatim.substring(whatim.lastIndexOf("/")-1)+(10+i));
	yyk.onmousedown=function(){fermaphot();}
	
}
else
document.getElementById("voti"+i).style.display="none";
}	
}

function byevote()
{
document.getElementById("containo").style.zIndex=0;	
	
}

function savimage()
{


if((mini-startouch)>8)
{
gg33=whatim.substring(whatim.lastIndexOf("/")+1);
downloadResource(whatim,gg33);

}




}



function forceDownload(blob, filename) {
  var a = document.createElement('a');
  a.download = filename;
  a.href = blob;
  // For Firefox https://stackoverflow.com/a/32226068
  document.body.appendChild(a);
  a.click();
  a.remove();
  if(andro>0)
  {
  var pp567=document.getElementById("wirn");
pp567.innerHTML="Fichier Telechargé";
pp567.style.zIndex=444;
pp567.style.top="20px";
pp567.style.backgroundColor="#bda";
pp567.style.display="inline";
pp567.style.width="";
pp567.style.padding="8px";
pp567.style.borderRadius="6px";


	pp567.style.transition="transform 330ms ease-in-out";
	pp567.style.transform="scale(1.8)";
	
	setTimeout("fictele()",2400);
}

}

function fictele()
{
	document.getElementById("wirn").style.transform="scale(1)";
	document.getElementById("wirn").style.zIndex=0;
}

// Current blob size limit is around 500MB for browsers
function downloadResource(url, filename) {
  if (!filename) filename = url.split('\\').pop().split('/').pop();
  fetch(url, {
      headers: new Headers({
        'Origin': location.origin
      }),
      mode: 'cors'
    })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch(e => console.error(e));
}


function restruc()
{
	
	setTimeout("rees()",100);
	
}
function rees()
{
//document.getElementById("htma").style.height=""+(inihautos+100)+"px";
document.getElementById("tout").style.height=""+(inihautos+300)+"px";	
//messig("dededd"+document.getElementById("htma").scrollTop);
messig("dededd"+document.body.scrollTop);
//document.body.scrollTop=0;
//window.scrollTo(0,1);

}




const download = async (url, filename) => {
    const data = await fetch(url)
    const blob = await data.blob()
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.setAttribute('href', objectUrl)
    link.setAttribute('download', filename)
    link.style.display = 'none'

    document.body.appendChild(link)
  
    link.click()
  
    document.body.removeChild(link)
}

// Later call it with an URL and filename like so:












