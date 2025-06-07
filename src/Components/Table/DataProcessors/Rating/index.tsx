import { FC, useMemo } from "react";
import cn from "./rating.module.scss"
const Rating: FC<{error?: string}> = ({error}) => {
  const rating = useMemo(() => Math.floor(Math.random() * 10), []);
  if(error) return <div className={cn.error}>{error}</div>
  if (rating < 4) {
    return <div className={cn["rating--bad"]}>Плохо</div>;
  } else if (rating < 7) {
    return <div className={cn["rating--normal"]}>Хорошо</div>;
  } else {
    return <div className={cn["rating--perfect"]}>Отлично</div>;
  }
};

export default Rating;
