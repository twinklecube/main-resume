import {Wrapper} from "./App.styles.ts";
import PageOne from "../page-one/PageOne.tsx";
import PageTwo from "../page-two/PageTwo.tsx";

const App = () => {
    return (
        <Wrapper>
            <PageOne />
            <PageTwo />
        </Wrapper>
    );
};

export default App;
