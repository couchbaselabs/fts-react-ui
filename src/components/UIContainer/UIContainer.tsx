import React from "react";
import { ILeafNode, INodeType, IUIJson, nodeTypeList, operatorList } from "../../utils/searchStructureTypes";
import { LeafQueryContainer } from "../LeafQueryContainer/LeafQueryContainer";
import "./UIContainer.scss";

export const UIContainer = ({ elementData }: { elementData?: IUIJson }) => {

  const [elements, setElements] = React.useState<IUIJson>(
    elementData
      ? elementData
      : {
          nodes: [],
        }
  );

  const [operator, setOperator] = React.useState<string | undefined>(undefined);
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);

  React.useEffect(()=>{
    console.log(elements)
  },[elements])

  const onPlusButtonClick = () => {
    // create a dropdown with the options of "GROUP" and "LEAF"
    setShowDropdown(!showDropdown);
  }

  const onOperatorButtonClick = (operator: operatorList) => {
    setOperator(operator);
    setElements((prevElements) => ({
      ...prevElements,
      operator: operator,
    }));
  }

  const addNode = (nodeType: nodeTypeList) => {
    if(!operator){
      setOperator("AND"); // Set Default Value For Operator as AND
    }
    if (nodeType === "leaf") {
      setElements((prevElements) => ({
        ...prevElements,
        nodes: [
          ...prevElements.nodes,
          {
            nodeType: "leaf",
            node: {
              field: "",
            },
          },
        ],
      }));
    } else if (nodeType === "group"){
      setElements((prevElements) => ({
        ...prevElements,
        nodes: [
          ...prevElements.nodes,
          {
            nodeType: "group",
            node: {
              operator: undefined,
              nodes: [],
            },
          },
        ],
      }));
    }
  }


  return (
    <div>
      <div className="add-field-container">
        <button onClick={()=>onOperatorButtonClick("AND")}>AND</button>
        <button onClick={()=>onOperatorButtonClick("OR")}>OR</button>
        <button onClick={onPlusButtonClick}>+</button>
        {showDropdown && (
        <div>
          <button onClick={() => {addNode("group")}}>GROUP</button>
          <button onClick={() => {addNode("leaf")}}>LEAF</button>
        </div>
      )}
      </div>
      <div className="elements-container">
        {elements.nodes.map((element: INodeType, index: number) => {
          if (element.nodeType === "leaf") {
            return <div key={index} className="leaf-containers"> <div className="indent-line" ></div><LeafQueryContainer leafElementData={element.node as ILeafNode}/></div>
          } else if (element.nodeType === "group") {
             return <div key={index} className="leaf-containers"> <div className="indent-line" ></div><UIContainer elementData={element.node as IUIJson}/></div>
          }

          return <></>

        })}
      </div>
    </div>
  );
};
