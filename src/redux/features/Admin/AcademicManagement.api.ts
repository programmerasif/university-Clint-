import { TAcademicSemester } from "../../../types/AcademicManagement.type";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseapi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
                query: (args) => {
                  console.log(args);
                  const params = new URLSearchParams();
          
                  if (args) {
                    args.forEach((item: TQueryParam) => {
                      params.append(item.name, item.value as string);
                    });
                  }
          
                  return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params,
                  };
                },
                transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                  return {
                    data: response.data,
                    meta: response.meta,
                  };
                },
              }),
        addAcademicSemester: builder.mutation({
                query: (data) => ({
                  url: '/academic-semesters/create-academic-semester',
                  method: 'POST',
                  body: data,
                }),
                transformResponse:(response:TResponseRedux<TAcademicSemester>) => {

                  return{
                    data : response?.data,
                    meta:response?.meta
                  }
                }
              }),
      }),
})
export const {useGetAllSemestersQuery,useAddAcademicSemesterMutation} = academicManagementApi
// import { baseApi } from "../../api/baseapi";

// const academicManagementApi =  baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllSemesters: builder.query({
//       query: (args) => {
//         console.log(args);
//         const params = new URLSearchParams();

//         if (args) {
//           args.forEach((item: TQueryParam) => {
//             params.append(item.name, item.value as string);
//           });
//         }

//         return {
//           url: '/academic-semesters',
//           method: 'GET',
//           params: params,
//         };
//       },
//       transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
//         return {
//           data: response.data,
//           meta: response.meta,
//         };
//       },
//     }),
//     addAcademicSemester: builder.mutation({
//       query: (data) => ({
//         url: '/academic-semesters/create-academic-semester',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation } = academicManagementApi