import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Stats, UserChoice, EthicalGroup } from '../types';
import Button from '../components/Button';

export default function Results() {
  const [stats, setStats] = useState<Stats>({
    RevolutionaryLeader: 0,
    StrategicLeader: 0,
    EthicalLeader: 0,
    TraditionalLeader: 0
  });

  const [ethicalGroup, setEthicalGroup] = useState<EthicalGroup>('Revolutionary Leader');

  useEffect(() => {
    const calculateResults = () => {
      const choices = JSON.parse(localStorage.getItem('userChoices') || '[]') as UserChoice[];
  
      if (choices.length === 0) return;
  
      const newStats: Stats = {
        RevolutionaryLeader: 0,
        StrategicLeader: 0,
        EthicalLeader: 0,
        TraditionalLeader: 0
      };
  
      choices.forEach(choice => {
        const formattedKey = choice.ethicalStance.replace(/\s+/g, ''); // Remove spaces
        if (newStats.hasOwnProperty(formattedKey)) {
          newStats[formattedKey as keyof Stats]++;
        }
      });
  
      setStats(newStats);
  
      const maxValue = Math.max(...Object.values(newStats));
      let dominantStance: EthicalGroup = 'Revolutionary Leader';
  
      if (newStats.EthicalLeader === maxValue) dominantStance = 'Ethical Leader';
      if (newStats.StrategicLeader === maxValue) dominantStance = 'Strategic Leader';
      if (newStats.TraditionalLeader === maxValue) dominantStance = 'Traditional Leader';
  
      setEthicalGroup(dominantStance);
    };
  
    setTimeout(calculateResults, 500); // Ensure localStorage updates before calculation
  }, []);
  

  const getGroupImage = () => {
    const images = {
      RevolutionaryLeader: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=200',
      StrategicLeader: 'https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?q=80&w=200',
      EthicalLeader: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=200',
      TraditionalLeader: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=200'
    };
    return images[ethicalGroup.replace(' ', '') as keyof typeof images];
  };

  const getGroupDescription = () => {
    switch (ethicalGroup) {
      case 'Revolutionary Leader':
        return "You are a bold leader who challenges norms and seeks justice against unfair systems.";
      case 'Strategic Leader':
        return "You navigate complexities with careful planning and adaptability.";
      case 'Ethical Leader':
        return "You uphold morality and integrity, ensuring fairness and righteousness.";
      case 'Traditional Leader':
        return "You value customs, honor, and responsibility, staying true to established principles.";
    }
  };

  const total = stats.RevolutionaryLeader + stats.StrategicLeader + stats.EthicalLeader + stats.TraditionalLeader;
  const getPercentage = (value: number) => {
    if (total === 0) return '0.0'; // Prevent division by zero
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-12 px-4 relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2070')",
          backgroundBlendMode: 'overlay'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Your Leadership Style
        </h1>

        <div className="bg-background-light/80 backdrop-blur-sm p-8 rounded-lg mb-8 border border-primary/20">
          <img
            src={getGroupImage()}
            alt={ethicalGroup}
            className="w-24 h-24 mx-auto rounded-full border-4 border-primary mb-6"
          />
          <h2 className="text-2xl font-semibold text-primary mb-4">
            You are a {ethicalGroup}
          </h2>
          <p className="text-gray-300 text-lg mb-6">{getGroupDescription()}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-primary/20">
              <h3 className="text-primary font-semibold mb-2">Revolutionary</h3>
              <p className="text-2xl font-bold">{getPercentage(stats.RevolutionaryLeader)}%</p>
            </div>
            <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-primary/20">
              <h3 className="text-primary font-semibold mb-2">Strategic</h3>
              <p className="text-2xl font-bold">{getPercentage(stats.StrategicLeader)}%</p>
            </div>
            <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-primary/20">
              <h3 className="text-primary font-semibold mb-2">Ethical</h3>
              <p className="text-2xl font-bold">{getPercentage(stats.EthicalLeader)}%</p>
            </div>
            <div className="p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-primary/20">
              <h3 className="text-primary font-semibold mb-2">Traditional</h3>
              <p className="text-2xl font-bold">{getPercentage(stats.TraditionalLeader)}%</p>
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <Link to="/story">
            <Button variant="primary">Try Again</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
