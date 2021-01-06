export class Time {
  private h: number = 0
  private m: number = 0
  private reg = /^(([0-1]{1}[0-9]|(2[0-3])|^([0-9]))[:][0-5]{1}[0-9]{1})$|^(24[:]00)$/

  constructor(time: string) {
    if (!time.match(this.reg)) throw new Error("Invalid time value")
    const timeArray = time.split(":")
    this.h = parseInt(timeArray[0])
    this.m = parseInt(timeArray[1])
  }

  static convertMinutesToHours(input: number) {
    if (typeof input !== "number")
      throw new Error("Type of input must be a number")
    if (input < 0) throw new Error("Input must be greater then zero")
    const h = Math.floor(input / 60)
    const m = input % 60

    return { h, m }
  }

  changeInMinutes(minutesToAdd: number) {
    if (typeof minutesToAdd !== "number")
      throw new Error("Type of minutesToAdd must be a number")
    const totalMinutesToAdd = this.m + minutesToAdd
    const hoursToAdd = Math.floor(totalMinutesToAdd / 60)
    let newHour = this.h + hoursToAdd

    if (newHour >= 24) newHour = newHour - 24
    else if (newHour <= 0) newHour = newHour + 24

    this.h = newHour
    this.m = totalMinutesToAdd - hoursToAdd * 60
    return this
  }

  toString() {
    return `${this.h < 10 ? "0" + this.h : this.h}:${
      this.m < 10 ? "0" + this.m : this.m
    }`
  }
}
