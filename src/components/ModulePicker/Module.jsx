import ModuleButton from 'components/general/ModuleButton';
import ModuleDescription from './ModuleDescription';
import './Module.css';

import ModuleModel from 'models/Module';

import React, { Component, PropTypes } from 'react';

export default class Module extends Component {
  static propTypes = {
    module: PropTypes.instanceOf(ModuleModel).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
  };

  state = {
    expanded: false
  };

  toggleInfo = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { module, active } = this.props;
    const { name, description } = module;

    return (
      <div className="module__container">
        <div className="flex--row--center flex--space-between">
          <h3>{name}</h3>
          <div>
            <ModuleButton add active={active} onClick={() => { this.props.add(module) }}>Add</ModuleButton>
            <ModuleButton remove active={active} onClick={() => { this.props.remove(module) }}>Remove</ModuleButton>
            <ModuleButton primary onClick={this.toggleInfo}>Info</ModuleButton>
          </div>
        </div>
        {this.state.expanded && <ModuleDescription description={description} />}
      </div>
    );
  }
}
