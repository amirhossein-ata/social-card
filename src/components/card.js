import React from 'react';
import PostText from '../components/postText';
import Likes from '../components/like';
import Comment from '../components/comment';
import Retweet from '../components/retweet';
class SocialCard extends React.Component {
   state = {
        likes : 10 ,
        retweets : 3 ,
        comments : 5 ,
    }

    componentDidMount(){
        const likes = parseInt(localStorage.getItem('likes'))
        const comments = parseInt(localStorage.getItem('comments'))
        const retweets = parseInt(localStorage.getItem('retweets'))

        if(!isNaN(likes)){
            this.setState(()=>({likes : likes}))
        }

        if(!isNaN(comments)){
            this.setState(()=>({comments : comments}))
        }

        if(!isNaN(retweets)){
            this.setState(()=>({retweets : retweets}))
        }
    }
    componentDidUpdate(prevState){
        if (prevState.likes !== this.state.likes){
            localStorage.setItem('likes',this.state.likes)
        }
        if (prevState.comments !== this.state.comments){
            localStorage.setItem('comments',this.state.comments)
        }
        if (prevState.retweets !== this.state.retweets){
            localStorage.setItem('retweets',this.state.retweets)
        }
    }


    addLike = () => {
        this.setState((prevState) => {
            return{
                likes : prevState.likes + 1   
            };
        });

    }
    addComment = () => {
        this.setState((prevState) => {
            return{
                comments : prevState.comments + 1   
            };
        });

    }    

    addRetweet = () => {
        this.setState((prevState) => {
            return{
                retweets : prevState.retweets + 1   
            };
        });

    }    
    render(){
        return(
            <div>
                <PostText text="this is post text" />
                <div>
                    <Likes 
                        likes={this.state.likes}
                        addLike = {this.addLike}    
                    />
                    <Comment
                        comments = {this.state.comments}
                        addComment = {this.addComment} 
                    />
                    <Retweet
                        retweets = {this.state.retweets}
                        addRetweet ={this.addRetweet}
                    />
                </div>
            </div>
        )
    }
}

export default SocialCard; 