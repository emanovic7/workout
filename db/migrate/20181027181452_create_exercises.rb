class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :category
      t.string :description
      t.string :muscle

      t.timestamps
    end
  end
end
