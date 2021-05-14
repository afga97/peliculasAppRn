import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={ styles.container }>
            { 
                actor.profile_path && (
                    <Image 
                        source={{ uri }}
                        style={ styles.imageAvatar }
                    />
                )
            }
            <View style={ styles.containerCast }>
                <Text style={ styles.nameCast }> 
                    { actor.name }
                </Text>
                <Text style={ styles.personaje }> 
                    { actor.character }
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        marginLeft: 20,
        paddingRight: 10,
    },
    imageAvatar: {
        width: 50,  
        borderRadius: 10 
    },
    containerCast: {
        marginHorizontal: 15
    },
    nameCast: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginTop: 4
    },
    personaje: {
        fontSize: 16,
        opacity: 0.7
    }
})