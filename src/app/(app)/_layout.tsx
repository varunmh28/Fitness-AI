import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'

function Layout() {

  const {isLoaded,isSignedIn,userId,sessionId,getToken} = useAuth();
   console.log("isSignedIn >>> ",isSignedIn);

  


  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false  }} />
        </Stack>
  )
}

export default Layout
