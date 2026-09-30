import brainCharacter from '../assets/brain.png';

const Intro = function () {
  return (
    <section className="intro">
      <div className="message">
        <div className="message-left">
          <h2>
            Test your <br />
            knowledge
          </h2>
          <p>
            Choose a category, challenge yourself, and see how much you really
            know
          </p>
        </div>
        <div className="message-right">
          <img src={brainCharacter} alt="a cute brain character" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
