class ExercisesController < ApplicationController


  def index
    @exercises = Exercise.all
    render 
  end

  def new
    @exercise = Exercise.create(exercise_params)
  end



  private

    def exercise_params
      params.require(:name).permit(:category, :equipment, :description, :muscle)
    end
end
