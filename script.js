var long = document.querySelector("#long");
var short = document.querySelector("#short");
var result = document.querySelector("#result");



short.addEventListener("keypress",function(){
  var match = long.value.indexOf(short.value)
  if(match===-1){
    result.innerHTML = `The value ${short.value} was not found`
  } else{
    result.innerHTML = `The value ${short.value} was found at ${match}`
  }
})
