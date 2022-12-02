import "./Hero.scss";
import search from "../../assets/images/magnifyingglass.png";
import img1 from "../../assets/images/image 5.png";
import img2 from "../../assets/images/image 6.png";
import img3 from "../../assets/images/image 7.png";
export default function Hero() {
  return (
    <section className="hero">
      <h2 className="hero__title">
        Community<sup className="hero__text-sup">Beta</sup>
      </h2>
      <div className="hero__background-effect">
        <h1 className="hero__tag-line">Welcome to EA Community HQ</h1>
        <h3 className="hero__hook">
          Official content and Community for all EA Games.
        </h3>
        <button className="hero__button">Join Now</button>
        <h3 className="hero__learn">Learn more about EA Community HQ.</h3>
        <div className="hero__search">
          <img className="hero__search-logo" src={search} alt="searchbar"></img>
          <p className="hero__search-text">Search or ask a question</p>
        </div>
        <div className="hero__trending">
          <h3 className="hero__trending-title">Trending today</h3>
          <div className="hero__image-roll">
            <div className="hero__img-text">
              <img className="hero__img" src={img1} alt="NFL game"></img>
              <p className="hero__text">Madden NFL 23</p>
            </div>
            <div className="hero__img-text">
              <img className="hero__img" src={img2} alt="battlefield"></img>
              <p className="hero__text">Battlefield 2042</p>
            </div>
            <div className="hero__img-text">
              <img className="hero__img" src={img3}></img>
              <p className="hero__text">FIFA 23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
