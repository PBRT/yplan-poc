var s = getStyle();

let Heroshot = (props, context) => {
  const containerStyle = _.extend(context.s(s.container), {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(${props.image})`,
  });

  return (
    <div style={containerStyle}>
      <div style={context.s(s.title)}>{props.title}</div>
      <div style={context.s(s.subtitle)}>{props.subtitle}</div>
    </div>
  );
};

function getStyle() {
  return {
    container: {
      width: '100%',
      height: 286,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      padding: '10px 20px',
    },
    img: {
      width: '100%',
    },
    title: {
      paddingBottom: 4,
      fontSize: UI.fontXXL,
      color: UI.cWhite,
      paddingTop: 40,
      textAlign: 'center',
      tablet: {
        paddingTop: 60,
      },
      desktop: {
        paddingTop: 100,
      }
    },
    subtitle: {
      paddingBottom: 20,
      fontSize: UI.fontMD,
      color: UI.cWhite,
      textAlign: 'center',
      tablet: {
        fontSize: UI.fontXL,
      },
      desktop: {
        fontSize: UI.fontXL,
      },
    },
  };
}

Heroshot.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Heroshot.displayName = 'Heroshot';
Heroshot.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
};

export default Heroshot;
