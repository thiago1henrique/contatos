import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },

        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="cadastro/index" options={{ title: 'Cadastro' }} />
      <Stack.Screen
        name="home/index"
        options={{ title: 'Lista de contato', headerShown: false }}
      />
      <Stack.Screen name="editar/index" options={{ title: 'Editar' }} />
    </Stack>
  );
}
