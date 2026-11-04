
import React from 'react';

class Star extends React.Component {

    render() {
        return (
            <img
                src={
                    this.props.on
                        ? process.env.PUBLIC_URL + '/star_On.png'
                        : process.env.PUBLIC_URL + '/star_Off.png'
                }
                onClick={this.props.handleClick}
                style={{
                    width: '45px',
                    height: '45px',
                    cursor: 'pointer',
                    margin: '5px'
                }}
                alt="star"
            />
        );
    }
}

export default Star;
