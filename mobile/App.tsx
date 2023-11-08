import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
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
      <TouchableOpacity activeOpacity={0.7} className='rounded-xl bg-blue-950 px-5 py-3'>
        <Text className='font-body text-sm uppercase text-white'>Login</Text>
      </TouchableOpacity>
      <Text className='font-bold absolute bottom-8 p-2 text-center text-gray-200 leading-relaxed text-sm'>Engenharia da Computação 2023</Text>
      <Text className='font-bold absolute bottom-3 p-2 text-center text-red-600 leading-relaxed text-sm'>UNIVESP</Text>
      <StatusBar style="light" translucent/>
    </View>
  )
}
