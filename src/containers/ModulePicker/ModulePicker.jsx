import Module from 'components/ModulePicker/Module';
import './ModulePicker.css';

import { addModule, removeModule } from 'redux/modules/modules';
import ModuleModel from 'models/Module';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class ModulePicker extends Component {
  static propTypes = {
    activeMap: PropTypes.object.isRequired,
    activeModules: PropTypes.arrayOf(PropTypes.instanceOf(ModuleModel).isRequired),
    available: PropTypes.arrayOf(PropTypes.instanceOf(ModuleModel).isRequired)
  };

  add = (module) => {
    const { activeMap, addModule } = this.props;
    if (!activeMap[module.name]) {
      addModule(module);
    }
  };

  remove = (module) => {
    const { activeMap, removeModule } = this.props;

    if (activeMap[module.name]) {
      removeModule(module);
    }
  };

  render() {
    const { activeMap, available } = this.props;

    return (
      <div className="module-picker flex--column--center">
        <div>
          {available.map(module =>
            <Module
                key={module.name}
                add={this.add}
                remove={this.remove}
                module={module}
                active={activeMap[module.name] || false} />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ modules }) {
  return {
    activeMap: modules.activeMap,
    available: modules.available
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addModule(module) {
      dispatch(addModule(module));
    },
    removeModule(module) {
      dispatch(removeModule(module))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePicker);
