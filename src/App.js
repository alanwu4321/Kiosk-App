import React from 'react';
import { quizQuestions, quizQuestionsWorkPlace, quizQuestionsPersonal, firstAidKits } from './api/getAPI'
import { Result, GoBack, Example, } from './components/Checkout/getCheckout'
import { Kit, Kit2, KitDisplay, Pic, Lightbox, Scroll } from './components/Kit/getKits'
import { Quiz, Slider1 } from './components/Quiz/getQuiz'
import { SearchBox } from './components/Search/getSearch'
import { logo, currentDisplay, alan, pfalogo, CPRKit, CompactKit } from './getMedia'
import allStates from './getStates'
import Mailchimp from 'react-mailchimp-form'
import 'react-image-lightbox/style.css';
import './App.css';
import {
  library,
  FontAwesomeIcon,
  faSearchPlus, faHandPointer, faMedkit,
  ReactCSSTransitionGroup,
  update
} from './getStyling'
library.add(faSearchPlus, faHandPointer, faMedkit)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = allStates;
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.gobackEndQuiz = this.gobackEndQuiz.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchfield !== this.state.searchfield) {
      const filtered = this.state.firstAidKits.filter(kit => {
        return kit.Name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      this.setState({ searcharray: filtered })
      this.forceUpdate();
    }
    if (this.state.firstAidKits.length === 0) {
      this.setState({
        quizcheck: false, endcheck: false, slidercheck: false, gobackEndQuizSlider: false, endcheckv2: true, firstAidKits: [{
          Name: "Compact Kit",
          Content: "Compact Kit is a portable Kit perfect to carry around",
          Type: ["Personal", "First Aid Treament", "Self", "0-20"],
          Pic: CompactKit,
          Key1: 6
        }, {
          Name: "CPR Kit",
          Content: "An upgrade from Compact Kit",
          Type: ["Personal", "First Aid Treament", [1, 3], 12],
          Pic: CPRKit,
          Key1: 10.00
        },
        ]
      })
      this.setState({ gobackEndQuizcheck: true })
      this.gobackEndQuiz();
    }
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((i) => this.shuffleArray(i.answers));
    this.setState({
      question: quizQuestions[0].question,  //initiate the process only run once
      answerOptions: shuffledAnswerOptions[0]
    });
  }
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  showModal = (a) => {
    this.setState({
      ...this.state,
      show: !this.state.show, purchaseKit: a
    });
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (i) => i + 1 }
    });  //create a new object that has answersCount properties update with new answer
    // the object has to be in [   ]
    this.setState({
      answersCount: updatedAnswersCount, //useless
      answer: answer
    });
    //   filterOut(answer);
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    this.display(this.state.questionId, event.currentTarget.value, this.state.firstAidKits);
    if (this.state.questionId.toString() === this.state.totalQuestion) {
      this.setState({ endcheck: false, gobackEndQuizcheck: true, slidercheck: false, quizcheck: false, gobackEndQuizSlider: true })
    }
    else {
      setTimeout(() => this.setNextQuestion(), 300);
    }
    //} else {
    // setTimeout(() => this.setResults(this.getResults()), 300);
    // }
  }
  // filterOut (answer){
  //const filtered = firstAidKits.filter(key =>{
  // return key.Q1.toLowerCase().includes(searchfield.toLowerCase());
  //})
  //}

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const test = this.state.answer === "Personal" ?
      this.setState({ currentQuiz: quizQuestionsPersonal }) : console.log("hello world from personal current quiz")
    const test2 = this.state.answer === "Workplace" ?
      this.setState({ currentQuiz: quizQuestionsWorkPlace, firstAidKits: currentDisplay }) : console.log("hello world from Workplace current quiz")
    const test3 = this.state.currentQuiz[counter - 1].answers[0] === "slider" ?
      this.setState({ quizcheck: false, slidercheck: true }) : console.log('test 3 is else')
    const TotalQuestion = this.state.currentQuiz.length + 1;
    const StringofTQ = TotalQuestion.toString();
    const qtShow = this.state.totalQuestion === 'TBD' ? this.setState({ totalQuestion: StringofTQ }) : console.log('qtShow is not TBD anymore')
    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.currentQuiz[counter - 1].question,
      answerOptions: this.state.currentQuiz[counter - 1].answers,
      //answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((i) => answersCount[i]); //object[property] gives property's value
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer} //string
        answerOptions={this.state.answerOptions} //array of answer option 
        questionId={this.state.questionId} //int (what question we are on)
        question={this.state.question} //string
        questionTotal={this.state.totalQuestion} // int 
        onAnswerSelected={this.handleAnswerSelected} //setanswer to array
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  display(questionId, answer, filtered) {
    const qcount = questionId - 1;
    if (this.state.slidercheck && this.state.currentQuiz[this.state.counter - 1].answers[7] === 'range') {
      function check1(rangeArr) {
        return rangeArr.Type[qcount][0] <= answer && rangeArr.Type[qcount][1] >= answer
      }
      const filteredRobots = filtered.filter(check1);
      this.setState({ firstAidKits: filteredRobots })
    }
    if (this.state.slidercheck && this.state.currentQuiz[this.state.counter - 1].answers[7] === 'single') {
      function check2(rangeArr) {
        return rangeArr.Type[qcount] <= answer;
      }
      const filteredRobots = filtered.filter(check2);
      this.setState({ firstAidKits: filteredRobots })
    }
    if (!this.state.slidercheck) {
      //checking the array that belongs to type
      function check3(kitObject) {
        return kitObject.Type[qcount] === answer;
      }
      const filteredRobots = filtered.filter(check3);
      this.setState({ firstAidKits: filteredRobots })
    }
  }

  gobackEndQuiz() {
    if (this.state.searchcheck) {
      return (
        <div>
          <small className='lea mt-4'> For example: BC Workplace Level 2, Home & Vehicle Kit </small>
        </div>
      );
    }
    if (this.state.endcheckv2) {
      return (
        <div>
          <h1> You are out of options </h1>
          <small className='lead font1'> but you can always give our <span className='bg-warning1'>  best sellers</span>  a try </small>
        </div>
      );
    }
    else if (!this.state.searchcheck || this.state.quizcheck || this.state.gobackEndQuizSlider) {
      return (
        <div>
          <h1 className='font1'> Click '<span className='bg-warning1'> Buy Now </span>' to purchase the kit </h1>
        </div>
      );
    }
  }

  goback = () => {
    const shuffledAnswerOptions = quizQuestions.map((i) => this.shuffleArray(i.answers));
    this.setState({
      firstAidKits: firstAidKits, introcheck: true, counter: 0,
      questionId: 1, endcheck: true, question: quizQuestions[0].question,  //initiate the process only run once
      answerOptions: shuffledAnswerOptions[0], gobackEndQuizcheck: false, quizcheck: false, searchcheck: false, searchquizswitch: true, slidercheck: false, endcheckv2: false
    })
    //setTimeout(() => this.setState({introcheck:true}),500) 
  }

  renderIntro() {
    return (
      <div>
        <h1 className='tc display-4 mb-1 question-test'> Help me find the <span className='font-weight-400'>  Right   <span>  <FontAwesomeIcon className='grow' icon="medkit" color="#dc3545" size="1x" /></span> </span> </h1>
        <div>
          <button className=' tc f6 link dim br1 ba bw1 ph3 pv2 mb-3 dib btn btn-outline-secondary btn-lg ' type='button' onClick={() =>
            this.setState({ introcheck: false, quizcheck: true, })} >
            <span className='font-italic buttonedit '> Start Here </span></button>
        </div>
        <div>
          <p className='lead searchingtext'>  I know what I am searching for ... </p>
          <div>
            <FontAwesomeIcon className='grow' icon="search-plus" color="#6f99c2" size="2x" onClick={() =>
              this.setState({ searchcheck: true, introcheck: false, endcheck: false, gobackEndQuizcheck: true })} />
          </div>
        </div>
      </div>
    );
  }

  renderKit2(array) {
    const transitionprops = {
      transitionName: 'background',
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 250,
      transitionLeave: true,
      transitionEnter: true,
      transitionAppear: true,
      transitionAppearTimeout: 2500
    };
    return array.map((object, i) => {
      return (
        <ReactCSSTransitionGroup {...transitionprops}>
          <div key={object.Name}>
            <Kit2 name={object.Name} pic={object.Pic} key={object.Key2} show={this.showLightBox} />
          </div>
        </ReactCSSTransitionGroup>
      )
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value, searchquizswitch: false })
  }

  testfun = (value) => {
    this.display(this.state.questionId, value, this.state.firstAidKits);
    if (this.state.questionId.toString() === this.state.totalQuestion) {
      this.setState({ endcheck: false, gobackEndQuizcheck: true, slidercheck: false, gobackEndQuizSlider: true })
    }
    else {
      this.setState({ quizcheck: true, slidercheck: false })
      this.setNextQuestion();
    }
  }

  setSlider = () => {
    return (
      <Slider1 fun={this.testfun}
        question={this.state.question}
        questionTotal={this.state.totalQuestion}
        questionId={this.state.questionId}
        max={this.state.currentQuiz[this.state.counter - 1].answers[1]}
        min={this.state.currentQuiz[this.state.counter - 1].answers[2]}
        unit={this.state.currentQuiz[this.state.counter - 1].answers[3]}
        label1={this.state.currentQuiz[this.state.counter - 1].answers[4]}
        label2={this.state.currentQuiz[this.state.counter - 1].answers[5]}
        label3={this.state.currentQuiz[this.state.counter - 1].answers[6]} />
    );
  }

  showLightBox = (a) => {
    return (
      this.setState({ isOpen: true, lightboximg: a })
    )
  }
  
  render() {
    const transitionprops = {
      transitionName: 'example',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500,
      transitionLeave: true,
      transitionEnter: true,
      transitionAppear: true,
      transitionAppearTimeout: 500
    };
    return (
      <div className="App ">
        <div className="App-header">
          <div>
            <div>
              {this.state.isOpen ?
                <Lightbox
                  mainSrc={this.state.lightboximg}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                /> : console.log('LIGHT BOX IS FALSE IF YOU SEE THIS')
              }
            </div>
          </div>
          <h2 className='display-3'><span><img className='App-logo1' src={logo} alt="logo" /> </span> <span className='text-danger grow'>First Aid </span><span className='kithelper header-text grow'>Kit Helper </span> </h2>
          <small className='lead font-italic'> Pacific First Aid </small>
        </div>
        <div className=' tc mt-5 question-section'>
          {this.state.searchcheck ? <SearchBox searchChange={this.onSearchChange} /> : console.log('searchcheck = false')}
          {this.state.gobackEndQuizcheck ? this.gobackEndQuiz() : console.log('gobackEndQuizcheck is false')}
          {this.state.introcheck ? this.renderIntro() : console.log('introcheck = false')}
          {this.state.quizcheck ? this.renderQuiz() : console.log('quizcheck = false')}
          <div className='container mt-5'>
            {this.state.slidercheck ? this.setSlider() : console.log('fasd')}
          </div>
          {this.state.gobackEndQuizcheck ? <GoBack key='ya' goback={this.goback} /> : console.log('firstAidkit is still there')}
          <div>
            <div>
              <Example onClose={this.showModal} show={this.state.show} currentKit={this.state.purchaseKit} >
                <Mailchimp action='https://netlify.us19.list-manage.com/subscribe/post?u=35e35f65155b9eafc80e315f4&amp;id=59324f4878'
                  fields={[
                    {
                      name: 'EMAIL',
                      placeholder: 'Email',
                      type: 'email',
                      required: true
                    },
                    {
                      name: 'NAME',
                      placeholder: 'Name',
                      type: 'text',
                      required: true
                    },
                    {
                      name: 'ADDRESS',
                      placeholder: 'Address',
                      type: 'text',
                      required: true
                    },
                    {
                      name: 'PHONE',
                      placeholder: 'Phone',
                      type: 'text',
                      required: true
                    },
                    {
                      name: 'KIT',
                      placeholder: 'Kits',
                      type: 'text',
                      required: true
                    },
                  ]
                  }
                  messages={
                    {
                      sending: "Sending ...",
                      success: `Thank you for purchasing ${this.state.purchaseKit} :) `,
                      error: "Please Double Check all the fields",
                      empty: "You must provide an valid e-mail.",
                      duplicate: "Too many purchase attempts for this email address",
                      button: 'Submit'
                    }
                  }
                />
              </Example>
            </div>
          </div>
        </div>
        <Scroll>
          <div className='container'>
            <div className='grow' >
              {this.state.endcheck && this.state.searchquizswitch ? this.renderKit2(this.state.firstAidKits) : console.log(this.state.endcheck, this.state.searchquizswitch, ' endcheck - pic only')}
            </div>
            {!this.state.endcheck && this.state.searchquizswitch ? <KitDisplay showLightBox={this.showLightBox} show={this.showModal} filtered={this.state.firstAidKits} questionId={this.state.questionId} endcheck={this.state.endcheck} /> : console.log(!this.state.endcheck, 'endcheck - info')}
            {!this.state.searchquizswitch ? <KitDisplay showLightBox={this.showLightBox} show={this.showModal} filtered={this.state.searcharray} questionId={this.state.questionId} endcheck={this.state.endcheck} /> : console.log(this.state.searchquizswitch, 'searchquizswitch')}
          </div>
        </Scroll>
        <div >
          <footer className="fc pv4 ph3 ph5-m ph6-l mid-gray">
            <small className="f6 db tc">© 2018 <b className="ttu">Pacific First Aid Inc</b>., All Rights Reserved</small>
            <div class="tc mt3">
              <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
              <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
              <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
            <div className="fr db dtc-ns black-70 tc tr-ns v-mid">
              <a href="https://www.facebook.com/" className="fr link dim dib mr3 black-70" title="Impossible Labs on Facebook">
                <svg className="db w2 h2" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
                  <title >facebook icon</title>
                  <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
                  ></path>
                </svg>
              </a>
              <a href="https://twitter.com/" className="link dim dib mr3 black-70">
                <svg className="db w2 h2" data-icon="twitter" viewBox="0 0 32 32"
                  fill="currentColor" >
                  <title >twitter icon</title>
                  <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
                  ></path>
                </svg>
              </a>
              <a href="https://medium.com/" className="link dim dib mr3 black-70" title="Impossible Labs on Medium">
                <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 290 248.6"
                  fill="currentColor" >
                  <g >
                    <path fill="currentColor" className="st0" d="M287.8,46.3L196,0.3c-0.4-0.2-0.9-0.3-1.3-0.3c0,0-0.1,0-0.1,0c-1.1,0-2.2,0.6-2.8,1.5l-56.6,92l63.2,102.7 l90.4-146.9C289.4,48.3,289,46.8,287.8,46.3z"
                    ></path>
                    <polygon fill="currentColor" points="105.2,61.2 105.2,160.3 193.3,204.4   "
                    ></polygon>
                    <path fill="currentColor" d="M201,208.2l80.9,40.5c4.4,2.2,8,0,8-5v-180L201,208.2z"
                    ></path>
                    <path fill="currentColor" d="M95.5,46.7L10.7,4.3L5.4,1.7C4.6,1.3,3.8,1.1,3.2,1.1c-0.9,0-1.7,0.4-2.3,1.1C0.3,2.8,0,3.8,0,5v193.4 c0,3.3,2.4,7.2,5.4,8.7l83.3,41.6c1.2,0.6,2.3,0.9,3.3,0.9c2.8,0,4.8-2.2,4.8-5.8V48.7C96.7,47.8,96.2,47.1,95.5,46.7z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/" className="link dim dib black-70">
                <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                  <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                    y1="0" x2="23.9995" y2="48.0005" >
                    <stop offset="0" ></stop>
                    <stop offset="1" ></stop>
                  </linearGradient>
                  <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                  ></path>
                  <g >
                    <g >
                      <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );  //after set next question, all the updated states will be imported in   quiz tag
  }
}
export default App;
