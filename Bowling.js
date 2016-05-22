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
        var frames = [];
        for (var i = 0; i < 10; i++){
            if(rolls[i] == 'X'){
                frames.push('XXX');
            }
        }
        return frames;
    };
    this.scoreByFrame = function(frame) {
        if (frame == 'XXX') {
            return 30;
        }
        return 0;
    };
}

module.exports = Game;
