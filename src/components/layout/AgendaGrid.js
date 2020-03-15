import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import SessionModal from './Modal';
import {
  getSessionsDataByStage,
  timeToPosition,
  generateStageColor
} from '../../utils';

export const AgendaGrid = props => {
  const sessionsData = props.sessionsData;
  const stageData = props.stageData;

  const [modalShow, setModalShow] = React.useState(false);
  const [sessionId, setSessionId] = React.useState({});

  const uniqueStages = [...new Set(stageData)]; // Get unique stages togther so we can query the sessions data based on stage

  const sessionData = stageName =>
    getSessionsDataByStage(sessionsData, stageName).map(session => (
      <Col
        style={{
          position: 'absolute',
          top: timeToPosition(session.startingTime)
        }}
        key={session._id}
      >
        {/* eslint-disable-next-line */}
        <a
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setSessionId(session);
            setModalShow(true);
          }}
        >
          <Container style={{ marginTop: '1%' }}>
            <Card>
              <Card.Body>
                <Card.Title style={sessionTitle}>{session.name}</Card.Title>
                <Card.Text style={speakersLabel}>
                  {session.speakers.map(speakers => speakers.name + ',')}
                </Card.Text>
              </Card.Body>
              <Card.Footer style={cardFooter}>
                <label style={timeFeild}>
                  <Moment format="LT">{session.startingTime}</Moment> {'  '}
                  <Moment format="LT">{session.endingTime}</Moment>
                </label>

                <div style={tagContainer}>
                  {session.tags.map(tags => (
                    <div key={tags._id} style={tag}>
                      <label>{tags.name}</label>
                    </div>
                  ))}
                </div>
              </Card.Footer>
            </Card>
          </Container>
        </a>
      </Col>
    ));

  const agendaGrid = uniqueStages.map((name, index) => (
    <Col>
      <Col
        style={{
          backgroundColor: generateStageColor(index),
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          height: 85,
          color: 'white',
          marginTop: '2%'
        }}
      >
        <h3>{name}</h3>
      </Col>
      <div>{sessionData(name)}</div>
    </Col>
  ));

  return (
    <div>
      <Row style={agendaContainer}>{agendaGrid}</Row>
      {modalShow && (
        <SessionModal
          show={modalShow}
          data={sessionId}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};
const cardFooter = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  overflow: 'hidden'
};
const tag = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'pink',
  padding: 5,
  borderRadius: 4,
  marginLeft: '1%',
  marginRight: '1%',
  textAlign: 'center',
  fontWeight: 500,
  textTransform: 'uppercase'
};
const tagContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '100%'
};
const timeFeild = {
  alignSelf: 'center',
  fontWeight: 500,
  color: '4a4242'
};

const speakersLabel = {
  fontWeight: 600
};
const sessionTitle = {
  fontSize: 15,
  fontWeight: 800,
  color: '#003c86'
};

const agendaContainer = {
  minHeight: 3048,
  zoom: 0.75
};
export default AgendaGrid;
