$(document).ready(function() {
  // console.log("before\n", window.localStorage);

  $('#show-text-list').html(localStorage.getItem('listItems'));

  $('.add-items').submit(function(event) {
    event.preventDefault();

    var item = $('#task-list-item').val();

    if (item) {
      var checkbox = "<li><input class='checkbox' type='checkbox'>";
      var remove = "<a class='remove'> X </a><hr></li>";
      //create x to remove item, add hrizontal line below
      //<li><input class='checkbox' type='checkbox'>item<a class='remove'>x</a><hr></li>
      $('#show-text-list').append(checkbox + item + remove);

      localStorage.setItem('listItems', $('#show-text-list').html());
      $('.text-input').val(""); //clear input text field
    }
  }); //end of $('.add-items').submit

  $(document).on('change', '.checkbox', function() {
    if ($(this).attr('checked')) {
      $(this).removeAttr('checked');
    } else {
      $(this).attr('checked', 'checked');
    }
    $(this).parent().toggleClass('strike');

    localStorage.setItem('listItems', $('#show-text-list').html());
  });

  $(document).on('click', '.remove', function() {
    $(this).parent().fadeOut('slow');
    localStorage.setItem('listItems', $('#show-text-list').html());
  });

});