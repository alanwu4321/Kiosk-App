import firstAidKits from './api/firstAidKits';

var allStates = {
  counter: 0,
  questionId: 1,
  currentQuiz: [],
  question: '',
  answerOptions: [],
  answer: '',
  totalQuestion: 'TBD',
  firstAidKits: firstAidKits,
  gobackEndQuizcheck: false,
  CompleteQuizcheck: false,
  introcheck: true,
  endcheck: true,
  quizcheck: false,
  searchcheck: false,
  endcheckv2: false,
  searchquizswitch: true,
  slidercheck: false,
  gobackEndQuizSlider: false,
  show: false,
  lightboximg: '',
  searcharray: [],
  searchfield: '',
  purchaseKit: '',
  answersCount: {
    Nintendo: 0,
    Microsoft: 0,
    Sony: 0
  },
  result: ''
};

export default allStates;