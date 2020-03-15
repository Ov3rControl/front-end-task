import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import SessionModal from './Modal';

export const AgendaGrid = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sessionId, setSessionId] = React.useState({});
  const uniqueStages = [...new Set(props.stageData)];

  var filteredSessionsDataBasedOnStage = stage =>
    props.data.filter(function(data) {
      return data.stage.name === stage;
    });

  const timeToPosition = date => {
    let time = new Date(date);
    let hour = time.getHours();
    let min = time.getMinutes();
    switch (hour) {
      case 9:
        return 100 + min * 6;
      case 10:
        return 460 + min * 6;
      case 11:
        return 660 + min * 6;
      case 12:
        return 840 + min * 6;
      case 13:
        return 1020 + min * 6;
      case 14:
        return 1200 + min * 6;
      case 15:
        return 1380 + min * 6;
      case 16:
        return 1560 + min * 6;
      case 17:
        return 1740 + min * 6;
      case 18:
        return 1920 + min * 6;
      case 19:
        return 2100 + min * 6;
      case 20:
        return 2180 + min * 6;
      case 21:
        return 2360 + min * 6;
      case 22:
        return 2540 + min * 6;
      case 23:
        return 2720 + min * 6;
      case 24:
        return 2900 + min * 6;
      default:
        break;
    }
  };

  const sessionData = stageName =>
    filteredSessionsDataBasedOnStage(stageName).map(session => (
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
          <Container style={{ marginTop: '2%' }}>
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
  const generateColor = colorIndex => {
    switch (colorIndex) {
      case 0:
        return '#fcdf33';
      case 1:
        return '#de0060';
      case 2:
        return '#003c86';
      case 3:
        return '#ccd8e7';
      default:
        return '#ccd8e7';
    }
  };
  const stageData = uniqueStages.map((name, index) => (
    <Col>
      <Col
        style={{
          backgroundColor: generateColor(index),
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
      <Row style={agendaContainer}>{stageData}</Row>
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
