import React,{Component} from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {PopUpDialouge} from '../components/popupdialouge';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import {CardLayout} from '../layout/cardlayout';
import Url from '../constants/url';

export class MessageScreen extends Component{

    static navigationOptions =({navigation}) =>  ({
        title: navigation.state.routeName,
        headerLeft: null,
        headerRight:(
            <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'center', width: 100}}>   
                <Icon style={{ paddingRight: 20 }} 
                        name='search' 
                        size={20} 
                        color='black'/>
                
                <Icons style={{ paddingRight: 10 }} 
                    name='logout' 
                    size={20} 
                    color='black' />
            </View>
        ),
    });
    
    constructor(props){
        super(props);
        this.state = {
            data: {},
            loading: true
        }
        this.popDialouge = this.popDialouge.bind(this);
        this.fetchData();

    }

    componentDidMount(){
        setInterval(() => {
            this.fetchData();
        },1000);
    }

    fetchData = () => {
        let url = Url() + '/conversation/findFriends/5d6cf45db76eee444c05a5e6';
        axios
            .get(url)
            .then(res => {
                this.setState({data: res.data.result, loading: false})
            })
            .catch(err => alert(err));
    }

    popDialouge = () => {
        alert('clicked la')
    }

    navigateToUserDetails = (item) => {
        this.props.navigation.navigate('UserMessages',{
            userId: '5d6cf45db76eee444c05a5e6',
            toId: item.item.to._id,
            name: item.item.to.name
        });
    }

    renderSeparator = () => {
        return (
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "black",
              }}
            />
          );
    }

    _renderList = (item) => {
        return (
         <TouchableWithoutFeedback 
            onPress = {()=> this.navigateToUserDetails(item)}>
            <View>
                <CardLayout data = {item}/>
            </View>
         </TouchableWithoutFeedback>
        );
    
    }

    render(){
        return(
            <View style={styles.container}>
                { this.state.loading ? 
                    <ActivityIndicator size='large' color='green'/> : 
                    <FlatList
                         style={{alignSelf: 'flex-start'}}
                         data={this.state.data}
                         renderItem = { (data) => this._renderList(data)}/>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C8C8C8'
    }, 
    headerIcon:{
        padding: 10
    }
})