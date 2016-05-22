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
        for (var i = 0; i < rolls.length; i++){
            if(rolls[i] == 'X') {
                frames.push(rolls.substring(i,i+3));
            } else if (rolls[i+1] == '/') {
                frames.push(rolls.substring(i,i+3));
                i++;
            } else {
                frames.push(rolls.substring(i,i+2));
                i++;
            }
            if (frames.length >= 10) {
                return frames;
            }
        }
        return [];
    };
    this.scoreByFrame = function(frame) {
        if (frame[0] == 'X') {
            return 10+this.numberPins(frame[1])+this.numberPins(frame[2]);
        }
        if (frame[1] == '/') {
            return 10 + this.numberPins(frame[2]);
        }

        return this.numberPins(frame[0]) + this.numberPins(frame[1]);
    };
    this.numberPins = function(roll){
         if(roll == 'X' || roll == '/'){
             return 10;
         }
        if(roll == '-') return 0;
        return parseInt(roll);
    };
}

module.exports = Game;
