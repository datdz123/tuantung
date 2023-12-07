import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../constants/InputField';
import CustomButton from '../constants/CustomButton';


const LoginScreen = ({ navigation }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
      
          <Image
              source={require("../assets/images/LoginScreen/login_logo.jpg")}
              style={{
                  height: 200,
                  width: 200,
                  marginRight: 8,
                  borderRadius: 10
              }}
              resizeMode='contain'
          />
          <Text
            style={styles.txtLogiTitle}>
            Đăng nhập
          </Text>

        </View>

       

        <InputField
          label={'Email đăng nhập'}
          style={styles.inputField1}
          icon={
            <Ionicons
              name="mail"
              size={20}
              color="#666"
              style={{ marginRight: 5, fontSize: 40 }}
            />
          }
          keyboardType="email-address"
        />


        <InputField
          label={'Mật khẩu'}
          style={styles.inputField}
          icon={
            <Ionicons
              name="ios-lock-closed"
              size={20}
              color="#666"
              style={{ marginRight: 5, fontSize: 40, }}
            />
          }
          inputType="password"
          
        />

        <CustomButton label={"Đăng nhập"} onPress={() => { navigation.navigate('MainTab');}} />
        {/* <CustomButton label={"Đăng nhập"} onPress={() => { navigation.navigate('StudentList')}} />
        <CustomButton label={"Đăng nhập"} onPress={() => { navigation.navigate('CourseList')}} /> */}

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <View>
              <Text
            style={{
                flexDirection: 'row',
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 50,
                fontSize: 20
              }}>Quên mật khẩu</Text>
          </View>
        </TouchableOpacity>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 100,
            fontSize: 30,
          }}>
          <Text style={{fontSize: 20}}>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#00cccc', fontWeight: '700', fontSize: 20, }}> Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtLogiTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10, marginTop: 10 
  },


});



export default LoginScreen;
