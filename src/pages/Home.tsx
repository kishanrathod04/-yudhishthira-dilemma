import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://cdn.midjourney.com/12345678-90ab-cdef-1234-567890abcdef/0_0.webp')", // Karna in golden armor
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8">
            <img 
              // src="https://cdn.midjourney.com/abcdef12-3456-7890-abcd-ef1234567890/0_1.webp" // Karna's face with divine glow
              // alt="Karna Portrait" 
              // className="w-32 h-32 mx-auto rounded-full border-4 border-primary mb-6 shadow-lg shadow-primary/50"
            />
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent ancient-text">
            Yudhishthira's Dilemma
            </h1>
            <p className="text-xl mb-8 text-gray-300 ancient-text">
            Step into the mind of Dharma's scion as he faces the toughest moral trials in the Mahabharata. When duty clashes with righteousness and loyalty is weighed against consequence, what choices would you make in his place?
            </p>
          </div>
          
          <Link to="/story">
            <Button variant="primary" className="text-lg px-8 py-4">
              Begin Your Journey
            </Button>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl w-full"
        >
          <div className="p-8 bg-background-light/80 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-transform duration-300 border border-primary/30">
            {/* <img 
              // src="https://cdn.midjourney.com/98765432-10fe-dcba-9876-543210fedcba/0_2.webp" // Loyalty symbol
              // alt="Loyalty" 
              className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary"
            /> */}
            <h3 className="text-xl font-semibold text-primary mb-2 ancient-text">Loyalty</h3>
            <p className="text-gray-400">Test your commitment to those who stood by you</p>
          </div>
          <div className="p-8 bg-background-light/80 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-transform duration-300 border border-primary/30">
            {/* <img 
              src="https://cdn.midjourney.com/11223344-5566-7788-99aa-bbccddeeff00/0_3.webp" // Morality symbol
              // alt="Morality" 
              className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary"
            /> */}
            <h3 className="text-xl font-semibold text-primary mb-2 ancient-text">Morality</h3>
            <p className="text-gray-400">Face challenging ethical decisions that shape destiny</p>
          </div>
          <div className="p-8 bg-background-light/80 backdrop-blur-sm rounded-lg transform hover:scale-105 transition-transform duration-300 border border-primary/30">
            {/* <img 
              src="https://cdn.midjourney.com/aabbccdd-eeff-0011-2233-445566778899/0_0.webp" // Strategy symbol
              // alt="Strategy" 
              className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-primary"
            /> */}
            <h3 className="text-xl font-semibold text-primary mb-2 ancient-text">Strategy</h3>
            <p className="text-gray-400">Navigate complex situations with wisdom and foresight</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}