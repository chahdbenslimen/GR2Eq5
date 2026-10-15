
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Veuillez vous inscrire",
      ins: "Inscription",
      showLink: false
    };
  }

  Changement = () => {
    this.setState({
      msg: "Suivez les màj",
      ins: "Déjà inscrit"
    });
  };

  Sonnerie = () => {
    this.setState({ showLink: true });

    // Create a bell-like sound
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const audio = new AudioContextClass();

    audio.resume().then(() => {
      [880, 1175].forEach((frequency, index) => {
        const oscillator = audio.createOscillator();
        const volume = audio.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        volume.gain.setValueAtTime(0.2, audio.currentTime);
        volume.gain.exponentialRampToValueAtTime(
          0.001,
          audio.currentTime + 0.6
        );

        oscillator.connect(volume);
        volume.connect(audio.destination);

        oscillator.start(audio.currentTime + index * 0.12);
        oscillator.stop(audio.currentTime + index * 0.12 + 0.6);
      });

      setTimeout(() => audio.close(), 1200);
    }).catch(() => {});
  };

  CacherLien = () => {
    this.setState({ showLink: false });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.msg}</h1>

        <button onClick={this.Changement}>
          {this.state.ins}
        </button>

        <div
          className="cloches"
          onMouseEnter={this.Sonnerie}
          onMouseLeave={this.CacherLien}
        >
          
          <span className="cloche">🔔</span>

          {this.state.showLink && (
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="lien"
            >
              Suivez les mises à jour
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default App;
