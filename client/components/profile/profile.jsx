var s = getStyle();

// Main class - App
export default class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <div className='row'>
          <div style={s.title}>Profile Page</div>
        </div>
        <div className='row no-margin' style={this.context.s(s.tileContainer)}>
          <div className='col-sm-6'>
            <div style={this.context.s(s.imageTile)}>
              Image
            </div>
          </div>
          <div className='col-sm-6'>
            <div style={this.context.s(s.profileTile)}>
              Profile tile
            </div>
          </div>
        </div>
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
      backgroundColor: UI.cWhite,
      height: 400,
      marginBottom: 30,
    },
    profileTile: {
      backgroundColor: UI.cWhite,
      height: 400,
      marginBottom: 30,
    },
  };
}

Profile.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
