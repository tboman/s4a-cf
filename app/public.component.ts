import { Component, OnInit } from "@angular/core";
import { CacheService } from "../services/cache.service";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.css"]
})
export class PublicComponent implements OnInit {
  mainsummary: {
    header: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  } = {
    header: "Science for Africa",
    p1: ".",
    p2: ".",
    p3: ".",
    p4: "."
  };

  constructor(private cacheService: CacheService) {
  }

  ngOnInit() {
    var mainsummary = this.cacheService.getArticle("mainsummary");
    if (mainsummary) {
      this.mainsummary = mainsummary;
    }
  }
}
