var s = getStyle();

import Module from 'module/module.jsx';
import Spinner from 'spinner/spinner.jsx';
import Heroshot from 'heroshot/heroshot.jsx';
import { Theatres } from 'api.js';

export default class Theatre extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true};
    this.renderModules = this.renderModules.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {this.setState({isLoading: false,});}, 2000);
  }
  renderModules() {
    return Theatres.map((module, index) => {
      return <Module key={index} item={module}/>;
    });
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <Heroshot
          title='Theatre'
          subtitle='From musicals to Shakespeare, find the best theatre in London'
          image={require('./assets/theatre.jpg')}/>
        {this.state.isLoading ?
          <Spinner /> :
          <div className='row no-margin' style={this.context.s(s.tileContainer)}>
              {this.renderModules()}
          </div>}
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
    tileContainer: {
      display: 'inline-block',
      marginTop: 40,
      tablet: {
        marginTop: 60,
      },
      desktop: {
        marginTop: 60,
      },
    },
  };
}

Theatre.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Theatre.displayName = 'Theatre';

