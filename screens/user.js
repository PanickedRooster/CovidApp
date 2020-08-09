import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, 
  TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { Entypo } from '@expo/vector-icons';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ProfileSchema = yup.object({
  address: yup.string()
    .required(),
  age: yup.string()
    .required()
    .test('is-age-valid', 'Age must be between 1-99', (val) => {
      return parseInt(val) < 99 && parseInt(val) > 1;
    }),
  phone: yup.string()
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string()
    .required()
    .email()
})


export default function User() {
  const [user, setUser] = useState({
    name: "Oliver Stack", age: '19', email: 'oli@hotmail.com', phone: '0418661264', address: 'U 5 55 Lang Street', post: '4329'
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.profileTop}>
          <Image source={require('../assets/Rooster.jpg')} style={{height: 200, width: 200, borderRadius: 200/2, borderColor: 'white', borderWidth: 4}}/>
          <Text style={styles.userName}>{user.name}</Text>
          <Entypo name='dots-three-horizontal' size={40} color='#eee'/>
        </View>
          <Formik
            initialValues={{ address: '', age: '', phone: '', email:'' }}
            validationSchema={ProfileSchema}
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
                    placeholderTextColor='#8898aa'
                    onChangeText={formikProps.handleChange('address')}
                    value={formikProps.address}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.headers}>Age</Text>
                  <TextInput 
                    style={styles.search}
                    placeholder={user.age}
                    placeholderTextColor='#8898aa'
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
                    placeholderTextColor='#8898aa'
                    onChangeText={formikProps.handleChange('phone')}
                    value={formikProps.phone}
                  />
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.headers}>Email</Text>
                  <TextInput 
                    style={styles.search}
                    placeholder={user.email}
                    placeholderTextColor='#8898aa'
                    onChangeText={formikProps.handleChange('email')}
                    value={formikProps.email}
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.submitContainer}>
                  <TouchableOpacity style={styles.submitButton} activeOpacity={0.8} onPress={formikProps.handleSubmit}>
                    <Text style={{color: '#8898aa', fontSize: 25, textAlign: 'center'}}>Update</Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: '#5e72e4',
  },
  userName: {
    fontWeight: '600',
    fontSize: 40,
    color: 'white',
  },
  submitButton: {
    borderRadius: 12, 
    elevation: 2, 
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    paddingVertical: "5%",
    borderRadius: 10,
    backgroundColor: 'white',
  },
  submitContainer: {
    paddingTop: "10%"
  },
  search: {
    fontSize: 30,
    width: "100%",
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
  }, 
  headers: {
    textAlign: "center", 
    fontSize: 30,
    color: '#eee',
  }, 
  profileTop: {
    paddingTop: 20,
    alignItems: 'center'
  },
  profileBottom: {
    flex: 1,
  }
});
