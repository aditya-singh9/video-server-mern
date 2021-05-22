import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.css";
// import bgimg from "../EXTRAS/background.png";

function StartPage() {
  return (
    <div className="html">
      <div className="body">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand">
            <div className="heading">
              <span className="icon">
                <span className="green">VideoLurb </span>
              </span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        <div className="center">
          <div>
            <p className="tarif" id="t">
              <span> A video server in MERN </span>
              <br />
            </p>
            {/* <p id="s">
              <span className="sub">
                {" "}
                India's fastest growing learning platform{" "}
              </span>
            </p> */}

            <button className="start" id="subsub">
              <Link
                to="/home"
                // style="color: white; text-decoration: none;"
              >
                Upload Videos
              </Link>
            </button>

            <p className="subu" id="subsubsub">
              Free for all!
              <br />
              <a id="subsubsub">&darr;</a>
            </p>
          </div>

          <div className="extras" id="things_we_do">
            <div className="extra" id="extra1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fundraw_education_f8ru.png?alt=media&token=a81e40d1-900e-4b1e-bcc4-99ad3a835d2d"
                class="ei"
                alt=""
              />
              <p className="head">Educational videos</p>
            </div>
            <div className="extra" id="extra2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fundraw_Relaxing_at_home_re_mror.png?alt=media&token=51875a80-904d-4c31-afad-e69acb5ad54e"
                alt=""
                className="ei"
              />
              <p className="head">Ease to access</p>
            </div>
            <div className="extra" id="extra3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fundraw_Blog_post_re_fy5x.png?alt=media&token=cb98d9e9-61f4-4feb-8c03-66e0acc594c8"
                alt=""
                className="ei"
              />
              <p className="head">Automated thumbnail generators</p>
            </div>
            <div className="extra" id="extra4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fundraw_Followers_re_6k3g.png?alt=media&token=38538afc-951c-4d58-9036-7b9ea02d3342"
                alt=""
                className="ei"
              />
              <p className="head">Choose what to see</p>
            </div>
            {/* <div className="extra" id="extra5">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fundraw_Modern_life_re_8pdp.png?alt=media&token=4c0e7882-a9e8-4350-bbc9-b6c19f29da2d"
                alt=""
                className="ei"
              />
              <p className="head">Study from any device</p>
            </div> */}
          </div>

          <div className="bubbles">
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
            <img src="https://firebasestorage.googleapis.com/v0/b/studylurb.appspot.com/o/bgimgs%2Fbubble.png?alt=media&token=e12dd16e-4e16-4903-8b5d-5f283e4c5002" />
          </div>

          {/* <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
            crossorigin="anonymous"
          ></script> */}
        </div>
      </div>
    </div>
  );
}

export default StartPage;
