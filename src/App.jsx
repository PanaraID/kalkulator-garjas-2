import { Fragment, useState, useReducer } from 'react'

import Header from './components/Header'
import AppContext from './context/AppContext'
import GarjasA from './components/GarjasA'
import GarjasB from './components/GarjasB'
import GarjasC from './components/GarjasC'
import GenderPicker from './components/GenderPicker'

import GENDERS from './finals/GENDERS'

import reducerRun from './reducers/garjas-a/reducerRun'
import reducerPullUp from './reducers/reducerPullUp'
import reducerChining from './reducers/reducerChining'
import reducerSwim from './reducers/garjas-c/reducerSwim'

function App() {
  const [gender, setGender] = useState(GENDERS.LELAKI)
  const [run, dispatchRun] = useReducer(reducerRun, {value: -1, score: 0})
  const [pullUp, dispatchPullUp] = useReducer(reducerPullUp, {value: -1, score: 0})
  const [chining, dispatchChining] = useReducer(reducerChining, {value: -1, score: 0})
  const [swim, dispatchSwim] = useReducer(reducerSwim, {value: -1, score: 0})


  const context = {
    gender, setGender,

    // GARJAS A
    run, dispatchRun,

    // GARJAS B
    pullUp, dispatchPullUp,
    chining, dispatchChining,

    // GARJAS C
    swim, dispatchSwim
  }

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
