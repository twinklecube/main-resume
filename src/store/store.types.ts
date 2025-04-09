import {Dispatch, SetStateAction} from "react";

export type LeftColumnSection = {
    page: number;
    order: number;
    title: string;
    startParagraph?: Array<string>;
    list?: Array<Array<string>>;
    endParagraph?: Array<string>;
}

export type RightColumnSectionCategory = 'project' | 'experience';

export type IconContentType = 'architecture-diagram' | 'npm-repo' | 'github-repo';

export type IconContent = {
    text?: string;
    link?: string;
    type: IconContentType
};

export type RightColumnSection = {
    page: number;
    order: number;
    category: RightColumnSectionCategory;
    titleText?: string,
    titleAnchor?: string,
    textParagraphs: Array<string>,
    keywordParagraphs?: Array<string>,
    iconContents?: Array<IconContent>
}

export type InitValue = {
    leftColumn: Array<LeftColumnSection>,
    rightColumn: Array<RightColumnSection>
}

export type AppContextType = {
    value: InitValue;
    setValue: Dispatch<SetStateAction<InitValue>>
}
