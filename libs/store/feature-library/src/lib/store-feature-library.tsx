import styles from "./store-feature-library.module.css";

/* eslint-disable-next-line */
export interface StoreFeatureLibraryProps {}

export function StoreFeatureLibrary(props: StoreFeatureLibraryProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to StoreFeatureLibrary!</h1>
    </div>
  );
}

export default StoreFeatureLibrary;
