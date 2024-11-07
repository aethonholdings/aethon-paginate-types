# aethon-paginate-types

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
        where?: Where;          // [[string, string, string]], with the first string is a field name, the second a comparison operator and the third one the value 
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

## Pagination query schema
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