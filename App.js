import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularButtom from './components/circularBottom';
import styles from './style';

export default function App() {

  let name = 'Jockson';
  let currency = 0;
  const [currencyVisible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar 
        style='light'
      />
      <View style={styles.header}>
        <View style={styles.icons}>
          <View style={styles.left}>
            <Pressable onPress={()=>{console.log('ho')}}>
              <Ionicons style={styles.circle} name="person-outline" size={20} color="white" />
            </Pressable>
          </View>
          <View style={styles.right}>
            <Pressable onPress={()=>{setVisible(!currencyVisible)}}><Ionicons style={styles.circle2} name="eye-outline" size={25} color="white" /></Pressable>
            <Ionicons style={styles.circle2} name="help-circle-outline" size={25} color="white" />
            <Ionicons style={styles.circle2} name="mail-unread-outline" size={25} color="white" />
          </View>
        </View>
        <View style={styles.hello}>
          <Text style={{color: '#fff'}}>Olá, {name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}><Text style={styles.h2}>Conta</Text><Ionicons name="chevron-forward-outline" size={20} /></View>
        <Text style={styles.h1}>{(currencyVisible) ? 'R$ ' + (currency.toPrecision(3)).replace('.',',') : " • • •"}</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.row}>
        <View style={{flexDirection: 'row', paddingRight: 20, justifyContent: 'space-between'}}>
          <CircularButtom name='Área Pix'/>
          <CircularButtom name='Pagar'/>
          <CircularButtom name='Emprestado'/>
          <CircularButtom name='Transferir'/>
          <CircularButtom name='Recarga de celular'/>
          <CircularButtom name='Depositar'/>
          <CircularButtom name='Cobrar'/>
          <CircularButtom name='Trasferir Internac.'/>
          <CircularButtom name='Doação'/>
          <CircularButtom name='Investir'/>
        </View>
      </ScrollView>
      <View style={styles.grayButton}>
        <Ionicons name="wallet-outline" size={25} color="black" /><Text>Meus cartões</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.row}>
        <View style={styles.grayButtonShort}>
          <Ionicons name="wallet-outline" size={25} color="black" /><Text>Meus cartões</Text>
        </View>
        <View style={styles.grayButtonShort}>
          <Ionicons name="wallet-outline" size={25} color="black" /><Text>Meus cartões</Text>
        </View>
        <View style={styles.grayButtonShort}>
          <Ionicons name="wallet-outline" size={25} color="black" /><Text>Meus cartões</Text>
        </View>
      </ScrollView>
    </View>
  );
}