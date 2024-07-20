import { createSlice } from "@reduxjs/toolkit";

const notificationTimeSeconds = 5

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        value: ''
    },
    reducers: {
        notify: (state, action) => {
            console.log('a', action)

            const { notificationText } = action.payload
            state.value = notificationText

            console.log('sv s', state.value)
        }
    }
})

export const setNotification = (notification) => {
    return async dispatch => {
        dispatch(notify({ notificationText: notification }))

        setTimeout(() => {
            dispatch(notify({ notificationText: '' }))
        }, 5000)
    }
}

export default notificationSlice.reducer
export const { notify } = notificationSlice.actions