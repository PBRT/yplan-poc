var s = getStyle();

import Module from '../module/module.jsx';

// Main class - App
export default class Plan extends React.Component {
  constructor() {
    super();
    this.renderModules = this.renderModules.bind(this);
    this.modules = [
      {title: 'Event 1'},
      {title: 'Event 2'},
      {title: 'Event 3'},
      {title: 'Event 4'},
      {title: 'Event 5'},
      {title: 'Event 6'},
      {title: 'Event 7'},
      {title: 'Event 8'},
      {title: 'Event 9'},
    ];
  }
  renderModules() {
    return this.modules.map((module, index) => {
      return <Module key={index} item={module}/>;
    });
  }
  render() {
    return (
      <div style={this.context.s(s.container)}>
        <div className='row'>
          <div style={s.title}>Plan Page</div>
        </div>
        <div className='row no-margin' style={this.context.s(s.tileContainer)}>
          {this.renderModules()}
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
      tablet: {
        padding: 20,
      },
      desktop: {
        padding: 20,
      },
    },
  };
}

Plan.contextTypes = {
  s: React.PropTypes.func.isRequired,
};
