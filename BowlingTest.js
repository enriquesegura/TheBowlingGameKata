/**
 * http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
 */

/*
  TODO
  * Scores to test:
    "XXXXXXXXXXXX" (12 rolls: 12 strikes) = 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 = 300
    "9-9-9-9-9-9-9-9-9-9-" (20 rolls: 10 pairs of 9 and miss) = 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 = 90
     "5/5/5/5/5/5/5/5/5/5/5" (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 = 150
*/

var Game = require('./Bowling.js');

describe('The Bowling game kata', function(){
  var g;
  beforeEach(function() {
    g = new Game();
  });

  it('First test, the game is created and it has and score function that accept the rolls.' , function(){
    rolls = '';
    expect(g.score(rolls)).toBe(0);
  });
});
