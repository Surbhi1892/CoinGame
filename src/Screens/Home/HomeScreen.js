import React, { } from 'react';
import { Container, StyleProvider, Content } from 'native-base';
import { View, Text   } from 'react-native';
import * as  Storage from './../../Theme/Storage';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';

function HomeScreen(props)
{
    const { navigation  } = props
    return(
        <Container>
            <Text>
                Login Screen
            </Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
