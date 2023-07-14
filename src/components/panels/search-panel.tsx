import { Typography } from "@mui/material";
import GeoSearch from "../search/geosearch";
export interface SearchPanelProps {
  ksonly: boolean;
}
export default function SearchPanel(props: SearchPanelProps): JSX.Element {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Typography variant="body2" color="textSecondary" component="div">
        {GeoSearch(
          true,
          props.ksonly,
          () => {},
          () => {},
          ""
        )}
      </Typography>
    </div>
  );
}
