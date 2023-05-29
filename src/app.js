/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Any string");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainGroup = [".com", ".net", ".us", ".io", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domainGroup.length; l++)
          console.log(pronoun[i] + adj[j] + noun[k] + domainGroup[l]);
      }
    }
  }

  let misNouns = ["mecom", "fishnet", "superbus", "limones", "frabizio"];
  console.log("--------------name/domain hack part------------------------");
  //let resultado = "";
  //let hackdomain = "";

  for (let m = 0; m < misNouns.length; m++) {
    for (let n = 0; n < domainGroup.length; n++) {
      console.log(misNouns[m] + domainGroup[n]);
      let resultado = misNouns[m].slice(-domainGroup[n].length + 1);
      //console.log(resultado);
      if (resultado === domainGroup[n].slice(1)) {
        //console.log("Match :D");
        let hackdomain = misNouns[m].slice(
          0,
          misNouns[m].length - domainGroup[n].length + 1
        );
        console.log("este es el hack: " + hackdomain + domainGroup[n]);
      }
    }
  }
};
