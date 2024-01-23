import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Xử lý logic đăng ký tại đây
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phonenumber:', phonenumber);
    console.log('Password:', password);
    // Sau khi xử lý đăng ký, bạn có thể thực hiện các hành động khác
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký Tài Khoản</Text>
      <Input
        placeholder="Nickname"
        onChangeText={(text) => setUsername(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="username"
      />
      <Input
        placeholder="Passwork"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Input
        placeholder="Số điện thoại"
        onChangeText={(text) => setPhonenumber(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="phonenumber"
      />
      <Input
        placeholder="Địa chỉ"
        onChangeText={(text) => setAddress(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="address"
      />
      <Button
        title="Đăng Ký"
        onPress={handleRegister}
        buttonStyle={{ backgroundColor: 'red' }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Đã có tài khoản? Đăng nhập ngay!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
