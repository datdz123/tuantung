import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";

const StudentListScreen = () => {
  const [students, setStudents] = useState([
    { id: '1', name: 'John Doe', class: 'Class A', batch: 'Batch 2023', enrollmentDate: '2023-01-01' },
    { id: '2', name: 'Jane Smith', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '3', name: 'Jane Smith 2', class: 'Class C', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '4', name: 'Jane Smith 4', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '5', name: 'Jane Smith 5', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '6', name: 'Jane Smith 6', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '7', name: 'Jane Smith 7', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '8', name: 'Jane Smith 8', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    // Add more students as needed
  ]);

  const [visibleStudents, setVisibleStudents] = useState(5); // Số lượng học viên hiển thị ban đầu

  const handleAddStudent = () => {
    // Implement logic for adding a new student
    Alert.alert('Add Student', 'Implement logic for adding a new student');
  };

  const handleEditStudent = (id) => {
    // Implement logic for editing a student
    Alert.alert('Edit Student', `Implement logic for editing student with ID: ${id}`);
  };

  const handleDeleteStudent = (id) => {
    // Implement logic for deleting a student
    Alert.alert('Delete Student', `Implement logic for deleting student with ID: ${id}`);
  };

  const handleShowMore = () => {
    setVisibleStudents((prevVisibleStudents) => prevVisibleStudents + 5);
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.studentItem, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
      <Text style={styles.studentName}>{item.name}</Text>
      <Text style={styles.studentInfo}>{`Lớp: ${item.class}`}</Text>
      <Text style={styles.studentInfo}>{`Khóa: ${item.batch}`}</Text>
      <Text style={styles.studentInfo}>{`Ngày đến trung tâm: ${item.enrollmentDate}`}</Text>
      <View style={styles.studentActions}>
        <TouchableOpacity onPress={() => handleEditStudent(item.id)}>
          <MaterialIcons name="edit" size={24} color="#333" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteStudent(item.id)}>
          <MaterialIcons name="delete" size={24} color="#333" style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Danh sách học viên</Text>
        <TouchableOpacity onPress={handleAddStudent}>
          <MaterialIcons name="add" size={30} color="#333" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.boxSearch}>
          <Icon name={'ios-search'} size={24} color={'#000000'} style={styles.searchIcon} />
          <TextInput style={styles.txtSearch} placeholder="Tìm kiếm" placeholderTextColor="#888" />
        </View>
      </View>
      <FlatList
        data={students.slice(0, visibleStudents)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {visibleStudents < students.length && (
        <TouchableOpacity style={styles.showMoreButton} onPress={handleShowMore}>
          <Text style={styles.showMoreButtonText}>Hiển thị thêm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff'

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    marginLeft: 16,
    fontWeight: 'bold'
  },
  studentItem: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  studentInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  studentActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionIcon: {
    marginLeft: 16,
  },
  containerSearch: {
    marginBottom: 16,
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  txtSearch: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  evenItem: {
    backgroundColor: '#fff', // Màu của các mục vị trí chẵn
  },
  oddItem: {
    backgroundColor: '#ddd', // Màu của các mục vị trí lẻ
  },
  showMoreButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30
  },
  showMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default StudentListScreen;
