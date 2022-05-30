import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { useState } from "react";


const WriteMsgSection = ({ sendMessage }) => {

    // State to save the typed message
    const [message, setMessage] = useState(''); // (2) (5 --> empty the message)
    return (
        <form className="flex items-center border-t py-4 gap-3"

            // here on submit several events will fire
            onSubmit={(event) => {
                event.preventDefault() // it prevents the page to load
                sendMessage(message) // (3) it will give the typed message to sendMessage
                setMessage('') // (4) it will empty the string
            }}
        >

            <button type="button" className="bg-slate-100 w-7 h-7 rounded-full flex justify-center items-center  text-slate-700 transition hover:shadow">
                <BsEmojiSmile />
            </button>

            <input className="pl-2 flex-1 focus:outline-none bg-transparent"
                type="text"
                placeholder="Write a message..."
                onChange={(event) => setMessage(event.target.value)} // (1) here on change event will fore and save the message to state
                value={message} // (6)
            />

            <button className="bg-slate-100 w-7 h-7 rounded-full flex justify-center items-center  text-slate-700 transition hover:shadow">
                <AiOutlinePaperClip />
            </button>

            <button className="bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white transition hover:shadow">
                <FiSend />
            </button>
        </form>
    )
}

export default WriteMsgSection 