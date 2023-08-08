import { Text, View } from "react-native";

//Styling in React -- css not allowed can be styled with the help of javascript properties like camelCase propeties e.g. backgroundColor instead backgroud-color

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'plum', padding:60 }}>
   <Text>StyleSheet API</Text>
    </View>
  );
}
