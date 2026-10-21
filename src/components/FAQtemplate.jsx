import React, { useState } from 'react'

const FAQTemplate = ({question = "Who are you?"}) => {
    const [shown, setShown] = useState(false);

    const handleToggle = () => {
        setShown(before_state => !before_state);
    }

    return(
    <>
        <button onClick={handleToggle}>{question}</button>
        {shown && <p>Yes here's my answer</p>}
    </>
    );
}

export default FAQTemplate