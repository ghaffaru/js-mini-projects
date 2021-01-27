const getSleepHours = day => {
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 7;
      case "wednesday":
        return 7;
    }
  }
  
  
  const getActualSleepHours = () => {
    let monday = getSleepHours('monday');
    let tuesday = getSleepHours('tuesday');
    let wednesday = getSleepHours('wednesday');
    return monday + tuesday + wednesday;
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 10;
    return idealHours * 3;
  }
  
  const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('Got more sleep than needed!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('Need some rest!');
    }
  }
  
  calculateSleepDept();