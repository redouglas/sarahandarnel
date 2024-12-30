var daysLeft = function() {
    var oneDay = 24*60*60*1000;
    var weddingDate = new Date('Sat Aug 16 2025 18:00:00 GMT-0700 (PDT)');
    var today = new Date();
    var daysLeft = Math.round(weddingDate.getTime()/oneDay - today.getTime()/oneDay);
    return daysLeft;
};

$(function() {
  var holder = document.getElementById('days');
  var textHolder = document.getElementById('daystext');

  if (holder && textHolder) {
    var daysRemaining = daysLeft();
    if (daysRemaining > 0) {
      holder.innerText = daysRemaining;
      textHolder.innerText = ' days until the wedding';
    }
  }
});
