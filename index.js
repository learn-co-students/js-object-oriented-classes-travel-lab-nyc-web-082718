class Driver{
  constructor(name,start){
    this.name = name
    this.startDate = new Date(start)
  }


  yearsExperienceFromBeginningOf(year){
    let yeardate = new Date(year,0);
    return yeardate.getYear() - this.startDate.getYear()
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) + Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
  }

  estimatedTime(peak = false){
    switch(peak){
      case true: return (this.blocksTravelled() / 2);
      case false: return (this.blocksTravelled() / 3);
    }
  }
}
