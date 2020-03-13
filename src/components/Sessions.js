import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSessions } from '../actions/sessionActions';
import SessionCard from './layout/SessionCard';

class Sessions extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }
  render() {
    const { sessions } = this.props;
    if (sessions.length) {
      return <SessionCard data={sessions} />;
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Sorry There is No Sessions Available Now. Try Again Later</h1>
        </div>
      );
    }
  }
}
Sessions.propTypes = {
  fetchSessions: PropTypes.func.isRequired,
  sessions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sessions: state.sessions.items
});

export default connect(mapStateToProps, { fetchSessions })(Sessions);
