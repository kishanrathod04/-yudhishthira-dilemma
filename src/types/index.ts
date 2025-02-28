export type Choice = {
  id: string;
  title: string;
  description: string;
  ethicalStance: 'Revolutionary Leader' | 'Strategic Leader' | 'Ethical Leader' | 'Traditional Leader';
};

export type Dilemma = {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
};

export type UserChoice = {
  dilemmaId: string;
  choiceId: string;
  ethicalStance: 'Revolutionary Leader' | 'Strategic Leader' | 'Ethical Leader' | 'Traditional Leader';
};

export type EthicalGroup = 'Revolutionary Leader' | 'Strategic Leader' | 'Ethical Leader' | 'Traditional Leader';

export type Stats = {
  RevolutionaryLeader: number;
  StrategicLeader: number;
  EthicalLeader: number;
  TraditionalLeader: number;
};
