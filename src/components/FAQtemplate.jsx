import React, { useState } from 'react'

const FAQTemplate = ({question = "Who are you?", answer = "Yes here's my answer"}) => {
    const [shown, setShown] = useState(false);

    const handleToggle = () => {
        setShown(before_state => !before_state);
    }

    return(
    <div className="flex flex-col w-full justify-center">
        <button className="p-5 m-2 mx-5 rounded-xl bg-purple-200 border-2 border-purple-300 hover:cursor-pointer" onClick={handleToggle}>{question}</button>
        {shown && <p className="mx-auto">{answer}</p>}
    </div>
    );
}

export default FAQTemplate