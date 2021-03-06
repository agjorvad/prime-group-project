
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class Partner extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && (this.props.user.userName === null || this.props.user.userRole !== 'partner')) {
      this.props.history.push('login');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Partner Page
          </p>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Partner);