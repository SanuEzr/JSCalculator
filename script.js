let string = "";
var mem = 0;
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "m+") {
      mem = mem + parseInt(string);
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "m-") {
      mem = mem - parseInt(string);
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "mrc") {
      string = string + mem;
      mem = 0;
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
