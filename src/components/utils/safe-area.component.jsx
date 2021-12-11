import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  paddingTop: ${StatusBar.currentHeight && StatusBar.currentHeight + 'px'};
`;

const SafeAreaComponent = (props) => {
  return (
    <SafeArea>
      {props.children}
    </SafeArea>
  )
};

export default SafeAreaComponent;
