class Addcolumnstorestaurants < ActiveRecord::Migration[6.0]
  def change
    add_column :restaurants, :opens, :string
    add_column :restaurants, :closes, :string
  end
end
