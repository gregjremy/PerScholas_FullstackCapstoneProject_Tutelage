import React, { Component } from 'react';
import MenteePostService from '../services/MenteePostService';

class ListMenteePosts extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                menteeposts:[] 
          }
          this.addMenteePost = this.addMenteePost.bind(this);
          this.editMenteePost = this.editMenteePost.bind(this);
          this.deleteMenteePost = this.deleteMenteePost.bind(this);
          this.viewMenteePost = this.viewMenteePost.bind(this);
      }
    
     componentDidMount() {
        MenteePostService.getMenteePosts().then((res) => {
            // console.log(res.data)
             this.setState({menteeposts:res.data});
         });
     }
     
     addMenteePost()
     {
        
        this.props.history.push('/add-menteepost');
     }

     editMenteePost(postID)
     {
        this.props.history.push(`/update-menteepost/${postID}`);
        
     }

     deleteMenteePost(postID)
     {
        this.props.history.push(`/delete-menteepost/${postID}`);
        // StudentService.deleteStudent(id).then(res => {
        //     this.setState({
        //          student: this.state.students.filter(student => student.id !== id)
        //     })
        // })
        
     }

     viewMenteePost(postID)
     {
        this.props.history.push(`/view-menteepost/${postID}`);
        
     }

    render() {
        // console.log(this.state.menteeposts)
        return (
            <div>
                <h2 className="text-center">Mentee Posts List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addMenteePost}> Add Mentee Post</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Post Id Number</th>
                                <th>Mentee Username</th>
                                <th>Subject</th>
                                <th>Language</th>
                                <th>Session Type</th>
                                <th>Day(s) Available</th>
                                <th>Amount Offered</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.menteeposts.map(
                                    MenteePost =>
                                    <tr key={MenteePost.postID}>
                                         <td>{MenteePost.postID}</td>
                                         <td>{MenteePost.userName}</td>
                                         <td>{MenteePost.subject}</td>
                                         <td>{MenteePost.language}</td>
                                         <td>{MenteePost.typeOfSession}</td>
                                         <td>{MenteePost.daysOfAvailability}</td>
                                         <td>{MenteePost.offerAmount}</td>
                                         <td>{MenteePost.briefDescription}</td>
                                         <td>
                                            <button onClick={() =>this.editMenteePost(MenteePost.postID)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteMenteePost(MenteePost.postID)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewMenteePost(MenteePost.postID)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                    )
                                }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListMenteePosts;