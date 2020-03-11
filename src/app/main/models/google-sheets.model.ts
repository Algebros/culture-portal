export interface SheetsResponse {
  sheets: SheetProps[];
}

interface SheetProps {
  properties: {
    title: string;
  };
}

export interface RangeResponse {
  range: string;
  values: string[][];
}
