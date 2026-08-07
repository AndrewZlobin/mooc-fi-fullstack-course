import {useEffect, useState} from "react";

const Notification = ({list}) => {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const total = list?.length || 0;

        if (total > 10) {
            setMessage('Too many matches, specify another filter');
        } else {
            setMessage(null);
        }
    }, [list]);

    if (message === null) {
        return null;
    }

    return (
        <div>{message}</div>
    )
}

export default Notification