import {createStackNavigator,createAppContainer} from 'react-navigation';


const nav = createStackNavigator({
    Home:{
         screen:'Home'
     }
 })
  export default createAppContainer(nav) ;