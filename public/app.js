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
  var view = $('.templates .hotlist-view').clone();
  view.find('.title').text('Hotlist #' + hotlistNumber);
  return view;
}

techauditguru.appOnReady = function() {
  window.onhashchange = function() {
    techauditguru.showView(window.location.hash);
  };
  techauditguru.showView(window.location.hash);
}
