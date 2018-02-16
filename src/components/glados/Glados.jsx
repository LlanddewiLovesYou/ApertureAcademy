import React from "react";
import Logo from "../../assets/appertureacademy.png";
import Desktop from "../../assets/desktop.png";
import Icon from "../../assets/icon.png";
import Term1 from "../../assets/terminal.png";
import Term2 from "../../assets/terminal2.png";
import PHRASES from "../../constants";
import "./Glados.css";

class Glados extends React.Component {
  constructor(props) {
    super(props);
    this.phrases = PHRASES;
    this.state = {
      powerOn: false,
      speech: [],
      booting: false
    };
  }

  componentWillMount() {
    this.generateSpeech();
  }

  randomPhrase() {
    return Math.floor(Math.random() * this.phrases.length);
  }

  generateSpeech() {
    const phrase = this.phrases[this.randomPhrase()];
    const list = this.state.speech.slice(0);
    list.push(phrase);
    this.setState({ speech: list });
    console.log(this.state.speech);
  }

  boot() {
    this.setState({booting: true})
    setTimeout(() => {
      this.setState({powerOn: true})
    }, 2000)


  }

  render() {
    if (this.state.powerOn) {
      return (
        <main className="main--mainframe">
          <img src={Logo} className="img--logo" />
          <ul className="ul--commandline">
            {this.state.speech.map(phrase => {
              let i = 0;
              i++;
              return (
                <li className="li--phrase" key={`${i}`}>
                  <span className="span--prompt">
                    'GLaDOS_2.5'/appertureacademy $
                  </span>{" "}
                  {phrase}
                </li>
              );
            })}
          </ul>
          <div className="div--console">
            <label className="label--console">Continue Testing? (y/N)</label>
            <button
              className="button--testing"
              onClick={() => this.generateSpeech()}
            >
              y
            </button>
            <button
              id="secbutton"
              className="button--testing"
              onClick={() => this.setState({ powerOn: false, booting: false })}
            >
              N
            </button>
          </div>
        </main>
      );
    } else {
      let source
      if (this.state.booting) {
        source = Term2
      } else {
        source = ''
      }
      return (
        <main>
          <img src={source} className='img--terminal'/>
          <div className="div--iconwrapper">
            <img
              className="img--icon"
              onClick={() => this.boot()}
              src={Icon}
            />
          <div className="div--filename">'GLaDOS.exe'</div>
          </div>
        </main>
      );
    }
  }
}

export default Glados;
// <img className="img--desktop" src={Desktop} />
