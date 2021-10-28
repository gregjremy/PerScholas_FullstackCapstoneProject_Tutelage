import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListMenteePosts from './components/ListMenteePosts';
import AddMenteePost from './components/AddMenteePost';
import UpdateMenteePost from './components/UpdateMenteePost';
import DeleteMenteePost from './components/DeleteMenteePost';
import ViewMenteePost from './components/ViewMenteePost';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={ListMenteePosts}></Route>
                  <Route path="/menteeposts" component={ListMenteePosts}></Route>
                  <Route path="/add-menteepost" component={AddMenteePost}></Route>
                  <Route path="/update-menteepost/:postID" component={UpdateMenteePost}></Route> 
                  <Route path="/delete-menteepost/:postID" component={DeleteMenteePost}></Route> 
                  <Route path="/view-menteepost/:postID" component={ViewMenteePost}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
