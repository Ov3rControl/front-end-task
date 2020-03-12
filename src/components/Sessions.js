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
    return <SessionCard data={this.props.sessions} />;
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
