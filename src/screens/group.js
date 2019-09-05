import React,{Component} from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

export class GroupScreen extends Component{

    static navigationOptions =({navigation}) =>  ({
        title: navigation.state.routeName,
        headerLeft: null,
        headerRight:(
            <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'center', width: 100}}>   
                <MaterialIcons style={{paddingRight: 20}} name='group-add' size={30} color='black'/>
                
                <Icons style={{ paddingRight: 10 }} 
                    name='logout' 
                    size={20} 
                    color='black'/>
            </View>
        ),
    });

    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello Group</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})