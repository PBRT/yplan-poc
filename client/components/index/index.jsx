var s = getStyle();

import Header from '../header/header.jsx';

// Main class - App
export default class Index extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={s.container}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      width: '100%',
      backgroundColor: UI.cBackground,
      marginTop: UI.navbarHeight,
    },
  };
}

Index.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
