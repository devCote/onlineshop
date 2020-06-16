import React from 'react';
import Data from '../../directory.data';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: Data,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
