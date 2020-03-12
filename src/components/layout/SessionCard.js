import React from 'react';
import { CardColumns, Card, Container } from 'react-bootstrap';
function SessionCard() {
  return (
    <CardColumns>
      <Container>
        <a style={{ cursor: 'pointer' }} onClick={() => alert('')}>
          <Card>
            <div>
              <Card.Img
                variant="top"
                src="https://pbs.twimg.com/profile_images/907567664465371136/7FwiQlFu.jpg"
              />
              <div style={stageTagContainer}>
                <div style={stageTag}>
                  <label>AUC Stage</label>
                </div>
              </div>
              <div style={dayTagContainer}>
                <div style={dayTag}>
                  <label>18 March 2020</label>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title>The Best Event Ever</Card.Title>
              <Card.Text style={speakersLabel}>
                Mohamed Ahmed, Mohamed Adel, Mohamed Adel
              </Card.Text>
            </Card.Body>
            <Card.Footer style={cardFooter}>
              <label style={timeFeild}>18:00 - 18:35</label>

              <div style={tagContainer}>
                <div style={tag}>
                  <label>TECH</label>
                </div>
                <div style={tag}>
                  <label>GAMING</label>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </a>
      </Container>
    </CardColumns>
  );
}
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
