import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">

      {/* Always give user name to ChatBox
          Messages will also be given to ChatBox
          send message function will also be given to the ChatBox
      */}


      <ChatBox userName="Muhammad Ali" />
    </div>
  );
}

export default App;
