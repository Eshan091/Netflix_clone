import React from "react";
import "./Home_banner.css";
function HomeBanner() {
  return (
    <div className="home_banner">
     
      <div className="main_content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="email">
          <input type="email" placeholder="Email adress" required />
          <button >GET STARTED</button>
        </form>
      </div>
    </div>
  );
}

export default HomeBanner;
