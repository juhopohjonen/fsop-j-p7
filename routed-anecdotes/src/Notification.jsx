const notificationSeconds = 5

const Notification = ({ notificationState, setNotificationState }) => {
    if (!notificationState) {
        return
    }
    
    setTimeout(() => {
        setNotificationState(null)
    }, notificationSeconds * 1000)

    return (
        <>
            {notificationState}
        </>
    )
}

export default Notification