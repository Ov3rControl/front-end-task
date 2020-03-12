import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SessionModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={headerContainer}>
        <h3 style={headerLabel}>The Best Event Ever</h3>
        <ul style={labelIconsContainer}>
          <li style={labelIcons}>
            <i class="fa fa-clock-o"></i> 13:25 - 14:00
          </li>
          <li style={labelIcons}>
            <i class="fa fa-map-marker"></i> Creative Stage
          </li>
        </ul>
      </Modal.Header>
      <Modal.Body>
        <h6 style={speakersTitleLabel}>Session Speaker</h6>
        <hr style={speakersSeperator}></hr>
        <label style={speakersLabel}>Mohamed Adel</label>
        <label style={speakersLabel}>Mohamed Adel</label>
        <hr style={descriptionSeperator}></hr>
        <label style={descriptionLabel}>
          Time to introduce Excuse My Content's new venture. SYNC is here to
          change the idea of creativity and answer the age old question of "how
          do I break into the creative field?"
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
}
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
