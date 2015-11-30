var s = getStyle();

import Heroshot from 'heroshot/heroshot.jsx';

let Home = (props, context) => {
  return (
    <div style={context.s(s.container)}>
      <Heroshot
        title='Live Your City'
        subtitle='We uncover the best events every day'
        image={require('./assets/hero.jpg')}/>
      <div style={context.s(s.content)}>
        Proof of concept of the YPLAN app navigation using React-Motion for route transitions.
      </div>
      <a style={context.s(s.subcontent)} href='https://github.com/PBRT/yplan-poc' target='_blank'>
        <div>Check the codebase on GitHub</div>
        <img src={require('./assets/git.png')} style={s.git} />
      </a>
    </div>
  );
};

function getStyle() {
  return {
    container: {
      width: '100%',
      backgroundColor: UI.cBackground,
      textAlign: 'center',
    },
    content: {
      marginTop: 40,
      textAlign: 'center',
      fontSize: UI.fontXL,
      tablet: {
        marginTop: 60,
      },
      desktop: {
        marginTop: 60,
      },
    },
    subcontent: {
      display: 'inline-block',
      marginTop: 20,
      textAlign: 'center',
      fontSize: UI.fontMD,
      color: UI.cPrimary,
      textDecoration: 'none',
      marginBottom: 100,
      tablet: {
        marginTop: 30,
      },
      desktop: {
        marginTop: 30,
      },
    },
    git: {
      width: 60,
      marginTop: 10,
    },
  };
}

Home.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Home.displayName = 'Home';

export default Home;
