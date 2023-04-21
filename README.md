# Horror Movie API

## Data source

Horror movie metadata: https://github.com/rfordatascience/tidytuesday/tree/master/data/2019/2019-10-22

## Data cleaning

-   using `csvtojson` to convert the CSV file to JSON, making sure to convert numeric values cast to strings back to numbers
-   since the MongoDB schema requires the property `reviewRating` to be of type Number, the value 'NA' was converted to null
-   creating a `year` variable > originally, the year was part of the `title` (e.g. "Evil Dead (2013)")
    -   for this, the `pandas` library was used to create a new variable from a slice of the `title` variable: `data['year'] = data['title'].str[-5:-1]`
-   TODO: convert `releaseDate` to a `Date()` object
-   TODO: the `movieRunTime` property is a String at the moment (e.g. "91 mins") > remove the 'min' and convert to Number
-   TODO: deal with the `cast` variable (at the moment a String with the names separated by '|')
-   TODO: make the `budget` variable a Number (remove currency symbols)
