import React from "react";

function ChatInputComponent(props) {
    return (
        <>
            <div className="p-2 w-1/3 flex shadow-md rounded-b-lg border border-stone-950">
                <input type="text" value={props.name} onChange={props.handleNameChange} />
                <input type="text" value={props.inputValue} onChange={props.handleInputChange} />
                <button className="rounded-full border border-black" onClick={props.sendMessage}>
                    입력
                </button>            
            </div>
        </>
    )
}

export default ChatInputComponent