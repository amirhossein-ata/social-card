import React from 'react';

class Likes extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.addLike}>likes: {this.props.likes}</button> 
            </div>
        );
    }
}

export default Likes ;