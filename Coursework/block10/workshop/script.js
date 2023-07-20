const root = document.querySelector(':root');

function changeColors(){
  root.style.setProperty('--vibrantRed', document.getElementById("primary1").value);
  root.style.setProperty('--ceruleanBlue', document.getElementById("primary2").value);
  root.style.setProperty('--brightYellow', document.getElementById("accent1").value);
  root.style.setProperty('--electricBlue', document.getElementById("accent2").value);
}