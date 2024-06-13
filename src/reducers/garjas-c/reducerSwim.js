import GENDERS from '../../finals/GENDERS'
import SWIM from '../../finals/garjas-c/SWIM'

const reducerSwim = (state, action) => {
  const buffer = action.value
  switch (action.type) {
    case GENDERS.LELAKI:
      if (buffer >= SWIM.LELAKI.MAX && buffer <= SWIM.LELAKI.MIN)
        return { value: buffer, score: calculate(buffer, action.type) }
      else
        return { value: -1 }
    case GENDERS.PEREMPUAN:
      if (buffer >= 22 && buffer <= 3095)
        return { value: calculate(buffer, action.type) }
      else
        return { value: -1 }
  }
}

const calculate = (data, gender) => {
  switch (gender) {
    case GENDERS.LELAKI:
      // switch (true) {
        
      // }
      return 2
    case GENDERS.PEREMPUAN:
      return data
  }
}

export default reducerSwim