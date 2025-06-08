import { FC, useEffect, useMemo, useState } from "react";
import result from "@/result.json";
import Paginator from "@/Components/Paginator/";
import Table from "@/Components/Table";
import cn from "./app.module.scss";
import dataMapper from "@/Components/Table/DataProcessors/dataMapper";
import useOpenClose from "@/hooks/useOpenClose";

const MainPage: FC = () => {
  const [results, setResults] = useState<typeof result.result>();
  const [isLoading, start, finish] = useOpenClose();
  const [paginatorData, setPaginatorData] = useState("");
  const [sortData, setSortData] = useState("");

  useEffect(() => {
    start();
    if (paginatorData && sortData)
      fetch(
        `https://api.skilla.ru/mango/getList${paginatorData}${sortData}&limit=150`,
        {
          method: "POST",
          headers: new Headers({
            Authorization: "Bearer testtoken",
          }),
        }
      )
        .then((i) => i.json().then(({ results }) => setResults(results)))
        .finally(() => {
          finish();
        });
  }, [paginatorData, sortData]);

  const mem = useMemo(() => {
    if (results) return dataMapper(results);
    return [];
  }, [results]);

  return (
    <div className={cn.root}>
      <Paginator setPaginatorData={setPaginatorData} />
      <Table
        isLoading={results && isLoading}
        setSort={setSortData}
        layout="54px 88px 129px 325px 197px 146px auto"
        items={mem}
      />
    </div>
  );
};

export default MainPage;
