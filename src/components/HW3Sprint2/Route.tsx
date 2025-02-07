import { UpdateItem } from "./components/UpdateItem";
import styles from "./Styles.module.css";
import { CheckBox } from "./components/CheckBox";
import { Button } from "./components/Button";
import { RouteType } from "./FlightTable";

type RouteProps = {
  route: RouteType;
  toggleFTIsBooked: (payload: {
    flightTableID: string;
    routeID: string;
    isBooked: boolean;
  }) => void;
  flightTableID: string;
  updateFTRoutesFrom: (payload: {
    flightTableID: string;
    routeID: string;
    newFrom: string;
  }) => void;
  updateFTRoutesTo: (payload: { flightTableID: string; routeID: string; newTo: string }) => void;
  removeFTRoute: (payload: { flightTableID: string; routeID: string }) => void;
};

export const Route = ({
  route,
  toggleFTIsBooked,
  flightTableID,
  updateFTRoutesFrom,
  updateFTRoutesTo,
  removeFTRoute,
}: RouteProps) => {
  const handleRemoveFTRoute = () => {
    removeFTRoute({ flightTableID: flightTableID, routeID: route.id });
  };

  const handleUpdateRouteFrom = (newTitle: string) => {
    updateFTRoutesFrom({ flightTableID, routeID: route.id, newFrom: newTitle });
  };

  const handleUpdateRouteTo = (newTitle: string) => {
    updateFTRoutesTo({ flightTableID, routeID: route.id, newTo: newTitle });
  };

  const handleToggleFTIsBooked = (isBooked: boolean) => {
    toggleFTIsBooked({ flightTableID: flightTableID, routeID: route.id, isBooked });
  };

  return (
    <>
      <table className={styles.ftTable}>
        <tbody>
          <tr className={styles.ftRow}>
            <td className={styles.ftCell}>
              <Button title={"X"} onClick={handleRemoveFTRoute} />
            </td>
            <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
              <UpdateItem oldTitle={route.from} callBack={handleUpdateRouteFrom} />
            </td>
            <td className={`${styles.ftCell} ${styles.pointerCursor}`}>➔</td>
            <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
              <UpdateItem oldTitle={route.to} callBack={handleUpdateRouteTo} />
            </td>
            <td className={styles.checkboxContainer}>
              <label>
                <CheckBox isBooked={route.isBooked} updateCheckBox={handleToggleFTIsBooked} />
                {route.isBooked ? " Booked" : " Available"}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
