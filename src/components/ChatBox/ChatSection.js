import Message from "./Message"


const ChatSection = ({ userName, messages }) => {
    // console.log("chat: ", messages)
    return (
        <div className=" my-6 h-96 flex flex-col overflow-y-scroll overflow-x-hidden" >
            {
                messages.map((message, index) => {
                    return <Message
                        key={index}
                        self={message.userName === userName}
                        text={message.text}
                        time={message.time}
                    />

                })
            }
        </div>
    )
}

export default ChatSection