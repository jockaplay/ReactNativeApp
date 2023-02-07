import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularButtom from './components/circularBottom';
import styles from './style';

let name = 'Jockson'

export default function App() {
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
            <Ionicons style={styles.circle2} name="eye-outline" size={25} color="white" />
            <Ionicons style={styles.circle2} name="help-circle-outline" size={25} color="white" />
            <Ionicons style={styles.circle2} name="mail-unread-outline" size={25} color="white" />
          </View>
        </View>
        <View style={styles.hello}>
          <Text style={{color: '#fff'}}>Olá, {name}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.h2}>Conta</Text>
        <Text style={styles.h1}>R$ 20.514.03</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.row}>
        <CircularButtom name='Pix'/>
        <CircularButtom name='Pagar'/>
        <CircularButtom name='Transferir'/>
        <CircularButtom name='Depositar'/>
        <CircularButtom name='Cobrar'/>
      </ScrollView>
    </View>
  );
}