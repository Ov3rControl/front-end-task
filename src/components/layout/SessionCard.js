import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import SessionModal from './Modal';
export const SessionCard = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sessionId, setSessionId] = React.useState({});
  const sessionData = props.data.map(session => (
    <Col md={3} key={session._id}>
      {/* eslint-disable-next-line */}
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setSessionId(session);
          setModalShow(true);
        }}
      >
        <Container style={{ marginTop: '5%' }}>
          <Card>
            <div>
              <Card.Img
                variant="top"
                src="https://pbs.twimg.com/profile_images/907567664465371136/7FwiQlFu.jpg"
              />
              <div style={stageTagContainer}>
                <div style={stageTag}>
                  <label>{session.stage.name}</label>
                </div>
              </div>
              <div style={dayTagContainer}>
                <div style={dayTag}>
                  <label>
                    <Moment format="D MMM YYYY">{session.day.name}</Moment>
                  </label>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>{session.name}</Card.Title>
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
  return (
    <Row>
      {sessionData}
      {modalShow && (
        <SessionModal
          show={modalShow}
          data={sessionId}
          onHide={() => setModalShow(false)}
        />
      )}
    </Row>
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
const stageTagContainer = {
  position: 'absolute',
  top: 0,
  margin: '2%'
};
const stageTag = {
  backgroundColor: '#FBE002',
  padding: 5,
  borderRadius: 4,
  textAlign: 'center',
  fontWeight: 500
};
const dayTagContainer = {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '2%'
};
const dayTag = {
  backgroundColor: '#297eff',
  padding: 5,
  borderRadius: 4,
  textAlign: 'center',
  fontWeight: 500
};
const speakersLabel = {
  fontWeight: 600
};

export default SessionCard;
