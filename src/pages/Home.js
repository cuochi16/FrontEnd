import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import '../css/Home.css';


const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Sidebar />
            <div class="Container">
                <div class="Heading">
                    <h3>BTEC</h3>
                    <h3>Discover</h3>
                </div>
                <div class="Match">
                    <div class="Match-Image">
                        <img src="/assets/Images/Match/test.png" alt="Match" />
                    </div> 
                </div>
                <div class="Controll">
                    <button id="nope"><img src="/assets/SVG/Undo.svg" alt="Love" /></button>
                    <button id="love"><img src="/assets/SVG/Love100.svg" alt="Love" /></button>
                    <button id="love"><img src="/assets/SVG/Star.svg" alt="Love" /></button>
                </div>
            </div>
        </div>
    );
}
export default Home;
