import { pingApi } from "../../apis/ping.js";

export default function usePing(){
    const {isLoading,isError,data,error} = useQuery({
        queryFn : pingApi,
        queryKey : 'ping',
        staleTime:10000
    });

    return {
        isLoading,
        isError,
        data,
        error
    }
}