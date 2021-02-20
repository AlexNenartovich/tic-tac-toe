import React from 'react';

class Square extends React.Component {

    render() {
        return (
            <button style={{fontSize: 20, fontWeight: "bold", height: 50, width: 50}} onClick={() => this.props.onClick(this.props.index)}>
                {this.props.number}&nbsp;
            </button>
        )
    }
}

export default Square;
