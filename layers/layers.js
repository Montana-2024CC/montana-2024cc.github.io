var wms_layers = [];

var format_bquxjob_633bb18c_18bee832e14_0 = new ol.format.GeoJSON();
var features_bquxjob_633bb18c_18bee832e14_0 = format_bquxjob_633bb18c_18bee832e14_0.readFeatures(json_bquxjob_633bb18c_18bee832e14_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bquxjob_633bb18c_18bee832e14_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bquxjob_633bb18c_18bee832e14_0.addFeatures(features_bquxjob_633bb18c_18bee832e14_0);
var lyr_bquxjob_633bb18c_18bee832e14_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bquxjob_633bb18c_18bee832e14_0, 
                style: style_bquxjob_633bb18c_18bee832e14_0,
                interactive: true,
    title: 'bquxjob_633bb18c_18bee832e14<br />\
    <img src="styles/legend/bquxjob_633bb18c_18bee832e14_0_0.png" /> 0 - 20%<br />\
    <img src="styles/legend/bquxjob_633bb18c_18bee832e14_0_1.png" /> 20- 40% <br />\
    <img src="styles/legend/bquxjob_633bb18c_18bee832e14_0_2.png" /> 40 - 50% <br />\
    <img src="styles/legend/bquxjob_633bb18c_18bee832e14_0_3.png" /> 50 - 60% <br />\
    <img src="styles/legend/bquxjob_633bb18c_18bee832e14_0_4.png" /> 60 - 80% <br />'
        });
var format_CountySeatsshp_1 = new ol.format.GeoJSON();
var features_CountySeatsshp_1 = format_CountySeatsshp_1.readFeatures(json_CountySeatsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountySeatsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountySeatsshp_1.addFeatures(features_CountySeatsshp_1);
var lyr_CountySeatsshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountySeatsshp_1, 
                style: style_CountySeatsshp_1,
                interactive: true,
                title: '<img src="styles/legend/CountySeatsshp_1.png" /> CountySeats.shp'
            });
var format_MontanaCounties_shpCountyLinesshp_2 = new ol.format.GeoJSON();
var features_MontanaCounties_shpCountyLinesshp_2 = format_MontanaCounties_shpCountyLinesshp_2.readFeatures(json_MontanaCounties_shpCountyLinesshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaCounties_shpCountyLinesshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaCounties_shpCountyLinesshp_2.addFeatures(features_MontanaCounties_shpCountyLinesshp_2);
var lyr_MontanaCounties_shpCountyLinesshp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaCounties_shpCountyLinesshp_2, 
                style: style_MontanaCounties_shpCountyLinesshp_2,
                interactive: true,
                title: '<img src="styles/legend/MontanaCounties_shpCountyLinesshp_2.png" /> MontanaCounties_shp/CountyLines.shp'
            });
var format_MontanaReservations_shpOffReservationTrustLandshp_3 = new ol.format.GeoJSON();
var features_MontanaReservations_shpOffReservationTrustLandshp_3 = format_MontanaReservations_shpOffReservationTrustLandshp_3.readFeatures(json_MontanaReservations_shpOffReservationTrustLandshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaReservations_shpOffReservationTrustLandshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaReservations_shpOffReservationTrustLandshp_3.addFeatures(features_MontanaReservations_shpOffReservationTrustLandshp_3);
var lyr_MontanaReservations_shpOffReservationTrustLandshp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaReservations_shpOffReservationTrustLandshp_3, 
                style: style_MontanaReservations_shpOffReservationTrustLandshp_3,
                interactive: true,
                title: '<img src="styles/legend/MontanaReservations_shpOffReservationTrustLandshp_3.png" /> MontanaReservations_shp/OffReservationTrustLand.shp'
            });
var format_MontanaReservations_shpMontanaReservationsshp_4 = new ol.format.GeoJSON();
var features_MontanaReservations_shpMontanaReservationsshp_4 = format_MontanaReservations_shpMontanaReservationsshp_4.readFeatures(json_MontanaReservations_shpMontanaReservationsshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaReservations_shpMontanaReservationsshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaReservations_shpMontanaReservationsshp_4.addFeatures(features_MontanaReservations_shpMontanaReservationsshp_4);
var lyr_MontanaReservations_shpMontanaReservationsshp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaReservations_shpMontanaReservationsshp_4, 
                style: style_MontanaReservations_shpMontanaReservationsshp_4,
                interactive: true,
                title: '<img src="styles/legend/MontanaReservations_shpMontanaReservationsshp_4.png" /> MontanaReservations_shp/MontanaReservations.shp'
            });

lyr_bquxjob_633bb18c_18bee832e14_0.setVisible(true);lyr_CountySeatsshp_1.setVisible(true);lyr_MontanaCounties_shpCountyLinesshp_2.setVisible(true);lyr_MontanaReservations_shpOffReservationTrustLandshp_3.setVisible(true);lyr_MontanaReservations_shpMontanaReservationsshp_4.setVisible(true);
var layersList = [lyr_bquxjob_633bb18c_18bee832e14_0,lyr_CountySeatsshp_1,lyr_MontanaCounties_shpCountyLinesshp_2,lyr_MontanaReservations_shpOffReservationTrustLandshp_3,lyr_MontanaReservations_shpMontanaReservationsshp_4];
lyr_bquxjob_633bb18c_18bee832e14_0.set('fieldAliases', {'ts_county_name': 'ts_county_name', 'ts_county_fips_code': 'ts_county_fips_code', 'sen_dem': 'sen_dem', 'sen_gop': 'sen_gop', 'sen_lbt': 'sen_lbt', 'reg_voters': 'reg_voters', });
lyr_CountySeatsshp_1.set('fieldAliases', {'NAME': 'NAME', 'LONG': 'LONG', 'LAT': 'LAT', });
lyr_MontanaCounties_shpCountyLinesshp_2.set('fieldAliases', {'NAME': 'NAME', 'NAMEABBR': 'NAMEABBR', 'COUNTYNUMB': 'COUNTYNUMB', 'ALLFIPS': 'ALLFIPS', 'FIPS': 'FIPS', 'LAST_UPDAT': 'LAST_UPDAT', 'NAMELABEL': 'NAMELABEL', 'BAS_ID': 'BAS_ID', 'ID_UK': 'ID_UK', 'BMIDTYPE': 'BMIDTYPE', 'ADJUST': 'ADJUST', 'MILES': 'MILES', 'Shape_Leng': 'Shape_Leng', });
lyr_MontanaReservations_shpOffReservationTrustLandshp_3.set('fieldAliases', {'NAME': 'NAME', 'AIANNHCE20': 'AIANNHCE20', 'LAST_UPDAT': 'LAST_UPDAT', 'ID_UK': 'ID_UK', 'NameCAPS': 'NameCAPS', 'NAMELSAD': 'NAMELSAD', 'AIANNHCE': 'AIANNHCE', 'AIANNHNS': 'AIANNHNS', 'GEOID': 'GEOID', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'COMPTYP': 'COMPTYP', 'AIANNHR': 'AIANNHR', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'PARCELID': 'PARCELID', 'COUNTYCD': 'COUNTYCD', 'CountyName': 'CountyName', 'CountyAbbr': 'CountyAbbr', 'GISAcres': 'GISAcres', 'Township': 'Township', 'Range': 'Range', 'Section': 'Section', 'LegalDescr': 'LegalDescr', 'PropType': 'PropType', 'TotalAcres': 'TotalAcres', 'OwnerName': 'OwnerName', 'OwnerCity': 'OwnerCity', 'OwnerState': 'OwnerState', 'OwnerZipCo': 'OwnerZipCo', 'Source': 'Source', 'Acres': 'Acres', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MontanaReservations_shpMontanaReservationsshp_4.set('fieldAliases', {'NAME': 'NAME', 'AIANNHCE10': 'AIANNHCE10', 'PKEY': 'PKEY', 'ENTITY_ID': 'ENTITY_ID', 'DATASET_ID': 'DATASET_ID', 'LAST_UPDAT': 'LAST_UPDAT', 'ID_UK': 'ID_UK', 'AIANNHCE': 'AIANNHCE', 'AIANNHNS': 'AIANNHNS', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'COMPTYP': 'COMPTYP', 'AIANNHR': 'AIANNHR', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bquxjob_633bb18c_18bee832e14_0.set('fieldImages', {'ts_county_name': '', 'ts_county_fips_code': '', 'sen_dem': '', 'sen_gop': '', 'sen_lbt': '', 'reg_voters': '', });
lyr_CountySeatsshp_1.set('fieldImages', {'NAME': '', 'LONG': '', 'LAT': '', });
lyr_MontanaCounties_shpCountyLinesshp_2.set('fieldImages', {'NAME': '', 'NAMEABBR': '', 'COUNTYNUMB': '', 'ALLFIPS': '', 'FIPS': '', 'LAST_UPDAT': '', 'NAMELABEL': '', 'BAS_ID': '', 'ID_UK': '', 'BMIDTYPE': '', 'ADJUST': '', 'MILES': '', 'Shape_Leng': '', });
lyr_MontanaReservations_shpOffReservationTrustLandshp_3.set('fieldImages', {'NAME': '', 'AIANNHCE20': '', 'LAST_UPDAT': '', 'ID_UK': '', 'NameCAPS': '', 'NAMELSAD': '', 'AIANNHCE': '', 'AIANNHNS': '', 'GEOID': '', 'LSAD': '', 'CLASSFP': '', 'COMPTYP': '', 'AIANNHR': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'PARCELID': '', 'COUNTYCD': '', 'CountyName': '', 'CountyAbbr': '', 'GISAcres': '', 'Township': '', 'Range': '', 'Section': '', 'LegalDescr': '', 'PropType': '', 'TotalAcres': '', 'OwnerName': '', 'OwnerCity': '', 'OwnerState': '', 'OwnerZipCo': '', 'Source': '', 'Acres': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_MontanaReservations_shpMontanaReservationsshp_4.set('fieldImages', {'NAME': '', 'AIANNHCE10': '', 'PKEY': '', 'ENTITY_ID': '', 'DATASET_ID': '', 'LAST_UPDAT': '', 'ID_UK': '', 'AIANNHCE': '', 'AIANNHNS': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'CLASSFP': '', 'COMPTYP': '', 'AIANNHR': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_bquxjob_633bb18c_18bee832e14_0.set('fieldLabels', {'ts_county_name': 'no label', 'ts_county_fips_code': 'no label', 'sen_dem': 'no label', 'sen_gop': 'no label', 'sen_lbt': 'no label', 'reg_voters': 'no label', });
lyr_CountySeatsshp_1.set('fieldLabels', {'NAME': 'no label', 'LONG': 'no label', 'LAT': 'no label', });
lyr_MontanaCounties_shpCountyLinesshp_2.set('fieldLabels', {'NAME': 'no label', 'NAMEABBR': 'no label', 'COUNTYNUMB': 'no label', 'ALLFIPS': 'no label', 'FIPS': 'no label', 'LAST_UPDAT': 'no label', 'NAMELABEL': 'no label', 'BAS_ID': 'no label', 'ID_UK': 'no label', 'BMIDTYPE': 'no label', 'ADJUST': 'no label', 'MILES': 'no label', 'Shape_Leng': 'no label', });
lyr_MontanaReservations_shpOffReservationTrustLandshp_3.set('fieldLabels', {'NAME': 'no label', 'AIANNHCE20': 'no label', 'LAST_UPDAT': 'no label', 'ID_UK': 'no label', 'NameCAPS': 'no label', 'NAMELSAD': 'no label', 'AIANNHCE': 'no label', 'AIANNHNS': 'no label', 'GEOID': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'COMPTYP': 'no label', 'AIANNHR': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'PARCELID': 'no label', 'COUNTYCD': 'no label', 'CountyName': 'no label', 'CountyAbbr': 'no label', 'GISAcres': 'no label', 'Township': 'no label', 'Range': 'no label', 'Section': 'no label', 'LegalDescr': 'no label', 'PropType': 'no label', 'TotalAcres': 'no label', 'OwnerName': 'no label', 'OwnerCity': 'no label', 'OwnerState': 'no label', 'OwnerZipCo': 'no label', 'Source': 'no label', 'Acres': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaReservations_shpMontanaReservationsshp_4.set('fieldLabels', {'NAME': 'no label', 'AIANNHCE10': 'no label', 'PKEY': 'no label', 'ENTITY_ID': 'no label', 'DATASET_ID': 'no label', 'LAST_UPDAT': 'no label', 'ID_UK': 'no label', 'AIANNHCE': 'no label', 'AIANNHNS': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'COMPTYP': 'no label', 'AIANNHR': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaReservations_shpMontanaReservationsshp_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'color-burn';
});