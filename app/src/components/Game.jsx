import React, { useState } from 'react';
//import './Game.css'; // Ensure you import the CSS file for styling

function Game() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = () => {
    if (selectedImage) {
      console.log(`Selected image: ${selectedImage}`);
      // Add your game logic here for when the user submits their choice
    }
  };

  return (
    <div className="game-component">
      <div className="image-selection">
        <img 
          src="/pic/rock.jpg" 
          alt="Rock" 
          className={selectedImage === 'rock' ? 'selected' : ''}
          onClick={() => handleImageClick('rock')}
        />
        <img 
          src="/pic/scissor.jpg" 
          alt="Scissor" 
          className={selectedImage === 'scissor' ? 'selected' : ''}
          onClick={() => handleImageClick('scissor')}
        />
        <img 
          src="/pic/paper.jpg" 
          alt="Paper" 
          className={selectedImage === 'paper' ? 'selected' : ''}
          onClick={() => handleImageClick('paper')}
        />
      </div>
      <button 
        onClick={handleSubmit} 
        disabled={!selectedImage}
      >
        Submit
      </button>
    </div>
  );
}

export default Game;
