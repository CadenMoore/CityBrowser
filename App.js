import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from './Button';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artInstituteImage = require('./images/art.png');
const magnificentMileImage = require('./images/mile.png');
const navyPierImage = require('./images/pier.png');
const waterTowerImage = require('./images/water.png');
const willisTowerImage = require('./images/willis.png');

const urls = {
  artInstitute: 'https://www.artic.edu/',
  magnificentMile: 'https://www.themagnificentmile.com/',
  willisTower: 'https://www.willistower.com/',
  navyPier: 'https://navypier.org/',
  waterTower: 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html',
}

function ArtInstituteScreen(){
  return (
  <View style={styles.container}>
    <Image style={styles.imageContainer} source={artInstituteImage} />
    <Button info style={styles.button}
      onPress = {() => WebBrowser.openBrowserAsync(urls.artInstitute)}
    >
      More Information
    </Button>
  </View>
  );
}

function MagnificentMileScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={magnificentMileImage} />
      <Button info style={styles.button}
        onPress = {() => WebBrowser.openBrowserAsync(urls.magnificentMile)}
      >
        More Information
      </Button>
    </View>
  );
}

function NavyPierScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={navyPierImage} />
      <Button info style={styles.button}
        onPress = {() => WebBrowser.openBrowserAsync(urls.navyPier)}
      >
        More Information
      </Button>
    </View>
  );
}

function WaterTowerScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={waterTowerImage} />
      <Button info style={styles.button}
        onPress = {() => WebBrowser.openBrowserAsync(urls.waterTower)}
      >
        More Information
      </Button>
    </View>
  );
}

function WillisTowerScreen(){
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={willisTowerImage} />
      <Button info style={styles.button}
        onPress = {() => WebBrowser.openBrowserAsync(urls.willisTower)}
      >
        More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="ArtInstitute"
        screenOptions={styles.headerContainer}>
        <Drawer.Screen name="ArtInstitute" component={ArtInstituteScreen} 
          options={{title: 'Art Institute of Chicago'}}
        />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMileScreen}
          options={{title: 'Magnificent Mile'}}
        />
        <Drawer.Screen name="NavyPier" component={NavyPierScreen} 
          options={{title: 'Navy Pier'}}
        />
        <Drawer.Screen name="WaterTower" component={WaterTowerScreen} 
          options={{title: 'Water Tower'}}
        />
        <Drawer.Screen name="WillisTower" component={WillisTowerScreen} 
          options={{title: 'Willis Tower'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 360,
    width: 240,
  },
  button: {
    margin: 20,
  },
  headerContainer: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
