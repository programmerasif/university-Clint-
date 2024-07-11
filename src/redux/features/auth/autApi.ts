import { baseApi } from "../../api/baseapi";

const autApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {useLoginMutation} = autApi