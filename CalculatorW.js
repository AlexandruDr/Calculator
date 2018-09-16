function obtain0 (nr)
{
return parseInt(nr/1000000);
}

function obtain1 (nr)
{
return (parseInt(nr/100000))%10;
}

function obtain2 (nr)
{
return (parseInt(nr/10000))%10;
}

function obtain3 (nr)
{
return (parseInt(nr/1000))%10;
}

function obtain4 (nr)
{
return (parseInt(nr/100))%10;
}

function obtain5 (nr)
{
return (parseInt(nr/10))%10;
}

function obtain6 (nr)
{
    return nr%10;
}

function makeKW (value)
{
    return ( (obtain0(value)*10 + obtain1(value) ) + ( obtain2(value)*10 + obtain3(value) )/100 );
}

function makeIns (value)
{ 
		return ( ( obtain4(value) + ( obtain5(value)*10 + obtain6(value) )/100 ) );
}

function compute (value) 
{
    return 1.3 * makeKW (value) / makeIns (value); 
}

function produce () 
{
  var data = document.getElementById("selData");
  var value = selData.value;
  return compute(value);
}


function display ()
{
  var toInsert = produce();
  //var insertTo = document.getElementById("userOutput");
  document.getElementById("userOutput").innerHTML = (toInsert.toFixed(1) ) + " kW";
}

var Alabama   = { kw: 1214, ins: 5.25, state: "Alabama"};
var Alaska   = { kw: 590, ins: 3.25, state: "Alaska"};
var Arizona   = { kw: 1030, ins: 6.75, state: "Arizona"};
var Arkansas   = { kw: 1083, ins: 5.25, state: "Arkansas"};
var California = { kw: 547, ins:6.25 , state: "California"};
var Colorado  = { kw: 694, ins:6.00 , state: "Colorado"};
var Connecticut = { kw: 711, ins: 4.12, state: "Connecticut"};
var Delaware    = { kw:947 , ins: 4.75, state: "Delaware"};
var DC    = { kw: 804, ins: 4.75, state: "DC"};
var Florida    = { kw: 1123, ins: 5.75, state: "Florida"};
var Georgia    = { kw: 1138, ins: 5.75, state: "Georiga"};
var Hawaii   = { kw: 505, ins: 6.25, state: "Hawaii"};
var Idaho   = { kw: 953, ins: 4.25, state: "Idaho"};
var Illinois= { kw: 733, ins: 4.75, state: "Illinois"};
var Indiana = { kw: 975, ins: 4.5, state: "Indiana"};
var Iowa= { kw: 864, ins: 4.75, state: "Iowa"};
var Kansas   = { kw: 899, ins: 6 , state: "Kansas"};
var Kentucky   = { kw: 1121, ins: 4.75, state: "Kentucky"};
var Louisiana   = { kw: 1240, ins: 5.25, state: "Louisiana"};
var Maine = { kw: 546, ins: 4.12, state: "Maine"};
var Maryland    = { kw: 995, ins: 4.75 , state: "Maryland"};
var Massachusetts = { kw: 599, ins: 4, state: "Massachusetts"};
var Michigan= { kw: 668, ins: 4.25, state: "Michigan"};
var Minnesota    = { kw: 764, ins:4.37 , state: "Minnesota"};
var Mississippi   = { kw: 1203, ins: 5.25, state: "Mississippi"};
var Missouri    = { kw: 1041, ins: 5.25, state: "Missouri"};
var Montana   = { kw: 813, ins: 4.75, state: "Montana"};
var Nebraska    = { kw: 973, ins: 5.75, state: "Nebraska"};
var Nevada   = { kw: 925, ins: 6.25, state: "Nevada"};
var NewHampshire = { kw: 604, ins: 4, state: "New Hampshire"};
var NewJersey = { kw: 691, ins: 4.75, state: "New Jersey"};
var NewMexico   = { kw: 631, ins: 6.5, state: "New Mexico"};
var NewYork = { kw: 595, ins: 4.12, state: "New York"};
var NorthCarolina    = { kw: 1101, ins: 4.85, state: "North Carolina"};
var NorthDakota    = { kw: 1046, ins: 4.75, state: "North Dakota"};
var Ohio = { kw: 891 , ins: 4.37, state: "Ohio"};
var Oklahoma   = { kw: 1093, ins: 6, state: "Oklahoma"};
var Oregon   = { kw: 907, ins: 4.37, state: "Oregon"};
var Pennsylvania= { kw: 841, ins: 4.25, state: "Pennsylvania"};
var RhodeIsland = { kw: 586 , ins: 4.12, state: "Rhode Island"};
var SouthCarolina    = { kw: 1155, ins: 5 , state: "South Carolina"};
var SouthDakota    = { kw: 981, ins: 5.25, state: "South Dakota"};
var Tennessee   = { kw: 1238, ins: 4.85, state: "Tennessee"};
var Texas   = { kw: 1156, ins: 6.25, state: "Texas"};
var Utah   = { kw: 750, ins: 6, state: "Utah"};
var Vermont = { kw: 549, ins: 4, state: "Vermont"};
var Virginia  = { kw: 1120, ins: 4.75 , state: "Virginia"};
var Washington   = { kw: 955, ins: 4.12, state: "Washington"};
var WestVirginia   = { kw: 1102, ins: 4.37, state: "West Virginia"};
var Wisconsin = { kw: 683, ins: 4.25, state: "Wisconsin"};
var Wyoming   = { kw: 850, ins: 5.65, state: "Wyoming"}

var states = [Alabama,
Alaska ,
Arizona ,
Arkansas ,
California ,
Colorado ,
Connecticut ,
Delaware,
DC, 
Florida,
Georgia ,
Hawaii ,
Idaho ,
Illinois ,
Indiana ,
Iowa ,
Kansas ,
Kentucky ,
Louisiana ,
Maine ,
Maryland ,
Massachusetts,
Michigan ,
Minnesota ,
Mississippi ,
Missouri ,
Montana ,
Nebraska ,
Nevada,
NewHampshire ,
NewJersey ,
NewMexico ,
NewYork ,
NorthCarolina ,
NorthDakota ,
Ohio ,
Oklahoma ,
Oregon ,
Pennsylvania ,
RhodeIsland ,
SouthCarolina ,
SouthDakota,
Tennessee ,
Texas ,
Utah ,
Vermont ,
Virginia ,
Washington ,
WestVirginia ,
Wisconsin ,
Wyoming ,
];

function addOptions ()
{
    var i = 0;
  for (i=0; i<states.length; i++)
  {
    var option = document.createElement("option");
    option.value = ( parseFloat( (states[i].kw/30).toFixed(2)) ) * 100000 + (states[i].ins)*100;
    option.innerHTML = states[i].state;
    document.getElementById("selData").appendChild(option);
  }
}

addOptions();

function clear ()
{
    var sel = document.getElementById("selData");
    sel.addEventListener("click", function () {
        document.getElementById("userOutput").innerHTML = "Your System's Power Output";
    } )
}

clear();