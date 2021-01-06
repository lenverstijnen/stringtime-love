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

  describe("convertMinutesToHours", () => {
    it("should throw if input is negative", () => {
      expect(() => Time.convertMinutesToHours(-10)).toThrow()
    })

    it("should throw if input is not a number", () => {
      expect(() => Time.convertMinutesToHours("foo" as any)).toThrow()
    })

    it("should return h: 1 and m: 0 if input is 60", () => {
      const result = Time.convertMinutesToHours(60)

      expect(result).toEqual({ h: 1, m: 0 })
    })
    it("should return h: 1 and m: 15 if input is 75", () => {
      const result = Time.convertMinutesToHours(75)

      expect(result).toEqual({ h: 1, m: 15 })
    })
    it("should return h: 25 and m: 11 if input is 60 * 25 + 11", () => {
      const result = Time.convertMinutesToHours(60 * 25 + 11)

      expect(result).toEqual({ h: 25, m: 11 })
    })
  })
})
