
import React from 'react';
import Star from './Star';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.setState({
            rating: index
        });
    }

    render() {
        return (
            <div style={{
                textAlign: 'center',
                marginTop: '100px',
                fontFamily: 'Arial'
            }}>

                <h1>Donne ton avis</h1>

                {[1, 2, 3, 4, 5].map((index) => (
                    <Star
                        key={index}
                        on={index <= this.state.rating}
                        handleClick={() => this.handleClick(index)}
                    />
                ))}

            </div>
        );
    }
}

export default App;
