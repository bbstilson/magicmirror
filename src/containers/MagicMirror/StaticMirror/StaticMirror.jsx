import StaticComponent from 'components/StaticMirror/StaticComponent';

import Module from 'models/Module';
import './StaticMirror.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-simple-loading';

class StaticMirror extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    portrait: PropTypes.bool.isRequired,
    activeModules: PropTypes.arrayOf(PropTypes.instanceOf(Module).isRequired),
    displayModuleBorders: PropTypes.bool.isRequired
  };

  state = { 
    loading: true,
    modules: []
  };

  componentDidMount() {
    Promise.all(
      this.props.activeModules.map((module) => {
        return Promise.resolve(require(`modules/${module.path}/index.js`))
          .then((m) => Promise.resolve({
            ...module,
            Component: m.default
          }));
      })
    ).then(modules => {
      this.setState({
        modules,
        loading: false
      });
    });
  }

  render() {
    const { width, height, displayModuleBorders } = this.props;
    const { loading, modules } = this.state;
    
    return (
      <div style={{ width, height }}>
        {
          loading ?
          <Loading color="#eee" size="150px" stroke="5px" /> :
          <div className="static-mirror__container">
            {modules.map((module, idx) => (
              <StaticComponent
                  key={module.name}
                  component={module.Component}
                  position={module.position}
                  custom={module.custom}
                  displayModuleBorders={displayModuleBorders} />
            ))}
          </div>
        }
      </div>
    );
  }
}

/**
 * Redux
 */
function mapStateToProps ({ modules, layout }) {
  return {
    activeModules: modules.activeModules,
    displayModuleBorders: layout.displayModuleBorders
  };
}


export default connect(mapStateToProps)(StaticMirror);
