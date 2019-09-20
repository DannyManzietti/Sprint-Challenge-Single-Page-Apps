import React from "react";
import { Card, Icon } from "semantic-ui-react";

const EpisodeCard = props => (
  <Card>
    <Card.Content header={props.name} />
    <Card.Content description={`${props.episode} - ${props.airdate}`} />
    <Card.Content extra>
      <Icon name="user" />
      {props.characters} Characters
    </Card.Content>
  </Card>
);

export default EpisodeCard;
