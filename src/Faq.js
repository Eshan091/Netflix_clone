import React from 'react';
import "./faq.css";

function Faq() {
  return (
    <div className="faq">
     
      <h1>Frequently Asked Questions</h1>
      <ul className="boxes">
        <li>
            <input type="radio" name="boxes" id="first" />
            <label htmlFor="first">What is Netflix?</label>
            <div className="content">
                <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>
            </div>
        </li>
        <li>
            <input type="radio" name="boxes" id="second" />
            <label htmlFor="second">How much does Netflix cost?</label>
            <div className="content">
                <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
            </div>
        </li>
        <li>
            <input type="radio" name="boxes" id="third" />
            <label htmlFor="third">Where can I watch?</label>
            <div className="content">
                <p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.                </p>
            </div>
        </li>
       
        <li>
            <input type="radio" name="boxes" id="fourth" />
            <label htmlFor="fourth">How do I cancel?</label>
            <div className="content">
                <p>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime..                </p>
            </div>
        </li>
        <li>
            <input type="radio" name="boxes" id="fifth" />
            <label htmlFor="fifth">What can I watch on Netflix?</label>
            <div className="content">
                <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                </p>
            </div>
        </li>
      </ul>
      <small>
      Ready to watch? Enter your email to create or restart your membership.</small>
      <form className="email">
          <input   type="email" placeholder="Email adress" required />
          <button type="submit">GET STARTED </button>
        </form>

        <div className="footer">
            <h2>Question? call 000-000-000-000</h2>
            <div className="row">
                <div className="col">
                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>

                </div>
                <div className="col">
                    <a href="#">Help Center</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookies Preference</a>
                </div>
                <div className="col">
                    <a href="#">Account</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Media Center</a>
                </div>
                <div className="col">
                    <a href="#">Media Center</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <button className="langauge_button">English</button>
            <p className="copyright_text">Netflix India</p>
        </div>
      
    </div>
  )
}

export default Faq
