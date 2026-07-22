import "../styles/Cover.css";

export default function Cover({ onOpen }) {
  return (
    <section className="cover">
      <div className="overlay">
        <p className="subtitle">For Our Beloved Sister & Daughter</p>

        <h1>The Book of You</h1>

        <h2>Aonat</h2>

        <p className="quote">
          Some stories are written with ink.
          Yours were written with love.
        </p>

        <button onClick={onOpen}>
          Open The Book
        </button>
      </div>
    </section>
  );
}