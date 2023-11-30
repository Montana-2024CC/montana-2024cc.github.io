var wms_layers = [];

var format_MontanaHouseDistricts_0 = new ol.format.GeoJSON();
var features_MontanaHouseDistricts_0 = format_MontanaHouseDistricts_0.readFeatures(json_MontanaHouseDistricts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaHouseDistricts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaHouseDistricts_0.addFeatures(features_MontanaHouseDistricts_0);
var lyr_MontanaHouseDistricts_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaHouseDistricts_0, 
                style: style_MontanaHouseDistricts_0,
                interactive: true,
                title: '<img src="styles/legend/MontanaHouseDistricts_0.png" /> MontanaHouseDistricts'
            });
var format_MontanaSenateDistricts_1 = new ol.format.GeoJSON();
var features_MontanaSenateDistricts_1 = format_MontanaSenateDistricts_1.readFeatures(json_MontanaSenateDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaSenateDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaSenateDistricts_1.addFeatures(features_MontanaSenateDistricts_1);
var lyr_MontanaSenateDistricts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaSenateDistricts_1, 
                style: style_MontanaSenateDistricts_1,
                interactive: true,
                title: '<img src="styles/legend/MontanaSenateDistricts_1.png" /> MontanaSenateDistricts'
            });
var format_MontanaReservations_2 = new ol.format.GeoJSON();
var features_MontanaReservations_2 = format_MontanaReservations_2.readFeatures(json_MontanaReservations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaReservations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaReservations_2.addFeatures(features_MontanaReservations_2);
var lyr_MontanaReservations_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaReservations_2, 
                style: style_MontanaReservations_2,
                interactive: true,
                title: '<img src="styles/legend/MontanaReservations_2.png" /> MontanaReservations'
            });
var format_2018ERPrecincts_3 = new ol.format.GeoJSON();
var features_2018ERPrecincts_3 = format_2018ERPrecincts_3.readFeatures(json_2018ERPrecincts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018ERPrecincts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018ERPrecincts_3.addFeatures(features_2018ERPrecincts_3);
var lyr_2018ERPrecincts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2018ERPrecincts_3, 
                style: style_2018ERPrecincts_3,
                interactive: true,
    title: '2018 ER Precincts<br />\
    <img src="styles/legend/2018ERPrecincts_3_0.png" /> 0.05369 - 0.10092<br />\
    <img src="styles/legend/2018ERPrecincts_3_1.png" /> 0.10092 - 0.1284<br />\
    <img src="styles/legend/2018ERPrecincts_3_2.png" /> 0.1284 - 0.15162<br />\
    <img src="styles/legend/2018ERPrecincts_3_3.png" /> 0.15162 - 0.18414<br />\
    <img src="styles/legend/2018ERPrecincts_3_4.png" /> 0.18414 - 0.19928<br />\
    <img src="styles/legend/2018ERPrecincts_3_5.png" /> 0.19928 - 0.20833<br />\
    <img src="styles/legend/2018ERPrecincts_3_6.png" /> 0.20833 - 0.21508<br />\
    <img src="styles/legend/2018ERPrecincts_3_7.png" /> 0.21508 - 0.22567<br />\
    <img src="styles/legend/2018ERPrecincts_3_8.png" /> 0.22567 - 0.23433<br />\
    <img src="styles/legend/2018ERPrecincts_3_9.png" /> 0.23433 - 0.2381<br />\
    <img src="styles/legend/2018ERPrecincts_3_10.png" /> 0.2381 - 0.24815<br />\
    <img src="styles/legend/2018ERPrecincts_3_11.png" /> 0.24815 - 0.2615<br />\
    <img src="styles/legend/2018ERPrecincts_3_12.png" /> 0.2615 - 0.26492<br />\
    <img src="styles/legend/2018ERPrecincts_3_13.png" /> 0.26492 - 0.26781<br />\
    <img src="styles/legend/2018ERPrecincts_3_14.png" /> 0.26781 - 0.27253<br />\
    <img src="styles/legend/2018ERPrecincts_3_15.png" /> 0.27253 - 0.27736<br />\
    <img src="styles/legend/2018ERPrecincts_3_16.png" /> 0.27736 - 0.28274<br />\
    <img src="styles/legend/2018ERPrecincts_3_17.png" /> 0.28274 - 0.28847<br />\
    <img src="styles/legend/2018ERPrecincts_3_18.png" /> 0.28847 - 0.29409<br />\
    <img src="styles/legend/2018ERPrecincts_3_19.png" /> 0.29409 - 0.29856<br />\
    <img src="styles/legend/2018ERPrecincts_3_20.png" /> 0.29856 - 0.30357<br />\
    <img src="styles/legend/2018ERPrecincts_3_21.png" /> 0.30357 - 0.30829<br />\
    <img src="styles/legend/2018ERPrecincts_3_22.png" /> 0.30829 - 0.31095<br />\
    <img src="styles/legend/2018ERPrecincts_3_23.png" /> 0.31095 - 0.3145<br />\
    <img src="styles/legend/2018ERPrecincts_3_24.png" /> 0.3145 - 0.31795<br />\
    <img src="styles/legend/2018ERPrecincts_3_25.png" /> 0.31795 - 0.32401<br />\
    <img src="styles/legend/2018ERPrecincts_3_26.png" /> 0.32401 - 0.3283<br />\
    <img src="styles/legend/2018ERPrecincts_3_27.png" /> 0.3283 - 0.33221<br />\
    <img src="styles/legend/2018ERPrecincts_3_28.png" /> 0.33221 - 0.33537<br />\
    <img src="styles/legend/2018ERPrecincts_3_29.png" /> 0.33537 - 0.33934<br />\
    <img src="styles/legend/2018ERPrecincts_3_30.png" /> 0.33934 - 0.34264<br />\
    <img src="styles/legend/2018ERPrecincts_3_31.png" /> 0.34264 - 0.34605<br />\
    <img src="styles/legend/2018ERPrecincts_3_32.png" /> 0.34605 - 0.34927<br />\
    <img src="styles/legend/2018ERPrecincts_3_33.png" /> 0.34927 - 0.3515<br />\
    <img src="styles/legend/2018ERPrecincts_3_34.png" /> 0.3515 - 0.35729<br />\
    <img src="styles/legend/2018ERPrecincts_3_35.png" /> 0.35729 - 0.35903<br />\
    <img src="styles/legend/2018ERPrecincts_3_36.png" /> 0.35903 - 0.3623<br />\
    <img src="styles/legend/2018ERPrecincts_3_37.png" /> 0.3623 - 0.36312<br />\
    <img src="styles/legend/2018ERPrecincts_3_38.png" /> 0.36312 - 0.36627<br />\
    <img src="styles/legend/2018ERPrecincts_3_39.png" /> 0.36627 - 0.36906<br />\
    <img src="styles/legend/2018ERPrecincts_3_40.png" /> 0.36906 - 0.37273<br />\
    <img src="styles/legend/2018ERPrecincts_3_41.png" /> 0.37273 - 0.38001<br />\
    <img src="styles/legend/2018ERPrecincts_3_42.png" /> 0.38001 - 0.38436<br />\
    <img src="styles/legend/2018ERPrecincts_3_43.png" /> 0.38436 - 0.38609<br />\
    <img src="styles/legend/2018ERPrecincts_3_44.png" /> 0.38609 - 0.39641<br />\
    <img src="styles/legend/2018ERPrecincts_3_45.png" /> 0.39641 - 0.40285<br />\
    <img src="styles/legend/2018ERPrecincts_3_46.png" /> 0.40285 - 0.41048<br />\
    <img src="styles/legend/2018ERPrecincts_3_47.png" /> 0.41048 - 0.41413<br />\
    <img src="styles/legend/2018ERPrecincts_3_48.png" /> 0.41413 - 0.41774<br />\
    <img src="styles/legend/2018ERPrecincts_3_49.png" /> 0.41774 - 0.42276<br />\
    <img src="styles/legend/2018ERPrecincts_3_50.png" /> 0.42276 - 0.42737<br />\
    <img src="styles/legend/2018ERPrecincts_3_51.png" /> 0.42737 - 0.43771<br />\
    <img src="styles/legend/2018ERPrecincts_3_52.png" /> 0.43771 - 0.44108<br />\
    <img src="styles/legend/2018ERPrecincts_3_53.png" /> 0.44108 - 0.44751<br />\
    <img src="styles/legend/2018ERPrecincts_3_54.png" /> 0.44751 - 0.45469<br />\
    <img src="styles/legend/2018ERPrecincts_3_55.png" /> 0.45469 - 0.45977<br />\
    <img src="styles/legend/2018ERPrecincts_3_56.png" /> 0.45977 - 0.46353<br />\
    <img src="styles/legend/2018ERPrecincts_3_57.png" /> 0.46353 - 0.46694<br />\
    <img src="styles/legend/2018ERPrecincts_3_58.png" /> 0.46694 - 0.46971<br />\
    <img src="styles/legend/2018ERPrecincts_3_59.png" /> 0.46971 - 0.47335<br />\
    <img src="styles/legend/2018ERPrecincts_3_60.png" /> 0.47335 - 0.47483<br />\
    <img src="styles/legend/2018ERPrecincts_3_61.png" /> 0.47483 - 0.476<br />\
    <img src="styles/legend/2018ERPrecincts_3_62.png" /> 0.476 - 0.48313<br />\
    <img src="styles/legend/2018ERPrecincts_3_63.png" /> 0.48313 - 0.48884<br />\
    <img src="styles/legend/2018ERPrecincts_3_64.png" /> 0.48884 - 0.49682<br />\
    <img src="styles/legend/2018ERPrecincts_3_65.png" /> 0.49682 - 0.5<br />\
    <img src="styles/legend/2018ERPrecincts_3_66.png" /> 0.5 - 0.50511<br />\
    <img src="styles/legend/2018ERPrecincts_3_67.png" /> 0.50511 - 0.51337<br />\
    <img src="styles/legend/2018ERPrecincts_3_68.png" /> 0.51337 - 0.51858<br />\
    <img src="styles/legend/2018ERPrecincts_3_69.png" /> 0.51858 - 0.5261<br />\
    <img src="styles/legend/2018ERPrecincts_3_70.png" /> 0.5261 - 0.53801<br />\
    <img src="styles/legend/2018ERPrecincts_3_71.png" /> 0.53801 - 0.54658<br />\
    <img src="styles/legend/2018ERPrecincts_3_72.png" /> 0.54658 - 0.56248<br />\
    <img src="styles/legend/2018ERPrecincts_3_73.png" /> 0.56248 - 0.56654<br />\
    <img src="styles/legend/2018ERPrecincts_3_74.png" /> 0.56654 - 0.57237<br />\
    <img src="styles/legend/2018ERPrecincts_3_75.png" /> 0.57237 - 0.57968<br />\
    <img src="styles/legend/2018ERPrecincts_3_76.png" /> 0.57968 - 0.58394<br />\
    <img src="styles/legend/2018ERPrecincts_3_77.png" /> 0.58394 - 0.60318<br />\
    <img src="styles/legend/2018ERPrecincts_3_78.png" /> 0.60318 - 0.61756<br />\
    <img src="styles/legend/2018ERPrecincts_3_79.png" /> 0.61756 - 0.62321<br />\
    <img src="styles/legend/2018ERPrecincts_3_80.png" /> 0.62321 - 0.63704<br />\
    <img src="styles/legend/2018ERPrecincts_3_81.png" /> 0.63704 - 0.65253<br />\
    <img src="styles/legend/2018ERPrecincts_3_82.png" /> 0.65253 - 0.67056<br />\
    <img src="styles/legend/2018ERPrecincts_3_83.png" /> 0.67056 - 0.67887<br />\
    <img src="styles/legend/2018ERPrecincts_3_84.png" /> 0.67887 - 0.69396<br />\
    <img src="styles/legend/2018ERPrecincts_3_85.png" /> 0.69396 - 0.70456<br />\
    <img src="styles/legend/2018ERPrecincts_3_86.png" /> 0.70456 - 0.71454<br />\
    <img src="styles/legend/2018ERPrecincts_3_87.png" /> 0.71454 - 0.72388<br />\
    <img src="styles/legend/2018ERPrecincts_3_88.png" /> 0.72388 - 0.73081<br />\
    <img src="styles/legend/2018ERPrecincts_3_89.png" /> 0.73081 - 0.74283<br />\
    <img src="styles/legend/2018ERPrecincts_3_90.png" /> 0.74283 - 0.75323<br />\
    <img src="styles/legend/2018ERPrecincts_3_91.png" /> 0.75323 - 0.76399<br />\
    <img src="styles/legend/2018ERPrecincts_3_92.png" /> 0.76399 - 0.77394<br />\
    <img src="styles/legend/2018ERPrecincts_3_93.png" /> 0.77394 - 0.79191<br />\
    <img src="styles/legend/2018ERPrecincts_3_94.png" /> 0.79191 - 0.82732<br />\
    <img src="styles/legend/2018ERPrecincts_3_95.png" /> 0.82732 - 0.85031<br />\
    <img src="styles/legend/2018ERPrecincts_3_96.png" /> 0.85031 - 0.87546<br />\
    <img src="styles/legend/2018ERPrecincts_3_97.png" /> 0.87546 - 0.9044<br />\
    <img src="styles/legend/2018ERPrecincts_3_98.png" /> 0.9044 - 0.95049<br />\
    <img src="styles/legend/2018ERPrecincts_3_99.png" /> 0.95049 - 0.98874<br />'
        });
var format_MontanaHouseDistricts20242032_4 = new ol.format.GeoJSON();
var features_MontanaHouseDistricts20242032_4 = format_MontanaHouseDistricts20242032_4.readFeatures(json_MontanaHouseDistricts20242032_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaHouseDistricts20242032_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaHouseDistricts20242032_4.addFeatures(features_MontanaHouseDistricts20242032_4);
var lyr_MontanaHouseDistricts20242032_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaHouseDistricts20242032_4, 
                style: style_MontanaHouseDistricts20242032_4,
                interactive: true,
                title: '<img src="styles/legend/MontanaHouseDistricts20242032_4.png" /> MontanaHouseDistricts2024 -2032'
            });
var format_MontanaSenateDistricts20242032_5 = new ol.format.GeoJSON();
var features_MontanaSenateDistricts20242032_5 = format_MontanaSenateDistricts20242032_5.readFeatures(json_MontanaSenateDistricts20242032_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontanaSenateDistricts20242032_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontanaSenateDistricts20242032_5.addFeatures(features_MontanaSenateDistricts20242032_5);
var lyr_MontanaSenateDistricts20242032_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MontanaSenateDistricts20242032_5, 
                style: style_MontanaSenateDistricts20242032_5,
                interactive: true,
                title: '<img src="styles/legend/MontanaSenateDistricts20242032_5.png" /> MontanaSenateDistricts 2024 - 2032'
            });
var format_County_6 = new ol.format.GeoJSON();
var features_County_6 = format_County_6.readFeatures(json_County_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_County_6.addFeatures(features_County_6);
var lyr_County_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_6, 
                style: style_County_6,
                interactive: true,
    title: 'County<br />\
    <img src="styles/legend/County_6_0.png" /> 11.88 - 12<br />\
    <img src="styles/legend/County_6_1.png" /> 12 - 12.5<br />\
    <img src="styles/legend/County_6_2.png" /> 12.5 - 13<br />\
    <img src="styles/legend/County_6_3.png" /> 13 - 13.5<br />\
    <img src="styles/legend/County_6_4.png" /> 13.5 - 14<br />\
    <img src="styles/legend/County_6_5.png" /> 14 - 14.5<br />\
    <img src="styles/legend/County_6_6.png" /> 14.5 - 15<br />\
    <img src="styles/legend/County_6_7.png" /> 15 - 15.5<br />\
    <img src="styles/legend/County_6_8.png" /> 15.5 - 16<br />\
    <img src="styles/legend/County_6_9.png" /> 16 - 16.5<br />\
    <img src="styles/legend/County_6_10.png" /> 16.5 - 17<br />\
    <img src="styles/legend/County_6_11.png" /> 17 - 17.5<br />\
    <img src="styles/legend/County_6_12.png" /> 17.5 - 18<br />\
    <img src="styles/legend/County_6_13.png" /> 18 - 18.5<br />\
    <img src="styles/legend/County_6_14.png" /> 18.5 - 19<br />\
    <img src="styles/legend/County_6_15.png" /> 19 - 19.5<br />\
    <img src="styles/legend/County_6_16.png" /> 19.5 - 20<br />\
    <img src="styles/legend/County_6_17.png" /> 20 - 20.5<br />\
    <img src="styles/legend/County_6_18.png" /> 20.5 - 21<br />\
    <img src="styles/legend/County_6_19.png" /> 21 - 21.5<br />\
    <img src="styles/legend/County_6_20.png" /> 21.5 - 22<br />\
    <img src="styles/legend/County_6_21.png" /> 22 - 22.5<br />\
    <img src="styles/legend/County_6_22.png" /> 22.5 - 23<br />\
    <img src="styles/legend/County_6_23.png" /> 23 - 23.5<br />\
    <img src="styles/legend/County_6_24.png" /> 23.5 - 24<br />\
    <img src="styles/legend/County_6_25.png" /> 24 - 24.5<br />\
    <img src="styles/legend/County_6_26.png" /> 24.5 - 25<br />\
    <img src="styles/legend/County_6_27.png" /> 25 - 25.5<br />\
    <img src="styles/legend/County_6_28.png" /> 25.5 - 26<br />\
    <img src="styles/legend/County_6_29.png" /> 26 - 26.5<br />\
    <img src="styles/legend/County_6_30.png" /> 26.5 - 27<br />\
    <img src="styles/legend/County_6_31.png" /> 27 - 27.5<br />\
    <img src="styles/legend/County_6_32.png" /> 27.5 - 28<br />\
    <img src="styles/legend/County_6_33.png" /> 28 - 28.5<br />\
    <img src="styles/legend/County_6_34.png" /> 28.5 - 29<br />\
    <img src="styles/legend/County_6_35.png" /> 29 - 29.5<br />\
    <img src="styles/legend/County_6_36.png" /> 29.5 - 30<br />\
    <img src="styles/legend/County_6_37.png" /> 30 - 30.5<br />\
    <img src="styles/legend/County_6_38.png" /> 30.5 - 31<br />\
    <img src="styles/legend/County_6_39.png" /> 31 - 31.5<br />\
    <img src="styles/legend/County_6_40.png" /> 31.5 - 32<br />\
    <img src="styles/legend/County_6_41.png" /> 32 - 32.5<br />\
    <img src="styles/legend/County_6_42.png" /> 32.5 - 33<br />\
    <img src="styles/legend/County_6_43.png" /> 33 - 33.5<br />\
    <img src="styles/legend/County_6_44.png" /> 33.5 - 34<br />\
    <img src="styles/legend/County_6_45.png" /> 34 - 34.5<br />\
    <img src="styles/legend/County_6_46.png" /> 34.5 - 35<br />\
    <img src="styles/legend/County_6_47.png" /> 35 - 35.5<br />\
    <img src="styles/legend/County_6_48.png" /> 35.5 - 36<br />\
    <img src="styles/legend/County_6_49.png" /> 36 - 36.5<br />\
    <img src="styles/legend/County_6_50.png" /> 36.5 - 37<br />\
    <img src="styles/legend/County_6_51.png" /> 37 - 37.5<br />\
    <img src="styles/legend/County_6_52.png" /> 37.5 - 38<br />\
    <img src="styles/legend/County_6_53.png" /> 38 - 38.5<br />\
    <img src="styles/legend/County_6_54.png" /> 38.5 - 39<br />\
    <img src="styles/legend/County_6_55.png" /> 39 - 39.5<br />\
    <img src="styles/legend/County_6_56.png" /> 39.5 - 40<br />\
    <img src="styles/legend/County_6_57.png" /> 40 - 40.5<br />\
    <img src="styles/legend/County_6_58.png" /> 40.5 - 41<br />\
    <img src="styles/legend/County_6_59.png" /> 41 - 41.5<br />\
    <img src="styles/legend/County_6_60.png" /> 41.5 - 42<br />\
    <img src="styles/legend/County_6_61.png" /> 42 - 42.5<br />\
    <img src="styles/legend/County_6_62.png" /> 42.5 - 43<br />\
    <img src="styles/legend/County_6_63.png" /> 43 - 43.5<br />\
    <img src="styles/legend/County_6_64.png" /> 43.5 - 44<br />\
    <img src="styles/legend/County_6_65.png" /> 44 - 44.5<br />\
    <img src="styles/legend/County_6_66.png" /> 44.5 - 45<br />\
    <img src="styles/legend/County_6_67.png" /> 45 - 45.5<br />\
    <img src="styles/legend/County_6_68.png" /> 45.5 - 46<br />\
    <img src="styles/legend/County_6_69.png" /> 46 - 46.5<br />\
    <img src="styles/legend/County_6_70.png" /> 46.5 - 47<br />\
    <img src="styles/legend/County_6_71.png" /> 47 - 47.5<br />\
    <img src="styles/legend/County_6_72.png" /> 47.5 - 48<br />\
    <img src="styles/legend/County_6_73.png" /> 48 - 48.5<br />\
    <img src="styles/legend/County_6_74.png" /> 48.5 - 49<br />\
    <img src="styles/legend/County_6_75.png" /> 49 - 49.5<br />\
    <img src="styles/legend/County_6_76.png" /> 49.5 - 50<br />\
    <img src="styles/legend/County_6_77.png" /> 50 - 50.5<br />\
    <img src="styles/legend/County_6_78.png" /> 50.5 - 51<br />\
    <img src="styles/legend/County_6_79.png" /> 51 - 51.5<br />\
    <img src="styles/legend/County_6_80.png" /> 51.5 - 52<br />\
    <img src="styles/legend/County_6_81.png" /> 52 - 52.5<br />\
    <img src="styles/legend/County_6_82.png" /> 52.5 - 53<br />\
    <img src="styles/legend/County_6_83.png" /> 53 - 53.5<br />\
    <img src="styles/legend/County_6_84.png" /> 53.5 - 54<br />\
    <img src="styles/legend/County_6_85.png" /> 54 - 54.5<br />\
    <img src="styles/legend/County_6_86.png" /> 54.5 - 55<br />\
    <img src="styles/legend/County_6_87.png" /> 55 - 55.5<br />\
    <img src="styles/legend/County_6_88.png" /> 55.5 - 56<br />\
    <img src="styles/legend/County_6_89.png" /> 56 - 56.5<br />\
    <img src="styles/legend/County_6_90.png" /> 56.5 - 57<br />\
    <img src="styles/legend/County_6_91.png" /> 57 - 57.5<br />\
    <img src="styles/legend/County_6_92.png" /> 57.5 - 58<br />\
    <img src="styles/legend/County_6_93.png" /> 58 - 58.5<br />\
    <img src="styles/legend/County_6_94.png" /> 58.5 - 59<br />\
    <img src="styles/legend/County_6_95.png" /> 59 - 59.5<br />\
    <img src="styles/legend/County_6_96.png" /> 59.5 - 60<br />\
    <img src="styles/legend/County_6_97.png" /> 60 - 60.5<br />\
    <img src="styles/legend/County_6_98.png" /> 60.5 - 61<br />\
    <img src="styles/legend/County_6_99.png" /> 61 - 61.5<br />\
    <img src="styles/legend/County_6_100.png" /> 61.5 - 62<br />\
    <img src="styles/legend/County_6_101.png" /> 62 - 62.5<br />\
    <img src="styles/legend/County_6_102.png" /> 62.5 - 63<br />\
    <img src="styles/legend/County_6_103.png" /> 63 - 63.5<br />\
    <img src="styles/legend/County_6_104.png" /> 63.5 - 64<br />\
    <img src="styles/legend/County_6_105.png" /> 64 - 64.5<br />\
    <img src="styles/legend/County_6_106.png" /> 64.5 - 65<br />\
    <img src="styles/legend/County_6_107.png" /> 65 - 65.5<br />\
    <img src="styles/legend/County_6_108.png" /> 65.5 - 66<br />\
    <img src="styles/legend/County_6_109.png" /> 66 - 66.5<br />\
    <img src="styles/legend/County_6_110.png" /> 66.5 - 67<br />\
    <img src="styles/legend/County_6_111.png" /> 67 - 67.5<br />\
    <img src="styles/legend/County_6_112.png" /> 67.5 - 68<br />\
    <img src="styles/legend/County_6_113.png" /> 68 - 68.5<br />\
    <img src="styles/legend/County_6_114.png" /> 68.5 - 69<br />\
    <img src="styles/legend/County_6_115.png" /> 69 - 69.5<br />\
    <img src="styles/legend/County_6_116.png" /> 69.5 - 70<br />\
    <img src="styles/legend/County_6_117.png" /> 70 - 70.5<br />\
    <img src="styles/legend/County_6_118.png" /> 70.5 - 71<br />\
    <img src="styles/legend/County_6_119.png" /> 71 - 71.5<br />\
    <img src="styles/legend/County_6_120.png" /> 71.5 - 72<br />\
    <img src="styles/legend/County_6_121.png" /> 72 - 72.5<br />\
    <img src="styles/legend/County_6_122.png" /> 72.5 - 73<br />\
    <img src="styles/legend/County_6_123.png" /> 73 - 73.5<br />\
    <img src="styles/legend/County_6_124.png" /> 73.5 - 74<br />\
    <img src="styles/legend/County_6_125.png" /> 74 - 74.5<br />\
    <img src="styles/legend/County_6_126.png" /> 74.5 - 75<br />\
    <img src="styles/legend/County_6_127.png" /> 75 - 75.14<br />'
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

lyr_MontanaHouseDistricts_0.setVisible(true);lyr_MontanaSenateDistricts_1.setVisible(true);lyr_MontanaReservations_2.setVisible(true);lyr_2018ERPrecincts_3.setVisible(true);lyr_MontanaHouseDistricts20242032_4.setVisible(true);lyr_MontanaSenateDistricts20242032_5.setVisible(true);lyr_County_6.setVisible(true);lyr_CountySeats_7.setVisible(true);
var layersList = [lyr_MontanaHouseDistricts_0,lyr_MontanaSenateDistricts_1,lyr_MontanaReservations_2,lyr_2018ERPrecincts_3,lyr_MontanaHouseDistricts20242032_4,lyr_MontanaSenateDistricts20242032_5,lyr_County_6,lyr_CountySeats_7];
lyr_MontanaHouseDistricts_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DistrictNu': 'DistrictNu', 'DistrictNa': 'DistrictNa', 'DistrictCo': 'DistrictCo', 'Notes': 'Notes', 'Source': 'Source', 'Metadata': 'Metadata', 'LastUpdate': 'LastUpdate', 'ID_UK': 'ID_UK', 'House': 'House', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MontanaSenateDistricts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DistrictNu': 'DistrictNu', 'DistrictNa': 'DistrictNa', 'DistrictCo': 'DistrictCo', 'Notes': 'Notes', 'Source': 'Source', 'Metadata': 'Metadata', 'LastUpdate': 'LastUpdate', 'ID_UK': 'ID_UK', 'Senate': 'Senate', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MontanaReservations_2.set('fieldAliases', {'NAME': 'NAME', 'AIANNHCE10': 'AIANNHCE10', 'PKEY': 'PKEY', 'ENTITY_ID': 'ENTITY_ID', 'DATASET_ID': 'DATASET_ID', 'LAST_UPDAT': 'LAST_UPDAT', 'ID_UK': 'ID_UK', 'AIANNHCE': 'AIANNHCE', 'AIANNHNS': 'AIANNHNS', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'COMPTYP': 'COMPTYP', 'AIANNHR': 'AIANNHR', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2018ERPrecincts_3.set('fieldAliases', {'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'COUNTY': 'COUNTY', 'NAME': 'NAME', 'SOSPRECINC': 'SOSPRECINC', 'G18USSRROS': 'G18USSRROS', 'G18USSDTES': 'G18USSDTES', 'G18USSLBRE': 'G18USSLBRE', 'G18HALRGIA': 'G18HALRGIA', 'G18HALDWIL': 'G18HALDWIL', 'G18HALLSWA': 'G18HALLSWA', 'G18CSCRGRE': 'G18CSCRGRE', 'G18CSCDREN': 'G18CSCDREN', 'G18CSCLROO': 'G18CSCLROO', });
lyr_MontanaHouseDistricts20242032_4.set('fieldAliases', {'ID': 'ID', 'Area': 'Area', 'District': 'District', 'Members': 'Members', 'Locked': 'Locked', 'Name': 'Name', 'Adj_Popula': 'Adj_Popula', 'AdjSup_Pop': 'AdjSup_Pop', 'AdjSup_Whi': 'AdjSup_Whi', 'AdjSup_Bla': 'AdjSup_Bla', 'AdjSup_AmI': 'AdjSup_AmI', 'AdjSup_Asi': 'AdjSup_Asi', 'AdjSup_His': 'AdjSup_His', 'AdjSup_NH_': 'AdjSup_NH_', 'AdjSup_NH1': 'AdjSup_NH1', 'AdjSup_N_1': 'AdjSup_N_1', 'AdjSup_N_2': 'AdjSup_N_2', 'AdjSup_18_': 'AdjSup_18_', 'AdjSup_181': 'AdjSup_181', 'AdjSup_182': 'AdjSup_182', 'AdjSup_183': 'AdjSup_183', 'AdjSup_184': 'AdjSup_184', 'AdjSup_H18': 'AdjSup_H18', 'AdjSup_N_3': 'AdjSup_N_3', 'AdjSup_N_4': 'AdjSup_N_4', 'AdjSup_N_5': 'AdjSup_N_5', 'AdjSup_N_6': 'AdjSup_N_6', 'Ideal_Valu': 'Ideal_Valu', '__Deviatio': '__Deviatio', '__AdjSup_N': '__AdjSup_N', '__AdjSup_B': '__AdjSup_B', '__AdjSup_A': '__AdjSup_A', '__AdjSup_1': '__AdjSup_1', '__AdjSup_H': '__AdjSup_H', '__AdjSup_2': '__AdjSup_2', 'Deviation': 'Deviation', '__AdjSup_3': '__AdjSup_3', 'District_N': 'District_N', '__AdjSup_W': '__AdjSup_W', '__AdjSup_4': '__AdjSup_4', '__AdjSup_5': '__AdjSup_5', '__AdjSup_6': '__AdjSup_6', '__AdjSup_7': '__AdjSup_7', '__AdjSup_8': '__AdjSup_8', '__AdjSup_9': '__AdjSup_9', '__AdjSu_10': '__AdjSu_10', '__AdjSu_11': '__AdjSu_11', '__AdjSu_12': '__AdjSu_12', '__AdjSu_13': '__AdjSu_13', '__AdjSu_14': '__AdjSu_14', 'District_L': 'District_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MontanaSenateDistricts20242032_5.set('fieldAliases', {'ID': 'ID', 'Area': 'Area', 'District': 'District', 'Members': 'Members', 'Locked': 'Locked', 'Name': 'Name', 'Adj_Popula': 'Adj_Popula', 'AdjSup_Pop': 'AdjSup_Pop', 'AdjSup_Whi': 'AdjSup_Whi', 'AdjSup_Bla': 'AdjSup_Bla', 'AdjSup_AmI': 'AdjSup_AmI', 'AdjSup_Asi': 'AdjSup_Asi', 'AdjSup_His': 'AdjSup_His', 'AdjSup_NH_': 'AdjSup_NH_', 'AdjSup_NH1': 'AdjSup_NH1', 'AdjSup_N_1': 'AdjSup_N_1', 'AdjSup_N_2': 'AdjSup_N_2', 'AdjSup_18_': 'AdjSup_18_', 'AdjSup_181': 'AdjSup_181', 'AdjSup_182': 'AdjSup_182', 'AdjSup_183': 'AdjSup_183', 'AdjSup_184': 'AdjSup_184', 'AdjSup_H18': 'AdjSup_H18', 'AdjSup_N_3': 'AdjSup_N_3', 'AdjSup_N_4': 'AdjSup_N_4', 'AdjSup_N_5': 'AdjSup_N_5', 'AdjSup_N_6': 'AdjSup_N_6', 'Ideal_Valu': 'Ideal_Valu', 'Deviation': 'Deviation', '__Deviatio': '__Deviatio', '__AdjSup_A': '__AdjSup_A', '__AdjSup_1': '__AdjSup_1', '__AdjSup_2': '__AdjSup_2', '__AdjSup_B': '__AdjSup_B', '__AdjSup_3': '__AdjSup_3', '__AdjSup_N': '__AdjSup_N', '__AdjSup_W': '__AdjSup_W', '__AdjSup_H': '__AdjSup_H', '__AdjSup_4': '__AdjSup_4', '__AdjSup_5': '__AdjSup_5', '__AdjSup_6': '__AdjSup_6', '__AdjSup_7': '__AdjSup_7', '__AdjSup_8': '__AdjSup_8', '__AdjSup_9': '__AdjSup_9', '__AdjSu_10': '__AdjSu_10', '__AdjSu_11': '__AdjSu_11', '__AdjSu_12': '__AdjSu_12', '__AdjSu_13': '__AdjSu_13', '__AdjSu_14': '__AdjSu_14', 'District_L': 'District_L', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_County_6.set('fieldAliases', {'NAME': 'NAME', 'NAMEABBR': 'NAMEABBR', 'COUNTYNUMB': 'COUNTYNUMB', 'PKEY': 'PKEY', 'SQMILES': 'SQMILES', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'ALLFIPS': 'ALLFIPS', 'FIPS': 'FIPS', 'LAST_UPDAT': 'LAST_UPDAT', 'NAMELABEL': 'NAMELABEL', 'BAS_ID': 'BAS_ID', 'ID_UK': 'ID_UK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'bquxjob_633bb18c_18bee832e14_sen_dem': 'bquxjob_633bb18c_18bee832e14_sen_dem', 'bquxjob_633bb18c_18bee832e14_sen_gop': 'bquxjob_633bb18c_18bee832e14_sen_gop', 'bquxjob_633bb18c_18bee832e14_sen_lbt': 'bquxjob_633bb18c_18bee832e14_sen_lbt', });
lyr_CountySeats_7.set('fieldAliases', {'NAME': 'NAME', 'LONG': 'LONG', 'LAT': 'LAT', });
lyr_MontanaHouseDistricts_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'DistrictNu': 'TextEdit', 'DistrictNa': 'TextEdit', 'DistrictCo': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', 'Metadata': 'TextEdit', 'LastUpdate': 'DateTime', 'ID_UK': 'TextEdit', 'House': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MontanaSenateDistricts_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DistrictNu': 'TextEdit', 'DistrictNa': 'TextEdit', 'DistrictCo': 'TextEdit', 'Notes': 'TextEdit', 'Source': 'TextEdit', 'Metadata': 'TextEdit', 'LastUpdate': 'DateTime', 'ID_UK': 'TextEdit', 'Senate': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MontanaReservations_2.set('fieldImages', {'NAME': '', 'AIANNHCE10': '', 'PKEY': '', 'ENTITY_ID': '', 'DATASET_ID': '', 'LAST_UPDAT': '', 'ID_UK': '', 'AIANNHCE': '', 'AIANNHNS': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'CLASSFP': '', 'COMPTYP': '', 'AIANNHR': '', 'MTFCC': '', 'FUNCSTAT': '', 'ALAND': '', 'AWATER': '', 'INTPTLAT': '', 'INTPTLON': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_2018ERPrecincts_3.set('fieldImages', {'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'COUNTY': 'TextEdit', 'NAME': 'TextEdit', 'SOSPRECINC': 'TextEdit', 'G18USSRROS': 'TextEdit', 'G18USSDTES': 'TextEdit', 'G18USSLBRE': 'TextEdit', 'G18HALRGIA': 'TextEdit', 'G18HALDWIL': 'TextEdit', 'G18HALLSWA': 'TextEdit', 'G18CSCRGRE': 'TextEdit', 'G18CSCDREN': 'TextEdit', 'G18CSCLROO': 'TextEdit', });
lyr_MontanaHouseDistricts20242032_4.set('fieldImages', {'ID': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Members': 'TextEdit', 'Locked': 'TextEdit', 'Name': 'TextEdit', 'Adj_Popula': 'TextEdit', 'AdjSup_Pop': 'TextEdit', 'AdjSup_Whi': 'TextEdit', 'AdjSup_Bla': 'TextEdit', 'AdjSup_AmI': 'TextEdit', 'AdjSup_Asi': 'TextEdit', 'AdjSup_His': 'TextEdit', 'AdjSup_NH_': 'TextEdit', 'AdjSup_NH1': 'TextEdit', 'AdjSup_N_1': 'TextEdit', 'AdjSup_N_2': 'TextEdit', 'AdjSup_18_': 'TextEdit', 'AdjSup_181': 'TextEdit', 'AdjSup_182': 'TextEdit', 'AdjSup_183': 'TextEdit', 'AdjSup_184': 'TextEdit', 'AdjSup_H18': 'TextEdit', 'AdjSup_N_3': 'TextEdit', 'AdjSup_N_4': 'TextEdit', 'AdjSup_N_5': 'TextEdit', 'AdjSup_N_6': 'TextEdit', 'Ideal_Valu': 'TextEdit', '__Deviatio': 'TextEdit', '__AdjSup_N': 'TextEdit', '__AdjSup_B': 'TextEdit', '__AdjSup_A': 'TextEdit', '__AdjSup_1': 'TextEdit', '__AdjSup_H': 'TextEdit', '__AdjSup_2': 'TextEdit', 'Deviation': 'TextEdit', '__AdjSup_3': 'TextEdit', 'District_N': 'TextEdit', '__AdjSup_W': 'TextEdit', '__AdjSup_4': 'TextEdit', '__AdjSup_5': 'TextEdit', '__AdjSup_6': 'TextEdit', '__AdjSup_7': 'TextEdit', '__AdjSup_8': 'TextEdit', '__AdjSup_9': 'TextEdit', '__AdjSu_10': 'TextEdit', '__AdjSu_11': 'TextEdit', '__AdjSu_12': 'TextEdit', '__AdjSu_13': 'TextEdit', '__AdjSu_14': 'TextEdit', 'District_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MontanaSenateDistricts20242032_5.set('fieldImages', {'ID': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Members': 'TextEdit', 'Locked': 'TextEdit', 'Name': 'TextEdit', 'Adj_Popula': 'TextEdit', 'AdjSup_Pop': 'TextEdit', 'AdjSup_Whi': 'TextEdit', 'AdjSup_Bla': 'TextEdit', 'AdjSup_AmI': 'TextEdit', 'AdjSup_Asi': 'TextEdit', 'AdjSup_His': 'TextEdit', 'AdjSup_NH_': 'TextEdit', 'AdjSup_NH1': 'TextEdit', 'AdjSup_N_1': 'TextEdit', 'AdjSup_N_2': 'TextEdit', 'AdjSup_18_': 'TextEdit', 'AdjSup_181': 'TextEdit', 'AdjSup_182': 'TextEdit', 'AdjSup_183': 'TextEdit', 'AdjSup_184': 'TextEdit', 'AdjSup_H18': 'TextEdit', 'AdjSup_N_3': 'TextEdit', 'AdjSup_N_4': 'TextEdit', 'AdjSup_N_5': 'TextEdit', 'AdjSup_N_6': 'TextEdit', 'Ideal_Valu': 'TextEdit', 'Deviation': 'TextEdit', '__Deviatio': 'TextEdit', '__AdjSup_A': 'TextEdit', '__AdjSup_1': 'TextEdit', '__AdjSup_2': 'TextEdit', '__AdjSup_B': 'TextEdit', '__AdjSup_3': 'TextEdit', '__AdjSup_N': 'TextEdit', '__AdjSup_W': 'TextEdit', '__AdjSup_H': 'TextEdit', '__AdjSup_4': 'TextEdit', '__AdjSup_5': 'TextEdit', '__AdjSup_6': 'TextEdit', '__AdjSup_7': 'TextEdit', '__AdjSup_8': 'TextEdit', '__AdjSup_9': 'TextEdit', '__AdjSu_10': 'TextEdit', '__AdjSu_11': 'TextEdit', '__AdjSu_12': 'TextEdit', '__AdjSu_13': 'TextEdit', '__AdjSu_14': 'TextEdit', 'District_L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_County_6.set('fieldImages', {'NAME': 'TextEdit', 'NAMEABBR': 'TextEdit', 'COUNTYNUMB': 'Range', 'PKEY': 'TextEdit', 'SQMILES': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'ALLFIPS': 'TextEdit', 'FIPS': 'TextEdit', 'LAST_UPDAT': 'DateTime', 'NAMELABEL': 'TextEdit', 'BAS_ID': 'TextEdit', 'ID_UK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'bquxjob_633bb18c_18bee832e14_sen_dem': 'TextEdit', 'bquxjob_633bb18c_18bee832e14_sen_gop': 'TextEdit', 'bquxjob_633bb18c_18bee832e14_sen_lbt': 'TextEdit', });
lyr_CountySeats_7.set('fieldImages', {'NAME': '', 'LONG': '', 'LAT': '', });
lyr_MontanaHouseDistricts_0.set('fieldLabels', {'OBJECTID': 'no label', 'DistrictNu': 'no label', 'DistrictNa': 'no label', 'DistrictCo': 'no label', 'Notes': 'no label', 'Source': 'no label', 'Metadata': 'no label', 'LastUpdate': 'no label', 'ID_UK': 'no label', 'House': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_MontanaSenateDistricts_1.set('fieldLabels', {'OBJECTID': 'no label', 'DistrictNu': 'no label', 'DistrictNa': 'no label', 'DistrictCo': 'no label', 'Notes': 'no label', 'Source': 'no label', 'Metadata': 'no label', 'LastUpdate': 'no label', 'ID_UK': 'no label', 'Senate': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaReservations_2.set('fieldLabels', {'NAME': 'no label', 'AIANNHCE10': 'no label', 'PKEY': 'no label', 'ENTITY_ID': 'no label', 'DATASET_ID': 'no label', 'LAST_UPDAT': 'no label', 'ID_UK': 'no label', 'AIANNHCE': 'no label', 'AIANNHNS': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'COMPTYP': 'no label', 'AIANNHR': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_2018ERPrecincts_3.set('fieldLabels', {'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'COUNTY': 'no label', 'NAME': 'no label', 'SOSPRECINC': 'no label', 'G18USSRROS': 'no label', 'G18USSDTES': 'no label', 'G18USSLBRE': 'no label', 'G18HALRGIA': 'no label', 'G18HALDWIL': 'no label', 'G18HALLSWA': 'no label', 'G18CSCRGRE': 'no label', 'G18CSCDREN': 'no label', 'G18CSCLROO': 'no label', });
lyr_MontanaHouseDistricts20242032_4.set('fieldLabels', {'ID': 'no label', 'Area': 'no label', 'District': 'no label', 'Members': 'no label', 'Locked': 'no label', 'Name': 'no label', 'Adj_Popula': 'no label', 'AdjSup_Pop': 'no label', 'AdjSup_Whi': 'no label', 'AdjSup_Bla': 'no label', 'AdjSup_AmI': 'no label', 'AdjSup_Asi': 'no label', 'AdjSup_His': 'no label', 'AdjSup_NH_': 'no label', 'AdjSup_NH1': 'no label', 'AdjSup_N_1': 'no label', 'AdjSup_N_2': 'no label', 'AdjSup_18_': 'no label', 'AdjSup_181': 'no label', 'AdjSup_182': 'no label', 'AdjSup_183': 'no label', 'AdjSup_184': 'no label', 'AdjSup_H18': 'no label', 'AdjSup_N_3': 'no label', 'AdjSup_N_4': 'no label', 'AdjSup_N_5': 'no label', 'AdjSup_N_6': 'no label', 'Ideal_Valu': 'no label', '__Deviatio': 'no label', '__AdjSup_N': 'no label', '__AdjSup_B': 'no label', '__AdjSup_A': 'no label', '__AdjSup_1': 'no label', '__AdjSup_H': 'no label', '__AdjSup_2': 'no label', 'Deviation': 'no label', '__AdjSup_3': 'no label', 'District_N': 'no label', '__AdjSup_W': 'no label', '__AdjSup_4': 'no label', '__AdjSup_5': 'no label', '__AdjSup_6': 'no label', '__AdjSup_7': 'no label', '__AdjSup_8': 'no label', '__AdjSup_9': 'no label', '__AdjSu_10': 'no label', '__AdjSu_11': 'no label', '__AdjSu_12': 'no label', '__AdjSu_13': 'no label', '__AdjSu_14': 'no label', 'District_L': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MontanaSenateDistricts20242032_5.set('fieldLabels', {'ID': 'no label', 'Area': 'no label', 'District': 'no label', 'Members': 'no label', 'Locked': 'no label', 'Name': 'no label', 'Adj_Popula': 'no label', 'AdjSup_Pop': 'no label', 'AdjSup_Whi': 'no label', 'AdjSup_Bla': 'no label', 'AdjSup_AmI': 'no label', 'AdjSup_Asi': 'no label', 'AdjSup_His': 'no label', 'AdjSup_NH_': 'no label', 'AdjSup_NH1': 'no label', 'AdjSup_N_1': 'no label', 'AdjSup_N_2': 'no label', 'AdjSup_18_': 'no label', 'AdjSup_181': 'no label', 'AdjSup_182': 'no label', 'AdjSup_183': 'no label', 'AdjSup_184': 'no label', 'AdjSup_H18': 'no label', 'AdjSup_N_3': 'no label', 'AdjSup_N_4': 'no label', 'AdjSup_N_5': 'no label', 'AdjSup_N_6': 'no label', 'Ideal_Valu': 'no label', 'Deviation': 'no label', '__Deviatio': 'no label', '__AdjSup_A': 'no label', '__AdjSup_1': 'no label', '__AdjSup_2': 'no label', '__AdjSup_B': 'no label', '__AdjSup_3': 'no label', '__AdjSup_N': 'no label', '__AdjSup_W': 'no label', '__AdjSup_H': 'no label', '__AdjSup_4': 'no label', '__AdjSup_5': 'no label', '__AdjSup_6': 'no label', '__AdjSup_7': 'no label', '__AdjSup_8': 'no label', '__AdjSup_9': 'no label', '__AdjSu_10': 'no label', '__AdjSu_11': 'no label', '__AdjSu_12': 'no label', '__AdjSu_13': 'no label', '__AdjSu_14': 'no label', 'District_L': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_County_6.set('fieldLabels', {'NAME': 'no label', 'NAMEABBR': 'no label', 'COUNTYNUMB': 'no label', 'PKEY': 'no label', 'SQMILES': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'ALLFIPS': 'no label', 'FIPS': 'no label', 'LAST_UPDAT': 'no label', 'NAMELABEL': 'no label', 'BAS_ID': 'no label', 'ID_UK': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'bquxjob_633bb18c_18bee832e14_sen_dem': 'no label', 'bquxjob_633bb18c_18bee832e14_sen_gop': 'no label', 'bquxjob_633bb18c_18bee832e14_sen_lbt': 'no label', });
lyr_CountySeats_7.set('fieldLabels', {'NAME': 'no label', 'LONG': 'no label', 'LAT': 'no label', });
lyr_CountySeats_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});