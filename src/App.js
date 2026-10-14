import { Card, Container } from "react-bootstrap";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

import "./App.css";

const firstName = "Katia";

const greetingImage = "https://i.pravatar.cc/120?img=47";

function App() {
  return (
    <Container className="app-container">
      <header className="page-header">
        <p className="eyebrow">THE EVERYDAY COLLECTION</p>
        <h1>Discover your next favorite.</h1>
        <p className="page-subtitle">
          Thoughtfully selected essentials for your everyday life.
        </p>
      </header>

      <Card className="product-card">
        <div className="product-image-container">
          <Image />
          <span className="product-badge">FEATURED</span>
        </div>

        <Card.Body className="product-card-body">
          <p className="product-category">AUDIO · WIRELESS</p>

          <Name />

          <Description />

          <div className="product-footer">
            <Price />
            <span className="product-label">Premium sound</span>
          </div>
        </Card.Body>
      </Card>

      <section className="greeting-section">
        {firstName ? (
          <div className="personalized-greeting">
            <img
              src={greetingImage}
              alt="Greeting avatar"
              className="greeting-image"
            />

            <div>
              <p className="greeting-label">NICE TO SEE YOU</p>
              <h2>Hello, {firstName}!</h2>
            </div>
          </div>
        ) : (
          <h2>Hello, there!</h2>
        )}

        <p>Take a look around and find something you love.</p>
      </section>

      <footer className="page-footer">
        Built with React and React-Bootstrap.
      </footer>
    </Container>
  );
}

export default App;
