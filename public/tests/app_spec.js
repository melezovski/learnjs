describe('techauditGuru', function() {
  it('can show a hotlist view', function() {
    techauditguru.showView('#hotlist-1');
    expect($('.view-container .hotlist-view').length).toEqual(1);
  });

  it('shows the landing page view when there is no hash', function() {
    techauditguru.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });

  it('passes the hash view parameter to the view function', function() {
    spyOn(techauditguru, 'hotlistView');
    techauditguru.showView('#hotlist-42');
    expect(techauditguru.hotlistView).toHaveBeenCalledWith('42');
  });

  describe('hotlist view', function() {
    it('has a title that includes the hotlist number', function() {
      var view = techauditguru.hotlistView('1');
      expect(view.text()).toEqual('Hotlist #1 Coming soon!');
    });
  
    it('invokes the router when loaded', function() {
      spyOn(techauditguru, 'showView');
      techauditguru.appOnReady();
      expect(techauditguru.showView).toHaveBeenCalledWith(window.location.hash);
    });
  });  
});
