$('#titulli')
$('li')
$('.main')
$('#btn')

$('.square')

$('li').click(function(){
    alert('clicked')
})

$('#btn').click(function(){
    console.log($('titulli').text())
    $('#titulli').text('Testing text')
    $('#titulli').append('Extra text')
})

$('.square').animate({
    'width':'200px',
    'height':'200px',
    'background-color':'blue'

},1000)