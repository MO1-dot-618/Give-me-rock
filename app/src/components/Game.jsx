import React, { useState } from 'react';
import './Game.css';

function Game() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultText, setResultText] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  function animateResult(card, result) {
    const images = {
        "rock": "/pic/Gon rock.webp",
        "scissor": "/pic/Kilua scissor.png",
        "paper": "/pic/Kurapika paper.png",
    };
    const texts = {
        "win": "/pic/win.png",
        "lose": "/pic/lose.png",
        "draw": "/pic/draw.png",
    };

    if(result !== "draw") {
      setResultImage(images[card]);
      setTimeout(() => {
        setResultImage(null);
      }, 3000);
    }

    setResultText(texts[result]);
    setTimeout(() => {
      setResultText(null);
    }, 3000);
  }

  const handleSubmit = () => {
    if (selectedImage) {
      const choices = ['rock', 'paper', 'scissor'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];

      console.log(`Selected image: ${selectedImage}`);
      console.log(`Computer choice: ${computerChoice}`);

      let result = '';

      if (selectedImage === computerChoice) {
        result = 'Draw!';
        animateResult(selectedImage, "draw");
      } else if (
        (selectedImage === 'rock' && computerChoice === 'scissor') ||
        (selectedImage === 'scissor' && computerChoice === 'paper') ||
        (selectedImage === 'paper' && computerChoice === 'rock')
      ) {
        result = 'You win!';
        animateResult(selectedImage, "win");
      } else {
        result = 'You lose!';
        animateResult(computerChoice, "lose");
      }
      console.log(`Result: ${result}`);
    }
  };


  return (
    <div className="game-component">
      <p>Select a card to play!</p>
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
      {resultImage && (
        <img 
          src={resultImage} 
          className="result-image"
        />
      )}
      {resultText && (
        <img 
          src={resultText} 
          className="result-text"
        />
      )}
    </div>
  );
}

export default Game;
