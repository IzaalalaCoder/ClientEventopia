import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryService } from './services/category.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CategoryPaginatedListComponent } from './components/category-paginated-list/category-paginated-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CategoryListComponent, CategoryPaginatedListComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Catify';

  search: boolean = false;
  categories: any[] = [];
  searchResponse: any = {};
  searchParams: any = {};

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((datas) => {
      this.categories = datas;
    });
  }

  searchData: any = {
    response: this.searchResponse,
    params: this.searchParams
  };

  gainedResponse(data: any) {
    this.searchResponse = data.response;
    this.searchParams = data.params;

    this.searchData = {
      response: this.searchResponse,
      params: this.searchParams
    };

    this.search = true;
  }

  updateCategories() {
    this.loadCategories();
  }

  toggleDisplaySearch() {
    this.search = false;
  }
}
