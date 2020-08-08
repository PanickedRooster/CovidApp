import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, 
  TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { Entypo } from '@expo/vector-icons';



export default function User() {
  const [user, setUser] = useState({
    name: "Oliver Stack", age: '19', email: 'oli@hotmail.com', phone: '0431323443', address: 'U 5 55 Lang Street', post: '4329'
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.profileTop}>
          <Image source={require('../assets/Rooster.jpg')} style={{height: 200, width: 200, borderRadius: 200/2, borderColor: 'grey', borderWidth: 1}}/>
          <Text style={styles.userName}>{user.name}</Text>
          <Entypo name='dots-three-horizontal' size={40} color='#6f33ff'/>
        </View>
          <Formik
            initialValues={{ address: user.address, age: user.age, phone: user.phone, email: user.email }}
            onSubmit={(values, actions) => {
              actions.resetForm()
              console.log(values)
              setUser({address: values.address, phone: values.phone, age: values.age, email: values.email, name: user.name})
            }}
          >
            {(formikProps) => (
              <View style={styles.profileBottom}>
                <View style={styles.textBox}>
                  <Text style={styles.headers}>Address</Text>
                  <TextInput 
                    multiline
                    style={styles.search}
                    placeholder={user.address}
                    onChangeText={formikProps.handleChange('address')}
                    value={formikProps.address}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.headers}>Age</Text>
                  <TextInput 
                    style={styles.search}
                    placeholder={user.age}
                    onChangeText={formikProps.handleChange('age')}
                    value={formikProps.age}
                    keyboardType="number-pad"
                  />
                </View>
                <Text style={styles.headers}>Phone Number</Text>
                <View style={styles.textBox}>
                  <TextInput 
                    style={styles.search}
                    keyboardType="number-pad"
                    placeholder={user.phone}
                    onChangeText={formikProps.handleChange('phone')}
                    value={formikProps.phone}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.headers}>Email</Text>
                  <TextInput 
                    style={styles.search}
                    placeholder={user.email}
                    onChangeText={formikProps.handleChange('email')}
                    value={formikProps.email}
                    keyboardType="email-address"
                  />
                </View>
                <Button title="Update" color="maroon" onPress={formikProps.handleSubmit} borderRadius={50}/>
              </View>
            )}
          </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  userName: {
    fontWeight: '600',
    fontSize: 40,
    color: '#59155a',
  },
  search: {
    fontSize: 30,
    width: 400,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  }, 
  headers: {
    textAlign: "center", 
    fontSize: 30,
    color: 'grey',
  }, 
  profileTop: {
    paddingTop: 20,
    alignItems: 'center'
  },
  textBox: {
    // paddingBottom: 20,
  },
  profileBottom: {
    flex: 1,
  }
});
