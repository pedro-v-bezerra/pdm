import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/snack-icon.png')}/>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder={'E-mail'} keyboardType={'email-address'} />
      <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} />
      <Button style={styles.button} title="Entrar"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input:{
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  logo:{
    alignSelf: 'center',
    width: 72,
    height: 72,
  },
  title:{
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 28,
    paddingBottom: 24,
    paddingTop: 24,
  },
});
export default Login;
