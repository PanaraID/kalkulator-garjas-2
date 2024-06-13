import GENDERS from "../finals/GENDERS"
import DISTANCE from "../finals/DISTANCE"

const reducerDistance = (state, action) => {
  const buffer = action.value
  switch (action.type) {
    case GENDERS.LELAKI:
      if (buffer >= DISTANCE.LELAKI.MIN && buffer <= DISTANCE.LELAKI.MAX)
        return { value: action.value }
      else
        return { value: -1 }
    case GENDERS.PEREMPUAN:
      if (buffer >= 22 && buffer <= 3095)
        return { value: action.value }
      else
        return { value: -1 }
  }
}

export default reducerDistance