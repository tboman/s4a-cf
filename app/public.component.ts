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
    p1: "Science for Africa is a non-profit organization based in New York City, with the mission to empower African scientists through research capacity-building. The Science for Africa initiative seeks to promote the scientific research enterprise in sub-Saharan Africa through the identification of adequate research collaborators, as well as through mentorship schemes.",
    p2: "The collaboration framework is exposed through this site, providing tools for researchers across the world to collaborate and share ideas, propose or request virtual lectures, offer assistance with grant and scientific writing,s and offer/request scientific or technical equipment.",
    p3: "This framework allows academic and private sector scientists and engineers to sign up, free of charge, to identify, initiate, and pursue productive and mutually beneficial collaborations linking the scientific communities in North America and Europe with peers in sub- Saharan Africa. The system matches requests and offers, based on scientific sub-specialty and type of collaboration.",
    p4: "With this platform, scientists may also share additional needs, resources, and offers."
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
