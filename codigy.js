var nickidol="";
var citydio=-1;
var citygood="";
var ageuq="";

var sauvy="";

var townzz="";


var largum;
var hautum;

var decalbras=0;

var cookav=0;

var referenz="0";

var largj=1020;
var hautj=600;
var operis;
var iko;

var huko="";
var popup=true;
var ffox=false;
var miniaz=false;
//document.getElementById("tchat-live").style.height=180;
var urbase="http://www.coco.gg";
var arville=new Array();

var dejaapp=true;	
var orig="0";


function tailleur()
{
	
	
	if(mobilo)
	{
if(navigator.userAgent.toLowerCase().indexOf("android")>-1)
{
window.addEventListener("beforeinstallprompt", function(e)
{	
	dejaapp=false;
});
}	
	}
	

huko=""+location;
urbase=huko;
var yjj=urbase.lastIndexOf("/");
if(yjj>7)
urbase=urbase.substring(0,yjj);

if(huko.indexOf("redir")>0)
orig="1";



if(urbase.indexOf("www")==-1)
urbase="https://www.coco.gg";







var hhk=""+top.location;
var navigo=navigator.userAgent.toLowerCase();





//if((navigo.indexOf("mac os")==-1)||(tabli==1))

if(urbase.indexOf("https")==-1)
urbase="https"+urbase.substring(4);

urlprinc=urbase+"/chat/";


	
	decalbras=0;
	
	//document.getElementById("corprince").style.left=largum/2-460;
	
	
document.getElementById("nicko").focus();

cookav= Math.floor(Math.random()*890000000)+100000000;
	
var infor=LireCookie("coda");
if(infor!=null)
{



var wix1=infor.indexOf('#',0);
var wix2=infor.indexOf('#',wix1+1);
var wix3=infor.indexOf('#',wix2+1);
var wix4=infor.indexOf('#',wix3+1);

document.getElementById("nicko").value=infor.substring(0,wix1);


mytype=infor.substring(wix1+1,wix2);


ageuq=infor.substring(wix2+1,wix3);
document.getElementById("ageu").value=ageuq;

townzz=infor.substring(wix3+1,wix4);
if(townzz.length>2)
document.getElementById("zipo").style.width=(townzz.length*10+8)+"px";
document.getElementById("zipo").value=townzz;


citygood=infor.substring(wix4+1,wix4+6);
citydio=citygood;

/*
if(infor.length>(wix4+9))
{
	cookav=infor.substring(wix4+9,wix4+18);
	//cookpass=infor.substring(wix4+18,wix4+24);
}
*/
decalbras=370;


checky();



}



	
}



function checode(e)
{
	var autorisation=true;
	 var cocode=e.keyCode? e.keyCode : e.charCode;
	 
	 
	 if ((cocode<48)||(cocode>57))
	{
		autorisation=false;
		if (cocode==8)
		autorisation=true;
	}
	return autorisation;

	 
}

function checar(e)
{
	var autorisation=false;
	 var cocode=e.keyCode? e.keyCode : e.charCode;
	
	//alert(cocode);
	
	if ((cocode>47)&&(cocode<58))
	autorisation=true;
	if (cocode==8)
	autorisation=true;
	
	if ((cocode>64)&&(cocode<91))
	autorisation=true;
	if ((cocode>96)&&(cocode<123))
	autorisation=true;
	
	
	
	return autorisation;

	 
}



function verifPseudo(pseudo)
{
	
	
	
if(pseudo.length==5)
	{
		if (pseudo.indexOf("0",0)==0)
		{
		pseudo=pseudo.substring(1,5);
		}
				
		
		var headTag = document.getElementsByTagName("head").item(0); 
		var scriptTag = document.createElement("script"); 
		scriptTag.src = "cocoland/"+pseudo+".js";
		//headTag.appendChild( scriptTag );
		headTag.replaceChild( scriptTag, headTag.childNodes[5] );

	}
	
}




function procecodo()
{



document.getElementById("deroulante").innerHTML="";


var comptak=true;
var comptaki=0;
var transius="";
var endino=0;
var startum=0;

while(comptak)
{


endino=cityco.indexOf("*",startum);
transius=cityco.substring(startum,endino);


if (cityco.length<endino+2)
comptak=false;
else
{
startum=endino+1;		
}
if ((comptaki%2)!=0)
{
	document.getElementById("deroulante").innerHTML+="<div onclick=townselecto("+(comptaki-1)+");>"+ transius+"</div>";
	arville[comptaki]=transius;
	
}
else
{
	arville[comptaki]=transius;
}



comptaki++;
}



if(comptaki<16)
document.getElementById("deroulante").style.height=(comptaki/2+1)*20;
else
document.getElementById("deroulante").style.height=9*20;

if(comptaki==2)
{
document.getElementById("zipo").value=transius;
townzz=transius;
document.getElementById("zipo").style.width=transius.length*10+8;


citydio=arville[0];

}
else
{
	
	document.getElementById("deroulante").style.visibility="visible";
}
document.getElementById("zipo").blur();


	

	
	



}



function townselecto(nbv)
{

	townzz=arville[nbv+1];
	document.getElementById("zipo").value=townzz;
	document.getElementById("zipo").style.width=(townzz.length*10+6)+"px";
	
	citydio=arville[nbv];
	
		decalbras=360;
	
	document.getElementById("deroulante").style.visibility="hidden";
	verifok();
	
	
	
	
}



function refrage()
{
	ageuq=document.getElementById("ageu").value;
	if(ageuq.length>1)
	{
		if (ageuq<18)
		{
			alert("vous devez avoir au moins 18 ans pour rentrer");
			document.getElementById("ageu").value="";
		}

		if (ageuq>89)
		document.getElementById("ageu").value=89;	

		
		verifok();
	}
	
}
function refrgenr(dno)
{
	
	
		verifok();
	
}




function clickage()
{
ageuq=0;
document.getElementById("ageu").value="";
document.getElementById("ageu").focus();




decalbras=270;

	
}

function clicktown()
{

document.getElementById("zipo").value="";
document.getElementById("zipo").style.width="60px";
citydio=-1;
decalbras=320;



document.getElementById("deroulante").style.visibility="hidden";

document.getElementById("zipo").focus();
	
}


	



function checky()
{

if (mytype==1)
document.discuform.typeo[0].checked=true;
else
document.discuform.typeo[1].checked=true;

}

function verifok()
{
	if(ageuq<1)
	{	
	clickage();
	}
	else
	{
		
		if(citydio<0)
		{
			
			clicktown();
		}
		
	}	
	
	
}


function clearaz()
{
EcrireCookie("coda", "");	
document.getElementById("zipo").value="";	
document.getElementById("ageu").value="";
document.getElementById("nicko").value="";
}

function prevalid(modi)
{
				
nickidol=document.getElementById("nicko").value;
	if (nickidol.length>3)
	{
		
		ageuq=document.getElementById("ageu").value;
		
		if (ageuq>14)
		{
			if (citydio>-1)
			{
				citygood="";
				citygood=citydio;
				if (citygood.length!=5)
				{
					if (citygood.length==1)
					citygood="0000"+citygood;
					if (citygood.length==2)
					citygood="000"+citygood;
					if (citygood.length==3)
					citygood="00"+citygood;
					if (citygood.length==4)
					citygood="0"+citygood;
				}
				
				var sume=0;
				for (i=0; i<nickidol.length; i++) 
				{
					var ujm=nickidol.charCodeAt(i);
					if((ujm<95)&&(ujm>59))
					sume++;
				}
				if(sume>4)
				nickidol=nickidol.toLowerCase();

				
				var rrm=nickidol.indexOf(" ");
				while(rrm>-1)
				{
					nickidol=nickidol.replace(" ","");
					rrm=nickidol.indexOf(" ");
				}
				nickidol=nickidol.replace("_","");
			
				
				var infom=nickidol+"#"+mytype+"#"+ageuq+"#"+townzz+"#"+citygood+"#0#"+cookav+"#";
				EcrireCookie("coda", infom);
				
var standalone=false;
	
				try
				{
				if (window.matchMedia('(display-mode: fullscreen)').matches)
				{
  standalone=true;
}
else if (window.matchMedia('(display-mode: standalone)').matches)
				{
  standalone=true;
}
		else if (("standalone" in window.navigator) &&window.navigator.standalone)
		{
			standalone=true;
		}	
	}
	catch(std){}
				
	

		
		
	
				
			
				if(nickidol.indexOf("789")>-1)
				{
					
					if(((!standalone)&&(dejaapp))||!mobilo)
					iko=window.open(urbase+"/kelnum/index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_","coco","status=no ,toolbar=no , location=yes , resizable="+resoz+", width="+largj+", height="+hautj+",scrollbars=yes");
					
					else
					{
						
						location.href=urbase+"/kelnum/index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_";	
						
				}
					
				}
				else if(nickidol.indexOf("ht7")>-1)
				{
					iko=window.open("https://www.coco.gg/chat/index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_","_newtab");
				}
				else if(miniaz)
				{
				
				iko=window.open(urlprinc+"index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_","coco","status=no ,toolbar=no , location=yes , resizable="+resoz+", width="+largj+", height=600,scrollbars=yes");
			}
				else
				{
					if(((!standalone)&&(dejaapp))||!mobilo)
					iko=window.open(urlprinc+"index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_","_newtab");	
					else
					{
						
						location.href=urbase+"/chat/index.html#"+nickidol+"_"+mytype+"_"+ageuq+"_"+citygood+"_"+orig+"_"+sauvy+"_"+referenz+"_";	
					}
					
					
				}
//				iko.focus();
				
				

			}
			else
			{
				if(modi==1)
				alert("Le code postal que vous avez rentré n'est pas valide."+citydio);
			}
		}
		else
		{
			if(modi==1)
			alert("vous devez avoir au moins 15 ans pour rentrer");
		}
	}
	else
	{
		if(modi==1)
		alert("votre pseudo doit contenir au moins 4 lettres !");
	}


}


function validatio()
{
	
	
	

				popup=false;
				
					
				var rff=Math.floor(Math.random()*1000);
				
				
				operis=true;
				
				var navix=navigator.userAgent.toLowerCase();
				if(navix.indexOf("opera")!=-1)
				operis=false;
				
				
				if(navix.indexOf("firefox")!=-1)
				popup=false;
				
				if(navix.indexOf("indows phone")>-1)
				operis=false;
				
				
				if(sauvy.length<2)
				sauvy=cookav;
				
				if(huko.indexOf("iphone")>-1)
				{
					
					largj=380;
					hautj=450;
				}
				
	
			
	
	prevalid(1);
	
document.getElementById("mano").focus();	
	
}


function EcrireCookie(nom, valeur)
{
var dato=new Date;
dato.setFullYear(dato.getFullYear()+10);
var argv=EcrireCookie.arguments;
var argc=EcrireCookie.arguments.length;
var expires=dato;

document.cookie=nom+"="+escape(valeur)+"; expires="+expires.toGMTString();


}


function getCookieVal(offset)
{

var endstr=document.cookie.indexOf (";", offset);
if (endstr==-1) endstr=document.cookie.length;
return unescape(document.cookie.substring(offset, endstr)); 
}
function LireCookie(nom)
{

var arg=nom+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i<clen)
{

var j=i+alen;
if (document.cookie.substring(i, j)==arg) return getCookieVal(j);
i=document.cookie.indexOf(" ",i)+1;
if (i==0) break;


}
return null; 
}
	
	
	
	


