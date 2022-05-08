import logo from "./logo.svg";
import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { useEffect } from "react";
import Amplitude from "amplitudejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesImage from "./assets/images/serviceBackground.svg";
import RecordsLogo from "./assets/images/recordsLogo.svg";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import {} from "@fortawesome/fontawesome-svg-core";
import AboutUs from "./components/aboutUs/AboutUs";
import Header from "./components/header/Header";
const whatsappColor = "#18990e";
const viberColor = "#59267c";
const recordsColor = "#00e2ff";
function App() {
  useEffect(() => {
    Amplitude.init({
      songs: [
        {
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "We",
          url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/27/17/0e/27170e72-bffe-82b1-20aa-266e7bf77d9a/mzaf_6343571178304791484.plus.aac.p.m4a",
          cover_art_url: "assets/img/album-art/we-are-to-answer.jpg",
        },
        {
          name: "Risin' High (feat Raashan Ahmad)",
          artist: "Ancient Astronauts",
          album: "We Are to Answer",
          url: "assets/audio/0000029.mp3",
          cover_art_url: "assets/img/album-art/we-are-to-answer.jpg",
        },
        {
          name: "The Gun",
          artist: "Lorn",
          album: "Ask The Dust",
          url: "assets/audio/0000104.mp3",
          cover_art_url: "assets/img/album-art/ask-the-dust.jpg",
        },
        {
          name: "Anvil",
          artist: "Lorn",
          album: "Anvil",
          url: "assets/audio/0000154.mp3",
          cover_art_url: "assets/img/album-art/anvil.jpg",
        },
        {
          name: "I Came Running",
          artist: "Ancient Astronauts",
          album: "We Are to Answer",
          url: "assets/audio/0000215.mp3",
          cover_art_url: "assets/img/album-art/we-are-to-answer.jpg",
        },
      ],
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <div id="main-section">
        <section
          class="section  section-home text-center"
          style={{
            backgroundImage: 'url("assets/img/background/mic-dark.jpg")',
            backgroundPosition: "auto 100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <div className="bottom-container">
            <div className="container" style={{position:"relative"}}>
              {/* <h3 style={{fontFamily:"Nexa Regular"}}>Contact us</h3> */}
              <div className="contact-icons">
                <a
                  href="tel:+9779841255921"
                  className="phone-icon"
                  style={{ background: "#128c7e" }}
                >
                  <FontAwesomeIcon icon={solid("phone")} color="white" />
                </a>

                <a
                  href="https://wa.me/9779861983555"
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: whatsappColor }}
                >
                  <FontAwesomeIcon icon={brands("whatsapp")} color="white" />
                </a>
                <a
                  href="viber://chat?number=%2B+9779803666989"
                  className="viber-icon"
                  style={{ background: viberColor }}
                >
                  <FontAwesomeIcon icon={brands("viber")} color="white" />
                </a>
              </div>
            </div>
          </div>
          <MessengerCustomerChat
            pageId="113029818047102"
            appId="878260336223931"
            minimized={false}
            // htmlRef="<REF_STRING>"
          />
        </section>
        <section
          class="section text-center"
          style={{ background: "#1c2433", color: "white" }}
        >
          <div class="row" id="blue-playlist-container">
            <div class="col-md-12" id="amplitude-player">
              <div class="row">
                <div class="col-md-6" id="amplitude-left">
                  <img data-amplitude-song-info="cover_art_url" />
                  <div id="player-left-bottom">
                    <div id="time-container">
                      <span class="current-time">
                        <span class="amplitude-current-minutes"></span>:
                        <span class="amplitude-current-seconds"></span>
                      </span>
                      <div id="progress-container">
                        <input type="range" class="amplitude-song-slider" />
                        <progress
                          id="song-played-progress"
                          class="amplitude-song-played-progress"
                        ></progress>
                        <progress
                          id="song-buffered-progress"
                          class="amplitude-buffered-progress"
                          value="0"
                        ></progress>
                      </div>
                      <span class="duration">
                        <span class="amplitude-duration-minutes"></span>:
                        <span class="amplitude-duration-seconds"></span>
                      </span>
                    </div>

                    <div id="control-container">
                      <div id="repeat-container">
                        <div class="amplitude-repeat" id="repeat"></div>
                        <div
                          class="amplitude-shuffle amplitude-shuffle-off"
                          id="shuffle"
                        ></div>
                      </div>

                      <div id="central-control-container">
                        <div id="central-controls">
                          <div class="amplitude-prev" id="previous"></div>
                          <div
                            class="amplitude-play-pause"
                            id="play-pause"
                          ></div>
                          <div class="amplitude-next" id="next"></div>
                        </div>
                      </div>

                      <div id="volume-container">
                        <div class="volume-controls">
                          <div class="amplitude-mute amplitude-not-muted"></div>
                          <input type="range" class="amplitude-volume-slider" />
                          <div class="ms-range-fix"></div>
                        </div>
                        <div
                          class="amplitude-shuffle amplitude-shuffle-off"
                          id="shuffle-right"
                        ></div>
                      </div>
                    </div>

                    <div id="meta-container">
                      <span
                        data-amplitude-song-info="name"
                        class="song-name"
                      ></span>

                      <div class="song-artist-album">
                        <span data-amplitude-song-info="artist"></span>
                        <span data-amplitude-song-info="album"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" id="amplitude-right">
                  <div class="song-holder">
                    <div
                      class="song amplitude-song-container amplitude-play-pause"
                      data-amplitude-song-index="0"
                    >
                      <div class="song-now-playing-icon-container">
                        <div class="play-button-container"></div>
                        <img
                          class="now-playing"
                          src="assets/icon/now-playing.svg"
                        />
                      </div>
                      <div class="song-meta-data">
                        <span class="song-title">Bohemian Rhapsody</span>
                        <span class="song-artist">Queen</span>
                      </div>
                      <a
                        href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad"
                        class="bandcamp-link"
                        target="_blank"
                      >
                        <img
                          class="bandcamp-grey"
                          src="assets/icon/bandcamp-grey.svg"
                        />
                        <img
                          class="bandcamp-white"
                          src="assets/icon/bandcamp-white.svg"
                        />
                      </a>
                      <span class="song-duration">3:30</span>
                    </div>
                    <div
                      class="song amplitude-song-container amplitude-play-pause"
                      data-amplitude-song-index="0"
                    >
                      <div class="song-now-playing-icon-container">
                        <div class="play-button-container"></div>
                        <img
                          class="now-playing"
                          src="assets/icon/now-playing.svg"
                        />
                      </div>
                      <div class="song-meta-data">
                        <span class="song-title">
                          Risin' High (feat Raashan Ahmad)
                        </span>
                        <span class="song-artist">Ancient Astronauts</span>
                      </div>
                      <a
                        href="https://switchstancerecordings.bandcamp.com/track/risin-high-feat-raashan-ahmad"
                        class="bandcamp-link"
                        target="_blank"
                      >
                        <img
                          class="bandcamp-grey"
                          src="assets/icon/bandcamp-grey.svg"
                        />
                        <img
                          class="bandcamp-white"
                          src="assets/icon/bandcamp-white.svg"
                        />
                      </a>
                      <span class="song-duration">3:30</span>
                    </div>
                    <div
                      class="song amplitude-song-container amplitude-play-pause"
                      data-amplitude-song-index="1"
                    >
                      <div class="song-now-playing-icon-container">
                        <div class="play-button-container"></div>
                        <img
                          class="now-playing"
                          src="assets/icon/now-playing.svg"
                        />
                      </div>
                      <div class="song-meta-data">
                        <span class="song-title">The Gun</span>
                        <span class="song-artist">Lorn</span>
                      </div>
                      <a
                        href="https://lorn.bandcamp.com/"
                        class="bandcamp-link"
                        target="_blank"
                      >
                        <img
                          class="bandcamp-grey"
                          src="assets/icon/bandcamp-grey.svg"
                        />
                        <img
                          class="bandcamp-white"
                          src="assets/icon/bandcamp-white.svg"
                        />
                      </a>
                      <span class="song-duration">3:16</span>
                    </div>
                    <div
                      class="song amplitude-song-container amplitude-play-pause"
                      data-amplitude-song-index="2"
                    >
                      <div class="song-now-playing-icon-container">
                        <div class="play-button-container"></div>
                        <img
                          class="now-playing"
                          src="assets/icon/now-playing.svg"
                        />
                      </div>
                      <div class="song-meta-data">
                        <span class="song-title">Anvil</span>
                        <span class="song-artist">Lorn</span>
                      </div>
                      <a
                        href="https://lorn.bandcamp.com/"
                        class="bandcamp-link"
                        target="_blank"
                      >
                        <img
                          class="bandcamp-grey"
                          src="assets/icon/bandcamp-grey.svg"
                        />
                        <img
                          class="bandcamp-white"
                          src="assets/icon/bandcamp-white.svg"
                        />
                      </a>
                      <span class="song-duration">3:32</span>
                    </div>
                    <div
                      class="song amplitude-song-container amplitude-play-pause"
                      data-amplitude-song-index="3"
                    >
                      <div class="song-now-playing-icon-container">
                        <div class="play-button-container"></div>
                        <img
                          class="now-playing"
                          src="assets/icon/now-playing.svg"
                        />
                      </div>
                      <div class="song-meta-data">
                        <span class="song-title">I Came Running</span>
                        <span class="song-artist">Ancient Astronauts</span>
                      </div>
                      <a
                        href="https://switchstancerecordings.bandcamp.com/track/i-came-running"
                        class="bandcamp-link"
                        target="_blank"
                      >
                        <img
                          class="bandcamp-grey"
                          src="assets/icon/bandcamp-grey.svg"
                        />
                        <img
                          class="bandcamp-white"
                          src="assets/icon/bandcamp-white.svg"
                        />
                      </a>
                      <span class="song-duration">3:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutUs />
        <section
          class="section"
          style={{
            backgroundImage: `url(${ServicesImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "white",
          }}
        >
          <div className="service-info-container">
            <div className="service-heading">
              <h3 style={{ marginBottom: "0px" }}>Our</h3>
              <h3 style={{ color: recordsColor }}>Services</h3>
            </div>
            <div className="servie-box">
              <div className="servie-box-item">Mixing & Mastering</div>
              <div className="servie-box-item">Dubbing</div>
              <div className="servie-box-item">Background Score</div>
              <div className="servie-box-item">Arranging</div>
              <div className="servie-box-item">Instrumental Record</div>
              <div className="servie-box-item">Songwriting & Composition</div>
              <div className="servie-box-item">Voice Over</div>
              <div className="servie-box-item">Music Video</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
