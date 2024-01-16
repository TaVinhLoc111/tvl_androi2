import React from 'react';
import { Header as HeaderRNE, Input, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <HeaderRNE
      backgroundColor="red"
      containerStyle={{
        position: 'absolute',
        top: 0,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        alignItems: 'center', // Căn giữa dọc
        justifyContent: 'center', // Căn giữa ngang
      }}
    >
      <Input
        placeholder='Tìm kiếm...'
        leftIcon={
          <Icon
            name='search'
            size={30}
            color='green'
          />
        }
        inputStyle={{ color: 'black' }}
        containerStyle={{
          paddingHorizontal: 10,
          marginHorizontal: 0,
          width: 380,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'green',
          height: 50,
          backgroundColor: 'black', // Màu nền trắng
        }}
        inputContainerStyle={{ borderBottomWidth: 0 }}
      />


    </HeaderRNE>
  );
};

export default Header;
