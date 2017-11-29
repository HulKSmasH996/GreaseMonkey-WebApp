
// window.onload = function() {
//   var startPos;
//   var geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);
// };
var userRef= firebase.database().ref('users');
var submit = document.getElementById("submitButton");
function submitClick() {
  var providername = getInputVal('pname');
  var name = getInputVal('name');
  var address = getInputVal('address');
  var phone = getInputVal('phone');
  var city = getInputVal('city');
  var state = getInputVal('state');
  var pin = getInputVal('pin');
  var service = String(handleSelect());
  //alert(service);
  if(providername!=="" && name!=="" && address!=="" && phone!=="" && service !=="" && city!=="" && state!=="" && pin!==""){
    console.log(providername);
    saveMessage(providername,name,address,phone,service,city,state,pin);
    //window.open ("success.html","mywindow");
    window.open("success.html","_self")
  }
  else {
     alert("Fields are empty");
  }



}
function getInputVal(id) {
  return document.getElementById(id).value;
}
function saveMessage(pname,name,address,phone,service,city,state,pin) {
  var newUserRef = userRef.push();
  newUserRef.set({
    pname:pname,
    name:name,
    address:address,
    phone:phone,
   service:service,
      city:city,
      state:state,
    pin:pin
  });
}
function handleSelect() {
  // alert(servicesList.name);
  //var selIndex = myForm.options[myForm.selectedIndex].value;
  //alert(myForm.servicesList.options.length);
  var selectBox = document.getElementById("servicesList").value;
  //service=selectBox;
  //alert(selectBox);
  return selectBox;
  //console.log(selectBox);
}
