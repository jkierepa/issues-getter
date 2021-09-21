import { StackNavigationProp } from '@react-navigation/stack'
import { Issue } from './appTypes'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    Home: undefined;
    Details: Issue
};

export type HomeScreenNavProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavProps = StackNavigationProp<RootStackParamList, 'Details'>;
export type DetailsRouteParamsProps = RouteProp<RootStackParamList, 'Details'>;
