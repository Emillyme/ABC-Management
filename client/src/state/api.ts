// Esse código configura uma API slice usando a função createApi do Redux Toolkit. Essa função permite criar endpoints para realizar chamadas HTTP e gerenciar o estado dos dados de forma eficiente. A API slice funciona com o Redux para facilitar a comunicação entre o front-end e um servidor, como quando você deseja buscar ou enviar dados para uma API.

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }), // linkado com o localhost 8000
    reducerPath: "api",
    tagTypes: [],
    endpoints: (/*build*/) => ({}),
});

export const {} = api;