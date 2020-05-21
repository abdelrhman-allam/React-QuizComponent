import React, { Component } from 'react'
let quiz_data = require('./quiz_data.json')
console.log(quiz_data)
class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position: 1 }
    }
    render() {
        return (<div>
    <div class='QuizQuestion'>{quiz_data.quiz_questions[0].instruction_text}</div>
        </div>)
    }
}

export default Quiz
