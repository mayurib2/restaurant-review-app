# Restaurant Reviews App
---
This is an application that displays reviews of restaurants with map locations. It has filtering capability by cuisines and neibhbourhoods

## Objective

For the **Restaurant Reviews** project, a static webpage was to be incrementally converted to a mobile-ready web application. A static design that lacked accessibility was converted to be responsive on different sized displays and accessible for screen reader use. A service worker was used to begin the process of creating a seamless offline experience for users.

## Specification

A starter code was provided for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn't include any standard accessibility features, and it didn't work offline at all. The code was to be updated to resolve these issues while still maintaining the included functionality.

## Getting Started

1. Download/ Clone the project. In the project folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.

2. With your server running, visit the site: `http://localhost:8000`

3. In Dev Tools, check for offline use

## Development Strategy

1. After getting a Mapbox API key, the map was displayed on the screen.
2. The site was made responsive using CSS only. No frameworks like Bootstrap were used. The following techniques are used for this purpose
  * Media Queries
  * Responsive Images
3. Implemented accessibility features like tabindex, aria labels, alt tags for images, aria roles, etc.
4. Service worker was added to enable caching for offline use.  

## Resources

This repository uses
  * Leaflet.js [leafletjs](https://leafletjs.com/) with
  * Mapbox [Mapbox](https://www.mapbox.com/)

## Acknowledgements

This project was developed as part of the Udacity Front End Wed Development Nanodegree.
  * Starter Code: https://github.com/udacity/mws-restaurant-stage-1
  * [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view)
  * [Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
  * [Service Worker an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)
