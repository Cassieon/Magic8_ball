import React from 'react';

class Eball extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                fortune: '',
            };
    }
    render() {
        return (
            <div>
                <p>{this.state.fortune}</p>
                <button onClick={this._fetchFortune}>
                    Ask the Magic 8ball
                </button>
            </div>
        );
    }
    _fetchFortune = () => {
        let params = encodeURIComponent("Is today going to be a good day?");
        const url = 'https://8ball.delegator.com/magic/JSON/' + params;
        fetch(url)
            .then(response => response.json())
            .then(fortuneJson => {
                this.setState({
                    fortune: fortuneJson.value,
                }, () => {
                    console.log('Input recieved');
                });
            });
    }
}

export default Eball;