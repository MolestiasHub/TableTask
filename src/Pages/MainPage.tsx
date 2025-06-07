import { FC, useEffect, useMemo, useState } from "react";
import result from "@/result.json";
import Paginator from "@/Components/Paginator/";
import Table from "@/Components/Table";
import cn from "./app.module.scss";
import dataMapper from "@/Components/Table/DataProcessors/dataMapper";

const MainPage: FC = () => {
  const [results, setResults] = useState<typeof result.result>();
  const [paginatorData, setPaginatorData] = useState("");

  useEffect(() => {
    if (paginatorData)
      fetch(`https://api.skilla.ru/mango/getList?${paginatorData}`, {
        method: "POST",
        headers: new Headers({
          Authorization: "Bearer testtoken",
        }),
      }).then((i) => i.json().then(({ results }) => setResults(results)));
  }, [paginatorData]);

  const mem = useMemo(() => {
    if (results) return dataMapper(results);
    return [];
  }, [results]);

  return (
    <div className={cn.root}>
      <Paginator setPaginatorData={setPaginatorData} />
      {results && (
        <Table layout="54px 88px 129px 325px 214px 160px auto" items={mem} />
      )}
    </div>
  );
};

export default MainPage;
