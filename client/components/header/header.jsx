var s = getStyle();

import { Link } from 'react-router';
import LinkComp from './link-comp.jsx';

// Main class - App
export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <Link to='/home'>
          <div style={this.context.s(s.logo)}>
            {this.context.isMobile ?
              <img style={this.context.s(s.img)} src={require('./logo-mobile.png')} /> :
              <img style={this.context.s(s.img)} src={require('./logo.png')} />}
          </div>
        </Link>
        <div className='separator'></div>
        <LinkComp link='/plan' name='plan'/>
        <div className='separator'></div>
        <LinkComp link='/profile' name='profile'/>
        <div className='separator'></div>
      </div>
    );
  }
}

function getStyle() {
  return {
    container: {
      height: UI.navbarHeight,
      backgroundColor: UI.cWhite,
      position: 'absolute',
      top: 0,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.3)',
    },
    item: {

    },
    logo: {
      flex: 'none',
      padding: '12px 18px',
      width: 64,
      cursor: 'pointer',
      tablet: {
        padding: '14px 24px',
        width: 150,
      },
      desktop: {
        padding: '14px 24px',
        width: 150,
      },
    },
    img: {
      width: 30,
      tablet: {
        width: 100,
      },
      desktop: {
        width: 100,
      },
    }
  };
}

Header.contextTypes = {
  s: React.PropTypes.func.isRequired,
  isMobile: React.PropTypes.bool.isRequired,
};
