class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let travelled = 0
  travelled = travelled + (eastWest.indexOf(this.endingLocation['horizontal']) - eastWest.indexOf(this.beginningLocation['horizontal']))
  travelled = travelled + (this.endingLocation['vertical'] - this.beginningLocation['vertical'])
  return travelled
    }
    estimatedTime(rushHour) {
      if (rushHour === true) {
        return this.blocksTravelled() / 2
      } else {
        return this.blocksTravelled() / 3
      }
    }
}
