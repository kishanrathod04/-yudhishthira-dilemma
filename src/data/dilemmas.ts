import { Dilemma } from '../types';

export const dilemmas: Dilemma[] = [
  {
    id: 'battle-of-wits',
    title: "The Challenge of Wisdom",
    description: "Should a leader walk into a battle of wits when they know the odds are against them?",
    choices: [
      {
        id: 'decline-revolutionary',
        title: 'Declining the Invitation',
        description: 'Like a revolutionary leader, refuse to participate in a game where deception may rule.',
        ethicalStance: 'Revolutionary Leader'
      },
      {
        id: 'negotiate-strategic',
        title: 'Negotiating the Terms',
        description: 'As a strategic leader, seek to establish fair conditions before engaging in the contest.',
        ethicalStance: 'Strategic Leader'
      },
      {
        id: 'delegate-ethical',
        title: 'Sending a Representative',
        description: 'Choose the path of an ethical leader, protecting yourself while maintaining honor through delegation.',
        ethicalStance: 'Ethical Leader'
      },
      {
        id: 'accept-traditional',
        title: 'Accepting the Challenge',
        description: 'Follow the path of a traditional leader, embracing the challenge despite the odds.',
        ethicalStance: 'Traditional Leader'
      }
    ]
  },
  {
    id: 'unfair-system',
    title: "The Unjust Game",
    description: "When faced with an unfair system, should a leader walk away, challenge the system, or adapt to it?",
    choices: [
      {
        id: 'refuse-ethical',
        title: 'Refusing to Bet Further',
        description: 'Take the ethical path and withdraw from a corrupted game.',
        ethicalStance: 'Ethical Leader'
      },
      {
        id: 'seek-counsel',
        title: 'Seeking Advice',
        description: 'Like a strategic leader, pause to gather wisdom from those who see beyond the immediate.',
        ethicalStance: 'Strategic Leader'
      },
      {
        id: 'challenge-revolutionary',
        title: 'Protesting the Games Integrity',
        description: 'Stand as a revolutionary, demanding justice and fair play.',
        ethicalStance: 'Revolutionary Leader'
      },
      {
        id: 'continue-traditional',
        title: 'Continuing to Play',
        description: 'Follow the path of a traditional leader, enduring the game despite its unfairness.',
        ethicalStance: 'Traditional Leader'
      }
    ]
  },
  {
    id: 'ultimate-stake',
    title: "The Final Gambit",
    description: "How much should a leader risk before realizing the cost is too great?",
    choices: [
      {
        id: 'preserve-ethical',
        title: 'Stopping at Personal Losses',
        description: 'Choose the path of dharma, refusing to risk what is not yours to lose.',
        ethicalStance: 'Ethical Leader'
      },
      {
        id: 'delay-strategic',
        title: 'Strategic Delay',
        description: "As a strategic leader, create space for fortune's wheel to turn.",
        ethicalStance: 'Strategic Leader'
      },
      {
        id: 'question-revolutionary',
        title: 'Questioning the Legality',
        description: 'Challenge the very foundations that allow such stakes to be wagered.',
        ethicalStance: 'Revolutionary Leader'
      },
      {
        id: 'bet-all-traditional',
        title: 'Betting Everything, Including Draupadi',
        description: 'Follow the path of a traditional leader, risking all for the game.',
        ethicalStance: 'Traditional Leader'
      }
    ]
  }
];
