import ReactDOM from "react-dom";

import * as serviceWorker from "./util/serviceWorker";

import ApolloProvider from "./util/ApolloProvider";

ReactDOM.render(ApolloProvider, document.getElementById("root"));

serviceWorker.unregister();
