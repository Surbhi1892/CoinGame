import React from 'react';
import { Container, Content } from 'native-base';
import { View, Text ,StatusBar  } from 'react-native';
import { useState ,useEffect, useCallback} from 'react';
import styles from './styles';
import * as  Storage from './../../Theme/Storage';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import TextField from '../../Components/TextField';

import Button from '../../Components/Button';
import { mainStyles, Colors, Fonts } from './../../Theme';
function LoginScreen(props)
{
    const { navigation  } = props
    const [username, setUsername] = useState("")
    return(
        <Container >
          <StatusBar backgroundColor={"white"} barStyle="dark-content" />
          <Content contentContainerStyle={styles.containerStyle}>
               <View style={{marginBottom:Fonts.deviceRatio*10/100,}}>
             
               <Text style={mainStyles.heading_style}>Welcome!</Text>
               <Text style={[mainStyles.basicText,{color:Colors.heading_color}]}>Enter your Phone number to continue OTP will be sent on this number for verification</Text>
               <TextField
                // leftIcon={Images.phone}
                placeholder={'Username'}
                secureTextEntry={false}
                autofocus={false}
                textInputStyle={{marginTop:20}}
                onChangeText={(text)=>onChangeText(text,"username")}
                editable={true}
                maxLength={10}     
                value={username} />
                <Button
                title={'Let\'s Play '}
                onPress={()=>validate()}
                type={1}
                style={{marginTop:Fonts.deviceHeight*4.5/100}} 
                />
               </View>
          </Content>
          {loading && <Loader />}
          
        </Container>
)

}
   

const mapDispatchToProps=dispatch=>({

})

const mapStateToProps = state => 
{
    return {
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)
