import { Feature, Map } from 'ol';
import { FullScreen, defaults as defaultControls } from 'ol/control';
import { Coordinate } from "ol/coordinate";
import { Polygon } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import { XYZ } from "ol/source";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style } from "ol/style";
import View from "ol/View";
import { useEffect } from "react";

export interface MapletProps {
    id: string;
    center: number[];
    zoom: number;
    coordinates: Coordinate[][];
}
export function Maplet(props: MapletProps): JSX.Element {
    const polygon = new Feature({ geometry: new Polygon(props.coordinates, "XYZ").transform('EPSG:4326', 'EPSG:3857') });

    polygon.setStyle(new Style({ stroke: new Stroke({ color: 'blue' }), fill: new Fill({ color: 'rgba(0,0,255, 0.1)' }) }));

    const source = new VectorSource({});
    source.addFeature(polygon);
    const initalFeaturesLayer = new VectorLayer({
        source: source
    });
    useEffect(() => {
        console.log(props);

        // create map
        const initialMap = new Map({
            target: props.id,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: "https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3857/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT_CBCT_GEOM_3857/default/default028mm/{z}/{y}/{x}.jpg"
                    })
                })
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: fromLonLat(props.center),
                zoom: props.zoom
            }),
            controls: defaultControls().extend([new FullScreen()])
        });
        initialMap.addLayer(initalFeaturesLayer);
    }, []);

    return (
        <div id={props.id} className="leaflet-container"></div>
    )
}