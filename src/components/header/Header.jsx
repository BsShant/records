import React from 'react'
import './styles.css'
import RecordsLogo from '../../assets/images/recordsLogo.svg'


const Header = () => {
    return (
        <header>
            <div className="container" style={{ position: "relative" }}>
                <div class="nav">
                    {/*  <div class="title"> */}
                    <img src={RecordsLogo} alt="Logo" style={{
                        width: "250px",
                        position: "absolute",
                        top: "-75px",
                        left: "-48px",
                    }} />
                    {/* </div> */}

                </div>
                {/* <div class="toggle">
            <div class="bar"></div>
          </div>

          <nav class="hidden">
            <div class="showcase">
              <div class="showcase-container">
                <ul class="showcase-menu">
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.pexels.com/photos/797579/pexels-photo-797579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
                    }}
                  >
                    Hello !
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
                    }}
                  >
                    We are Noble Freaks.
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
                    }}
                  >
                    Remember Us
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1457052002176-2d16a4f4a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
                    }}
                  >
                    Join our class
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
                    }}
                  >
                    Projects we have worked.
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1523405976-1345529cc3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80")',
                    }}
                  >
                    What our clients think.
                  </li>
                  <li
                    class="overlay"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/uploads/1412282232015a06e258a/4bdd2a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
                    }}
                  >
                    Contact us for more details.
                  </li>
                </ul>
              </div>
            </div>

            <div class="menu">
              <ul class="main-menu">
                <li class="active">
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
                <li>
                  <a href="#!">Class</a>
                </li>
                <li>
                  <a href="#!">Portfolio</a>
                </li>
                <li>
                  <a href="#!">Testimonials</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div> 
          </nav>*/}
            </div>
        </header>
    )
}

export default Header;