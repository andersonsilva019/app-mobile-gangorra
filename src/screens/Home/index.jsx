import * as S from './styles';
import { showMessage } from "react-native-flash-message";

import logo from '../../assets/images/logo.png'
import { useBLE } from '../../hooks/useBLE';
import { useEffect } from 'react';
import { requestAccessFineLocation } from '../../utils/permissions-android';
import { Button } from './Button';

export function Home({ navigation }) {
  const { isConnected, scanDevices, disconnectDevice } = useBLE();

  useEffect(() => {
    if (isConnected) {
      navigation.navigate('control-panel');
    }
  }, [isConnected]);

  async function navigateToControlPanel() {

    navigation.navigate('control-panel');
    try {

      showMessage({
        message: "Procurando por dispositivos...",
        duration: 3000,
        type: 'info'
      });

      const permission = await requestAccessFineLocation()

      if (permission) {
        setTimeout(async () => {
          await scanDevices();
        }, 1000)
      }

    } catch (error) {
      showMessage({
        message: error.message,
        duration: 3000,
        type: 'danger'
      });
    }
  }

  return (
    <S.Container>
      <S.Logo
        source={logo}
      />
      <S.Title>Demonstrador de controle de inclinação</S.Title>
      {isConnected ? (
        <Button text="Desconectar" onPress={disconnectDevice} />
      ) : (
        <Button text="Conectar-se a ESP32" onPress={navigateToControlPanel} />
      )}
    </S.Container>
  )
}




