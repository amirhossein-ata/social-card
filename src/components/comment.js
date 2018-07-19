import React from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.addComment}>comments: {this.props.comments}</button> 
            </div>
        );
    }
}

export default Comment ;