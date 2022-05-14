import React from 'react';

class Eball extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                userInput: '',
                answer: ''
            }
            this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    render() {
        return (
            <div className="question_Input">
                <input 
                type="text"
                value={this.state.answer}
                onChange={this.handleChange} //triggered when text is entered
                placeholder="Enter text"
                />
                <button onClick={this._fetchAnswer}>
                    Ask the Magic 8ball
                </button>
            </div>
        );
    }
    _fetchAnswer = () => {
        const url = 'https://8ball.delegator.com/magic/JSON/';
        fetch(url)
            .then(response => response.json())
            .then(answerJson => {
                this.setState({
                    answer: answerJson.value,
                }, () => {
                    console.log('Input recieved');
                });
            });
    }
}

export default Eball;