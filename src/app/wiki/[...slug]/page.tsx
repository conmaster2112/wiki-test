import { MainView } from "@/features/MainView";
import { GetFilesTree } from "@/features/functions"

export const generateStaticParams = ()=>{
    const slugs = [];
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        if(ss.at(-1)?.endsWith(".md")){
            ss[ss.length - 1] = ss[ss.length - 1].substring(0, ss.length - 3);
            slugs.push({slug: ss});
        }
    }
    return slugs;
}
export default function generateView(params: any){
    console.warn(params.params.slug);
    return <MainView>

    </MainView> 
}