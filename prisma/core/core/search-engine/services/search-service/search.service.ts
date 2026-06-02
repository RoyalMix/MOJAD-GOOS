import { SearchEngine } from "../../core/search-engine/search.engine";

const search = new SearchEngine();

export class SearchService {

find(query:string){

return search.search(query);

}

}
