

///////


var nomidiv="testu";

referenz=referent;



var resoz="yes";
orient=parseInt(orient);

var mytype=2;
var orient=0;


document.body.style.backgroundColor=coulfond;


var stocky="";

stocky+="<div id='corprince' style='position:absolute;width:180px;overflow:hidden;height:225px;font-family:verdana;z-index:6;'>";


stocky+="<div id='invitea' style='position:absolute;width:250px;height:300px;left:0;top:0;font-weight:bold;font-size:13px;z-index:6'>";
stocky+="<div style='position:absolute;left:50;top:0;'>Pseudo</div>";

stocky+="<input type=text id=nicko MAXLENGTH=16 onkeypress='return checar(event)' pattern='^[a-zA-Z0-9]+$' style='position:absolute; top:16px;left:10px;width:140px;font-weight:bold;background-color:ffffff;' onchange='refrnick();'>";
stocky+="<form name='discuform'>";

stocky+="<input type=radio  name=typeo onclick='mytype=1;verifok();' style='position:absolute;left:3px;top:60px;' >";
stocky+="<input type=radio  name=typeo onclick='mytype=2;verifok();' style='position:absolute;left:90px;top:60px;'>";
stocky+="</form>";


stocky+="<div style='position:absolute;left:24px;top:62px;cursor:pointer;' onclick='document.discuform.typeo[0].checked=true;mytype=1;refrgenr(mytype+orient);' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>Homme</div>";
stocky+="<div style='position:absolute;left:111px;top:62;cursor:pointer;' onclick='document.discuform.typeo[1].checked=true;mytype=2;refrgenr(mytype+orient);' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>Femme</div>";
stocky+="<div style='position:absolute;left:24px;top:74px;cursor:pointer;visibility:hidden;' onclick='document.discuform.typeo2[0].checked=true;orient=0;refrgenr(mytype+orient);' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>Hetero</div>";
stocky+="<div style='position:absolute;left:111px;top:74px;cursor:pointer;visibility:hidden;' onclick='document.discuform.typeo2[1].checked=true;orient=2;refrgenr(mytype+orient);' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>Homo</div>";


stocky+="<div style='position:absolute;left:70px;top:90px;'>Age</div>";


stocky+="<input type=text id=ageu MAXLENGTH=2  onkeypress='return checode(event)' style='position:absolute; left:70;top:108;width:28px;font-weight:bold;background-color:ffffff;' onkeyup='refrage();' onclick='clickage();'>";

stocky+="<div style='position:absolute;left:5px;top:141px;'>Code Postal</div>";

stocky+="<input type=text id=zipo onkeypress='return checode(event)' style='position:absolute;width:70px; left:5px;top:157px;font-weight:bold;background-color:ffffff;' onKeyUp='verifPseudo(this.value)'  onclick='clicktown();' >";

stocky+="<input type=button id='validum' value='Entrée' onmouseover='this.style.backgroundColor=\"000000\";this.style.color=\"ffffff\";' onmouseout='this.style.backgroundColor=\"ffffff\";this.style.color=\"000000\";' onclick=validatio(); style='position:absolute; width:92px;height:26;top:190;left:10;border-width:1px;border-style:solid;font-weight:bold;font-size:13px;border-color:000000;background-color:ffffff;'>";



stocky+="</div>";


stocky+="<IMG SRC='' id=flecho style='visibility:hidden'>";
stocky+="<div id=messageo style='visibility:hidden'>Entrez votre pseudo</div>";

stocky+="<div id='deroulante' style='position:absolute;font-weight:bold;width:190px;left:0;top:4px;z-index:17;visibility:hidden;background-color:ffffff;overflow:auto;border:solid;border-width:1px;' ></div>";

stocky+="</div>";

document.getElementById(nomidiv).innerHTML+=stocky;

if (mytype==1)
{
document.discuform.typeo[0].checked=true;
}
if (mytype==2)
{
document.discuform.typeo[1].checked=true;
}


tailleur();






