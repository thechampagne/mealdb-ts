/*
 * Copyright 2022 XXIV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_URL = "https://themealdb.com/api/json/v1/1/";

export class MealDBException extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Search meal by name.
 *
 * @param  {string} s Meal name
 * @return            List of objects
 * @throws MealDBException on failure
 */
export async function search(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}search.php?s=${encodeURI(s)}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Search meals by first letter.
 *
 * @param  {string} s Meal letter
 * @return            List of objects
 * @throws MealDBException on failure
 */
export async function searchByLetter(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}search.php?f=${s}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Search meal details by id.
 *
 * @param  {number} i Meal id.
 * @return            object
 * @throws MealDBException on failure
 */
export async function searchByID(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}lookup.php?i=${i}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Search a random meal.
 *
 * @return      random meal
 * @throws MealDBException on failure
 */
export async function random(): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}random.php`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * List the meals categories.
 *
 * @return     List of objects
 * @throws MealDBException on failure
 */
 export async function mealCategories(): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}categories.php`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.categories != null &&
        typeof data.categories !== "undefined" &&
        data.categories != ""
      ) {
        return data.categories;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Filter by ingredient.
 *
 * @param  {string} s Ingredient name.
 * @return            List of objects
 * @throws MealDBException on failure
 */
export async function filterByIngredient(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?i=${encodeURI(s)}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Filter by area.
 *
 * @param  {string} s area.
 * @return            List of objects
 * @throws MealDBException on failure
 */
export async function filterByArea(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?a=${encodeURI(s)}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * Filter by category.
 *
 * @param  {string} s Category name.
 * @return            List of objects
 * @throws MealDBException on failure
 */
export async function filterByCategory(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}filter.php?c=${encodeURI(s)}`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * List the categories filter.
 *
 * @return   List of categories
 * @throws MealDBException on failure
 */
export async function categoriesFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?c=list`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        let dataList: Array<string> = [];
        data.meals.forEach((filter: any) => {
          dataList.push(filter.strCategory);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * List the ingredients filter.
 *
 * @return   List of ingredients
 * @throws MealDBException on failure
 */
export async function ingredientsFilter(): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?i=list`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        return data.meals;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}

/**
 * List the area filter.
 *
 * @return   List of area filters
 * @throws MealDBException on failure
 */
export async function areaFilter(): Promise<Array<string>> {
  try {
    let req = await fetch(`${BASE_URL}list.php?a=list`);
    let response = await req.text()
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.meals != null &&
        typeof data.meals !== "undefined" &&
        data.meals != ""
      ) {
        let dataList: Array<string> = [];
        data.meals.forEach((filter: any) => {
          dataList.push(filter.strArea);
        });
        return dataList;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new MealDBException(err);
  }
}