import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { VscFolder, VscFolderOpened, VscFile } from "react-icons/vsc";

export const TreeNode = ({ fileFolderData }) => {

    const [visibility, setVisibility] = useState({});

    function toggleVisibility(name){
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        })
    }

    return (
        fileFolderData && (
            <div
                style={{
                    paddingLeft: "10px",
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "13px",
                    color: "#cccccc",
                }}
            >
                {fileFolderData.children ? (
                    <div
                        onClick={() => toggleVisibility(fileFolderData.name)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "3px 6px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            userSelect: "none",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a2d2e"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                        {visibility[fileFolderData.name] ? 
                            <IoIosArrowDown size={12}/> : 
                            <IoIosArrowForward size={12}/>
                        }

                        {visibility[fileFolderData.name] ? 
                            <VscFolderOpened size={16} color="#dcb67a"/> : 
                            <VscFolder size={16} color="#dcb67a"/>
                        }

                        <span>{fileFolderData.name}</span>
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "3px 6px 3px 22px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2a2d2e"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                        <VscFile size={14} color="#9cdcfe" />
                        <span>{fileFolderData.name}</span>
                    </div>
                )}

                {visibility[fileFolderData.name] && fileFolderData.children && (
                    <div style={{ marginLeft: "10px" }}>
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