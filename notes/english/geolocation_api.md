# Geolocation API Notes for Interview Prep

## What is Geolocation API?

The Geolocation API allows browsers to access a user’s geographical location (latitude, longitude, etc.) with user permission. It’s used for maps, location-based services, and weather apps.

**Analogy**: A GPS device that gives user location only with permission.

### Key Features

- **Browser Support**: Supported in modern browsers (Chrome, Firefox, Safari).
- **Permission-Based**: Requires user consent via browser prompt.
- **Asynchronous**: Uses callbacks or Promises.
- **Data Sources**: GPS, Wi-Fi, cellular, or IP address (accuracy varies).

## How Geolocation API Works

Accessed via `navigator.geolocation` with three main methods:

1. `getCurrentPosition`: Fetches current location once.
2. `watchPosition`: Continuously tracks location.
3. `clearWatch`: Stops tracking.

**Flow**:

1. Browser requests permission.
2. If allowed, fetches location data.
3. Returns data via `successCallback` or error via `errorCallback`.

## Methods and Usage

### 1. `getCurrentPosition`

Fetches user’s current location once.

**Syntax**:

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
```

- **successCallback**: Receives `GeolocationPosition` object.
- **errorCallback**: Handles errors (optional).
- **options**:
  - `enableHighAccuracy`: `true` for GPS (battery-intensive).
  - `timeout`: Max wait time (ms).
  - `maximumAge`: Max age of cached location (ms).

**GeolocationPosition**:

- `coords`:
  - `latitude`: -90 to 90 (degrees).
  - `longitude`: -180 to 180 (degrees).
  - `altitude`: Meters (or `null`).
  - `accuracy`: Lat/long accuracy (meters).
  - `altitudeAccuracy`: Altitude accuracy (or `null`).
  - `heading`: Movement direction (degrees, or `null`).
  - `speed`: Speed (m/s, or `null`).
- `timestamp`: Time of fetch (ms).

**Example**:

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy}m`);
  },
  (error) => {
    console.error(`Error: ${error.message}`);
  },
  { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
);
```

### 2. `watchPosition`

Tracks location continuously.

**Syntax**:

```javascript
const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);
```

- Returns `watchId` to stop tracking.

**Example**:

```javascript
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(`Updated: Latitude: ${latitude}, Longitude: ${longitude}`);
  },
  (error) => {
    console.error(`Error: ${error.message}`);
  },
  { enableHighAccuracy: true }
);

// Stop after 10 seconds
setTimeout(() => {
  navigator.geolocation.clearWatch(watchId);
  console.log('Stopped watching');
}, 10000);
```

### 3. `clearWatch`

Stops `watchPosition` tracking.

**Syntax**:

```javascript
navigator.geolocation.clearWatch(watchId);
```

## Async/Await with Geolocation

Wrap `getCurrentPosition` in a Promise for cleaner code.

**Example**:

```javascript
function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      { enableHighAccuracy: true, timeout: 5000 }
    );
  });
}

async function fetchLocation() {
  try {
    const position = await getLocation();
    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

fetchLocation();
```

## Error Handling

Errors are handled via `errorCallback` or Promise rejection. `GeolocationPositionError` object has:

- `code`:
  - `PERMISSION_DENIED` (1): User denied permission.
  - `POSITION_UNAVAILABLE` (2): Location unavailable.
  - `TIMEOUT` (3): Timeout.
- `message`: Error description.

**Example**:

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords);
  },
  (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error('User denied permission');
        break;
      case error.POSITION_UNAVAILABLE:
        console.error('Location unavailable');
        break;
      case error.TIMEOUT:
        console.error('Request timed out');
        break;
      default:
        console.error('Unknown error');
    }
  }
);
```

## Security and Privacy

- **Permission Prompt**: Browser always asks for user consent.
- **HTTPS Required**: Works only in secure contexts.
- **Best Practices**:
  - Request location only when needed.
  - Use `enableHighAccuracy: true` sparingly (battery drain).
  - Provide user-friendly error messages.

## Practical Mini Project

A webpage that fetches user location and generates a Google Maps link.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Geolocation Demo</title>
</head>
<body>
  <h1>Geolocation Demo</h1>
  <button onclick="getLocation()">Get My Location</button>
  <p id="location">Click the button to get your location</p>
  <a id="mapLink" href="#" target="_blank" style="display: none;">View on Google Maps</a>

  <script>
    async function getLocation() {
      const locationDiv = document.getElementById('location');
      const mapLink = document.getElementById('mapLink');
      locationDiv.textContent = 'Fetching location...';

      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            resolve,
            reject,
            { enableHighAccuracy: true, timeout: 5000 }
          );
        });
        const { latitude, longitude, accuracy } = position.coords;
        locationDiv.textContent = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy}m`;
        mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
        mapLink.style.display = 'block';
      } catch (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            locationDiv.textContent = 'Error: Permission denied';
            break;
          case error.POSITION_UNAVAILABLE:
            locationDiv.textContent = 'Error: Location unavailable';
            break;
          case error.TIMEOUT:
            locationDiv.textContent = 'Error: Request timed out';
            break;
          default:
            locationDiv.textContent = 'Error: Unknown error';
        }
      }
    }
  </script>
</body>
</html>
```

## Interview Questions

1. **What is the Geolocation API?**

   - Browser API for accessing user location with permission.

2. **Difference between** `getCurrentPosition` **and** `watchPosition`**?**

   - `getCurrentPosition`: One-time location fetch.
   - `watchPosition`: Continuous tracking.

3. **How to handle Geolocation errors?**

   - Check `error.code` for `PERMISSION_DENIED`, `POSITION_UNAVAILABLE`, `TIMEOUT`.

4. **Why HTTPS for Geolocation?**

   - Prevents location data interception in non-secure contexts.

5. **How to use Geolocation with Promises?**

   - Wrap `getCurrentPosition` in a Promise and use `async/await`.

6. **What affects location accuracy?**

   - Data source (GPS, Wi-Fi, IP), `enableHighAccuracy`, device capabilities.

## Tips for Interview Prep

- Practice the mini project to show practical usage.
- Understand permission and security requirements.
- Be ready to explain real-world use cases (e.g., maps, weather apps).
- Know how to convert callback-based API to Promise-based.
- Explain trade-offs of `enableHighAccuracy` (accuracy vs battery).