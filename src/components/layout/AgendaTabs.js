import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

const AgendaTabs = props => {
  const [activeTab, setactiveTab] = React.useState(0);
  var filteredSessionsData = day =>
    props.sessions.filter(function(data) {
      return data.day.name === day;
    });
  const daysData = props.data.map((day, index) => (
    <Col style={activeTab === index ? activeTabStyle : tab}>
      {/* eslint-disable-next-line */}
      <a
        onClick={() => {
          setactiveTab(index);
          console.log(filteredSessionsData(day));
        }}
      >
        <h3 style={dayLabel}>
          <Moment format="D MMM YYYY">{day}</Moment>
        </h3>
      </a>
    </Col>
  ));

  return <Row style={tabsContainer}>{daysData}</Row>;
};
const Colors = {
  tab: '#ccd8e7',
  tabActive: '#003c86'
};
const tabsContainer = {
  height: 70,
  cursor: 'pointer'
};
const activeTabStyle = {
  backgroundColor: Colors.tabActive,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
};
const tab = {
  backgroundColor: Colors.tab,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center'
};
const dayLabel = { fontWeight: 800, color: 'white' };
export default AgendaTabs;
