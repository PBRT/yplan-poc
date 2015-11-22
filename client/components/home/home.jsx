var s = getStyle();

import Heroshot from '../heroshot/heroshot.jsx';

// Main class - App
export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <Heroshot />
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      width: '100%',
      backgroundColor: UI.cBackground,
    },
  };
}

Home.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
