import { FC } from "react";
import TableRow from "./TableRow";
import cn from "./table.module.scss"

interface IHeader{
    layout?: string
}

const TableHeader: FC<IHeader> = (props) => {
    return <TableRow className={cn.header} layout={props.layout} items={["Тип","Время","Сотрудник", "Звонок", "Источник", "Оценка", "Длительность"]} />
}

export default TableHeader