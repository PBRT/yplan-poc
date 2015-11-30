var s = getStyle();

let Profile = (props, context) => {
  return (
    <div style={context.s(s.container)}>
      <div className='row'>
        <div style={s.title}>Profile Page</div>
      </div>
      <div className='row no-margin' style={context.s(s.tileContainer)}>
        <div className='col-sm-6' style={context.s(s.imageTile)}>
          <img src={require('./assets/avatar.png')} style={context.s(s.avatar)}/>
          <div style={context.s(s.field)}>Master of London</div>
        </div>
        <div className='col-sm-6' style={context.s(s.profileTile)}>
          <div style={context.s(s.field)}>M. Francis Cabrel</div>
          <div style={context.s(s.field)}>You love Music, Theatre and Goodies</div>
          <div style={context.s(s.field)}>You are a LONDONER and a youngster</div>
          <div style={context.s(s.field)}>You attempt to 4 events so far!</div>
        </div>
      </div>
    </div>
  );
};

function getStyle() {
  return {
    container: {
      width: '100%',
      backgroundColor: UI.cBackground,
    },
    title: {
      textAlign: 'center',
      padding: '20px 0px 0px',
      fontSize: 30,
      color: UI.cTitle,
    },
    tileContainer: {
      display: 'inline-block',
      padding: 15,
      width: '100%',
      tablet: {
        padding: 20,
      },
      desktop: {
        padding: 20,
      },
    },
    imageTile: {
      textAlign: 'center',
      display: 'block',
      verticalAlign: 'middle',
      float: 'initial',
      tablet: {
        display: 'inline-block',
        float: 'none',
      },
      desktop: {
        display: 'inline-block',
        float: 'none',
      },
    },
    profileTile: {
      marginBottom: 30,
      paddingTop: 50,
      display: 'block',
      verticalAlign: 'middle',
      float: 'initial',
      textAlign: 'center',
      tablet: {
        display: 'inline-block',
        textAlign: 'left',
        float: 'none',
      },
      desktop: {
        display: 'inline-block',
        textAlign: 'left',
        float: 'none',
      },
    },
    avatar: {
      width: 100,
      marginBottom: 20,
      tablet: {
        width: 100,
      },
      desktop: {
        width: 300,
      },
    },
    field: {
      color: UI.cText,
      fontSize: UI.fontLG,
      padding: 10,
    },
  };
}

Profile.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Profile.displayName = 'Profile';

export default Profile;

