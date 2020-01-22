class Restaurant < ApplicationRecord

    # def self.testing
    #     # url = "https://developers.zomato.com/api/v2.1/search?entity_id=305&entity_type=city&q=pizza"
    #     # params_hash = {params:{"User-Key": "a46eec13d7236b650b79871c2d10c914", "Accept": "application/json"}}
    #     # # request["User-Key"] = 
    #     # resp = RestClient.get(url, params_hash)
    #     # hash = JSON.parse(resp.body)

    #     url = "https://pokeapi.co/api/v2/pokemon"
    #     params_hash = {params:{limit: '100'}}
    #     resp = RestClient.get(url, params_hash)
    #     pokemon_hash = JSON.parse(resp.body)
    #     # byebug
    # end

    def self.fetch(query)
        uri = URI.parse("https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&q=#{query}")
        request = Net::HTTP::Get.new(uri)
        request["Accept"] = "application/json"
        request["User-Key"] = "a46eec13d7236b650b79871c2d10c914"
        req_options = {
            use_ssl: uri.scheme == "https",
        }
        response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
            http.request(request)
        end
        hash = JSON.parse(response.body)
        # byebug
    end


    
end
