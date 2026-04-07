import {create} from 'zustand';
import { QueryClient } from '@tanstack/react-query';
import { getProjectTree } from '../apis/projects.js';

export const useTreeStructureStore = create((set,get) => {

    const queryClient = new QueryClient();
    
    return {
        projectId:null,
        treeStructure:null,
        setTreeStructure: async () =>{
            const id = get().projectId;
            const data = await queryClient.fetchQuery({
                queryKey: [`projectTree-${id}`], //query key should be unique for each project tree, so using projectId in the key
                queryFn: () => getProjectTree(id), //projectId should be passed as an argument to setTreeStructure function and then used here
            });

            console.log(data);

            set({
                treeStructure:data
            });
            
        },
        setProjectId:(projectId) => {
            set({
                projectId:projectId
            })
        }
    }
})