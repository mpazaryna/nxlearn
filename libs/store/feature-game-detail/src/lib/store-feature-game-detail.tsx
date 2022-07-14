import React from "react";
//import { RouteComponentProps } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./store-feature-game-detail.module.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type TParams = { id: string };

/* eslint-disable-next-line */
//export interface StoreFeatureGameDetailProps
//extends RouteComponentProps<TParams> {}

export const StoreFeatureGameDetail = () => {
  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello World
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StoreFeatureGameDetail;
