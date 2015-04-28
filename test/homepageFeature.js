var webdriverio = require('webdriverio');
var expect = require('chai').expect;

describe('Homepage Test', function() {
  var client = {};
  before(function(done) {
    client = webdriverio.remote({ desiredCapabitilies : { browserName : 'chrome' }});
    client.init(done);
  });

  after(function(done) {
    client.end(done);
  });

  it('Homepage title displays', function(done) {
    client
      .url('http://localhost:3000')
      .getTitle(function(err, title) {
        expect(err).to.eql('Our Page, Yey! :Þ');
      })
      .call(done);
  });
});
