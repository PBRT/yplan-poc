import Header from '../header/header.jsx';
import RouteTransition from '../routeTransition.jsx';

var s = getStyle();

let Index = (props) => {
  return (
    <div style={s.container}>
      <Header />
      <RouteTransition pathname={props.location.pathname}>
        {props.children}
      </RouteTransition>
    </div>
  );
};

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

export default Index;
