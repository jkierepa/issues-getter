import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

export type HomeScreenNavProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavProps = StackNavigationProp<RootStackParamList, 'Details'>;
