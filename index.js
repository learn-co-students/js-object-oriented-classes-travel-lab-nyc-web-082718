class Driver {
  constructor(name, startDate){
      this.name = name
      this.startDate = new Date(startDate)
  }

 yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const avenueA = eastWest.indexOf(this.beginningLocation.horizontal)
    const avenueB = eastWest.indexOf(this.endingLocation.horizontal)


    const blockDifference =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const avenueDifference = Math.abs(avenueA - avenueB)

    return avenueDifference +  blockDifference

  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
