import {Wrapper} from "./App.styles.ts";
import Page from "../page/Page.tsx";
import PageOne from "../page-one/PageOne.tsx";

const App = () => {
    return (
        <Wrapper>
            <PageOne />
            {/*<Page>sd</Page>*/}
        </Wrapper>
    );
};

export default App;
