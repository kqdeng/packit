import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class DeviceItem extends Component {
  render() {
    const { hostname, state } = this.props.device
    return (
        <div className="media text-muted pt-3">
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Link to=""><strong className="px-4 text-gray-dark">{ hostname }</strong></Link>
                    <a className="text-danger" href="#">Delete</a>
                </div>
                <small className="px-4 d-block">{ state.toUpperCase() }</small>
            </div>
        </div>
    )
  }
}

// PropTypes: validation for properties a component should have
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired
// }

export default DeviceItem;
