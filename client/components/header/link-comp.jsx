var s = getStyle();

import { Link } from 'react-router';
import ReactDOM from 'react-dom';

export default class LinkComp extends React.Component {
  constructor() {
    super();
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(active) {
    $(ReactDOM.findDOMNode(this)).velocity('stop');
    $(ReactDOM.findDOMNode(this)).velocity({
      color: active ? UI.cPrimary : UI.cText,
      opacity: active ? 1 : 0.8
    }, 200);
  }
  render() {
    return (
      <Link
        onMouseEnter={this.handleHover.bind(null, true)}
        onMouseOut={this.handleHover.bind(null, false)}
        to={this.props.link}
        style={this.context.s(s.container)}>
          {this.props.name.toUpperCase()}
      </Link>
    );
  }
}

function getStyle() {
  return {
    container: {
      lineHeight: '56px',
      padding: '0px 30px',
      color: UI.cText,
      textDecoration: 'none',
      fontSize: 12,
      letterSpacing: 1,
      opacity: 0.8,
    },
  };
}

LinkComp.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

LinkComp.displayName = 'LinkComp';
LinkComp.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

