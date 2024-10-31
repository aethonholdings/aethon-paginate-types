# aethon-nestjs-paginate

## Description

Type definitions for `aethon-nestjs-paginate`, allowing for consistency across client and server.  Import this package for processing requests and responses in a type-safe way, without having all the dependencies of `aethon-nestjs-paginate`.

## Pagination schema

```
export class Paginated<T> {
    meta: {
        itemsPerPage: number;
        totalItems: number;
        currentPage: number;
        totalPages: number;
        orderBy?: OrderBy;      // [[string, "ASC" | "DESC"]]
        where?: Where;          //  [[string, string]], with the first string being a field name and the second one the value it should be equal to
    };
    data: T[];
    links: {
        first?: string;
        previous?: string;
        current: string;
        next?: string;
        last?: string;
    };
}

export type OrderBy = OrderByClause[];
export type OrderByClause = [string, Order];
export type Order = "ASC" | "DESC";

export type Where = WhereClause[];
export type WhereClause = [string, string];
```

## Pagination query scheme
```
export interface PaginateQuery {
    page?: number;
    limit?: number;
    orderBy?: OrderBy;
    where?: Where;
}
```

## Installation

`npm install -s aethon-paginate-types`