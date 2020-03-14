import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSessions } from '../actions/sessionActions';
import AgendaTabs from './layout/AgendaTabs';

class Sessions extends Component {
  componentDidMount() {
    this.props.fetchSessions();
  }
  render() {
    const { sessions } = this.props;
    const days = sessions.map(days => days.day.name);
    const uniqueDays = [...new Set(days)];
    if (sessions.length) {
      return (
        <div>
          <AgendaTabs sessions={sessions} data={uniqueDays} />
        </div>
      );
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
  sessions: state.sessions.data
});

export default connect(mapStateToProps, { fetchSessions })(Sessions);
