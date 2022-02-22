require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(
      Map,
      FeatureLayer,
      MapView
    ) {

      // Create the map
      var map = new Map({
        basemap: "gray"
      });

      // Create the MapView
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-90, 38],
        zoom: 3
      });

      var featureLayer2 = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/State_Feature_Layer/FeatureServer",
        
      });
  
  map.add(featureLayer2);

      var template = { // autocasts as new PopupTemplate()
        title: "{State_Name}",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "K_12_Achievement_Score",
            label: "K-12 Achievement Score: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "State_Ranking",
            label: "State Ranking: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }, {
            fieldName: "Equity_Score",
            label: "State School Equity Score: ",
            visible: true,
            format: {
              digitSeparator: true,
              places: 0
            }
          }
                      ]
        }]
      };
  
      var featureLayer = new FeatureLayer({
        url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Sheet1_4-1/FeatureServer",
        outFields: ["*"],
        popupTemplate: template,
        
      });
  
      map.add(featureLayer);
  

   
      featureLayer.renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: 12,
        color: "red",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };
  
 
    });
