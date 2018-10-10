class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let total = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(total);
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation; // horizontal and vertical attributes
    this.endingLocation = endingLocation; // horizontal and vertical attributes
  }
  avenueDistance(avenue) {
    return eastWest.indexOf(avenue);
  }
  blocksTravelled() {
    let horizontalDistance = this.avenueDistance(this.endingLocation.horizontal) - this.avenueDistance(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return horizontalDistance + verticalDistance
  }
  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
