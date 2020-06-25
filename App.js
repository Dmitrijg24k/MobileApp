import * as React from 'react';
import {TouchableHighlight, AsyncStorage, Button, Text, TextInput, View, Image,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{flex:1, backgroundColor:'#E6E6FA'}}>
    <View style={{padding:"3%"}}>
    <TouchableHighlight style={{padding: 15,backgroundColor:'#FFFF',marginBottom:10, borderRadius:7}} onPress={() => navigation.navigate('Details')}><View style={{flexDirection:"row"}}>
            <Image style={{
          width: 50,
          height: 50,
        }} source={{uri:'https://s1.iconbird.com/ico/2014/1/606/w128h1281390848184graduationcap128.png'}}/>
            <View><Text style={{fontSize: 15,padding:3}}> Школа № 125 </Text>
            <Text style={{fontSize: 10,padding:3,marginLeft:2}}> ул Новгородняя 25 </Text></View></View>
    </TouchableHighlight>
    <TouchableHighlight style={{alignItems: 'center',padding: 15,backgroundColor:'#F0F8FF',borderRadius:7}} onPress={signOut}>
            <Text style={{fontSize: 20,}}> Выйти </Text>
          </TouchableHighlight>
    </View>          
    </View>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{flex: 1, paddingHorizontal: 10,backgroundColor:'#FFFFFF'}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: "19%",
        }}>
      <Image style={{
          resizeMode: 'stretch',
          width: "90%",
          height: "55%",
        }} source={{uri:'https://roditelskiy.site/assets/files/logo_1.png'}}/>
        </View>
        <View style={{height: "25%", paddingTop:'10%'}} > 
         <Text style={{
           color: '#000c',
           fontWeight: 'bold',
           fontSize: 35,
           paddingLeft:'10%',
           }}>Добро {'\n'}пожаловать</Text>
        </View>
        <View style={{height: "50%",paddingLeft:'10%'}}>
        <TextInput style={{height: 50, width:'90%',
         fontSize: 20, 
         borderBottomColor: '#000c',
         borderBottomWidth: 1,
         marginBottom: 8,}}
          placeholder="E-mail"
          value={username}
        onChangeText={setUsername}/>
          <TextInput style={{height: 50, width:'90%',
         fontSize: 20, 
         borderBottomColor: '#000c',
         borderBottomWidth: 1,
         marginBottom: 10,
         marginTop:'7%'}}
          placeholder="Пароль"
          value={password}
        onChangeText={setPassword}/>
        <View style={{paddingLeft:'10%', flexDirection: 'row-reverse'}}>
          <Button
            onPress={() => navigation.navigate('Details')}
            title="Забыли пароль?"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10, marginRight:'9%'}}>
          <TouchableHighlight style={{alignItems: 'center', backgroundColor: '#1E90FF',padding: 15,borderRadius:20}} onPress={() => signIn({ username, password })}>
            <Text style={{color: '#FFFFFF',fontWeight: 'bold',fontSize: 20,}}> Войти </Text>
          </TouchableHighlight>
        </View>
        </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor:'#E6E6FA'}}>
    <ScrollView>
    <View style={{backgroundColor:'#E6E6FA',margin:1}}>
    <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 25,margin:8}}>Школа 125</Text>
    <Text style={{color: '#A9A9A9',
    fontSize: 15,margin:8}}>ул Новогородняя 25</Text>
    <View style={{padding:"3%",}}>
    <TouchableHighlight style={{padding: 10,backgroundColor:'#FFFF',marginBottom:10, borderRadius:7,}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Image style={{
          width: 50,
          height: 50,
        }} source={{uri:'https://image.flaticon.com/icons/png/512/44/44476.png'}}/>
            <View><Text style={{fontSize: 15,padding:3,margin:10}}>Архив с записями</Text>
            </View>
            </View>
    </TouchableHighlight>
    <Text style={{color: '#000c',
    fontSize: 17,margin:8, fontWeight:"bold"}}>Online камера</Text>
    <View style={{flex:1,flexDirection:"row",}}>
    <TouchableHighlight style={{backgroundColor:'#00FF00', borderRadius:20,paddingRight:35,marginRight:10}} onPress={() => navigation.navigate('Details')}>
    <Text style={{fontSize: 15,padding:3,margin:10,marginLeft:35}}>Группы</Text>
    </TouchableHighlight>
    <TouchableHighlight style={{alignItems: 'center',backgroundColor:'#FFFF', borderRadius:20,paddingRight:35,marginRight:10,}} onPress={() => navigation.navigate('Cabinet')}>
            <Text style={{fontSize: 15,padding:3,margin:10,marginLeft:35}}>Кабинеты</Text>
    </TouchableHighlight>
    </View>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:20,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>9 А класс</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>10 А класс</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>11 А класс</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>8 А класс</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>7 А класс</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>6 А класс</Text>
            </View>
    </TouchableHighlight>
    </View>
    </View>
    </ScrollView>
    </View>
  );
}

function Cabinet({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor:'#E6E6FA'}}>
    <ScrollView>
    <View style={{backgroundColor:'#E6E6FA',margin:1}}>
    <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 25,margin:8}}>Школа 125</Text>
    <Text style={{color: '#A9A9A9',
    fontSize: 15,margin:8}}>ул Новогородняя 25</Text>
    <View style={{padding:"3%",}}>
    <TouchableHighlight style={{padding: 10,backgroundColor:'#FFFF',marginBottom:10, borderRadius:7,}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Image style={{
          width: 50,
          height: 50,
        }} source={{uri:'https://image.flaticon.com/icons/png/512/44/44476.png'}}/>
            <View><Text style={{fontSize: 15,padding:3,margin:10}}>Архив с записями</Text>
            </View>
            </View>
    </TouchableHighlight>
    <Text style={{color: '#000c',
    fontSize: 17,margin:8, fontWeight:"bold"}}>Online камера</Text>
    <View style={{flex:1,flexDirection:"row",}}>
    <TouchableHighlight style={{backgroundColor:'#FFFF', borderRadius:20,paddingRight:35,marginRight:10}} onPress={() => navigation.navigate('Details')}>
    <Text style={{fontSize: 15,padding:3,margin:10,marginLeft:35}}>Группы</Text>
    </TouchableHighlight>
    <TouchableHighlight style={{alignItems: 'center',backgroundColor:'#00FF00', borderRadius:20,paddingRight:35,marginRight:10,}} onPress={() => navigation.navigate('Cabinet')}>
            <Text style={{fontSize: 15,padding:3,margin:10,marginLeft:35}}>Кабинеты</Text>
    </TouchableHighlight>
    </View>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:20,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>Кабинет Информатики</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>121</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>122</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>123</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>124</Text>
            </View>
    </TouchableHighlight>
    <TouchableHighlight style={{backgroundColor:'#FFFF',marginTop:10,borderRadius:7}} onPress={() => navigation.navigate('Online')}>
    <View style={{flexDirection:"row"}}>
            <Text style={{fontSize: 15,padding:17}}>125</Text>
            </View>
    </TouchableHighlight>
    </View>
    </View>
    </ScrollView>
    </View>
  );
}

function OnlineCam({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'#E6E6FA',}}>
      <View style={{ backgroundColor:'#E6E6FA', marginLeft:10}}>
      <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 30,}}> Школа №125</Text>
      <Text style={{color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 15,}}>  Новгородная 25</Text>
      </View>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "50%",
        margin:18,
        paddingTop:30,
        paddingBottom:100,
        backgroundColor:'#FFFFFF',
        borderRadius:10
        }}>
        <Image style={{
          resizeMode: 'stretch',
          width: "90%",
          height: "50%",
          marginTop:40,
          paddingTop:'50%'
        }} source={{uri:'https://sokol.mos.ru/upload/medialibrary/b96/foto_na_1_sentyabrya_v_1_klass.png'}}/>
        <View style={{
        flexDirection: 'column',
        justifyContent: 'center',}}><Text style={{color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 15,}}>Камера 1</Text>
        <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 15,}}>Расписание онлайн трансляции</Text>
        <Text style={{color: '#A9A9A9',
    fontSize: 15,}}>Понедельник</Text>
        <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 15,}}>08:00 - 16:00</Text>
        <Text style={{color: '#000c',
    fontWeight: 'bold',
    fontSize: 15,}}>08:00 - 16:00</Text>
        <TouchableHighlight style={{alignItems: 'center', backgroundColor: '#1E90FF',paddingLeft:50,paddingRight:50, borderRadius:20}} onPress={() => navigation.navigate('Online')}>
            <Text style={{color: '#FFFFFF',fontWeight: 'bold',fontSize: 20,}}> Online</Text>
          </TouchableHighlight>
        </View>
        </View>
        <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'100%',
        }}>
      <Button
        title="Go home"
        onPress={() => navigation.popToTop()}
      />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Объекты" component={HomeScreen} />
          )
          }
          <Stack.Screen name="Details" component={DetailsScreen} 
          options={{
                title: 'Площадка',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}/>
          <Stack.Screen name="Cabinet" component={Cabinet} 
          options={{
                title: 'Площадка',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}/>
          <Stack.Screen name="Online" component={OnlineCam} 
          options={{
                title: 'Online',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
