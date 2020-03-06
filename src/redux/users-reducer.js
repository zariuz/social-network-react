const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'Jeniy',
      status: 'I am a boss',
      location: { city: 'SPb', country: 'Russia' }
    },
    {
      id: 2,
      followed: false,
      fullName: 'Dimych',
      status: 'I am a boss too',
      location: { city: 'Minsk', country: 'Belarus' }
    },
    {
      id: 3,
      followed: false,
      fullName: 'Sveta',
      status: 'I am a student',
      location: { city: 'Moscow', country: 'Russia' }
    },
    {
      id: 4,
      followed: false,
      fullName: 'Sasha',
      status: 'I am a student',
      location: { city: 'Kiev', country: 'Ukraine' }
    },
    {
      id: 5,
      followed: true,
      fullName: 'Vika',
      status: 'I am a student',
      location: { city: 'SPb', country: 'Russia' }
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        //users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });

export default usersReducer;
