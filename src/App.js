import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Sites from './components/Sites';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={(props)=>(
            <div className="body">
                <script src="/JS/index.js"></script>
                <link rel="stylesheet" type="text/css" href="/CSS/index layout.css"></link>
                <style id="theNew"></style>
                <h1 className="header">Connor Knight</h1>
                
                <div className="MiiImg">
                    <img src="/resources/crest.gif" alt="NotMyCrest"></img>
                </div>
                <div className="bio">
                    <h2>Bio</h2>
                    <p>My name is Connor Knight. I just graduated Liberty High school but still attend West-MEC. I have taken every computer className that my school offers, including AP computer science. I like to program and make things. I recently created a digital DVR and media player to record and playback videos. I have participated on the cross country and long distance track team every year of high shool excluding the last year as WEST-MEC conflicted with its schedule. I have aided many of my now Eagle Scout friends with their Eagle Scout project. I have a small kiln and have melted aluminum into a bars. I love computer programming with a passion and wish to continue learning as much as possible. I do not work outside of school yet.</p>
                </div>
                <div className="MiiImg2">
                    <img src="/resources/MiiNow.jpg" alt="NotMyCrest"></img>
                </div>
            </div>
        )}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="/Sites" component={Sites}/>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;
