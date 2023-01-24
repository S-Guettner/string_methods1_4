const txt = 'Susi is going to codingschool';

let susi = txt.slice(0,4);
console.log(susi);
let is = txt.slice(5,7)
console.log(is);
let isGoingToSchool = txt.slice(5,16) +" "+ txt.slice(23,29)
console.log(isGoingToSchool);
let school = txt.slice(23,29)
console.log(school);
let susiIsSchool = txt.slice(0,4) +" "+txt.slice(5,7)+" "+txt.slice(23,29);
console.log(susiIsSchool);

document.write( susi + "<br>")
document.write( is + "<br>")
document.write( isGoingToSchool + "<br>")
document.write( school + "<br>")
document.write( susiIsSchool + "<br>")