import React from 'react';
import { View, TextInput, Text } from 'react-native';
// import LeftIcon from './LeftIcon';
import PropTypes from 'prop-types';
import { mainStyles, Colors } from '../Theme';
// import RightIcon from './RightIcon';

const TextField = (props) => {

    const {
        placeholder,
        leftIcon,
        editable,
        autofocus,
        onEndEditing,
        rightIcon,
        type,
        maxLength,
        secureTextEntry,
        onChangeText,
        keyboardtype,
        value,
        textInputStyle,
        placeholderTextColor,
        ref
    } = props

    
    return (
        <View style={[mainStyles.textfield, textInputStyle]}>
          <TextInput
                ref={ref}
                style={[mainStyles.textInputStyle, {color:editable?Colors.dark_grey:Colors.grayColor}]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                returnKeyType="done"
                editable={editable}
                value={value}
                autoFocus={autofocus}
                keyboardType={keyboardtype}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => onChangeText(text)}
                onEndEditing={() => onEndEditing()} />
               </View> 
    )
}



TextField.propTypes =
{
    onChangeText: PropTypes.func,
    onEndEditing: PropTypes.func,
    placeholder: PropTypes.string,
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    autoFocus: PropTypes.bool,
    textInputStyle: PropTypes.object,
    value: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.number,
    ref: PropTypes.string

}

TextField.defaultProps =
{
    onChangeText: function () { },
    onEndEditing: function () { },
    placeholder: "",
    leftIcon: undefined,
    rightIcon: undefined,
    editable: true,
    secureTextEntry: false,
    keyboardType: "default",
    autoFocus: false,
    textInputStyle: {},
    value: "",
    rightIcon: undefined,
    placeholderTextColor: Colors.grey_text,
    type: "0",
    maxLength: undefined,
    ref: undefined
}

export default TextField;



