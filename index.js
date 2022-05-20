let headInfo = document.getElementById("head_info");
let contact_form = document.getElementById("contact_form");
let inpName = document.getElementById("inpName");
let inpSurname = document.getElementById("inpSurname");
let inpMail = document.getElementById("inpMail");
let inpTextarea = document.getElementById("inpTextarea");
let btn = document.getElementById("btn");

btn.addEventListener("click",function (e) {
    e.preventDefault();
    headInfo.remove();
    contact_form.remove();
    document.body.innerText = inpName.value + " " + inpSurname.value + "\n" +inpMail.value + "\n" + inpTextarea.value;
  })