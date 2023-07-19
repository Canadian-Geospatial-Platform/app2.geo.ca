import Header from "../header/header";
import { Map } from "./main-map";

export function RenderMap(): JSX.Element {
    return (
        <>
            <Header />
            <div className="mapPage">
                <div className="mapContainer">
                    <Map />
                </div>
            </div>
        </>
    );
}
