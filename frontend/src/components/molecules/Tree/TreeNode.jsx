import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
export const TreeNode = ({
    fileFolderData
}) => {

    const [visibility, setVisibility] = useState({});

    function toggleVisibility(name){ //name is the name of the current folder
        setVisibility({
            ...visibility,
           [name] : !visibility[name] 
        })
    }

    return (
        (fileFolderData && <div
            style={{
                paddingLeft: "15px",
                color: "white"
            }}
        >
            {fileFolderData.children ? (
                <button
                    onClick={() => toggleVisibility(fileFolderData.name)}
                    style={{
                        border: "none",
                        cursor: "pointer",
                        outline: "none",
                        color: "black",
                        //backgroundColor: "transparent",
                        padding: "15px",
                        fontSize: "16px",
                    }}
                >
                   {visibility[fileFolderData.name] ? <IoIosArrowDown /> : <IoIosArrowForward />}

                    {fileFolderData.name}
                </button>
            ) : //if there are no children, it means it's a file, so we just display the file name without the button
            (
                <p
                    style={{
                        paddingTop: "15px",
                        fontSize: "15px",
                        cursor: "pointer",
                        marginLeft:"5px",
                        color: "black"
                    }}
                >
                    {fileFolderData.name}
                </p>
            )}
            {visibility[fileFolderData.name] && fileFolderData.children && (
                fileFolderData.children.map((child) => (
                    <TreeNode 
                        key={child.name} 
                        fileFolderData={child} 
                    />
                ))
            )}
        </div>)
    )
}