import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import '../components/Hammer.js';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Sidebar />
            <div class="Container">
                <div class="Match-status">
                    <h2 class="remove">Nope</h2>
                    <h2 class="heart">Like</h2>
                </div>
                <div class="Heading">
                    <h3>Discover</h3>
                    <p>BTEC</p>
                </div>
                <div class="Matches">
                    {/* 1 */}
                    <div class="Match">
                        <div class="Match-Image">
                            <img src="/assets/Images/Match/test.png" alt="Match" />
                            <div class="Blur"></div>
                        </div> 
                        <div class="Match-Info">
                            <h3>Cuốc Hi, 20</h3>
                            <h4>Software Engineer</h4>
                        </div>
                    </div>
                </div>
                <div class="Control">
                    <button id="undo"><img src="/assets/Icon/Dislike.png"/></button>
                    <button id="love"><img src="/assets/Icon/Like.png" /></button>
                    <button id="star"><img src="/assets/Icon/Star.png"/></button>
                </div>
            </div>
        </div>
    );
}
export default Home;
