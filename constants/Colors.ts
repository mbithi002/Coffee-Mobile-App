const tintColorLight = '#FF6B6B'; // A vibrant coral color for light mode
const tintColorDark = '#4ECDC4'; // A soft teal color for dark mode

export const Colors = {
  light: {
    text: '#2E3440', // Dark gray for text (better readability)
    background: '#F9FAFB', // Light grayish background (softer than pure white)
    headerBackground: '#FFFFFF', // Pure white for header background
    tint: tintColorLight, // Vibrant coral for accents
    icon: '#4A5568', // Medium gray for icons
    tabIconDefault: '#A0AEC0', // Light gray for inactive tab icons
    tabIconSelected: tintColorLight, // Coral for active tab icons
  },
  dark: {
    text: '#E5E7EB', // Light gray for text (better readability)
    background: '#1A202C', // Dark blue-gray for background
    headerBackground: '#2D3748', // Slightly lighter blue-gray for header
    tint: tintColorDark, // Soft teal for accents
    icon: '#CBD5E0', // Light gray for icons
    tabIconDefault: '#718096', // Medium gray for inactive tab icons
    tabIconSelected: tintColorDark, // Teal for active tab icons
  },
};