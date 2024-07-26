import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

type RootNavigationProps = {
    children: React.ReactNode;
}

export const RootNavigation = ({ children }: RootNavigationProps) => {
  return (
    <NavigationContainer>
        
        {children}
    </NavigationContainer>
  );
}