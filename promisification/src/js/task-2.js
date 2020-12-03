import { users } from './links';

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  return Promise.resolve(updatedUsers);
};

const logger = message => console.log(message);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
