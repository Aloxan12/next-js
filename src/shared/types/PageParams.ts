export interface PageParams {
    params: Promise<Record<string, any>>;
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}