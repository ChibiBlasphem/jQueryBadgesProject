$(function() {

  // Ajax query
  $.ajax({
    url: 'https://www.codeschool.com/users/Chibiblasphem.json',
    dataType: 'jsonp',
    success: function(response) {
      var $badges = $('#badges');

      response.courses.completed.forEach(function(course) {
        var $div = $('<div>').addClass('course');
        var $h3 = $('<h3>').text(course.title);
        var $img = $('<img>').attr('src', course.badge);
        var $a = $('<a>').attr('href', course.url).attr('target', '_blank').addClass('btn btn-primary').text('See Course');

        $div.append($h3).append($img).append($a);
        $badges.append($div);
      });
    }
  });

});
