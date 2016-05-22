/**
 * http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
 */

/*
  TODO
  * Scores to test:
    "XXXXXXXXXXXX" (12 rolls: 12 strikes) = 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 + 10+10+10 = 300
    "9-9-9-9-9-9-9-9-9-9-" (20 rolls: 10 pairs of 9 and miss) = 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 = 90
     "5/5/5/5/5/5/5/5/5/5/5" (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 + 10+5 = 150
  * Examples of frame points:
    Strike: "X--" (10 points), "XXX" (30 points), "X-/" (20 points), "X23" (15 points).
    Spare: "-/X" (20 points), "3/-" (10 points), "4/1" (11 points), "9/X" (20 points).
    < 10 pins: "36" (9 points), "--" (0 points), "3-" (3 points), "-4" (4 points), "17" (8 points)
*/

var Game = require('./Bowling.js');

describe('The Bowling game kata', function(){
  var g;
  beforeEach(function() {
    g = new Game();
  });

  it('Max score for perfect game', function() {
    rolls = 'XXXXXXXXXXXX';
    expect(g.score(rolls)).toBe(300);
  });
});

describe('The Bowling game kata implementation', function(){
  var g;
  beforeEach(function() {
    g = new Game();
  });

  it('Split rolls into frames for perfect game', function() {
    rolls = 'XXXXXXXXXXXX';
    expect(g.frames(rolls)).toEqual(['XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX']);
  });
});