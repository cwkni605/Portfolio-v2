var comment1={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment2={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment3={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment4={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment5={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment6={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment7={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment8={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment9={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment10={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment11={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment12={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment13={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment14={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment15={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment16={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment17={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment18={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment19={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment20={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment21={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment22={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment23={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment24={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment25={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment26={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment27={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment28={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment29={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment30={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment31={
  type:"sideOne",
  name:"Xbox is the best and everyone who like playstation is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment32={
  type:"sideTwo",
  name:"playstation is the best and everyone who like xbox is a poopoo head",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment33={
  type:"sideOne",
  name:"xbox has better online",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment34={
  type:"sideTwo",
  name:"playstation's online is free",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment35={
  type:"sideOne",
  name:"xbox has halo",
  price:"anonymous",
  picture1:"images/profilePic.png"
};
var comment36={
  type:"sideTwo",
  name:"playstation has spiderman",
  price:"anonymous",
  picture1:"images/profilePic.png"
};

var list = [
  comment1,comment2,comment3,comment4,comment5,comment6,comment7,comment8,comment9,comment10,comment11,comment12,comment13,comment14,comment15,comment16,comment17,comment18,comment19,comment20,comment21,comment22,comment23,comment24,comment25,comment26,comment27,comment28,comment29,comment30,comment31,comment32,comment33,comment34,comment35,comment36
];
function init()
{
  var out = "";
  if(document.body.dataset.site == "twin")
  {
    for(var i = 0; i < list.length;i++)
    {
      if(list[i].type == "sideOne")
      {
        out = out + "<div style='background:rgba(0, 72, 206, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
      }
      else if(list[i].type == "sideTwo")
      {
        out = out + "<div style='background:rgba(165, 0, 0, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
      }
    }
  }
  else if(document.body.dataset.site == "teamOne")
  {
    for(var i = 0; i < list.length;i++)
    {
      if(list[i].type == "sideOne")
      {
        out = out + "<div style='background:rgba(0, 72, 206, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
      }
    }
  }
  else if(document.body.dataset.site == "teamTwo")
  {
    for(var i = 0; i < list.length;i++)
    {
      if(list[i].type == "sideTwo")
      {
        out = out + "<div style='background:rgba(165, 0, 0, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
      }
    }
  }
  document.getElementById("torso").innerHTML = out;
}

function sortOne()
{
  out = "";
  for(var i = 0; i < list.length;i++)
  {
    if(list[i].type == "sideOne")
    {
      out = out + "<div style='background:rgba(0, 72, 206, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
    }
  }
  document.getElementsByClassName("id").src = "../template/save.png";
  document.getElementById("torso").innerHTML = out;
}

function sortTwo()
{
  out = "";
  for(var i = 0; i < list.length;i++)
  {
    if(list[i].type == "sideTwo")
    {
      out = out + "<div style='background:rgba(165, 0, 0, 0.5);'><a href='none.html'><img src='"+list[i].picture1+"' alt='"+list[i].name+"'></a><p>"+list[i].name+"</p><p>"+list[i].price+"</p></div>";
    }
  }
  document.getElementById("torso").innerHTML = out;
}

init();