# man-truck-monitor
Vehicle mapping tracker interface

MAN Truck Monitor
1) Let’s build a ​Map View​ that uses 100% of the viewport width and height so we can have a clear overview of the truck’s location and latest positions. (Suggestion) For Maps you could use the Google Maps API (​https://developers.google.com/maps/documentation/javascript/tutorial​).
 
2) On the top-left corner we need the following filters overlaying the Map: License Plate, POI Type (Gas Station, Restaurants and Hotels) and optionally a search by radius. (Suggestion) For POI search you could use the Google Places API (​https://developers.google.com/places/web-service/search​).
3) This interface needs to consume all the truck-related information from a RESTful API that you need to build. So the location history of the truck needs to come from this API.

## Getting Started

You need [Node] and either [Yarn] or [npm] to run this project.

### Setup your local env

1. Open your terminal and run:

    ````shell script
    cd ~
    git clone https://github.com/dgesteves/man-truck-monitor.git
    cd man-truck-monitor/client
    npm install 
    cd ..
    cd server
    npm intall 
    ````
2. Before running the app you will have to ``~/man-truck-monitor/client/src/constants.ts`` and add you Google Api key to constant called ``KEY``, this key can be created on [GCP_DASHBOARD], you will need to enable ``Maps JavaScript API`` , ``Places API`` and ``Distance Matrix API``.

3. To run the App you will need to have two terminal windows open:

    ````shell script
    cd server
    npm start
    ````
    &
    ````shell script
    cd client
    npm start
    ````


## Run time description
 
 - App will start by getting your device location and displaying it with  a default marker.
 - Button to change color theme and dropdowns will be disabled until you insert a valid licence plate on the search input.
 - After you insert a valid licence plate you would be able to search for POI's and change the range, you only need to change the option on the dropdown, and the app will re-render for you with the right set up.
 - Currently, there is only one truck history but if you want to insert more you can, just go to ``~/man-truck-monitor/server/db.json`` and insert a new entry.   

[GCP_DASHBOARD]: https://console.cloud.google.com/home/dashboard
[yarn]: https://yarnpkg.com/en/docs/getting-started
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/
