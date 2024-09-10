Query = gql`query ($id: ID!) {
  workout (id: $id) {
    id
    WorkoutExercises {
      id
      Sets {
        id
        completed
      }
    }
  }
}`;


QuerySetAdd = gql`mutation ($id: ID!, $input: WorkoutExerciseSetInput!) {
  createWorkoutExerciseSet(WorkoutExerciseId: $id, WorkoutExerciseSetInput: $input) {
    id
    completed
  }
}`;
