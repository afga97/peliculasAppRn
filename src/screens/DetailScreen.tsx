import React from 'react'
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {
    const { movie } = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                isLoading ?
                    <ActivityIndicator
                        size={35} color="grey" style={{ marginTop: 20 }}
                    />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Boton para devolver */}
            <View style={styles.backBoton}>
                <TouchableOpacity
                    onPress={ () => navigation.goBack() }
                >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={60}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    posterImage: {
        flex: 1,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backBoton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 20,
        left: 5
    }

})