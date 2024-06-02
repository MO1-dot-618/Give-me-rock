import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './Game.css';
import rockCard from '../assets/pic/rock.jpg';
import scissorCard from '../assets/pic/scissor.jpg';
import paperCard from '../assets/pic/paper.jpg';
import backCard from "../assets/pic/Back.webp";
import GonPic from "../assets/pic/Gon rock.webp";
import KiluaPic from "../assets/pic/Kilua scissor.png";
import KurapikaPic from "../assets/pic/Kurapika paper.png";
import winText from "../assets/pic/win.png";
import loseText from "../assets/pic/lose.png";
import drawText from "../assets/pic/draw.png";

function Game() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultText, setResultText] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  function animateResult(card, result) {
    const images = {
        "rock": GonPic,
        "scissor": KiluaPic,
        "paper": KurapikaPic,
    };
    const texts = {
        "win": winText,
        "lose": loseText,
        "draw": drawText,
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

  function flipOpponentCard(card) {
    const cardElement = document.getElementById(`${card}-opponent`);
    const cardImages = {
        'rock': rockCard,
        'scissor': scissorCard,
        'paper': paperCard,
      };
    cardElement.src=cardImages[card];
    setTimeout(() => {
        cardElement.src = backCard;
    }, 4000);
  }

  const handleSubmit = () => {
    if (selectedImage) {
      const choices = ['rock', 'paper', 'scissor'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];

      console.log(`Selected image: ${selectedImage}`);
      console.log(`Computer choice: ${computerChoice}`);

      flipOpponentCard(computerChoice);

      setTimeout(() => {
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
        }, 1000);
    }
  };


  return (
    <div className="game-component">
      <div className='score-container'>
        <div className='hearts'>

        </div>
      </div>
      <div className='cards-container'>
        <div className="image-selection">
            <img src={backCard} alt="Opponent card" id="rock-opponent" />
            <img src={backCard} alt="Opponent card" id="scissor-opponent" />
            <img src={backCard} alt="Opponent card" id="paper-opponent" />
        </div>
        <p>Select a card to play!</p>
        <div className="image-selection">
            <img 
            src={rockCard} 
            alt="Rock" 
            className={selectedImage === 'rock' ? 'selected' : ''}
            onClick={() => handleImageClick('rock')}
            />
            <img 
            src={scissorCard}
            alt="Scissor" 
            className={selectedImage === 'scissor' ? 'selected' : ''}
            onClick={() => handleImageClick('scissor')}
            />
            <img 
            src={paperCard}
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
    </div>
  );
}

export default Game;
