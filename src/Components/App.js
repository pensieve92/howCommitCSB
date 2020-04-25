import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store.js";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        // 객체 배열의 Array[객체의 요소명] : 요소의 값이 나온다!!
        console.log(exercises[muscles]);
        console.log(exercise.muscles);
        console.log(muscles);

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    )
  }

  handleCategorySelected = catagory => {
    this.setState({
      catagory  
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {
    const exersises = this.getExercisesByMuscles(), 
    { catagory, exercise } = this.state

    console.log(exersises);
    return (
      <Fragment>
        <Header />

        <Exercises 
          exercises={exersises}
          exercise={exercise}
          catagory={catagory} 
          onSelect={this.handleExerciseSelected}
        />

        <Footer 
          catagory={catagory}
          muscles={muscles} 
          onSelect={this.handleCategorySelected} />
      </Fragment>
    );
  }
}
