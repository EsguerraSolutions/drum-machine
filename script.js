//Audio Sounds Taken from FreeCodeCamp Drum Machine's Sample Project

const bankOne = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



const bankTwo = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];



const themes = [
{
  "id": "Off",
  "--text": "#000000",
  "--border-line": "#545252",
  "--display-pads": "#e3dede",
  "--body": "#b8b0b0",
  "--background": "#b0b0b0",
  "--slider-hover": "rgba(84, 82, 82,.1)",
  "--slider-active": "rgba(84, 82, 82,.2)" },

{
  "id": "Heater Kit",
  "--text": "#000000",
  "--border-line": "#cc3b3b",
  "--display-pads": "#ffe0c4",
  "--body": "#fab87d",
  "--background": "#ff9752",
  "--slider-hover": "rgba(204, 59, 59,.1)",
  "--slider-active": "rgba(204, 59, 59,.2)" },

{
  "id": "Smooth Piano Kit",
  "--text": "#000000",
  "--border-line": "#0f3bbf",
  "--display-pads": "#ccd9ff",
  "--body": "#8aa7ff",
  "--background": "#5170cf",
  "--slider-hover": "rgba(15, 59, 191,.1)",
  "--slider-active": "rgba(15, 59, 191,.2)" }];



const pressedStyle = {
  backgroundColor: "var(--border-line)",
  color: "var(--display-pads)" };



const releasedStyle = {
  backgroundColor: "var(--display-pads)",
  color: "var(--text)" };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "READY",
      currentBank: bankOne,
      power: true,
      volume: 0.30 };

    this.setDisplay = this.setDisplay.bind(this);
    this.setBank = this.setBank.bind(this);
    this.setPower = this.setPower.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  setDisplay(updatedDisplay) {
    if (this.state.power) {
      this.setState({
        display: updatedDisplay });

    }
  }

  setBank() {
    if (this.state.power) {
      if (this.state.currentBank === bankOne) {
        this.setState({
          currentBank: bankTwo });

        this.setTheme(themes[2]);
      } else

      {
        this.setState({
          currentBank: bankOne });

        this.setTheme(themes[1]);
      }
    }
  }

  setPower() {
    if (this.state.power) {
      this.setState({
        power: false,
        display: " " });

      this.setTheme(themes[0]);
    } else

    {
      this.setState({
        power: true,
        display: "READY" });

      if (this.state.currentBank === bankOne) {
        this.setTheme(themes[1]);
      } else

      {
        this.setTheme(themes[2]);
      }

    }
  }

  setVolume(e) {
    if (this.state.power) {
      this.setState({
        volume: e.target.value,
        display: "VOLUME : " + Math.round(e.target.value * 100) + " %" });

    }

  }

  setTheme(themeObj) {
    for (let prop in themeObj) {
      document.documentElement.style.setProperty(prop, themeObj[prop]);
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "controls-container" }, /*#__PURE__*/
      React.createElement("div", { id: "drum-header" }, /*#__PURE__*/
      React.createElement("h1", null, "Drum Machine"), /*#__PURE__*/
      React.createElement("p", null, "Coded by Jonathan")), /*#__PURE__*/

      React.createElement(PowerButton, { power: this.state.power, setPower: this.setPower }), /*#__PURE__*/
      React.createElement(BankButton, { currentBank: this.state.currentBank, setBank: this.setBank, setDisplay: this.setDisplay, power: this.state.power }), /*#__PURE__*/
      React.createElement(VolumeSlider, { volume: this.state.volume, setVolume: this.setVolume })), /*#__PURE__*/

      React.createElement("div", { id: "display-and-pad" }, /*#__PURE__*/
      React.createElement(Display, { display: this.state.display }), /*#__PURE__*/
      React.createElement(DrumPadSet, { currentBank: this.state.currentBank, setDisplay: this.setDisplay, power: this.state.power, volume: this.state.volume }))));



  }}


const Display = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("p", null, props.display)));

};

const DrumPadSet = props => {
  let currentBank = props.currentBank;
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-pad-set" }, currentBank.map(key => /*#__PURE__*/React.createElement(DrumPad, { keyTrigger: key.keyTrigger, id: key.id, key: key.id, url: key.url, keyCode: key.keyCode, power: props.power, setDisplay: props.setDisplay, volume: props.volume }))));

};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      padStyle: releasedStyle };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.pressPad = this.pressPad.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.volume = this.props.volume;
    sound.play();
    this.pressPad();
    setTimeout(() => this.pressPad(), 100);
    this.props.setDisplay(this.props.id.replace(/-/, " ").toUpperCase());
  }

  handleClick() {
    if (this.props.power) {
      this.playSound();
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode && this.props.power) {
      this.playSound();
    }
  }

  pressPad() {
    if (this.state.padStyle.backgroundColor === "var(--border-line)") {
      this.setState({
        padStyle: releasedStyle });

    } else

    {
      this.setState({
        padStyle: pressedStyle });

    }
  }

  render() {
    let keyTrigger = this.props.keyTrigger;
    let id = this.props.id;
    let url = this.props.url;
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", onClick: this.handleClick, id: id, style: this.state.padStyle }, /*#__PURE__*/
      React.createElement("audio", { src: url, id: keyTrigger, className: "clip" }),
      keyTrigger));


  }}


class PowerButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.setPower();
  }
  render() {
    let powerSwitchStyle = {
      justifyContent: "flex-end" };


    if (this.props.power) {
      powerSwitchStyle.justifyContent = "flex-start";
    } else

    {
      powerSwitchStyle.justifyContent = "flex-end";
    }

    return /*#__PURE__*/(
      React.createElement("div", { id: "power-button-container", className: "switch-container" }, /*#__PURE__*/
      React.createElement("p", { className: "switch-label" }, "POWER"), /*#__PURE__*/
      React.createElement("div", { id: "power-switch", className: "switch", onClick: this.handleClick, style: powerSwitchStyle }, /*#__PURE__*/
      React.createElement("div", { id: "power-button", className: "button" }, String.fromCharCode(160))), /*#__PURE__*/

      React.createElement("div", { className: "labels" }, /*#__PURE__*/
      React.createElement("p", null, "ON"), /*#__PURE__*/
      React.createElement("p", null, "OFF"))));



  }}


class BankButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: "Smooth Piano Kit" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setBank();
    if (this.props.power) {
      if (this.props.currentBank === bankOne) {
        this.setState({
          bankName: "Heater Kit" });

      } else

      {
        this.setState({
          bankName: "Smooth Piano Kit" });

      }
    }
    this.props.setDisplay(this.state.bankName.toUpperCase());
  }
  render() {
    let bankSwitchStyle = {
      justifyContent: "flex-start" };


    if (this.props.currentBank === bankOne) {
      bankSwitchStyle.justifyContent = "flex-start";
    } else

    {
      bankSwitchStyle.justifyContent = "flex-end";
    }

    return /*#__PURE__*/React.createElement("div", { id: "bank-button-container", className: "switch-container" }, /*#__PURE__*/
    React.createElement("p", { className: "switch-label" }, "BANK"), /*#__PURE__*/
    React.createElement("div", { id: "bank-switch", className: "switch", onClick: this.handleClick, style: bankSwitchStyle }, /*#__PURE__*/
    React.createElement("div", { id: "bank-button", className: "button" }, String.fromCharCode(160))), /*#__PURE__*/

    React.createElement("div", { class: "labels" }, /*#__PURE__*/
    React.createElement("p", null, "1"), /*#__PURE__*/
    React.createElement("p", null, "2")));


  }}


class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let volume = this.props.volume;
    var $slider = $("#slider");
    var $fill = $(".bar .fill");

    function setBar() {
      $fill.css("width", volume * 100 + "%");
    }

    $slider.on("input", setBar);

    setBar();

    return /*#__PURE__*/React.createElement("div", { id: "vol-control-container" }, /*#__PURE__*/
    React.createElement("p", { className: "switch-label" }, "VOLUME"), /*#__PURE__*/
    React.createElement("div", { id: "vol-slider-container" }, /*#__PURE__*/
    React.createElement("div", { id: "vol-slider" }, /*#__PURE__*/
    React.createElement("span", { className: "bar" }, /*#__PURE__*/React.createElement("span", { className: "fill" })), /*#__PURE__*/
    React.createElement("input", {
      max: "1",
      min: "0",
      step: "0.01",
      type: "range",
      value: volume,
      onChange: this.props.setVolume,
      id: "slider",
      className: "slider" }))));




  }}




/*CUSTOM RANGE INPUT CSS, CREDITS TO MinzCode "https://www.youtube.com/watch?v=gjPllrhIYsM"*/

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));