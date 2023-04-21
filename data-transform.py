import pandas

data = pandas.read_csv("/Users/asya/Downloads/web-development/projects/horror-api/movies.csv")

data['year'] = data['title'].str[-5:-1]

data.to_csv("/Users/asya/Downloads/web-development/projects/horror-api/movies_new.csv")