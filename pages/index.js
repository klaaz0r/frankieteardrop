import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>franie teardrop</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>

      <section
        className="section section-lg bg-secondary z-2"
        style={{ height: "100vh", marginBottom: -38, overflowY: "scroll" }}
      >
        <div className="container z-2">
          <div className="row justify-content-center pb-0 mb-2">
            <div className="col-11">
              <img
                src={require("../images/logo.gif")}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">

            {/* Main content */}
            <div class="col-md-8">
              <div className="card card-tertiary">
                <div className="card-header text-center">
                  <span>Frankie Teardrop Homepage</span>
                </div>
                <div className="card-body">
                  <h3 className="card-text">what a f*cking time to be alive</h3>
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/jPE2j79EAEI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div class="col-md-4">
              <div className="card card-success mt-2 mt-md-0">
                <div className="card-header ">
                  <span>Spotify</span>
                </div>
                <div className="card-body">
                  <p className="card-text">Joyrocket is live on spotify</p>
                  <div className="d-flex mt-3">
                    <a
                      href="https://open.spotify.com/artist/2UebVjs2njKEH0mWbCLDmQ"
                      target="_blank"
                      className="btn btn-sm mb-2 mb-lg-0 mr-2 btn-primary border-dark"
                      role="button"
                    >
                      <span className="btn-text">🎧 Listen on spotify</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card card-tertiary mt-2">
                <div className="card-header">
                  <span>Social</span>
                </div>
                <div className="card-body">
                  <p className="card-text">It's just a status update</p>
                  <div className="d-flex mt-3">
                    <a
                      href="https://www.instagram.com/20yearoldfrankie"
                      target="_blank"
                      className="btn btn-sm mb-2 mb-lg-0 mr-2 btn-primary border-dark"
                      role="button"
                    >
                      <span className="btn-text">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="../#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>We are a band that makes music.</p>
                    <img
                      src={require("../images/salad.jpg")}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="row mt-4">
            <div class="col-md-4 offset-md-4"></div>
            <div class="col-md-3 offset-md-3"></div>
          </div>
          <div class="row">
            <div class="col-md-4 offset-md-2"></div>
          </div>
        </div>
      </section>
      <footer>
        <nav
          id="navbar-footer"
          className="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer"
        >
          <ul className="navbar-nav navbar-nav-hover flex-row align-items-center">
            <li className="nav-item">
              <a href="mailto:20yearoldfrankie@gmail.com" className="nav-link" role="button">
                <span className="nav-link-inner-text">📕 Bookings</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="mailto:20yearoldfrankie@gmail.com"
                target="_blank"
                className="nav-link"
                role="button"
              >
                <span className="nav-link-inner-text">🌟 Fanmail</span>
              </a>
            </li>
          </ul>
          <div className="time text-center">14:20 am</div>
        </nav>
      </footer>
    </div>
  );
}
