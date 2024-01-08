//Zadatak 2
for(let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
        let m =i*j;
        if(m%2 == 0){
            console.log(m);
        }
    }
}

//Zadatak 3
let jezici = ["JavaScript", "Python", "C", "C++", "Java"];
jezici.forEach(jezik => console.log(jezik));

//Zadatak 4
const temp = ["1 kasikica soli", "2 kasike ulja", "300g Brasna", "200 ml mlijeka"];
for (let k = 0; k<temp.length; k++){
    document.getElementById("divko").innerHTML += temp[k] + "<br>";
}