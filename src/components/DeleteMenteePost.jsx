import React, { Component } from 'react';
import MenteePostService from '../services/MenteePostService';

class DeleteMenteePost extends Component {
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
        
        this.deleteMenteePost = this.deleteMenteePost.bind(this);

    }//constructor

     componentDidMount()
     {
        MenteePostService.getMenteePostByPostID(this.state.postID).then((res) =>{
          let menteepost = res.data[0];
          console.log(res);
          this.setState({
              postID:menteepost.postID,
              subject:menteepost.subject,
              language:menteepost.language,
                });
        });
           
     }
     
    

    
  deleteMenteePost = (e) => {
        e.preventDefault();
        let menteepost={
            // userName: this.state.userName,
            // subject: this.state.subject,
            // language: this.state.language,
            // typeOfSession: this.state.typeOfSession,
            // daysOfAvailability: this.state.daysOfAvailability,
            // offerAmount: this.state.offerAmount,
            // briefDescription: this.state.briefDescription,
        };

        // console.log(menteepost);
        MenteePostService.deleteMenteePost(this.state.postID).then(res => {
            this.props.history.push('/menteeposts');
        })
      
        
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
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Student ID: </label>
                                      <input placeholder="Id" readOnly={true} name="id" className="form-control"
                                         value={this.state.postID} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Subject: </label>
                                      <input placeholder="Name" readOnly= {true} name="name" className="form-control"
                                         value={this.state.subject} onChange={this.subjectHandler} />
                                    </div>   
                                   <div className="form-group">
                                      <label>Language: </label>
                                      <input placeholder="Grade" readOnly={true} name="grade" className="form-control"
                                         value={this.state.language} onChange={this.languageHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteMenteePost}> Delete </button>
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

export default DeleteMenteePost;