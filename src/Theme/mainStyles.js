import {StyleSheet,Dimensions} from 'react-native';
import Colors from './Colors'
import Fonts from './Fonts'
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height


export default mainStyles = StyleSheet.create(
{
    heading_style:
    {
        fontSize:Fonts.headingFont,
        fontFamily:Fonts.typeBold,
        color:Colors.heading_color,
        marginTop:deviceHeight*5/100,
        marginBottom:deviceHeight*3/100
    },
    basicText:
    {
          fontSize:Fonts.basicFont,
          fontFamily:Fonts.typeRegular,
          color:Colors.dark_grey 
    },



});
