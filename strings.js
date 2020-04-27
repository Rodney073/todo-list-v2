$('#add').on('click', (event) => {
 // $(event.target).text('This button was clicked');
  $('ul').append("<li>" + todo.value +'<p><i class="fas fa-thumbs-up"></i><i class="fas fa-times-circle"></i>' + "</li>")
 
 // $('li').append('<i class="fas fa-thumbs-up"></i>')
  
  
  
}); 

$('.fas fa-thumbs-up').css('color','red');
//$('i').css('color','red');

$('ul').on('click', 'li', (event) => {
  $(event.target).toggleClass('line');
});

$('i').on('click', '.fas fa-thumbs-up', (event) => {
  $(event.target).text('test');
});


/*$('ul').css('margin-left', '150px');
$('ul').css('text-algin', 'left');*/


//$('.innerbox').append('<i class="fas fa-thumbs-up"></i>')