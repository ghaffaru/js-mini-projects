let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
  
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    get appetizers() {
      return this._courses.appetizers;
    },
  
    set mains(mains) {
      this._courses.mains = mains;
    },
    get mains() {
      return this._courses.mains;
    },
  
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  
    get desserts() {
      return this._courses.desserts;
    },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        dishName,
        dishPrice
      }
  
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      return dishes[Math.floor(Math.random() * dishes.length)]
    },
  
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts')
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  
  menu.addDishToCourse('mains', 'Blah blah', 4.23);
  menu.addDishToCourse('desserts', 'Blah', 10);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);