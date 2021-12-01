import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

//SafeAreaView: em caso de IOS ele suprime a parte de cima, onde tem o detalhe.
//TouchableOpacity: Efeito de quando clica ficar um pouco transparente
//useState(estado inicial): [estado, função]: Armazenamento do estado 
//useEffect: executado no momento de fazer a montagem do componente.
//handle: usar quando a funcção é disparada por uma ação do usuário

//ScrollView: Para pequenas listas
//FlatList: Para listas grandes

export function Home() {
    const [newSkill, setNewSkill] = useState(''); //Para a informação do campo
    const [mySkills, setMySkills] = useState([]); // Para listar
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        }
        else if (currentHour >= 12 && currentHour < 0) {
            setGreeting('Good afternoon');
        }
        else {
            setGreeting('Good Nigth');
        }
    }, []);

    return (
        <SafeAreaView style={slyles.container}>

            <Text style={slyles.title}> Welcome, React Native</Text>

            <Text style={StyleSheet.greetings}>
                {greeting}
            </Text>

            <TextInput
                style={slyles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[slyles.title, { marginVertical: 25 }]}>
                Mey Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item} />
                )}
            />

        </SafeAreaView >
    );
}

const slyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7 // Cantos arredondados
    },
    greetings: {
        color: '#FFF'
    }
});