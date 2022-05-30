import { useState } from "react";
import ChatBox from "./components/ChatBox";



function App() {

  const [messages, setMessages] = useState([])

  // act like a backend
  const sendMessage = ({ text, userName, time }) => {

    setMessages((prevMessages) => [...prevMessages, { text, userName, time },
    ]
    )
  }
  return (
    <div className="min-h-screen bg-gray-200 flex flex-wrap gap-8 justify-center items-center">

      {/* Always give user name to ChatBox
          Messages will also be given to ChatBox
          send message function will also be given to the ChatBox
      */}

      <ChatBox
        userName="Muhammad Ali"
        messages={messages}
        sendMessage={sendMessage} />

      <ChatBox
        userName="Salman"
        messages={messages}
        sendMessage={sendMessage} />
    </div>
  );
}

export default App;
