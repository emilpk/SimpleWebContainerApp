# WebContainerApp
This is a React Native application.  It is a simple container application for displaying an existing web site. 

To use locally:
1. Ensure your local react-native environment is setup (using React Native CLI). See https://reactnative.dev/docs/environment-setup  
2. Clone this repository
3. Install the required packages from root of project > 'npm i'
4. Run the Metro bundler > 'npm run start'
5. Start the application > 'npm run android'
6. Your application should load/display in an Android Emulator (via Android Studio)

If you wish to change the website presented in the mobile app, simply update this line in the App.tsx file

`const targetSite = 'https://www.sportingnews.com/uk/football/news';`

**Note, this application was created using the React Native CLI (with TypeScript)**
