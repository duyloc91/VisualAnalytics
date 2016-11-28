/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var chart = AmCharts.makeChart("chart1div", {
                "type": "serial",
                "theme": "dark",
                "dataDateFormat": "YYYY",
                "titles": [
                    {
                        "id": "Title-1",
                        "size": 15,
                        "text": "Trends of Terrorism Attacks (1970 - 2014)"
                    }
                ],
                "dataProvider": [{
                    "date": "1970",
                    "value": 651
                },{
                    "date": "1971",
                    "value": 470
                },{
                    "date": "1972",
                    "value": 494
                },{
                    "date": "1973",
                    "value": 473
                },{
                    "date": "1974",
                    "value": 580
                },{
                    "date": "1975",
                    "value": 741
                },{
                    "date": "1976",
                    "value": 923
                },{
                    "date": "1977",
                    "value": 1318
                },{
                    "date": "1978",
                    "value": 1526
                },{
                    "date": "1979",
                    "value": 2661
                },{
                    "date": "1980",
                    "value": 2663
                },{
                    "date": "1981",
                    "value": 2585
                },{
                    "date": "1982",
                    "value": 2546
                },{
                    "date": "1983",
                    "value": 2871
                },{
                    "date": "1984",
                    "value": 3494
                },{
                    "date": "1985",
                    "value": 2917
                },{
                    "date": "1986",
                    "value": 2861
                },{
                    "date": "1987",
                    "value": 3185
                },{
                    "date": "1988",
                    "value": 3721
                },{
                    "date": "1989",
                    "value": 4322
                },{
                    "date": "1990",
                    "value": 3887
                },{
                    "date": "1991",
                    "value": 4683
                },{
                    "date": "1992",
                    "value": 5077
                },{
                    "date": "1993",
                    "value": 4459
                },{
                    "date": "1994",
                    "value": 3459
                },{
                    "date": "1995",
                    "value": 3083
                },{
                    "date": "1996",
                    "value": 3058
                },{
                    "date": "1997",
                    "value": 3204
                },{
                    "date": "1998",
                    "value": 933
                },{
                    "date": "1999",
                    "value": 1396
                },{
                    "date": "2000",
                    "value": 1814
                },{
                    "date": "2001",
                    "value": 1907
                },{
                    "date": "2002",
                    "value": 1332
                },{
                    "date": "2003",
                    "value": 1262
                },{
                    "date": "2004",
                    "value": 1161
                },{
                    "date": "2005",
                    "value": 2014
                },{
                    "date": "2006",
                    "value": 2751
                }, {
                    "date": "2007",
                    "value": 3241
                }, {
                    "date": "2008",
                    "value": 4788
                }, {
                    "date": "2009",
                    "value": 4722
                }, {
                    "date": "2010",
                    "value": 3934
                }, {
                    "date": "2011",
                    "value": 4177
                }, {
                    "date": "2012",
                    "value": 8491
                }, {
                    "date": "2013",
                    "value": 11973
                }, {
                    "date": "2014",
                    "value": 16795
                }],
                "valueAxes": [{
                    "maximum": 17000,
                    "minimum": 300,
                    "axisAlpha": 0,
                    "title": "Attacks",
                    "guides": [{
                        "fillAlpha": 0.1,
                        "fillColor": "#CC0000",
                        "lineAlpha": 0,
                        "toValue": 120,
                        "value": 0
                    }, {
                        "fillAlpha": 0.1,
                        "fillColor": "#0000cc",
                        "lineAlpha": 0,
                        "toValue": 200,
                        "value": 120
                    }]
                }],
                "graphs": [{
                    "bullet": "round",
                    "balloonText": "[[value]] Attacks",
                    "dashLength": 4,
                    "valueField": "value"
                }],
                "chartCursor": {
                    "cursorAlpha": 0,
                    "zoomable":false,
                    "valueZoomable":true
                },
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true
                },
                "valueScrollbar":{

                }
            });