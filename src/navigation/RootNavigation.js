import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigate to a specific screen globally, handling tabs vs stack screens dynamically.
 * @param {string} name - The destination screen or tab name
 * @param {object} [params] - Optional navigation parameters
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    const tabScreens = ['Home', 'Focus', 'Planner', 'Library', 'Profile'];
    if (tabScreens.includes(name)) {
      navigationRef.navigate('MainTabs', { screen: name, params });
    } else {
      navigationRef.navigate(name, params);
    }
  }
}
