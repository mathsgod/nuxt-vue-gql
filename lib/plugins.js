import axios from "axios"
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

class API {
    constructor(axios) {
        this.axios = axios;
    }

    query(query) {
        return this.axios.get("",query);
    }
}


export default ({ app }, inject) => {
    const moduleOptions = <%= serialize(options) %>;

    let ent = Object.entries(moduleOptions);
    for (let e of ent) {
        let a = axios.create(e[1]);
        inject(e[0], new API(a));
    }

}