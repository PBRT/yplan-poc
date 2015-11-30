var s = getStyle();

import Module from 'module/module.jsx';
import Heroshot from 'heroshot/heroshot.jsx';
import Spinner from 'spinner/spinner.jsx';
import { Films } from 'api.js';

export default class Film extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true};
    this.renderModules = this.renderModules.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {this.setState({isLoading: false,});}, 1000);
  }
  renderModules() {
    return Films.map((module, index) => <Module key={index} item={module}/>);
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <Heroshot
          title='Film'
          subtitle='Cinema tickets, outdoor movies and pop-up screenings – book London’s best film events'
          image={require('./assets/film.jpg')}/>
        {this.state.isLoading ? <Spinner /> :
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

Film.contextTypes = {
  s: React.PropTypes.func.isRequired,
};

Film.displayName = 'Films';
