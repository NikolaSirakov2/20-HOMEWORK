let password = "parolA3$";
let regSmall = /[a-z]/;
let regCapital = /[A-Z]/;
let regNum = /[!@#$%^&*]/;


let regEvgeni = /(?=.[0-9])(?=.[!@#$%^&])(?=.[a-z])[0-9a-zA-Z!@#$%^&*]{6,}/;
let regPavel = /^(?=.[0-9])(?=.[!@#$%^&()_+=-])[a-zA-Z0-9!@#$%^&()_+=-]{6,15}$/;
let regGeorgi = /(?=^.{6,}$)(?=.\d)(?=.[!@#$%^&]+)(?![.\n])(?=.[A-Z])(?=.[a-z]).$/;
let regTina = /^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{6,}$/;

const regexPattern = /^(?=.*[a-z])(?=.[A-Z])(?=.*\W).{6,}$/;

console.log(regSmall.test(password));
console.log(regCapital.test(password));
console.log(regNum.test(password));
console.log("-------------");
console.log(regEvgeni.test(password));
console.log(regPavel.test(password));
console.log(regGeorgi.test(password));
console.log(regTina.test(password));
console.log(password.match(regGeorgi));
console.log("-------- last try ------");
console.log(regexPattern.test(password));