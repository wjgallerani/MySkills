import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface ButtonPorps extends TouchableOpacityProps {
    title: string;
};

export function Button({ title, ...rest }: ButtonPorps) {
    return (
        <TouchableOpacity
            style={slyles.button}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={slyles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const slyles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },

});