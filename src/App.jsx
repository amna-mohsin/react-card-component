import React from 'react';
import Card from './Card';
import ProfilePic from './assets/ProfilePic.jpeg';


const App = () => {
  return (
    <div className="app-container">
     <Card
  profilePicUrl={ProfilePic}
  name="Amna Mohsin"
  description="Frontend Developer passionate about React and UI/UX."
/>
    </div>
  );
};

export default App;
