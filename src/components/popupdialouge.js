import React,{Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';

export class PopUpDialouge extends Component{

    constructor(props){
        alert(props);
        this.state = {
            visible: props.visible
        }
    }

    componentDidMount(){
        alert(this.state.visible);
    }

    render(){
        return(
            <View style={styles.container}>
                <Dialog
                    onDismiss={() => {
                        this.setState({ visible: false });
                    }}
                    width={0.9}
                    visible={this.state.defaultAnimationDialog}
                    rounded
                    actionsBordered
                    dialogTitle={
                        <DialogTitle
                            title="Popup Dialog - Default Animation"
                            style={{
                                backgroundColor: '#F7F7F8',
                            }}
                            hasTitleBar={false}
                            align="left"
                        />
                    }
                    footer={
                        <DialogFooter>
                        <DialogButton
                            text="CANCEL"
                            bordered
                            onPress={() => {
                            this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-1"
                        />
                        <DialogButton
                            text="OK"
                            bordered
                            onPress={() => {
                            this.setState({ defaultAnimationDialog: false });
                            }}
                            key="button-2"
                        />
                        </DialogFooter>
                    }
                    >
                    <DialogContent
                        style={{
                        backgroundColor: '#F7F7F8',
                        }}
                    >
                        <Text>Default Animation</Text>
                        <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>
                    </DialogContent>
                </Dialog>
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