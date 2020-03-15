import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import AgendaGrid from './AgendaGrid';
import { getSessionsDataByDay } from '../../utils';

const AgendaTabs = props => {
  const days = props.daysData;
  const sessionsData = props.sessionsData;
  const initialDay = days[0];

  const [activeTab, setactiveTab] = React.useState(0);
  const [activeDay, setActiveDay] = React.useState(initialDay);

  // Get single days to render agenda days tabs
  const agendaTabs = days.map((day, index) => (
    <Col style={activeTab === index ? activeTabStyle : tab}>
      {/* eslint-disable-next-line */}
      <a
        onClick={() => {
          setactiveTab(index); // Set the Currently Selected Tab
          setActiveDay(day); // Set the Currently Selected Day
        }}
      >
        <h3 style={dayLabel}>
          <Moment format="ddd D MMM">{day}</Moment>
        </h3>
      </a>
    </Col>
  ));

  return (
    <div>
      <Row style={tabsContainer}>{agendaTabs}</Row>
      <AgendaGrid
        stageData={getSessionsDataByDay(sessionsData, activeDay).map(
          stage => stage.stage.name
        )}
        sessionsData={getSessionsDataByDay(sessionsData, activeDay)}
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
