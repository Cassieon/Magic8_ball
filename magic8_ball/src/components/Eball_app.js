import React from 'react';
import './Eball_app.css'

class Eball extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                answer: props.initialText || ``
            };
            // this.handleChange = this.handleChange.bind(this);
            // this.handleChange = this.handleSubmit.bind(this);
        }

        _handleChange(event) {
            this.setState({
                answer: event.target.value
            });
        }

        _handleSubmit = (event) => {
            event.preventDefault(); // so page does not reload 
        }

        render() {
            return (
                <div className="main">
                    <form onSubmit={this._handleSubmit}>
                        <input className="input"
                            type="text"
                            placeholder="Enter text"
                            onChange={this.handleChange}
                            />
                    
                    
                        <div className="large-circle">
                            <div className="small-circle">
                                <div className="triangle">
                                    <span>{this.state.answer}</span>
                                </div>
                            </div>
                        </div>
                        <button 
                        type="submit" 
                        onClick={this._fetchAnswer}>
                            Ask Magic 8ball
                        </button>
                
                </form>
                </div>
            );
        }
        _fetchAnswer = () => {
                let params = encodeURIComponent(`${'input'}`);
                let uri = "https://8ball.delegator.com/magic/JSON/" + params;
                fetch(uri)
                  .then(response => response.json()) // promise 
                  .then(json => {
                      this.setState({answer: json.magic.answer}) // calling the exact info we need from api 
                    console.log(json);
                  });
                    
            
        }
    }


export default Eball;