import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { dilemmas } from '../data/dilemmas';
import Button from '../components/Button';
import type { UserChoice } from '../types';

export default function Story() {
  const navigate = useNavigate();
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<UserChoice[]>([]);
  
  const currentDilemma = dilemmas[currentDilemmaIndex];

  const handleChoice = (choiceId: string, ethicalStance: "Revolutionary Leader" | "Strategic Leader" | "Ethical Leader" | "Traditional Leader") => {
    const newChoice: UserChoice = {
      dilemmaId: currentDilemma.id,
      choiceId,
      ethicalStance
    };
    
    setUserChoices([...userChoices, newChoice]);
    
    if (currentDilemmaIndex < dilemmas.length - 1) {
      setCurrentDilemmaIndex(currentDilemmaIndex + 1);
    } else {
      localStorage.setItem('userChoices', JSON.stringify([...userChoices, newChoice]));
      navigate('/results');
    }
  };

  const getDilemmaImage = (id: string) => {
    const images = {
      'battle-of-wits': 'https://cdn.midjourney.com/dice-game-challenge/0_0.webp',
      'unfair-system': 'https://cdn.midjourney.com/loaded-dice/0_0.webp',
      'ultimate-stake': 'https://cdn.midjourney.com/final-gambit/0_0.webp'
    };
    return images[id as keyof typeof images];
  };

  return (
    <div className="min-h-[calc(100vh-80px)] relative py-8 px-4">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${getDilemmaImage(currentDilemma.id)})`,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <motion.div
        key={currentDilemma.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="ancient-scroll rounded-lg p-8 mb-12 text-center">
          <h1 className="ancient-title text-4xl md:text-5xl lg:text-6xl mb-6">
            {currentDilemma.title}
          </h1>
          <div className="ancient-divider my-6"></div>
          <p className="ancient-text text-lg md:text-xl lg:text-2xl text-gray-300">
            {currentDilemma.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {currentDilemma.choices.map((choice) => (
            <motion.div
              key={choice.id}
              whileHover={{ scale: 1.02 }}
              className="choice-card rounded-lg p-6"
              onClick={() => handleChoice(choice.id, choice.ethicalStance)}
            >
              <div className="h-30 mb-4 overflow-hidden rounded-lg">
                {/* <motion.img 
                  // src={`https://cdn.midjourney.com/${choice.id}/0_0.webp`}
                  // alt={choice.title}
                  // className="w-full h-full object-cover"
                  // whileHover={{ scale: 1.1 }}
                  // transition={{ duration: 0.3 }}
                /> */}
              </div>
              <h3 className="ancient-text text-xl font-semibold text-primary mb-3">
                {choice.title}
              </h3>
              <div className="ancient-divider my-3"></div>
              <p className="text-gray-300 mb-4 ancient-text">
                {choice.description}
              </p>
              <Button variant="outline" className="w-full ancient-text">
               Choose this path
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block ancient-scroll px-6 py-3 rounded-full">
            <span className="text-primary ancient-text">Question {currentDilemmaIndex + 1}</span>
            <span className="text-gray-400 ancient-text"> of {dilemmas.length}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}