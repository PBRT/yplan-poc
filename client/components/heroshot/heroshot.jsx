var s = getStyle();

// Main class - App
export default class Heroshot extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <img src={require('./assets/hero.jpg')} style={this.context.s(s.img)} />
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      width: '100%',
    },
    img: {
      width: '100%',
    },
  };
}

Heroshot.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
