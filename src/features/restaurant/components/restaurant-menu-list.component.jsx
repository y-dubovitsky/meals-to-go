import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

const RestaurantMenuList = () => {
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(true);
  const [isLunchOpen, setIsLunchOpen] = useState(true);
  const [isDinnerOpen, setIsDinnerOpen] = useState(true);
  const [isDrinksOpen, setIsDrinksOpen] = useState(true);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          expanded={isBreakfastOpen}
          onPress={() => setIsBreakfastOpen(!isBreakfastOpen)}
          left={props => <List.Icon {...props} icon="food" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="food" />}
          expanded={isLunchOpen}
          onPress={() => setIsLunchOpen(!isLunchOpen)}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={props => <List.Icon {...props} icon="star" />}
          expanded={isDinnerOpen}
          onPress={() => setIsDinnerOpen(!isDinnerOpen)}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={isDrinksOpen}
          onPress={() => setIsDrinksOpen(!isDrinksOpen)}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
          <List.Item title="Second item" />
          <List.Item title="Second item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default RestaurantMenuList;