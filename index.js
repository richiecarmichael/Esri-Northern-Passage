/* ------------------------------------------------------------

   Copyright 2016 Esri

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at:
   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

--------------------------------------------------------------- */

require({
    packages: []
}, [
    'esri/Map',
    'esri/geometry/Extent',
    'esri/geometry/SpatialReference',
    'esri/geometry/Point',
    'esri/views/MapView',
    'esri/layers/MapImageLayer',
    //'esri/Color',
    //'esri/graphic',
    //'esri/geometry/Point',
    //'esri/geometry/Polyline',
    //'esri/geometry/Extent',
    //'esri/geometry/geometryEngine',
    //'esri/SpatialReference',
    //'esri/layers/ArcGISDynamicMapServiceLayer',
    //'esri/layers/GraphicsLayer',
    //'esri/layers/FeatureLayer',
    //'esri/layers/ImageParameters',
    //'esri/symbols/PictureMarkerSymbol',
    //'esri/symbols/SimpleLineSymbol',
    //'esri/renderers/SimpleRenderer',
    //'esri/tasks/query',
    'dojo/domReady!'
],
function (
    Map,
        Extent,
    SpatialReference,
    Point,
    MapView,
    MapImageLayer
    //Color,
    //Graphic,
    //Point,
    //Polyline,
    //Extent,
    //geometryEngine,
    //SpatialReference,
    //ArcGISDynamicMapServiceLayer,
    //GraphicsLayer,
    //FeatureLayer,
    //ImageParameters,
    //PictureMarkerSymbol,
    //SimpleLineSymbol,
    //SimpleRenderer,
    //Query
    ) {
    $(document).ready(function () {
        // Enforce strict mode
        'use strict';

        // http://vanseodesign.com/web-design/svg-markers/

        // Constants
        //var LOS_ANGELES = new Point(-2296480, 843170, new SpatialReference(102010));
        //var NEW_YORK = new Point(1746832, 362431, new SpatialReference(102010));
        var BASEMAP = 'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer';
        //var PORTS = 'http://services.arcgis.com/6DIQcwlPy8knb6sg/arcgis/rest/services/NorthernPassage/FeatureServer/0';
        //var NORTHERN = 'http://services.arcgis.com/6DIQcwlPy8knb6sg/arcgis/rest/services/NorthernPassage/FeatureServer/1';
        //var SOUTHERN = 'http://services.arcgis.com/6DIQcwlPy8knb6sg/arcgis/rest/services/NorthernPassage/FeatureServer/2';
     
        //var NORTH_PASSAGE = 'http://maps.esri.com/apl4/rest/services/WaterPassages/Panama_loops_4_RC/MapServer/1';
                
        //var SOUTH = { "type": "polyline", "paths": [[[2938539, 1263738], [2858729, 1171455], [2758186, 1093395], [2028232, 418784], [1822923, 185238], [1765819, 62535], [1738032, -70050], [1743821, -155229], [1780317, -282973], [1775639, -374501], [1734214, -453757], [1542248, -700489], [1505450, -766678], [1488932, -889779], [1501360, -1017839], [1564493, -1271011], [1594511, -1492129], [1547396, -1595103], [1385292, -1694741], [1220855, -1767090], [1128644, -1869224], [1104448, -1964691], [1136300, -2118935], [1576806, -2600735], [1662836, -2732655], [1734642, -2875301], [1883989, -3242951], [1931338, -3269459], [1962864, -3363313], [1961301, -3449569], [1901384, -3516255], [1780303, -3535213], [1649302, -3537437], [1282518, -3430011], [-74925, -2817204], [-660442, -2582150], [-959207, -2424283], [-1266084, -2156221], [-1924285, -1275918], [-2040016, -1084223], [-2157877, -790186], [-2251542, -428473], [-2334951, 194682], [-2343778, 462530], [-2292667, 810791], [-2198273, 1161879], [-2195456, 1333027], [-2209754, 1556351], [-2290912, 1853623], [-2348512, 2163300], [-2444200, 2431399], [-2568829, 2645063], [-2761371, 2797498], [-2904620, 2869677], [-3001580, 2891360], [-3194048, 2878763], [-3481383, 2887330], [-3657672, 2946961], [-3807854, 3023180], [-3889954, 3096419], [-3927213, 3165653], [-3945137, 3248585], [-3944447, 3343159], [-3830175, 3631348], [-3710463, 3773768], [-3584520, 3870685], [-3367896, 3955416], [-3278048, 4036637], [-3237660, 4150151], [-3125408, 4264800], [-2960711, 4396813], [-2801197, 4453920], [-2628171, 4475554], [-2409733, 4413795], [-2235853, 4340509], [-1227996, 3666627], [-927017, 3379124], [-798300, 3271982], [-770331, 3215932], [-739183, 3190859], [-710937, 3187674], [-466679, 3255542], [-395862, 3221227], [-336865, 3207661], [-283840, 3216417], [-173807, 3278609], [-64133, 3452537], [15484, 3551658], [60271, 3564136], [127548, 3547021], [167416, 3518123], [228633, 3428977], [290923, 3373706], [346347, 3346621], [506677, 3362314], [648982, 3341641], [674962, 3317629], [781413, 3134867], [843458, 2857406], [870063, 2770184], [895082, 2750654], [1041610, 2736453], [1374170, 2614276], [1455033, 2607340], [1643914, 2627348], [1711631, 2619579], [1775139, 2593291], [2682125, 2024214], [2917508, 1740819], [3015900, 1558885], [3017429, 1477893], [3002190, 1385416], [2967922, 1297061], [2938539, 1263738]]], "_path": 0, "spatialReference": { "wkid": 102010, "latestWkid": 102010 }, "cache": { "_extent": { "xmin": -3945137, "ymin": -3537437, "xmax": 3017429, "ymax": 4475554, "spatialReference": { "wkid": 102010, "latestWkid": 102010 } }, "_partwise": null } };
        //var NORTH = { "type": "polyline", "paths": [[[2873027, 1152057], [2355718, 727931], [2028232, 418784], [1822923, 185238], [1765819, 62535], [1738032, -70050], [1743821, -155229], [1780317, -282973], [1775639, -374501], [1734214, -453757], [1542248, -700489], [1505450, -766678], [1488932, -889779], [1501360, -1017839], [1564493, -1271011], [1594511, -1492129], [1547396, -1595103], [1385292, -1694741], [1220855, -1767090], [1128644, -1869224], [1104448, -1964691], [1136300, -2118935], [1442008, -2444014], [1576806, -2600735], [1659263, -2725557], [1734642, -2875301], [1883989, -3242951], [1931338, -3269459], [1962864, -3363313], [1961301, -3449569], [1901384, -3516255], [1780303, -3535213], [1649302, -3537437], [1282518, -3430011], [-74925, -2817204], [-660442, -2582150], [-959207, -2424283], [-1266084, -2156221], [-1924285, -1275918], [-2040016, -1084223], [-2157877, -790186], [-2251542, -428473], [-2334951, 194682], [-2332841, 463157], [-2278969, 807862], [-2185406, 1155579], [-2179519, 1333027], [-2192745, 1524585], [-2348512, 2163300], [-2444200, 2431399], [-2568829, 2645063], [-2761371, 2797498], [-2904620, 2869677], [-3001580, 2891360], [-3194048, 2878763], [-3481383, 2887330], [-3657672, 2946961], [-3807854, 3023180], [-3889954, 3096419], [-3927213, 3165653], [-3945137, 3248585], [-3944447, 3343159], [-3830175, 3631348], [-3710463, 3773768], [-3584520, 3870685], [-3367896, 3955416], [-3278048, 4036637], [-3237660, 4150151], [-3125408, 4264800], [-2960711, 4396813], [-2801197, 4453920], [-2628171, 4475554], [-994449, 4074929], [-719566, 3871272], [-604143, 3836959], [-419672, 3824824], [-159184, 3835992], [188289, 3824086], [496476, 3836817], [734133, 3860850], [1015504, 3757737], [1285493, 3607028], [1640847, 3329190], [1881724, 3020845], [2889232, 1817187], [2940863, 1750376], [3034866, 1574804], [3050912, 1513154], [3036555, 1378876], [3006997, 1303714], [2988478, 1268368], [2873027, 1152057]]], "_path": 0, "spatialReference": { "wkid": 102010, "latestWkid": 102010 }, "cache": { "_extent": { "xmin": -3945137, "ymin": -3537437, "xmax": 3050912, "ymax": 4475554, "spatialReference": { "wkid": 102010, "latestWkid": 102010 } }, "_partwise": null } };
        //var NORMAL_PASSAGE = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([50, 50, 50, 0.5]), 10);
        //var SELECTED_PASSAGE = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SHORTDASH, new Color([255, 0, 0, 1]), 10);

        // Dragging member
        //var _dragOffset = null;

        var SOUTH = [[-2254564.2362, 943492.597999999], [-2182335.293, 1161878.8908], [-2179518.7975, 1333026.9566], [-2209754.3525, 1556350.776], [-2290912.1188, 1853622.9786], [-2348511.9012, 2163300.2855], [-2444200.415, 2431398.9749], [-2568828.9922, 2645062.7001], [-2761371.4771, 2797498.331], [-2904619.989, 2869676.9017], [-3001579.9345, 2891359.7619], [-3194048.4184, 2878762.7059], [-3481383.0292, 2887329.646], [-3657671.8249, 2946960.7704], [-3807853.9075, 3023180.1926], [-3889954.4789, 3096419.3935], [-3927212.7021, 3165653.0163], [-3945137.1872, 3248585.2459], [-3944446.7651, 3343159.4831], [-3830175.1328, 3631348.293], [-3710463.2306, 3773767.8725], [-3584520.2492, 3870684.9732], [-3367895.9211, 3955415.7263], [-3278047.5905, 4036637.3787], [-3237659.7961, 4150150.7923], [-3125408.495, 4264800.0579], [-2960710.6346, 4396812.5732], [-2801196.8082, 4453919.6481], [-2628171.0378, 4475553.959], [-2409732.9207, 4413794.8404], [-2235853.2436, 4340509.2423], [-1227995.9544, 3666626.6162], [-927017.1446, 3379124.1033], [-846495.756299999, 3318742.8291], [-798300.003600001, 3271982.425], [-794491.537700001, 3252407.4174], [-770330.754900001, 3215932.0672], [-739182.996399999, 3190858.9575], [-710936.990499999, 3187673.674], [-541337.847199999, 3235361.3584], [-466678.942299999, 3255542.2811], [-450279.598700002, 3253299.7951], [-433667.569699999, 3246912.814], [-395862.350900002, 3221226.937], [-336865.440299999, 3207661.0108], [-283839.794, 3216416.6128], [-222643.292300001, 3246281.1369], [-173806.705600001, 3278608.5044], [-155407.6538, 3301219.3437], [-64133.1213000007, 3452536.6348], [15484.2522, 3551657.7079], [29657.0815999992, 3558303.9493], [60270.7056000009, 3564136.4814], [72903.5852999985, 3563322.2037], [80034.0953000002, 3560833.8276], [97705.5694000013, 3559435.9471], [127547.501200002, 3547020.8826], [167416.195999999, 3518123.2756], [228633.324999999, 3428977.0743], [290922.6523, 3373706.3958], [346346.562600002, 3346621.1711], [398485.580499999, 3346618.4462], [485502.818599999, 3360743.8726], [506677.114100002, 3362314.0312], [564368.369800001, 3356597.5851], [594803.983800001, 3349777.2196], [648982.0046, 3341641.213], [674962.179200001, 3317629.3275], [781412.563200001, 3134867.0194], [843457.972199999, 2857406.2784], [870063.412599999, 2770184.1339], [895081.803100001, 2750654.2179], [916955.727299999, 2745605.8215], [979233.906199999, 2745483.5473], [1041610.2519, 2736453.2888], [1169115.7722, 2694700.2539], [1374169.7103, 2614276.4679], [1455033.2358, 2607339.8778], [1643913.8727, 2627347.7027], [1711631.1621, 2619579.0054], [1775138.9177, 2593291.2917], [2682125.4952, 2024214.4997], [2917507.7369, 1740818.5378], [3015899.962, 1558884.6885], [3017428.6881, 1477892.6729], [3002189.7797, 1385416.2424], [2967922.0195, 1297060.7893], [2938539.3961, 1263738.3819], [2773377.8141, 1072764.9559], [2459354.8272, 815346.3434], [2355717.6013, 727930.637399999], [2268226.433, 646605.704700001], [2028232.0174, 418784.0636], [1822923.3893, 185238.1754], [1765818.952, 62535.2544999998], [1738032.4283, -70050.4144000001], [1743821.3083, -155229.372400001], [1780316.9991, -282973.4267], [1775639.1945, -374500.551000001], [1734213.6474, -453756.7766], [1542247.6059, -700489.140799999], [1505450.0486, -766678.4691], [1488932.2556, -889779.173599999], [1501359.6449, -1017839.126], [1564492.7977, -1271011.0866], [1594511.0573, -1492128.6074], [1547395.7253, -1595102.7679], [1385291.6504, -1694741.1392], [1220855.014, -1767089.8433], [1128644.2743, -1869224.2401], [1104448.4938, -1964690.698], [1136299.6685, -2118934.8312], [1599252.2928, -2606341.1088], [1734641.5316, -2875300.8828], [1860897.9781, -3188798.6166], [1878234.6534, -3226364.4862], [1881950.8379, -3233373.3414], [1883988.8942, -3242950.5687], [1898629.0398, -3251582.8876], [1910794.9448, -3250057.9389], [1926990.9907, -3260964.4442], [1931338.379, -3269459.3976], [1962864.3358, -3363313.0967], [1961301.2824, -3449568.5279], [1940873.3063, -3482710.533], [1901384.3396, -3516254.9406], [1780303.0381, -3535213.2168], [1649301.5176, -3537436.5045], [1282518.3144, -3430010.6176], [-74925.0205999985, -2817204.2294], [-660442.4619, -2582150.126], [-959206.969900001, -2424282.8716], [-1266083.7708, -2156221.0814], [-1924285.08, -1275917.7776], [-2040016.1921, -1084223.2144], [-2110491.3543, -921511.083000001], [-2157877.3081, -790185.916099999], [-2251541.899, -428472.814999999], [-2334950.7178, 194682.287599999], [-2343778.3447, 462530.272], [-2292667.3811, 810791.4407]]; //, [-2254564.2362, 943492.597999999]];
        var NORTH = [[-2237686.6717, 942128.8137], [-2185406.4369, 1155578.5448], [-2182025.4922, 1177694.5705], [-2179518.7975, 1333026.9566], [-2192745.2214, 1524585.4653], [-2278953.1694, 1855744.3054], [-2348511.9012, 2163300.2855], [-2444200.415, 2431398.9749], [-2568828.9922, 2645062.7001], [-2761371.4771, 2797498.331], [-2904619.989, 2869676.9017], [-3001579.9345, 2891359.7619], [-3194048.4184, 2878762.7059], [-3481383.0292, 2887329.646], [-3657671.8249, 2946960.7704], [-3807853.9075, 3023180.1926], [-3889954.4789, 3096419.3935], [-3927212.7021, 3165653.0163], [-3945137.1872, 3248585.2459], [-3944446.7651, 3343159.4831], [-3830175.1328, 3631348.293], [-3710463.2306, 3773767.8725], [-3584520.2492, 3870684.9732], [-3367895.9211, 3955415.7263], [-3278047.5905, 4036637.3787], [-3237659.7961, 4150150.7923], [-3125408.495, 4264800.0579], [-2960710.6346, 4396812.5732], [-2801196.8082, 4453919.6481], [-2628171.0378, 4475553.959], [-2337845.6964, 4407789.3989], [-994448.947299998, 4074929.3508], [-719565.696899999, 3871271.5413], [-604142.789999999, 3836958.8637], [-419671.912799999, 3824824.0749], [-159183.940499999, 3835991.6901], [-41107.2800000012, 3826683.7191], [188288.848000001, 3824085.7958], [496475.812899999, 3836816.9958], [734133.037900001, 3860850.4973], [1015504.3748, 3757736.8831], [1285492.8832, 3607028.3411], [1640846.9598, 3329190.3002], [1881724.0455, 3020845.0425], [2889232.1577, 1817186.9248], [2971447.594, 1710798.95], [3047534.2218, 1582203.0905], [3074032.3363, 1509489.5523], [3078610.1728, 1457777.2231], [3063130.7945, 1388589.6067], [3032101.9075, 1317772.3738], [2984418.3358, 1251941.0206], [2936865.4725, 1202245.9996], [2877230.952, 1155379.4559], [2859727.1534, 1141543.9314], [2841210.6561, 1126868.7847], [2773377.8141, 1072764.9559], [2459354.8272, 815346.3434], [2355717.6013, 727930.637399999], [2268226.433, 646605.704700001], [2028232.0174, 418784.0636], [1822923.3893, 185238.1754], [1765818.952, 62535.2544999998], [1738032.4283, -70050.4144000001], [1743821.3083, -155229.372400001], [1780316.9991, -282973.4267], [1775639.1945, -374500.551000001], [1734213.6474, -453756.7766], [1542247.6059, -700489.140799999], [1505450.0486, -766678.4691], [1488932.2556, -889779.173599999], [1501359.6449, -1017839.126], [1564492.7977, -1271011.0866], [1594511.0573, -1492128.6074], [1547395.7253, -1595102.7679], [1385291.6504, -1694741.1392], [1220855.014, -1767089.8433], [1128644.2743, -1869224.2401], [1104448.4938, -1964690.698], [1136299.6685, -2118934.8312], [1442007.8254, -2444014.1783], [1599252.2928, -2606341.1088], [1734641.5316, -2875300.8828], [1860897.9781, -3188798.6166], [1878234.6534, -3226364.4862], [1881950.8379, -3233373.3414], [1883988.8942, -3242950.5687], [1898629.0398, -3251582.8876], [1910794.9448, -3250057.9389], [1926990.9907, -3260964.4442], [1931338.379, -3269459.3976], [1962864.3358, -3363313.0967], [1961301.2824, -3449568.5279], [1940873.3063, -3482710.533], [1901384.3396, -3516254.9406], [1780303.0381, -3535213.2168], [1649301.5176, -3537436.5045], [1282518.3144, -3430010.6176], [-74925.0205999985, -2817204.2294], [-660442.4619, -2582150.126], [-959206.969900001, -2424282.8716], [-1266083.7708, -2156221.0814], [-1924285.08, -1275917.7776], [-2040016.1921, -1084223.2144], [-2110491.3543, -921511.083000001], [-2157877.3081, -790185.916099999], [-2251541.899, -428472.814999999], [-2334950.7178, 194682.287599999], [-2332841.0728, 463157.3704], [-2278969.0054, 807861.999299999]]; // , [-2237686.6717, 942128.8137]];

        var _view = new MapView({
            container: 'map',
            ui: {
                components: [
                    'zoom',
                    'compass'
                ]
            },
            extent: {
                xmin: -4770662,
                ymin: -3704445,
                xmax: 3878519,
                ymax: 4561412,
                spatialReference: 102010
            },
            map: new Map({
                layers: [
                    new MapImageLayer({
                        url: BASEMAP,
                        spatialReference: 102010
                    })
                ]
                //basemap: 'satellite'//,
                //layers: [
                //    new FeatureLayer({
                //        id: 'eclipse',
                //        url: SOLAR,
                //        definitionExpression: 'OBJECTID = 783',
                //        renderer: new SimpleRenderer({
                //            symbol: new SimpleFillSymbol({
                //                color: [255, 0, 0, 0.25],
                //                style: 'solid',
                //                outline: new SimpleLineSymbol({
                //                    style: 'none'
                //                })
                //            })
                //        })
                //    })
                //]
            })
        });
        _view.then(function () {
            var width = $('#graphics').width();
            var height = $('#graphics').height();

            var south = SOUTH.map(function (e) {
                return _view.toScreen(new Point({
                    x: e[0],
                    y: e[1]
                }));
            });

            var north = NORTH.map(function (e) {
                return _view.toScreen(new Point({
                    x: e[0],
                    y: e[1]
                }));
            });

            var line = d3.line()
                .x(function (d) {
                    return d.x
                })
                .y(function (d) {
                    return d.y
                })
                .curve(
                    d3.curveCatmullRomClosed.alpha(0.5)
                );

            var svg = d3.select("#graphics").append("svg")
                .attr("width", width)
                .attr("height", height);

            var path2 = svg.append('path')
                .data([north])
                .attr('d', line)
                .attr('stroke', 'rgba(50, 50, 50, 0.7)')
                .attr('stroke-dasharray', 'none')
                .attr('stroke-width', '15')
                .attr('stroke-linecap', 'butt')
                .attr('stroke-linejoin', 'miter')
                .attr('stroke-miterlimit', '4')
                .attr('stroke-opacity', '1')
                .attr('fill', 'none')
                .attr('fill-opacity', '0')
                .attr('pointer-events', 'all')
                .attr('cursor', 'pointer');

            var path1 = svg.append('path')
                .data([south])
                .attr('d', line)
                .attr('stroke', 'rgba(255, 0, 0, 0.7)')
                .attr('stroke-dasharray', '50.1,10.2')
                .attr('stroke-width', '15')
                .attr('stroke-linecap', 'butt')
                .attr('stroke-linejoin', 'miter')
                .attr('stroke-miterlimit', '4')
                .attr('stroke-opacity', '1')
                .attr('fill', 'none')
                .attr('fill-opacity', '0');
        });

        //// Configure basemap
        //var _ip = new ImageParameters();
        //_ip.imageSpatialReference = new SpatialReference({
        //    wkid: 102010
        //});
        //var _base = new ArcGISDynamicMapServiceLayer(BASEMAP, {
        //    format: 'jpg',
        //    imageParameters: _ip
        //});

        //// 
        //var _northern = new FeatureLayer(NORTHERN, {
        //    mode: FeatureLayer.MODE_SNAPSHOT,
        //    styling: false
        //});
        //var _southern = new FeatureLayer(SOUTHERN, {
        //    mode: FeatureLayer.MODE_SNAPSHOT,
        //    styling: false
        //});
        //if (_northern.surfaceType !== 'svg') {
        //    alert('This app is not compatiable with this browser.');
        //    return;
        //}

        //var _selected = _northern;

        //_northern.on('graphic-draw', drawPassages);
        //_southern.on('graphic-draw', drawPassages);
        ////_northern.on('click', clickPassages);
        ////_southern.on('click', clickPassages);

        ////function clickPassages(e) {
        ////    e.stopPropagation();
        ////}
        //function drawPassages(e) {
        //    //if (e.target === _selected) {
        //    //    d3.select(e.node)
        //    //        .attr('stroke', 'rgba(255, 0, 0, 0.7)')
        //    //        .attr('stroke-dasharray', '50.1,10.2')
        //    //        .attr('stroke-width', '15')
        //    //        .attr('stroke-linecap', 'butt')
        //    //        .attr('stroke-linejoin', 'miter')
        //    //        .attr('stroke-miterlimit', '4')
        //    //        .attr('stroke-opacity', '1')
        //    //        .attr('fill', 'none')
        //    //        .attr('fill-opacity', '0');
        //    //} else {
        //    //    d3.select(e.node)
        //    //        .attr('stroke', 'rgba(50, 50, 50, 0.7)')
        //    //        .attr('stroke-dasharray', 'none')
        //    //        .attr('stroke-width', '15')
        //    //        .attr('stroke-linecap', 'butt')
        //    //        .attr('stroke-linejoin', 'miter')
        //    //        .attr('stroke-miterlimit', '4')
        //    //        .attr('stroke-opacity', '1')
        //    //        .attr('fill', 'none')
        //    //        .attr('fill-opacity', '0');
        //    //}
        //}

        // Create map
        //var _map = new Map('map', {
        //    extent: new Extent(
        //        -4770662,
        //        -3704445,
        //        3878519,
        //        4561412,
        //        new SpatialReference({
        //            wkid: 102010
        //        })
        //    ),
        //    logo: true,
        //    showAttribution: false
        //});
        //_map.addLayers([
        //    _base,
        //    _southern,
        //    _northern
        //]);
        //_map.on('load', function () {

        //});

        //


        //// Define passages layer
        //var _passages = new GraphicsLayer({
        //    className: 'passages'
        //});
        //_passages.setRenderer(new SimpleRenderer(NORMAL_PASSAGE));

        //// Define ship layer
        //var _ships = new GraphicsLayer({
        //    className: 'ships'
        //});

        //// Add passages
        //_passages.add(new Graphic(
        //    new Polyline(NORTH),
        //    null,
        //    {
        //        name: 'north',
        //        selected: false
        //    }
        //));
        //_passages.add(new Graphic(
        //    new Polyline(SOUTH),
        //    null,
        //    {
        //        name: 'south',
        //        selected: true
        //    }
        //));

        //// Add ships
        //var _pic1 = new PictureMarkerSymbol('./img/ship1.png', 128, 128);
        //var _pic2 = new PictureMarkerSymbol('./img/ship2.png', 128, 128);
        //_pic1.yoffset = 40;
        //_pic2.yoffset = 40;
        //_ships.add(new Graphic(
        //    new Point(LOS_ANGELES),
        //    _pic1,
        //    { name: 'ship1' }
        //));
        //_ships.add(new Graphic(
        //    new Point(NEW_YORK),
        //    _pic2,
        //    { name: 'ship2' }
        //));

        //// Create map
        //var _map = new Map('map', {
        //    extent: new Extent(
        //        -4770662,
        //        -3704445,
        //        3878519,
        //        4561412,
        //        new SpatialReference({
        //            wkid: 102010
        //        })
        //    ),
        //    logo: true,
        //    showAttribution: false
        //});
        //_map.addLayers([
        //    _base,
        //    _passages//,
        //    //_ships
        //]);
        //_map.on('load', function () {
        //    updatePassageSelection();
        //});

        //_ships.on('mouse-down', function (e) {
        //    _map.disableMapNavigation();
        //    _dragOffset = new Point(
        //        e.mapPoint.x - e.graphic.geometry.x,
        //        e.mapPoint.y - e.graphic.geometry.y,
        //        _map.spatialReference
        //    );
        //});
        //_ships.on('mouse-drag', function (e) {
        //    e.graphic.setGeometry(e.mapPoint.offset(
        //        -_dragOffset.x,
        //        -_dragOffset.y
        //    ));
        //});
        //_ships.on('mouse-up', function (e) {
        //    var passage = getSelectedPassage();
        //    snapPoint(passage, e.graphic);
        //    _ships.graphics.forEach(function (f) {
        //        if (f !== e.graphic) {
        //            snapPointOpposite(passage, e.graphic, f);
        //        }
        //    });
        //    _map.enableMapNavigation();
        //    _dragOffset = null;
        //});

        //// Snap ships
        //_ships.graphics.forEach(function (e) {
        //    var passage = getSelectedPassage();
        //    snapPoint(passage, e);
        //});

        //_passages.on('click', function (e) {
        //    _passages.graphics.forEach(function (f) {
        //        f.attributes.selected = (f === e.graphic);
        //    });
        //    _passages.remove(e.graphic);
        //    _passages.add(e.graphic);
        //    updatePassageSelection();
        //});

        //// Snap point  
        //function getSelectedPassage() {
        //    return _passages.graphics.filter(function (f) {
        //        return f.attributes.selected;
        //    })[0].geometry;
        //}
        //function snapPoint(polyline, graphic) {
        //    var nearest = geometryEngine.nearestCoordinate(polyline, graphic.geometry);
        //    graphic.setGeometry(nearest.coordinate);
        //}
        //function snapPointOpposite(polyline, source, target) {
        //    // Collect segment lengths and distance to ship
        //    var segments = [];
        //    for (var i = 0; i < polyline.paths[0].length - 1; i++) {
        //        var p1 = new Point(polyline.paths[0][i], _map.spatialReference);
        //        var p2 = new Point(polyline.paths[0][i + 1], _map.spatialReference);
        //        var d1 = geometryEngine.distance(p1, p2, 'kilometers');
        //        var d2 = geometryEngine.distance(p1, source.geometry, 'kilometers');
        //        segments.push({
        //            p1: p1,
        //            p2: p2,
        //            d1: d1,
        //            d2: d2
        //        });
        //    }

        //    // Get total length
        //    var length = segments.reduce(function (a, b) {
        //        return a + b.d1;
        //    }, 0);

        //    // Get distance to first ship
        //    var distanceToShip = 0;
        //    for (var i = 0; i < segments.length; i++) {
        //        if (segments[i].d2 < segments[i].d1) {
        //            distanceToShip += segments[i].d2;
        //            break;
        //        }
        //        distanceToShip += segments[i].d1;
        //    }

        //    // Calculate distance to second ship
        //    var distanceToOppositeShip = distanceToShip + length / 2;
        //    if (distanceToOppositeShip > length) { distanceToOppositeShip -= length; }

        //    // Get point to second ship
        //    var distance = 0;
        //    var opposite = null;
        //    for (var i = 0; i < segments.length; i++) {
        //        if (distance + segments[i].d1 < distanceToOppositeShip) {
        //            distance += segments[i].d1;
        //            continue;
        //        }
        //        var factor = (distanceToOppositeShip - distance) / segments[i].d1;
        //        opposite = new Point(
        //            segments[i].p1.x + (segments[i].p2.x - segments[i].p1.x) * factor,
        //            segments[i].p1.y + (segments[i].p2.y - segments[i].p1.y) * factor,
        //            _map.spatialReference
        //        );
        //        break;
        //    }

        //    // 
        //    target.setGeometry(opposite);
        //}
        //function updatePassageSelection() {
        //    _passages.graphics.forEach(function (e) {
        //        e.setSymbol(e.attributes.selected ? SELECTED_PASSAGE : null);
        //    });
        //}
    });
});
