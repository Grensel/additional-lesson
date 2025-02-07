import { Route } from "./Route";
import { Button } from "./components/Button";
import { AddNewItem } from "./components/AddNewItem";
import { UpdateItem } from "./components/UpdateItem";
import styles from "./Styles.module.css";

export type RouteType = {
  id: string;
  from: string;
  to: string;
  isBooked: boolean;
};

export type FlightProps = {
  date: string;
  flightTableID: string;
  routes: RouteType[];
  toggleFTIsBooked: (payload: {
    flightTableID: string;
    routeID: string;
    isBooked: boolean;
  }) => void;
  removeFT: (flightID: string) => void;
  updateFTDate: (payload: { flightTableID: string; newDate: string }) => void;
  updateFTRoutesFrom: (payload: {
    flightTableID: string;
    routeID: string;
    newFrom: string;
  }) => void;
  updateFTRoutesTo: (payload: { flightTableID: string; routeID: string; newTo: string }) => void;
  removeFTRoute: (payload: { flightTableID: string; routeID: string }) => void;
  addNewFTRoute: (payload: { flightTableID: string; from: string; to: string }) => void;
};

export const FlightTable = ({
  date,
  flightTableID,
  routes,
  toggleFTIsBooked,
  removeFT,
  updateFTDate,
  updateFTRoutesFrom,
  updateFTRoutesTo,
  removeFTRoute,
  addNewFTRoute,
}: FlightProps) => {
  const mappedRoutes = routes.map(route => (
    <Route
      key={route.id}
      route={route}
      toggleFTIsBooked={toggleFTIsBooked}
      flightTableID={flightTableID}
      updateFTRoutesFrom={updateFTRoutesFrom}
      updateFTRoutesTo={updateFTRoutesTo}
      removeFTRoute={removeFTRoute}
    />
  ));

  const addNewFTRouteHandler = (payload: { from: string; to: string }) => {
    const { from, to } = payload;
    addNewFTRoute({ flightTableID, from, to });
  };

  const removeFlightTableHandler = () => removeFT(flightTableID);

  const updateFTDateHandler = (newDate: string) => {
    updateFTDate({ flightTableID, newDate });
  };

  return (
    <div className={styles.ftContainer}>
      <Button title="Remove FlightTable" onClick={removeFlightTableHandler} />
      <h2 className={styles.headerFT}>FlightTable ID: </h2>
      <h2 className={styles.dateHeader}>
        Date: <UpdateItem oldTitle={date} callBack={updateFTDateHandler} />
      </h2>
      <div className={styles.addNewRouteContainer}>
        <AddNewItem
          onClick={addNewFTRouteHandler}
          flightTableID={flightTableID}
          title={"Add New Route"}
        />
      </div>
      {mappedRoutes}
    </div>
  );
};
