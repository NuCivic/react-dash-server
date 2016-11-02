# react-dash-server -- UNDER CONSTRUCTION
This is a very loosely implemented test harness for [react dash](https://github.com/NuCivic/react-dashboard). The express app allows you to use a gist as a configuration object to test dashboard implementations. It also allows you to load the demo sites for different versions (coming soon) of the react-dash library.

**NOTE** that this is largely a proof of concept. In practice, react-dash development involves using custom data handling functions which cannot be loaded remotely for security reasons. For non-trivial react-dash development use the [react-dashboard-boilerplate project](https://github.com/NuCivic/react-dashboard-boilerplate) which provides a robust development environment, local dev server etc.

## Setup react-dash-server
### Requirements
* nodejs

### Installation
* clone this repository
* cd into repo
* `npm install`

## Using react-dash-server
* Run the server: `node app.js`
* create a gist with a [valid react-dash settings.js file](http://react-dashboard.readthedocs.io/en/latest/development/settings.js.html)
* visit localhost:3333/:DASH_VERSION/GIST_ID
* visit localost:3333/react-dashbaord to see the demo of the current library

## Related Projects
* [react dash](https://github.com/NuCivic/react-dashboard) - the react dash library
* [react-dashboard-boilerplate](https://github.com/NuCivic/react-dashboard-boilerplate) - boilerplate project for starting react-dash-based projects 
* [react_dashboard](https://github.com/NuCivic/react_dashboard) - Drupal / DKAN base module for starting react-dash projects in drupal
* [react-dash docs](http://react-dashboard.readthedocs.io/en/latest/) - Read the docs!
