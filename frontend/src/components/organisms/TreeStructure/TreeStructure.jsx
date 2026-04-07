import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore.js"
import { TreeNode } from "../../molecules/Tree/TreeNode.jsx";

export const TreeStructure =() => {

    const {projectId,treeStructure,setTreeStructure} = useTreeStructureStore();

    useEffect(() => {
        if(treeStructure){
            console.log("tree:", treeStructure);
        }
        else{
            setTreeStructure(projectId)
        }
    },[treeStructure,treeStructure])


    return (
        <div>
            <h1>Tree Structure</h1>
            <TreeNode fileFolderData={treeStructure}/>
        </div>
    )
}