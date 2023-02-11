import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Pressable, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularButtom from './components/circularBottom';
import styles from './style';

export default function App() {

  let name = 'Jockson';
  let currency = 45485.51;
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
            <Pressable onPress={()=>{setVisible(!currencyVisible)}}><Ionicons style={styles.circle2} name={currencyVisible ? 'eye-outline' : 'eye-off-outline'} size={25} color="white" /></Pressable>
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
        <Text style={styles.h1}>{(currencyVisible) ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency) : " • • •"}</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.row}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingStart: 20, paddingEnd: 10}}>
          <CircularButtom icon='move' name='Área Pix'/>
          <CircularButtom icon='document-text-outline' name='Pagar'/>
          <CircularButtom icon='hand-left-outline' name='Emprestado'/>
          <CircularButtom icon='cash-outline' name='Transferir'/>
          <CircularButtom icon='phone-portrait-outline' name='Recarga de celular'/>
          <CircularButtom icon='archive-outline' name='Depositar'/>
          <CircularButtom icon='mail-unread-outline' name='Cobrar'/>
          <CircularButtom icon='earth' name='Internac.'/>
          <CircularButtom icon='heart-outline' name='Doação'/>
          <CircularButtom icon='trending-up-outline' name='Investir'/>
        </View>
      </ScrollView>
      <View style={styles.grayButton}>
        <Ionicons style={{flex:1}} name="card-outline" size={25} color="black" /><Text style={{flex: 9}}>Meus cartões</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.row}>
        <View style={{flexDirection:'row', paddingStart: 20}}>
        <View style={styles.grayButtonShort}>
          <Text style={{flex:  5}}><Text style={{color: '#9c44dc'}}>CDBs: opções de baixo risco</Text> para investir em 2023</Text>
        </View>
        <View style={styles.grayButtonShort}>
          <Text style={{flex:  5, fontWeight: '100'}}>Você tem até <Text style={{color: '#9c44dc'}}>R$ 2.000,00</Text> disponíveis para ...</Text>
        </View>
        <View style={styles.grayButtonShort}>
          <Text style={{flex:  5}}>Meus cartões</Text>
        </View></View>
      </ScrollView>
    </View>
  );
}