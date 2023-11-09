import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native'
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { useRouter, Link, router } from 'expo-router'
import axios from 'axios'
import { useState } from 'react'
import { content } from '../tailwind.config'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
const authenticateUser = async (email, password) => {
  const token = await AsyncStorage.getItem('authToken');
  const response = await fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({
    email,
    password,
  }),
});

const data = await response.json();

if (response.ok) {
  const token = data.token;
  await AsyncStorage.setItem('authToken', token);
} else {
  console.error(data.message);
}

}
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleAuthentication = () => {
  authenticateUser(email, password);
};
  const [hasLoadedFonts] = useFonts({
    Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  })
  if(!hasLoadedFonts) {
    return null
  }
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center gap-6">
      <View className='space-y-2'>
      <Text className="text-zinc-50 font-title text-center leading-tight text-2xl">
        Lista de compras
      </Text>
      <Text className='text-zinc-50 font-alt text-center p-3 leading-tight text-1xl'>Informe seu nome de usuário e senha para efetuar login no sistema</Text>
      </View>
      <View className='space-y-2 gap-3'>
      <TextInput 
       multiline
       textAlignVertical="top"
       className="p-0 font-body text-lg text-gray-50"
       placeholderTextColor="#56565a"
        placeholder="Nome de usuário"
        onChangeText={setemail}
      />
      <TextInput
       multiline
       textAlignVertical="top"
       className="p-0 font-body text-lg border-gray-800 border-r-2 text-gray-50"
       placeholderTextColor="#56565a"
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      </View>
      <TouchableOpacity activeOpacity={0.7} className='rounded-xl bg-blue-950 px-5 py-3' onPress={handleAuthentication} >
        <Text className='font-body text-sm uppercase text-white'>Login</Text>
      </TouchableOpacity>
      <Text className='font-bold absolute bottom-8 p-2 text-center text-gray-200 leading-relaxed text-sm'>Engenharia da Computação 2023</Text>
      <Text className='font-bold absolute bottom-3 p-2 text-center text-red-600 leading-relaxed text-sm'>UNIVESP</Text>
      <StatusBar style="light" translucent/>
    </View>
  )
}
