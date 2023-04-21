import pandas

data = pandas.read_csv("movies.csv")

data['year'] = data['title'].str[-5:-1]

data.to_csv("movies_new.csv")