import React, { Component } from 'react';
import MenteePostService from '../services/MenteePostService';

class UpdateMenteePost extends Component {
    constructor(props)
    {
        super(props)
             this.state={
                postID: this.props.match.params.postID,
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
        this.updateMenteePost = this.updateMenteePost.bind(this);

    }//constructor

     componentDidMount()
     {
         MenteePostService.getMenteePostByPostID(this.state.postID).then((res) =>{
             let menteepost = res.data[0];
               console.log(menteepost)
             this.setState({
                postID: menteepost.postID,
                userName: menteepost.userName,
                subject: menteepost.subject,
                language: menteepost.language,
                typeOfSession: menteepost.typeOfSession,
                daysOfAvailability: menteepost.daysOfAvailability,
                offerAmount: menteepost.offerAmount,
                briefDescription: menteepost.briefDescription
            });
        });
     }
    
     postIDHandler=(event) => {this.setState({postID: event.target.value})} 

    userNameHandler=(event) => {
        this.setState({userName: event.target.value});}

    subjectHandler=(event) => {this.setState({subject: event.target.value});}
     
    languageHandler=(event) => {this.setState({language: event.target.value});}

    typeOfSessionHandler=(event) => {this.setState({typeOfSession: event.target.value});}

    daysOfAvailabilityHandler=(event) => {this.setState({daysOfAvailability: event.target.value});
    }

    offerAmountHandler=(event) => {this.setState({offerAmount: event.target.value});}

    briefDescriptionHandler=(event) => {this.setState({briefDescription: event.target.value});
    }

    updateMenteePost = (e) => {
        e.preventDefault();
        let menteepost={
            postID: this.state.postID,
            userName: this.state.userName,
            subject: this.state.subject,
            language: this.state.language,
            typeOfSession: this.state.typeOfSession,
            daysOfAvailability: this.state.daysOfAvailability,
            offerAmount: this.state.offerAmount,
            briefDescription: this.state.briefDescription,
        };
        console.log(this.state)
        MenteePostService.updateMenteePost(menteepost,this.state.postID).then((res) => {
            this.props.history.push('/menteeposts');
        });
    }

    cancel(){
        this.props.history.push('/menteeposts');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Student</h3>
                          <div className="card-body">
                              <form>  
                                   <div className="form-group">
                                      <label> Post Id Number: </label>
                                      <input placeholder={this.state.postID} readOnly={true} name="postid" className="form-control"
                                         value={this.state.postID}  />
                                   </div>   
                                  <div className="form-group">
                                      <label>Mentee Username: </label>
                                      <input placeholder={this.state.userName} readOnly={true} name="id" className="form-control"
                                         value={this.state.userName} onChange={this.userNameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Session Subject: </label>
                                      <input placeholder="Subject" name="name" className="form-control"
                                         value={this.state.subject} onChange={this.subjectHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Session Language:</label>
                                      <input placeholder="Language" name="grade" className="form-control"
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
                                    <button className="btn btn-success" onClick={this.updateMenteePost}> Update </button>
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

export default UpdateMenteePost;