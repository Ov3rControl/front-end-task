import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Moment from 'react-moment';

const SessionModal = props => {
  const {
    _id,
    name,
    stage,
    startingTime,
    endingTime,
    description,
    speakers
  } = props.data;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div key={_id}>
        <Modal.Header style={headerContainer}>
          <h3 style={headerLabel}>{name}</h3>
          <ul style={labelIconsContainer}>
            <li style={labelIcons}>
              <i class="fa fa-clock-o"></i>
              <Moment format="LT">{startingTime}</Moment> {' - '}
              <Moment format="LT">{endingTime}</Moment>
            </li>
            <li style={labelIcons}>
              <i class="fa fa-map-marker"></i> {stage.name}
            </li>
          </ul>
        </Modal.Header>
        <Modal.Body>
          <h6 style={speakersTitleLabel}>Session Speaker</h6>
          <hr style={speakersSeperator}></hr>
          {speakers.map(speakers => (
            <label style={speakersLabel}>{speakers.name}</label>
          ))}
          <hr style={descriptionSeperator}></hr>
          <label style={descriptionLabel}>{description}</label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Done</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};
const headerLabel = {
  color: '#254d9f',
  textTransform: 'uppercase',
  fontSize: 38,
  fontWeight: 800
};
const headerContainer = {
  display: 'flex',
  flexDirection: 'column'
};
const labelIcons = {
  marginRight: 15,
  color: '#8f8f8f',
  textTransform: 'uppercase',
  fontWeight: 600
};
const labelIconsContainer = {
  display: 'flex'
};
const speakersTitleLabel = {
  color: '#000',
  letterSpacing: 2,
  textTransform: 'uppercase',
  fontWeight: 800
};
const speakersSeperator = {
  marginLeft: 'unset',
  width: 40,
  borderTop: '3px solid rgb(10, 52, 169)'
};
const speakersLabel = {
  fontWeight: 800,
  textTransform: 'uppercase',
  color: '#254d9f',
  marginLeft: 10
};
const descriptionSeperator = {
  marginLeft: 'unset',
  width: 50,
  borderTop: '4px solid rgb(10, 52, 169)'
};
const descriptionLabel = {
  color: '#254d9f',
  fontWeight: 600,
  letterSpacing: 0.3
};
export default SessionModal;
