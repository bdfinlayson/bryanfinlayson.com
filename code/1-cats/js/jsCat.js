// JavaScript Document


function otherAlert() {
   alert("More design content coming soon!")

}


function callOut() {
  var userName = prompt("What is your name?");
  alert("Thanks, " + userName + " for visiting our site! Please check back soon for more content! But first, we'd like to know something.")
  var userSentiment = prompt("Do you like cats? Answer 'yes' or 'no'.");
  if (userSentiment.toLowerCase() === "no") {
    alert("Well, " + userName + ", then you probably shouldn't be visiting this site! Come back when you like cats!");
  }
  else {
    alert("That's great, " + userName + ". In that case, then you've come to the right place! Check back soon for more content!");
  }
}

