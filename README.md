Norigin Media code challenge - Quick start guide
========================================

Information:


---
<details>
<summary>📱 App Setup</summary>
Make sure you’ve followed the official setup:
https://reactnative.dev/docs/environment-setup

1. Install dependencies:

    npm install
    # or
    yarn

2. Start Metro (Dev Server):

    npm start
    # or
    yarn start

3. Run the App on Android:

    npm run android
    # or
    yarn android

4. Reload / Refresh:

    Android:
    - Double press "R"
    - OR open the developer menu with:
        - Cmd ⌘ + M (macOS)
        - Ctrl + M (Windows/Linux)

5. Modify your app:

    Edit `App.tsx` and save to see changes via Fast Refresh.
</details>

---
<details>
<summary>📡 Mock API Setup (EPG Data)</summary>

1. Clone the mock-api with the correct branch "cloudberry":

    git clone -b cloudberry https://github.com/NoriginMedia/mock-api.git
    cd mock-api

2. Install dependencies:

    npm install

3. Start the mock API server:

    npm run start

    The server will run on port 1337.

    → Mock service running at: http://localhost:1337
    → Try it: http://localhost:1337/epg

Notes:
------
- Make sure Node.js is installed before running the mock API.
- If you're not familiar with NPM, visit: https://docs.npmjs.com/

</details>

---

<details>
<summary>⚙️ App Configuration</summary>
1. Locate the file:

    /src/config.ts

2. Find the `API_ROUTE` parameter.

3. If using a physical device:
   - Get your computer's local IP (e.g., 192.168.x.x)
   - Replace the value of `API_ROUTE` with:

        export const API_ROUTE = "http://192.168.x.x:1337";

4. If using an emulator (virtual device), leave it as:

        export const API_ROUTE = "http://localhost:1337";

</details>

---

<details>
<summary>📷 Screenshots</summary>

You can find screenshots demonstrating the app's functionality in the following folder:

    /screenshots

Please refer to these images to understand the app's UI and features.

</details>

---

<details>
<summary>📝 Final Notes on App Functionality</summary>

- At the bottom of the app, there are 5 icons. Select the 3rd icon to display the TV channel programming guide.
- On the left side, different channels are shown using icons because the original images from the API are no longer available.
- At the top, there is a date selector; however, it currently has no functionality as the API always returns data for the current day.
- On the right side, a list of movies or shows is displayed in their respective time slots.
- There is a "Now" button at the bottom left that allows you to jump directly to the movies currently being broadcast.
- A vertical line indicates the current time on the schedule.
- You can refresh the data by pulling down completely when at the top of the list.

- The Norigin Media company icon was updated because the previous one was no longer available.
- The primary color was changed to better match the logo.

- There are three ways to view movie details:
  1. Selecting a movie that has already aired (before the current purple line) shows past details including season information.
  2. Selecting a movie currently airing displays live details.
  3. Selecting a movie airing in the future shows upcoming movie information.

Thank you very much for the opportunity to complete this technical test.  
If you have any questions or feedback, please feel free to contact me via email or open an issue on GitHub.

</details>