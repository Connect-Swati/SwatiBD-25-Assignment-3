let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let cors = require("cors");
app.use(cors());

let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "Mid-Range",
    rating: 3.7,
    reviews: 1040,
    amenity: "Free WiFi",
    price: 4523,
    country: "India",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "Mid-Range",
    rating: 3.5,
    reviews: 300,
    amenity: "Parking",
    price: 8543,
    country: "Australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "Boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "Gym",
    price: 11894,
    country: "South Africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "Resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "Spa",
    price: 17560,
    country: "India",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "Family",
    rating: 2.4,
    reviews: 528,
    amenity: "Restaurant",
    price: 3124,
    country: "Germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "Mid-Range",
    rating: 3.9,
    reviews: 1401,
    amenity: "Free WiFi",
    price: 9245,
    country: "France",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "Luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "Pool",
    price: 14567,
    country: "USA",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "Budget",
    rating: 3.3,
    reviews: 783,
    amenity: "Spa",
    price: 7432,
    country: "United Kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "Boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "Bar",
    price: 9823,
    country: "Australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "Luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "Bar",
    price: 18900,
    country: "South Africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "Mid-Range",
    rating: 4.7,
    reviews: 789,
    amenity: "Gym",
    price: 16340,
    country: "France",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "Family",
    rating: 3.2,
    reviews: 1322,
    amenity: "Pool",
    price: 7500,
    country: "Germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "Luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "Spa",
    price: 14900,
    country: "United Kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "Budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "Parking",
    price: 6234,
    country: "Australia",
  },
];

/*
create some APIs to display hotels based on the following filters:

Category

Mid-Range

Family

Luxury

Boutique

Resort

Budget

Amenity

Spa

Bar

Pool

Restaurant

Gym

Pet Friendly

Parking

Free WiFi

Country

France

USA

India

Germany

United Kingdom

Australia

South Africa

Also, sort the result of hotels on:

Pricing

Ratings

Reviews

So, we need to use our Sorting and Filtering methods to display the hotels based on the user choices.

Instructions

Make sure to return the results of all endpoints in the format

res.json({ hotels: result });

Where result is the variable name used to store the results
*/

/*
one fucntoin for all type of sorting

Get the hotels sorted by pricing
Get the hotels sorted based on their Ratings
Get the Hotels sorted based on their Reviews
*/

/**
 self study

 two general ways to call the sort function in JavaScript: using a named comparator function and using an inline comparator function (an arrow function).
 1. Using a Named Comparator Function
 In this approach, you define the comparator function separately and then pass it to the sort method.
 // Named comparator function for ascending order
 function ascendingComparator(a, b) {
   return a - b;
 }
 // Using the named comparator function
 numbers.sort(ascendingComparator);
 2. Using an Inline Comparator Function (Arrow Function)
 In this approach, you define the comparator function inline using an arrow function.
 // Using an inline comparator function for ascending order
 numbers.sort((a, b) => a - b);

 
 */
function sortHotels(hotels, sortBy, sortOrder) {
  return hotels.sort((a, b) => {
    if (sortBy === "price") {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    } else if (sortBy === "rating") {
      if (sortOrder === "low-to-high") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    } else if (sortBy === "reviews") {
      if (sortOrder === "least-to-most") {
        return a.reviews - b.reviews;
      } else {
        return b.reviews - a.reviews;
      }
    }
  });
}

/*
Endpoint 1: Get the hotels sorted by pricing

Write an Express code snippet to sort the hotels based on the pricing low-to-high or high-to-low.

Instructions:

Define an endpoint /hotels/sort/pricing using the get method.

Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/pricing?pricing=low-to-high>

Expected Output:


JSON of sorted hotels low-to-high or high-to-low.
*/

app.get("/hotels/sort/pricing", (req, res) => {
  let pricing = req.query.pricing.toLowerCase();
  let hotelsCopy = hotels.slice();
  let sortedHotels = sortHotels(hotelsCopy, "price", pricing);
  res.json({ hotels: sortedHotels });
});

/*
Endpoint 2: Get the hotels sorted based on their Ratings

Write an Express code snippet to sort hotels based on their individual ratings.

Instructions:

Define an endpoint /hotels/sort/rating using the get method.

Define a variable rating to create a condition to sort the hotels based on their rating (high-to-low or low-to-high)

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/rating?rating=low-to-high>

Expected Output:


JSON of sorted hotels on ratings (High to Low or Low to High)

*/
app.get("/hotels/sort/rating", (req, res) => {
  let rating = req.query.rating.toLowerCase();
  let hotelsCopy = hotels.slice();
  let sortedHotels = sortHotels(hotelsCopy, "rating", rating);
  res.json({ hotels: sortedHotels });
});

/*
Endpoint 3: Get the Hotels sorted based on their Reviews

Write an Express code snippet to hotels based on their reviews.

Instructions:

Define an endpoint /hotels/sort/reviews using the get method.

Define a variable reviews to create a condition to sort the hotels “least-to-most” or “most-to-least”.

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/reviews?reviews=least-to-most>

Expected Output:


JSON of sorted hotels from 'least-to-most' or 'most-to-least'.
*/
app.get("/hotels/sort/reviews", (req, res) => {
  let reviews = req.query.reviews.toLowerCase();
  let hotelsCopy = hotels.slice();
  let sortedHotels = sortHotels(hotelsCopy, "reviews", reviews);
  res.json({ hotels: sortedHotels });
});

/*
filter fucntion for these :

 1 ) 
 Filter the hotels based on the Hotel Amenity
 Write an Express code snippet to filter hotels based on the following hotel amenities:
 Implement a function filterByAmenity that returns the hotels of the selected amenity.

 Spa

 Bar

 Pool

 Restaurant

 Gym

 Pet Friendly

 Parking

 Free WiFi
 
 2)
 Filter the hotels based on the selected Country
 filter hotels based on the selected country:
 Implement a function filterByCountry that returns the hotels if it meets the selected country criteria.

 France

 USA

 India

 Germany

 United Kingdom

 Australia

 South Africa
 
3 )
Filter the hotels based on the selected Category

 Write an Express code snippet to filter hotels based on the selected category:
 Implement a function filterByCategory that returns the hotels if it meets the selected category criteria.

 Mid-Range

 Family

 Luxury

 Boutique

 Resort

 Budget
 */

function filterHotelsByAmenity(hotelsObj, filterValue) {
  return hotelsObj.amenity.toLowerCase() === filterValue;
}
function filterHotelsByCountry(hotelsObj, filterValue) {
  return hotelsObj.country.toLowerCase() === filterValue;
}
function filterHotelsByCategory(hotelsObj, filterValue) {
  return hotelsObj.category.toLowerCase() === filterValue;
}

/*
Endpoint 4: Filter the hotels based on the Hotel Amenity

Write an Express code snippet to filter hotels based on the following hotel amenities:

Spa

Bar

Pool

Restaurant

Gym

Pet Friendly

Parking

Free WiFi

Instructions:

Define an endpoint /hotels/filter/amenity using the get method.

Implement a function filterByAmenity that returns the hotels of the selected amenity.

Send the filtered hotels as a JSON response.

*/
app.get("/hotels/filter/amenity", (req, res) => {
  let filterValue = req.query.amenity.toLowerCase();

  let filteredHotels = hotels.filter((hotelObj) =>
    filterHotelsByAmenity(hotelObj, filterValue),
  );
  res.json({ hotels: filteredHotels });
});

/*
Endpoint 5: Filter the hotels based on the selected Country

Write an Express code snippet to filter hotels based on the selected country:

France

USA

India

Germany

United Kingdom

Australia

South Africa

Note: Try converting the amenity name into LowerCase.

Instructions:

Define an endpoint /hotels/filter/country using the get method.

Implement a function filterByCountry that returns the hotels if it meets the selected country criteria.

Send the filtered hotels as a JSON response.
*/
app.get("/hotels/filter/country", (req, res) => {
  let filterValue = req.query.country.toLowerCase();
  let filteredHotels = hotels.filter((hotelObj) =>
    filterHotelsByCountry(hotelObj, filterValue),
  );
  res.json({ hotels: filteredHotels });
});

/*
ndpoint 6: Filter the hotels based on the selected Category

Write an Express code snippet to filter hotels based on the selected category:

Mid-Range

Family

Luxury

Boutique

Resort

Budget

Instructions:

Define an endpoint /hotels/filter/category using the get method.

Implement a function filterByCategory that returns the hotels if it meets the selected category criteria.

Send the filtered hotels as a JSON response.
*/
app.get("/hotels/filter/category", (req, res) => {
  let filterValue = req.query.category.toLowerCase();
  let filteredHotels = hotels.filter((hotelObj) =>
    filterHotelsByCategory(hotelObj, filterValue),
  );
  res.json({ hotels: filteredHotels });
});

/*
Endpoint 7: Send all hotels

Write an Express code snippet to send all hotels

Instructions:

Define an endpoint /hotels using the get method.

Send all the hotels as a JSON response.
*/
app.get("/hotels", (req, res) => {
  res.json({ hotels: hotels });
});
