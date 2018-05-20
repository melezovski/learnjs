describe('techauditGuru', function() {
  it('can show a hotlist view', function() {
    techauditguru.showView('#hotlist-1');
    expect($('.view-container .hotlist-view').length).toEqual(1);
  });

  it('shows the landing page view when there is no hash', function() {
    techauditguru.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
});
