'use strict';
var techauditguru = {};

techauditguru.hotlistView = function() {
  return $('<div class="hotlist-view">').text('Coming soon!');
}

techauditguru.showView = function(hash) {
  var routes = {
    '#hotlist': techauditguru.hotlistView
  };
  var hashParts = hash.split('-');
  var viewFn = routes[hashParts[0]]; 
  if (viewFn) {
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }
}

techauditguru.hotlistView = function(hotlistNumber) {
  var title = 'Hotlist #' + hotlistNumber + ' Coming soon!';
  return $('<div class="hotlist-view">').text(title);
}

techauditguru.appOnReady = function() {
  techauditguru.showView(window.location.hash);
}
