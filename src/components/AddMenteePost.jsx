import React, { Component } from 'react';
import MenteePostService from '../services/MenteePostService';

class AddMenteePost extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           postID: '',
           userName: '',
           subject:'',
           language:'',
           typeOfSession: '',
           daysOfAvailability: '',
           offerAmount: '',
           briefDescription: '',
        }
      
        this.postIDHandler = this.postIDHandler.bind(this);
        this.userNameHandler = this.userNameHandler.bind(this);
        this.subjectHandler = this.subjectHandler.bind(this);
        this.languageHandler = this.languageHandler.bind(this);
        this.typeOfSessionHandler = this.typeOfSessionHandler.bind(this);
        this.daysOfAvailabilityHandler = this.daysOfAvailabilityHandler.bind(this);
        this.offerAmountHandler = this.offerAmountHandler.bind(this);
        this.briefDescriptionHandler = this.briefDescriptionHandler.bind(this);

    }//constructor
    
    postIDHandler=(event) => {
        this.setState({
            postID: event.target.value
        })
    }

    userNameHandler=(event) => {
        this.setState({
            userName: event.target.value});
    }

    subjectHandler=(event) => {
        this.setState({
           subject: event.target.value});
    }
     
    languageHandler=(event) => {
        this.setState({
             language: event.target.value});
    }

    typeOfSessionHandler=(event) => {
        this.setState({
             typeOfSession: event.target.value});
    }

    daysOfAvailabilityHandler=(event) => {
        this.setState({
             daysOfAvailability: event.target.value});
    }

    offerAmountHandler=(event) => {
        this.setState({
             offerAmount: event.target.value});
    }

    briefDescriptionHandler=(event) => {
        this.setState({
             briefDescription: event.target.value});
    }

    saveMenteePost = (e) => {
        e.preventDefault();
        let MenteePost={
            postID: this.state.postID,
            userName: this.state.userName,
            subject: this.state.subject,
            language: this.state.language,
            typeOfSession: this.state.typeOfSession,
            daysOfAvailability: this.state.daysOfAvailability,
            offerAmount: this.state.offerAmount,
            briefDescription: this.state.briefDescription,
        };
        console.log(MenteePost);
        MenteePostService.createMenteePost(MenteePost).then(res =>{
                this.props.history.push('/menteeposts');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/menteeposts');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Add Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label> Post Id Number: </label>
                                      <input placeholder="Post ID" name="postid" className="form-control"
                                         value={this.state.postID} onChange={this.postIDHandler} />
                                   </div>   
                                  <div className="form-group">
                                      <label> Mentee UserName: </label>
                                      <input placeholder="Enter Username" name="username" className="form-control"
                                         value={this.state.userName} onChange={this.userNameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Subject: </label>
                                      <input placeholder="Select the subject of the session" name="subject" className="form-control"
                                         value={this.state.subject} onChange={this.subjectHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Language: </label>
                                      <input placeholder="Select a language for this session" name="language" className="form-control"
                                         value={this.state.language} onChange={this.languageHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Type of Session: </label>
                                      <input placeholder="Select a session type" name="typeofsession" className="form-control"
                                         value={this.state.typeOfSession} onChange={this.typeOfSessionHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Day(s) of availability: </label>
                                      <input placeholder="Select the days on which you will be available for this session" name="availability" className="form-control"
                                         value={this.state.daysOfAvailability} onChange={this.daysOfAvailabilityHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Offer Amount: </label>
                                      <input placeholder="Type the amount you wish to offer for this session" name="offer" className="form-control"
                                         value={this.state.offerAmount} onChange={this.offerAmountHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Brief Description: </label>
                                      <input placeholder="Please type a brief description of the problem that you need help with solving" name="description" className="form-control"
                                         value={this.state.briefDescription} onChange={this.briefDescriptionHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveMenteePost}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default AddMenteePost;