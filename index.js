
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return parseInt(year) - this.startDate.getFullYear();
  }
} // end class Driver


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const horizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    const vertical = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    return horizontal + vertical;
  }

    estimatedTime(peak = false) {
      let rate;
      if (peak) {
        rate = 2;
      } else {
        rate = 3;
      }
      return this.blocksTravelled() / rate;
    }
} // end class Route
