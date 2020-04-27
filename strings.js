$('#add').on('click', (event) => {
 // $(event.target).text('This button was clicked');
  $('ul').append("<li>" + todo.value + "</li>")
}); 


$('ul').on('click', 'li', (event) => {
  $(event.target).toggleClass('line');
});


/*$('ul').css('margin-left', '150px');
$('ul').css('text-algin', 'left');*/

