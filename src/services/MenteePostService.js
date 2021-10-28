import axios from 'axios';

const STUDENT_API_BASE_URL= "http://localhost:8080/api";
class MenteePostService{
    // view all posts
    getMenteePosts(){
       return axios.get(STUDENT_API_BASE_URL + "/allmenteeposts",);
    }

    // create new post
    createMenteePost(menteepost){
        console.log("initializing post request")
        return axios.post(STUDENT_API_BASE_URL + "/addmenteepost",menteepost);
    }

    // view a specific post
    getMenteePostByPostID(postID){
        return axios.get(STUDENT_API_BASE_URL + "/menteepost/"+postID);
    }

    // modify a post
    updateMenteePost(menteepost,postID){
        return axios.put(STUDENT_API_BASE_URL + "/menteepost/"+postID,menteepost);
    }

    // delete a post
    deleteMenteePost(postID){
        return axios.delete(STUDENT_API_BASE_URL+"/menteepost/"+postID);
    }

}

export default new MenteePostService();