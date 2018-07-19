import React from 'react';

class Retweet extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.addRetweet}>retweets: {this.props.retweets}</button> 
            </div>
        );
    }
}

export default Retweet ;