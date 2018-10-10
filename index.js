class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate) {
    return new Date(endDate).getYear() - this.startDate.getYear() + 1;
  }
}

class Route{
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)) + Math.abs(Number(this.endingLocation.vertical) - Number(this.beginningLocation.vertical))
  }

  estimatedTime(peakHr) {
    if (peakHr) {
      return this.blocksTravelled() / 2 * 1
    } else if (!peakHr){
      return this.blocksTravelled() / 3 * 1
    }
  }
}
