class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate-this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    // bl = Hor, Ver
    //el = Hor, Ver
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return (verticalDistance + horizontalDistance)
  }

  estimatedTime(peak = false){
    let bpm
      if (peak) {
        bpm = 2
      }
      else {
        bpm = 3
      }
      return this.blocksTravelled() / bpm
  }

}



//
// { horizontal: 'Park', vertical: '34' },
// { horizontal: 'Park', vertical: '45' }
// );
// expect(route.blocksTravelled()).to.equal(11);
