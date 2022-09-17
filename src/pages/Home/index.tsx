import WhatsButton from "../../components/whatsButton";
import "./styles.css";

const Home = () => {
    return(
        <div className="home-container">
            <div className="home-content-container">
                <h3>Parceiros do seu crescimento</h3>
                <p>A ajuda que vc precisa</p>
                <button className="btn-home">
                    <p> Saiba como</p>
                </button>
            </div>
            <WhatsButton/>
        </div>
    )
}

export default Home