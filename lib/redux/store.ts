import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reduceres/admin'
export const makeStore = () => {
    return configureStore({
        reducer: {
            admin: adminReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {},
                },
            }),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']