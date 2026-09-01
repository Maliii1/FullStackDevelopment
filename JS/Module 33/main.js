function printName(){
    document.write('Jhon')
    document.write('<br>')
    setTimeout(function(){document.write('Doe')}, 3000)
    document.write('Smith')
}

printName();