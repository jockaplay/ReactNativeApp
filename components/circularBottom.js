import { Component } from "react";
import { View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default class CircularButtom extends Component {
    constructor(props){
        super(props)
    };
    render() {
        return(
            <View style={{paddingVertical: 20, marginLeft: 20}}>
                <Ionicons style={{backgroundColor: '#f0f8ff', padding: 20, borderRadius: 40,}} name="wallet-outline" size={25} color="black" />
                <Text style={{textAlign: 'center', top: 10, fontWeight: '500'}}>{this.props.name}</Text>
            </View>
        );
    }
}