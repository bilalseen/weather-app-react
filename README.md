# Weather App

This project is a React application that allows users to view weather information by entering a city name. It fetches real-time weather data using the OpenWeather API and presents users with information such as temperature, weather conditions, humidity, and wind speed.

## Installation

1. Clone the project files to your local machine:

    ```bash
    git clone https://github.com/username/weather-app.git
    ```

2.  Navigate to the project folder:

    ```bash
    cd weather-app
    ```

3. **Create API.js file:**
    - Inside the `src` directory, create a file named `API.js`.
    - Add the following content to `API.js`:

    ```javascript
    // API.js

    const API = {
      key: 'YOUR_OPENWEATHER_API_KEY',
      base: 'https://api.openweathermap.org/data/2.5/'
    };

    export default API;
    ```

    Replace `'YOUR_OPENWEATHER_API_KEY'` with your actual OpenWeather API key.

4. Install dependencies:

    ```bash
    npm install
    ```

5. Start the application:

    ```bash
    npm start
    ```

Visit http://localhost:3000 in your browser to view the application.

## Usage

1. Enter the desired city name in the search bar on the home page.
2. Press Enter or click the "Search" button.
3. Weather information will be displayed on the screen.

## Component Structure

Main components used in the project:

- WeatherApp: The main component of the project, containing other sub-components.
- SearchBar: Includes the search bar for users to enter a city name.
- WeatherImage: Displays an icon representing the weather conditions.
- WeatherInfo: Displays weather information such as temperature, weather conditions, humidity, and wind speed.

## Technologies Used

- React
- OpenWeather API

## Contribution

If you want to contribute to the project, please create an issue to discuss your changes before submitting a pull request.

## License

This project is licensed under the MIT License.
