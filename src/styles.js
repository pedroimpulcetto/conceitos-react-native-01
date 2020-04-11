import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f8f9f9;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
`;

export const Editor = styled.View`
  flex-direction: row;
`;

export const Box = styled.View`
  flex: 1;
  margin: 10px;
  height: 50px;
  background: #737373;
  justify-content: center;
  align-items: flex-start;
  border-color: #fff;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
`;

export const Button = styled.TouchableOpacity`
  margin: 20px;
  background: #f8c471;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin: 10px;
  font-size: 20px;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding-left: 20px;
`;

export const Edit = styled.TouchableOpacity`
  background: #f8c471;
  margin: 10px;
  border-radius: 5px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;
