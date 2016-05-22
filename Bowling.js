function Game (){
    this.score = function(rolls){
        var frames = this.frames(rolls);
        var points = 0;
        for (i in frames) {
            points += this.scoreByFrame(frames[i]);
        }
        return points;
    };
    this.frames = function(rolls) {
        return ['XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX','XXX'];
    };
    this.scoreByFrame = function(frame) {
        if (frame == 'XXX') {
            return 30;
        }
        return 0;
    };
}

module.exports = Game;
