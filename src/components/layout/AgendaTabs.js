import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import AgendaGrid from './AgendaGrid';

const AgendaTabs = props => {
  const initialDay = props.data[0];
  const [activeTab, setactiveTab] = React.useState(0);
  const [activeDay, setActiveDay] = React.useState(initialDay);
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
          setActiveDay(day);
        }}
      >
        <h3 style={dayLabel}>
          <Moment format="D MMM YYYY">{day}</Moment>
        </h3>
      </a>
    </Col>
  ));

  return (
    <div>
      <Row style={tabsContainer}>{daysData}</Row>
      <AgendaGrid
        stageData={filteredSessionsData(activeDay).map(
          stage => stage.stage.name
        )}
        data={filteredSessionsData(activeDay)}
      />
    </div>
  );
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
