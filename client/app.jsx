import 'velocity-animate';
import 'bootstrap-webpack';
import './style/app.styl';

import { Router, Route, IndexRoute } from 'react-router';

// Handlers
import Index from './components/index/index.jsx';
import Plan from './components/plan/plan.jsx';
import Profile from './components/profile/profile.jsx';
import Home from './components/home/home.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

var s = getStyle();

// Main class - App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenResized: false,
      isMobile: this.isMobile(),
      isTablet: this.isTablet(),
      isDesktop: this.isDesktop(),
      isTouchDevice: this.isTouchDevice(),
    };
    this.isMobile = this.isMobile.bind(this);
    this.isTablet = this.isTablet.bind(this);
    this.isDesktop = this.isDesktop.bind(this);
    this.isTouchDevice = this.isTouchDevice(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.debouncedHandleResize = _.debounce(() => {this.handleResize(); }, 100);
  }
  getChildContext() {
    return {
      isMobile: this.state.isMobile,
      isTablet: this.state.isTablet,
      isDesktop: this.state.isDesktop,
      isTouchDevice: this.state.isTouchDevice,
      hasBeenResized: this.state.hasBeenResized,
      s: this.handleStyle,
    };
  }
  isMobile() {
    return (window.innerWidth < UI.breakpointM);
  }
  isTablet() {
    return (!this.isMobile() && (window.innerWidth < UI.breakpointT));
  }
  isDesktop() {
    return (!this.isMobile() && !this.isTablet());
  }
  isTouchDevice() {
    return 'ontouchstart' in window // works on most browsers
      || 'onmsgesturechange' in window; // works on ie10
  }
  handleResize() {
    this.setState({
      isMobile: this.isMobile(),
      isTablet: this.isTablet(),
      isDesktop: this.isDesktop(),
      hasBeenResized: !this.state.hasBeenResized,
    });
  }
  componentDidMount() {
    React.initializeTouchEvents(true);
    this.handleResize();
    window.addEventListener('resize', this.debouncedHandleResize);
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleStyle(style) {
    let mobile = this.getViewportStyle(style);
    let {tablet, desktop} = style;
    let responsiveStyle;

    if (this.state.isMobile) {
      responsiveStyle = _.clone(mobile);
    } else if (this.state.isTablet) {
      responsiveStyle = _.extend(_.clone(mobile), tablet);
    } else if (this.state.isDesktop) {
      responsiveStyle = _.extend(_.clone(mobile), _.clone(tablet), desktop);
    }

    return responsiveStyle;
  }
  getViewportStyle(styleObject) {
    var mobileObject = {};

    // Build mobile style object
    for (var key in styleObject) {
      if (!_.includes(['tablet', 'desktop'], key)) {
        mobileObject[key] = styleObject[key];
      }
    }

    return mobileObject;
  }
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={Index}>
          <IndexRoute component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/plan' component={Plan}/>
          <Route path='/profile' component={Profile}/>
        </Route>
      </Router>
    );
  }
}

function getStyle() {
  return {
    container: {
      textAlign: 'center',
      marginTop: UI.navbarHeight,
    },
    row: {
      marginTop: 70,
    },
  };
}

App.childContextTypes = {
  isMobile: React.PropTypes.bool.isRequired,
  isTablet: React.PropTypes.bool.isRequired,
  isDesktop: React.PropTypes.bool.isRequired,
  isTouchDevice: React.PropTypes.bool.isRequired,
  hasBeenResized: React.PropTypes.bool.isRequired,
  s: React.PropTypes.func.isRequired,
};

React.render(<App />, document.body);
