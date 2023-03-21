import { configureStore , combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
   // Твои редюсеры из ./Reducer/...
})

export const SetupStore = () => {
   return configureStore({
      reducer : rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']


// Файл через который данные из Reducer будут побадать и обрабатыватся в компоненты