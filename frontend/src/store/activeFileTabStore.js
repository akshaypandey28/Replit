import {create} from 'zustand';

export const useActiveFileTabStore = create((set) => {
    return {
        activeFileTab:null,
        setActiveFileTab:(path,value) => { //path is the file path and value is the name of the file to be shown in the active file tab 
            set({
                activeFileTab:{
                    path:path, 
                    value:value,
                    extension:extension
                }
            })
        }
    }
})