import {Dispatch, SetStateAction} from "react";

export type LeftColumnSection = {
    page: number;
    order: number;
    title: string;
    startParagraph?: Array<string>;
    list?: Array<Array<string>>;
    endParagraph?: Array<string>;
}

export type InitValue = {
    leftColumn: Array<LeftColumnSection>
}

export type AppContextType = {
    value: InitValue;
    setValue: Dispatch<SetStateAction<InitValue>>
}
