let globalFunc;
{
  let blockVar = "a";
  globalFunc = function () {
    console.log(blockVar);
  };
}
globalFunc();

let f;
{
  let o = { note: "Safe" };
  f = function () {
    return o;
  };
}
let oRef = f();
oRef.note = "Not so safe after all!";
console.log(f().note);