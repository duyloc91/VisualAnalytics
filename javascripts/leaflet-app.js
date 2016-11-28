var map = L.map('map').setView([30.3753,  35.3451], 2);

var lightBase = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
	minZoom: 2,
    id: 'duyloc91.p27d97m2',
    accessToken: 'pk.eyJ1IjoiZHV5bG9jOTEiLCJhIjoiY2lqd2tra3FqMGhzMXZ3a2liMjVlOGhldiJ9.krs0HXEmlBg1mR8EjaRdaQ',
	noWrap: true
}).addTo(map);




queue()
    .defer(d3.json, 'geojson/twitter.geojson')
    .await(makeMyMap); // function that uses files



function makeMyMap(error, twitter) {

    //interactive census
    function getColor(d) {
        return  d > 20 ? '#4d0017' :
                d > 18 ? '#67001e' :
                d > 12 ? '#800026' :
                d > 8  ? '#BD0026' :
                d > 4.5  ? '#E31A1C' :
                d > 2.5  ? '#FC4E2A' :
                d > 1.5   ? '#FD8D3C' :
                d > 1 ? '#FEB24C' :
                d > 0.5   ? '#FED976' :
                           '#FFEDA0';
    }
	
	// Twitter Layer

    
    //info layer
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };


    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>CO2 emission per capita</h4>' +  (props ?
            '<b>' + props.NAME + '</b>  ' + props.TwitterCount + ' kilo tons'
            : '<h4 style="font-weight: bold;">Hover over a country to view CO2 emission level</h4>');
    };

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
        twitter_L2013.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    
    }

    function onEachFeatureTwitter(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
        
    }
    
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.TwitterCount),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L2013 = L.geoJson(twitter, {
        style: style,
        onEachFeature: onEachFeatureTwitter
    });

    //1961
    function style1961(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_6),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1961 = L.geoJson(twitter, {
        style: style1961
    });

    //1966
    function style1966(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_11),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1966 = L.geoJson(twitter, {
        style: style1966
    });

    //1971
    function style1971(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_16),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1971 = L.geoJson(twitter, {
        style: style1971
    });

    //1976
    function style1976(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_21),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1976 = L.geoJson(twitter, {
        style: style1976
    });


    //1981
    function style1981(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_26),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1981 = L.geoJson(twitter, {
        style: style1981
    });

    //1986
    function style1986(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_31),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
    var twitter_L1986 = L.geoJson(twitter, {
        style: style1986
    });

    //1991
    function style1991(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_36),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L1991 = L.geoJson(twitter, {
        style: style1991
    });

    //1996
    function style1996(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_41),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
    var twitter_L1996 = L.geoJson(twitter, {
        style: style1996
    });

    //2001
    function style2001(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_46),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L2001 = L.geoJson(twitter, {
        style: style2001
    });

    //2006
    function style2006(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_51),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
    var twitter_L2006 = L.geoJson(twitter, {
        style: style2006
    });

    //2011
    function style2011(feature){
        return{
            fillColor: getColor(feature.properties.co2_field_56),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }

    var twitter_L2011 = L.geoJson(twitter, {
        style: style2011
    });
    
	// End of Twitter layer
	
    //load layers and bases into map
    var baseMaps = {
        "Light Base" : lightBase
    };

    var overlayMaps = {
        "CO2 Emission 2013" : twitter_L2013,
        "CO2 Emission 1961" : twitter_L1961
    }
    
    
    
    info.addTo(map);

    //legend for twitter

    var legendTwitter = L.control({position: 'bottomright'});

    legendTwitter.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0.5, 1, 1.5, 2.5, 4.5, 8, 12, 18],
            labels = [];

            div.innerHTML = "<h4><b><u>CO2 Emission Per Capita (kilo Tons)</u></b></h4>"
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legendTwitter.addTo(map);
    
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    
    var year = 1961;
    var intervalID;
    function displayNextImage(){
        switch(year) {
        case 1961:
            twitter_L1961.addTo(map);
            year = 1966;
            console.log(year);
            break;
        case 1966:
            map.removeLayer(twitter_L1961);
            twitter_L1966.addTo(map);
            year = 1971;
            console.log(year);
            break;
        case 1971:
            map.removeLayer(twitter_L1966);
            twitter_L1971.addTo(map);
            year = 1976;
            console.log(year);
            break;
        case 1976:
            map.removeLayer(twitter_L1971);
            twitter_L1976.addTo(map);
            year = 1981;
            console.log(year);
            break;
        case 1981:
            map.removeLayer(twitter_L1976);
            twitter_L1981.addTo(map);
            year = 1986;
            console.log(year);
            break;
        case 1986:
            map.removeLayer(twitter_L1981);
            twitter_L1986.addTo(map);
            year = 1991;
            console.log(year);
            break;
        case 1991:
            map.removeLayer(twitter_L1986);
            twitter_L1991.addTo(map);
            year = 1996;
            console.log(year);
            break;
        case 1996:
            map.removeLayer(twitter_L1991);
            twitter_L1996.addTo(map);
            year = 2001;
            console.log(year);
            break;
        case 2001:
            map.removeLayer(twitter_L1996);
            twitter_L2001.addTo(map);
            year = 2006;
            console.log(year);
            break;
        case 2006:
            map.removeLayer(twitter_L2001);
            twitter_L2006.addTo(map);
            year = 2011;
            console.log(year);
            break;
        case 2011:
            map.removeLayer(twitter_L2006);
            twitter_L2011.addTo(map);
            year = 2013;
            console.log(year);
            break;
        case 2013:
            map.removeLayer(twitter_L2011);
            twitter_L2013.addTo(map);
            console.log(year);
            break;
        default:
            twitter_L2013.addTo(map);
            year = 2013;
        }
        if (year == 2013){
            window.clearInterval(intervalID);
        }
    }
    intervalID = setInterval(displayNextImage, 500);
    
    $( "#refresh" ).click(function() {
        year = 1961;
        intervalID = setInterval(displayNextImage, 500);
    });
}



