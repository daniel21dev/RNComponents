import React, {useContext} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {Platform} from 'react-native';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

export const TextInputScreen = () => {
  const {email, name, isSubscribed, phone, onChange, form} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <HeaderTitle title="TextInput" />
            <TextInput
              value={name}
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.border,
              }}
              placeholder="Ingrese su nombre"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={text => onChange(text, 'name')}
            />
            <TextInput
              value={email}
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.border,
              }}
              keyboardType="email-address"
              placeholder="ingrese su email"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              onChangeText={text => onChange(text, 'email')}
            />

            <TextInput
              value={phone}
              style={{
                ...stylesScreen.inputStyle,
                color: colors.text,
                borderColor: colors.border,
              }}
              keyboardType="phone-pad"
              placeholder="ingrese su telefono"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              onChangeText={text => onChange(text, 'phone')}
            />
          </TouchableWithoutFeedback>

          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>
              suscribirse: {isSubscribed}
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <Text style={{fontSize: 30, color: colors.text}}>
            {JSON.stringify(form, null, 5)}
          </Text>
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 5,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
