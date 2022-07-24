import React, {useContext} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View>
      <HeaderTitle title="Modal screen" />

      <Button
        color={colors.primary}
        title="modal screen"
        onPress={() => setIsVisible(true)}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: colors.card,
              alignItems: 'center',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <HeaderTitle title="Modal" />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>
              Cuerpo del modal
            </Text>
            <Button
              color={colors.primary}
              title="Cerrar"
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
