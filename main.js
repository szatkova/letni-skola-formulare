console.log('JavaScript funguje');

let formular= document.querySelector('#formular')
formular.addEventListener('submit',spracujformular) // kebyze tu su () tak by sa funkcia vykonala okamzite

function spracujformular(event){
    event.preventDefault()  // tu zabranujem aby mi to neodosielalo na server
    console.log('spracovavam')

    let meno=document.querySelector('#meno').value   // value znaci hodnotu toho prvku
    let priezvisko=document.querySelector('#priezvisko').value
    console.log(meno+' '+priezvisko)

    let datum=document.querySelector('#datum').value
    console.log(datum)
    
    let suhlas=document.querySelector('#suhlas').checked    // tu nekontrolujeme hodnotu ale zistujeme ci je zaskrtnuty
    if (suhlas=true){
        console.log('Suhlasia s kradnutim') 
    } else{
        console.log('nic nesce')
    }
    
}