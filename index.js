let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let blocks = this.endingLocation.vertical - this.beginningLocation.vertical
    let avenues = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return blocks + avenues
  }
  estimatedTime(peak = false) {
    if (peak === true) {
      return parseInt(this.blocksTravelled()) / 2;
    }
    else {
      return parseInt(this.blocksTravelled()) / 3;
    }
  }
}
