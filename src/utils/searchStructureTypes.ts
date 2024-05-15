export interface IMatchSearchType {
    fuzziness?: string;
    boost?: number;
    prefixLength?: number;
    analyzer?: string;
  }
  
  export interface IGeoSearchType {
    distance?: string;
    distanceType?: string;
    latitude?: string;
    longitude?: string;
  
  }
  
  export interface ILeafNode {
    field?: string;
    fieldType?: string;
    searchType?: string;
    value?: string;
    matchSearchType?: IMatchSearchType;
    geoSearchType?: IGeoSearchType;
  }
  
  export type operatorList = "AND" | "OR" | "NOT";
  export type nodeTypeList = "leaf" | "group" | "vector";
  export interface INodeType {
    nodeType: nodeTypeList;
    node: ILeafNode | IUIJson;
  }
  
  // explain the below code
  export interface IUIJson {
    operator?: operatorList;
    nodes: INodeType[];
  }