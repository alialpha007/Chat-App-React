import ChatSection from "./ChatSection";
import HeaderSection from "./HeaderSection";
import WriteMsgSection from "./WriteMsgSection";
import dayjs from 'dayjs'


const ChatBox = ({ userName, messages, sendMessage }) => {

    return (
        <div className=" bg-white w-full max-w-lg rounded-lg shadow-md px-8 ">
            <HeaderSection userName={userName} />

            <ChatSection userName={userName} messages={messages} />
            {/* here it call the message */}
            < WriteMsgSection sendMessage={(message) => {
                // console.log('message send:', message)
                sendMessage({
                    text: message,
                    userName,
                    // time: new Date()

                    time: dayjs().toDate()
                })
            }
            }
            />


        </div>
    )
}

export default ChatBox