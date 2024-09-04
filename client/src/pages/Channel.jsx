import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import LeftPanel from '../components/Home/LeftPanel'; // Assuming LeftPanel is in the same directory

const initialMessages = [
  { id: 1, sender: 'Alice', text: 'Hello everyone!' },
  { id: 2, sender: 'Bob', text: 'Hi Alice, how are you?' },
  { id: 3, sender: 'Charlie', text: 'Good morning!' },
];

const members = [
  { id: 1, name: 'Alice', role: 'Alumni' },
  { id: 2, name: 'Bob', role: '1st Year' },
  { id: 3, name: 'Charlie', role: '2nd Year' },
  { id: 4, name: 'Dave', role: '3rd Year' },
  { id: 5, name: 'Eve', role: 'Alumni' },
];

const Channel = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <LeftPanel />
      {/* Chat Section */}
      <div className="flex-1 p-6">
        <div className="h-full bg-white rounded-lg p-6 flex flex-col justify-between shadow-lg border border-gray-300">
          {/* Messages */}
          <div className="overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="mb-2">
                <div className="flex items-start">
                  <img
                    src="https://via.placeholder.com/40"
                    alt={message.sender}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <span className="font-semibold text-blue-500">{message.sender}</span>
                    <p className="bg-gray-100 p-3 rounded-lg mt-1 shadow-md">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chatbox */}
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-l-lg bg-gray-200 text-gray-800 focus:outline-none shadow-inner"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 bg-blue-500 hover:bg-blue-400 text-white rounded-r-lg shadow-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Sliding Panel for Members */}
      <div
        className={`fixed top-16 right-0 h-full bg-white p-6 transition-transform transform ${
          isPanelOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg border border-gray-300`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-blue-500">Members</h2>
          <button onClick={togglePanel} className="text-gray-800 hover:text-gray-600">
            <CloseIcon />
          </button>
        </div>
        <ul className="space-y-4">
          {members.map((member) => (
            <li key={member.id} className="p-4 bg-gray-200 rounded-lg flex flex-col shadow-sm">
              <span className="font-semibold text-gray-900">{member.name}</span>
              <span className="text-sm text-gray-600">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Panel Button */}
      <button
        onClick={togglePanel}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-l-lg border border-gray-300 hover:bg-gray-100 shadow-lg"
      >
        Members
      </button>
    </div>
  );
};

export default Channel;
