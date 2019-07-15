import { normalize, schema } from 'normalizr';


const task = new schema.Entity('tasks');

const list = new schema.Entity('lists', {
    tasks: [task]
});

const board = new schema.Entity('boards', {
    lists: [list]
})

const state = new schema.Entity('state', {
    boards: [board]
})

const normalizeData = (originalData) => {
  let normalizedData = normalize(originalData, state);

  return {
    tasks: normalizedData.entities.tasks,
    lists: normalizedData.entities.lists,
    boards: normalizedData.entities.boards
  }
}


/*
const denormalizeData = (originalData) => {
  return normalize(originalData, state);
}*/

export {
  normalizeData
};
