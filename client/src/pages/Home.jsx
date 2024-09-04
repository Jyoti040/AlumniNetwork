import React from 'react';
import LeftPanel from '../components/Home/LeftPanel';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Left Section - User Info and Channels */}
      <LeftPanel />

      {/* Right Section - Recent Posts and Feeds */}
      <div className="w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <div className="space-y-6">
          {/* Post 1 */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="ml-3 font-semibold">Author Name 1</h3>
            </div>
            <p>Here's some content from the first post. It includes some text and an image.</p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Post Image 1"
              className="mt-4 rounded-lg"
            />
          </div>

          {/* Post 2 */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="ml-3 font-semibold">Author Name 2</h3>
            </div>
            <p>This is the second post with more content and another image.</p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Post Image 2"
              className="mt-4 rounded-lg"
            />
          </div>

          {/* Post 3 */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Author Avatar"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="ml-3 font-semibold">Author Name 3</h3>
            </div>
            <p>The third post also has some content and an image to show.</p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Post Image 3"
              className="mt-4 rounded-lg"
            />
          </div>
          {/* Add more posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
