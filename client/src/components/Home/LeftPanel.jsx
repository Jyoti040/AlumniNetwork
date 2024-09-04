import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const channels = [
  { id: 1, name: 'Gaming Channel' },
  { id: 2, name: 'Tech Talk' },
  { id: 3, name: 'Music Lounge' },
  { id: 4, name: 'Movie Buffs' },
  { id: 5, name: 'Sports Arena' },
];

const LeftPanel = () => {
  const navigate = useNavigate();

  const handleChannelClick = (id) => {
    navigate(`/channels/${id}`);
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md my-5 mx-4">
      {/* User Info */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/50"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">User Name</h2>
        </div>
      </div>

      {/* Channels List */}
      <h2 className="text-xl font-semibold mb-4">Channels</h2>
      <ul className="space-y-2">
        {channels.map((channel) => (
          <li
            key={channel.id}
            onClick={() => handleChannelClick(channel.id)}
            className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-200"
          >
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
