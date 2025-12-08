export interface PageParams {
    // params: Record<string, any>;
    searchParams: Promise <{
        [key: string]: string | string[] | undefined
    }>
}