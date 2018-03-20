$('#create-todo').on('click', function(event){
  event.preventDefault();
  var listItem = $('input').val();
  console.log(listItem);
  $("#list").append('<li>' + listItem + '</li>')


  $('ul li').on('click', function(){
    $(this).addClass('strike');
  });

  $('input').val('');

})
