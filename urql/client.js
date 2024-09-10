client = new Client({
  url: URL_GQL,
  exchanges: [
    cacheExchange({
      schema: schema,
      optimistic: {
        createWorkoutExerciseSet: function(args,
    cache,
    info) {
    //       return Object.assign({
    //         id: 'temp-id' + Math.random(),
    //         __typename: 'WorkoutExerciseSet'
    //       },
    // args.WorkoutExerciseSetInput);
        },
      },
      updates: {
        Mutation: {
          // createWorkoutExerciseSet: function(result,
          //   args,
          //   cache,
          //   info) {

          // }
                    
        }
      }
    })
  ]
});