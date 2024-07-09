function rendernewUser(user) {
  console.log(user)
  document.querySelector(".userfirstname").innerHTML = user.firstname || "";
  document.querySelector(".userlastname").innerHTML = user.lastname || "";
  document.querySelector(".userphone").innerHTML = user.phone || "";
  document.querySelector(".useremail").innerHTML = user.email || "";
  document.querySelector(".usertitle").innerHTML = user.organisationtitle || "";
  document.querySelector(".userorganization").innerHTML = user.organisationname || "";
  document.querySelector(".userdescription").innerHTML = user.organisationdescription || "";
  document.querySelector(".usermembership").innerHTML = user.membership || "";
  document.querySelector(".usertimestamp").innerHTML = user.timestamp || "";
}



// This script should run on the thank you page (thankyou.html)

export { rendernewUser };
