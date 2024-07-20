import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(selector => selector.notification)
    console.log('selector', notification)

    return (
        <>
            {
                notification && notification.value
                    ? <p>{notification.value}</p>
                    : <></>
            }
        </>
    )
}

const FailedMessage = ({ message }) =>
    message ? <p id="failedMessage">{message}</p> : null

export { Notification, FailedMessage }
