import React from 'react';

class Eball extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                joke: props.initialText || ``
            };
            // this.handleChange = this.handleChange.bind(this);
            // this.handleChange = this.handleSubmit.bind(this);
        }

        _handleChange(event) {
            this.setState({
                joke: event.target.value
            });
        }

        _handleSubmit = (event) => {
            event.preventDefault();
            // // _fetchJoke = () => {
            //     this.setState({
            //         // isLoading: true,
            //     }, () => {
    
            //         let params = encodeURIComponent(`${input}`);
            //         let uri = "https://8ball.delegator.com/magic/JSON/" + params;
            //         fetch(uri)
            //           .then(response => response.json())
            //           .then(json => {
            //             console.log(json);
            //           });
                        
            //     })
            // }
        }
        render() {
            // const {joke} = this.state;
            return (
                <form onSubmit={this._handleSubmit}>
                    <input className="input"
                        type="text"
                        placeholder="Ask away"
                        // defaultValue={joke}
                        onChange={this.handleChange}
                        />
                
                
                    <p>{this.state.joke} hello</p>
                    <button 
                    type="submit" 
                    onClick={this._fetchJoke}>
                        Jokey Jokes
                    </button>
                
                </form>
            );
        }
        _fetchJoke = () => {
            // this.setState({
                // isLoading: true,
            // }, () => {

                let params = encodeURIComponent(`${'input'}`);
                let uri = "https://8ball.delegator.com/magic/JSON/" + params;
                fetch(uri)
                  .then(response => response.json())
                  .then(json => {
                      this.setState({text: json.magic.answer})
                    console.log(json);
                  });
                    
            
        }
    }


export default Eball;