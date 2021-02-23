import React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
const Youtube = ({videoId}) => {
  return (
    <WebView style={{ marginLeft:"auto", marginRight:"auto",  width:"90%"}}  source={{ uri: `https://www.youtube.com/embed/${videoId}` }} />
  )
}
export default Youtube;