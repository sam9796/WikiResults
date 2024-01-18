type Result={
    pageid:string,
    title:string,
    extract:string,
    thumbnail?:{
        source:string,
        width:string,
        height:number,
    }
}

type SearchResult={
    query?:{
        pages?:Result[],
    }
}