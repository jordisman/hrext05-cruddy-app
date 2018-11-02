$(document).ready(function() {
  // console.log("before\n", window.localStorage);

  $('#show-todo-list').html(localStorage.getItem('theKey'));

  $('.add-todo').submit(function(event) { //submit only work in forms
    event.preventDefault(); //Prevent a submit button from submitting a form //cursor stays

    var item = $('#todo-list-item').val();
    var checkbox = "<li><input class='checkbox' type='checkbox'>";
    var remove = "<a class='remove'> X </a></li>";
    //create x to remove item
    //<li><input class='checkbox' type='checkbox'>item<a class='remove'>x</a><hr></li>

    if (item) {
      //add checkbox and remove x
      $('#show-todo-list').append(checkbox + item + remove);

      localStorage.setItem('theKey', $('#show-todo-list').html());

      $('.text-input').val(""); //clear input text field
      // $('.text-input').empty(); //empty doesn't work
    }
  }); //end of $('.add-todo').submit()

  /*
  The change event is sent to an element when its value changes. This event is limited to <input>, <textarea> and <select>. For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse.
  */
  $(document).on('change', '.checkbox', function() {
    // if ($(this).attr('checked')) {
    //   $(this).removeAttr('checked');
    // } else {
    //   $(this).attr('checked', 'checked');
    // }
    $(this).parent().toggleClass('strike');

    localStorage.setItem('theKey', $('#show-todo-list').html());
  });

  $(document).on('click', '.remove', function() {
    $(this).parent().remove();
    localStorage.setItem('theKey', $('#show-todo-list').html());
  });

  ul.contenteditable = "true";

  $(function() {
    $('#show-todo-list').sortable();
    $('#show-todo-list').disableSelection();
  });
  $(function() {
    $('.container').resizable();
  });

});