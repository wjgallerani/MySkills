import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={slyles.buttonSkill}
            {...rest}
        >
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
        alignItems: 'center'
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        marginVertical: 10
    }
});