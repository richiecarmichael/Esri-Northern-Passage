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
    'esri/map',
    'esri/Color',
    'esri/graphic',
    'esri/geometry/Point',
    'esri/geometry/Polyline',
    'esri/geometry/Extent',
    'esri/geometry/geometryEngine',
    'esri/SpatialReference',
    'esri/layers/ArcGISDynamicMapServiceLayer',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'esri/layers/ImageParameters',
    'esri/symbols/PictureMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/tasks/query',
    'dojo/domReady!'
],
function (
    Map,
    Color,
    Graphic,
    Point,
    Polyline,
    Extent,
    geometryEngine,
    SpatialReference,
    ArcGISDynamicMapServiceLayer,
    GraphicsLayer,
    FeatureLayer,
    ImageParameters,
    PictureMarkerSymbol,
    SimpleLineSymbol,
    Query
    ) {
    // Enforce strict mode
    'use strict';

    // Constants
    var LOS_ANGELES = new Point(-2296480, 843170, new SpatialReference(102010));
    var NEW_YORK = new Point(1746832, 362431, new SpatialReference(102010));
    var BASEMAP = 'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer';
    var SOUTH = { "type": "polyline", "paths": [[[2938539, 1263738], [2858729, 1171455], [2758186, 1093395], [2028232, 418784], [1822923, 185238], [1765819, 62535], [1738032, -70050], [1743821, -155229], [1780317, -282973], [1775639, -374501], [1734214, -453757], [1542248, -700489], [1505450, -766678], [1488932, -889779], [1501360, -1017839], [1564493, -1271011], [1594511, -1492129], [1547396, -1595103], [1385292, -1694741], [1220855, -1767090], [1128644, -1869224], [1104448, -1964691], [1136300, -2118935], [1576806, -2600735], [1662836, -2732655], [1734642, -2875301], [1883989, -3242951], [1931338, -3269459], [1962864, -3363313], [1961301, -3449569], [1901384, -3516255], [1780303, -3535213], [1649302, -3537437], [1282518, -3430011], [-74925, -2817204], [-660442, -2582150], [-959207, -2424283], [-1266084, -2156221], [-1924285, -1275918], [-2040016, -1084223], [-2157877, -790186], [-2251542, -428473], [-2334951, 194682], [-2343778, 462530], [-2292667, 810791], [-2198273, 1161879], [-2195456, 1333027], [-2209754, 1556351], [-2290912, 1853623], [-2348512, 2163300], [-2444200, 2431399], [-2568829, 2645063], [-2761371, 2797498], [-2904620, 2869677], [-3001580, 2891360], [-3194048, 2878763], [-3481383, 2887330], [-3657672, 2946961], [-3807854, 3023180], [-3889954, 3096419], [-3927213, 3165653], [-3945137, 3248585], [-3944447, 3343159], [-3830175, 3631348], [-3710463, 3773768], [-3584520, 3870685], [-3367896, 3955416], [-3278048, 4036637], [-3237660, 4150151], [-3125408, 4264800], [-2960711, 4396813], [-2801197, 4453920], [-2628171, 4475554], [-2409733, 4413795], [-2235853, 4340509], [-1227996, 3666627], [-927017, 3379124], [-798300, 3271982], [-770331, 3215932], [-739183, 3190859], [-710937, 3187674], [-466679, 3255542], [-395862, 3221227], [-336865, 3207661], [-283840, 3216417], [-173807, 3278609], [-64133, 3452537], [15484, 3551658], [60271, 3564136], [127548, 3547021], [167416, 3518123], [228633, 3428977], [290923, 3373706], [346347, 3346621], [506677, 3362314], [648982, 3341641], [674962, 3317629], [781413, 3134867], [843458, 2857406], [870063, 2770184], [895082, 2750654], [1041610, 2736453], [1374170, 2614276], [1455033, 2607340], [1643914, 2627348], [1711631, 2619579], [1775139, 2593291], [2682125, 2024214], [2917508, 1740819], [3015900, 1558885], [3017429, 1477893], [3002190, 1385416], [2967922, 1297061], [2938539, 1263738]]], "_path": 0, "spatialReference": { "wkid": 102010, "latestWkid": 102010 }, "cache": { "_extent": { "xmin": -3945137, "ymin": -3537437, "xmax": 3017429, "ymax": 4475554, "spatialReference": { "wkid": 102010, "latestWkid": 102010 } }, "_partwise": null } };
    var NORTH = { "type": "polyline", "paths": [[[2873027, 1152057], [2355718, 727931], [2028232, 418784], [1822923, 185238], [1765819, 62535], [1738032, -70050], [1743821, -155229], [1780317, -282973], [1775639, -374501], [1734214, -453757], [1542248, -700489], [1505450, -766678], [1488932, -889779], [1501360, -1017839], [1564493, -1271011], [1594511, -1492129], [1547396, -1595103], [1385292, -1694741], [1220855, -1767090], [1128644, -1869224], [1104448, -1964691], [1136300, -2118935], [1442008, -2444014], [1576806, -2600735], [1659263, -2725557], [1734642, -2875301], [1883989, -3242951], [1931338, -3269459], [1962864, -3363313], [1961301, -3449569], [1901384, -3516255], [1780303, -3535213], [1649302, -3537437], [1282518, -3430011], [-74925, -2817204], [-660442, -2582150], [-959207, -2424283], [-1266084, -2156221], [-1924285, -1275918], [-2040016, -1084223], [-2157877, -790186], [-2251542, -428473], [-2334951, 194682], [-2332841, 463157], [-2278969, 807862], [-2185406, 1155579], [-2179519, 1333027], [-2192745, 1524585], [-2348512, 2163300], [-2444200, 2431399], [-2568829, 2645063], [-2761371, 2797498], [-2904620, 2869677], [-3001580, 2891360], [-3194048, 2878763], [-3481383, 2887330], [-3657672, 2946961], [-3807854, 3023180], [-3889954, 3096419], [-3927213, 3165653], [-3945137, 3248585], [-3944447, 3343159], [-3830175, 3631348], [-3710463, 3773768], [-3584520, 3870685], [-3367896, 3955416], [-3278048, 4036637], [-3237660, 4150151], [-3125408, 4264800], [-2960711, 4396813], [-2801197, 4453920], [-2628171, 4475554], [-994449, 4074929], [-719566, 3871272], [-604143, 3836959], [-419672, 3824824], [-159184, 3835992], [188289, 3824086], [496476, 3836817], [734133, 3860850], [1015504, 3757737], [1285493, 3607028], [1640847, 3329190], [1881724, 3020845], [2889232, 1817187], [2940863, 1750376], [3034866, 1574804], [3050912, 1513154], [3036555, 1378876], [3006997, 1303714], [2988478, 1268368], [2873027, 1152057]]], "_path": 0, "spatialReference": { "wkid": 102010, "latestWkid": 102010 }, "cache": { "_extent": { "xmin": -3945137, "ymin": -3537437, "xmax": 3050912, "ymax": 4475554, "spatialReference": { "wkid": 102010, "latestWkid": 102010 } }, "_partwise": null } };

    // Dragging member
    var _dragOffset = null;   

    // Configure basemap
    var _ip = new ImageParameters();
    _ip.imageSpatialReference = new SpatialReference({
        wkid: 102010
    });
    var _base = new ArcGISDynamicMapServiceLayer(BASEMAP, {
        format: 'jpg',
        imageParameters: _ip
    });

    var _passages = new GraphicsLayer();
    var _ships = new GraphicsLayer();

    // Add passages
    _passages.add(new Graphic(
        new Polyline(NORTH),
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([50, 50, 50, 0.5]), 10),
        { name: 'north' }
    ));
    _passages.add(new Graphic(
        new Polyline(SOUTH),
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SHORTDASH, new Color([255, 0, 0, 1]), 10),
        { name: 'south' }
    ));
    _passages.add(new Graphic(new Polyline(SOUTH)));
        
    // Add ships
    var _pic1 = new PictureMarkerSymbol('./img/ship1.png', 128, 128);
    var _pic2 = new PictureMarkerSymbol('./img/ship2.png', 128, 128);
    _pic1.yoffset = 40;
    _pic2.yoffset = 40;
    _ships.add(new Graphic(
        new Point(LOS_ANGELES),
        _pic1,
        { name: 'ship1' }
    ));
    _ships.add(new Graphic(
        new Point(NEW_YORK),
        _pic2,
        { name: 'ship2' }
    ));

    // Create map
    var _map = new Map('map', {
        extent: new Extent(
            -4770662,
            -3704445,
            3878519,
            4561412,
            new SpatialReference({
                wkid: 102010
            })
        ),
        logo: true,
        showAttribution: false
    });
    _map.addLayers([
        _base,
        _passages,
        _ships
    ]);

    _ships.on('mouse-down', function (e) {
        _map.disableMapNavigation();
        _dragOffset = new Point(
            e.mapPoint.x - e.graphic.geometry.x,
            e.mapPoint.y - e.graphic.geometry.y,
            _map.spatialReference
        );
    });
    _ships.on('mouse-drag', function (e) {
        e.graphic.setGeometry(e.mapPoint.offset(
            -_dragOffset.x,
            -_dragOffset.y
        ));
    });
    _ships.on('mouse-up', function (e) {
        snapPoint(new Polyline(SOUTH), e.graphic);
        _ships.graphics.forEach(function (f) {
            if (f !== e.graphic) {
                snapPointOpposite(new Polyline(SOUTH), e.graphic, f);
            }
        });
        _map.enableMapNavigation();
        _dragOffset = null;
    });

    // Snap ships
    _ships.graphics.forEach(function (e) {
        snapPoint(new Polyline(SOUTH), e);
    });
  
    // Snap point  
    function snapPoint(polyline, graphic) {
        var nearest = geometryEngine.nearestCoordinate(polyline, graphic.geometry);
        graphic.setGeometry(nearest.coordinate);
    }
    function snapPointOpposite(polyline, source, target) {
        // Collect segment lengths and distance to ship
        var segments = [];
        for (var i = 0; i < polyline.paths[0].length - 1; i++) {
            var p1 = new Point(polyline.paths[0][i], _map.spatialReference);
            var p2 = new Point(polyline.paths[0][i + 1], _map.spatialReference);
            var d1 = geometryEngine.distance(p1, p2, 'kilometers');
            var d2 = geometryEngine.distance(p1, source.geometry, 'kilometers');
            segments.push({
                p1: p1,
                p2: p2,
                d1: d1,
                d2: d2
            });
        }

        // Get total length
        var length = segments.reduce(function (a,b) {
            return a + b.d1;
        }, 0);
        
        // Get distance to first ship
        var distanceToShip = 0;
        for (var i = 0; i < segments.length; i++) {
            if (segments[i].d2 < segments[i].d1) {
                distanceToShip += segments[i].d2;
                break;
            }
            distanceToShip += segments[i].d1;
        }
        
        // Calculate distance to second ship
        var distanceToOppositeShip = distanceToShip + length / 2;
        if (distanceToOppositeShip > length) { distanceToOppositeShip -= length; }
        
        // Get point to second ship
        var distance = 0;
        var opposite = null;
        for (var i = 0; i < segments.length; i++) {
            if (distance + segments[i].d1 < distanceToOppositeShip) {
                distance += segments[i].d1;
                continue;
            }
            var factor = (distanceToOppositeShip - distance) / segments[i].d1;
            opposite = new Point(
                segments[i].p1.x + (segments[i].p2.x - segments[i].p1.x) * factor,
                segments[i].p1.y + (segments[i].p2.y - segments[i].p1.y) * factor,
                _map.spatialReference
            );
            break;
        }

        // 
        target.setGeometry(opposite);
    }
});
