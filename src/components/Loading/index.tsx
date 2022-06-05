import { memo } from "react";
import "./styles.css";

const Loading: React.FC = () => {
  return (
    <div className="loader">
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
    </div>
  );
};

export default memo(Loading);
