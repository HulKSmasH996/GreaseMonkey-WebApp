
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
  var firstname = getInputVal('fname');
  var lastname = getInputVal('lname');
  var address = getInputVal('address');
  var phone = getInputVal('phone');
  var service = String(handleSelect());
  //alert(service);
  if(firstname!=="" && lastname!=="" && address!=="" && phone!=="" && service !==""){
    console.log(firstname);
    saveMessage(firstname,lastname,address,phone,service);
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
function saveMessage(fname,lname,address,phone,service) {
  var newUserRef = userRef.push();
  newUserRef.set({
    fname:fname,
    lname:lname,
    address:address,
    phone:phone,
   service:service
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
