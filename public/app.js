'use strict';
var techauditguru = {};

techauditguru.hotlistView = function() {
  return $('<div class="hotlist-view">').text('Coming soon!');
}

techauditguru.showView = function(hash) {
  var routes = {
    '#hotlist-1': techauditguru.hotlistView
  };
  var viewFn = routes[hash]; 
  if (viewFn) {
    $('.view-container').empty().append(viewFn());
  }
}
