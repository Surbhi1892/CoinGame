import React from 'react';
import  {Text,View} from 'react-native';
import { mainStyles } from '../Theme'
import PropTypes from 'prop-types';
import Touchable from './Touchable'
import {Icon } from 'native-base';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';

const Button = (props) =>
{
    const 
    {
        title,
        style,
        titleStyle,
        onPress,
        type,
        loading,
        isIcon,
        iconName,
        iconType,
        iconStyle,
        theme
    } = props

    return(
    <Touchable
        onPress = {onPress}    
        style={[type === 1? mainStyles.filled_button_bgnd:mainStyles.border_button_bgnd,type===2?{borderColor:theme.button,backgroundColor:"transparent"}:{backgroundColor:theme.button},style]}>
        {!loading?
           <View style={{flexDirection:"row",alignItems:"center"}}>
               {isIcon && <Icon name={iconName} type={iconType} style={[{ fontSize: 18, textAlign: "center",color: "white", },iconStyle]}/>}
               <Text style = {[mainStyles.buttonText,titleStyle,type===2?{color:theme.button}:{}]}>{title}</Text>
           </View>
          :
           <ActivityIndicator animating={true} color={"white"} />
        }
    </Touchable>
    
    )
}

Button.propTypes = 
{
    onPress:PropTypes.func,
    title:PropTypes.string,
    style:PropTypes.any,
    titleStyle:PropTypes.object,
    type:PropTypes.any,
    loading:PropTypes.bool,
    isIcon:PropTypes.bool,
    iconType:PropTypes.string,
    iconName:PropTypes.string,
    iconStyle:PropTypes.object,
}

Button.defaultProps = 
{
    title:"Button",
    onPress: function(){},
    style:{},
    type:1,
    titleStyle:{},
    loading:false,
    isIcon:false,
    iconType:"Entypo",
    iconName:"plus",
    iconStyle:{}
}

const mapStateToProps = state => 
{
    return {
    theme: state.UserReducer.theme,
  };
};

const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Button)


