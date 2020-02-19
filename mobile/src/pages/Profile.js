import React from 'react';
import { View } from 'react-native';
<<<<<<< HEAD
import { WebView } from 'react-native-webview';

function Profile( { navigation }){
    const githubUsername = navigation.getParam('github_username');

    return <WebView  style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }}/>
=======

function Profile(){
    return <View />
>>>>>>> a53b31248efd140c80d0fb2d0af3d9fea9021a04
}

export default Profile;