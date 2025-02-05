import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310714Navigator from '../features/BlankScreen310714/navigator';
import BlankScreen210713Navigator from '../features/BlankScreen210713/navigator';
import BlankScreen110712Navigator from '../features/BlankScreen110712/navigator';
import BlankScreen010703Navigator from '../features/BlankScreen010703/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310714: { screen: BlankScreen310714Navigator },
BlankScreen210713: { screen: BlankScreen210713Navigator },
BlankScreen110712: { screen: BlankScreen110712Navigator },
BlankScreen010703: { screen: BlankScreen010703Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
