import React,{Component} from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import axios from 'axios';

export class MessageLayout extends Component{
   
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

    checkUserId = (changedId) => {
        let userId = this.props.userId;
        return userId === changedId;
    }

    render(){
        let userDetails = this.props.data.item;
        let userId = this.props.userId;

        return(
            <View style={styles.container} >
                <View style={{ marginRight: 
                                    this.checkUserId(userDetails.from) ?
                                    8 : 0 }}>
                    <View>
                        <Text style= {[styles.message,
                                { alignSelf: this.checkUserId(userDetails.from) ?
                                'flex-end':'flex-start',
                                backgroundColor: this.checkUserId(userDetails.from)?
                                '#50C878': 'blue',
                                maxWidth: '75%'}]}>
                            {userDetails.message}
                        </Text>
                    </View>
                    <Text style={{
                                    fontSize: 12, 
                                    color: 'gray',
                                    alignSelf: 
                                            this.checkUserId(userDetails.from) ?
                                                'flex-end':'flex-start',
                                    marginRight: 
                                            this.checkUserId(userDetails.from) ?
                                            4:0,
                                }}
                    >
                        {this.formatDate(userDetails.added_date)}
                    </Text>
                 </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 2,
        width: Dimensions.get('screen').width,
        padding: 8,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    message: {
        padding: 8, 
        color: 'white', 
        fontSize: 16,
        borderRadius: 16
    }
})