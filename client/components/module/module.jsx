var s = getStyle();

export default class Module extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(active){
    $(this.refs.subcontainer).velocity('stop');
    $(this.refs.subcontainer).velocity({boxShadowBlur: active ? 6 : 0}, 200);
  }
  componentDidMount() {
    $(this.refs.subcontainer).velocity({opacity: 1}, {duration: 400});
  }
  render() {
    return (
      <div className='col-lg-4 col-sm-6'>
        <div
          ref='subcontainer'
          onMouseEnter={this.handleHover.bind(null, true)}
          onMouseLeave={this.handleHover.bind(null, false)}
          style={this.context.s(s.subcontainer)}>
          <div style={this.context.s(s.imageContainer)}>
            <img src={require('./assets/image.jpg')} style={this.context.s(s.image)} />
          </div>
          <div>
            <div style={this.context.s(s.event)}>{this.props.item.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

function getStyle() {
  return {
    subcontainer: {
      borderRadius: 5,
      backgroundColor: UI.cWhite,
      cursor: 'pointer',
      boxShadow: '0 0 0 0 rgba(0,0,0,0.1)',
      marginBottom: 20,
      display: 'inline-block',
      opacity: 0,
    },
    imageContainer: {
      width: '100%',
    },
    image: {
      width: '100%',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    event: {
      fontSize: 20,
      padding: 20,
    },
  };
}

Module.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Module.displayName = 'Module';

Module.propTypes = {
  item: React.PropTypes.object.isRequired,
};
