import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatTable,
  MatTableDataSource,
  Sort
} from "@angular/material";
import { CacheService } from "../../../services/cache.service";
import * as firebase from "firebase/app";

export class Score {
  key: string;
  en_us_title: string;
  fr_fr_title: string;
}

@Component({
  selector: "interests",
  templateUrl: "./interests.component.html",
  styleUrls: ["./interests.component.css"]
})
export class InterestsComponent implements OnInit {
  interests;

  scoreboard: Score[] = [
  ];

  columns = ["key", "en_us_title", "fr_fr_title"];
  dataSource: MatTableDataSource<Score>;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cacheService: CacheService) {
    this.interests = cacheService.getInterestsRaw();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.interests);
    this.dataSource.paginator = this.paginator;
  }

  removeAll() {
    this.dataSource.data = [];
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);

    this.dataSource.data = data;
  }

  reset() {
    this.dataSource.data = this.scoreboard.slice();
    this.table.renderRows();
  }

  sortData(sort: Sort) {
    if (sort.active && sort.direction !== "") {
      this.dataSource.data = this.dataSource.data.sort((a, b) => {
        const isAsc = sort.direction === "asc";
        switch (sort.active) {
          case "key":
            return this.compare(a.key, b.key, isAsc);
          case "fr_fr_title":
            return this.compare(a.fr_fr_title, b.fr_fr_title, isAsc);
          case "en_us_title":
            return this.compare(a.en_us_title, b.en_us_title, isAsc);
          default:
            return 0;
        }
      });
    }
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
