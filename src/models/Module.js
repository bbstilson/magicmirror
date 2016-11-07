import { getValueByDividingBy } from 'utils/modules';

/**
 * @param {string} name - The display name used on the DraggableMirror.
 * @param {string} path - The path to the component so it can be dynamically loaded.
 * @param {string} description - The description of the module used on the ModulePicker.
 * @param {object} size - The ratio sizes for the module. E.g., { width: 2, height: 3 } signifies
 *                 that the module's width should be half the containers width and should be 1/3 the
 *                 height of the container's height. If size contains `square`, then width is set
 *                 to the same ratio as the height.
 * @param {object} custom - Any custom values.
 */
class Module {
  constructor(name, path, description, size, custom = {}) {
    this.name = name ? name : this.throwError('name');
    this.path = path ? path : this.throwError('path');
    this.description = description ? description : this.throwError('description');
    this.size = size ? this.setSize(size) : this.throwError('size');
    this.position = this.initPosition();
    this.custom = custom;
  }

  /**
   * Modules start off at (0, 0) when added to Live View.
   */
  initPosition() {
    return { top: 0, left: 0 };
  }

  /**
   * Updates the modules position.
   *
   * @param {object} The new coordinates.
   * @returm {this} Returns itself so it can be added back into the redux store.
   */
  updatePosition(newPosition) {
    this.position = newPosition;
    return this;
  }

  setSize({ width, height, square }) {
    return {
      square,
      calculateWidthFrom: !square ? getValueByDividingBy(width) : null,
      calculateHeightFrom: getValueByDividingBy(height)
    };
  }

  throwError(prop) {
    throw new Error(`Property "${prop}" was not declared in Module constructor.`);
  }
}

export default Module;
