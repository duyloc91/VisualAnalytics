/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


AmCharts.makeChart("chartdiv2",
				{
					"type": "serial",
					"categoryField": "category",
					"startDuration": 1,
					"categoryAxis": {},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": " [[category]]: [[value]] Kills",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "Types of Attacks",
							"type": "column",
							"valueField": "column-1"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "Total Kills ",
							"title": "Kills"
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Types of Attacks Used By Terrorism (2010 - 2014)"
						}
					],
					"dataProvider": [
						{
							"category": "Bombing/Explosion",
							"column-1": "24976"
						},
						{
							"category": "Armed Assault",
							"column-1": "11016"
						},
						{
							"category": "Assassination",
							"column-1": "2881"
						},
						{
							"category": "Hostage Taking",
							"column-1": "2850"
						},
						{
							"category": "Facility/Infrastructure Attack",
							"column-1": "1899"
						}
					]
				}
			);