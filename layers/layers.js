var wms_layers = [] ;


        var lyr_GoogleMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Google Maps Satellite Imagery',
            'type': 'base',
            'opacity': 0.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MontanaHouseDistricts_1 = new ol.format.GeoJSON();
var features_MontanaHouseDistricts_1 = format_MontanaHouseDistricts_1.readFeatures(json_MontanaHouseDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaHouseDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaHouseDistricts_1.addFeatures(features_MontanaHouseDistricts_1);
var lyr_MontanaHouseDistricts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaHouseDistricts_1, 
                style: style_MontanaHouseDistricts_1,
                interactive: true,
                title: '<img src="styles/legend/MontanaHouseDistricts_1.png" /> MontanaHouseDistricts'
            });
var format_MontanaSenateDistricts_2 = new ol.format.GeoJSON();
var features_MontanaSenateDistricts_2 = format_MontanaSenateDistricts_2.readFeatures(json_MontanaSenateDistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaSenateDistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaSenateDistricts_2.addFeatures(features_MontanaSenateDistricts_2);
var lyr_MontanaSenateDistricts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaSenateDistricts_2, 
                style: style_MontanaSenateDistricts_2,
                interactive: true,
                title: '<img src="styles/legend/MontanaSenateDistricts_2.png" /> MontanaSenateDistricts'
            });
var format_MontanaReservations_3 = new ol.format.GeoJSON();
var features_MontanaReservations_3 = format_MontanaReservations_3.readFeatures(json_MontanaReservations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaReservations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaReservations_3.addFeatures(features_MontanaReservations_3);
var lyr_MontanaReservations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaReservations_3, 
                style: style_MontanaReservations_3,
                interactive: true,
                title: '<img src="styles/legend/MontanaReservations_3.png" /> MontanaReservations'
            });
var format_2018ERPrecincts_4 = new ol.format.GeoJSON();
var features_2018ERPrecincts_4 = format_2018ERPrecincts_4.readFeatures(json_2018ERPrecincts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018ERPrecincts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018ERPrecincts_4.addFeatures(features_2018ERPrecincts_4);
var lyr_2018ERPrecincts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018ERPrecincts_4, 
                style: style_2018ERPrecincts_4,
                interactive: true,
    title: '2018 ER Precincts<br />\
    <img src="styles/legend/2018ERPrecincts_4_0.png" /> 0 - 0.1<br />\
    <img src="styles/legend/2018ERPrecincts_4_1.png" /> 0.1 - 0.15<br />\
    <img src="styles/legend/2018ERPrecincts_4_2.png" /> 0.15 - 0.2<br />\
    <img src="styles/legend/2018ERPrecincts_4_3.png" /> 0.2 - 0.25<br />\
    <img src="styles/legend/2018ERPrecincts_4_4.png" /> 0.25 - 0.3<br />\
    <img src="styles/legend/2018ERPrecincts_4_5.png" /> 0.3 - 0.35<br />\
    <img src="styles/legend/2018ERPrecincts_4_6.png" /> 0.35 - 0.4<br />\
    <img src="styles/legend/2018ERPrecincts_4_7.png" /> 0.4 - 0.45<br />\
    <img src="styles/legend/2018ERPrecincts_4_8.png" /> 0.45 - 0.5<br />\
    <img src="styles/legend/2018ERPrecincts_4_9.png" /> 0.5 - 0.55<br />\
    <img src="styles/legend/2018ERPrecincts_4_10.png" /> 0.55 - 0.6<br />\
    <img src="styles/legend/2018ERPrecincts_4_11.png" /> 0.6 - 0.65<br />\
    <img src="styles/legend/2018ERPrecincts_4_12.png" /> 0.65 - 0.7<br />\
    <img src="styles/legend/2018ERPrecincts_4_13.png" /> 0.7 - 0.75<br />\
    <img src="styles/legend/2018ERPrecincts_4_14.png" /> 0.75 - 0.8<br />\
    <img src="styles/legend/2018ERPrecincts_4_15.png" /> 0.8 - 0.85<br />\
    <img src="styles/legend/2018ERPrecincts_4_16.png" /> 0.85 - 0.9<br />\
    <img src="styles/legend/2018ERPrecincts_4_17.png" /> 0.9 - 0.95<br />\
    <img src="styles/legend/2018ERPrecincts_4_18.png" /> 0.95 - 1<br />'
        });
var format_MontanaHouseDistricts20242032_5 = new ol.format.GeoJSON();
var features_MontanaHouseDistricts20242032_5 = format_MontanaHouseDistricts20242032_5.readFeatures(json_MontanaHouseDistricts20242032_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaHouseDistricts20242032_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaHouseDistricts20242032_5.addFeatures(features_MontanaHouseDistricts20242032_5);
var lyr_MontanaHouseDistricts20242032_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaHouseDistricts20242032_5, 
                style: style_MontanaHouseDistricts20242032_5,
                interactive: true,
                title: '<img src="styles/legend/MontanaHouseDistricts20242032_5.png" /> MontanaHouseDistricts2024 -2032'
            });
var format_MontanaSenateDistricts20242032_6 = new ol.format.GeoJSON();
var features_MontanaSenateDistricts20242032_6 = format_MontanaSenateDistricts20242032_6.readFeatures(json_MontanaSenateDistricts20242032_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaSenateDistricts20242032_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaSenateDistricts20242032_6.addFeatures(features_MontanaSenateDistricts20242032_6);
var lyr_MontanaSenateDistricts20242032_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaSenateDistricts20242032_6, 
                style: style_MontanaSenateDistricts20242032_6,
                interactive: true,
                title: '<img src="styles/legend/MontanaSenateDistricts20242032_6.png" /> MontanaSenateDistricts 2024 - 2032'
            });
var format_CountySeats_7 = new ol.format.GeoJSON();
var features_CountySeats_7 = format_CountySeats_7.readFeatures(json_CountySeats_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountySeats_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountySeats_7.addFeatures(features_CountySeats_7);
var lyr_CountySeats_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountySeats_7, 
                style: style_CountySeats_7,
                interactive: true,
                title: '<img src="styles/legend/CountySeats_7.png" /> CountySeats'
            });

lyr_GoogleMapsSatelliteImagery_0.setVisible(true);lyr_MontanaHouseDistricts_1.setVisible(true);lyr_MontanaSenateDistricts_2.setVisible(true);lyr_MontanaReservations_3.setVisible(true);lyr_2018ERPrecincts_4.setVisible(true);lyr_MontanaHouseDistricts20242032_5.setVisible(true);lyr_MontanaSenateDistricts20242032_6.setVisible(true);lyr_CountySeats_7.setVisible(true);
var layersList = [lyr_GoogleMapsSatelliteImagery_0,lyr_MontanaHouseDistricts_1,lyr_MontanaSenateDistricts_2,lyr_MontanaReservations_3,lyr_2018ERPrecincts_4,lyr_MontanaHouseDistricts20242032_5,lyr_MontanaSenateDistricts20242032_6,lyr_CountySeats_7];
lyr_MontanaHouseDistricts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DistrictNu': 'DistrictNu', 'DistrictNa': 'DistrictNa', 'DistrictCo': 'DistrictCo', 'Notes': 'Notes', 'Source': 'Source', 'Metadata': 'Metadata', 'LastUpdate': 'LastUpdate', 'ID_UK': 'ID_UK', 'House': 'House', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MontanaSenateDistricts_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DistrictNu': 'DistrictNu', 'DistrictNa': 'DistrictNa', 'DistrictCo': 'DistrictCo', 'Notes': 'Notes', 'Source': 'Source', 'Metadata': 'Metadata', 'LastUpdate': 'LastUpdate', 'ID_UK': 'ID_UK', 'Senate': 'Senate', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MontanaReservations_3.set('fieldAliases', {'NAME': 'NAME', 'AIANNHCE10': 'AIANNHCE10', 'PKEY': 'PKEY', 'ENTITY_ID': 'ENTITY_ID', 'DATASET_ID': 'DATASET_ID', 'LAST_UPDAT': 'LAST_UPDAT', 'ID_UK': 'ID_UK', 'AIANNHCE': 'AIANNHCE', 'AIANNHNS': 'AIANNHNS', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'COMPTYP': 'COMPTYP', 'AIANNHR': 'AIANNHR', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2018ERPrecincts_4.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'COUNTY': 'COUNTY', 'NAME': 'NAME', 'SOSPRECINC': 'SOSPRECINC', 'G18USSRROS': 'G18USSRROS', 'G18USSDTES': 'G18USSDTES', 'G18USSLBRE': 'G18USSLBRE', 'G18HALRGIA': 'G18HALRGIA', 'G18HALDWIL': 'G18HALDWIL', 'G18HALLSWA': 'G18HALLSWA', 'G18CSCRGRE': 'G18CSCRGRE', 'G18CSCDREN': 'G18CSCDREN', 'G18CSCLROO': 'G18CSCLROO', });
lyr_MontanaHouseDistricts20242032_5.set('fieldAliases', {'ID': 'ID', 'Area': 'Area', 'District': 'District', 'Members': 'Members', 'Locked': 'Locked', 'Name': 'Name', 'Adj_Popula': 'Adj_Popula', 'AdjSup_Pop': 'AdjSup_Pop', 'AdjSup_Whi': 'AdjSup_Whi', 'AdjSup_Bla': 'AdjSup_Bla', 'AdjSup_AmI': 'AdjSup_AmI', 'AdjSup_Asi': 'AdjSup_Asi', 'AdjSup_His': 'AdjSup_His', 'AdjSup_NH_': 'AdjSup_NH_', 'AdjSup_NH1': 'AdjSup_NH1', 'AdjSup_N_1': 'AdjSup_N_1', 'AdjSup_N_2': 'AdjSup_N_2', 'AdjSup_18_': 'AdjSup_18_', 'AdjSup_181': 'AdjSup_181', 'AdjSup_182': 'AdjSup_182', 'AdjSup_183': 'AdjSup_183', 'AdjSup_184': 'AdjSup_184', 'AdjSup_H18': 'AdjSup_H18', 'AdjSup_N_3': 'AdjSup_N_3', 'AdjSup_N_4': 'AdjSup_N_4', 'AdjSup_N_5': 'AdjSup_N_5', 'AdjSup_N_6': 'AdjSup_N_6', 'Ideal_Valu': 'Ideal_Valu', '__Deviatio': '__Deviatio', '__AdjSup_N': '__AdjSup_N', '__AdjSup_B': '__AdjSup_B', '__AdjSup_A': '__AdjSup_A', '__AdjSup_1': '__AdjSup_1', '__AdjSup_H': '__AdjSup_H', '__AdjSup_2': '__AdjSup_2', 'Deviation': 'Deviation', '__AdjSup_3': '__AdjSup_3', 'District_N': 'District_N', '__AdjSup_W': '__AdjSup_W', '__AdjSup_4': '__AdjSup_4', '__AdjSup_5': '__AdjSup_5', '__AdjSup_6': '__AdjSup_6', '__AdjSup_7': '__AdjSup_7', '__AdjSup_8': '__AdjSup_8', '__AdjSup_9': '__AdjSup_9', '__AdjSu_10': '__AdjSu_10', '__AdjSu_11': '__AdjSu_11', '__AdjSu_12': '__AdjSu_12', '__AdjSu_13': '__AdjSu_13', '__AdjSu_14': '__AdjSu_14', 'District_L': 'District_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MontanaSenateDistricts20242032_6.set('fieldAliases', {'ID': 'ID', 'Area': 'Area', 'District': 'District', 'Members': 'Members', 'Locked': 'Locked', 'Name': 'Name', 'Adj_Popula': 'Adj_Popula', 'AdjSup_Pop': 'AdjSup_Pop', 'AdjSup_Whi': 'AdjSup_Whi', 'AdjSup_Bla': 'AdjSup_Bla', 'AdjSup_AmI': 'AdjSup_AmI', 'AdjSup_Asi': 'AdjSup_Asi', 'AdjSup_His': 'AdjSup_His', 'AdjSup_NH_': 'AdjSup_NH_', 'AdjSup_NH1': 'AdjSup_NH1', 'AdjSup_N_1': 'AdjSup_N_1', 'AdjSup_N_2': 'AdjSup_N_2', 'AdjSup_18_': 'AdjSup_18_', 'AdjSup_181': 'AdjSup_181', 'AdjSup_182': 'AdjSup_182', 'AdjSup_183': 'AdjSup_183', 'AdjSup_184': 'AdjSup_184', 'AdjSup_H18': 'AdjSup_H18', 'AdjSup_N_3': 'AdjSup_N_3', 'AdjSup_N_4': 'AdjSup_N_4', 'AdjSup_N_5': 'AdjSup_N_5', 'AdjSup_N_6': 'AdjSup_N_6', 'Ideal_Valu': 'Ideal_Valu', 'Deviation': 'Deviation', '__Deviatio': '__Deviatio', '__AdjSup_A': '__AdjSup_A', '__AdjSup_1': '__AdjSup_1', '__AdjSup_2': '__AdjSup_2', '__AdjSup_B': '__AdjSup_B', '__AdjSup_3': '__AdjSup_3', '__AdjSup_N': '__AdjSup_N', '__AdjSup_W': '__AdjSup_W', '__AdjSup_H': '__AdjSup_H', '__AdjSup_4': '__AdjSup_4', '__AdjSup_5': '__AdjSup_5', '__AdjSup_6': '__AdjSup_6', '__AdjSup_7': '__AdjSup_7', '__AdjSup_8': '__AdjSup_8', '__AdjSup_9': '__AdjSup_9', '__AdjSu_10': '__AdjSu_10', '__AdjSu_11': '__AdjSu_11', '__AdjSu_12': '__AdjSu_12', '__AdjSu_13': '__AdjSu_13', '__AdjSu_14': '__AdjSu_14', 'District_L': 'District_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CountySeats_7.set('fieldAliases', {'NAME': 'NAME', 'LONG': 'LONG', 'LAT': 'LAT', });
lyr_MontanaHouseDistricts_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DistrictNu': 'TextEdit', 'DistrictNa': 'TextEdit', 'DistrictCo': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', 'Metadata': 'TextEdit', 'LastUpdate': 'DateTime', 'ID_UK': 'TextEdit', 'House': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MontanaSenateDistricts_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'DistrictNu': 'TextEdit', 'DistrictNa': 'TextEdit', 'DistrictCo': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', 'Metadata': 'TextEdit', 'LastUpdate': 'DateTime', 'ID_UK': 'TextEdit', 'Senate': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MontanaReservations_3.set('fieldImages', {'NAME': '', 'AIANNHCE10': '', 'PKEY': '', 'ENTITY_ID': '', 'DATASET_ID': '', 'LAST_UPDAT': '', 'ID_UK': '', 'AIANNHCE': '', 'AIANNHNS': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'CLASSFP': '', 'COMPTYP': '', 'AIANNHR': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_2018ERPrecincts_4.set('fieldImages', {'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'COUNTY': 'TextEdit', 'NAME': 'TextEdit', 'SOSPRECINC': 'TextEdit', 'G18USSRROS': 'TextEdit', 'G18USSDTES': 'TextEdit', 'G18USSLBRE': 'TextEdit', 'G18HALRGIA': 'TextEdit', 'G18HALDWIL': 'TextEdit', 'G18HALLSWA': 'TextEdit', 'G18CSCRGRE': 'TextEdit', 'G18CSCDREN': 'TextEdit', 'G18CSCLROO': 'TextEdit', });
lyr_MontanaHouseDistricts20242032_5.set('fieldImages', {'ID': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Members': 'TextEdit', 'Locked': 'TextEdit', 'Name': 'TextEdit', 'Adj_Popula': 'TextEdit', 'AdjSup_Pop': 'TextEdit', 'AdjSup_Whi': 'TextEdit', 'AdjSup_Bla': 'TextEdit', 'AdjSup_AmI': 'TextEdit', 'AdjSup_Asi': 'TextEdit', 'AdjSup_His': 'TextEdit', 'AdjSup_NH_': 'TextEdit', 'AdjSup_NH1': 'TextEdit', 'AdjSup_N_1': 'TextEdit', 'AdjSup_N_2': 'TextEdit', 'AdjSup_18_': 'TextEdit', 'AdjSup_181': 'TextEdit', 'AdjSup_182': 'TextEdit', 'AdjSup_183': 'TextEdit', 'AdjSup_184': 'TextEdit', 'AdjSup_H18': 'TextEdit', 'AdjSup_N_3': 'TextEdit', 'AdjSup_N_4': 'TextEdit', 'AdjSup_N_5': 'TextEdit', 'AdjSup_N_6': 'TextEdit', 'Ideal_Valu': 'TextEdit', '__Deviatio': 'TextEdit', '__AdjSup_N': 'TextEdit', '__AdjSup_B': 'TextEdit', '__AdjSup_A': 'TextEdit', '__AdjSup_1': 'TextEdit', '__AdjSup_H': 'TextEdit', '__AdjSup_2': 'TextEdit', 'Deviation': 'TextEdit', '__AdjSup_3': 'TextEdit', 'District_N': 'TextEdit', '__AdjSup_W': 'TextEdit', '__AdjSup_4': 'TextEdit', '__AdjSup_5': 'TextEdit', '__AdjSup_6': 'TextEdit', '__AdjSup_7': 'TextEdit', '__AdjSup_8': 'TextEdit', '__AdjSup_9': 'TextEdit', '__AdjSu_10': 'TextEdit', '__AdjSu_11': 'TextEdit', '__AdjSu_12': 'TextEdit', '__AdjSu_13': 'TextEdit', '__AdjSu_14': 'TextEdit', 'District_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MontanaSenateDistricts20242032_6.set('fieldImages', {'ID': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Members': 'TextEdit', 'Locked': 'TextEdit', 'Name': 'TextEdit', 'Adj_Popula': 'TextEdit', 'AdjSup_Pop': 'TextEdit', 'AdjSup_Whi': 'TextEdit', 'AdjSup_Bla': 'TextEdit', 'AdjSup_AmI': 'TextEdit', 'AdjSup_Asi': 'TextEdit', 'AdjSup_His': 'TextEdit', 'AdjSup_NH_': 'TextEdit', 'AdjSup_NH1': 'TextEdit', 'AdjSup_N_1': 'TextEdit', 'AdjSup_N_2': 'TextEdit', 'AdjSup_18_': 'TextEdit', 'AdjSup_181': 'TextEdit', 'AdjSup_182': 'TextEdit', 'AdjSup_183': 'TextEdit', 'AdjSup_184': 'TextEdit', 'AdjSup_H18': 'TextEdit', 'AdjSup_N_3': 'TextEdit', 'AdjSup_N_4': 'TextEdit', 'AdjSup_N_5': 'TextEdit', 'AdjSup_N_6': 'TextEdit', 'Ideal_Valu': 'TextEdit', 'Deviation': 'TextEdit', '__Deviatio': 'TextEdit', '__AdjSup_A': 'TextEdit', '__AdjSup_1': 'TextEdit', '__AdjSup_2': 'TextEdit', '__AdjSup_B': 'TextEdit', '__AdjSup_3': 'TextEdit', '__AdjSup_N': 'TextEdit', '__AdjSup_W': 'TextEdit', '__AdjSup_H': 'TextEdit', '__AdjSup_4': 'TextEdit', '__AdjSup_5': 'TextEdit', '__AdjSup_6': 'TextEdit', '__AdjSup_7': 'TextEdit', '__AdjSup_8': 'TextEdit', '__AdjSup_9': 'TextEdit', '__AdjSu_10': 'TextEdit', '__AdjSu_11': 'TextEdit', '__AdjSu_12': 'TextEdit', '__AdjSu_13': 'TextEdit', '__AdjSu_14': 'TextEdit', 'District_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CountySeats_7.set('fieldImages', {'NAME': '', 'LONG': '', 'LAT': '', });
lyr_MontanaHouseDistricts_1.set('fieldLabels', {'OBJECTID': 'no label', 'DistrictNu': 'inline label', 'DistrictNa': 'no label', 'DistrictCo': 'no label', 'Notes': 'no label', 'Source': 'no label', 'Metadata': 'no label', 'LastUpdate': 'no label', 'ID_UK': 'no label', 'House': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_MontanaSenateDistricts_2.set('fieldLabels', {'OBJECTID': 'no label', 'DistrictNu': 'inline label', 'DistrictNa': 'no label', 'DistrictCo': 'no label', 'Notes': 'no label', 'Source': 'no label', 'Metadata': 'no label', 'LastUpdate': 'no label', 'ID_UK': 'no label', 'Senate': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaReservations_3.set('fieldLabels', {'NAME': 'inline label', 'AIANNHCE10': 'no label', 'PKEY': 'no label', 'ENTITY_ID': 'no label', 'DATASET_ID': 'no label', 'LAST_UPDAT': 'no label', 'ID_UK': 'no label', 'AIANNHCE': 'no label', 'AIANNHNS': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'COMPTYP': 'no label', 'AIANNHR': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_2018ERPrecincts_4.set('fieldLabels', {'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'COUNTY': 'inline label', 'NAME': 'no label', 'SOSPRECINC': 'no label', 'G18USSRROS': 'no label', 'G18USSDTES': 'no label', 'G18USSLBRE': 'no label', 'G18HALRGIA': 'no label', 'G18HALDWIL': 'no label', 'G18HALLSWA': 'no label', 'G18CSCRGRE': 'no label', 'G18CSCDREN': 'no label', 'G18CSCLROO': 'no label', });
lyr_MontanaHouseDistricts20242032_5.set('fieldLabels', {'ID': 'no label', 'Area': 'no label', 'District': 'inline label', 'Members': 'no label', 'Locked': 'no label', 'Name': 'no label', 'Adj_Popula': 'no label', 'AdjSup_Pop': 'no label', 'AdjSup_Whi': 'no label', 'AdjSup_Bla': 'no label', 'AdjSup_AmI': 'no label', 'AdjSup_Asi': 'no label', 'AdjSup_His': 'no label', 'AdjSup_NH_': 'no label', 'AdjSup_NH1': 'no label', 'AdjSup_N_1': 'no label', 'AdjSup_N_2': 'no label', 'AdjSup_18_': 'no label', 'AdjSup_181': 'no label', 'AdjSup_182': 'no label', 'AdjSup_183': 'no label', 'AdjSup_184': 'no label', 'AdjSup_H18': 'no label', 'AdjSup_N_3': 'no label', 'AdjSup_N_4': 'no label', 'AdjSup_N_5': 'no label', 'AdjSup_N_6': 'no label', 'Ideal_Valu': 'no label', '__Deviatio': 'no label', '__AdjSup_N': 'no label', '__AdjSup_B': 'no label', '__AdjSup_A': 'no label', '__AdjSup_1': 'no label', '__AdjSup_H': 'no label', '__AdjSup_2': 'no label', 'Deviation': 'no label', '__AdjSup_3': 'no label', 'District_N': 'no label', '__AdjSup_W': 'no label', '__AdjSup_4': 'no label', '__AdjSup_5': 'no label', '__AdjSup_6': 'no label', '__AdjSup_7': 'no label', '__AdjSup_8': 'no label', '__AdjSup_9': 'no label', '__AdjSu_10': 'no label', '__AdjSu_11': 'no label', '__AdjSu_12': 'no label', '__AdjSu_13': 'no label', '__AdjSu_14': 'no label', 'District_L': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaSenateDistricts20242032_6.set('fieldLabels', {'ID': 'no label', 'Area': 'no label', 'District': 'inline label', 'Members': 'no label', 'Locked': 'no label', 'Name': 'no label', 'Adj_Popula': 'no label', 'AdjSup_Pop': 'no label', 'AdjSup_Whi': 'no label', 'AdjSup_Bla': 'no label', 'AdjSup_AmI': 'no label', 'AdjSup_Asi': 'no label', 'AdjSup_His': 'no label', 'AdjSup_NH_': 'no label', 'AdjSup_NH1': 'no label', 'AdjSup_N_1': 'no label', 'AdjSup_N_2': 'no label', 'AdjSup_18_': 'no label', 'AdjSup_181': 'no label', 'AdjSup_182': 'no label', 'AdjSup_183': 'no label', 'AdjSup_184': 'no label', 'AdjSup_H18': 'no label', 'AdjSup_N_3': 'no label', 'AdjSup_N_4': 'no label', 'AdjSup_N_5': 'no label', 'AdjSup_N_6': 'no label', 'Ideal_Valu': 'no label', 'Deviation': 'no label', '__Deviatio': 'no label', '__AdjSup_A': 'no label', '__AdjSup_1': 'no label', '__AdjSup_2': 'no label', '__AdjSup_B': 'no label', '__AdjSup_3': 'no label', '__AdjSup_N': 'no label', '__AdjSup_W': 'no label', '__AdjSup_H': 'no label', '__AdjSup_4': 'no label', '__AdjSup_5': 'no label', '__AdjSup_6': 'no label', '__AdjSup_7': 'no label', '__AdjSup_8': 'no label', '__AdjSup_9': 'no label', '__AdjSu_10': 'no label', '__AdjSu_11': 'no label', '__AdjSu_12': 'no label', '__AdjSu_13': 'no label', '__AdjSu_14': 'no label', 'District_L': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CountySeats_7.set('fieldLabels', {'NAME': 'inline label', 'LONG': 'no label', 'LAT': 'no label', });
lyr_CountySeats_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
