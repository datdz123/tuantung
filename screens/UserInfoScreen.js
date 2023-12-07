import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../constants/CustomButton';

import CalendarSreen from '../screens/CalendarScreen';



const UserInfoScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  // Dummy user data
  const [userInfo, setUserInfo] = useState({
    id: '1',
    name: 'John Doe',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
      <View
        style={{ paddingHorizontal: 25 }}>
        <View style={styles.header}>
          <Image source={{ uri: userInfo.imageUri }} style={styles.userImage} />
          <View>
            <Text style={styles.userName}>{userInfo.name}</Text>
            <Text style={styles.userRole}>Quản lý</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edituser', {
              courseId: userInfo.id,
              courseTitle: userInfo.name,
              courseImg: userInfo.imageUri,
              updateUserInfo: updateUserInfo,
            });
            
          }}>
          <View style={styles.sectionTitle1}>
            <Ionicons name="create-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Chỉnh sửa hồ sơ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Trang chủ')}}>
          <View style={styles.sectionTitle}>
            <Ionicons name="calendar-outline" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Thời khóa biểu</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Danh sách học viên')}}>
          <View style={styles.sectionTitle} >
            <Ionicons name="person" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Danh sách học viên</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Thu học phí')}}>
          <View style={styles.sectionTitle}>
            <Ionicons name="cash" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Thu học phí</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Khóa Học')}}>
          <View style={styles.sectionTitle}>
            <Ionicons name="school" size={30} color="#333" style={styles.icon} />
            <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Khóa học</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { navigation.navigate('Login');}}
          style={{
            backgroundColor: 'red',
            padding: 20,
            borderRadius: 100,
            marginBottom: 30,
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 25,
              color: '#fff',
            }}>
            {'Đăng xuất'}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
    marginTop: 30,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {

    fontSize: 30,
    fontWeight: '500',
    color: '#333',
    marginLeft: 15,
    fontWeight: 'bold',
    paddingTop: 10
  },
  userRole:{

    fontSize: 20,
    fontWeight: '500',
    color: 'orange',
    marginLeft: 15,
    fontWeight: 'bold',
    paddingTop: 10
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle1: {
    width: '100%',
    fontSize: 35,
    fontWeight: '500',
    color: '#333',
    marginBottom: 0,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  sectionTitle: {
    width: '100%',
    fontSize: 35,
    fontWeight: '500',
    color: '#333',
    marginBottom: 0,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  sectionTitleText: {
    flex: 1,
    fontSize: 25, // This allows the text to take up all available space
  },
});

export default UserInfoScreen;
