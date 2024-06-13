import GENDERS from "../finals/GENDERS"
import DISTANCE from "../finals/DISTANCE"

const reducerDistance = (state, action) => {
    const buffer = action.value
    switch (action.type) {
        case GENDERS.LELAKI:
            if (buffer >= DISTANCE.LELAKI.MIN && buffer <= DISTANCE.LELAKI.MAX)
                return {value: action.value}
            else
                return {value: -1}
        case GENDERS.PEREMPUAN:
            return {value: action.value}
    }
}

export default reducerDistance