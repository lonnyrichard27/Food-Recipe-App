import React from "react";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="RecipeDetails">
        {() => <RecipeDetailScreen recipe={ DATA[0].recipes[1]} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
