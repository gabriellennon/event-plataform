import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pmpguy28qe01z46kk91e0c/master',
    cache: new InMemoryCache()
});