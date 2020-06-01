import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js';
let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 0 }
    }
    render() {
        const isQuizEnd = false;
        if (this.state.quiz_position -1 == quizData.quiz_question.length ){
            isQuizEnd = true
        };
        
        return (<div>
            { isQuizEnd &&  <QuizEnd /> }
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position]} />
        </div>)
    }
}

export default Quiz
