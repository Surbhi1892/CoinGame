import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const deviceRatio =  (deviceHeight+deviceWidth)/2

export default 
{
     typeRegular : 'Aileron-Regular',
     typeBold : 'Aileron-Bold',
     typeSemiBold : 'Aileron-SemiBold',
     deviceRatio:deviceRatio,
     deviceWidth : deviceWidth,
     deviceHeight : deviceHeight,
     font_size:deviceWidth*3.6/100,
     font_size1:deviceWidth*3.9/100,
     font_size2:deviceWidth*4.3/100,
     font_size3:deviceWidth*4.8/100,
     miniFont:deviceWidth*2.5/100,
     smallFont:deviceWidth*3/100,
     basicFont:deviceWidth*3.4/100
}



