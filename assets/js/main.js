
function Berechne() {
    let zvE 
    let EST
    if (document.getElementById("Grundtarif").checked) {
        zvE = Number(document.getElementById("Person1zvE").value)
    }   else if (document.getElementById("Splittingtarif").checked) {
        (zvE = (Number(document.getElementById("Person1zvE").value) + Number(document.getElementById("Person2zvE").value))/2)
    }
        console.log(zvE)


    if (document.getElementById("2020").checked) {
       if (zvE <= 9408) {
           EST = 0
       }
       
    if ((zvE > 9408) && (zvE <= 14532)) {
           let y = (zvE - 9408)/10000
            EST = (972.87 * y+1400)*y
    }  

    if ((zvE > 14533) && (zvE <= 57051)) {
        let z = (zvE - 14532) / 10000
        EST = (212.02 * z+2397) * z+ 972.79
 }  

    if ((zvE > 57052) && (zvE <= 270500)) {
        EST = 0.42*zvE - 8963.74       
}  

    if (zvE >= 270501){
    EST = 0.45 * zvE - 17078.74
    
    }
    document.getElementById("ergebnisEST").innerHTML = EST
}
    


if (document.getElementById("2019").checked) {
    if (zvE <= 9168) {
        EST = 0
    }
    
 if ((zvE > 9169) && (zvE <= 14254)) {
        let y = (zvE - 9168)/10000
         EST = (980.14 * y+1400)*y
 }  

 if ((zvE > 14255) && (zvE <= 55960)) {
     let z = (zvE - 14254) / 10000
     EST = (216.16 * z+2397) * z+ 965.58
}  

 if ((zvE > 55961) && (zvE <= 265326)) {
     EST = 0.42*zvE - 8780.90
}  

 if (zvE >= 265327) {
 EST = 0.45 * zvE - 16740.68
 }
 document.getElementById("ergebnisEST").innerHTML = EST

}




if (document.getElementById("2018").checked) {
    if (zvE <= 9000) {
        EST = 0
    }
    
 if ((zvE > 9001) && (zvE <= 13996)) {
        let y = (zvE - 9168)/10000
         EST = (980.14 * y+1400)*y
 }  

 if ((zvE > 13997) && (zvE <= 54949)) {
     let z = (zvE - 14254) / 10000
     EST = (216.16 * z+2397) * z+ 965.58
}  

 if ((zvE > 54950) && (zvE <= 260532)) {
     EST = 0.42*zvE - 8621.75
}  

 if (zvE >= 265327) {
 EST = 0.45 * zvE - 16437.70
 }
 document.getElementById("ergebnisEST").innerHTML = EST

} 


if (document.getElementById("2019").checked && document.getElementById("Grundtarif").checked) {
        zvE = Number(document.getElementById("Person1zvE").value)
        Number(console.log(document.getElementById("Person1zvE").value))
    }


if (document.getElementById("2018").checked && document.getElementById("Grundtarif").checked) {
        zvE = Number(document.getElementById("Person1zvE").value)
        Number(console.log(document.getElementById("Person1zvE").value)) 
    }
}






// 2. Lösung Anass

// const single = document.getElementById("single")
// const zvE1 = document.getElementById("zvE1")
// const zvE2 = document.getElementById("zvE2")
// zvE2.style.display = "none"
// const year = document.getElementById('year')
// let zvE;
// let ESt
// const result = document.getElementById("result")

// function showZVE2() {
//     single.checked ? zvE2.style.display = "none" : zvE2.style.display = "block"
// }

// function berechne() {
//     // console.log("test")
//     // console.log(year.value)
//     // console.log(zvE1.value)
//     // if (!single.checked) {
//     //     console.log(zvE2.value)
//     // }    
//     single.checked ? zvE = Number(zvE1.value) : zvE = (Number(zvE1.value) + Number(zvE2.value)) / 2
//     console.log(zvE)
//     if (year.value == 'year20') {
//         if (zvE <= 9408) {
//             ESt = 0
//         } else if (zvE >= 9409 && zvE <= 14532) {
//             let y = (zvE - 9408) / 10000
//             ESt = (972.87 * y + 1400) * y
//         } else if (zvE >= 14533 && zvE <= 57051) {
//             let z = (zvE - 14532) / 10000
//             ESt = (212.02 * z + 2397) * z + 972.79
//         }
//         else if (zvE >= 57051 && zvE <= 270500) {
//             ESt = 0.42 * zvE - 8963.74
//         } else if (zvE >= 270501) {
//             ESt = 0.45 * zvE - 17078.74
//         }

//     } else if (year.value == 'year19') {
//         console.log("2019")
//     } else {
//         console.log("2018")
//     }
//     single.checked ? result.innerHTML = ESt : result.innerHTML = 2 * ESt
// }





// function greeting(vorname, nachname, geburtsort, alter, wohnort) {
//     console.log(`Mein Name ist ${vorname} ${nachname}. `)
//     console.log(`Ich bin in ${geburtsort} geboren. `)
//     console.log(`I lerne bei superCode.`)
//     console.log(`Ich bin ${alter} Jahre alt. `)
//     console.log(`Ich wohne in ${wohnort}.`)
// }
// function greeting1(vorname, nachname, geburtsort, alter, wohnort) {
//     return `Mein Name ist ${vorname} ${nachname}. 
//             Ich bin in ${geburtsort} geboren. 
//             I lerne bei superCode.
//             Ich bin ${alter} Jahre alt. 
//             Ich wohne in ${wohnort}.`
// }

// greeting('Superman', 'batman', 'Gotham city', 30, 'Ny')
// console.log(greeting1('Superman', 'batman', 'Gotham city', 30, 'Ny'))
