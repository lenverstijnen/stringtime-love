# stringtime-love

Small package for working with time strings (a.k.a "13:00, 13:15 etc").

## installation

```
npm i stringtime-love
```

## example usage

```javascript
import { Time } from "stringtime-love"

const time = new Time("13:00")

time.changeInMinutes(30).toString() // => 13:30
time.changeInMinutes(60 * 23).toString() // => 12:00
time.changeInMinutes(-30).toString() // => 12:30

// convertMinutesToHours

Time.convertMinutesToHours(75) // => {h: 1, m: 15}
Time.convertMinutesToHours(1511) // => {h: 25, m: 11}
```
