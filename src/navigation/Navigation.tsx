import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    // backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" options={{ cardStyle: { backgroundColor: '#EEEEEE' }}} component={DetailScreen} />
        </Stack.Navigator>
    );
}