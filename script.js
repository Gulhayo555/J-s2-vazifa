
let age = +prompt('yoshingizni kiriting ')

if (age <= 0 || isNaN(age)) {
    alert('íltmos son kiriting!');
}
if (age > 0 && age <= 18) {
    alert('siz hali oqishigiz kerak!');
} else if (age > 18 && age <= 50) {
    alert('siz hali ishlashiniz kerak!');
} else if (age > 50 && age <= 59) {
    alert('yaqinda pensiyaga chiqasiz');
}
else if (age > 59 && age <= 100) {
    alert('pensionerga o"xshaysiz');
} else {
    alert(' notogri ketti')
}


let n1 = +prompt('O`rta sonni topish\n 1 sonni kiriting')
let n2 = +prompt('2 sonni kiriting')
let n3 = +prompt('3 sonni kiriting')


/* a > b && a < c || a < b && a > c */
if (n1 > n2 && n1 < n3 || n1 < n2 && n1 > n3) {
    alert('Siz kiritgan sonlar: ' + n1 + ', ' + n2 + ', ' + n3 + '. orta qiymat ' + n1);
}
else if (n2 > n1 && n2 < n3 || n2 < n1 && n2 > n3) {
    alert('Siz kiritgan sonlar: ' + n1 + ', ' + n2 + ', ' + n3 + '. orta qiymat ' + n2);
}
else if (n3 > n1 && n3 < n2 || n3 < n1 && n3 > n2) {
    alert('Siz kiritgan sonlar: ' + n1 + ', ' + n2 + ', ' + n3 + '. orta qiymat ' + n3);
} else {
    alert('son kiritmadingiz')
}








