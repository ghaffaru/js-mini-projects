class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      if (this._isCheckedOut) this._isCheckedOut = false;
      else this._isCheckedOut = true;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this.ratings.length;
      
    }
  
    addRating(rating) {
      this.ratings.push(rating);
    }
    set isCheckedOut(isCheckedOut) {
      this.isCheckedOut = isCheckedOut;
    }
  
  }

module.exports = Media;