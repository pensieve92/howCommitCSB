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
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]:[]
    }), {} )


    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        // 객체 배열의 Array[객체의 요소명] : 요소의 값이 나온다!!
        // console.log('getExerciseByMuscles')
        // console.log("exercises: ", exercises)
        // console.log("exercise: ", exercise)        
        // console.log("muscles: ", {muscles})
        // console.log("exercises[muscles]: ", exercises[muscles]) // undefined
        
        // exercises[muscles] = exercises[muscles]
        //   ? [...exercises[muscles], exercise]
        //   : [exercise]

        exercises[muscles] = [...exercises[muscles], exercise]

        // console.log("[...exercises[muscles], exercise]: ", [...exercises[muscles], exercise])
        // console.log("[exercise]: ", [exercise])

        // console.log("exercises[muscles]: ", exercises[muscles])
        // console.log("exercises: ", exercises)
        return exercises;
      }, initExercises)
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

  handleExerciseCreate = exercise => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExercisesDelete = id => {
    this.setState(({exercises}) => ({
      exercises: exercises.filter(ex => ex.id !== id )
    }))
  }
  

  render() {
    // console.log(this.getExercisesByMuscles())
    const exersises = this.getExercisesByMuscles(), 
    { catagory, exercise } = this.state    
    return (
      <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises 
          exercises={exersises}
          exercise={exercise}
          catagory={catagory} 
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExercisesDelete}
        />

        <Footer 
          catagory={catagory}
          muscles={muscles} 
          onSelect={this.handleCategorySelected} 
        />
      </Fragment>
    );
  }
}
