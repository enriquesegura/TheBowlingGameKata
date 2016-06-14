/**
 * http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
 */

var Game = require('./Bowling.js');

describe('The Bowling game kata', function(){
  var g;
  beforeEach(function() {
    g = new Game();
  });


  it('Score for a game with all spare', function() {
    rolls = '5/5/5/5/5/5/5/5/5/5/5';
    expect(g.score(rolls)).toBe(150);
  });

  it('Score for a regular game', function() {
    rolls = '9-9-9-9-9-9-9-9-9-9-';
    expect(g.score(rolls)).toBe(90);
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

  it('Split rolls into frames for an almost perfect game', function() {
    rolls = 'XXXXXXXXXX-2';
    expect(g.frames(rolls)).toEqual(['XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX','XX-','X-2']);
  });

  it('Split rolls into frames for regular game with spare', function() {
    rolls = '9-3/9-9-9-9-9-9-9-9-';
    expect(g.frames(rolls)).toEqual(['9-','3/9','9-','9-','9-','9-','9-','9-','9-','9-']);
  });

  it('Split rolls into frames for regular game', function() {
    rolls = '9-9-9-9-9-9-9-9-9-9-';
    expect(g.frames(rolls)).toEqual(['9-','9-','9-','9-','9-','9-','9-','9-','9-','9-']);
  });

  it('Max score for  non perfect game', function() {
    rolls = 'XXXXXXXXXX2/';
    expect(g.score(rolls)).toBe(284);
  });
});
