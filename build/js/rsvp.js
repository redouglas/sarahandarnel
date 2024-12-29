$(function() {
  var $form = window.jQuery('form#rsvpForm'),
    url = 'https://script.google.com/macros/s/AKfycbz1lLPILYCpbKluXJIiGs6xJWwcGAU7w4g4t8zemi_o46V1SVZmx-gUXLm1oLqeFG3z_w/exec'

  $form.on('submit', function(e) {
    e.preventDefault();

    if (!$form.find('select option:selected').val()) {
      alert('Please let us know if you will be attending or not.');
      return;
    } else if (!$form.find('input.name').val()) {
      alert ('Please fill in your name.')
    }
    else {
      $form.addClass('loading');
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize()
      }).success(function(data, status, xhr) {
          $form.addClass('finished');
          window.jQuery('.rsvp-success').addClass('show');
        }).error(function() {
          $form.removeClass('loading');
           window.jQuery('.rsvp-error').addClass('show');
      });
    }
  });
});
