import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface RosterItem {
  name: string;
  id: number;
  rank: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: RosterItem[] = [
  { id: 1, name: 'nay', rank: 'Leader' },
  { id: 2, name: 'DannyH', rank: 'Captain' },
  { id: 3, name: 'Batman', rank: 'Captain' },
  { id: 4, name: 'STAR-LORD', rank: 'Captain' },
  { id: 5, name: 'Garf91', rank: 'Captain' },
  { id: 6, name: 'Sin', rank: 'Captain' },
  { id: 7, name: 'LynchMob87', rank: 'Captain' },
  { id: 8, name: 'Booster Gold', rank: 'Member' },
  { id: 9, name: 'Graham2056', rank: 'Member' },
  { id: 10, name: 'Retinaburn', rank: 'Member' },
  { id: 11, name: 'That1KidVic', rank: 'Member' },
  { id: 12, name: 'joseywales', rank: 'Member' },
  { id: 13, name: 'Rocketman', rank: 'Member' },
  { id: 14, name: 'valdo', rank: 'Member' },
  { id: 15, name: 'Khratos', rank: 'Member' },
  { id: 16, name: 'I\'m iron man', rank: 'Member' },
  { id: 17, name: 'GeefJay', rank: 'Member' },
  { id: 18, name: 'hristo_sevriev:)', rank: 'Member' },
  { id: 19, name: 'Bullydog', rank: 'Member' },
  { id: 20, name: 'Overwatch', rank: 'Member' },
  { id: 21, name: 'BarnabyJonez', rank: 'Member' },
  { id: 22, name: 'Gumbo', rank: 'Member' },
  { id: 23, name: 'Wedge', rank: 'Captain' },
  {id: 24, name: 'Fatman', rank: 'Member'}
];

/**
 * Data source for the Roster view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RosterDataSource extends DataSource<RosterItem> {
  data: RosterItem[] = EXAMPLE_DATA;
  public paginator: MatPaginator;
  public sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RosterItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RosterItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RosterItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'rank': return compare(a.rank, b.rank, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
