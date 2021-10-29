import {useEffect} from "react";
import '../skin/styles.css';

function Main() {
  useEffect(() => {

  }, []);

  return (
    <div className="main">
      <div className="menu">
        <div className="flex-container">
          <div className="logo">
            Chia Faucet
          </div>
          <ul>
            <li>about</li>
            <li>features</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
      <section className="about">
        <div className="flex-container">
          <div className="upper">
            <h1>Lorem</h1>
            <h2>Ipsum</h2>
          </div>
          <div className="transparent">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ipsum mauris. Nam quam libero,
              mattis eget imperdiet nec, ultricies vel turpis. Maecenas maximus metus nec viverra faucibus. Etiam id
              dolor non
              magna accumsan sodales et vel leo. Ut faucibus nisi metus, sit amet auctor felis euismod quis. Maecenas
              vel tincidunt purus. Suspendisse in molestie odio, non pellentesque ante. Nunc a pellentesque lorem. Orci
              varius
              natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="flex-container">
          <h3>Features</h3>
          <div className="blocks">
            <div className="block">
              <h4>01</h4>
              <p>Nulla pulvinar efficitur aliquet. Donec nisi urna, pellentesque quis interdum in, pretium sed
                lorem.</p>
            </div>
            <div className="block">
              <h4>02</h4>
              <p>In finibus convallis tortor, ut eleifend lacus. Nulla elementum semper pharetra. Nulla viverra.</p>
            </div>
            <div className="block">
              <h4>03</h4>
              <p>Morbi varius tortor et erat elementum, et aliquam nisi suscipit. Curabitur eleifend, libero sed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="video">
        <div className="flex-container">
          <div className="transparent">
            <h3>Our Video</h3>
          </div>
        </div>
      </section>
      <footer>
        <div className="flex-container">
          <p>Copyright 2021</p>
          <ul>
            <li>home</li>
            <li>privacy</li>
            <li>legal</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Main;
