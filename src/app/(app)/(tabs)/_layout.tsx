import AntDesign from '@expo/vector-icons/build/AntDesign';
import { Tabs } from 'expo-router'
function Layout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" 
        options={{ 
            headerShown: false , 
            title: 'Home' ,
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color={color} size={size} />
            ),
            }} 
            />
    </Tabs>
  );
}

export default Layout ;