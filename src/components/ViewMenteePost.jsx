import React, { Component } from 'react';
import MenteePostService from '../services/MenteePostService';

class ViewMenteePost extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 postID: this.props.match.params.postID,
                 menteepost:[]
             }
    }

     componentDidMount()
     {
        MenteePostService.getMenteePostByPostID(this.state.postID).then((res) =>{
            // console.log(res.data)
            this.setState({menteepost:res.data})

         });
     }

     cancel(){
        this.props.history.push('/menteeposts');
    }
    
    render() {
        console.log(this.state.menteepost)         
            return(
             <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Post Details</h3>
                            {this.state.menteepost.length ?
                            (<div className="card-body">

                              <form>  
                                   <div className="form-group">
                                      <label> Post Id Number: </label>
                                      <input placeholder={this.state.menteepost.postID} readOnly={true} name="postid" className="form-control"
                                         value={this.state.postID}  />
                                   </div>   
                                  <div className="form-group">
                                    <label>Username: </label>
                                    <input placeholder={this.state.menteepost.userName} readOnly={true} name="username" className="form-control" 
                                    value = {this.state.menteepost[0].userName} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Subject: </label>
                                      <input placeholder={this.state.menteepost.subject} readOnly={true} name="subject" className="form-control" 
                                      value={this.state.menteepost[0].subject} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Language: </label>
                                      <input placeholder={this.state.menteepost.language} readOnly={true} name="language" className="form-control" 
                                       value={this.state.menteepost[0].language} />
                                   </div>
                                   <div>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Back </button>                       
                                   </div>
                                   </form>
                          </div>):null
                        }
                      </div>
                   </div>
               </div>
            </div>
        )};
    }

export default ViewMenteePost;