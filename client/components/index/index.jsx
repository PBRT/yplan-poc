import Header from '../header/header.jsx';
import RouteTransition from '../routeTransition.jsx';

var s = getStyle();

export default class Index extends React.Component {
  render() {
    return (
      <div style={s.container}>
        <Header />
        <RouteTransition pathname={this.props.location.pathname}>
          {this.props.children}
        </RouteTransition>
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
    title: {
      textAlign: 'center',
      padding: '20px 0px 0px',
      fontSize: 30,
      color: UI.cTitle,
    },
  };
}

Index.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Index.displayName = 'Index';
