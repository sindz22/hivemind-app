const DarkColors = {
  background: '#0D0D0D',
  surface: '#1A1A1A',
  surfaceHighlight: '#2A2A2A',
  primary: '#FBC02D',
  primaryDark: '#F57F17',
  primaryLight: '#FFF59D',
  text: '#FFFFFF',
  textSecondary: '#A0A0A0',
  textTertiary: '#666666',
  greenAccent: '#4CAF50',
  blueAccent: '#2196F3',
  purpleAccent: '#9C27B0',
  brownAccent: '#795548',
  danger: '#F44336',
  border: '#333333',
  glassBackground: 'rgba(26, 26, 26, 0.7)',
};

const LightColors = {
  background: '#F8F6F1',
  surface: '#FFFFFF',
  surfaceHighlight: '#F2EEE6',
  primary: '#D4A437',
  primaryDark: '#B78310',
  primaryLight: '#F7E39E',
  text: '#1D1D1D',
  textSecondary: '#6E6E6E',
  textTertiary: '#909090',
  greenAccent: '#4CAF50',
  blueAccent: '#2196F3',
  purpleAccent: '#9C27B0',
  brownAccent: '#795548',
  danger: '#D32F2F',
  border: '#DDDDDD',
  glassBackground: 'rgba(255, 255, 255, 0.7)',
};

export const Colors = DarkColors;

export const getColors = (themeMode) =>
  themeMode === 'dark' ? DarkColors : LightColors;

export const Typography = {
  h1: { fontSize: 32, fontWeight: 'bold', color: Colors.text },
  h2: { fontSize: 24, fontWeight: 'bold', color: Colors.text },
  h3: { fontSize: 20, fontWeight: '600', color: Colors.text },
  body: { fontSize: 16, color: Colors.textSecondary },
  caption: { fontSize: 14, color: Colors.textSecondary },
  small: { fontSize: 12, color: Colors.textTertiary },
};

export const getTypography = (colors) => ({
  h1: { fontSize: 32, fontWeight: 'bold', color: colors.text },
  h2: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  h3: { fontSize: 20, fontWeight: '600', color: colors.text },
  body: { fontSize: 16, color: colors.textSecondary },
  caption: { fontSize: 14, color: colors.textSecondary },
  small: { fontSize: 12, color: colors.textTertiary },
});