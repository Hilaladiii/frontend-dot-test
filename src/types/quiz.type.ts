export interface IQuizCategory {
  id: number;
  name: string;
}

export interface IQuestion {
  type: string;
  question: string;
  difficulty: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
}
