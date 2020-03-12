import React from 'react';
import { CardColumns, Card, Container } from 'react-bootstrap';
import Moment from 'react-moment';

import SessionModal from './Modal';
export const SessionCard = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sessionId, setSessionId] = React.useState([]);
  const sessionData = props.data.map(session => (
    <div key={session._id}>
      {/* eslint-disable-next-line */}
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setSessionId(session);
          setModalShow(true);
        }}
      >
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
              <Moment format="LT">{session.startingTime}</Moment> {' - '}
              <Moment format="LT">{session.endingTime}</Moment>
            </label>

            <div style={tagContainer}>
              {session.tags.map(tags => (
                <div style={tag}>
                  <label>{tags.name}</label>
                </div>
              ))}
            </div>
          </Card.Footer>
        </Card>
      </a>
    </div>
  ));
  return (
    <CardColumns>
      <Container>{sessionData}</Container>
      {modalShow && (
        <SessionModal
          show={modalShow}
          data={sessionId}
          onHide={() => setModalShow(false)}
        />
      )}
    </CardColumns>
  );
};

const cardFooter = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  overflow: 'hidden'
};
const tag = {
  backgroundColor: 'deepskyblue',
  padding: 5,
  borderRadius: 4,
  margin: '2%',
  textAlign: 'center'
};
const tagContainer = {
  display: 'flex',
  flexDirection: 'row'
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
  textAlign: 'center'
};
const dayTagContainer = {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '2%'
};
const dayTag = {
  backgroundColor: 'green',
  padding: 5,
  borderRadius: 4,
  textAlign: 'center'
};
const speakersLabel = {
  fontWeight: 600
};

export default SessionCard;
