import React from "react";
import landingStyles from "./landing.module.css";

const LandingComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-3 bg-white px-20">
      {/* Hero section */}
      <section className={landingStyles.sectionContainer}>
        {/* <img src="/lootify.png" alt="" className="h-[100px] w-[80px]" /> */}
        {/* <img
          src="/Vcricket.svg"
          alt="Vcricket"
          className="h-[150px] w-[200px] mb-10"
        /> */}
        <img src="/section-1.png" alt="Features" className="h-60 w-70 mb-5" />
        <h3 className={landingStyles.mainText}>
          Cricket is not just a game, it's a way of life.
        </h3>
        <p className={landingStyles.subText}>
          Vcricket, the ultimate companion for cricket enthusiasts, delivers
          real-time updates, scores, and news. With its user-friendly interface,
          stay connected to the game's pulse anytime, anywhere, bringing the
          stadium experience to your fingertips.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-x-10 md:space-y-0 py-5 mt-5">
          <button className={landingStyles.iosButton}>Download for iOS</button>
          <button className={landingStyles.androidButton}>
            Download for android
          </button>
        </div>
      </section>
      {/* Snippets section */}
      <section className={landingStyles.sectionContainer}>
        <img src="/section-2.png" alt="Features" className="h-60 w-70" />
        <h3 className={landingStyles.mainText}>
          Plan Your Cricket Schedule with Vcricket
        </h3>
        <p className={landingStyles.subText}>
          Plan your cricket viewing schedule effortlessly with Vcricket. Stay
          ahead with upcoming match details, schedules, and timings, ensuring
          you never miss a moment of the action-packed cricket season.
        </p>
      </section>
      {/* Features section */}
      <section className={landingStyles.sectionContainer}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img
              src="/section-3.png"
              alt="Features"
              className="h-70 w-70 mb-5"
            />
          </div>
          <div className="space-y-10 mb-5 flex flex-col align-start">
            <h3 className={landingStyles.mainText}>Real-Time Scores</h3>
            {/* Sub category1 */}
            <div>
              <h3 className={landingStyles.secondaryText}>
                Ball-by-Ball Commentary
              </h3>
              <p className={landingStyles.secondaryDescription}>
                Experience the thrill of each delivery with detailed, real-time
                commentary, providing insights, analysis, and excitement as the
                match unfolds on Vcricket
              </p>
            </div>
            {/* Sub category2 */}
            <div>
              <h3 className={landingStyles.secondaryText}>
                Live Scoreboard Updates
              </h3>
              <p className={landingStyles.secondaryDescription}>
                Stay informed with instant updates on runs, wickets, overs, and
                more, ensuring you're always up-to-date with the latest
                developments in the game on Vcricket.
              </p>
            </div>
            {/* Sub category3 */}
            <div>
              <h3 className={landingStyles.secondaryText}>
                Innings Breakdowns
              </h3>
              <p className={landingStyles.secondaryDescription}>
                Dive deep into match statistics during innings breaks, with
                comprehensive breakdowns of batting, bowling, and fielding
                performances, enhancing your understanding of the game on
                Vcricket.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* News section */}
      <section className={landingStyles.sectionContainer}>
          <img src="/section-6.png" alt="Features" className="h-60 w-70" />
            <h3 className={landingStyles.mainText}>
              Your One-Stop Shop for Cricket News
            </h3>
            <p className={landingStyles.subText}>
            Craving instant cricket updates? Dive into Vcricket, your one-stop shop for news! Get live alerts, expert analysis, and exclusive interviews. Follow your favorite teams, players, and tournaments for a personalized feed. Unfiltered news, in-depth stories, and engaging quizzes, Vcricket keeps you in the game - 24/7. 
            </p>
      </section>
    </div>
  );
};

export default LandingComponent;
