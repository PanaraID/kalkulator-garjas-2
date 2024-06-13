import { Fragment, useState } from 'react'

import Header from './components/Header'
import AppContext from './context/AppContext'
import GarjasA from './components/GarjasA'
import GarjasB from './components/GarjasB'
import GarjasC from './components/GarjasC'
import GenderPicker from './components/GenderPicker'

import GENDERS from './finals/GENDERS'
import { useReducer } from 'react'

import reducerDistance from './reducers/reducerDistance'

function App() {
  const [gender, setGender] = useState(GENDERS.LELAKI)
  const [distance, dispatchDistance] = useReducer(reducerDistance, {value: -1, score: 0})

  const context = {
    gender,
    setGender,

    distance,
    dispatchDistance,
  }

  console.log(distance)

  return (
    <Fragment>
      <Header />
      <AppContext.Provider value={context}>
        <GenderPicker />
        <GarjasA />
        <GarjasB />
        <GarjasC />
      </AppContext.Provider>
    </Fragment>
  );
}

export default App
