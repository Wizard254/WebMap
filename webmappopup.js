// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    // NOTE: Google Maps UI seems to swap these coordinates, try swapping them
    center: [36.93234761042665, -1.3740454154502033],
    // center: [-77.04, 38.907],
    zoom: 11.15
});

map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Kozi Suites Nairobi</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.918056852331965,
                            -1.3605131082205077
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Blueman Smile Suites - JKIA</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.93449153698961,
                            -1.3472204812472404
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Stima sacco Village</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.943472481167646,
                            -1.3495734107468145
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Hilton Garden Inn Nairobi Airport</strong>',
                        'rating': 5
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.907075092811624,
                            -1.3537668750978513
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Hope Homestay</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.9339338946608,
                            -1.3614596566872652
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Crowne Plaza Nairobi Airport</strong>',
                        'rating': 5
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.91303052349626,
                            -1.3405589065672392
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Easy Hotel Kenya</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.919065379318354,
                            -1.3632095536563118
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>D2W Residency Suites</strong>',
                        'rating': 5
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.93517675048286,
                            -1.3708912863825533
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': "<strong>Memo's Homestay</strong>",
                        'rating': 5
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.93838863698966,
                            -1.3769922037126239
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Four Points by Sheraton Nairobi Airport</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.91743022349643,
                            -1.3408255547946726
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Nairobi Airport Inn</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.922985622419546,
                            -1.35529231081467
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Zarita Boutique Airport Hotel</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.94519353698958,
                            -1.368991931612973
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Nairobi Airport Apartments</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.93876194407234,
                            -1.3814895688441262
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Royalty homes-jkia</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.92303010815419,
                            -1.3858835617513445
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Continental Inn</strong>',
                        'rating': 3
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.93892092349642,
                            -1.391805162202299
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>67 Airport Hotel</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.92329786582535,
                            -1.3811692813693293
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Coloho Hotel</strong>',
                        'rating': 1
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.9123673354891,
                            -1.3629525840503682
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Anthena Hotel</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.943878835034106,
                            -1.3996719882377644
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>AIRPORT LANDING HOTEL</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.89523399466078,
                            -1.3262484794360034
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>PrideInn Plaza Hotel & Convention Centre</strong>',
                        'rating': 4
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            36.953687494660905,
                            -1.4174235364155356
                        ]
                    }
                }

            ]
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
            'circle-color': '#e800fa',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        const stars = e.features[0].properties.rating;
        let ratings = '<div>';
        for (let i = 1; i <= 5; i++) {
            if (i > stars) {
                ratings += '<span class="fa fa-star"></span>';
            } else {
                ratings += '<span class="fa fa-star checked"></span>';
            }
        }
        ratings += '&nbsp • &nbsp<span>' + stars + '-star hotel</span>'
        ratings += '</div>'

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description + ratings).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});
