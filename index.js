class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
	
  blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		//debugger
		const x_end = eastWest.indexOf(this.end.horizontal)
		const x_start = eastWest.indexOf(this.start.horizontal)
    const x = Math.abs(x_end - x_start)
    const y = Math.abs(parseInt(this.end.vertical) - parseInt(this.start.vertical))
    return x + y
  }

  estimatedTime(peak) {
    let modifier = 0
    peak ? modifier = 2 : modifier = 3
    return this.blocksTravelled() / modifier
  }
}
