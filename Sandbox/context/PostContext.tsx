import React, { createContext, useReducer, useEffect, ReactNode } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

type PostAction =
  | { type: "FETCH_SUCCESS"; payload: Post[] }
  | { type: "FETCH_ERROR" };

interface PostContextValue {
  state: PostState;
}

const PostContext = createContext<PostContextValue | undefined>(undefined);

const initialState: PostState = {
  posts: [],
  loading: true,
  error: null,
};

const postReducer = (state: PostState, action: PostAction): PostState => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, posts: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: "Error fetching posts" };
    default:
      return state;
  }
};

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: Post[] = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.slice(0, 10) });
      } catch {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ state }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
