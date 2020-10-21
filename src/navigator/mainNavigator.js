import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile154103Navigator from '../features/UserProfile154103/navigator';
import Tutorial154102Navigator from '../features/Tutorial154102/navigator';
import NotificationList154074Navigator from '../features/NotificationList154074/navigator';
import Settings154073Navigator from '../features/Settings154073/navigator';
import Settings154065Navigator from '../features/Settings154065/navigator';
import UserProfile154063Navigator from '../features/UserProfile154063/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile154103: { screen: UserProfile154103Navigator },
Tutorial154102: { screen: Tutorial154102Navigator },
NotificationList154074: { screen: NotificationList154074Navigator },
Settings154073: { screen: Settings154073Navigator },
Settings154065: { screen: Settings154065Navigator },
UserProfile154063: { screen: UserProfile154063Navigator },

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
