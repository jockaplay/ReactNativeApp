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
                <View style={{backgroundColor: '#f1f1f1', width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginEnd: 10}}><Ionicons name={this.props.icon} size={30} color="black" /></View>
                <Text style={{width:80, textAlign: 'center', top: 10, fontFamily: 'Roboto', fontSize: 12}}>{this.props.name}</Text>
            </View>
        );
    }
}