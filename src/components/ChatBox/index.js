import ChatSection from "./ChatSection";
import HeaderSection from "./HeaderSection";
import WriteMsgSection from "./WriteMsgSection";


const ChatBox = ({ userName }) => {
    return (
        <div className=" bg-white w-full max-w-lg rounded-lg shadow-md px-8 ">
            <HeaderSection userName={userName} />
            <ChatSection />
            <WriteMsgSection />


        </div>
    )
}

export default ChatBox