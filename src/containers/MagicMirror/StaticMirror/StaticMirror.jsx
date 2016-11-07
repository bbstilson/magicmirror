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
    activeModules: PropTypes.arrayOf(PropTypes.instanceOf(Module).isRequired),
  };

  state = { 
    loading: true,
    modules: []
  };

  componentDidMount() {
    // fake api delay
    setTimeout(() => {
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
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { width, height } = this.props;
    const { loading, modules } = this.state;
    
    return (
      <div style={{ width, height }}>
        {
          loading ?
          <Loading color="#eee" size="150px" stroke="5px" /> :
          <div className="static-mirror__container">
            {modules.map((module, idx) => {
              const { Component, position, size } = module;
              const computedHeight = size.calculateHeightFrom(height);
              const computedWidth = size.square ? computedHeight : size.calculateWidthFrom(width);

              return (
                <StaticComponent
                    key={module.name}
                    component={Component}
                    position={position}
                    width={computedWidth}
                    height={computedHeight} />
              );
            })}
          </div>
        }
      </div>
    );
  }
}

/**
 * Redux
 */
function mapStateToProps ({ modules }) {
  return {
    activeModules: modules.activeModules,
  };
}


export default connect(mapStateToProps)(StaticMirror);
