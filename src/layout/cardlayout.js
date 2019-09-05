import React,{Component} from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import axios from 'axios';

export class CardLayout extends Component{
   
    constructor(props){
        super(props);
    }

    formatDate = (date) => {
        let messageDate = new Date(date);
        let hour = messageDate.getHours();
        let minutes = messageDate.getMinutes();
        let ampm = hour >= 12 ? 'PM':'AM';

        let receivedDate = hour + ":" + minutes + " " + ampm;
        return receivedDate;
    }

    render(){
        let userDetails = this.props.data.item;
        return(
            <View style={styles.container} >

                <Text style={{fontSize: 20}}>{userDetails.to.name}</Text>
                <Text style={{fontSize: 10, color: 'gray'}} >{this.formatDate(userDetails.added_date)}</Text>
                <Text style={{fontSize: 14, paddingTop: 10, color: 'black'}} >{userDetails.message}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 4,
        width: Dimensions.get('screen').width,
        padding: 8,
        borderColor: 'white',
        backgroundColor: 'white'
    }
})