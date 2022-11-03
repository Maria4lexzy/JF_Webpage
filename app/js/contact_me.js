function sendMessage() {
  console.log("called");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  document.getElementById("sendMessageButton").disabled = true;
  // Returns successful data submission message when the entered information is stored in database.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status == 200 || this.status == 201) {
        var response = xhr.responseText;
        if (response != "Error") {
          console.log("success");
        } else {
          console.log("Handle Error");
        }
        document.getElementById("sendMessageButton").disabled = false;
      } else {
        console.log("invalid link");
      }
    }
  };
  xhr.open("POST", "./app/mail/contact_me.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(
    JSON.stringify({
      name: name,
      phone: phone,
      email: email,
      message: message,
    })
  );
}
