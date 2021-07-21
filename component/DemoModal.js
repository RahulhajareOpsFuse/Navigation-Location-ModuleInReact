import { RENDER } from 'ci-info'
import React from 'react'
import { View, Text, Modal, Button } from 'react-native'

class DemoModal extends React.Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    render() {
        return (
           <View style={{backgroundColor:''}}>
               <Text style={{fontSize:50}}>Original Screen</Text>
               <Button title="Show Modal" onPress={()=>{this.setState({show:true})}}/>
               <Modal visible={this.state.show}>
                   <View style={{backgroundColor:'#000000aa'}}>
                       <View style={{margin:20,borderRadius:70,backgroundColor:'yellow',alignItems:'center'}}>
                       <Text style={{fontSize:50,color:'red'}}>Popup Screen Here</Text>
                       
                       </View>
                   </View>
                   <Button title="Hide" onPress={()=>{this.setState({show:false})}}/>
               </Modal>
           </View>
        )
    }
}
export default DemoModal;