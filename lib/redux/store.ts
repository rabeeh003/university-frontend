import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './reduceres/admin'
import collegeReducer from './reduceres/college'
export const makeStore = () => {
    return configureStore({
        reducer: {
            admin: adminReducer,
            college: collegeReducer,
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