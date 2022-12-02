import "./Block.scss";
import img1 from "../../assets/images/image 13.png";
import img2 from "../../assets/images/image 15.png";
import img3 from "../../assets/images/image 17.png";
import img4 from "../../assets/images/image 18.png";
import chat from "../../assets/images/chat_bubble.png";
import heart from "../../assets/images/heart.png";
import video from "../../assets/images/video.png";
import play from "../../assets/images/Play Button.png";

export default function Block() {
  return (
    <section className="block">
      <div className="block__boxes">
        <div className="block__box">
          <div className="block__upper">
            <div className="block__img-holder">
              <img src={img1}></img>
            </div>
            <div className="block__text-holder">
              <h3 className="block__head">Lost in Random</h3>
              <p className="block__description">
                Pretty solid game with an interesting combat system! Fairly
                simple trophy list, but way too many easy to miss ones with no
                way to go back. Would recommend though!
              </p>
            </div>
          </div>
          <div className="block__lower">
            <div className="block__comm-like">
              <p className="block__comm">
                <img src={chat} className="block__icon1"></img>127 Comments
              </p>
              <p className="block__heart">
                <img src={heart} className="block__icon1"></img>
                83
              </p>
            </div>
            <div className="block__game-text">Adventure47</div>
          </div>
        </div>
        <div className="block__box">
          <div className="block__upper">
            <div className="block__img-holder">
              <img src={img2}></img>
            </div>
            <div className="block__text-holder">
              <h3 className="block__head">WILD HEARTS</h3>
              <p className="block__description">
                Getting a group together for wild hearts for PlayStation 5 only
                and I have a group chat as well. The rule are be respectful, be
                nice, no aggressive or toxic of any kind. Other then that have
                fun and let hunt.
              </p>
            </div>
          </div>
          <div className="block__lower">
            <div className="block__comm-like">
              <p className="block__comm">
                <img src={chat} className="block__icon1"></img>22 Comments
              </p>
              <p className="block__heart">
                <img src={heart} className="block__icon1"></img>17
              </p>
            </div>
            <div className="block__game-text">Start_the_Hunt</div>
          </div>
        </div>
      </div>
      <div className="block__boxes">
        <div className="block__box">
          <div className="block__upper">
            <div className="block__img-holder">
              <img src={img3}></img>
            </div>
            <div className="block__text-holder">
              <h3 className="block__head">Sims 4</h3>
              <p className="block__description">
                Why has this knome gone mad? Wrong answers only... I’ll start.
                He’s sick of the misgnomers and he’s going to let everyone know.
              </p>
            </div>
          </div>
          <div className="block__lower">
            <div className="block__comm-like">
              <p className="block__comm">
                <img src={chat} className="block__icon1"></img>18 Comments
              </p>
              <p className="block__heart">
                <img src={heart} className="block__icon1"></img>13
              </p>
            </div>
            <div className="block__game-text">Sims4Lyfe</div>
          </div>
        </div>
        <div className="block__box">
          <div className="block__upper">
            <div className="block__img-holder">
              <img src={img4}></img>
            </div>
            <div className="block__text-holder">
              <h3 className="block__head">Dead Space</h3>
              <p className="block__description">
                Would be a lot harder for space zombies to kill everyone if the
                crew actually had appropriate gear and fought back.
              </p>
            </div>
          </div>
          <div className="block__lower">
            <div className="block__comm-like">
              <p className="block__comm">
                <img src={chat} className="block__icon1"></img>22 Comments
              </p>
              <p className="block__heart">
                <img src={heart} className="block__icon1"></img>17
              </p>
            </div>
            <div className="block__game-text">Scared_Straight3</div>
          </div>
        </div>
      </div>
      <div className="block__wide-block">
        <div className="block__upper-video">
          <img src={video} className="block__video-img"></img>
          <img src={play} className="block__play-btn"></img>
        </div>
        <div className="block__lower">
          <div className="block__comm-like">
            <p className="block__comm1">
              <img src={chat} className="block__icon1"></img>21 Comments
            </p>
            <p className="block__heart1">
              <img src={heart} className="block__icon1"></img>99
            </p>
          </div>
          <div className="block__game-text">CityHunterxX</div>
        </div>
      </div>
    </section>
  );
}
