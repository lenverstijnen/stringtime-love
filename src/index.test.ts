import { Time } from "."

describe("/helpers/Time", () => {
  describe("constructor", () => {
    it("should throw if time format is invalid", () => {
      expect(() => new Time("foo")).toThrow()
    })
    it("should not throw it time format is correct", () => {
      expect(() => new Time("13:00")).not.toThrow()
    })
  })

  describe("changeInMinutes", () => {
    it("should return 13:00 if you add 30 minutes to 12:30", () => {
      const time = "12:30"

      const result = new Time(time).changeInMinutes(30).toString()

      expect(result).toBe("13:00")
    })
    it("should return 00:30 if you add 60 minutes to 23:30", () => {
      const time = "23:30"

      const result = new Time(time).changeInMinutes(60).toString()

      expect(result).toBe("00:30")
    })
    it("should return 11:00 if you add 1350 minutes to 12:30", () => {
      const time = "12:30"

      const result = new Time(time).changeInMinutes(1350).toString()

      expect(result).toBe("11:00")
    })
    it("should return 12:30 if you subtract 1350 minutes to 11:00", () => {
      const time = "11:00"

      const result = new Time(time).changeInMinutes(-1350).toString()

      expect(result).toBe("12:30")
    })
    it("should return 11:03 if you add 13 minutes to 10:50", () => {
      const time = "10:50"

      const result = new Time(time).changeInMinutes(13).toString()

      expect(result).toBe("11:03")
    })
  })
})
