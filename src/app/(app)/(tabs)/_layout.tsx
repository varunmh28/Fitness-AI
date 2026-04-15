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

        <Tabs.Screen name='exercises'    
        options={{
            title: 'Exercises',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="book" color={color} size={size} />
            ),
        }}
        />

        <Tabs.Screen name='workout'
        options={{
            title: 'Workout',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="calendar" color={color} size={size} />
            ),
        }}
        />

        <Tabs.Screen name='active-workout'
        options={{
            title: 'Active Workout',
            headerShown: false,
            href :null,
            tabBarStyle: {
                display: 'none',
            },
        }}
        />

        <Tabs.Screen name='history'
        options={{
            title: 'History',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="clockcircleo" color={color} size={size} />
            ),
        }}
        />

        <Tabs.Screen name='profile/index'
        options={{
            title: 'Profile',
            headerShown: false,
            // tabBarIcon: ({ color, size }) => (
            //     <Image  
            //     source={source=user?.imageUrl ?? user?.externalAccounts[0]?.imageUrl}
            //     className="rounded-full"
            //     style={{ width: 28, height: 28, borderradius: 100 }}
            //     />
            // ),
        }}
        />
    </Tabs>
  );
}

export default Layout ;