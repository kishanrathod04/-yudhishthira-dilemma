import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-[calc(100vh-80px)] py-12 relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?q=80&w=2070')",
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <div className="flex items-center mb-12">
          <img 
            // src="https://images.unsplash.com/photo-1578923931302-6f7c7aa04e3f?q=80&w=150" 
            // alt="Karna" 
            // className="w-24 h-24 rounded-full border-4 border-primary mr-6"
          />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            About Yudhhishthira's Dilemma
          </h1>
        </div>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
          Yudhishthira, the embodiment of dharma, is one of the most intriguing characters in the Mahabharata. His journey is filled with profound ethical dilemmas, forcing him to constantly balance righteousness, duty, and practicality. His story challenges our understanding of morality and leadership, making his choices deeply relevant even today.
          </p>
          
          <div className="bg-background-light/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=150" 
                alt="The Story" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold text-primary">The Story</h2>
            </div>
            <p>
            As the eldest Pandava, Yudhishthira was destined to rule, yet his commitment to truth and dharma often put him in difficult situations. From the fateful game of dice to the war of Kurukshetra, his decisions shaped the course of history. Even in moments of crisis, he remained bound by his principles, but at what cost?
            </p>
          </div>
          
          <div className="bg-background-light/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=150" 
                alt="The Dilemmas" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold text-primary">The Dilemmas</h2>
            </div>
            <p>
            Through this interactive experience, you will step into Yudhishthira’s shoes and face the crucial decisions that defined his life. Each choice will test your own ethical framework, helping you understand the intricate balance between morality, duty, and leadership. Will you uphold truth at all costs, or will you make pragmatic decisions for the greater good? The answers lie in the choices you make.
            </p>
          </div>
          
          <div className="bg-background-light/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?q=80&w=150" 
                alt="Your Journey" 
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold text-primary">Your Journey</h2>
            </div>
            <p>
              As you progress through the story, your choices will be tracked and analyzed. At the end, you'll discover 
              which ethical framework most closely aligns with your decisions: Revolutionary Leader, Strategic Leader ,Ethical Leader ,Traditional Leader
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}