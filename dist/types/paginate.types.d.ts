export interface Paginated<T> {
    meta: Meta;
    data: T[];
    links: Links;
}
export interface PaginateQuery {
    page?: number;
    limit?: number;
    orderBy?: OrderBy;
    where?: Where;
}
export type Meta = {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    orderBy?: OrderBy;
    where?: Where;
};
export type Links = {
    first?: string;
    previous?: string;
    current: string;
    next?: string;
    last?: string;
};
export type OrderBy = OrderByClause[];
export type OrderByClause = [string, Order];
export type Order = "ASC" | "DESC";
export type Where = WhereClause[];
export type WhereClause = [string, string];
