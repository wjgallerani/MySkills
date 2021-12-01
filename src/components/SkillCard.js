import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={slyles.buttonSkill}>
            <Text style={slyles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    );
}


const slyles = StyleSheet.create({
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bolt',
        alignItems: 'center'
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        marginVertical: 10
    }
});