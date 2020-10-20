var znak='x';
var i=1;
var wygranax=0;
var wygranay=0;
function zmienznak(i)
{
	if(i%2==0 && i<10)
	{
		znak='o';
	}
	else if (i%2!=0 && i<10)
	{
		znak='x';
	}
	else
	{
		znak=znak;
	}
}
function sprawdz(znak)
{
	if((document.getElementById("poleGL").innerHTML==znak && document.getElementById("poleGS").innerHTML==znak && document.getElementById("poleGP").innerHTML==znak)||(document.getElementById("poleSL").innerHTML==znak && document.getElementById("poleSS").innerHTML==znak && document.getElementById("poleSP").innerHTML==znak)||(document.getElementById("poleDL").innerHTML==znak && document.getElementById("poleDS").innerHTML==znak && document.getElementById("poleDP").innerHTML==znak)||(document.getElementById("poleGL").innerHTML==znak && document.getElementById("poleSL").innerHTML==znak && document.getElementById("poleDL").innerHTML==znak)||(document.getElementById("poleGS").innerHTML==znak && document.getElementById("poleSS").innerHTML==znak && document.getElementById("poleDS").innerHTML==znak)||(document.getElementById("poleGP").innerHTML==znak && document.getElementById("poleSP").innerHTML==znak && document.getElementById("poleDP").innerHTML==znak)||(document.getElementById("poleGL").innerHTML==znak && document.getElementById("poleSS").innerHTML==znak && document.getElementById("poleDP").innerHTML==znak)||(document.getElementById("poleDL").innerHTML==znak && document.getElementById("poleSS").innerHTML==znak && document.getElementById("poleGP").innerHTML==znak))
	{
		var wygrana="Wygrywa gracz "+znak;
		if(znak=='x')
		{
			wygranax++;
		}
		else
		{
			wygranay++;
		}
		wygrana=wygrana+"<br>Wynik to:<br>X : O<br>"+wygranax+" : "+wygranay+"<br><input type='button' value='Nowa gra' onclick='reset()'/>";
		document.getElementById("poleGL").setAttribute('onclick','disabled');
		document.getElementById("poleGS").setAttribute('onclick','disabled');
		document.getElementById("poleGP").setAttribute('onclick','disabled');
		document.getElementById("poleSL").setAttribute('onclick','disabled');
		document.getElementById("poleSS").setAttribute('onclick','disabled');
		document.getElementById("poleSP").setAttribute('onclick','disabled');
		document.getElementById("poleDL").setAttribute('onclick','disabled');
		document.getElementById("poleDS").setAttribute('onclick','disabled');
		document.getElementById("poleDP").setAttribute('onclick','disabled');
		document.getElementById("wygrana").innerHTML=wygrana.toString();
	}
}
function f1(pole)
{
	var x=pole.id;
	zmienznak(i);
	i=i+1;
	if(i==10)
	{
		document.getElementById("wygrana").innerHTML="Nikt nie wygrał <br>Wynik to:<br>X : O<br>"+wygranax+" : "+wygranay+"<br><input type='button' value='Nowa gra' onclick='reset()'/>";
	}
	document.getElementById(x).innerHTML=znak.toString();
	document.getElementById(x).setAttribute('onclick','disabled');
	sprawdz(znak);
}
function reset()
{
		document.getElementById("poleGL").setAttribute('onclick','f1(this)');
		document.getElementById("poleGS").setAttribute('onclick','f1(this)');
		document.getElementById("poleGP").setAttribute('onclick','f1(this)');
		document.getElementById("poleSL").setAttribute('onclick','f1(this)');
		document.getElementById("poleSS").setAttribute('onclick','f1(this)');
		document.getElementById("poleSP").setAttribute('onclick','f1(this)');
		document.getElementById("poleDL").setAttribute('onclick','f1(this)');
		document.getElementById("poleDS").setAttribute('onclick','f1(this)');
		document.getElementById("poleDP").setAttribute('onclick','f1(this)');
		document.getElementById("poleGL").innerHTML="";
		document.getElementById("poleGS").innerHTML="";
		document.getElementById("poleGP").innerHTML="";
		document.getElementById("poleSL").innerHTML="";
		document.getElementById("poleSS").innerHTML="";
		document.getElementById("poleSP").innerHTML="";
		document.getElementById("poleDL").innerHTML="";
		document.getElementById("poleDS").innerHTML="";
		document.getElementById("poleDP").innerHTML="";
		wygrana="";
		i=1;
		wygrana="<br>Wynik to:<br>X : O<br>"+wygranax+" : "+wygranay;
		document.getElementById("wygrana").innerHTML=wygrana.toString();
}