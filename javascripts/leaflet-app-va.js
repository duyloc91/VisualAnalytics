var map = L.map('map').setView([38.82259, -2.8125], 3);
map.setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 223.2421875]]);

var emeraldBase = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
	minZoom: 2,
    id: 'duyloc91.p2ppi39i',
    accessToken: 'pk.eyJ1IjoiZHV5bG9jOTEiLCJhIjoiY2lqd2tra3FqMGhzMXZ3a2liMjVlOGhldiJ9.krs0HXEmlBg1mR8EjaRdaQ',
	noWrap: true
}).addTo(map);

var lightBase = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
	minZoom: 2,
    id: 'duyloc91.p27d97m2',
    accessToken: 'pk.eyJ1IjoiZHV5bG9jOTEiLCJhIjoiY2lqd2tra3FqMGhzMXZ3a2liMjVlOGhldiJ9.krs0HXEmlBg1mR8EjaRdaQ',
	noWrap: true
});




queue()
    .defer(d3.json, 'geojson/moran.geojson')
    .defer(d3.json, 'geojson/twitter.geojson')
    .defer(d3.json, 'geojson/grid.geojson')
	.defer(d3.json, 'geojson/terroristattack.geojson')
	.defer(d3.json, 'geojson/taliban.geojson')
	.defer(d3.json, 'geojson/isil.geojson')
	.defer(d3.json, 'geojson/alshabaab.geojson')
	.defer(d3.json, 'geojson/bokoharam.geojson')
	.defer(d3.json, 'geojson/ttp.geojson')
	.defer(d3.json, 'geojson/aqap.geojson')
	.defer(d3.json, 'geojson/npa.geojson')
	.defer(d3.json, 'geojson/maoists.geojson')
	.defer(d3.json, 'geojson/farc.geojson')
	.defer(d3.json, 'geojson/alqaidainiraq.geojson')
	.defer(d3.json, 'geojson/donetsk.geojson')
	.defer(d3.json, 'geojson/seperatists.geojson')
	.defer(d3.json, 'geojson/muslimfund.geojson')
	.defer(d3.json, 'geojson/pkk.geojson')
	.defer(d3.json, 'geojson/fulani.geojson')
	.defer(d3.json, 'geojson/terroristattack2010.geojson')
	.defer(d3.json, 'geojson/TerroristAttacksYearByYear20102015.geojson')
    .await(makeMyMap); // function that uses files



function makeMyMap(error, moran, twitter, grid,terroristattack, taliban, isil, alshabaab, bokoharam, ttp, aqap, npa, maoists, farc, alqaidainiraq, donetsk, seperatists, muslimfund, pkk, fulani, terroristattack2010,TerroristAttacksYearByYear20102015) {
    
    //Add Chart Function
    function initChart() {
            var chart = AmCharts.makeChart("chartdivTerroristGrp",
      {
    "type": "serial",
    "categoryField": "category",
    "autoMarginOffset": 11,
    "startDuration": 1,
    "fontSize": 10,
    "categoryAxis": {
        "autoRotateAngle": 50,
        "autoRotateCount": 1,
        "gridPosition": "start",
        "dashLength": 6,
        "axisAlpha": 1,
        // "tickLength":0,
        // "labelRotation":-45,
        "minHorizontalGap": 0
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonColor": "#90B000",
            "balloonText": "<b>[[category]]</b>:[[value]] kills",
            "columnWidth": 0.52,
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "legendAlpha": 0,
            "lineColor": "#9F1616",
            "lineThickness": 0,
            "maxBulletSize": 45,
            "title": "graph 1",
            "type": "column",
            "valueField": "column-1"
        }
    ],
    
    "exportConfig":{
      "menuTop": 0,
      "menuItems": [{
      "icon": '/lib/3/images/export.png',
      "format": 'png'     
      }]  
    },
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "autoRotateAngle": 0,
            "title": "Kills"
        }
    ],
    "allLabels": [],
    "balloon": {},
    "titles": [
        {
            "id": "Title-1",
            "size": 12,
            "text": "Terrorist Groups Attacking Trends (2010 - 2014)"
        }
    ],

    "dataProvider": [
        {
            "category": "Taliban",
            "column-1": "3041"
        },
        {
            "category": "Islmaic State of Iraq and the Levant",
            "column-1": "1481"
        },
        {
            "category": "Al-Shabaab",
            "column-1": "1292"
        },
        {
            "category": "Boko Haram",
            "column-1": "1197"
        },
        {
            "category": "Tehrik-i-Taliban Pakistan",
            "column-1": "759"
        },
        {
            "category": "Al-Qa`ida in the Arabian Peninsula",
            "column-1": "725"
        },
        {
            "category": "New People's Army",
            "column-1": "659"
        },
        {
            "category": "Maoists",
            "column-1": "577"
        },
        {
            "category": "Revolutionary Armed Forces of Colombia",
            "column-1": "551"
        },
        {
            "category": "Al-Qa`ida in Iraq",
            "column-1": "444"
        },
        {
            "category": "Donetsk People's Republic",
            "column-1": "294"
        },
        {
            "category": "Separatists",
            "column-1": "256"
        },
        {
            "category": "Muslim Fundamentalists",
            "column-1": "229"
        },
        {
            "category": "Kurdistan Workers' Party",
            "column-1": "198"
        },
        {
            "category": "Fulani Militants",
            "column-1": "176"
        }
    ]
}
);

            chart.addListener("clickGraphItem", handleClick)

            function handleClick(event){

            removeTerroristGroupMaps();
            var selectedGroup = event.item.category;

            switch (selectedGroup) {
            case "Taliban":
                taliban_l.addTo(map);
                break;
            case "Islmaic State of Iraq and the Levant":
                isil_l.addTo(map);
                break;
            case "Al-Shabaab":
                alshabaab_l.addTo(map);
                break;
            case "Boko Haram":
                bokoharam_l.addTo(map);
                break;
            case "Tehrik-i-Taliban Pakistan":
                ttp_l.addTo(map);
                break;
            case "Al-Qa`ida in the Arabian Peninsula":
                aqap_l.addTo(map);
                break;
            case "New People's Army":
                npa_l.addTo(map);
                break;
            case "Maoists":
                maoists_l.addTo(map);
                break;
            case "Revolutionary Armed Forces of Colombia":
                farc_l.addTo(map);
                break;
            case "Al-Qa`ida in Iraq":
                alqaidainiraq_l.addTo(map);
                break;
            case "Donetsk People's Republic":
                donetsk_l.addTo(map);
                break;
            case "Separatists":
                seperatists_l.addTo(map);
                break;
            case "Muslim Fundamentalists":
                muslimfund_l.addTo(map);
                break;
            case "Kurdistan Workers' Party":
                pkk_l.addTo(map);
                break;
            case "Fulani Militants":
                fulani_l.addTo(map);
                break;
            
        }    
            }
    };
    //END of add graph

	// Moran functionality
	
    var moran_L = L.geoJson(moran, {
        style: {
            fillColor: "#708598",
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        },
        onEachFeature: onEachFeatureMoran
        }
    );
    console.log(moran);
    
    function onEachFeatureMoran(feature, layer) {
        layer.on({
            mouseover: highlightFeatureMoran,
            mouseout: resetHighlightMoran,
            click: zoomToFeature
        });
    }
    
    function highlightFeatureMoran(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            fillColor: '#FFEDA0',
            color: '#FEB24C' ,
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
            moranInfo.update();
        }
        moranInfo.update(layer.feature.properties);
    }
    
    function resetHighlightMoran(e) {
        moran_L.resetStyle(e.target);
        moranInfo.update();
    }
    
    var moranInfo = L.control();
    
    moranInfo.onAdd = function (map) {
        this._divMoran = L.DomUtil.create('div', 'moranInfo'); // create a div with a class "info"
        this.update();
        return this._divMoran;
    };

    // method that we will use to update the control based on feature properties passed
    moranInfo.update = function (props) {
        this._divMoran.innerHTML = "<h4>Moran's I</h4>" +  (props ?
            '<b>' + props.CONTINENT + "</b> " + interpretingMoran(props.MoranI) + "<br/>" +
            "<img src='images/" + props.CONTINENT + "_histogram.PNG' ></b>"+
            "<img src='images/" + props.CONTINENT + "_scatterplot.PNG' >"
            : 'Select <b>Moran Layer</b> and hover over a continent');
    };
    
    function interpretingMoran(i){
      if (i < 0.1 && i > -0.1){
          return i + ", random distribution";
      } else if (i < -0.1){
          return i + ", disperse distribution";
      } else if (i > 0.1){
          return i + ", cluster distribution";
      }
      return i + " ";  
    };

	// End of Moran

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
	

    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>Terrorism Tweets per Country</h4>' +  (props ?
            '<b>' + props.NAME + '</b>  ' + props.TwitterCount + ' tweets'
            : '<h4 style="font-weight: bold;">Hover over a country to view tweets</h4>');
    };

	
    var twitter_L = L.geoJson(twitter, {
        style: style,
        onEachFeature: onEachFeatureTwitter
        }
    );
	
	// 2010 - 2015 Terrorist Attack Layer
	
	
	// 2010
    var terroristattack2010_control = L.control();

    terroristattack2010_control.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'terroristattack2010'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    terroristattack2010_control.update = function (props) {
        this._div.innerHTML = (props ?
            '<h4><b>Terrorism Attacks for ' + props.NAME + '</b></h4> ' + props.TerroristAttacks_2010attacks + ' Attacks'
            : '<h4 style="font-weight: bold;">Hover over a country for more information</h4>');
    };
	
	// Load 2010 GeoJson
	var terroristAttackLayer2010 = L.geoJson(TerroristAttacksYearByYear20102015, {
        style: style2010,
        onEachFeature: onEachFeature2010
        }
    );
	
	
	 function style2010(feature) {
        return {
            fillColor: getColor(feature.properties.TerroristAttacks_2010attacks),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
	
	
	function highlightFeature2010(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        terroristattack2010_control.update(layer.feature.properties);
    }
	
	function resetHighlight2010(e) {
        terroristAttackLayer2010.resetStyle(e.target);
		terroristattack2010_control.update();
       
    }
	
	function onEachFeature2010(feature, layer) {
        layer.on({
            mouseover: highlightFeature2010,
            mouseout: resetHighlight2010,
            click: zoomToFeature
        });
		
    }
	
	// 2011
    var terroristattack2011_control = L.control();

    terroristattack2011_control.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'terroristattack2011'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    terroristattack2011_control.update = function (props) {
        this._div.innerHTML = (props ?
            '<h4><b>Terrorism Attacks for ' + props.NAME + '</b></h4> ' + props.TerroristAttacks_2011attacks + ' Attacks'
            : '<h4 style="font-weight: bold;">Hover over a country for more information</h4>');
    };
	
	// Load 2011 GeoJson
	var terroristAttackLayer2011 = L.geoJson(TerroristAttacksYearByYear20102015, {
        style: style2011,
        onEachFeature: onEachFeature2011
        }
    );
	
	
	 function style2011(feature) {
        return {
            fillColor: getColor(feature.properties.TerroristAttacks_2011attacks),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
	
	
	function highlightFeature2011(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        terroristattack2011_control.update(layer.feature.properties);
    }
	
	function resetHighlight2011(e) {
        terroristAttackLayer2011.resetStyle(e.target);
		terroristattack2011_control.update();
       
    }
	
	function onEachFeature2011(feature, layer) {
        layer.on({
            mouseover: highlightFeature2011,
            mouseout: resetHighlight2011,
            click: zoomToFeature
        });
		
    }
	
	
	// 2012
    var terroristattack2012_control = L.control();

    terroristattack2012_control.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'terroristattack2012'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    terroristattack2012_control.update = function (props) {
        this._div.innerHTML = (props ?
            '<h4><b>Terrorism Attacks for ' + props.NAME + '</b></h4> ' + props.TerroristAttacks_2012attacks + ' Attacks'
            : '<h4 style="font-weight: bold;">Hover over a country for more information</h4>');
    };
	
	// Load 2012 GeoJson
	var terroristAttackLayer2012 = L.geoJson(TerroristAttacksYearByYear20102015, {
        style: style2012,
        onEachFeature: onEachFeature2012
        }
    );
	
	
	 function style2012(feature) {
        return {
            fillColor: getColor(feature.properties.TerroristAttacks_2012attacks),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
	
	
	function highlightFeature2012(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        terroristattack2012_control.update(layer.feature.properties);
    }
	
	function resetHighlight2012(e) {
        terroristAttackLayer2012.resetStyle(e.target);
		terroristattack2012_control.update();
       
    }
	
	function onEachFeature2012(feature, layer) {
        layer.on({
            mouseover: highlightFeature2012,
            mouseout: resetHighlight2012,
            click: zoomToFeature
        });
		
    }
	
	
	// 2013
    var terroristattack2013_control = L.control();

    terroristattack2013_control.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'terroristattack2013'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    terroristattack2013_control.update = function (props) {
        this._div.innerHTML = (props ?
            '<h4><b>Terrorism Attacks for ' + props.NAME + '</b></h4> ' + props.TerroristAttacks_2013attacks + ' Attacks'
            : '<h4 style="font-weight: bold;">Hover over a country for more information</h4>');
    };
	
	// Load 2013 GeoJson
	var terroristAttackLayer2013 = L.geoJson(TerroristAttacksYearByYear20102015, {
        style: style2013,
        onEachFeature: onEachFeature2013
        }
    );
	
	
	 function style2013(feature) {
        return {
            fillColor: getColor(feature.properties.TerroristAttacks_2013attacks),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
	
	
	function highlightFeature2013(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        terroristattack2013_control.update(layer.feature.properties);
    }
	
	function resetHighlight2013(e) {
        terroristAttackLayer2013.resetStyle(e.target);
		terroristattack2013_control.update();
       
    }
	
	function onEachFeature2013(feature, layer) {
        layer.on({
            mouseover: highlightFeature2013,
            mouseout: resetHighlight2013,
            click: zoomToFeature
        });
		
    }
	
	
	// 2014
    var terroristattack2014_control = L.control();

    terroristattack2014_control.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'terroristattack2014'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    terroristattack2014_control.update = function (props) {
        this._div.innerHTML = (props ?
            '<h4><b>Terrorism Attacks for ' + props.NAME + '</b></h4> ' + props.TerroristAttacks_2014attacks + ' Attacks'
            : '<h4 style="font-weight: bold;">Hover over a country for more information</h4>');
    };
	
	// Load 2014 GeoJson
	var terroristAttackLayer2014 = L.geoJson(TerroristAttacksYearByYear20102015, {
        style: style2014,
        onEachFeature: onEachFeature2014
        }
    );
	
	
	 function style2014(feature) {
        return {
            fillColor: getColor(feature.properties.TerroristAttacks_2014attacks),
            weight: 2,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
	
	
	function highlightFeature2014(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        terroristattack2014_control.update(layer.feature.properties);
    }
	
	function resetHighlight2014(e) {
        terroristAttackLayer2014.resetStyle(e.target);
		terroristattack2014_control.update();
       
    }
	
	function onEachFeature2014(feature, layer) {
        layer.on({
            mouseover: highlightFeature2014,
            mouseout: resetHighlight2014,
            click: zoomToFeature
        });
		
    }
	
	
	
	// End of 2010 - 2014 Terrorist Attack Layer

    //legend for twitter
    var legendTwitter = L.control({position: 'bottomright'});

    legendTwitter.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 2, 10, 26, 43, 67, 101, 128, 160],
            labels = [];

			div.innerHTML = "<h4><b><u>No of Tweets</u></b></h4>"
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
	
	
	//legend for Terrorist Attack by Year
    var legendTerroristAttackByYear = L.control({position: 'bottomright'});

    legendTerroristAttackByYear.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 2, 10, 26, 43, 67, 101, 128, 160],
            labels = [];

			div.innerHTML = "<h4><b><u>No of Attacks</u></b></h4>"
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };
	
	
	
	function onEachFeatureTwitter(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
		
		var popupContent= "<h4>Recent Tweets from " + feature.properties.NAME + "</h4> <ol>" + httpLinkConversion(feature.properties.TwitterData) + "</ol>";
		layer.bindPopup(popupContent);
    }
	
	
	function httpLinkConversion(TwitterData)
    {
	  
	  var temp=String(TwitterData);
	  var text = temp.replace(/,/g, "");
	  
	  
	  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	  var text1=text.replace(exp, "<a href='$1'>$1</a>");
	  var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
	  return text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a></br>');
    }
	

	// End of Twitter layer
	
    
	// Common Shared Functions
    
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
        twitter_L.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
	
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
	
	// End of common functions
	

    
    //Grid layer

    function styleGrid(feature) {
        return {
            fillColor: getColorGrid(feature.properties.AHP),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.4
        };
    }
    
    //interactive grids
    function getColorGrid(d) {
        return  d >= 2.0 ? '#4d0017' :
                d >= 1.5 ? '#800026' :
                d >= 1.0 ? '#E31A1C' :
                d >= 0.5   ? '#FD8D3C' : '#FED976';
    }
    
    var grid_L = L.geoJson(grid, {
        style: styleGrid,
        onEachFeature: onEachFeatureGrid
        }
    );
    console.log(grid);
    
    function onEachFeatureGrid(feature, layer) {
        layer.on({
            mouseover: highlightFeatureGrid,
            mouseout: resetHighlightGrid,
            click: zoomToFeature
        });
    }
    
    function highlightFeatureGrid(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 3,
            color: '#FEB24C'
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
            gridInfo.update();
        }
        gridInfo.update(layer.feature.properties);
    }
    
    function resetHighlightGrid(e) {
        grid_L.resetStyle(e.target);
        gridInfo.update();
    }
    
    var gridInfo = L.control();
    
    gridInfo.onAdd = function (map) {
        this._divGrid = L.DomUtil.create('div', 'gridInfo'); // create a div with a class "info"
        this.update();
        return this._divGrid;
    };

    // method that we will use to update the control based on feature properties passed
    gridInfo.update = function (props) {
        this._divGrid.innerHTML = "<h4>Grid's score based on AHP</h4>" +  (props ?
            '<b>Grid ID ' + props.ID + "</b><br/>Education Institutions: " + props.edu_count + "<br/>Government Institutions: " + props.gov_count + "<br/>Military Installations: " + props.mil_count + "<br/>Police Facilities: " + props.mil_count + "<br/>Relgious Sites: " + props.reli_count + "<br/><b>Transport Infrastructure: " + props.tran_count + "<br/><b>Computed Score: " + props.AHP + '</b>'
            : '<h4 style="font-weight: bold;">Hover over a grid for more information</h4>');
    };


	// End of Grid Layer
	
	
	// Terrorist attack layer
	var terroristattack_L = L.geoJson(terroristattack, {
	pointToLayer: function(feature, latlng){
		
	var attackCount = feature.properties.terroristAttackOnly_Attacks;
	var killedWoundedCount = feature.properties.sum;
	
	
	
	
	var killedwoundedcolor = killedwoundedcolorfunction(killedWoundedCount);
	var radius = terroristattackpropsymbolcolor(attackCount);

		return L.circleMarker(latlng, { 
		   fillColor: killedwoundedcolor,
		   color: killedwoundedcolor,
		   weight: 1, 
		   fillOpacity: 0.8 
		  }).setRadius(radius);
	},
	onEachFeature: onEachFeatureProportionate
});



	function terroristattackpropsymbolcolor(attackCount){
		
		// The classification for Proportionate symbol
	//1 - 340
	//340 - 1078
	//1078 - 2164
	//2164 - 7730
	//7730 - 10685
	
	// for circle categorization
	var radius = 0;
	switch(true) {
		case (attackCount> 0 && attackCount < 340):
			radius = 5;
			break;
		case (attackCount >= 340 && attackCount < 1079):
			radius = 10;
			break;
		case (attackCount >= 1078 && attackCount < 2165):
			radius = 15;
			break;
		case (attackCount >= 2164 && attackCount < 7731):
			radius = 20;
			break;
		case (attackCount >= 7730):
			radius = 25;
			break;
		default:
			//console.log("Attack count :" + attackCount); //check if anyone falls into default
			testcolor = 0;
			
	}
	return radius;
		
	}
	function killedwoundedcolorfunction(killedWoundedCount){
		
		// to change the different colors for proportionate symbols
	var killedwoundedcolor = "#FFFFFF";
	switch(true) {
		case (killedWoundedCount >0 && killedWoundedCount <1107):
			killedwoundedcolor =  "#D1C0C1";
			break;
		case (killedWoundedCount >1106 && killedWoundedCount <4106):
			killedwoundedcolor =  "#FC938E";
			break;
		case (killedWoundedCount >4105 && killedWoundedCount <16488):
			killedwoundedcolor =  "#EB6761";
			break;
		case (killedWoundedCount >16487 && killedWoundedCount <32816):
			killedwoundedcolor =  "#D34640";
			break;
		case (killedWoundedCount >32815):
			killedwoundedcolor =  "#C2261F";
			break;
		default:
		//console.log("KilledandWoundedCount : " + killedWoundedCount); //check if anyone falls into default
			killedwoundedcolor = "#FFFFFF";
			
	}

		return 	killedwoundedcolor
	}
	function onEachFeatureProportionate(feature, layer) {
        layer.on({
            mouseover: highlightFeatureProportionate,
            mouseout: resetHighlightProportionate,
            //click: zoomToFeature
        });
    }
	
	function highlightFeatureProportionate(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            color: '#666',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
        
        infoproportionate.update(layer.feature.properties);
    }
	
	//Layer for proportionate info
	var infoproportionate = L.control();

    infoproportionate.onAdd = function (map) {
        this._divinfoprop = L.DomUtil.create('div', 'infoproportionate'); // create a div with a class "info"
        this.update();
        return this._divinfoprop;
    };

    // method that we will use to update the control based on feature properties passed
    infoproportionate.update = function (props) {
        this._divinfoprop.innerHTML =   (props ?
            '<h4><u>' + props.NAME +'</u></h4><b>Terrorist Attacks: ' + props.terroristAttackOnly_Attacks + '</b><br/><b>Civilians Killed: ' + Math.ceil(props.terroristAttackOnly_People_Wounded) + '</b><br/><b>Civilians Wounded: ' + Math.ceil(props.terroristAttackOnly_People_Killed) + '</b><br/><b>Terrorist Killed: ' + props.terroristAttackOnly_Terrorist_Killed + '</b><br/><b>Terrorist Wounded: ' + props.terroristAttackOnly_Terrorist_Wounded + '</b>'
            : '<h4 style="font-weight: bold;">Hover over a circle for more information</h4>');
    };

    function resetHighlightProportionate(e) {
        terroristattack_L.resetStyle(e.target);
        infoproportionate.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

	// rounding function for proportionate symbol legend
	function roundNumber (input){
		return (Math.round(input/10)*10);
	}



	
	// Legend for proportionate symbol
	var proportionatelegend = L.control({position: 'bottomright'});
	
	proportionatelegend.onAdd = function(map) {
	var legendContainer = L.DomUtil.create("div", "proplegend");  
	var symbolsContainer = L.DomUtil.create("div", "symbolsContainer");
	//var classes = [roundNumber(min), roundNumber((max-min)/2), roundNumber(max)];
	var classes = [5,10,15,20,25];
	// Mapping legend values to circle size
	var classesLegend = ["1 - 340","340 - 1078","1078 - 2164","2164 - 7730",">=7730"];
	var legendCircle;  
	var lastRadius = 0;
	var currentRadius;
	var margin;
	
	
	
	$(legendContainer).append("<h3 id=’legendTitle’><b><u>Terrorist Attacks</b></u></h3>");
		
		for (var i = 0; i <= classes.length-1; i++) {  

			legendCircle = L.DomUtil.create("div", "legendCircle");  
			
			//currentRadius = calcPropRadius(classes[i]);
			currentRadius = classes[i];
			
			margin = -currentRadius - lastRadius;

			$(legendCircle).attr("style", "width: " + currentRadius*2 + 
				"px; height: " + currentRadius*2 + 
				"px; margin-left: " + margin + "px" );				
			$(legendCircle).append("<span class='legendValue'>"+classesLegend[i]+"</span>");

			$(symbolsContainer).append(legendCircle);

			lastRadius = currentRadius;

		}

		$(legendContainer).append(symbolsContainer); 
		
		// Adding bar legends
		legendBar = L.DomUtil.create("div", "legendBar");  
		 legendBar.innerHTML ='Killed / Wounded<table><tr><td class="color1"></td><td class="color2"></td><td class="color3"></td><td class="color4"></td><td class="color5"></td></tr></table><div class="container-legendbar"><div class="lefttext">Less</div><div class="righttext">More</div></div>';
        // Adding bar legend for Text
		//legendBarText = L.DomUtil.create("div", "legendBarText"); 
		
		$(legendContainer).append(legendBar);
		//$(legendContainer).append(legendBarText);
		return legendContainer; 

		};

	
		// End of terrorist attack layer
	
	
		//Terrorist Group Layer
		
		var terroristgroups = L.control();

    terroristgroups.onAdd = function (map) {
        this._divinfoterrorist = L.DomUtil.create('div', 'terroristgroups'); // create a div with a class "info"
        this.update();	
        return this._divinfoterrorist;
    };
	
	
	

    // method that we will use to update the control based on feature properties passed
    terroristgroups.update = function (props) {



		this._divinfoterrorist.innerHTML = '<h4> Top 15 Terrorist Groups </h4>';
       // this._divinfoterrorist.innerHTML += '<form><input id="command" type="checkbox" value="taliban"/>Taliban';
		//this._divinfoterrorist.innerHTML += '<input id="command" type="checkbox" value="isil"/>Islmaic State of Iraq and the Levant</form>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="taliban" name="terroristgroup" value="taliban">Taliban [3041 kills - 25.60%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="isil" name="terroristgroup" value="isil">Islmaic State of Iraq and the Levant [1481 kills - 12.47%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="alshabaab" name="terroristgroup" value="alshabaab">Al-Shabaab [1292 kills - 10.88%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="bokoharam" name="terroristgroup" value="bokoharam">Boko Haram [1197 kills - 10.08%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="ttp" name="terroristgroup" value="ttp">Tehrik-i-Taliban Pakistan (TTP) [759 kills - 6.39%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="aqap" name="terroristgroup" value="aqap">Al-Qa`ida in the Arabian Peninsula (AQAP) [725 kills - 6.10%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="npa" name="terroristgroup" value="npa">New People\'s Army (NPA) [659 kills - 5.55%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="maoists" name="terroristgroup" value="maoists">Maoists [577 kills - 4.86%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="farc" name="terroristgroup" value="farc">Revolutionary Armed Forces of Colombia (FARC) [551 kills - 4.64%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="alqaidainiraq" name="terroristgroup" value="alqaidainiraq">Al-Qa`ida in Iraq [444 kills - 3.74%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="donetsk" name="terroristgroup" value="donetsk">Donetsk People\'s Republic [294 kills - 2.47%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="seperatists" name="terroristgroup" value="seperatists">Separatists [256 kills - 2.16%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="muslimfund" name="terroristgroup" value="muslimfund">Muslim Fundamentalists [229 kills - 1.93%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="pkk" name="terroristgroup" value="pkk">Kurdistan Workers\' Party (PKK) [198 kills - 1.67%]<br>';
		 this._divinfoterrorist.innerHTML +='<input type="radio" id="fulani" name="terroristgroup" value="fulani">Fulani Militants [176 kills - 1.48%]';
		
    };
	
	// function to remove all terrorist group maps
	function removeTerroristGroupMaps(){
		map.removeLayer(taliban_l);
		map.removeLayer(isil_l);
		map.removeLayer(alshabaab_l);
		map.removeLayer(bokoharam_l);
		map.removeLayer(ttp_l);
		map.removeLayer(aqap_l);
		map.removeLayer(npa_l);
		map.removeLayer(maoists_l);
		map.removeLayer(farc_l);
		map.removeLayer(alqaidainiraq_l);
		map.removeLayer(donetsk_l);
		map.removeLayer(seperatists_l);
		map.removeLayer(muslimfund_l);
		map.removeLayer(pkk_l);
		map.removeLayer(fulani_l);
	} 
	
	$('a.overlay').click(function() {
    var tempString = $(this).attr('value');
	
	triggerOverLay(tempString);
	
});
	
    $('#play').click(function() {
        console.log("test1");
        playTimeLine();        
    });

    

    function playTimeLine(){
        console.log("test2");
        map.removeLayer(terroristAttackLayer2010);
        map.removeLayer(terroristAttackLayer2011);
        map.removeLayer(terroristAttackLayer2012);
        map.removeLayer(terroristAttackLayer2013);
        map.removeLayer(terroristAttackLayer2014);
       
        setTimeout(function(){
        terroristAttackLayer2010.addTo(map);
        }, 1000);
        setTimeout(function(){
            map.removeLayer(terroristAttackLayer2010);
        }, 4000);
        setTimeout(function(){
        terroristAttackLayer2011.addTo(map);
        }, 4010);
        setTimeout(function(){
            map.removeLayer(terroristAttackLayer2011);

        }, 7000);
        setTimeout(function(){
        terroristAttackLayer2012.addTo(map);
        }, 7010);
        setTimeout(function(){
            map.removeLayer(terroristAttackLayer2012);

        }, 10000);
        setTimeout(function(){
        terroristAttackLayer2013.addTo(map);
        }, 1010);
        setTimeout(function(){
            map.removeLayer(terroristAttackLayer2013);
        }, 13000);
        setTimeout(function(){
        terroristAttackLayer2014.addTo(map);
        }, 13010);
        setTimeout(function(){
        map.removeLayer(terroristAttackLayer2014);
        }, 16000);
        console.log("test3");
    }

    var isTerroristGrpLOpen = false;

	// Javascript for DIV overlayMaps
	function triggerOverLay(overlayName){
		
		console.log(overlayName);
	       
        if(isTerroristGrpLOpen){
            terroristGroupInfo.removeFrom(map);
            isTerroristGrpLOpen = false;
        }
		
		//remove all overlay
		map.removeLayer(terroristattack_L);
		map.removeLayer(terroristAttackLayer2010);
		map.removeLayer(terroristAttackLayer2011);
		map.removeLayer(terroristAttackLayer2012);
		map.removeLayer(terroristAttackLayer2013);
		map.removeLayer(terroristAttackLayer2014);
		
        map.removeLayer(moran_L);
		map.removeLayer(grid_L);
        map.removeLayer(twitter_L);

        removeTerroristGroupMaps();
            

		
		if(overlayName==="moran"){
			moran_L.addTo(map);
		}else if(overlayName==="twitter"){
			twitter_L.addTo(map);
		}else if(overlayName==="ahp"){
			grid_L.addTo(map);
		}else if(overlayName==="terroristattack"){
			terroristattack_L.addTo(map);
		}else if(overlayName==="terroristgroup"){
			//to check value from the other clicks instead
			// In Html, give it a class called overlay preferable in a href. then just put a value to check. refer to others as example
		}else if(overlayName==="terroristattacksbyyear"){
				//This layer adds to 2010 as default option due to UI requiring a hardcoded selected
                    terroristAttackLayer2010.addTo(map);
		}else if(overlayName==="2010"){
                    terroristAttackLayer2010.addTo(map);
		}else if(overlayName==="2011"){
                    terroristAttackLayer2011.addTo(map);
		}else if(overlayName==="2012"){
                    terroristAttackLayer2012.addTo(map);
		}else if(overlayName==="2013"){
                    terroristAttackLayer2013.addTo(map);
		}else if(overlayName==="2014"){
                    terroristAttackLayer2014.addTo(map);
		}else if(overlayName=="terroristGroups"){
                    terroristGroupInfo.addTo(map);
                    isTerroristGrpLOpen = true;
                    taliban_l.addTo(map);
                    initChart(); 
        }else{
                    //remove all overlay
                    map.removeLayer(terroristattack_L);
                    map.removeLayer(terroristAttackLayer2010);
                    map.removeLayer(terroristAttackLayer2011);
                    map.removeLayer(terroristAttackLayer2012);
                    map.removeLayer(terroristAttackLayer2013);
                    map.removeLayer(terroristAttackLayer2014);
                    
                    map.removeLayer(moran_L);
                    map.removeLayer(grid_L);
                    map.removeLayer(twitter_L);

                    removeTerroristGroupMaps();
        }
	
	
	/*
	
	"Terrorist Attacks" : terroristattack_L,
		"Terrorist Attack 2010" : terroristAttackLayer2010,
		"Terrorist Attack 2011" : terroristAttackLayer2011,
		"Terrorist Attack 2012" : terroristAttackLayer2012,
		"Terrorist Attack 2013" : terroristAttackLayer2013,
		"Terrorist Attack 2014" : terroristAttackLayer2014,
		"Terrorist Groups" : markerLayer,
        "Moran I" : moran_L,
		"Singapore's AHP Grids" : grid_L,
        "Twitter Analysis" : twitter_L
	
	
	*/
		
			
		// remove all other controls
		
		/*
		 map.removeControl(legendTwitter);
         map.removeControl(info);
		 map.removeControl(moranInfo);
	
		 	 map.removeControl(gridInfo);
		 map.removeControl(proportionatelegend);
		 map.removeControl(infoproportionate);
		 map.removeControl(terroristgroups);
				removeTerroristGroupMaps();	
			 map.removeControl(terroristattack2010_control);
			 map.removeControl(terroristattack2011_control);
			 map.removeControl(terroristattack2012_control);
			 map.removeControl(terroristattack2013_control);
			 map.removeControl(terroristattack2014_control);
			 
			 */
		
		
	}
	
	
	// Listeners for Terrorist Groups
	
	function handleCommand() {
		
		//to remove any other map that was selected previously
		
		removeTerroristGroupMaps();

		
		var selectedRadiobox = this.value;
 
		switch (selectedRadiobox) {
			case "taliban":
				taliban_l.addTo(map);
				break;
			case "isil":
				isil_l.addTo(map);
				break;
			case "alshabaab":
				alshabaab_l.addTo(map);
				break;
			case "bokoharam":
				bokoharam_l.addTo(map);
				break;
			case "ttp":
				ttp_l.addTo(map);
				break;
			case "aqap":
				aqap_l.addTo(map);
				break;
			case "npa":
				npa_l.addTo(map);
				break;
			case "maoists":
				maoists_l.addTo(map);
				break;
			case "farc":
				farc_l.addTo(map);
				break;
			case "alqaidainiraq":
				alqaidainiraq_l.addTo(map);
				break;
			case "donetsk":
				donetsk_l.addTo(map);
				break;
			case "seperatists":
				seperatists_l.addTo(map);
				break;
			case "muslimfund":
				muslimfund_l.addTo(map);
				break;
			case "pkk":
				pkk_l.addTo(map);
				break;
			case "fulani":
				fulani_l.addTo(map);
				break;
			
		}    
}




    
	// invisible point, otherwise error when triggering
	var markerLayer = L.marker([0, 0], { clickable: false })
	markerLayer.setOpacity(0);
	
	// adding the terrorist group layers
	var taliban_l = L.geoJson(taliban, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	
	var isil_l = L.geoJson(isil, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	
	var alshabaab_l = L.geoJson(alshabaab, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var bokoharam_l = L.geoJson(bokoharam, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var ttp_l = L.geoJson(ttp, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var aqap_l = L.geoJson(aqap, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var isil_l = L.geoJson(isil, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var npa_l = L.geoJson(npa, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var maoists_l = L.geoJson(maoists, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var farc_l = L.geoJson(farc, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var alqaidainiraq_l = L.geoJson(alqaidainiraq, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var donetsk_l = L.geoJson(donetsk, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var seperatists_l = L.geoJson(seperatists, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var muslimfund_l = L.geoJson(muslimfund, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var pkk_l = L.geoJson(pkk, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	var fulani_l = L.geoJson(fulani, {
        style: styleTerroristGroup,
        onEachFeature: onEachFeatureTerroristGroups
        }
    );
	
	function onEachFeatureTerroristGroups(feature, layer) {
        layer.on({
            mouseover: highlightFeatureTerroristGroups,
            mouseout: resetHighlightTerroristGroups,
            click: zoomToFeature
        });
    }
	
	function highlightFeatureTerroristGroups(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            fillColor: '#BD0026',
            color: '#000000' ,
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
            //moranInfo.update();
			terroristGroupInfo.update();
        }
        //moranInfo.update(layer.feature.properties);
		terroristGroupInfo.update(layer.feature.properties);
    }
    
    function resetHighlightTerroristGroups(e) {
		
		// workaround, somehow if you declare it for one layer it will apply to all
		taliban_l.resetStyle(e.target);
		terroristGroupInfo.update();
		
        //moranInfo.update();
    }
	
	var terroristGroupInfo = L.control();
    
    terroristGroupInfo.onAdd = function (map) {
        this._divterroristGroupInfo = L.DomUtil.create('div', 'terroristGroupInfo'); // create a div with a class "info"
        this.update();
        return this._divterroristGroupInfo;
    };

    // method that we will use to update the control based on feature properties passed
    terroristGroupInfo.update = function (props) {
        this._divterroristGroupInfo.innerHTML = (props ?
            '<H4><u><b>' + props.NAME + "</b></u></h4> " + props.Kills + " killed" 
            : '<h4 style="font-weight: bold;">Click on the barchart at the </br>right-side panel to view a different</br> terrorist groups attacking pattern.</br> You may hover over the</br> countries for more info</h4>');
    };
	
	function styleTerroristGroup(feature) {
        return {
            fillColor: '#BD0026',
            weight: 2,
            opacity: 1,
            color: '#ffffff',
            fillOpacity: 0.7
        };
    }
	
	
		// End of Terrorist Group Layer
	
	

	


    //load layers and bases into map
    var baseMaps = {
        "Emerald Mapbox" : emeraldBase,
        "Light Base" : lightBase
    };

    var overlayMaps = {
		"Terrorist Attacks" : terroristattack_L,
		"Terrorist Attack 2010" : terroristAttackLayer2010,
		"Terrorist Attack 2011" : terroristAttackLayer2011,
		"Terrorist Attack 2012" : terroristAttackLayer2012,
		"Terrorist Attack 2013" : terroristAttackLayer2013,
		"Terrorist Attack 2014" : terroristAttackLayer2014,
		"Terrorist Groups" : markerLayer,
        "Moran I" : moran_L,
		"Singapore's AHP Grids" : grid_L,
        "Twitter Analysis" : twitter_L
    }
    
    
    map.on('overlayadd', function (eventLayer) {
        // Switch to the Population legend...
        if (eventLayer.name === 'Twitter Analysis') {
            legendTwitter.addTo(this);
            info.addTo(map);
			map.setView([30.3753,  69.3451], 2);
        } else if (eventLayer.name === 'Moran I') { // Or switch to the Population Change legend...
            moranInfo.addTo(map);
			map.setView([30.3753,  69.3451], 2);
        } else if (eventLayer.name === "Singapore's AHP Grids"){
            map.setView([1.352083, 103.819836], 11);
			gridInfo.addTo(map);
        }else if (eventLayer.name === 'Terrorist Attacks') {
			proportionatelegend.addTo(map);  
			infoproportionate.addTo(map);
			map.setView([30.3753,  69.3451], 2);
		}else if (eventLayer.name === 'Terrorist Groups'){
				terroristgroups.addTo(map);
				terroristGroupInfo.addTo(map);
				// Interest of time, decided to declare eventlistener for every checkbox
				document.getElementById ("taliban").addEventListener ("click", handleCommand, false);
				document.getElementById ("isil").addEventListener ("click", handleCommand, false);
				document.getElementById ("alshabaab").addEventListener ("click", handleCommand, false);
				document.getElementById ("bokoharam").addEventListener ("click", handleCommand, false);
				document.getElementById ("ttp").addEventListener ("click", handleCommand, false);
				document.getElementById ("aqap").addEventListener ("click", handleCommand, false);
				document.getElementById ("npa").addEventListener ("click", handleCommand, false);
				document.getElementById ("maoists").addEventListener ("click", handleCommand, false);
				document.getElementById ("farc").addEventListener ("click", handleCommand, false);
				document.getElementById ("alqaidainiraq").addEventListener ("click", handleCommand, false);
				document.getElementById ("donetsk").addEventListener ("click", handleCommand, false);
				document.getElementById ("seperatists").addEventListener ("click", handleCommand, false);
				document.getElementById ("muslimfund").addEventListener ("click", handleCommand, false);
				document.getElementById ("pkk").addEventListener ("click", handleCommand, false);
				document.getElementById ("fulani").addEventListener ("click", handleCommand, false);
				map.setView([30.3753,  69.3451], 2);
				
			}else if(eventLayer.name === 'Terrorist Attack 2010'){
			terroristattack2010_control.addTo(map);
			legendTerroristAttackByYear.addTo(map);
		}else if(eventLayer.name === 'Terrorist Attack 2011'){
			terroristattack2011_control.addTo(map);
			legendTerroristAttackByYear.addTo(map);
		}else if(eventLayer.name === 'Terrorist Attack 2012'){
			terroristattack2012_control.addTo(map);
			legendTerroristAttackByYear.addTo(map);
		}else if(eventLayer.name === 'Terrorist Attack 2013'){
			terroristattack2013_control.addTo(map);
			legendTerroristAttackByYear.addTo(map);
		}else if(eventLayer.name === 'Terrorist Attack 2014'){
			terroristattack2014_control.addTo(map);
			legendTerroristAttackByYear.addTo(map);
		}
    });
	
	
    
    map.on('overlayremove', function (eventLayer) {
        // Switch to the Population legend...
        if (eventLayer.name === 'Twitter Analysis') {
            this.removeControl(legendTwitter);
            info.removeFrom(map);
        } else if (eventLayer.name === 'Moran I') { // Or switch to the Population Change legend...
            moranInfo.removeFrom(map);
        }else if (eventLayer.name === "Singapore's AHP Grids"){
			gridInfo.removeFrom(map);
			map.setView([30.3753,  69.3451], 2);
		}else if (eventLayer.name === 'Terrorist Attacks') { // Or switch to the Population Change legend...
            proportionatelegend.removeFrom(map);
			infoproportionate.removeFrom(map);
        }else if (eventLayer.name === 'Terrorist Groups') {
            terroristgroups.removeFrom(map);
			terroristGroupInfo.removeFrom(map);
			removeTerroristGroupMaps();	
        }else if(eventLayer.name === 'Terrorist Attack 2010'){
			terroristattack2010_control.removeFrom(map);
			legendTerroristAttackByYear.removeFrom(map);
		}else if(eventLayer.name === 'Terrorist Attack 2011'){
			terroristattack2011_control.removeFrom(map);
			legendTerroristAttackByYear.removeFrom(map);
		}else if(eventLayer.name === 'Terrorist Attack 2012'){
			terroristattack2012_control.removeFrom(map);
			legendTerroristAttackByYear.removeFrom(map);
		}else if(eventLayer.name === 'Terrorist Attack 2013'){
			terroristattack2013_control.removeFrom(map);
			legendTerroristAttackByYear.removeFrom(map);
		}else if(eventLayer.name === 'Terrorist Attack 2014'){
			terroristattack2014_control.removeFrom(map);
			legendTerroristAttackByYear.removeFrom(map);
		}
    });

    
    L.control.layers(baseMaps, overlayMaps).addTo(map);

	
	
		// Search function
	
	var searchControl = new L.Control.Search({
		layer: twitter_L,
		propertyName: 'NAME',
		circleLocation: false,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
			
  			map.setView(latlng, zoom); // access the zoom
		}
	});

	searchControl.on('search_locationfound', function(e) {
		
		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();

	}).on('search_collapsed', function(e) {

		//twitter_L.eachLayer(function(layer) {	//restore feature color
			//twitter_L.resetStyle(layer);
		//});	
	});
	
	map.addControl( searchControl );  //inizialize search control
	
	
	
	// End of search function
	
	
	// File upload
	 var style = {color:'red', opacity: 1.0, fillOpacity: 1.0, weight: 2, clickable: false};
        L.Control.FileLayerLoad.LABEL = '<i class="fa fa-folder-open"></i>';
        L.Control.fileLayerLoad({
            fitBounds: true,
            layerOptions: {style: style,
                           pointToLayer: function (data, latlng) {
                              return L.circleMarker(latlng, {style: style});
                           }},
        }).addTo(map);


}



