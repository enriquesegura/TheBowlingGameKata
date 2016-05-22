/**
 * http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
 */

var Game = require('./Bowling.js');

describe('The Bowling game kata', function(){
  var g;
  beforeEach(function() {
    g = new Game();
  });

  it('First test, the game is created.' , function(){
    expect(g.score()).toBe(0);
  });
});
