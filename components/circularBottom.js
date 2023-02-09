import { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default class CircularButtom extends Component {
    constructor(props){
        super(props)
    };
    render() {
        return(
            <View style={{paddingVertical: 20}}>
                <View style={{backgroundColor: '#f0f8ff', width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center'}}><Ionicons name="wallet-outline" size={25} color="black" /></View>
                <Text style={{textAlign: 'center', top: 10, fontWeight: '500'}}>{this.props.name}</Text>
            </View>
        );
    }
}