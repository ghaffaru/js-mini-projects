const Media = require('./Media');
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._title = title;
        this._runTime = runTime;
    }
}

module.exports = Movie;