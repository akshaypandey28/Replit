import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { VscFolder, VscFolderOpened, VscFile } from "react-icons/vsc";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";

export const TreeNode = ({ fileFolderData }) => {

    const [visibility, setVisibility] = useState({});

    function toggleVisibility(name){
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        })
    }

    function computeExtension(fileFolderData){
        const names = fileFolderData.name.split(".");
        return names[names.length-1];
    }

    useEffect( () =>{
        console.log('visibility changed' , visibility);
    },[visibility])
    return (
        fileFolderData && (
            <div
                style={{
                    paddingLeft: "8px",
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "13px",
                    color: "#cccccc",
                    lineHeight: "20px"
                }}
            >
                {fileFolderData.children ? /* if the current node is a folder  */(
                    /* if the current node is a folder , render it as a button , here div is used 
                    in place of button */
                    <div
                        onClick={() => toggleVisibility(fileFolderData.name)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "2px 6px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            userSelect: "none",
                            transition: "background 0.15s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a2d2e"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                        <span style={{ display: "flex", alignItems: "center", width: "12px" }}>
                            {visibility[fileFolderData.name] ? 
                                <IoIosArrowDown size={12}/> : 
                                <IoIosArrowForward size={12}/>
                            }
                        </span>

                        {visibility[fileFolderData.name] ? 
                            <VscFolderOpened size={16} color="#dcb67a"/> : 
                            <VscFolder size={16} color="#dcb67a"/>
                        }

                        <span style={{ marginLeft: "2px" }}>{fileFolderData.name}</span>
                    </div>
                ) : (
                    /* if the current node is not a folder render it as a file*/
                <div
                    style={{
                        display:"flex",
                        alignItems:"center",
                        gap: "4px",
                        padding: "2px 6px 2px 22px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        userSelect: "none",
                        transition: "background 0.15s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a2d2e"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                >
                        <FileIcon extension={computeExtension(fileFolderData)}/>
                        <span style={{ marginLeft: "2px" }}>{fileFolderData.name}</span>
                </div>
                )}

                {visibility[fileFolderData.name] && fileFolderData.children && (
                    <div style={{ marginLeft: "12px" }}>
                        {fileFolderData.children.map((child) => (
                            <TreeNode 
                                key={child.name} 
                                fileFolderData={child} 
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    );
};