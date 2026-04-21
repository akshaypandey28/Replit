import {
    FaCss3,
    FaHtml5,
    FaJs,
    FaFileAlt,
    FaMarkdown,
    FaImage
} from "react-icons/fa";

import {
    SiTypescript,
    SiJson,
    SiSvg,
    SiGit,
    SiVite
} from "react-icons/si";

import { GrReactjs } from "react-icons/gr";

export const FileIcon = ({ extension }) => {

    const iconStyle = {
        height: "16px",
        width: "16px"
    };

    const IconMapper = {
        // JS / React
        "js": <FaJs color="#f7df1e" style={iconStyle} />,
        "jsx": <GrReactjs color="#61dbfa" style={iconStyle} />,
        "ts": <SiTypescript color="#3178c6" style={iconStyle} />,
        "tsx": <GrReactjs color="#61dbfa" style={iconStyle} />,

        // Web
        "html": <FaHtml5 color="#e34c26" style={iconStyle} />,
        "css": <FaCss3 color="#264de4" style={iconStyle} />,

        // Config
        "json": <SiJson color="#f5f5f5" style={iconStyle} />,
        "md": <FaMarkdown color="#519aba" style={iconStyle} />,

        // Images
        "png": <FaImage color="#c586c0" style={iconStyle} />,
        "jpg": <FaImage color="#c586c0" style={iconStyle} />,
        "jpeg": <FaImage color="#c586c0" style={iconStyle} />,
        "svg": <SiSvg color="#ffb13b" style={iconStyle} />,

        "gitignore": <SiGit color="#f1502f" style={iconStyle} />,
        "env": <FaFileAlt color="#6a9955" style={iconStyle} />,

        // Optional (vite configs if you treat as extension)
        "config": <SiVite color="#646cff" style={iconStyle} />,
    };

    return (
        <>
            {IconMapper[extension] || <FaFileAlt color="#888" style={iconStyle} />}
        </>
    );
};