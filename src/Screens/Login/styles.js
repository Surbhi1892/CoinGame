import {StyleSheet} from 'react-native';
import { Fonts,Colors } from './../../Theme';

export default styles = StyleSheet.create(
    {
        containerStyle:
        {
             flex: 1,
             backgroundColor:"white",
             paddingHorizontal:"8%",
             justifyContent:"center"
        },

        container_style:
        {
            marginHorizontal:30
        },
        forgot_text:
        {
            marginTop:10,
            textAlign:'right',
            color:Colors.dark_grey
        },
        no_account:
        {
            marginTop:Fonts.deviceHeight*7/100,
            textAlign:'center',
            fontSize:Fonts.font_size1,
            color:Colors.dark_grey
        },
        underlineStyle:
        {
            height:3,backgroundColor:"red",borderRadius:10
        },

        tabIconStyle:
        {
            height:18,width:18,marginRight:5
        }
       
    }
)