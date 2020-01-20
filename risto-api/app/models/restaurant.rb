class Restaurant < ApplicationRecord

    def self.search(movie)
        url = "https://api.themoviedb.org/3/search/movie?api_key=c45be98a3e375a031f8dda83cfc52f39&language=en-US&query=#{movie}&page=1&include_adult=false"
        resp = RestClient.get(url)
        # byebug
        movies_hash = JSON(resp.body)
        movies_hash
    end
end
