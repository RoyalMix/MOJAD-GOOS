if(event.type === "MARKETPLACE_SEARCH"){

return {
action:"RUN_MARKETPLACE_ENGINE"
};

}
if(event.type === "GRAPH_QUERY"){

return {
action:"RUN_GRAPH_ENGINE"
};

}
